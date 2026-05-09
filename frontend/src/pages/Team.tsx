import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

const leadership = [
  {
    name: "Gilbert K. Kibire",
    role: "Managing Partner / Head of Valuation",
    credentials: "BA (Land Econ. Hons) UoN, MISK (VEMS), RV & REA",
    bio: "Gilbert holds a First Class Honours Degree in Land Economics from the University of Nairobi. He is a Registered, Gazetted, Licensed & Practising Valuer and Estate Agent with extensive experience in the real estate sector. He has led major cross-border valuation assignments in Kenya, Rwanda, and Burundi.",
    achievements: [
      "ISK Award for Best Final Year Student in Land Economics (2004/2005)",
      "Knight Frank Kenya Annual Award (2004/2005)",
      "David & Mary Kiamba Memorial Prize (2004/2005)",
      "Presenter at UNEP Global Climate Change Forum, Gigiri",
    ],
    keyProjects: [
      "Lead Valuer – Mulindi & Shagasha Tea Factories, Rwanda",
      "Lead Consultant – 500-acre Ruiru Mixed-Use Development",
      "Standard Chartered Bank Market Survey across 7 towns",
      "Kenya Railways Corporation Assets Valuation",
    ],
  },
  {
    name: "Robert Kigen",
    role: "Director / Senior Valuer & Head of Investment Appraisal",
    credentials: "BA (Land Econ. Hons) UoN, MISK (VEMS), RV",
    bio: "Robert is a Full Member of the Institution of Surveyors of Kenya (ISK) and leads the Investment Appraisal & Feasibility Studies department. He brings proven expertise in valuation, market analysis, and strategic real estate advisory.",
    achievements: [],
    keyProjects: [
      "NSSF Kenya Real Estate Properties Valuation",
      "SSFR Rwanda Real Estate Assets",
      "LAPTrust Pension Scheme Property Restructuring (7,000+ units)",
      "Muhoroni, Chemelil & Miwani Sugar Companies Valuation",
    ],
  },
];

const staff = [
  { name: "Robert Kigen", role: "Chief Valuer" },
  { name: "Ngeno Felix", role: "Quantity Surveyor" },
  { name: "Josphat Cheruyot", role: "Data Scientist" },
  { name: "Margaret Chepngetich", role: "QS / Environmental Manager" },
  { name: "Sheilah Korir", role: "Agronomist" },
  { name: "Mary Chemutai", role: "Valuer" },
  { name: "Peter Noah", role: "Valuer" },
  { name: "Dennis Kariuki", role: "Valuer" },
  { name: "Collins Ngeno", role: "IT Expert" },
  { name: "Joseah Ngetich", role: "Valuer" },
];

const Team = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
        <div className="relative container-narrow section-padding !py-0 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Leadership & Team</h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">Meet the professionals driving NWest Valuers' excellence.</p>
          <div className="mt-3 h-1 w-16 bg-accent rounded mx-auto" />
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeading title="Our Leadership" />
          <div className="space-y-12">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-background rounded-lg border border-border p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                      <span className="font-display text-4xl font-bold text-accent">{leader.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground text-center md:text-left">{leader.name}</h3>
                    <p className="text-accent font-semibold text-sm text-center md:text-left">{leader.role}</p>
                    <p className="text-xs text-muted-foreground mt-1 text-center md:text-left">{leader.credentials}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground leading-relaxed mb-4">{leader.bio}</p>
                    {leader.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-accent" /> Awards & Recognition
                        </h4>
                        <div className="space-y-1">
                          {leader.achievements.map((a) => (
                            <div key={a} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-accent mt-1 shrink-0" />
                              <span className="text-sm text-muted-foreground">{a}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-accent" /> Key Projects
                      </h4>
                      <div className="space-y-1">
                        {leader.keyProjects.map((p) => (
                          <div key={p} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-accent mt-1 shrink-0" />
                            <span className="text-sm text-muted-foreground">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Staff */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading title="Our Team" subtitle="A multidisciplinary team of professionals." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {staff.map((member) => (
              <div key={member.name + member.role} className="bg-card rounded-lg border border-border p-5 text-center card-hover">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-lg font-bold text-accent">{member.name.charAt(0)}</span>
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm">{member.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Team;
