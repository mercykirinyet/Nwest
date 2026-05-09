import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2, Home, Factory, Car, TrendingUp, Search,
  ClipboardList, Users, ArrowRight, CheckCircle2
} from "lucide-react";

const valuationPurposes = [
  "Mortgage", "Insurance", "Court Purposes (Bonds/Surety)", "Rating",
  "Compulsory Acquisition", "Financial Reporting", "Mergers & Liquidation",
  "Auction/Forced Sale", "Sale/Purchase", "Rent Determination"
];

const propertyTypes = [
  "Residential", "Commercial", "Industrial", "Agricultural", "Development Land",
  "Plant & Machinery", "Motor Vehicles", "Hotels & Restaurants", "Schools & Hospitals",
  "Petrol Stations", "Going Concerns", "Leasehold Properties", "Furniture & Equipment"
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
        <div className="relative container-narrow section-padding !py-0 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Our Services</h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">Comprehensive real estate solutions for institutional, corporate, and individual clients.</p>
          <div className="mt-3 h-1 w-16 bg-accent rounded mx-auto" />
        </div>
      </section>

      {/* Valuation Services */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Valuation Services" centered={false} subtitle="Comprehensive valuations for all property types and purposes." />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Valuation is an art and science of estimating the value of a particular interest in property for a specific purpose at a particular moment in time, taking into account all features and market factors. Our valuations are of critical importance for sound investment decisions.
              </p>
              <h4 className="font-display font-semibold text-foreground mb-3">Valuation Purposes:</h4>
              <div className="grid grid-cols-2 gap-2">
                {valuationPurposes.map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/commercial-property.jpg" alt="Commercial Property Valuation" className="rounded-lg shadow-xl mb-6" />
              <h4 className="font-display font-semibold text-foreground mb-3">Property Types:</h4>
              <div className="grid grid-cols-2 gap-2">
                {propertyTypes.map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Appraisal */}
      <section className="section-padding bg-background">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <img src="/images/residential-property.jpg" alt="Investment Property" className="rounded-lg shadow-xl order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionHeading title="Investment Appraisal & Feasibility Studies" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              We provide market analysis and forecasts for informed real estate decisions. Our investment appraisals help owners, investors, and lenders by providing critical information about projects including new construction, redevelopment, and renovation.
            </p>
            <div className="space-y-3">
              {["Market analysis & forecasting", "Risk mitigation strategies", "ROI optimization", "Mixed-use development studies", "Commercial & residential feasibility"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estate Agency */}
      <section className="section-padding bg-card">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Estate Agency" centered={false} subtitle="Professional real estate agency services for sales and letting." />
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer professional real estate agency services to support our clients' quests to acquire or dispose of property. Our Estate Agency Team is led by a duly Registered, Licensed and Practising Valuer and Estate Agent.
            </p>
            <div className="space-y-3">
              {["Property sales & letting", "Property acquisition advisory", "Subdivision advisory", "Strategic property investment guidance", "Personalized client service"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Home className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/images/residential-property.jpg" alt="Estate Agency" className="rounded-lg shadow-xl" />
        </div>
      </section>

      {/* Property Management */}
      <section className="section-padding bg-background">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <img src="/images/industrial-property.jpg" alt="Property Management" className="rounded-lg shadow-xl order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionHeading title="Property Management" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer professional property management to ensure investors achieve their investment objectives while keeping tenants comfortable. We understand that real estate investment is capital intensive and every investor seeks the best return on investment.
            </p>
            <div className="space-y-3">
              {["Tenant management & screening", "Maintenance coordination", "Rent collection & remittance", "Investment performance optimization", "Regular property inspections"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ClipboardList className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-gradient text-center">
        <div className="container-narrow">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">Contact us today for professional, reliable, and efficient real estate services.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold px-8">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Services;
