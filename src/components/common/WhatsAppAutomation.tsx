import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { secureAPI } from '@/services/api';
import { CONTACT } from '@/config/site';

interface WhatsAppAutomationProps {
  phoneNumber?: string;
  message?: string;
  autoTrigger?: boolean;
}

const WhatsAppAutomation: React.FC<WhatsAppAutomationProps> = ({
  phoneNumber = CONTACT.whatsapp1,
  message = 'Hi! I am interested in booking a spa appointment at Noida Spa Noida.',
  autoTrigger = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [userMessage, setUserMessage] = useState(message);
  const [isSending, setIsSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Auto-trigger based on user behavior
  useEffect(() => {
    if (autoTrigger) {
      const timer = setTimeout(() => {
        const shouldShow = checkTriggerConditions();
        if (shouldShow) {
          setShowPopup(true);
        }
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [autoTrigger]);

  const checkTriggerConditions = (): boolean => {
    try {
      // Check if user spent more than 30 seconds
      const timeSpent = performance.now();
      if (timeSpent > 30000) return true;

      // Check if user scrolled 50% of page (safe check)
      if (typeof window !== 'undefined' && window.scrollY && document.body.scrollHeight) {
        const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
        if (scrollPercentage > 50) return true;
      }

      // Check if user visited 3+ pages
      const pageViews = parseInt(sessionStorage.getItem('page_views') || '0');
      if (pageViews >= 3) return true;
    } catch (error) {
      console.log('Trigger check failed:', error);
    }

    return false;
  };

  const handleWhatsAppClick = async (customMessage?: string) => {
    const msg = customMessage || userMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
    
    // Track WhatsApp interaction
    try {
      await secureAPI.submitLead({
        name: 'WhatsApp Lead',
        phone: phoneNumber.replace(/\D/g, ''),
        source: 'WhatsApp Click',
        service: 'WhatsApp Automation'
      });
    } catch (error) {
      console.error('WhatsApp tracking failed:', error);
    }

    window.open(whatsappUrl, '_blank');
  };

  const handleQuickMessage = (template: string) => {
    setUserMessage(template);
    handleWhatsAppClick(template);
  };

  const handleCustomMessage = async () => {
    if (!userMessage.trim()) return;
    
    setIsSending(true);
    
    try {
      // Extract phone number from message if present
      const phoneMatch = userMessage.match(/(\d{10})/);
      const detectedPhone = phoneMatch ? phoneMatch[1] : null;

      await secureAPI.submitLead({
        name: 'WhatsApp Custom Lead',
        phone: detectedPhone || phoneNumber.replace(/\D/g, ''),
        source: 'WhatsApp Custom Message',
        service: 'WhatsApp Automation',
        email: userMessage.includes('@') ? extractEmail(userMessage) : undefined
      });

      handleWhatsAppClick(userMessage);
    } catch (error) {
      console.error('Custom message failed:', error);
    } finally {
      setIsSending(false);
    }
  };

  const extractEmail = (text: string): string | undefined => {
    const emailMatch = text.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    return emailMatch ? emailMatch[1] : undefined;
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className="fixed left-6 top-[55%] z-50"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="relative">
          {/* Quick Actions */}
          {isVisible && (
            <div className="absolute left-full top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-2 ml-2 min-w-[240px]">
              <button
                onClick={() => handleQuickMessage('Hello! I would like to book a Thai Massage session.')}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
              >
                 Thai Massage Booking
              </button>
              <button
                onClick={() => handleQuickMessage('Hello! I would like to book a Couple Massage experience.')}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
              >
                 Couple Massage
              </button>
              <button
                onClick={() => handleQuickMessage('Hello! I want an Aroma Therapy session at Noida Spa.')}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
              >
                 Aroma Therapy
              </button>
              <button
                onClick={() => handleQuickMessage('Please call me to confirm my appointment.')}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
              >
                 Request Callback
              </button>
            </div>
          )}

          {/* Main WhatsApp Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <MessageCircle size={24} />
          </button>

          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        </div>
      </div>

      {/* WhatsApp Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="bg-green-500 text-white p-4 rounded-t-2xl">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MessageCircle size={20} />
                WhatsApp Support
              </h3>
              <p className="text-sm opacity-90 mt-1">
                Get instant response from our experts
              </p>
            </div>

            <div className="p-4">
              {/* Quick Templates */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Quick Messages:</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'I want to book a Thai Massage session.',
                    'Please send details for Couple Massage.',
                    'Tell me about your Aroma Therapy service.',
                    'Schedule a private spa appointment.'
                  ].map((template, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickMessage(template)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Message */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Message:
                </label>
                <textarea
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={3}
                  placeholder="Type your message here..."
                />
              </div>

              {/* Phone Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone Number:
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  onChange={(e) => {
                    const phone = e.target.value.replace(/\D/g, '');
                    if (phone.length <= 10) {
                      setUserMessage(prev => prev + ` Phone: ${phone}`);
                    }
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPopup(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCustomMessage}
                  disabled={isSending}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send on WhatsApp
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppAutomation;
