
import React from "react";
import { HeartPulse, Droplets, Activity, Users, ThumbsUp, Clock } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const WhyDonate: React.FC = () => {
  const benefits = [
    {
      icon: <HeartPulse className="h-6 w-6 text-blood" />,
      title: "Save Lives",
      description: "Every donation can save up to three lives through red cells, platelets, and plasma."
    },
    {
      icon: <Droplets className="h-6 w-6 text-blood" />,
      title: "Critical Need",
      description: "Thousands of patients rely on blood products every day for surgeries and treatments."
    },
    {
      icon: <Activity className="h-6 w-6 text-blood" />,
      title: "Health Check",
      description: "Receive a mini health check-up including pulse, blood pressure, and hemoglobin levels."
    },
    {
      icon: <Users className="h-6 w-6 text-blood" />,
      title: "Community Impact",
      description: "Join a community of donors making a real difference in healthcare outcomes."
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-blood" />,
      title: "Feel Good",
      description: "Experience the satisfaction of knowing you've directly helped others in need."
    },
    {
      icon: <Clock className="h-6 w-6 text-blood" />,
      title: "Just One Hour",
      description: "The entire process takes only about an hour from registration to refreshments."
    }
  ];

  const stories = [
    {
      name: "Sarah",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
      story: "After my surgery, I needed 2 units of blood. I'm now a regular donor to give back what I received."
    },
    {
      name: "Michael",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
      story: "My daughter received blood products during cancer treatment. Donors gave us precious extra time together."
    },
    {
      name: "Amina",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      story: "I donate every 56 days. It's such a simple way to make a huge impact in someone's life."
    }
  ];

  return (
    <section id="why-donate" className="py-20 bg-secondary relative">
      <div className="absolute inset-0 bg-texture-light opacity-30 pointer-events-none"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="px-3 py-1 rounded-full bg-blood/10 text-blood text-sm font-medium mb-3 inline-block">
              Why It Matters
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
              Why Your Blood Donation Makes a Difference
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="paragraph max-w-2xl mx-auto">
              Blood cannot be manufactured – it can only come from generous donors. 
              Your donation is essential for patients requiring surgery, cancer treatment, 
              and emergency care across Canada.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={100 * index}>
              <div className="glass-panel p-6 h-full">
                <div className="h-12 w-12 bg-blood/10 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mb-16">
          <ScrollReveal>
            <h3 className="heading-md mb-10 text-center">Blood Donation Facts</h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="glass-panel p-6 text-center">
                <p className="text-blood text-5xl font-bold mb-3">52%</p>
                <p className="text-gray-700">of Canadians will need blood products in their lifetime</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="glass-panel p-6 text-center">
                <p className="text-blood text-5xl font-bold mb-3">1 in 2</p>
                <p className="text-gray-700">Canadians are eligible to donate, but only 1 in 60 actually do</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="glass-panel p-6 text-center">
                <p className="text-blood text-5xl font-bold mb-3">5</p>
                <p className="text-gray-700">donors are needed to support a single car accident victim</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div>
            <h3 className="heading-md mb-10 text-center">Impact Stories</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <div key={index} className="glass-panel p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={`${story.name}'s photo`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center">{story.name}</h4>
                  <p className="text-gray-600 text-center italic">"{story.story}"</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyDonate;
