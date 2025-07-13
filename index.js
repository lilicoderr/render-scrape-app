const { chromium } = require("playwright");

(async () => {
  try {
    // Chromium 브라우저 실행 (headless 모드)
    const browser = await chromium.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });

    console.log("Browser launched");

    // 새 페이지 생성
    const page = await browser.newPage();
    console.log("New page created");

    // 페이지로 이동
    await page.goto("https://everywak.kr/weather", {
      waitUntil: "networkidle", // 네트워크가 idle 상태일 때까지 기다림
      timeout: 60000, // 타임아웃 60초로 늘리기
    });
    console.log("Page loaded");

    // 페이지가 로드될 때까지 기다리기 (10초)
    await page.waitForTimeout(10000); // 10초 기다리기

    // 페이지의 HTML을 가져오기
    const pageContent = await page.content();
    console.log("Page content fetched");

    // 페이지 HTML 출력
    console.log(pageContent); // 여기에 크롤링한 HTML을 출력함

    // 여기서 크롤링한 데이터를 파일로 저장하거나 다른 작업을 할 수 있음
    // 예를 들어, 파일에 저장:
    const fs = require('fs');
    fs.writeFileSync('crawled_content.html', pageContent);
    console.log("Page content saved to crawled_content.html");

    // 브라우저 종료
    await browser.close();
    console.log("Browser closed");

  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
