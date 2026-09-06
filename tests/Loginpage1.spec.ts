import{test,expect} from '@playwright/test';

test('Loginpage', async({page})=>{

    await page.goto ("https://practicetestautomation.com/");

    await page.getByRole('link',{name:'PRACTICE'}).click();


})