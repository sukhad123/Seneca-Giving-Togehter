
import React from "react";
import { Calendar, MapPin, HeartPulse, ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const SignUp: React.FC = () => {
  const upcomingDrives = [
    {
      date: "September 15, 2023",
      location: "Seneca College - Newnham Campus",
      time: "10:00 AM - 4:00 PM",
      spots: 23
    },
    {
      date: "September 29, 2023",
      location: "Seneca College - King Campus",
      time: "9:00 AM - 3:00 PM",
      spots: 17
    },
    {
      date: "October 10, 2023",
      location: "Seneca College - Markham Campus",
      time: "11:00 AM - 5:00 PM",
      spots: 28
    }
  ];

  return (
    <section id="signup" className="py-20 bg-accent relative">
      <div className="absolute inset-0 bg-texture-light opacity-30 pointer-events-none"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="px-3 py-1 rounded-full bg-blood/10 text-blood text-sm font-medium mb-3 inline-block">
              Get Involved
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
              Ready to Make a Difference? Sign Up Today!
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="paragraph max-w-2xl mx-auto">
              Whether you're a first-time donor or a regular contributor, we make it easy 
              to schedule your next blood donation. Sign up for an upcoming blood drive 
              or volunteer to help with our campaign.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal>
            <div>
              <h3 className="heading-md mb-6">Register to Donate</h3>
              <p className="paragraph mb-8">
                By registering in advance, you help us prepare for your visit and 
                reduce wait times. The entire donation process takes about an hour, 
                and your single donation can save up to three lives.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">Upcoming Blood Drives</h4>
              <div className="space-y-4">
                {upcomingDrives.map((drive, index) => (
                  <div key={index} className="glass-panel p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blood text-white px-3 py-1 text-sm font-medium">
                      {drive.spots} spots left
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-blood mr-2" />
                          <span className="font-semibold">{drive.date} • {drive.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-blood mr-2" />
                          <span>{drive.location}</span>
                        </div>
                      </div>
                      <a 
                        href="#" 
                        className="mt-4 sm:mt-0 px-4 py-2 bg-blood text-white rounded-full hover:bg-blood/90 transition-colors inline-flex items-center text-sm font-medium"
                      >
                        Book Now <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-panel p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Sign Up Form</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood/50"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood/50"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood/50"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in:</label>
                  <select
                    id="interest"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood/50"
                  >
                    <option value="">Select an option</option>
                    <option value="donate">Donating blood</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="both">Both donating and volunteering</option>
                  </select>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to receive communications about upcoming blood drives and volunteer opportunities.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blood text-white rounded-full hover:bg-blood/90 transition-colors font-medium flex items-center justify-center"
                >
                  <HeartPulse className="mr-2 h-5 w-5" />
                  Sign Up Now
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <h3 className="heading-md mb-6">Can't Make These Dates?</h3>
            <p className="paragraph max-w-2xl mx-auto mb-8">
              If none of our scheduled blood drives work for you, you can still donate at any 
              Canadian Blood Services location. Find a donor center near you and schedule an 
              appointment directly.
            </p>
            <a 
              href="https://www.blood.ca/en/blood/donating-blood/find-a-clinic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-full border-2 border-blood text-blood hover:bg-blood hover:text-white transition-all duration-300 font-medium inline-block"
            >
              Find a Donor Center
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SignUp;
