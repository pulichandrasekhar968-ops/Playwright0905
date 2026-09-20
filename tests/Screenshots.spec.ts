import{test,expect} from'@playwright/test';

test ('screenshot', async({page})=>{

    await page.goto ("https://testautomationpractice.blogspot.com/")

    const timestamp = Date.now()

    await page.screenshot({path:'Screenshots/loginpage1.png'});

    //await page.screenshot({path:'Screenshots/Fullloginpage1.png',fullPage:true});

    //await page.screenshot({path:'Screenshots/'+'lobloginpage'+ timestamp +'.png'});

})
