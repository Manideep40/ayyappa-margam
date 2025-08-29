import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sabarimala.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sabarimala Temple at sunset with devotees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 via-accent/40 to-background/90" />
      </div>

      {/* Sacred Light Effects */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-sacred-glow" />
      <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-gentle-float" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="glass-sacred rounded-2xl p-8 md:p-12 shadow-divine">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-sacred leading-tight">
            स्वामी अय्यप्पा सेवा
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-medium">
            Your Sacred Companion for Pilgrimage & Devotion
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with temples, plan your Sabarimala journey, join community prayers, 
            and deepen your spiritual practice with fellow Ayyappa devotees worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="sacred" size="lg" className="text-lg px-8 py-4">
              Begin Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Explore Features
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="glass-sacred p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">Sacred Temples</div>
            </div>
            <div className="glass-sacred p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Active Devotees</div>
            </div>
            <div className="glass-sacred p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Prayer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;