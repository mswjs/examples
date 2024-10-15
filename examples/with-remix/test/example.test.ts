import { test, expect } from '@playwright/test'
import { http, HttpResponse } from 'msw'
import { server } from '~/mocks/node'

test('receives mocked responses in loaders', async ({ page }) => {
  server.use(
    http.get('https://api.example.com/user', () => {
      return HttpResponse.json({
        firstName: 'Leo',
        lastName: 'Messi',
      })
    }),
  )

  await page.goto('/', { waitUntil: 'networkidle' })

  const greeting = page.locator('#server-side-greeting')
  await expect(greeting).toHaveText('Hello, Leo!')
})

test('receives mocked responses on browser runtime', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const fetchMoviesButton = page.locator('#fetch-movies-button')
  await fetchMoviesButton.click()
  await page.waitForLoadState('networkidle')

  const moviesList = page.locator('#movies-list')
  await moviesList.waitFor()
  const movieItems = await moviesList.locator('li').allTextContents()

  expect(movieItems).toEqual([
    'The Lord of The Rings',
    'The Matrix',
    'Star Wars: The Empire Strikes Back',
  ])
})
