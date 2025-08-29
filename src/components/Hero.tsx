import { Button } from "@/components/ui/button";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import heroImage from "@/assets/hero-sabarimala.jpg";

const Hero = () => {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={heroImage}
      bgImageSrc={heroImage}
      title="स्वामी अय्यप्पा सेवा"
      date="Sacred Journey"
      scrollToExpand="Scroll to Expand"
      textBlend={true}
    >
      <div className="text-center px-4 max-w-5xl mx-auto">
        <div className="glass-sacred rounded-2xl p-8 md:p-12 shadow-divine mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sacred">
            Your Sacred Companion for Pilgrimage & Devotion
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with temples, plan your Sabarimala journey, join community prayers, 
            and deepen your spiritual practice with fellow Ayyappa devotees worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="sacred" size="lg" className="text-lg px-8 py-4">
              Begin Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Explore Features
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
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
    </ScrollExpandMedia>
  );
};

export default Hero;