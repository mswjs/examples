import initStoryshots from '@storybook/addon-storyshots'
import { puppeteerTest } from '@storybook/addon-storyshots-puppeteer'

initStoryshots({
  test: puppeteerTest(),
})
