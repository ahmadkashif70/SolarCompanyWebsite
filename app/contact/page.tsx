import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Interested in our technology or looking to collaborate? We'd love
              to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-6 lg:px-8 pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="p-8 border-border/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:ahmadkashifxyz@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ahmadkashifxyz@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a
                      href="tel:+923018666960"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      (+92) 0301-8666960
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/40">
                <h3 className="text-xl font-semibold mb-4">
                  Connect on Social
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/muhammad-ahmad-kashif-040b4b279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/ahmadkashif70"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <Card className="p-8 border-border/40">
                <h3 className="text-xl font-semibold mb-4">
                  Business Inquiries
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For partnership opportunities, technical consultations, or
                  product demonstrations, please reach out via email. We
                  typically respond within 24 hours.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
