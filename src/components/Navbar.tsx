import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Temples", href: "#temples" },
    { name: "Pilgrimage", href: "#pilgrimage" },
    { name: "Community", href: "#community" },
    { name: "Audio", href: "#audio" },
    { name: "Calendar", href: "#calendar" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-sacred border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-sacred rounded-full flex items-center justify-center shadow-sacred">
              <span className="text-white font-bold text-xl">ॐ</span>
            </div>
            <div>
              <div className="font-bold text-lg text-sacred">Ayyappa Seva</div>
              <div className="text-xs text-muted-foreground">Sacred Platform</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Globe className="w-4 h-4 mr-2" />
              EN | മലയാളം
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="sacred" size="sm">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/20 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-primary/20">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Globe className="w-4 h-4 mr-2" />
                  Language: English
                </Button>
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button variant="sacred" size="sm">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;