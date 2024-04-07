import { useEffect, useRef, useState } from 'react'

type WebSocketData = string | ArrayBuffer | Blob | ArrayBufferView

interface WebSocketOptions {
  onOpen?: (event: Event) => void
  onMessage?: (event: MessageEvent<WebSocketData>) => void
  onError?: (event: Event) => void
  onClose?: (event: CloseEvent) => void
}

interface WebSocketClient {
  send: (data: WebSocketData) => void
}

/**
 * @note This is a dummy WebSocket client hook.
 * Please use a third-party library for a proper WebSocket
 * client handling. Do NOT use this hook in production.
 */
export function useWebSocket(
  url: URL | string,
  options?: WebSocketOptions,
): WebSocketClient {
  const [ws, setWs] = useState<WebSocket | null>(null)

  // Forcing this effect to only run once, bypassing
  // the Strict Mode in React. Otherwise, this hooks runs twice,
  // opens the first WebSocket connection, then closes it, then
  // opens another one again.
  useEffectOnce(() => {
    const ws = new WebSocket(url)

    if (options?.onOpen) {
      ws.addEventListener('open', options.onOpen)
    }
    if (options?.onMessage) {
      ws.addEventListener('message', options.onMessage)
    }
    if (options?.onError) {
      ws.addEventListener('error', options.onError)
    }
    if (options?.onClose) {
      ws.addEventListener('close', options.onClose)
    }

    setWs(ws)

    return () => {
      ws.close()
    }
  })

  return {
    send: ws
      ? ws.send.bind(ws)
      : () => {
          throw new Error(
            'Failed to send data over WebSocket: socket not connected',
          )
        },
  }
}

function useEffectOnce(callback: () => void) {
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) {
      return
    }

    callback()
    hasRun.current = true
  }, [callback])
}
