import{test,expect} from '@playwright/test';

test('locators', async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByTestId('username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator("//input[@type='submit']").click();

    //await page.locator('#login-button').click();

    const Product = await page.locator('.inventory_item').filter({hasText:'Sauce Labs Backpack'});

    await Product.getByRole('button',{name:'Add to cart'}).click();

    await page.locator('a[class="shopping_cart_link"]').click();

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    await page.locator('#checkout').click();

    await page.locator("//input[@type='text']").first().fill('Puli');

    await page.getByTestId('lastName').fill('Sekhar');

    await page.locator("//input[@type='text']").last().fill('501203');

    await page.locator("//input[@type='submit']").click();

    await page.getByTestId('finish').click();

    await expect(page.getByText('Thank you for your order!')).toBeVisible();

    //await page.pause();
})
