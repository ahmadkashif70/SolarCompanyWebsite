import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Phone,
  Target,
  User,
} from "lucide-react";
import Link from "next/link";
import { WelcomeScreen } from "@/components/welcome-screen";

export default function Home() {
  return (
    <>
      <WelcomeScreen />
      <div className="relative">
        <Navbar />
        <main className="min-h-screen pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-4xl">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#18181b] to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">ED</span>
                  </div>
                  <h2 className="text-4xl font-bold">
                    EngiDev<span className="text-accent">.</span>
                  </h2>
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
                Engineering Innovative Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Welcome to EngiDev, where cutting-edge technology meets
                practical innovation. We specialize in developing smart hardware
                solutions and advanced software systems that solve real-world
                challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/products">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Mission & Objectives */}
          <section className="border-y border-border/40 bg-card">
            <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
              <div className="flex items-center gap-3 mb-12">
                <Target className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold">Our Mission & Objectives</h2>
              </div>
              <div className="max-w-4xl">
                <Card className="p-8 border-border/40 bg-background">
                  <h3 className="text-2xl font-semibold mb-6 text-accent">
                    What We Do
                  </h3>
                  <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      At{" "}
                      <span className="text-foreground font-semibold">
                        EngiDev
                      </span>
                      , our mission is to bridge the gap between innovative
                      engineering concepts and practical, deployable technology
                      solutions. We focus on developing intelligent systems that
                      address real-world challenges in energy management,
                      automation, and distributed computing.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-foreground font-semibold mb-2">
                          🎯 Our Core Objectives:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>
                            <span className="font-medium text-foreground">
                              Innovate Smart Hardware:
                            </span>{" "}
                            Design and develop intelligent controllers and IoT
                            devices that optimize energy systems
                          </li>
                          <li>
                            <span className="font-medium text-foreground">
                              Build Robust Software:
                            </span>{" "}
                            Create scalable, distributed systems and full-stack
                            applications leveraging AI/ML
                          </li>
                          <li>
                            <span className="font-medium text-foreground">
                              Solve Real Problems:
                            </span>{" "}
                            Focus on practical solutions for energy efficiency,
                            automation, and digital transformation
                          </li>
                          <li>
                            <span className="font-medium text-foreground">
                              Continuous Learning:
                            </span>{" "}
                            Stay at the forefront of technology through
                            research, experimentation, and implementation
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="pt-4 border-t border-border/40">
                      We're currently specializing in{" "}
                      <span className="text-foreground font-semibold">
                        renewable energy controllers
                      </span>
                      ,{" "}
                      <span className="text-foreground font-semibold">
                        AI-powered platforms
                      </span>
                      , and{" "}
                      <span className="text-foreground font-semibold">
                        distributed systems
                      </span>{" "}
                      – bringing theoretical knowledge into production-ready
                      solutions.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* About - Founder */}
          <section className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <div className="flex items-center gap-3 mb-12">
              <User className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">About the Founder</h2>
            </div>
            <div className="max-w-4xl">
              <Card className="p-8 border-border/40">
                <h3 className="text-3xl font-bold mb-3">
                  Muhammad Ahmad Kashif
                </h3>
                <p className="text-xl text-accent font-semibold mb-6">
                  Founder
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  BS Computer Science student at Lahore University of Management
                  Sciences (LUMS) in final semester, specializing in distributed
                  systems, AI/ML, and full-stack development. Building
                  innovative technology solutions that bridge theoretical
                  knowledge with practical applications.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a className="text-accent font-semibold mb-6" href="/Ahmad_CV.pdf" download>
                      Download CV
                    </a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <a
                    href="mailto:ahmadkashifxyz@gmail.com"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    ahmadkashifxyz@gmail.com
                  </a>
                  <a
                    href="tel:+923018666960"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    (+92) 0301-8666960
                  </a>
                  <span className="flex items-center gap-2">
                    Faisalabad/Lahore, Pakistan
                  </span>
                </div>
              </Card>

              {/* Education */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <Card className="p-6 border-border/40">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">
                        Lahore University of Management Sciences (LUMS)
                      </h4>
                      <p className="text-muted-foreground">
                        BS Computer Science
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Currently in Final Semester
                      </p>
                    </div>
                    <div className="text-muted-foreground text-sm">
                      <p className="font-medium">Aug 2022 – May 2026</p>
                      <p>Lahore, Pakistan</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="border-y border-border/40 bg-card">
            <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
              <div className="flex items-center gap-3 mb-12">
                <Briefcase className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>
              <div className="space-y-6 max-w-4xl">
                <Card className="p-8 border-border/40 bg-background">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Teaching Assistant - Operating Systems
                      </h3>
                      <p className="text-muted-foreground">
                        LUMS School of Science and Engineering
                      </p>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="font-medium">Sep 2024 – Dec 2024</p>
                      <p className="text-sm">Lahore, Pakistan</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Conducted tutorials and office hours for students learning
                      core OS concepts
                    </li>
                    <li>
                      Assisted with grading assignments, quizzes, and providing
                      detailed feedback
                    </li>
                    <li>
                      Helped students understand complex topics including
                      concurrency, memory management, and file systems
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 border-border/40 bg-background">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Full-Time Teaching Assistant - Calculus 2
                      </h3>
                      <p className="text-muted-foreground">
                        LUMS Mathematics Department
                      </p>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="font-medium">Sep 2024 – Dec 2024</p>
                      <p className="text-sm">Lahore, Pakistan</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Conducted tutorials, graded assignments and quizzes, and
                      held office hours for 120+ students
                    </li>
                    <li>
                      Helped students understand advanced calculus concepts,
                      improving their analytical skills
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 border-border/40 bg-background">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Create for Science Intern, Carl Sagan Program
                      </h3>
                      <p className="text-muted-foreground">
                        Syed Babar Ali School of Science and Engineering
                        (SBASSE), LUMS
                      </p>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="font-medium">March 2024 – May 2024</p>
                      <p className="text-sm">Lahore, Pakistan</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Collaborated on science communication projects, enhancing
                      storytelling and leadership skills
                    </li>
                    <li>
                      Produced and edited high-quality video content using
                      DaVinci Resolve and CapCut
                    </li>
                    <li>
                      Covered major academic events including CIMPA Research
                      School with international researchers
                    </li>
                    <li>
                      Conducted interviews with scientists, improving public
                      speaking and on-camera communication
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <div className="flex items-center gap-3 mb-12">
              <Code className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 border-border/40 hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">
                  AI-Powered Job Aggregation Platform
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Production-ready full-stack platform integrating AI to
                  personalize job discovery and networking. Features Gemini API
                  for profile-tailored suggestions, real-time cover letter
                  generation, and automated job scraping.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Selenium</Badge>
                  <Badge variant="secondary">JWT</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  March 2025 – May 2025
                </p>
              </Card>

              <Card className="p-8 border-border/40 hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">
                  Distributed Key-Value Store (Raft)
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  DynamoDB-inspired distributed key-value store built on Raft
                  consensus algorithm. Implements leader election, log
                  replication, and failure recovery with strong consistency
                  guarantees.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Go</Badge>
                  <Badge variant="secondary">Distributed Systems</Badge>
                  <Badge variant="secondary">Raft</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Sept 2024</p>
              </Card>

              <Card className="p-8 border-border/40 hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">
                  Arduino USB Bootloader Exploit
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Reverse-engineered interrupt vector and inserted
                  watchdog-triggered jump to payload for persistent execution.
                  Crafted Python flashing tool with automated patching and CRC
                  fix-up in under 2 seconds.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">C</Badge>
                  <Badge variant="secondary">LUFA</Badge>
                  <Badge variant="secondary">AVR-GCC</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
                <p className="text-sm text-muted-foreground">May 2025</p>
              </Card>

              <Card className="p-8 border-border/40 hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">
                  Diffusion Models & Generative ML
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Implemented denoising diffusion probabilistic models (DDPM)
                  from scratch for high-quality image generation. Explored
                  conditional/unconditional generation with classifier guidance
                  and U-Net architectures.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">NumPy</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Sept 2024</p>
              </Card>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="border-y border-border/40 bg-card">
            <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
              <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 border-border/40 bg-background">
                  <h3 className="text-xl font-semibold mb-4 text-accent">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>C/C++</Badge>
                    <Badge>Go</Badge>
                    <Badge>Bash</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Haskell</Badge>
                  </div>
                </Card>

                <Card className="p-8 border-border/40 bg-background">
                  <h3 className="text-xl font-semibold mb-4 text-accent">
                    Developer Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>VS Code</Badge>
                    <Badge>Jupyter</Badge>
                    <Badge>Anaconda</Badge>
                  </div>
                </Card>

                <Card className="p-8 border-border/40 bg-background">
                  <h3 className="text-xl font-semibold mb-4 text-accent">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MERN Stack</Badge>
                    <Badge>Distributed Systems</Badge>
                    <Badge>Socket Programming</Badge>
                    <Badge>Concurrency</Badge>
                    <Badge>RPCs</Badge>
                    <Badge>PyTorch</Badge>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                Let's Build Something Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Interested in collaborating or learning more about our work?
                Check out our products or get in touch.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/products">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
