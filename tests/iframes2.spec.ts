import{test,expect} from '@playwright/test'

test('iframes', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const inpputbox= await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");

    inpputbox.fill('Puli');

    await page.waitForTimeout(3000)
})