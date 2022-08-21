import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import ErrorBoundary from './common/errorBoundary'

const domContent = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(domContent)
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App/>
    </ErrorBoundary>
  </React.StrictMode>
)