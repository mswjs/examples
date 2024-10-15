import { expect, test } from '@playwright/test';
import { server } from '../src/mocks/node.js';
import { http, HttpResponse } from 'msw';

test('renders the user greeting', async ({ page }) => {
  server.use(
    http.get('https://api.example.com/user', () => {
      return HttpResponse.json({
        firstName: 'Leo',
        lastName: 'Messi'
      });
    })
  );
  await page.goto('/');

  const greeting = page.getByText('Hello, Leo!');
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
