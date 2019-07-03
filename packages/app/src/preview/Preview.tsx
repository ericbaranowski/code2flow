import React from 'react'
import Render from './Render'
import styles from './Preview.module.css'

interface Props {
  code: string
}

const Preview = ({code}: Props) => {
  return (
    <div className={styles.preview}>
      <Render code={code} />
    </div>
  )
}

export default Preview
