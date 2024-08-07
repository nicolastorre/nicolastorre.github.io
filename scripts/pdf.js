const puppeteer = require("puppeteer");

const ENV_URL = "https://nicolastorre.github.io";

async function init() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(ENV_URL, {
    waitUntil: "networkidle2",
  });
  await page.pdf({
    path: "cv.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
}

init();
