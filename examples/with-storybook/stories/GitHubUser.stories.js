import React from 'react'
import { rest } from 'msw'
import { GitHubUser } from '../src/GitHubUser'
import { handlers } from '../src/mocks/handlers'

export default {
  title: 'GitHub User',
  component: GitHubUser,
}

export const DefaultBehavior = () => <GitHubUser username="hamilton.elly" />
DefaultBehavior.parameters = {
  msw: handlers,

  // Internal parameters used for testing this usage example.
  // This does NOT have to be in your Storybook.
  puppeteerTest,
}

export const LoadingState = () => <GitHubUser username="hamilton.elly" />
LoadingState.parameters = {
  msw: [
    rest.get('https://api.github.com/users/:username', (req, res, ctx) => {
      return res(ctx.delay('infinite'))
    }),
  ],
}

export const ErrorState = () => <GitHubUser username="hamilton.elly" />
ErrorState.parameters = {
  msw: [
    rest.get('https://api.github.com/users/:username', (req, res, ctx) => {
      return res.once(ctx.status(500))
    }),
  ],
}

async function puppeteerTest(page) {
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
}
