
import { Link } from "react-router-dom";
import { Users, Globe, Shield, MapPin, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const valueProps = [
    {
      icon: Users,
      title: "Dutch-Speaking Talent Pool",
      description: "Access qualified professionals with Dutch language skills and local market knowledge.",
    },
    {
      icon: Globe,
      title: "NL & Malta Focus",
      description: "Specialized in the key European iGaming hubs where Dutch talent is in demand.",
    },
    {
      icon: Shield,
      title: "Regulated Market Expertise",
      description: "Focus on licensed operators compliant with Dutch gambling regulations.",
    },
  ];

  const sampleJobs = [
    {
      title: "Compliance Officer",
      company: "Leading NL Operator",
      location: "Amsterdam, NL",
      type: "Full-time",
    },
    {
      title: "CRM Manager",
      company: "iGaming Scale-up",
      location: "Malta",
      type: "Full-time",
    },
    {
      title: "Payment Specialist",
      company: "Sports Betting Company",
      location: "Rotterdam, NL",
      type: "Full-time",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Betting & iGaming Jobs<br />
            <span className="text-accent">in the Netherlands</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connecting Dutch talent with licensed betting and iGaming companies in the Netherlands and Malta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/employers">For Employers</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/candidates">For Candidates</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose BettingJobs.nl?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="text-center border-border/50 hover:border-accent/30 transition-colors">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <prop.icon className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{prop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{prop.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Featured Opportunities
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Sample positions from leading iGaming companies seeking Dutch talent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {job.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/candidates">View All Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The Dutch iGaming Talent Platform
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            BettingJobs.nl is the dedicated recruitment platform for the Netherlands' growing regulated betting and iGaming industry. We connect qualified Dutch-speaking professionals with licensed operators seeking local talent.
          </p>
          <p className="text-muted-foreground">
            Whether you're an operator looking to build your Dutch team or a professional seeking opportunities in the iGaming sector, we're here to facilitate meaningful connections.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;