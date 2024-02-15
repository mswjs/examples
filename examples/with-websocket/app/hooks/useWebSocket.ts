import { useEffect, useRef, useState } from 'react'

export const useWebSocket = (url: string | URL) => {
  const [isReady, setIsReady] = useState(false)
  const ws = useRef<WebSocket>()

  useEffect(() => {
    const socket = new WebSocket(url)

    socket.onopen = () => setIsReady(true)
    socket.onclose = () => setIsReady(false)

    ws.current = socket

    return () => {
      socket.close()
    }
  }, [url])

  // bind is needed to make sure `send` references correct `this`
  return [isReady, ws.current] as [false, undefined] | [true, WebSocket]
}
