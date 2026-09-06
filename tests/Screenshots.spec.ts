import{test,expect} from'@playwright/test';

test ('screenshot', async({page})=>{

    await page.goto ("https://testautomationpractice.blogspot.com/")

    //await page.screenshot({path:'Screenshots/loginpage.png'});

    await page.screenshot({path:'Screenshots/Fullloginpage.png',fullPage:true});

})
