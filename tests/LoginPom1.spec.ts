import{test,expect} from '@playwright/test';
import { LoginPom } from '../Pages/LoginPom';

test('LoginPomtest',async({page})=>{

   const loginPage=new LoginPom(page);

   await page.goto('https://practicetestautomation.com/practice-test-login/');

   await loginPage.Login ('student','Password123')

})