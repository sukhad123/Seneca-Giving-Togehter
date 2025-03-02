
import React from "react";
import { ArrowDown, Heart } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-24 relative overflow-hidden hero-gradient"
    >
      {/* Background design elements */}
      <div className="absolute inset-0 bg-texture-light opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-24 h-64 w-64 bg-blood/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-32 h-72 w-72 bg-blood/10 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal delay={100}>
              <span className="inline-block px-3 py-1 rounded-full bg-blood/10 text-blood text-sm font-medium mb-6">
                Canadian Blood Services
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="heading-xl mb-6 text-gray-900">
                Every <span className="text-blood">Donation</span> Brings Life to Someone in Need
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="paragraph mb-8 max-w-xl">
                Join our community of donors making a difference across Canada. 
                Your simple act of giving blood can save up to three lives and 
                provide hope to those facing medical challenges.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://makeallthedifference.blood.ca/stem-cells-1/?utm_device=c&utm_term=makeallthedifference.blood.ca&utm_campaign={campaign-name}&utm_source=bing&utm_medium=cpc&msclkid=d0528cab4f4314614ac1eb68fedcddb1"
                  className="px-6 py-3 rounded-full bg-blood text-white hover:bg-blood/90 transition-all duration-300 font-medium shadow-md text-center"
                >
                  Donate Now
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 rounded-full border border-gray-300 hover:border-blood hover:text-blood transition-all duration-300 font-medium text-center group"
                >
                  Learn More
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={500} className="flex justify-center lg:justify-end">
            <div className="glass-panel p-2 relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Blood donation"
                className="w-full h-auto rounded shadow-sm object-cover max-w-md"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 glass-panel p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blood/20 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-blood" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Lives Saved</p>
                    <p className="text-2xl font-bold">1.2M+</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Scroll to learn more</span>
            <ArrowDown className="h-5 w-5 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
