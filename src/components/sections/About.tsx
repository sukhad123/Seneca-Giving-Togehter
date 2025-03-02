
import React from "react";
import { CheckCircle, Clock, MapPin, Users, Award, Target } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const About: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-blood" />,
      title: "Simple Process",
      description: "Donating blood takes just about an hour from check-in to refreshments afterward."
    },
    {
      icon: <Users className="h-6 w-6 text-blood" />,
      title: "Help Multiple People",
      description: "One donation can save up to three lives as blood is separated into red cells, platelets, and plasma."
    },
    {
      icon: <Clock className="h-6 w-6 text-blood" />,
      title: "Regular Need",
      description: "Someone in Canada needs blood every 60 seconds. Regular donations ensure supply meets demand."
    },
    {
      icon: <MapPin className="h-6 w-6 text-blood" />,
      title: "Nationwide Impact",
      description: "Your donation helps patients in hospitals and clinics across all Canadian provinces."
    }
  ];

  const partners = [
    { name: "Seneca College", logo: "https://via.placeholder.com/150x60" },
    { name: "Canadian Blood Services", logo: "https://via.placeholder.com/150x60" },
    { name: "Toronto Health Network", logo: "https://via.placeholder.com/150x60" },
    { name: "Community Health Partners", logo: "https://via.placeholder.com/150x60" }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-texture-light opacity-40 pointer-events-none"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="px-3 py-1 rounded-full bg-blood/10 text-blood text-sm font-medium mb-3 inline-block">
              About Our Campaign
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
              The Seneca Blood Drive: Uniting Canadians Through Blood Donation
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="paragraph max-w-2xl mx-auto">
              The Seneca Blood Drive is a collaborative initiative between Seneca College and 
              Canadian Blood Services designed to inspire new donors and recognize the impact of 
              existing ones across our community.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal className="order-2 md:order-1">
            <div className="glass-panel p-6 relative">
              <div className="absolute -top-5 -right-5 glass-panel p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blood/20 flex items-center justify-center">
                    <Users className="h-4 w-4 text-blood" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Active Donors</p>
                    <p className="text-xl font-bold">400K+</p>
                  </div>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Blood donation session - people donating blood"
                className="w-full h-auto rounded shadow-sm object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          
          <div className="order-1 md:order-2">
            <ScrollReveal delay={100}>
              <h3 className="heading-md mb-6">Our Mission</h3>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="paragraph mb-8">
                The Seneca Blood Drive aims to increase blood donation awareness and participation 
                among students, staff, and the wider community. We believe in the power of collective 
                action to address critical healthcare needs and save lives across Canada.
              </p>
            </ScrollReveal>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={300 + (index * 100)}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal>
          <div className="bg-secondary rounded-xl p-8 mb-20">
            <h3 className="heading-md mb-6 text-center">Our Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 text-center">
                <div className="w-12 h-12 bg-blood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blood" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Increase Donations</h4>
                <p className="text-gray-600">Grow the number of first-time donors by 25% this year.</p>
              </div>
              
              <div className="glass-panel p-6 text-center">
                <div className="w-12 h-12 bg-blood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blood" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Build Community</h4>
                <p className="text-gray-600">Create a supportive network of regular donors and volunteers.</p>
              </div>
              
              <div className="glass-panel p-6 text-center">
                <div className="w-12 h-12 bg-blood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-blood" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Raise Awareness</h4>
                <p className="text-gray-600">Educate 10,000+ people about the importance of blood donation.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-16">
            <h3 className="heading-md mb-10 text-center">Our Story</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="paragraph mb-6">
                  The Seneca Blood Drive began in 2018 as a small student-led initiative at Seneca College. 
                  What started as a one-day event has grown into a year-round campaign that has facilitated 
                  thousands of blood donations across multiple campuses and community centers.
                </p>
                <p className="paragraph">
                  Our partnership with Canadian Blood Services has allowed us to expand our reach and impact, 
                  bringing critical awareness to the ongoing need for blood donors. Each year, we continue to 
                  grow, innovate, and inspire more people to join our cause.
                </p>
              </div>
              <div className="glass-panel p-6">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Seneca Blood Drive team members at a community event" 
                  className="w-full h-auto rounded shadow-sm object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <h3 className="heading-md mb-8 text-center">Our Partners</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="glass-panel p-4">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
