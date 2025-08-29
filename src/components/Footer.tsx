import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Temple Directory", href: "#temples" },
    { name: "Pilgrimage Guide", href: "#pilgrimage" },
    { name: "Community", href: "#community" },
    { name: "Audio Library", href: "#audio" },
    { name: "Sacred Calendar", href: "#calendar" },
    { name: "Donation Portal", href: "#donations" }
  ];

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Community Guidelines", href: "#guidelines" },
    { name: "Report Issue", href: "#report" }
  ];

  const languages = [
    "English", "മലയാളം", "தமிழ்", "తెలుగు", "ಕನ್ನಡ", "हिन्दी"
  ];

  return (
    <footer className="bg-gradient-spiritual relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary-glow/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center shadow-sacred">
                <span className="text-white font-bold text-2xl">ॐ</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">Ayyappa Seva</div>
                <div className="text-sm text-white/80">Sacred Platform</div>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Connecting Ayyappa devotees worldwide through technology, tradition, and community. 
              Your spiritual journey, supported by sacred wisdom.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Languages */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <span>support@ayyappaseva.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" />
                  <span>+91 800 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" />
                  <span>Kerala, India</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((language) => (
                  <button
                    key={language}
                    className="text-sm text-white/80 hover:text-primary transition-colors text-left"
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-sacred border-white/20 rounded-2xl p-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Connected to the Sacred
            </h3>
            <p className="text-white/90 mb-6">
              Receive updates on festivals, temple events, and spiritual guidance directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary"
              />
              <Button variant="sacred" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/80 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <span>© 2024 Ayyappa Seva Platform. Made with</span>
                <Heart className="w-4 h-4 text-primary fill-current" />
                <span>for devotees worldwide.</span>
              </p>
            </div>
            <div className="text-white/60 text-sm">
              All temple information verified | Respectfully designed for devotion
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;