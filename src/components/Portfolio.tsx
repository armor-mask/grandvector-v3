import React from 'react';

const Portfolio = () => {
  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'HubSpot', category: 'Marketing' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Discord', category: 'Community' },
    { name: 'WhatsApp', category: 'Messaging' },
    { name: 'Zoom', category: 'Video' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Zapier', category: 'Automation' },
    { name: 'Monday.com', category: 'Project Management' },
    { name: 'Mailchimp', category: 'Email Marketing' }
  ];

  const categories = ['All', 'CRM', 'Marketing', 'Communication', 'E-commerce'];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Platform <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Integrations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect with any tool in your tech stack. Our AI agents work seamlessly across all platforms.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                <span className="text-white font-bold text-sm">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <div className="text-sm font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                {integration.name}
              </div>
              <div className="text-xs text-gray-500">
                {integration.category}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Don't see your platform?
            </h3>
            <p className="text-gray-300 mb-6">
              We integrate with any platform through APIs, webhooks, or custom connections.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Request Custom Integration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;