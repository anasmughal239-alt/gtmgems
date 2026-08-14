// Asset downloader for https://www.mintlify.com/ (site-key www-mintlify-com-6fea74f6, page-key root-8a5edab2)
// Writes only into this page's namespaced asset root. Never overwrites another page's assets.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ASSET_ROOT = "public/sites/www-mintlify-com-6fea74f6/root-8a5edab2";

const ASSETS = [
  { url: "https://www.mintlify.com/images/docs-preview/preview-light.svg", out: "images/docs-preview-light.svg" },
  { url: "https://www.mintlify.com/images/docs-preview/preview-dark.svg", out: "images/docs-preview-dark.svg" },
  { url: "https://www.mintlify.com/favicon.ico", out: "seo/favicon.ico" },
  { url: "https://www.mintlify.com/_next/static/media/og.28576e75.png", out: "seo/og.png" },
];

const BATCH = 4;

async function download({ url, out }) {
  const dest = join(ASSET_ROOT, out);
  try {
    const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (clone-website asset fetch)" } });
    if (!res.ok) return { out, ok: false, reason: `HTTP ${res.status}` };
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    return { out, ok: true, bytes: buf.length };
  } catch (err) {
    return { out, ok: false, reason: err.message };
  }
}

const results = [];
for (let i = 0; i < ASSETS.length; i += BATCH) {
  results.push(...(await Promise.all(ASSETS.slice(i, i + BATCH).map(download))));
}

for (const r of results) {
  console.log(r.ok ? `ok    ${r.out} (${r.bytes} bytes)` : `FAIL  ${r.out} — ${r.reason}`);
}

if (results.some((r) => !r.ok)) process.exitCode = 1;
