import React from 'react';

const TrustedBy = () => {
  const partners = [
    'Salesforce', 'HubSpot', 'Slack', 'Discord', 'WhatsApp', 'Zoom'
  ];

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300 font-semibold text-lg cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;