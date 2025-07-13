const express = require('express');
const { chromium } = require('playwright');
const app = express();

app.get('/screenshot', async (req, res) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://milderz.com');
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
    res.send('Screenshot taken! 파일이 서버에 저장되었습니다.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
