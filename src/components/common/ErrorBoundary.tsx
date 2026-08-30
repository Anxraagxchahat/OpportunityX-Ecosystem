import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorState } from './ErrorState';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Uncaught error in OpportunityX component tree:', error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="py-12 sm:py-20 max-w-2xl mx-auto">
          <ErrorState
            statusCode={500}
            title="Ecosystem Runtime Notice"
            description="An unexpected condition occurred while rendering this component. You can retry the view or return to the home directory."
            onRetry={this.handleReset}
            showHomeButton={true}
            showBackButton={true}
          />
        </div>
      );
    }

    return this.props.children;
  }
}
