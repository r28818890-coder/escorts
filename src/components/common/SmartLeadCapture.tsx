import React, { useEffect, useState } from 'react';

interface SmartLeadCaptureProps {
  onLeadDetected?: (phone: string, source: string) => void;
}

/**
 * SmartLeadCapture — only captures data that the user has VOLUNTARILY submitted
 * (e.g., via WhatsApp click or booking form). Does NOT track mouse/keyboard patterns
 * or collect data without user consent — compliant with India's DPDP Act 2023.
 */
const SmartLeadCapture: React.FC<SmartLeadCaptureProps> = ({ onLeadDetected }) => {
  const [hasConsent] = useState<boolean>(() => {
    // Check if user has previously consented (stored after explicit action)
    return sessionStorage.getItem('user_consent') === 'true';
  });

  useEffect(() => {
    if (!hasConsent) return;

    const captureLead = () => {
      const result = captureFromWhatsApp() || captureFromFormSubmission();
      if (result) {
        onLeadDetected?.(result.phone, result.source);
      }
    };

    // Only fire on page hide — not on every mouse move
    const events = ['pagehide'];
    events.forEach(event => {
      window.addEventListener(event, captureLead);
    });

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, captureLead);
      });
    };
  }, [onLeadDetected, hasConsent]);

  // This component renders nothing — it's a background utility
  return null;
};

/**
 * Capture from WhatsApp interactions — user explicitly clicked WhatsApp
 * This is intentional user action, so no consent issue.
 */
const captureFromWhatsApp = (): { phone: string; source: string } | null => {
  const whatsappClicked = sessionStorage.getItem('whatsapp_clicked');
  if (whatsappClicked) {
    const phone = sessionStorage.getItem('whatsapp_number') || '';
    if (phone && /^[6-9]\d{9}$/.test(phone)) {
      return { phone, source: 'WhatsApp Click' };
    }
  }
  return null;
};

/**
 * Capture from booking form submission — user voluntarily submitted phone
 */
const captureFromFormSubmission = (): { phone: string; source: string } | null => {
  const formData = sessionStorage.getItem('submitted_form_data');
  if (formData) {
    try {
      const data = JSON.parse(formData);
      if (data.phone && /^[6-9]\d{9}$/.test(data.phone)) {
        return { phone: data.phone, source: 'Booking Form Submission' };
      }
    } catch {
      // Parse failed — ignore silently
    }
  }
  return null;
};

export default SmartLeadCapture;
