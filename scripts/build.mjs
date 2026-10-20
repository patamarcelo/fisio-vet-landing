import { build } from "vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { pages } from "../src/config/pages.js";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
} from "../src/config/site.js";

const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
await build();
await build({
  build: { ssr: "src/render.jsx", outDir: ".prerender", emptyOutDir: true },
});
try {
  const { render } = await import(
    pathToFileURL(resolve(".prerender/render.js"))
  );
  const template = await readFile("dist/index.html", "utf8");
  for (const page of [
    ...pages,
    {
      path: "/404",
      title: "Página não encontrada | FisioVet",
      description:
        "Conheça o atendimento de fisioterapia veterinária domiciliar em Porto Alegre.",
      notFound: true,
    },
  ]) {
    const url = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;
    const business = {
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: DEFAULT_OG_IMAGE,
      telephone: `+${WHATSAPP_NUMBER}`,
      description: pages[0].description,
      sameAs: [INSTAGRAM_URL],
      areaServed: [
        { "@type": "City", name: "Porto Alegre" },
        {
          "@type": "AdministrativeArea",
          name: "Região Metropolitana de Porto Alegre",
        },
      ],
    };
    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.service,
      url,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "City", name: "Porto Alegre" },
    };
    const head = `<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}" />
<meta name="robots" content="${page.notFound ? "noindex, follow" : "index, follow"}" />
${page.notFound ? "" : `<link rel="canonical" href="${url}" />`}
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="${escape(SITE_NAME)}" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${DEFAULT_OG_IMAGE}" />
<meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Eduarda Pata ao lado de um cão" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(page.title)}" />
<meta name="twitter:description" content="${escape(page.description)}" />
<meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />
${page.notFound ? "" : `<script type="application/ld+json">${JSON.stringify(business).replaceAll("<", "\\u003c")}</script>`}
${!page.notFound && page.path !== "/" ? `<script type="application/ld+json">${JSON.stringify(service).replaceAll("<", "\\u003c")}</script>` : ""}`;
    const html = template
      .replace(/<!--page-head-start-->[\s\S]*?<!--page-head-end-->/, head)
      .replace("<!--app-html-->", render(page.path));
    const directory =
      page.path === "/" || page.notFound ? "dist" : `dist${page.path}`;
    await mkdir(directory, { recursive: true });
    await writeFile(
      `${directory}/${page.notFound ? "404.html" : "index.html"}`,
      html,
    );
    // Support extensionless URLs in Vite preview as well as directory-style static hosts.
    if (page.path !== "/" && !page.notFound) {
      await writeFile(`dist${page.path}.html`, html);
    }
    console.log(`Prerendered ${page.path}`);
  }
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => `  <url><loc>${SITE_URL}${page.path}</loc></url>`).join("\n")}\n</urlset>\n`,
  );
} finally {
  await rm(".prerender", { recursive: true, force: true });
}
