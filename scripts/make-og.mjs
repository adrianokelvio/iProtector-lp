/**
 * Gera a imagem Open Graph (1200×630 PNG) e a versão quadrada (1200×1200)
 * para previews em WhatsApp, LinkedIn, X, Facebook.
 *
 * Composição: gradiente navy + ambient gold glow + grid sutil + logo PNG +
 * tagline + eyebrow + accent dot.
 *
 * Rodar:  npm run og  (depois do build basta servir public/og-image.png)
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const ASSETS_DIR = join(PUBLIC_DIR, 'assets');

const LOGO_PNG = readFileSync(join(ASSETS_DIR, 'iprotector-logo-gold.png'));

// Layout constants (16:9-ish, OG standard 1200×630)
const W = 1200;
const H = 630;

const svgBg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="navy" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#06101F"/>
      <stop offset="1" stop-color="#0A1A2F"/>
    </linearGradient>
    <radialGradient id="gold-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#C9A961" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#C9A961" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="signal-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#4FB3FF" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#4FB3FF" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F4F6FA" stroke-opacity="0.035" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#navy)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <ellipse cx="900" cy="180" rx="420" ry="280" fill="url(#gold-glow)"/>
  <ellipse cx="200" cy="500" rx="380" ry="260" fill="url(#signal-glow)"/>

  <!-- Top eyebrow -->
  <g transform="translate(80, 90)">
    <rect x="0" y="0" width="32" height="1.5" fill="#C9A961"/>
    <text x="48" y="6" font-family="ui-monospace, 'JetBrains Mono', 'IBM Plex Mono', monospace"
          font-size="20" letter-spacing="3" fill="#C9A961">[PERSONAL PROTECTION AS A SERVICE]</text>
  </g>

  <!-- Tagline (Headline) -->
  <text x="80" y="270" font-family="-apple-system, 'Manrope', system-ui, sans-serif"
        font-size="74" font-weight="700" fill="#F4F6FA" letter-spacing="-2">
    Proteção pessoal sob demanda,
  </text>
  <text x="80" y="358" font-family="-apple-system, 'Manrope', system-ui, sans-serif"
        font-size="74" font-weight="700" fill="#F4F6FA" letter-spacing="-2">
    <tspan fill="#C9A961">monitorada</tspan> 24 horas.
  </text>

  <!-- Subtitle -->
  <text x="80" y="430" font-family="-apple-system, 'Inter', system-ui, sans-serif"
        font-size="26" font-weight="400" fill="#C7CFDB" letter-spacing="-0.2">
    Conecte-se a agentes certificados com central 24h e
  </text>
  <text x="80" y="466" font-family="-apple-system, 'Inter', system-ui, sans-serif"
        font-size="26" font-weight="400" fill="#C7CFDB" letter-spacing="-0.2">
    tecnologia avançada em campo — do app ao painel web.
  </text>

  <!-- Trust pills bottom -->
  <g font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="16" letter-spacing="1.5" fill="#9AA4B2">
    <g transform="translate(80, 555)">
      <circle cx="6" cy="-5" r="4" fill="#C9A961"/>
      <text x="22" y="0">[CENTRAL 24H]</text>
    </g>
    <g transform="translate(290, 555)">
      <circle cx="6" cy="-5" r="4" fill="#C9A961"/>
      <text x="22" y="0">[AGENTES CERTIFICADOS]</text>
    </g>
    <g transform="translate(600, 555)">
      <circle cx="6" cy="-5" r="4" fill="#C9A961"/>
      <text x="22" y="0">[RASTREABILIDADE TOTAL]</text>
    </g>
    <g transform="translate(925, 555)">
      <circle cx="6" cy="-5" r="4" fill="#C9A961"/>
      <text x="22" y="0">[LGPD]</text>
    </g>
  </g>

  <!-- Decorative radar arc top-right -->
  <g transform="translate(1050, 320)" stroke="#C9A961" fill="none" stroke-opacity="0.35">
    <circle r="120" stroke-width="1"/>
    <circle r="80" stroke-width="1"/>
    <circle r="40" stroke-width="1"/>
    <circle r="6" fill="#C9A961" stroke="none"/>
  </g>

  <!-- Bottom border accent -->
  <rect x="80" y="600" width="1040" height="1" fill="#F4F6FA" fill-opacity="0.08"/>
</svg>`;

async function buildOG() {
  // Composite logo (scaled to height ~80px) on top
  const logo = await sharp(LOGO_PNG).resize({ height: 100, withoutEnlargement: false }).png().toBuffer();
  const logoMeta = await sharp(logo).metadata();

  // Render the base SVG → PNG
  const baseBuf = await sharp(Buffer.from(svgBg)).png().toBuffer();

  // Composite logo top-right
  const out = await sharp(baseBuf)
    .composite([
      {
        input: logo,
        top: 80 - 30,
        left: W - (logoMeta.width ?? 200) - 80,
      },
    ])
    .png({ quality: 92, compressionLevel: 9 })
    .toBuffer();

  writeFileSync(join(PUBLIC_DIR, 'og-image.png'), out);
  console.log(`✓ og-image.png   1200×630`);

  // Squared version 1200×1200 for some platforms
  const SQUARE = 1200;
  const svgSq = svgBg.replace(`width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"`, `width="${SQUARE}" height="${SQUARE}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"`);
  const sq = await sharp(Buffer.from(svgSq))
    .resize({ width: SQUARE, height: SQUARE })
    .composite([{ input: logo, top: 50, left: SQUARE - (logoMeta.width ?? 200) - 80 }])
    .png({ quality: 92, compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(PUBLIC_DIR, 'og-image-square.png'), sq);
  console.log(`✓ og-image-square.png   ${SQUARE}×${SQUARE}`);

  // Twitter card (recommended 1600×900 for large-card)
  const TW_W = 1600,
    TW_H = 900;
  const svgTw = svgBg.replace(`width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"`, `width="${TW_W}" height="${TW_H}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"`);
  const tw = await sharp(Buffer.from(svgTw))
    .resize({ width: TW_W, height: TW_H })
    .composite([{ input: logo, top: 75, left: Math.round(TW_W - (logoMeta.width ?? 200) * (TW_W / W) - 100) }])
    .png({ quality: 92, compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(PUBLIC_DIR, 'twitter-card.png'), tw);
  console.log(`✓ twitter-card.png   ${TW_W}×${TW_H}`);
}

buildOG().catch((e) => {
  console.error(e);
  process.exit(1);
});
