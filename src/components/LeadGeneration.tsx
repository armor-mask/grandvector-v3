import React from 'react';
import { TrendingUp, Target, Mail, BarChart3 } from 'lucide-react';

const LeadGeneration = () => {
  const stats = [
    { label: 'Lead Quality', value: '95%', icon: Target },
    { label: 'Open Rates', value: '78%', icon: Mail },
    { label: 'Conversion Rate', value: '34%', icon: TrendingUp },
    { label: 'ROI Increase', value: '500%', icon: BarChart3 }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-semibold">Infinite Lead Generation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Generate <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Unlimited</span>
              <br />Qualified Leads
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our AI-powered email marketing system identifies, engages, and converts 
              prospects at scale—delivering an endless stream of high-quality leads 
              while you focus on closing deals.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Smart prospect identification across industries',
                'Personalized outreach at infinite scale',
                'Real-time lead scoring and qualification',
                'Automated follow-up sequences that convert'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              Start Generating Leads
            </button>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl w-fit mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;