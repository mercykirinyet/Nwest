import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Building2, Home, Factory, TrendingUp, Search, ClipboardList,
  Users, Shield, Award, Clock, Target, CheckCircle2, ArrowRight
} from "lucide-react";

const services = [
  { icon: Building2, title: "Property Valuation", desc: "Comprehensive real estate & motor vehicle valuations for mortgage, insurance, court & financial reporting." },
  { icon: TrendingUp, title: "Investment Appraisal", desc: "Market analysis, risk mitigation & ROI optimization for informed investment decisions." },
  { icon: Home, title: "Estate Agency", desc: "Professional sales, letting, property acquisition & subdivision advisory services." },
  { icon: ClipboardList, title: "Property Management", desc: "Tenant management, rent collection, maintenance coordination & investment optimization." },
  { icon: Search, title: "Feasibility Studies", desc: "Market surveys, feasibility studies for commercial, residential & mixed-use developments." },
  { icon: Factory, title: "Project Management", desc: "End-to-end real estate project management for developments across East Africa." },
];

const whyUs = [
  { icon: Award, title: "10+ Years Experience", desc: "Proven track record across Kenya and East Africa." },
  { icon: Target, title: "Accuracy & Detail", desc: "Meticulous attention to detail in every assignment." },
  { icon: Shield, title: "Kshs. 1B Indemnity", desc: "Professional Indemnity Cover for your peace of mind." },
  { icon: Clock, title: "Fast Turnaround", desc: "Modern technology enables swift service delivery." },
];

const clients = [
  "National Bank", "Diamond Trust Bank", "NCBA Bank", "Equity Bank",
  "Family Bank", "SBM Bank", "Sidian Bank", "Access Bank",
  "Kenya Industrial Estates", "NSSF Kenya", "Kenya Railways", "Kenya Tea Dev. Agency",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-nairobi.jpg" alt="Nairobi skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-gradient opacity-85" />
        </div>
        <div className="relative container-narrow section-padding !py-0">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Registered, Licensed & Gazetted Valuers
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Professional Real Estate Valuation &{" "}
              <span className="text-gradient-gold">Consultancy Services</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Registered, Licensed & Practising Valuers serving Kenya & East Africa with over a decade of excellence in real estate services.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold px-8">
                  Request a Valuation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding bg-card">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="About NWest Valuers" centered={false} />
            <p className="text-muted-foreground leading-relaxed">
              NWest Valuers Ltd is a Limited Liability Company incorporated under the Companies Act (Cap 486, Laws of Kenya). We are a team of professionals with vast experience in the real estate service industry, specializing in valuation, estate agency, property management, feasibility studies, and investment appraisal.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With offices across Kenya — Nairobi, Nakuru, Kisii, Migori, Narok, Kapsabet, Embu, Kericho, and Mombasa — we deliver professional and reliable real estate services across the region.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:underline">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <img src="/images/team-photo.jpg" alt="NWest Valuers Team" className="rounded-lg shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
              <p className="font-display text-3xl font-bold">10+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading title="Our Core Services" subtitle="Comprehensive real estate solutions tailored to institutional, corporate, and individual clients." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-lg p-6 border border-border card-hover group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-gradient">
        <div className="container-narrow">
          <SectionHeading title="Why Choose NWest Valuers" subtitle="Trusted by leading banks, government entities, and institutional investors." light />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeading title="Institutional Clients" subtitle="Trusted by Kenya's leading financial institutions and government entities." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div key={client} className="bg-background rounded-lg p-5 border border-border text-center card-hover">
                <Building2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/commercial-property.jpg" alt="Property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-gradient opacity-90" />
        </div>
        <div className="relative container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Professional Valuation?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Get accurate, reliable, and timely valuation services from Kenya's trusted real estate professionals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold px-8">
                Request a Valuation
              </Button>
            </Link>
            <a href="tel:+254728799167">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Call +254 728 799 167
              </Button>
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Index;
