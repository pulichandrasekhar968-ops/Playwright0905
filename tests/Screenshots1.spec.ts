import{test,expect} from'@playwright/test';

test('Screenshots',async({page})=>{

    await page.goto('https://www.google.com/')

    //await page.screenshot({path:'Screenshots/Googlepage.png'});

    await page.screenshot({path:'Screenshots/Googlefull.png',fullPage:true})


})