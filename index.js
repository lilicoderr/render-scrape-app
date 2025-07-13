const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage();
  await page.goto("https://everywak.kr/weather", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  console.log("Waiting for page to load...");
  await page.waitForTimeout(5000); 

  const pageContent = await page.content();
  console.log(pageContent); // 페이지 HTML 출력

  // 데이터 추출 예시 (예: 날씨 정보)
  const weatherData = await page.$$eval('div.weather-info', (elements) => {
    return elements.map((element) => element.textContent);
  });

  console.log(weatherData); // 추출된 데이터 출력

  await browser.close();
})();
