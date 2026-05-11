import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  { city: "Nairobi (Head Office)", address: "Uniafric House, 3rd Floor, Koinange Street", phone: "+254 728 799 167", email: "nwestvaluerslt@gmail.com" },
  { city: "Nakuru", address: "Farming Systems Kenya Building", phone: "+254 728 799 167" },
  { city: "Kisii", address: "Ouru Towers", phone: "+254 722 948 032" },
  { city: "Migori", address: "Pinacle Centre", phone: "+254 722 948 032" },
  { city: "Narok", address: "Nenkai Plaza", phone: "+254 725 326 144" },
  { city: "Kapsabet", address: "Bargetuny Plaza", phone: "+254 722 948 032" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for contacting NWest Valuers. We'll respond within 24 hours." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
        <div className="relative container-narrow section-padding !py-0 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">Get in touch for professional valuation and real estate services.</p>
          <div className="mt-3 h-1 w-16 bg-accent rounded mx-auto" />
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <SectionHeading title="Get in Touch" centered={false} />
            
            <div className="space-y-4">
              <a href="tel:+254728799167" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">+254 728 799 167</p>
                  <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">+254 722 948 032</p>
                </div>
              </a>
              <a href="mailto:nwestvaluerslt@gmail.com" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">nwestvaluerslt@gmail.com</p>
                  <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">valuatio@neowestend.co.ke</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Head Office</p>
                  <p className="text-sm text-muted-foreground">Uniafric House, 3rd Floor, Koinange Street, Nairobi</p>
                  <p className="text-sm text-muted-foreground">P.O BOX 57405-00200 Nairobi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Working Hours</p>
                  <p className="text-sm text-muted-foreground">Mon – Fri: 8:00 AM – 5:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sat: 9:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm font-semibold text-foreground mb-1">Website</p>
              <a href="https://www.neowestend.co.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">www.neowestend.co.ke</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-background rounded-lg border border-border p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Subject *</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Property Valuation Request"
                      maxLength={200}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your property or service needs..."
                    rows={5}
                    maxLength={2000}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading title="Our Offices" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((office) => (
              <div key={office.city} className="bg-card rounded-lg border border-border p-5 card-hover">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{office.city}</h4>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-sm text-accent hover:underline">{office.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8175930767905!2d36.81723!3d-1.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664b4e0e7%3A0x4a0b0a0a0a0a0a0a!2sKoinange%20Street%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NWest Valuers Location"
        />
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Contact;
