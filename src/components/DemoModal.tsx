import React, { useState } from 'react';
import { X, ArrowRight, Calendar, Download, CheckCircle } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    companySize: '',
    role: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.firstName && formData.company) {
      setStep(2);
    }
  };

  const handlePlaybookRequest = () => {
    // Handle playbook download
    console.log('Playbook requested for:', formData.email);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h3 className="text-xl font-bold">
            {step === 1 ? 'Book Your Demo' : 'Select Time Slot'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 1 ? (
          /* Step 1: Lead Capture */
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-300">
                Get a personalized 15-minute demo of AI automation for your business
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all text-sm"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all text-sm"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Work email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                required
              />

              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                required
              >
                <option value="">Annual revenue range</option>
                <option value="2-5M">$2M - $5M</option>
                <option value="5-10M">$5M - $10M</option>
                <option value="10-25M">$10M - $25M</option>
                <option value="25-50M">$25M - $50M</option>
                <option value="50-100M">$50M - $100M</option>
                <option value="100M+">$100M+</option>
              </select>

              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                required
              >
                <option value="">Your role</option>
                <option value="ceo">CEO/Founder</option>
                <option value="cmo">CMO/VP Marketing</option>
                <option value="cro">CRO/VP Sales</option>
                <option value="growth">Head of Growth</option>
                <option value="ops">Operations Leader</option>
                <option value="other">Other Leadership</option>
              </select>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Continue to Calendar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Alternative CTA */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-3 text-center">
                Not ready for a demo?
              </p>
              <button
                onClick={handlePlaybookRequest}
                className="w-full border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-500/10 flex items-center justify-center gap-2 text-gray-300 hover:text-blue-400"
              >
                <Download className="w-4 h-4" />
                Get AI Automation Playbook
              </button>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </div>
        ) : (
          /* Step 2: Calendar Selection */
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-300">
                Hi {formData.firstName}! Choose your preferred time slot
              </p>
            </div>

            {/* Calendar Widget Placeholder */}
            <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
              <Calendar className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-400 mb-2 font-medium">
                Calendar Integration
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Calendly or Cal.com widget embeds here
              </p>
              <div className="space-y-2 text-xs text-gray-600">
                <p>• 15-minute personalized demo</p>
                <p>• See AI automation in action</p>
                <p>• Get custom implementation plan</p>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setStep(1)}
              className="w-full mt-4 text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              ← Back to details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;