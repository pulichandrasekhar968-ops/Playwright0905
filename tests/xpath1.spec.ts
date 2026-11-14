import { test, expect } from '@playwright/test';

test('xpath', async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.locator('.gb_6').filter({ hasText: 'Gmail' }).click();
    await page.locator('//*[@id="root"]/gws-header/header/div/div[3]/dropdown-button-wrapper/div/details/summary/span[1]'
    ).click();

    await page.pause();
});