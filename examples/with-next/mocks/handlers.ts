import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({ name: 'John Maverick' })
  }),
]
