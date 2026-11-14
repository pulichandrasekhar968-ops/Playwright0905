import{test,expect} from '@playwright/test';

test('shopify', async({page})=>{
    
    await page.goto('https://www.shopify.com/in');

   // await page.locator('#ctaemail').fill('chandoo1287@gmail.com');

   //await page.locator("//a[text()='Start for free']").first().click();

   //await page.getByText('Add product', { exact: true }).click();

   //await page.locator("//input[@type='veneer-admin-auth-email']").fill('chandoo1287@gmail.com');

   await page.locator("//label[normalize-space()='Products']").click();

    await expect(page.getByText('Themes', { exact: true })).toBeVisible();

    await page.getByText('Themes', { exact: true }).click();

    await expect(page.getByText('Shopify Theme Store')).toBeVisible();
    
    await expect(page.getByText('Shopify Theme Store')).toBeVisible();

    //await page.getByAltText('Veloza').click();

    await page.getByText('Browse themes',{exact:true}).click();

    const smallCatalogs = page.locator('a[data-ga-label="small-inventory"]:visible');

    //await expect(smallCatalogs).toHaveCount(1);
    
    await smallCatalogs.click();

    //await page.locator('a[data-ga-label="small-inventory"]').first().click();

    //await expect(page.getByText('Small catalogs')).toBeVisible();

    //await page.getByText('Small catalogs',{exact:true}).first().click();

   await page.pause();


})