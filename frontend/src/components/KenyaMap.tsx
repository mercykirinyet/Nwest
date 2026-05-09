import { useState } from "react";
import { MapPin, Phone, Building2 } from "lucide-react";

const offices = [
  { city: "Nairobi", address: "Kenya House Complex, 2nd Floor, Koinange Street", phone: "+254 728 799 167", x: 54, y: 62, isHQ: true },
  { city: "Nakuru", address: "Farming Systems Kenya Building", phone: "+254 728 799 167", x: 48, y: 55 },
  { city: "Kisii", address: "Ouru Towers", phone: "+254 722 948 032", x: 42, y: 60 },
  { city: "Migori", address: "Pinacle Centre", phone: "+254 722 948 032", x: 38, y: 63 },
  { city: "Narok", address: "Nenkai Plaza", phone: "+254 725 326 144", x: 44, y: 62 },
  { city: "Kapsabet", address: "Bargetuny Plaza", phone: "+254 722 948 032", x: 44, y: 50 },
  { city: "Embu", address: "Embu Office", phone: "+254 728 799 167", x: 58, y: 58 },
  { city: "Kericho", address: "Kericho Office", phone: "+254 728 799 167", x: 44, y: 55 },
  { city: "Mombasa", address: "Mombasa Office", phone: "+254 728 799 167", x: 62, y: 72 },
];

const KenyaMap = () => {
  const [activeOffice, setActiveOffice] = useState<string | null>("Nairobi");

  const active = offices.find((o) => o.city === activeOffice);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Map */}
      <div className="relative bg-gradient-to-br from-maroon-dark/5 to-maroon/5 border border-border rounded-2xl p-6 min-h-[420px]">
        {/* Kenya outline (simplified SVG) */}
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 p-6" style={{ minHeight: 380 }}>
          {/* Kenya simplified outline */}
          <path
            d="M35 20 L55 18 L68 22 L72 30 L70 40 L65 48 L68 55 L65 65 L62 72 L58 78 L50 82 L42 78 L35 72 L30 65 L28 55 L32 45 L30 35 L32 28 Z"
            fill="hsl(348 70% 30% / 0.08)"
            stroke="hsl(348 55% 42%)"
            strokeWidth="0.5"
            className="transition-all duration-500"
          />
          {/* Lake Victoria hint */}
          <ellipse cx="36" cy="58" rx="5" ry="6" fill="hsl(210 60% 70% / 0.3)" stroke="hsl(210 40% 60%)" strokeWidth="0.3" />

          {/* Grid lines */}
          {[30, 40, 50, 60, 70, 80].map((y) => (
            <line key={`h${y}`} x1="25" y1={y} x2="75" y2={y} stroke="hsl(348 30% 50% / 0.06)" strokeWidth="0.2" />
          ))}
          {[30, 40, 50, 60, 70].map((x) => (
            <line key={`v${x}`} x1={x} y1="15" x2={x} y2="85" stroke="hsl(348 30% 50% / 0.06)" strokeWidth="0.2" />
          ))}

          {/* Office pins */}
          {offices.map((office) => (
            <g
              key={office.city}
              className="cursor-pointer"
              onClick={() => setActiveOffice(office.city)}
              onMouseEnter={() => setActiveOffice(office.city)}
            >
              {/* Pulse ring for active */}
              {activeOffice === office.city && (
                <circle cx={office.x} cy={office.y} r="3.5" fill="none" stroke="hsl(348 70% 30%)" strokeWidth="0.4" opacity="0.5">
                  <animate attributeName="r" from="2" to="5" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                cx={office.x}
                cy={office.y}
                r={activeOffice === office.city ? 2.2 : 1.5}
                fill={office.isHQ ? "hsl(348 70% 30%)" : activeOffice === office.city ? "hsl(348 55% 42%)" : "hsl(42 78% 52%)"}
                stroke="white"
                strokeWidth="0.4"
                className="transition-all duration-300"
              />
              <text
                x={office.x}
                y={office.y - 3.5}
                textAnchor="middle"
                fontSize="2.2"
                fill={activeOffice === office.city ? "hsl(348 70% 30%)" : "hsl(220 15% 45%)"}
                fontWeight={activeOffice === office.city ? "bold" : "normal"}
                className="transition-all duration-300 select-none"
              >
                {office.city}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Office details panel */}
      <div className="space-y-3">
        <h3 className="font-display text-2xl font-bold text-foreground mb-4">Select an Office</h3>
        <div className="grid gap-2">
          {offices.map((office) => (
            <button
              key={office.city}
              onClick={() => setActiveOffice(office.city)}
              className={`flex items-start gap-3 p-3 rounded-lg border text-left transition-all duration-300 ${
                activeOffice === office.city
                  ? "bg-maroon text-white border-maroon shadow-lg scale-[1.02]"
                  : "bg-card border-border hover:border-maroon-light/40 hover:bg-maroon/5"
              }`}
            >
              <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${activeOffice === office.city ? "text-white" : "text-maroon"}`} />
              <div className="min-w-0">
                <span className={`font-display font-semibold text-sm ${activeOffice === office.city ? "text-white" : "text-foreground"}`}>
                  {office.city} {office.isHQ && <span className="text-xs font-normal opacity-70">(HQ)</span>}
                </span>
                {activeOffice === office.city && (
                  <div className="mt-1 space-y-0.5 animate-fade-in">
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      <Building2 className="w-3 h-3" /> {office.address}
                    </p>
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      <Phone className="w-3 h-3" /> {office.phone}
                    </p>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KenyaMap;
