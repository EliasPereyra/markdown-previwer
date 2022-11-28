import { useState } from 'react'
import ReactMarkdwon from 'react-markdown'
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
          <div id="preview">
            <header>
              <b>Preview</b>
            </header>
            <ReactMarkdwon
              children={content}
              remarkPlugins={[remarkGfm, remarkMdx]}
              className="preview-content"
            ></ReactMarkdwon>
          </div>
          <DownloadBtn />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
