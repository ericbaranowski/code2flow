import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import registerMermaidLanguage from '../util/MermaidMonaco'
import styles from './Editor.module.css'

const options = {
  automaticLayout: true,
  autoIndent: true,
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  minimap: {enabled: false},
  fontFamily: 'Fira Code',
  fontLigatures: true
}

interface Props {
  code: string
  onChange: (value: string) => void
}

const Editor = ({code, onChange}: Props) => (
  <div className={styles.editor}>
    <MonacoEditor
      value={code}
      onChange={onChange}
      options={options}
      theme="mermaid-theme"
      language="mermaid"
      editorWillMount={registerMermaidLanguage}
    />
  </div>
)

export default Editor
