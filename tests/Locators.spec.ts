import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('textbox', { name: 'Name' }).fill('John Doe');
    await page.getByRole('textbox', { name: 'Email' }).fill('john.doe@example.com');
    await page.getByRole('textbox', { name: 'Phone' }).fill('9876543210');
    await page.getByRole('textbox', { name: 'Address' }).fill('123 Main Street, City');
    await page.getByRole('radio', { name: 'Female' }).check();
    await page.getByRole('checkbox',{name:'Monday'}).check();
    //await page.locator('#country').selectOption({value:'canada'});
    //await page.locator('#country').selectOption({label:'France'});
    await page.locator('#country').selectOption({index:9});
    //await page.getByRole('link',{ name:'Apple'}).click();
    //await page.getByPlaceholder('Section 1').fill('puli');
    await page.locator('#input1').fill('puli')
    //await page.getByPlaceholder('Enter text for Section 1').fill('First section input');
    //await page.getByRole('button', { name: 'Submit' }).nth(0).click();
    await page.locator('#btn1').click();
    await page.pause();

})