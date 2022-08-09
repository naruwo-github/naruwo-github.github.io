import React from 'react'
import ReactDOM from 'react-dom/client'

const domContent = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(domContent)
root.render(
  <React.StrictMode>
    <h1>Contents to write</h1>
    <ul>
        <li>name</li>
        <li>image</li>
        <li>mail</li>
        <li>career</li>
        <li>technical stuck</li>
        <li>github</li>
        <li>hatena</li>
        <li>qiita</li>
    </ul>
  </React.StrictMode>
)
