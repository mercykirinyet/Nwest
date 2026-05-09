import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Building2, Landmark } from "lucide-react";

const bankingClients = [
  "National Bank (K) Limited", "Diamond Trust Bank", "SBM Bank Kenya Ltd",
  "NCBA Bank Kenya PLC", "Family Bank Ltd", "Equity Bank Ltd",
  "Sidian Bank Ltd", "Rafiki Microfinance Bank", "Jijenge Credit Limited",
  "Access Bank Kenya PLC", "K-UNITY Sacco Ltd",
];

const institutionalClients = [
  "Kenya Industrial Estates Ltd", "Kenya Pipeline Staff Retirements Benefits Scheme",
  "Micro Africa Ltd", "National Oil Corporation of Kenya",
  "Elgeyo Marakwet County", "Kericho County", "Trans Nzoia County",
  "Kenya Tea Development Agency", "Mulindi & Shagasha Tea Factories – Rwanda",
  "Chemalal and Kilibwoni Tea Factories", "NSSF Kenya", "SSFR Rwanda",
];

const portfolioClients = [
  "SOS Villages Kenya", "Kenya Wine Agencies Limited",
  "Kenya Fluospar Company Limited", "Aga Khan Foundation",
  "Penta Flowers Limited", "Barclays Bank Assets",
  "East Africa Breweries Limited", "Jesuits Fathers Registered Trustees",
];

const Clients = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
        <div className="relative container-narrow section-padding !py-0 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Our Clients</h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">Trusted by leading financial institutions, government entities, and corporates.</p>
          <div className="mt-3 h-1 w-16 bg-accent rounded mx-auto" />
        </div>
      </section>

      {/* Banking */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeading title="Banking & Financial Clients" subtitle="On-going service contracts with Kenya's leading banks." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bankingClients.map((client) => (
              <div key={client} className="bg-background rounded-lg p-5 border border-border text-center card-hover">
                <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading title="Government & Institutional Clients" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {institutionalClients.map((client) => (
              <div key={client} className="bg-card rounded-lg p-5 border border-border text-center card-hover">
                <Landmark className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeading title="Portfolio Valuation Clients" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioClients.map((client) => (
              <div key={client} className="bg-background rounded-lg p-5 border border-border text-center card-hover">
                <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Clients;
