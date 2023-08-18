import { useState } from 'react'
import remarkGfm from 'remark-gfm'
import remarkMdx from 'remark-mdx'
import remarkBreaks from 'remark-breaks'

import { defaultText } from './defaultText'

import './App.css'
import Footer from './components/Footer'
import DownloadBtn from './components/DownloadBtn'

function App() {
  const [content, setContent] = useState(defaultText)

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <section id="layout">
      <div id="editor-container">
        <div>
          <header>
            <strong>Editor</strong>
          </header>
          <textarea
            id="editor"
            onChange={handleChange}
            value={content}
          ></textarea>
        </div>

        <div id="preview-container">
          <div id="preview">
            <header>
              <strong>Preview</strong>
            </header>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default App
