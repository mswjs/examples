import { ws, delay } from 'msw'
import { setupWorker } from 'msw/browser'

const service = ws.link('wss://*')

function formatMessage(username: string, message: string) {
  return JSON.stringify({ username, message })
}

const worker = setupWorker(
  service.on('connection', ({ client }) => {
    client.addEventListener('message', async (event) => {
      const { username, message } = JSON.parse(event.data)

      // First, broadcast the client message to other clients.
      service.broadcastExcept(client, formatMessage(username, message))

      await delay()

      // Then, respond to the message for everyone to see.
      service.broadcast(formatMessage('msw-bot', `Welcome, ${username}!`))

      setTimeout(() => {
        service.broadcast(formatMessage('msw-bot', 'How are you?'))
      }, 1500)
    })
  }),
)

await worker.start()

// App.
const chat = document.getElementById('chat') as HTMLOListElement
const form = document.getElementById('chat-message') as HTMLFormElement

const client = new WebSocket('wss://example.com')
client.onerror = () => console.error('WebSocket client error')

client.addEventListener('open', () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)
    const username = data.get('username') as string
    const message = data.get('message') as string
    form.reset()

    renderMessage(username, message)
    client.send(formatMessage(username, message))
  })
})

client.addEventListener('message', (event) => {
  const { username, message } = JSON.parse(event.data)
  renderMessage(username, message, 'incoming')
})

function renderMessage(
  author: string,
  text: string,
  type: 'incoming' | 'outgoing' = 'outgoing',
) {
  const messageParent = document.createElement('li')

  const authorText = document.createElement('strong')
  authorText.textContent = author
  authorText.classList.add('author')

  const message = document.createElement('span')
  message.textContent = text
  message.classList.add('message', type)

  messageParent.appendChild(authorText)
  messageParent.appendChild(message)
  chat.appendChild(messageParent)
  chat.scrollTop = chat.scrollHeight
}
