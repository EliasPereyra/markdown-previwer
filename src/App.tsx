import { useState } from 'react'
import ReactMarkdwon from 'react-markdown'

import './App.css'

function App() {
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <section>
      <div>
        <header>Editor</header>
        <textarea onChange={handleChange} id="editor"></textarea>
      </div>

      <div id="preview-container">
        <header>Preview</header>
        <div id="preview">
          <ReactMarkdwon>{content}</ReactMarkdwon>
        </div>
      </div>
    </section>
  )
}

export default App
