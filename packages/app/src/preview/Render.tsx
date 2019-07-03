import React, {useState, useEffect} from 'react'
import {encode} from '../util/code'
import styles from './Render.module.css'

interface Props {
  code: string
}
const Render = ({code}: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(
    () => {
      setLoading(true)
    },
    [code]
  )

  const encoded = encode(code)

  return (
    <img
      className={`${styles.render} ${loading ? styles.loading : ''}`}
      src={`/chart/${encoded}.png`}
      alt="Chart preview"
      onLoad={() => setLoading(false)}
    />
  )
}

export default Render
