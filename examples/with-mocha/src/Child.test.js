import React from 'react'
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import { rest } from 'msw'
import Child from './Child'
import mswServer from '../mocks/server'

const mockedResult = {
  msgCode: 0,
  msgDesc: 'OVERRIDE: Request processed successfully',
  data: {
    data: {
      createdBy: 'OVERRIDE: CJ Child',
      createdDate: '02/18/2021',
    },
  },
}

afterEach(async () => {
  cleanup()
  mswServer.resetHandlers()
})

describe('Child tests', () => {
  it('renders Child without crashing', async () => {
    render(<Child />)

    await waitFor(() => {
      expect(screen.getByTestId('fetched').textContent).toBe('true')
    })
  })

  it('fetches an overriden handler and renders the result', async () => {
    mswServer.use(
      rest.post('http://example.com/api/getChildList', (req, res, ctx) => {
        return res(
          ctx.set('access-control-allow-origin', '*'),
          ctx.json(mockedResult),
        )
      }),
    )

    render(<Child />)

    await waitFor(() => {
      expect(screen.getByTestId('fetched').textContent).toBe('true')
      expect(screen.getByTestId('result').textContent).toEqual(
        JSON.stringify(mockedResult),
      )
    })
  })

  it('fetches the response from a reset handler after being overridden and renders the result', async () => {
    render(<Child />)

    await waitFor(() => {
      expect(screen.getByTestId('fetched').textContent).toBe('true')
      expect(screen.getByTestId('result').textContent).not.toEqual(
        JSON.stringify(mockedResult),
      )
    })
  })
})
