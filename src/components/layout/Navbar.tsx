
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Heart, Menu, Users, Info, HeartPulse, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Heart className="h-4 w-4 mr-1" /> },
    { name: "About Us", href: "#about", icon: <Info className="h-4 w-4 mr-1" /> },
    { name: "Why Donate", href: "#why-donate", icon: <HeartPulse className="h-4 w-4 mr-1" /> },
    { name: "Our Team", href: "#our-team", icon: <Users className="h-4 w-4 mr-1" /> },
    { name: "FAQ", href: "#faq", icon: <Info className="h-4 w-4 mr-1" /> },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-subtle py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blood animate-pulse-slow" />
            <span className="text-xl font-bold tracking-tight">Give Together</span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-blood transition-colors duration-300 link-underline font-medium flex items-center"
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#signup"
                className="px-5 py-2 rounded-full bg-blood text-white hover:bg-blood/90 transition-all duration-300 font-medium shadow-sm"
              >
                Sign Up
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blood transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <ul className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-gray-600 hover:text-blood transition-colors flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#signup"
                className="block w-full text-center py-2 rounded-full bg-blood text-white hover:bg-blood/90 transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
