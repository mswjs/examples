import { test, expect } from '@playwright/test'

test('sends a chat message', async ({ page }) => {
  await page.goto('/')

  // Send a chat message.
  await page.getByRole('textbox', { name: /message/i }).fill('hello world')
  await page.getByRole('button', { name: /send/i }).click()

  // Must display the sent message in the UI.
  await expect(page.getByRole('list', { name: /messages/i })).toHaveText(
    'hello world',
  )
})

test('broadcasts a chat message to all clients', async ({ page, context }) => {
  await page.goto('/')

  // Open the application in multiple tabs.
  const secondPage = await context.newPage()
  await secondPage.goto('/')

  await page.bringToFront()

  // Send a chat message from the first tab.
  await page.getByRole('textbox', { name: /message/i }).fill('hello world')
  await page.getByRole('button', { name: /send/i }).click()

  // Must display the sent message for the client who sent it.
  await expect(page.getByRole('list', { name: /messages/i })).toHaveText(
    'hello world',
  )

  // Must display the sent message for the second tab.
  await secondPage.bringToFront()
  await expect(secondPage.getByRole('list', { name: /messages/i })).toHaveText(
    'hello world',
  )

  // Send a message from the second tab.
  await secondPage.getByRole('textbox', { name: /message/i }).fill('hi')
  await secondPage.getByRole('button', { name: /send/i }).click()

  // Must display the sent message for the second tab.
  await expect(secondPage.getByRole('list', { name: /messages/i })).toHaveText([
    'hello world',
    'hi',
  ])

  // Must display the sent message for the first tab.
  await page.bringToFront()
  await expect(page.getByRole('list', { name: /messages/i })).toHaveText([
    'hello world',
    'hi',
  ])
})
