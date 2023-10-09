import { expect, test } from '@playwright/test';

test('renders the user greeting', async ({ page }) => {
  await page.goto('/');

  const greeting = page.getByText('Hello, John!');
  await expect(greeting).toBeVisible();
});

test('renders the list of movies', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByText('Fetch movies').click();

  const moviesList = page.locator('#movies');
  await moviesList.waitFor();
  const movieItems = await moviesList.locator('li').allTextContents();

  expect(movieItems).toEqual([
    'The Lord of The Rings',
    'The Matrix',
    'Star Wars: The Empire Strikes Back'
  ]);
});
