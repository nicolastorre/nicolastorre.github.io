const puppeteer = require("puppeteer");

const args = process.argv.slice(2);
const CV_URL_OUTPUT_JSON = [
  {
    URL: "https://nicolastorre.github.io/#/cv/en",
    OUTPUT: "cv_en.pdf",
  },
  {
    URL: "https://nicolastorre.github.io/#/cv/fr",
    OUTPUT: "cv_fr.pdf",
  },
];

const FOLDER_OUTPUT = "/../build/output/";

async function generatePDF(url, output) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    landscape: false,
    margin: {
      top: "0mm",
      right: "0mm",
      bottom: "0mm",
      left: "0mm",
    },
  });

  await browser.close();
}

CV_URL_OUTPUT_JSON.map((CV_URL_OUTPUT) => {
  const output = __dirname + FOLDER_OUTPUT + CV_URL_OUTPUT.OUTPUT;
  console.log(output);
  generatePDF(CV_URL_OUTPUT.URL, output);
});
