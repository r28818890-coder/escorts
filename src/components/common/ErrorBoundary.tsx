import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Uncaught error in React tree:', error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state as State;
    const { children, fallback } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-xl bg-[#111111] border border-[#e11d48]/30 rounded-3xl p-8 shadow-2xl text-left">
            <h2 className="text-2xl font-display font-bold text-[#e11d48] mb-3 text-center">
              Application Error Detected
            </h2>
            <p className="text-xs text-[#a3a3a3] mb-4 text-center">
              An unexpected error occurred during rendering:
            </p>
            {error && (
              <div className="bg-black/80 border border-red-500/30 p-4 rounded-xl text-red-400 font-mono text-xs overflow-x-auto mb-6 max-h-48">
                <p className="font-bold mb-1">{error.name}: {error.message}</p>
                <pre className="text-[10px] text-gray-500 whitespace-pre-wrap">{error.stack}</pre>
              </div>
            )}
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.href = '/';
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
              >
                Go to Home
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2.5 bg-[#222] border border-[#444] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#333]"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
