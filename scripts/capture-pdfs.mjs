import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = "http://127.0.0.1:4173";
const outputDir = path.resolve("web_lastlab");

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

async function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Ignore and retry until timeout.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Server did not become ready in time: ${url}`);
}

await fs.mkdir(outputDir, { recursive: true });

const existing = await fs.readdir(outputDir);
await Promise.all(
  existing
    .filter((file) => file.toLowerCase().endsWith(".pdf"))
    .map((file) => fs.unlink(path.join(outputDir, file)))
);

await waitForServer(`${baseUrl}/es`);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1800 } });

await page.emulateMedia({ media: "screen" });

for (const [index, [slug, route]] of routes.entries()) {
  const number = String(index + 1).padStart(2, "0");
  const filePath = path.join(outputDir, `${number}_${slug}.pdf`);
  const url = `${baseUrl}${route}`;

  console.log(`Generating ${filePath} from ${url}`);
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);

  const scrollHeight = await page.evaluate(() =>
    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  );
  const pdfHeight = Math.min(Math.max(scrollHeight + 40, 1200), 20000);

  await page.pdf({
    path: filePath,
    printBackground: true,
    width: "1440px",
    height: `${pdfHeight}px`,
    margin: { top: "0", right: "0", bottom: "0", left: "0" }
  });
}

await browser.close();
console.log("Done.");
