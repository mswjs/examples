import type { MetaFunction } from '@remix-run/node'
import { useCallback, useEffect, useState } from 'react'
import { useWebSocket } from '~/hooks/useWebSocket'

export const meta: MetaFunction = () => {
  return [
    { title: 'with-websocket' },
    { name: 'description', content: 'WebSocket + MSW usage example' },
  ]
}

export default function Index() {
  const [ready, socket] = useWebSocket('ws://localhost:3000/ws')
  const [likeCount, setLikeCount] = useState<number>(0)

  useEffect(() => {
    if (ready) {
      socket.send('getLikes')

      socket.addEventListener('message', (event) => {
        console.log('incoming:', event.data)

        setLikeCount(event.data)
      })
    }
  }, [ready, socket])

  const addLike = useCallback(() => {
    if (ready) {
      socket.send('like')
    }
  }, [ready, socket])

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>WebSocket + MSW</h1>
      <div>
        <button onClick={addLike}>Likes: {likeCount}</button>
      </div>
    </div>
  )
}
