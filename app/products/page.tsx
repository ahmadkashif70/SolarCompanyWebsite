import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Gauge, ArrowRight, LineChart } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              Featured Product
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              PV Genset Controller
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Advanced hybrid power management system that seamlessly integrates
              photovoltaic solar panels with diesel generators, optimizing
              energy efficiency and reducing operational costs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Request Information <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Key Features */}
        <section className="border-y border-border/40 bg-card">
          <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <h2 className="text-3xl font-bold mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 border-border/40">
                <Zap className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">
                  Intelligent Power Switching
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automatically switches between solar and generator power based
                  on availability and demand, ensuring optimal energy
                  utilization at all times.
                </p>
              </Card>

              <Card className="p-8 border-border/40">
                <Shield className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">
                  System Protection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built-in safety mechanisms protect both solar panels and
                  generators from voltage fluctuations, overload conditions, and
                  reverse current flow.
                </p>
              </Card>

              <Card className="p-8 border-border/40">
                <Gauge className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">
                  Real-Time Monitoring
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced monitoring system tracks power generation,
                  consumption patterns, and system efficiency with detailed
                  analytics and reporting.
                </p>
              </Card>

              <Card className="p-8 border-border/40">
                <LineChart className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">
                  Data Visualizations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interactive charts and graphs provide real-time insights into
                  energy production, consumption trends, and system performance
                  metrics.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <h2 className="text-3xl font-bold mb-12">Technical Specifications</h2>
          <Card className="p-8 border-border/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Power Management
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Automatic load transfer between solar and generator
                      sources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Maximum Power Point Tracking (MPPT) for solar optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Generator auto-start/stop based on battery levels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Priority-based load management system</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Control & Monitoring
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Microcontroller-based intelligent control system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>LCD display for real-time system status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Remote monitoring capabilities via IoT integration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Configurable parameters and scheduling options</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Safety Features
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Over-voltage and under-voltage protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Short circuit and overload protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reverse polarity protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Temperature monitoring and thermal shutdown</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Applications
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Off-grid residential and commercial installations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Telecom towers and remote communication sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Agricultural operations and rural electrification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Emergency backup power systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Benefits */}
        <section className="border-y border-border/40 bg-card">
          <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <h2 className="text-3xl font-bold mb-12">
              Why Choose PV Genset Controller?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-border/40">
                <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
                <p className="text-muted-foreground">
                  Reduce fuel consumption by up to 70% through intelligent
                  solar-first power management
                </p>
              </Card>
              <Card className="p-6 border-border/40">
                <h3 className="text-lg font-semibold mb-2">
                  Environmental Impact
                </h3>
                <p className="text-muted-foreground">
                  Lower carbon emissions and environmental footprint with
                  renewable energy integration
                </p>
              </Card>
              <Card className="p-6 border-border/40">
                <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  Ensure continuous power availability with automatic failover
                  to generator backup
                </p>
              </Card>
              <Card className="p-6 border-border/40">
                <h3 className="text-lg font-semibold mb-2">
                  Easy Installation
                </h3>
                <p className="text-muted-foreground">
                  Modular design allows for seamless integration with existing
                  power infrastructure
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Interested in the PV Genset Controller?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get in touch to learn more about specifications, pricing, and
              implementation for your specific needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Contact for Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
