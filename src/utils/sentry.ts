// Sentry Configuration - Safe Stub if Sentry package is optional
export const initSentry = () => {
  console.log('Sentry monitoring initialized.');
};

export const useErrorTracking = () => {
  const trackError = (error: Error, context?: Record<string, any>) => {
    console.error('Error tracked:', error, context);
  };

  const trackUserAction = (action: string, data?: Record<string, any>) => {
    console.log('User action tracked:', action, data);
  };

  const trackLead = (leadData: { name: string; phone: string; city?: string; state?: string }) => {
    console.log('Lead tracked:', leadData.name);
  };

  return { trackError, trackUserAction, trackLead };
};

export default { initSentry, useErrorTracking };
