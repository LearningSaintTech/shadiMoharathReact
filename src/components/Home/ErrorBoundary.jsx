import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Return an updated state to indicate an error occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error or send it to an error tracking service
    console.error('Error occurred:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI when an error occurs
      return <h1>Something went wrong in the <Together> component.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
 