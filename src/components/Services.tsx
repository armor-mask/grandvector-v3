import React from 'react';
import { Phone, Calendar, MessageCircle, Users, Mail, Code, Puzzle, Mic, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: 'AI Voice Callers',
      description: 'Intelligent voice agents that handle customer calls with human-like conversation',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'AI Appointment Setters',
      description: 'Automated scheduling that converts prospects into booked meetings seamlessly',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Support',
      description: '24/7 intelligent support that resolves issues faster than human agents',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Lead Capture & Process Automation',
      description: 'Smart systems that capture, qualify, and nurture leads automatically',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Mail,
      title: 'Infinite Lead Generation',
      description: 'AI-powered email marketing that generates unlimited qualified prospects',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke websites, apps, and dashboards tailored to your workflow',
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      icon: Puzzle,
      title: 'Platform Integrations',
      description: 'Seamless connections with any CRM, tool, or multimedia channel',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Mic,
      title: 'Multimedia Channel AI',
      description: 'Voice, video, chat, and social media automation in one platform',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive automation services that transform how you engage customers and scale operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/80 border border-gray-800 hover:border-gray-600 rounded-2xl p-6 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
            >
              {/* Icon */}
              <div className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-blue-400 text-sm font-semibold flex items-center gap-1">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;