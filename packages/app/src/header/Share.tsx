import React, {useRef} from 'react'
import {encode} from '../util/code'
import styles from './Share.module.css'

const {location} = window
const domain = `${location.protocol}//${location.hostname}${
  location.port ? `:${location.port}` : ''
}`

interface Props {
  code: string
}

const Share = ({code}: Props) => {
  const inputEl = useRef<HTMLInputElement>(null)

  return (
    <div className={styles.share}>
      <label className={styles.label} htmlFor="shareLink">
        Embed as PNG:
      </label>
      <input
        id="shareLink"
        readOnly
        value={`${domain}/chart/${encode(code)}.png`}
        ref={inputEl}
        onFocus={() => inputEl.current && inputEl.current.select()}
      />
    </div>
  )
}

export default Share
