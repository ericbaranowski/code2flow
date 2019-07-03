import MobileDetect from 'mobile-detect'

const useDeviceInfo = () => ({
  isMobile: Boolean(new MobileDetect(window.navigator.userAgent).mobile()),
  isPortrait: window.innerHeight > window.innerWidth
})

export default useDeviceInfo
