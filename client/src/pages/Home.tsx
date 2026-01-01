import { ServiceCard } from "@/components/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Bike, Info, Map, Smartphone, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1 font-display font-bold text-xl tracking-tighter">
              TBSG
            </div>
            <span className="font-display font-bold hidden sm:inline-block">Tokyo Bike Sharing Guide</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#comparison" className="hover:text-primary transition-colors">Comparison</a>
            <a href="#tips" className="hover:text-primary transition-colors">Tips</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-tokyo-cycling.jpg" 
              alt="Cycling in Tokyo" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          </div>
          
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary rounded-none px-3 py-1 text-sm uppercase tracking-widest font-bold">
                Micromobility Guide 2026
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-balance">
                RIDE <span className="text-primary">TOKYO</span><br />
                LIKE A LOCAL
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                The ultimate guide to navigating Tokyo's streets with Hello Cycling, Docomo Bike Share, and Luup.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-none bg-foreground text-background hover:bg-foreground/90 font-bold text-lg px-8 h-14" asChild>
                  <a href="#services">
                    Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-none border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold text-lg px-8 h-14" asChild>
                  <a href="#comparison">
                    Compare Pricing
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <h2 className="text-4xl font-display font-bold mb-6 tracking-tight">Why Micromobility?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Tokyo is famous for its trains, but the real magic happens in between stations. Bike and scooter sharing services unlock the city's hidden alleys, trendy neighborhoods, and scenic waterfronts that you'd otherwise miss underground.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-none">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Electric assist makes hills effortless</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-none">
                      <Map className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium">Explore areas not covered by rail</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-accent/10 p-2 rounded-none">
                      <Smartphone className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium">Rent instantly with just your phone</span>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-7 relative">
                <div className="aspect-video bg-background border-2 border-border p-2 shadow-[8px_8px_0px_0px_var(--color-foreground)]">
                  <img 
                    src="/images/tokyo-map-abstract.jpg" 
                    alt="Tokyo Map" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">The Big Three</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Choose the service that fits your travel style, budget, and destination.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Updated Jan 2026</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              name="Hello Cycling"
              description="The cost-effective choice for longer rides. Yellow branding, widely available across Tokyo and surrounding prefectures."
              image="/images/hello-cycling-bike.png"
              color="chart-4"
              price="¥160 / 15 min"
              coverage="Tokyo, Kanagawa, Saitama, Chiba +"
              vehicleType="E-Bike"
              features={[
                "Best for budget travelers",
                "12-hour pass available (¥2,500)",
                "Requires Japanese phone number",
                "Can return at any station"
              ]}
              link="https://www.hellocycling.jp/"
            />
            
            <ServiceCard 
              name="Docomo Bike Share"
              description="The tourist-friendly option with iconic red bikes. Offers a 1-day pass that doesn't require a local phone number."
              image="/images/docomo-bike.png"
              color="primary"
              price="¥165 / 30 min"
              coverage="10 Wards of Tokyo & Yokohama"
              vehicleType="E-Bike"
              features={[
                "Tourist-friendly 1-day pass",
                "No Japanese number needed (with pass)",
                "Widespread in central Tokyo",
                "Must return to docking station"
              ]}
              link="https://docomo-cycle.jp/?lang=en"
            />
            
            <ServiceCard 
              name="Luup"
              description="The modern choice for short hops. Offers both e-scooters and e-bikes with a sleek app and simple registration."
              image="/images/luup-scooter.png"
              color="secondary"
              price="¥50 unlock + ¥20/min"
              coverage="Major cities (Tokyo, Osaka, Kyoto)"
              vehicleType="Scooter & Bike"
              features={[
                "No Japanese number required",
                "E-scooters available",
                "Great for short 'last mile' trips",
                "Simple in-app driving test"
              ]}
              link="https://luup.sc/en/"
            />
          </div>
        </section>

        {/* Comparison Table */}
        <section id="comparison" className="py-24 bg-foreground text-background">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12 text-center">
              Quick Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-background/20">
                    <th className="py-6 px-4 font-display font-bold text-xl uppercase tracking-wider">Feature</th>
                    <th className="py-6 px-4 font-display font-bold text-xl text-chart-4">Hello Cycling</th>
                    <th className="py-6 px-4 font-display font-bold text-xl text-primary">Docomo</th>
                    <th className="py-6 px-4 font-display font-bold text-xl text-secondary">Luup</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  <tr className="border-b border-background/10 hover:bg-background/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Best For</td>
                    <td className="py-6 px-4">Budget & Long Rides</td>
                    <td className="py-6 px-4">Tourists (1-Day Pass)</td>
                    <td className="py-6 px-4">Short Trips & Scooters</td>
                  </tr>
                  <tr className="border-b border-background/10 hover:bg-background/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Vehicle</td>
                    <td className="py-6 px-4">E-Bike</td>
                    <td className="py-6 px-4">E-Bike</td>
                    <td className="py-6 px-4">E-Scooter & E-Bike</td>
                  </tr>
                  <tr className="border-b border-background/10 hover:bg-background/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Pricing</td>
                    <td className="py-6 px-4">¥160 / 15 min</td>
                    <td className="py-6 px-4">¥2,200 / Day Pass</td>
                    <td className="py-6 px-4">¥50 + ¥20/min</td>
                  </tr>
                  <tr className="border-b border-background/10 hover:bg-background/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Registration</td>
                    <td className="py-6 px-4 text-destructive font-bold">JP Phone Number Req.</td>
                    <td className="py-6 px-4 text-accent font-bold">No Phone Req. (Pass)</td>
                    <td className="py-6 px-4 text-accent font-bold">No Phone Req.</td>
                  </tr>
                  <tr className="border-b border-background/10 hover:bg-background/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Coverage</td>
                    <td className="py-6 px-4">Wide (Tokyo + Suburbs)</td>
                    <td className="py-6 px-4">Central Tokyo (10 Wards)</td>
                    <td className="py-6 px-4">Major Hubs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section id="tips" className="py-24 container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 tracking-tight">Pro Tips for Riders</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-muted w-12 h-12 flex items-center justify-center font-display font-bold text-xl flex-shrink-0">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Check the Battery</h3>
                    <p className="text-muted-foreground">Always check the battery level in the app before reserving. Electric bikes are heavy and difficult to pedal without assist.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-muted w-12 h-12 flex items-center justify-center font-display font-bold text-xl flex-shrink-0">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Follow the Rules</h3>
                    <p className="text-muted-foreground">Ride on the left side of the road. E-scooters can use bike lanes and some sidewalks (in 6km/h mode), but never ride drunk.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-muted w-12 h-12 flex items-center justify-center font-display font-bold text-xl flex-shrink-0">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Plan Your Parking</h3>
                    <p className="text-muted-foreground">You must return bikes to a designated port. You cannot leave them just anywhere. Check the app for open return slots near your destination.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-8 md:p-12 flex flex-col justify-center border-2 border-border">
              <Bike className="w-16 h-16 mb-6 text-primary" />
              <h3 className="text-3xl font-display font-bold mb-4">Ready to Ride?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Download the apps before you arrive in Japan to save time. Luup and Docomo are the most tourist-friendly options for quick setup.
              </p>
              <div className="space-y-4">
                <Button className="w-full justify-between group rounded-none h-12 text-lg" variant="outline" asChild>
                  <a href="https://luup.sc/en/" target="_blank" rel="noopener noreferrer">
                    Download Luup <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button className="w-full justify-between group rounded-none h-12 text-lg" variant="outline" asChild>
                  <a href="https://docomo-cycle.jp/?lang=en" target="_blank" rel="noopener noreferrer">
                    Docomo Bike Share <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12 border-t border-background/20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-background text-foreground p-1 font-display font-bold text-lg tracking-tighter">
              TBSG
            </div>
            <span className="font-display font-bold">Tokyo Bike Sharing Guide</span>
          </div>
          <p className="text-sm text-background/60">
            © 2026 Tokyo Bike Sharing Guide. Not affiliated with any service provider.
          </p>
        </div>
      </footer>
    </div>
  );
}
