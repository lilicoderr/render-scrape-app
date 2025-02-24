const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://milderz.com');
    await page.screenshot({ path: 'screenshot.png' });
    console.log("Screenshot taken!");
    await browser.close();
})();