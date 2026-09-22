import{test,expect}from '@playwright/test';

test ('loginpage', async({page})=>{

    await page.goto ('https://practicetestautomation.com/practice-test-login/')

    await page.getByLabel('username').fill('student');

    await page.getByLabel('password').fill('Password123');

    await page.getByRole ('button',{name:'Submit'}).click();

    await expect(page.getByText ('Logged In Successfully')).toBeVisible();

    //await page.locator('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click();

    //await expect (page.getByText('Test login')).toBeVisible();
})