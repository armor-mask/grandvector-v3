import React from 'react';
import { Brain, Rocket, Zap, Target } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Intelligence',
      description: 'Advanced AI agents that learn and adapt to your business needs'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Automate repetitive tasks and focus on what matters most'
    },
    {
      icon: Rocket,
      title: 'Scalability',
      description: 'Grow infinitely without increasing operational overhead'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Data-driven decisions with pinpoint accuracy and insights'
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Grand Vector</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge AI automation with custom development to create 
            limitless scalability for forward-thinking businesses.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with AI-driven automation that doesn't just improve efficiency—
              it fundamentally transforms how companies engage customers, generate leads, and scale operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;