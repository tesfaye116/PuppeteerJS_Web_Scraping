const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.imdb.com/chart/top");

  // for screenshot
  // await page.screenshot({
  //   path: "./screenshot/reactDocPage.png",
  //   fullPage: true,
  // });

  // for Pdf
  // await page.pdf({ path: "./pdf/reactDocPage.pdf", format: "A4" });

  // for get page text
  // const text = await page.evaluate(() => document.body.innerText);
  // console.log(text);

  // // get links
  // const links = await page.evaluate(() => {
  //   const anchors = Array.from(document.querySelectorAll("a"));
  //   return anchors.map((anchor) => anchor.href);
  // });
  // console.log(links);

  // get li from ul
  const li = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll("li"));
    return anchors.map((anchor) => anchor.innerText);
  });
  console.log(li.innerText);

  await browser.close();
  console.log("Done");
}

run();
