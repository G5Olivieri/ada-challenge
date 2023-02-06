import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactModal from 'react-modal'
import App from './app'

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';


ReactModal.setAppElement('#modal')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
