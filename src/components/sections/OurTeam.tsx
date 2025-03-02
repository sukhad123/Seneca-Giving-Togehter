
import React from "react";
import { Mail, Linkedin, Twitter } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Campaign Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      bio: "Emily has been with the Seneca Blood Drive since its inception and brings 15 years of experience in healthcare advocacy.",
      social: {
        email: "emily@example.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Community Outreach",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
      bio: "Michael coordinates our community partnerships and volunteer program, expanding our reach across the GTA.",
      social: {
        email: "michael@example.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Aisha Patel",
      role: "Medical Liaison",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
      bio: "As a registered nurse, Aisha ensures our campaign follows best practices and provides accurate health information.",
      social: {
        email: "aisha@example.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "David Kim",
      role: "Student Ambassador",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
      bio: "David leads our student engagement initiatives and has helped increase first-time donors by 30% on campus.",
      social: {
        email: "david@example.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  const volunteers = [
    { name: "Sarah Liang", role: "Event Coordinator" },
    { name: "James Wilson", role: "Marketing Specialist" },
    { name: "Priya Sharma", role: "Digital Content Creator" },
    { name: "Carlos Mendez", role: "Volunteer Coordinator" },
    { name: "Fatima Ahmed", role: "Donor Relations" },
    { name: "Ryan Thompson", role: "Technical Support" }
  ];

  return (
    <section id="our-team" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-texture-light opacity-40 pointer-events-none"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="px-3 py-1 rounded-full bg-blood/10 text-blood text-sm font-medium mb-3 inline-block">
              Meet Our Team
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
              The People Behind the Seneca Blood Drive
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="paragraph max-w-2xl mx-auto">
              Our dedicated team of professionals, students, and volunteers works tirelessly 
              to make each blood drive a success and to spread awareness about the importance 
              of blood donation.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={100 * index}>
              <div className="glass-panel p-6 h-full">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blood font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-blood transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blood transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blood transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-secondary rounded-xl p-8 mb-10">
            <h3 className="heading-md mb-8 text-center">Our Volunteer Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {volunteers.map((volunteer, index) => (
                <div key={index} className="glass-panel p-4 text-center">
                  <h4 className="text-lg font-semibold">{volunteer.name}</h4>
                  <p className="text-gray-600">{volunteer.role}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <h3 className="heading-md mb-6">Join Our Team</h3>
            <p className="paragraph max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals to join our team of volunteers. 
              If you're interested in making a difference in your community, please get in touch!
            </p>
            <a href="#signup" className="px-6 py-3 rounded-full bg-blood text-white hover:bg-blood/90 transition-all duration-300 font-medium shadow-md inline-block">
              Volunteer With Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OurTeam;
