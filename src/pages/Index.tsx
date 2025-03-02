
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhyDonate from '@/components/sections/WhyDonate';
import OurTeam from '@/components/sections/OurTeam';
import FAQ from '@/components/sections/FAQ';
import Testimonials from '@/components/sections/Testimonials';
import SignUp from '@/components/sections/SignUp';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyDonate />
      <OurTeam />
      <FAQ />
      <SignUp />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
