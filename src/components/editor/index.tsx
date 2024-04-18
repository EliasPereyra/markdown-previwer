import { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkHeadingGap from 'remark-heading-gap'
import remarkMdx from 'remark-mdx'
import rehypeHighlight from 'rehype-highlight'
import remarkToc from 'remark-toc'

import { defaultText } from '../../defaultText'

import './styles.css'

export function Editor() {
  const [content, setContent] = useState(defaultText)

  const handleChange = (e) => {
    setContent(e.target.value)
  }
  return (
    <main id="editor-wrapper">
      <div id="editor__markdown-side">
        <header id="editor__markdown-header">
          <h3>Editor</h3>
        </header>
        <textarea
          id="editor"
          onChange={handleChange}
          value={content}
        ></textarea>
      </div>

      <div id="editor__preview-side">
        <div id="preview">
          <header id="editor__preview-header">
            <h3>Preview</h3>
          </header>
          <Markdown
            className="editor__preview-content"
            remarkPlugins={[remarkGfm, remarkHeadingGap, remarkMdx, remarkToc]}
            rehypePlugins={[rehypeHighlight]}
          >
            {content}
          </Markdown>
        </div>
      </div>
    </main>
  )
}
