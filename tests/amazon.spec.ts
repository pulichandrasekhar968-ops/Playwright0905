import { test, expect } from '@playwright/test';

test('Search for laptop on Amazon', async ({ page }) => {
 await page.goto('https://www.amazon.in');

  //await page.getByPlaceholder('Search Amazon.in').fill('laptop');

  const searchBox = page.getByPlaceholder('Search Amazon'); 
  
  await searchBox.fill('laptop');

  await searchBox.press('Enter');

  await expect(page).toHaveURL(/.*laptop.*/);
});