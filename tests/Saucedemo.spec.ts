import{test,expect} from'@playwright/test';

test('saucedemo', async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.locator("//input[@id='user-name']").fill('standard_user');
    await page.locator("//input[@id='password']").fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();

   const product= await page.locator('.inventory_item_description').filter({hasText:'Sauce Labs Backpack'});

   await product.locator('#add-to-cart-sauce-labs-backpack').click();

   const product1= await page.locator('.inventory_item_description').filter({hasText:'Sauce Labs Bike Light'});

   await product1.locator('#add-to-cart-sauce-labs-bike-light').click();

   await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

   await page.locator("//a[@class='shopping_cart_link']").click();

   await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

   await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();

   await page.locator('#checkout').click();

   await page.locator("//input[@class='input_error form_input']").first().fill('Puli');

   await page.getByPlaceholder('Last Name').fill('Sekhar');

   await page.locator('#postal-code').fill('501203');

   
   await expect(page.getByText('Swag Labs')).toBeVisible();

   //await expect(page.getByText('Checkout: Overview')).toBeVisible();

   await page.locator('[data-test="continue"]').click();

   //await page.locator('#cancel').click();

   await page.getByTestId('finish').click();


   await page.pause();
})