import React, { ErrorInfo, ReactNode } from "react"

type Props = {
  children?: ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(_: Error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>Please reload the page.</p>
        </>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary