# iProtector — Landing Page

Landing page do **iProtector**, plataforma de intermediação de serviços de segurança privada (Personal Protection as a Service).

Reescrita do site original (HTML estático) em **React 19 + Vite + TypeScript + React Router 7** com design system premium (Liquid Glass + Dark OLED) seguindo a recomendação do skill `ui-ux-pro-max`.

## Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- **React Router 7** (SPA: `/`, `/contato`, `/privacidade`, `/termos`)
- CSS custom (sem Tailwind / sem UI library) — paleta navy `#06101F` + dourado `#C9A961`
- Fontes Manrope (display) + Inter (body) + JetBrains Mono (labels)

## Features

- Hero com **phone mockup** completo do app (status bar, mapa, ações, tab bar)
- App Store + Google Play badges
- 13 seções: Para Quem, Como Funciona, Serviços, Agentes, Tecnologia, Planos, Parceiros, Diferenciais, Segmentos, FAQ, CTA Final
- 3 formulários (Cliente, Parceiro, Contato) com submit via **WhatsApp** (mensagem pré-preenchida)
- Banner de cookies com persistência em `localStorage`
- WhatsApp FAB dourado on-brand
- Drawer mobile, modais bottom-sheet com handle iOS-like
- Sistema de spacing rígido (`--space-1` a `--space-11`)
- Responsivo: 360 / 414 / 768 / 1024 / 1440
- `prefers-reduced-motion` respeitado

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve dist/ local
```

## Configuração antes do deploy

### 1. URL pública do site (OBRIGATÓRIO para SEO/OG)

Copie `.env.example` para `.env` e ajuste:

```bash
cp .env.example .env
```

```env
VITE_SITE_URL=https://meu-dominio-real.com
```

Esse valor é injetado em todas as meta `og:*`, `twitter:*`, `canonical` e
`sitemap.xml`. Se ficar errado, **WhatsApp/Facebook/LinkedIn não conseguem
carregar a imagem de preview**.

Vercel/Netlify: setar `VITE_SITE_URL` como Environment Variable do projeto.

### 2. WhatsApp

Edite [src/config/site.ts](src/config/site.ts):

```ts
export const WHATSAPP_NUMBER = '5511999999999'; // formato internacional
```

### 3. Dados institucionais

Substitua os placeholders em:
- [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) — endereço, CNPJ
- [src/pages/Privacidade.tsx](src/pages/Privacidade.tsx) — razão social, DPO
- [src/pages/Termos.tsx](src/pages/Termos.tsx) — razão social, foro

### 4. Imagens sociais (regenerar se quiser ajustar)

```bash
npm run og
```

Gera `og-image.png` (1200×630), `og-image-square.png` (1200×1200) e
`twitter-card.png` (1600×900) em `public/`. Edite `scripts/make-og.mjs`
pra mudar tagline ou estilo.

### 5. Validar preview antes de divulgar

Depois de fazer o deploy, valide o preview do link em:
- WhatsApp: [opengraph.xyz](https://www.opengraph.xyz/) — cola a URL
- Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- LinkedIn: [Post Inspector](https://www.linkedin.com/post-inspector/)
- Twitter/X: [Card Validator](https://cards-dev.twitter.com/validator)

## Estrutura

```
src/
├── components/
│   ├── layout/        # Header, Drawer, Footer, WhatsAppFab, CookiesBanner, ScrollToTop, Brand
│   ├── sections/      # Hero, PhoneMockup, TrustBand, ParaQuem, ComoFunciona, Servicos,
│   │                  # Agentes, Tecnologia, Planos, Parceiros, Diferenciais, Segmentos,
│   │                  # Faq, FinalCta, ContactForm
│   ├── modals/        # ClientModal, PartnerModal, ModalShell, ModalsContext
│   └── ui/            # Arrow, HashLink, ModalShell, SuccessPanel, StoreBadges
├── pages/             # Home, Contato, Privacidade, Termos
├── hooks/             # useScrolled, useDisclosure, useCookieConsent, useMasks,
│                      # useBodyScrollLock, useHashScroll
├── utils/             # whatsapp.ts, validation.ts
├── config/            # site.ts
├── styles/            # styles.css (base), mobile.css, design-v2.css, polish.css, v3-components.css
├── types/             # forms.ts
└── main.tsx, App.tsx
```

## Bundle

- HTML: 1.25 kB / 0.62 kB gzip
- CSS: ~70 kB / ~13 kB gzip
- JS: ~320 kB / ~96 kB gzip

## Licença

Proprietário — iProtector.
