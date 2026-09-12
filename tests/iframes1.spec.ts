import{test,expect} from "@playwright/test";

test ('iframes', async({page})=> {

await page.goto ("https://ui.vision/demo/webtest/frames/");

const inputbox=await page.frameLocator ("frame[src='frame_1.html']").locator("[name='mytext1']");

await inputbox.fill('Chandra')

await page.waitForTimeout(5000);

});