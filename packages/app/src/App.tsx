import React, {useState} from 'react'
import SplitPane from 'react-split-pane'
import useDeviceInfo from './util/useDeviceInfo'
import useUrlState from './util/useUrlState'
import {Header} from './header'
import {Editor} from './editor'
import {Preview} from './preview'
import MobileWarning from './MobileWarning'
import defaultCode from './defaultCode'
import styles from './App.module.css'

const App = () => {
  const [code, setCode] = useUrlState(defaultCode, '/edit')

  const {isPortrait} = useDeviceInfo()

  return (
    <div className={styles.app}>
      <Header code={code} />

      <div className={styles.body}>
        <SplitPane
          split={isPortrait ? 'horizontal' : 'vertical'}
          defaultSize="50%"
        >
          <Editor code={code} onChange={setCode} />
          <Preview code={code} />
        </SplitPane>
      </div>

      <MobileWarning />
    </div>
  )
}

export default App
