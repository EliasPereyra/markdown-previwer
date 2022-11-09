import { marked } from 'marked'
import { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState('')

  marked.use({
    renderer: new marked.Renderer(),
    langPrefix: 'hljs language-',
    gfm: true,
    breaks: true,
    sanitize: false,
    xhtml: true,
  })

  const handleChange = (e) => {
    const html = marked.parse(e.target.value)
    setContent(html)
  }

  return (
    <section>
      <div>
        <header>Editor</header>
        <textarea onChange={handleChange} id="editor"></textarea>
      </div>

      <div id="preview-container">
        <header>Preview</header>
        <div id="preview">{content}</div>
      </div>
    </section>
  )
}

export default App
