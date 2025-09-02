import React from 'react';
import { Monitor, Smartphone, Database, Palette } from 'lucide-react';

const Development = () => {
  const capabilities = [
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Custom websites and web apps built with modern frameworks'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Database,
      title: 'Dashboards',
      description: 'Real-time analytics and business intelligence platforms'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love'
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Custom <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Development</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond automation—we build the digital products and tools your business needs to thrive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Capabilities */}
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Integration Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Multimedia Integration
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['Voice', 'Video', 'Chat', 'Social', 'Email', 'SMS', 'CRM', 'API'].map((channel, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-medium">{channel}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-xl">
                  <div className="bg-gray-900 rounded-lg px-4 py-2">
                    <span className="text-sm font-semibold">Unified AI Platform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;