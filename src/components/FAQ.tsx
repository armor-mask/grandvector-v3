import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can AI automation be implemented?',
      answer: 'Most AI solutions can be deployed within 2-4 weeks. Simple voice callers and chatbots can be live in days, while complex multi-channel automations may take 4-6 weeks for full implementation.'
    },
    {
      question: 'What makes your lead generation "infinite"?',
      answer: 'Our AI system continuously identifies new prospects, personalizes outreach, and scales without human intervention. Unlike traditional methods limited by manual effort, our system can process thousands of leads simultaneously.'
    },
    {
      question: 'Can you integrate with our existing CRM and tools?',
      answer: 'Yes, we integrate with virtually any platform through APIs, webhooks, or custom connections. Our team has experience with 500+ different tools and platforms.'
    },
    {
      question: 'What kind of businesses benefit most from AI automation?',
      answer: 'Any business that relies on customer engagement, lead generation, or repetitive processes. This includes SaaS companies, e-commerce, professional services, real estate, healthcare, and financial services.'
    },
    {
      question: 'How do you ensure AI responses sound natural?',
      answer: 'We use advanced language models trained on your specific industry and brand voice. Each AI agent is customized with your terminology, tone, and business rules to ensure authentic interactions.'
    },
    {
      question: 'What ongoing support do you provide?',
      answer: 'We provide 24/7 monitoring, regular optimization, performance reports, and dedicated support. As your business grows, we continuously improve and scale your AI systems.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about AI automation and our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-600"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;