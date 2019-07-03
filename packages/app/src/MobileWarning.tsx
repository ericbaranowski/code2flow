import React, {useState} from 'react'
import useDeviceInfo from './util/useDeviceInfo'
import Dialog from './Dialog'

const MobileWarning = () => {
  const {isMobile} = useDeviceInfo()
  const [showMobileWarning, setShowMobileWarning] = useState(isMobile)

  return showMobileWarning ? (
    <Dialog>
      <p>
        <b>
          Sprite doesn't properly support mobile browsers yet. Sorry for that!
          😔
        </b>
      </p>
      <p>
        It's on our radar though. If you want to follow along or contribute
        yourself,{' '}
        <a href="https://github.com/TimoSta/sprite/issues/10">
          take a look at the issue tracker!
        </a>
      </p>
      <button onClick={() => setShowMobileWarning(false)}>
        Use Sprite anyway
      </button>
    </Dialog>
  ) : null
}

export default MobileWarning
