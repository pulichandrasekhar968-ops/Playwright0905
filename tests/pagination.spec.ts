import { test, expect } from '@playwright/test';

test('Verify pagination functionality', async ({ page }) => {

    await page.goto('https://practice.softwaretestingmentor.com/pagination-table');

    // 1. Verify table is displayed
    const rows = page.locator('table tbody tr');

    await expect(rows).toHaveCount(5);

    // 2. Verify first page records
    await expect(rows.first()).toContainText('Wireless Mouse');

    // 3. Verify pagination information
    await expect(page.getByText(/Showing 1–5 of 50/)).toBeVisible();

    // 4. Click Next button
    await page.getByRole('button', { name: /Next/ }).click();

    // 5. Verify second page records
    //await expect(rows.first()).toContainText('Product 6');
    await page.getByText('Webcam HD', { exact: true }).click();

    // 6. Verify page 2 is active
    await expect(page.getByRole('button', { name: '2', exact: true })).toHaveClass(/active/);

    // 7. Click page number 5
    await page.getByRole('button', { name: '5', exact: true }).click();

    // 8. Verify page 5 records
    await expect(rows.first()).toContainText('Product 21');

    // 9. Click Previous button
    await page.getByRole('button', { name: /Prev/ }).click();

    // 10. Verify page 4 records
    await expect(rows.first()).toContainText('Product 16');

});