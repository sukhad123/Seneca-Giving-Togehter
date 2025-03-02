
import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Donating blood became a regular part of my life after my sister needed multiple transfusions during cancer treatment. It's such a simple way to make a profound difference.",
      author: "Michael Chen",
      role: "Regular Donor",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "After my accident, I needed eight units of blood to survive. I'm forever grateful to the anonymous donors who saved my life. Now I donate whenever I can and encourage others.",
      author: "Sarah Johnson",
      role: "Blood Recipient & Donor",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "As a nurse, I see the critical need for blood donations every day. The Give Together campaign has helped us maintain supply during challenging times.",
      author: "Dr. Anita Patel",
      role: "Emergency Medicine",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-texture-light opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/3 -left-32 h-64 w-64 bg-blood/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="px-3 py-1 rounded-full bg-blood/10 text-blood text-sm font-medium mb-3 inline-block">
              Testimonials
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="heading-lg mb-6">Stories That Inspire</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="paragraph max-w-2xl mx-auto">
              Every donation has a story. Here are just a few of the many lives 
              touched by the generosity of blood donors across Canada.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div className={cn(
                "glass-panel h-full p-8 flex flex-col",
                index === 1 ? "md:-mt-8" : ""
              )}>
                <Quote className="h-10 w-10 text-blood/20 mb-4" />
                <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <ScrollReveal>
            <a
              href="#donate"
              className="px-6 py-3 rounded-full bg-blood text-white hover:bg-blood/90 transition-all duration-300 font-medium shadow-md inline-block"
            >
              Join Our Donors
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
