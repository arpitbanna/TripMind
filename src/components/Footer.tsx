import { Plane, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TripMind</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              The smarter, greener, easier way to explore the world. 
              AI-powered travel planning for conscious travelers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/planner" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Plan Trip
                </Link>
              </li>
              <li>
                <Link to="/hidden-gems" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Explore Gems
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
            <p className="text-secondary-foreground/80 text-sm mb-2">
              Built with ❤️ for travelers
            </p>
            <p className="text-secondary-foreground/80 text-sm">
              Made for Hackathon 2025
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} TripMind. All rights reserved. | Plan Smart. Travel Green.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
