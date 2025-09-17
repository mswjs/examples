import { expect } from '@playwright/test'
import { test } from './playwright.utils.js'

test('receives a mocked response to a REST API request', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const greetingText = page.locator('#greeting')
  await greetingText.isVisible()

  await expect(greetingText).toHaveText('Hello, John!')
})

test('receives a mocked response to a GraphQL API request', async ({
  page,
}) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const moviesList = page.locator('#graphql-response')
  await moviesList.isVisible()
  const movieItems = await moviesList.locator('li').allTextContents()

  expect(movieItems).toEqual([
    'The Lord of The Rings',
    'The Matrix',
    'Star Wars: Empire Strikes Back',
  ])
})
