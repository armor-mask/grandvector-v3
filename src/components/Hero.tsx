import React, { useState } from 'react';
import { ArrowRight, Play, X, CheckCircle } from 'lucide-react';
import DemoModal from './DemoModal';
import VideoPreviewModal from './VideoPreviewModal';

interface HeroProps {
  variant?: 'problem-first' | 'future-first';
}

const Hero: React.FC<HeroProps> = ({ variant = 'problem-first' }) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const heroContent = {
    'problem-first': {
      headline: 'Stop Losing $240K+ Annually to Manual Lead Generation',
      subheadline: 'AI-powered outreach generates 3.2x more qualified leads than traditional SDR teams, according to Salesforce\'s 2024 State of Sales report.',
      ctaPrimary: 'Get My 15-Min Demo',
      ctaSecondary: 'Watch 60s Preview'
    },
    'future-first': {
      headline: 'Scale Lead Generation with AI Agents — No Extra SDR Hires',
      subheadline: '87% of sales organizations will use AI for lead generation by 2026, with early adopters seeing 40% higher conversion rates (Gartner Sales Technology Survey 2024).',
      ctaPrimary: 'Get My 15-Min Demo',
      ctaSecondary: 'Watch 60s Preview'
    }
  };

  const content = heroContent[variant];

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/assets/logo_vector-v3.svg" 
              alt="Grand Vector Logo" 
              className="w-10 h-10"
            />
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Grand Vector
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {content.headline}
            </span>
          </h1>

          {/* Subheadline with Industry Stat */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {content.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => setShowDemoModal(true)}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2 min-w-[200px]"
            >
              {content.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setShowVideoModal(true)}
              className="group border border-gray-600 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10 flex items-center gap-2 min-w-[200px]"
            >
              <Play className="w-5 h-5" />
              {content.ctaSecondary}
            </button>
          </div>

          {/* Industry Proof Stat */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400 uppercase tracking-wider">Industry Research</span>
            </div>
            <p className="text-lg font-semibold text-white">
              95% of sales leaders say AI will transform lead generation by 2026
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Source: McKinsey Global Institute, "The Age of AI" 2024
            </p>
          </div>

          {/* Trusted By Strip */}
          <div className="mt-16">
            <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-6">
              Backed by research from
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['McKinsey', 'Gartner', 'Salesforce', 'Forrester', 'Deloitte'].map((source, index) => (
                <div key={index} className="text-gray-400 font-medium text-lg">
                  {source}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />

      {/* Video Preview Modal */}
      <VideoPreviewModal 
        isOpen={showVideoModal} 
        onClose={() => setShowVideoModal(false)} 
      />
    </>
  );
};

export default Hero;