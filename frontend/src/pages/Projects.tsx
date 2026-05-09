import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Building2, Factory, TrendingUp } from "lucide-react";

const projects = [
  {
    icon: Factory,
    title: "Mulindi Tea Factory Valuation – Rwanda",
    desc: "Lead valuation of Mulindi Factory Company Assets in Rwanda, covering all real estate and plant & machinery assets.",
    location: "Rwanda",
    category: "International Valuation",
  },
  {
    icon: Factory,
    title: "Shagasha Tea Factory Valuation – Rwanda",
    desc: "Comprehensive valuation of Shagasha Tea Company Assets, including land, buildings, and processing equipment.",
    location: "Rwanda",
    category: "International Valuation",
  },
  {
    icon: Building2,
    title: "NSSF Kenya Real Estate Properties",
    desc: "Full portfolio valuation of NSSF Kenya real estate properties across multiple locations.",
    location: "Kenya",
    category: "Institutional Valuation",
  },
  {
    icon: Building2,
    title: "Kenya Railways Corporation Assets",
    desc: "Valuation of Kenya Railways Corporation assets from Nakuru to the entire Western Region.",
    location: "Western Kenya",
    category: "Government Valuation",
  },
  {
    icon: TrendingUp,
    title: "500-Acre Mixed Use Development – Ruiru",
    desc: "Market feasibility study and investment appraisal of an integrated mixed-use development on 500 acres at Ruiru, Kiambu County.",
    location: "Kiambu County",
    category: "Feasibility Study",
  },
  {
    icon: Building2,
    title: "NSSF Burundi Pension Towers",
    desc: "Advise, appraisal, design consultancy, and project management of the proposed NSSF Burundi Pension Towers.",
    location: "Burundi",
    category: "Project Management",
  },
  {
    icon: TrendingUp,
    title: "Standard Chartered Bank Market Survey",
    desc: "Real estate property market survey of Kisumu City, Nakuru, Eldoret, Kericho, Kakamega, Kitale, and Webuye towns.",
    location: "Multiple Cities",
    category: "Market Survey",
  },
  {
    icon: Building2,
    title: "LAPTrust Pension Scheme Restructuring",
    desc: "Valuation and investment appraisal of Changamwe, Tudor, Likoni, and Buxton municipal estates in Mombasa — over 7,000 residential units on ~500 acres.",
    location: "Mombasa",
    category: "Institutional Valuation",
  },
  {
    icon: TrendingUp,
    title: "Upper Hill Commercial Development",
    desc: "Market feasibility study on a commercial development at Upper Hill, Nairobi — recently completed.",
    location: "Nairobi",
    category: "Feasibility Study",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
        <div className="relative container-narrow section-padding !py-0 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Key Projects</h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">A selection of landmark assignments across Kenya, Rwanda, and Burundi.</p>
          <div className="mt-3 h-1 w-16 bg-accent rounded mx-auto" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-card rounded-lg border border-border overflow-hidden card-hover">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{project.category}</span>
                  </div>
                  <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-3">
                    <project.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 text-accent" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Projects;
