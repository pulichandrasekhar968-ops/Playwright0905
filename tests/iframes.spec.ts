import{test,expect} from "@playwright/test";

test ('iframes', async({page})=> {

await page.goto ("https://ui.vision/demo/webtest/frames/");

const frame_1 =await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

await frame_1?.fill('[name="mytext1"]','PULI')

// await frame_1?.locator ('[name="mytext1"]').fill('PULI');

await page.waitForTimeout(5000);

})