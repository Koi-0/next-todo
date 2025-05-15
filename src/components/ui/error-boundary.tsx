"use client";

import { ErrorBoundaryProps, ErrorBoundaryState } from "@/types/todo.type";
import React, { Component } from "react";
import ErrorFallback from "./error-fallback";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <ErrorFallback
            errorTitle={this.props.errorTitle}
            errorMessage={this.props.errorMessage}
          />
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
