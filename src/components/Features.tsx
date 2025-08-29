import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import templeIcon from "@/assets/temple-icon.jpg";
import prayerIcon from "@/assets/prayer-icon.jpg";
import communityIcon from "@/assets/community-icon.jpg";
import { MapPin, Calendar, Music, Users, Route, Bell } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: templeIcon,
      lucideIcon: MapPin,
      title: "Temple Finder",
      description: "Discover nearby Ayyappa temples with verified details, darshan timings, and real-time crowd updates.",
      benefits: ["Live darshan timings", "Crowd density alerts", "Verified temple details", "Festival schedules"]
    },
    {
      icon: prayerIcon,
      lucideIcon: Route,
      title: "Pilgrimage Planner",
      description: "Complete guide for your Sabarimala journey with vratham tracker, safety tips, and preparation checklists.",
      benefits: ["41-day vratham tracker", "Packing checklists", "Route planning", "Safety guidelines"]
    },
    {
      icon: communityIcon,
      lucideIcon: Users,
      title: "Devotee Community",
      description: "Connect with fellow devotees, join group prayers, participate in seva, and share spiritual experiences.",
      benefits: ["Group prayers", "Q&A forums", "Seva opportunities", "Spiritual guidance"]
    },
    {
      icon: templeIcon,
      lucideIcon: Music,
      title: "Sacred Audio Library",
      description: "Access bhajans, mantras, and spiritual music with lyrics in multiple languages and offline support.",
      benefits: ["High-quality audio", "Multi-language lyrics", "Offline access", "Curated playlists"]
    },
    {
      icon: prayerIcon,
      lucideIcon: Calendar,
      title: "Sacred Calendar",
      description: "Stay updated with important festivals, temple events, and personalized spiritual reminders.",
      benefits: ["Festival alerts", "Personal reminders", "Regional events", "Muhurat timings"]
    },
    {
      icon: communityIcon,
      lucideIcon: Bell,
      title: "Smart Notifications",
      description: "Receive timely updates about temple activities, community events, and spiritual milestones.",
      benefits: ["Temple updates", "Community alerts", "Journey reminders", "Vratham notifications"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sacred">
            Sacred Features for Every Devotee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools designed to support your spiritual journey and connect you 
            with the global Ayyappa devotee community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group glass-sacred border-primary/10 hover:border-primary/30 transition-sacred hover:shadow-sacred">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-16 h-16 rounded-xl object-cover mx-auto shadow-spiritual"
                  />
                  <div className="absolute -top-2 -right-2 p-2 bg-primary rounded-full shadow-sacred group-hover:animate-sacred-glow">
                    <feature.lucideIcon className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:animate-pulse" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:border-primary/50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="sacred" size="lg" className="text-lg px-8 py-4 animate-sacred-glow">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;