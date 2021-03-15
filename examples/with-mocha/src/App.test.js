import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('App tests', () => {
  it('renders App without crashing', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByTestId('fetched').textContent).toBe('true')
    })
  })
})
