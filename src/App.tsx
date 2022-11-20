import { useState } from 'react'
import ReactMarkdwon from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { defaultText } from './defaultText'

import './App.css'

function App() {
  const [content, setContent] = useState(defaultText)

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <section>
      <div>
        <header>Editor</header>
        <textarea
          id="editor"
          onChange={handleChange}
          value={content}
        ></textarea>
      </div>

      <div id="preview-container">
        <header>Preview</header>
        <div id="preview">
          <ReactMarkdwon
            children={content}
            remarkPlugins={[remarkGfm]}
          ></ReactMarkdwon>
        </div>
      </div>
    </section>
  )
}

export default App
