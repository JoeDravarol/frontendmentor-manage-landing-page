import { useState, useEffect } from 'react'

export const useWindowSize = (callback) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}