const { chromium } = require("playwright");

(async () => {
  // Chromium 브라우저 실행
  const browser = await chromium.launch();

  // 새 페이지 생성
  const page = await browser.newPage();

  // 페이지로 이동
  await page.goto("https://everywak.kr/weather", {
    waitUntil: "networkidle", // 네트워크가 idle 상태일 때까지 기다림
    timeout: 30000, // 타임아웃 30초 설정
  });

  // 페이지가 로드될 때까지 기다리기
  console.log("Waiting for page to load...");
  await page.waitForTimeout(5000); // 추가로 5초 기다리기 (동적 콘텐츠 로드 대비)

  // 페이지의 HTML을 가져오기
  const pageContent = await page.content();
  console.log(pageContent); // 페이지 HTML 출력

  // 여기에 추가적인 데이터 추출 작업을 넣을 수 있습니다.

  // 브라우저 종료
  await browser.close();
})();
