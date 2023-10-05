const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");
const Mustache = require("mustache");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/generate-pdf", async (req, res) => {
  // reading the template file for rendering
  const template = fs.readFileSync("./template.html", { encoding: "utf8" });
  const filledTemplate = Mustache.render(template, {});

  //   puppeteer will launch headless browser and use the template tp set content of page
  const browser = await puppeteer.launch({
    headless: true,
    args: [`--window-size=1920,1080`],
    defaultViewport: {
      width: 940,
      height: 1080,
    },
  });

  const page = await browser.newPage();
  await page.setContent(filledTemplate);

  const pdfBuffer = await page.pdf({ printBackground: true });

  await browser.close();
  res.setHeader("Content-Type", "application/pdf");
  // Disbale if default download is not required
  res.setHeader("Content-Disposition", "attachment; filename=generated.pdf");
  res.send(pdfBuffer);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
