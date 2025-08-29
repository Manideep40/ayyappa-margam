import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, Heart, Star, MessageCircle } from "lucide-react";

const CommunitySection = () => {
  const testimonials = [
    {
      name: "Ravi Kumar",
      location: "Bangalore, Karnataka",
      text: "This platform helped me plan my Sabarimala journey perfectly. The vratham tracker and community support made my pilgrimage deeply meaningful.",
      rating: 5
    },
    {
      name: "Priya Nair", 
      location: "Dubai, UAE",
      text: "Being away from home, this app keeps me connected to my spiritual roots. The bhajans library and community prayers are a blessing.",
      rating: 5
    },
    {
      name: "Suresh Menon",
      location: "Mumbai, Maharashtra", 
      text: "Found amazing temple recommendations and connected with local devotee groups. The festival calendar never lets me miss important dates.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, label: "Active Devotees", value: "50,000+" },
    { icon: Heart, label: "Community Posts", value: "100K+" },
    { icon: Star, label: "Temple Reviews", value: "25,000+" },
    { icon: MessageCircle, label: "Daily Interactions", value: "5,000+" }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-spiritual relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join Our Sacred Community
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Connect with thousands of Ayyappa devotees worldwide. Share experiences, 
            seek guidance, and strengthen your spiritual journey together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-sacred border-white/20 text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-sacred border-white/20 hover:border-primary/30 transition-sacred">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-primary">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Devotees Love Our Community
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Global Connection</h4>
                  <p className="text-white/80">Connect with Ayyappa devotees from around the world, sharing experiences and wisdom.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Spiritual Support</h4>
                  <p className="text-white/80">Get guidance from experienced devotees and spiritual mentors in your journey.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Safe Space</h4>
                  <p className="text-white/80">Moderated discussions ensure respectful and meaningful spiritual conversations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <Card className="glass-sacred border-white/20 p-8">
              <CardContent className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground">Ready to Join?</h4>
                <p className="text-muted-foreground">
                  Become part of our growing community of devoted Ayyappa devotees. 
                  Share your journey, seek guidance, and grow spiritually together.
                </p>
                <div className="space-y-3">
                  <Button variant="sacred" className="w-full">
                    Join Community
                  </Button>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;