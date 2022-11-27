import { useState } from 'react'
import ReactMarkdwon from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMdx from 'remark-mdx'
import remarkBreaks from 'remark-breaks'

import { defaultText } from './defaultText'

import './App.css'
import Footer from './components/Footer'

function App() {
  const [content, setContent] = useState(defaultText)

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <div>
      <section>
        <div>
          <header>
            <b>Editor</b>
          </header>
          <textarea
            id="editor"
            onChange={handleChange}
            value={content}
          ></textarea>
        </div>

        <div id="preview-container">
          <header>
            <b>Preview</b>
          </header>
          <div id="preview">
            <ReactMarkdwon
              children={content}
              remarkPlugins={[remarkGfm, remarkMdx]}
            ></ReactMarkdwon>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
