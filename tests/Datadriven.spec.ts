import{test,expect} from'@playwright/test'

test('Data driven testing',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('#small-searchterms').fill('laptop');
    await page.locator('input[value="search"]').click();
})