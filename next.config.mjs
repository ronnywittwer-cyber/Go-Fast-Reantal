/** @type {import('next').NextConfig} */

// Beim Deploy auf GitHub Pages liegt die Seite unter /<repo-name>/.
// Der Workflow setzt NEXT_PUBLIC_BASE_PATH (z. B. "/go-fast-reantal").
// Lokal ist die Variable leer -> Seite läuft normal auf http://localhost:3000.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export", // statischer Export (HTML/CSS/JS) für GitHub Pages
  images: { unoptimized: true }, // next/image ohne Server-Optimierung
  basePath: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
