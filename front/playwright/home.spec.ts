import { test, expect } from '@playwright/test';

test.describe.skip('Home page', () => {
  test('should render home page correctly', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /pagina inicial/i })).toBeVisible();
  });
});
