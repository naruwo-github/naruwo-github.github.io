import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './common/errorFallback'

const domContent = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(domContent)
root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => { }}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)