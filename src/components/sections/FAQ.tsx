
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "../ui/ScrollReveal";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Who can donate blood?",
      answer: "Most people who are in good health, at least 17 years old, and weigh at least 110 pounds can donate blood. However, eligibility may vary based on medical history, travel, and certain medications. You can use our eligibility tool on the Canadian Blood Services website to check if you qualify."
    },
    {
      question: "How often can I donate blood?",
      answer: "Whole blood donors can donate every 56 days. If you're donating other blood components like platelets, you may be able to donate more frequently. It's important to maintain proper iron levels between donations."
    },
    {
      question: "How long does the donation process take?",
      answer: "The entire process takes about an hour, including registration, a mini health check, the donation itself (which takes 8-10 minutes), and recovery time with refreshments. We recommend scheduling appointments to minimize wait times."
    },
    {
      question: "Does donating blood hurt?",
      answer: "Most donors feel only a brief pinch when the needle is inserted. The actual donation process is typically painless. Our trained staff work to make the experience as comfortable as possible."
    },
    {
      question: "Is it safe to donate blood during COVID-19?",
      answer: "Yes, Canadian Blood Services has implemented enhanced safety measures to protect donors and staff. These include physical distancing, enhanced cleaning, and health screening. Blood donation is considered an essential service."
    },
    {
      question: "What blood types are most needed?",
      answer: "All blood types are needed. O-negative blood (universal donor) is especially valuable in emergency situations. However, we encourage everyone eligible to donate regardless of blood type, as all donations help save lives."
    },
    {
      question: "What happens to my blood after I donate?",
      answer: "After donation, your blood is tested, processed, and separated into components (red cells, platelets, and plasma). These components are then distributed to hospitals across Canada where they can help up to three different patients."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary relative">
      <div className="absolute inset-0 bg-texture-light opacity-30 pointer-events-none"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="px-3 py-1 rounded-full bg-blood/10 text-blood text-sm font-medium mb-3 inline-block">
              Common Questions
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="paragraph max-w-2xl mx-auto">
              Find answers to common questions about blood donation. If you don't see your
              question here, feel free to contact us directly.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={100 * index} className="w-full">
                <AccordionItem value={`item-${index}`} className="glass-panel border-0 shadow-subtle overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blood/5 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
