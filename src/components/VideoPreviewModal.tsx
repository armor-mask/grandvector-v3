import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h3 className="text-xl font-bold">AI Automation Preview</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close video preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Content */}
        <div className="p-6">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Video Placeholder */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h4 className="text-lg font-semibold mb-2">60-Second Demo Preview</h4>
              <p className="text-gray-400 text-sm mb-4">
                See how AI agents automate lead generation and customer engagement
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-6 py-2 rounded-lg font-medium transition-all duration-300">
                Play Video
              </button>
            </div>

            {/* Video would be embedded here */}
            {/* <video controls className="w-full h-full object-cover">
              <source src="/demo-preview.mp4" type="video/mp4" />
            </video> */}
          </div>

          {/* Video Description */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">48h</div>
              <div className="text-sm text-gray-400">Setup Time</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400 mb-1">3.2x</div>
              <div className="text-sm text-gray-400">More Qualified Leads</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-sm text-gray-400">AI Availability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewModal;