import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:4173";
const outputDir = path.resolve("web_lastlab");
const outputFile = path.join(outputDir, "00_web_lastlab_completo_screen.pdf");

const routes = [
  ["es_inicio", "/es"],
  ["es_sobre", "/es/sobre"],
  ["es_red", "/es/red"],
  ["es_investigacion", "/es/investigacion"],
  ["es_publicaciones", "/es/publicaciones"],
  ["es_formacion", "/es/formacion"],
  ["es_gobernanza", "/es/gobernanza"],
  ["es_cooperacion", "/es/cooperacion"],
  ["es_contacto", "/es/contacto"],
  ["en_home", "/en"],
  ["en_about", "/en/about"],
  ["en_network", "/en/network"],
  ["en_research", "/en/research"],
  ["en_publications", "/en/publications"],
  ["en_training", "/en/training"],
  ["en_governance", "/en/governance"],
  ["en_cooperation", "/en/cooperation"],
  ["en_contact", "/en/contact"]
];

async function waitForServer(url, timeoutMs = 90000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // retry
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Server did not become ready in time: ${url}`);
}

await fs.mkdir(outputDir, { recursive: true });
await waitForServer(`${baseUrl}/es`);

const pdf = await PDFDocument.create();
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1800 },
  deviceScaleFactor: 1
});
const page = await context.newPage();

for (const [index, [slug, route]] of routes.entries()) {
  const label = `${String(index + 1).padStart(2, "0")}_${slug}`;
  const url = `${baseUrl}${route}`;

  console.log(`Capturing ${label} -> ${url}`);
  await page.goto(url, { waitUntil: "networkidle" });

  await page.evaluate(async () => {
    if (document.fonts && "ready" in document.fonts) {
      await document.fonts.ready;
    }
  });

  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
      .reveal {
        opacity: 1 !important;
        transform: none !important;
      }
    `
  });

  await page.waitForTimeout(200);
  const png = await page.screenshot({ fullPage: true, type: "png" });
  const image = await pdf.embedPng(png);

  const scale = 0.5;
  const width = image.width * scale;
  const height = image.height * scale;

  const pdfPage = pdf.addPage([width, height]);
  pdfPage.drawImage(image, { x: 0, y: 0, width, height });
}

await browser.close();

const mergedBytes = await pdf.save();
await fs.writeFile(outputFile, mergedBytes);

console.log(`Done -> ${outputFile}`);
