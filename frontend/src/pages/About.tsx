import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import KenyaMap from "@/components/KenyaMap";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Shield, Award, Users, Eye, Target, CheckCircle2 } from "lucide-react";

const coreValues = [
  { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in all our professional engagements." },
  { icon: Award, title: "Professionalism", desc: "We maintain professional excellence in every assignment we undertake." },
  { icon: Target, title: "Competence", desc: "Our team possesses the skills and knowledge to deliver exceptional results." },
  { icon: CheckCircle2, title: "Consistency", desc: "We deliver reliable and consistent quality across all our services." },
  { icon: Users, title: "Efficiency", desc: "Modern technology and streamlined processes ensure swift service delivery." },
];

const affiliations = [
  "Valuers Registration Board (VRB) – Under Valuers Act Cap 532",
  "Estate Agents Registration Board (EARB) – Under Estate Agency Act Cap 533",
  "Institution of Surveyors of Kenya (ISK)",
  "Kenya Revenue Authority (KRA)",
  "National Hospital Insurance Fund (NHIF)",
  "National Social Security Fund (NSSF)",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light" />
        <div className="relative container-narrow section-padding !py-0 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">About NWest Valuers</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">A trusted name in real estate valuation and consultancy across Kenya and East Africa.</p>
          <div className="mt-3 h-1 w-16 bg-accent rounded mx-auto" />
        </div>
      </section>

      {/* Company Background */}
      <section className="section-padding bg-card">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <SectionHeading title="Our Story" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>NWest Valuers Ltd is a Limited Liability Company incorporated under the Companies Act (Cap 486, Laws of Kenya). It is a Kenyan-based real estate consultancy firm with operation bases across Kenya.</p>
              <p>We are duly Registered, Licensed, Gazetted & Practising Valuers & Estate Agents, with fully established and equipped offices in Nairobi, Nakuru, Kisii, Migori, Narok, Embu, Kericho, Kapsabet & Mombasa.</p>
              <p>With over ten years of experience, we have handled major institutional, banking, and cross-border assignments across Kenya, Rwanda, and Burundi.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <img src="/images/commercial-property.jpg" alt="Commercial Property" className="rounded-lg shadow-xl" />
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light">
        <div className="container-narrow grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0}>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Eye className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed">To be a Preferred Real Estate Service Firm in Kenya and the Eastern Africa Region.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Target className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/80 text-lg leading-relaxed">To Provide Professional and Reliable Real Estate Services in an Efficient Manner.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <ScrollReveal>
            <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do." />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100} direction="scale">
                <div className="bg-card rounded-lg p-6 border border-border text-center card-hover">
                  <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-maroon" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-xs text-muted-foreground">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Kenya Map */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <ScrollReveal>
            <SectionHeading title="Our Branch Network" subtitle="Strategically located offices across Kenya for efficient service delivery." />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <KenyaMap />
          </ScrollReveal>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="section-padding bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light">
        <div className="container-narrow">
          <ScrollReveal>
            <SectionHeading title="Professional Affiliations" subtitle="Fully compliant with all regulatory bodies." light />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {affiliations.map((a, i) => (
              <ScrollReveal key={a} delay={i * 80}>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-sm text-white/90">{a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={500}>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-6 py-3 rounded-full">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Professional Indemnity Cover: Kshs. 1 Billion</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default About;
