// Second asset pass for https://www.mintlify.com/ — blog card imagery (section 7).
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ASSET_ROOT = "public/sites/www-mintlify-com-6fea74f6/root-8a5edab2";

const ASSETS = [
  { url: "https://www.mintlify.com/images/featured/mintlify-index.webp", out: "images/blog-mintlify-index.webp" },
  { url: "https://www.mintlify.com/new/blog/state-of-docs-traffic.webp", out: "images/blog-state-of-docs-traffic.webp" },
  { url: "https://www.mintlify.com/new/blog/agent-score.webp", out: "images/blog-agent-score.webp" },
];

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
for (const a of ASSETS) results.push(await download(a));
for (const r of results) console.log(r.ok ? `ok    ${r.out} (${r.bytes} bytes)` : `FAIL  ${r.out} — ${r.reason}`);
if (results.some((r) => !r.ok)) process.exitCode = 1;
