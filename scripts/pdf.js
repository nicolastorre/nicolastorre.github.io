const puppeteer = require("puppeteer");

const args = process.argv.slice(2);
const CV_URL = args[0] || "http://localhost:3000";

async function generatePDF(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  await page.pdf({
    path: "cv.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
}

generatePDF(CV_URL);
