import {useState, useEffect, useRef} from 'react'
import navaid from 'navaid'
import {encode, decode} from './code'

const useUrlState = (
  defaultValue: string,
  urlBase: string = ''
): [string, (value: string) => void] => {
  const {current: router} = useRef(navaid(''))

  const [localValue, setLocalValue] = useState<string>('')

  const setValue = (state: string) => {
    router.route(`${urlBase}/${encode(state)}`)
  }

  useEffect(() => {
    router.on(`/`, () => {
      setValue(defaultValue)
    })
    router.on(`${urlBase}/*`, (param: {wild: string}) => {
      setLocalValue(decode(param.wild))
    })
    router.listen('')
  }, [])

  return [localValue, setValue]
}

export default useUrlState
