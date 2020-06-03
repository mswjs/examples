import React from 'react'
import { UserProfile } from '../src/UserProfile'

export default {
  title: 'User Profile',
  component: UserProfile,
}

export const DefaultBehavior = () => <UserProfile />

DefaultBehavior.story = {
  parameters: {
    async puppeteerTest(page) {
      await page.reload()
      const fullNameElement = await page.waitFor('[data-testid="full-name"]')
      const fullNameText = await page.evaluate(
        (element) => element.textContent,
        fullNameElement
      )

      expect(fullNameText).toBe('John Maverick')
    },
  },
}
