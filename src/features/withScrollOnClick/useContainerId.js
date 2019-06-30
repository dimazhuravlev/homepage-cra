import { useWindowSize } from 'react-use'

export const useContainerId = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 1024

  return isMobile ? undefined : 'paneContainer'
}
