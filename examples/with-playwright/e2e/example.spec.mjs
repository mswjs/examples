import { expect, test } from '@playwright/test'

const url = (path) => `http://localhost:3000${path}`

test.describe('Succeed Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url('/'))
    await page.locator('button').click()
  })
  test('Books title should be displayed', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Books')
  })
})

test.describe('No Items', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url('/'))
    await page.evaluate(() => {
      const { worker, rest } = window.msw
      worker.use(
        rest.get('/books', (req, res, ctx) => {
          return res(ctx.json([]))
        }),
      )
    })
    await page.locator('button').click()
  })
  test('should display "no items" message.', async ({ page }) => {
    const content = await page.textContent('.noItems')
    await expect(content).toBeTruthy()
  })
})

test.describe('Failed ligin', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url('/'))
    await page.evaluate(() => {
      const { worker, rest } = window.msw
      worker.use(
        rest.post('/login', (req, res, ctx) => {
          return res(ctx.json({ success: false }))
        }),
      )
    })
    await page.locator('button').click()
  })
  test('should display failing message.', async ({ page }) => {
    const locator = page.locator('h1')
    await expect(locator).toHaveText('Failed to login.')
  })
})
