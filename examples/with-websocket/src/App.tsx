import { FormEventHandler, useState } from 'react'
import { useWebSocket } from './useWebSocket'

export default function App() {
  const [messages, setMessages] = useState<string[]>([])

  // Create a WebSocket client and subscribe to incoming events
  // to update the "messages" list in the UI.
  const ws = useWebSocket('ws://localhost:5173/ws', {
    onMessage(event) {
      const message = event.data
      if (typeof message === 'string') {
        setMessages((prevMessages) => prevMessages.concat(message))
      }
    },
  })

  const sendMessage: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const fields = new FormData(form)
    const message = fields.get('message')

    if (message) {
      // Send the chat message over the WebSocket connection.
      ws.send(message)
      form.reset()
    }
  }

  return (
    <div id="chat">
      <ol>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ol>
      <form onSubmit={sendMessage}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
