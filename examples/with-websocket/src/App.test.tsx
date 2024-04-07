import { ws } from 'msw'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.tsx'
import { server } from './mocks/server.ts'

const api = ws.link('ws://localhost:5173/ws')

it('sends a chat message', async () => {
  server.use(
    api.on('connection', ({ client }) => {
      client.addEventListener('message', (event) => {
        api.broadcast(event.data)
      })
    }),
  )

  render(<App />)

  const messageInput = screen.getByRole('textbox', { name: /message/i })
  await userEvent.type(messageInput, 'hello world')
  const sendButton = screen.getByRole('button', { name: /send/i })
  await userEvent.click(sendButton)

  const messagesList = screen.getByRole('list', { name: /messages/i })

  await waitFor(() => {
    expect(messagesList).toHaveTextContent('hello world')
  })
})
