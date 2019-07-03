import React from 'react'
import styles from './Dialog.module.css'

interface Props {
  children: React.ReactNode
}

const Dialog = ({children}: Props) => (
  <div className={styles.dialog}>{children}</div>
)

export default Dialog
