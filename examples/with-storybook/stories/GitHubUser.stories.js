import React from 'react'
import { rest } from 'msw'
import { GitHubUser } from '../src/GitHubUser'
import { worker } from '../src/mocks/browser'

export default {
  title: 'GitHub User',
  component: GitHubUser,
  decorators: [
    (Story) => {
      // Reset request handlers added in individual stories.
      worker.resetHandlers()
      return <Story />
    },
  ],
}

export const DefaultBehavior = () => <GitHubUser username="hamilton.elly" />

export const LoadingState = () => <GitHubUser username="hamilton.elly" />
LoadingState.decorators = [
  (Story) => {
    worker.use(
      rest.get('https://api.github.com/users/:username', (req, res, ctx) => {
        return res(ctx.delay('infinite'))
      }),
    )

    return <Story />
  },
]

export const ErrorState = () => <GitHubUser username="hamilton.elly" />
ErrorState.decorators = [
  (Story) => {
    worker.use(
      rest.get('https://api.github.com/users/:username', (req, res, ctx) => {
        return res.once(ctx.status(500))
      }),
    )

    return <Story />
  },
]

// Internal parameters used for testing this usage example.
// This does NOT have to be in your Storybook.
DefaultBehavior.parameters = {
  async puppeteerTest(page) {
    await page.reload()
    await page.waitFor('[data-testid="full-name"')

    // This is but a minor sacrifice to please the Puppeteer gods.
    // Removing this line executes the story in a "No story selected"
    // state, despite the command above to await the element.
    await page.waitForResponse('https://api.github.com/users/hamilton.elly')

    const fullName = await page.$eval(
      '[data-testid="full-name"',
      (element) => element.textContent,
    )

    expect(fullName).toBe('Eliza Hamilton')
  },
}
