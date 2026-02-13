import fs from "node:fs/promises";
import path from "node:path";
import { PDFDocument } from "pdf-lib";

const dir = path.resolve("web_lastlab");
const output = path.join(dir, "00_web_lastlab_completo.pdf");

const files = (await fs.readdir(dir))
  .filter((name) => /^\d{2}_.*\.pdf$/i.test(name))
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

if (files.length === 0) {
  throw new Error("No se encontraron PDFs numerados en web_lastlab");
}

const merged = await PDFDocument.create();

for (const file of files) {
  const bytes = await fs.readFile(path.join(dir, file));
  const pdf = await PDFDocument.load(bytes);
  const pages = await merged.copyPages(pdf, pdf.getPageIndices());
  for (const page of pages) merged.addPage(page);
}

const mergedBytes = await merged.save();
await fs.writeFile(output, mergedBytes);

console.log(`Merged ${files.length} PDFs -> ${output}`);
