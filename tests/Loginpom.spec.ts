import{test,expect} from '@playwright/test';

import {LogInPage} from '../Pages/LoginPage';

test('POM logintest', async({page})=>{

    const loginPage = new LogInPage(page);

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await loginPage.login('student','Password123')

})