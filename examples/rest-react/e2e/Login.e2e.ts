import { Locator, test, expect } from '@playwright/test'

test.describe('Login', () => {
  test('should display my user ID, my firstName and my lastName', async ({
    page,
  }) => {
    await page.goto('/')

    const inputLocator: Locator = page.locator('#username')

    await inputLocator.type('johnUser', { delay: 100 })
    await inputLocator.press('Enter')

    const userIdLocator: Locator = page.locator('[data-testid="userId"]')
    await expect(userIdLocator).toContainText(
      'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
    )

    const firstNameLocator: Locator = page.locator('[data-testid="firstName"]')
    await expect(firstNameLocator).toContainText('John')

    const lastNameLocator: Locator = page.locator('[data-testid="lastName"]')
    await expect(lastNameLocator).toContainText('Maverick')
  })
})
