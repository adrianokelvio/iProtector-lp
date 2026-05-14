# iProtector — Brand Kit

> Pasta completa com **assets visuais**, **design tokens** e **contexto institucional**
> pra você gerar apresentações, materiais comerciais, sales decks, posts e qualquer
> peça que precise representar a marca iProtector.

```
brand-kit/
├── README.md                       ← você está aqui
│
├── logo/                           ← assets do logotipo
│   ├── iprotector-logo.svg         · Logo completo (lockup) — vetorial
│   ├── iprotector-logo-gold.png    · Logo completo em dourado
│   ├── iprotector-logo.png         · Logo neutro
│   ├── iprotector-mark-gold.png    · Apenas o escudo, dourado
│   └── iprotector-mark-white.png   · Apenas o escudo, branco
│
├── colors/                         ← paleta + regras
│   ├── colors.md                   · Documentação completa da paleta
│   └── colors.json                 · Tokens em JSON puro
│
├── typography/                     ← fontes e escala
│   └── typography.md               · Manrope · Inter · JetBrains Mono
│
├── tokens/                         ← design tokens completos
│   ├── design-tokens.json          · JSON canônico (cores+font+spacing+...)
│   └── design-tokens.css           · Pronto pra colar em CSS
│
├── imagery/                        ← imagens prontas
│   ├── og-image.png                · 1200×630 — WhatsApp, FB, LinkedIn
│   ├── og-image-square.png         · 1200×1200 — Instagram
│   └── twitter-card.png            · 1600×900 — X/Twitter
│
└── context/                        ← briefings de conteúdo
    ├── 01-brand-positioning.md
    ├── 02-value-propositions.md
    ├── 03-target-audience.md
    ├── 04-services-and-plans.md
    ├── 05-tone-of-voice.md
    ├── 06-key-messages.md
    ├── 07-presentation-outline.md
    └── 08-faq-and-objections.md
```

---

## Por onde começar

**Vai fazer uma apresentação?**
→ Leia [`context/07-presentation-outline.md`](context/07-presentation-outline.md) — tem um deck inteiro de 20 slides já estruturado.

**Vai montar um post / peça gráfica?**
→ Use a paleta em [`colors/colors.md`](colors/colors.md) + fontes em [`typography/typography.md`](typography/typography.md).

**Vai escrever uma copy?**
→ Pega o vocabulário em [`context/05-tone-of-voice.md`](context/05-tone-of-voice.md) e as headlines prontas em [`context/06-key-messages.md`](context/06-key-messages.md).

**Vai pitchar pra investidor?**
→ Slides 11 (mercado), 14 (B2B model), 15 (tração) e o FAQ em [`context/08-faq-and-objections.md`](context/08-faq-and-objections.md).

---

## Padrão de escrita (FIC)

Esta marca adota a tipografia do Grupo FIC Capital. **Sempre use**:

- Categorias entre colchetes em CAIXA ALTA: `[CLIENTE FINAL]`, `[PLANO GOLD]`, `[CENTRAL 24H]`
- Etapas com ordinais sobrescritos: `1º PASSO`, `2ª HOMOLOGAÇÃO`, `3º ONBOARDING`
- Numerações de cards entre colchetes: `[01]`, `[02]`, `[03]`
- **Sem negrito decorativo** — ênfase vem da CAIXA ALTA ou da cor dourada
- **Sem chave executiva** `🔑 CHAVE EXECUTIVA` na marca iProtector (decisão do cliente)

Detalhes completos em [`typography/typography.md`](typography/typography.md#4-padrão-fic-de-capitalização).

---

## Identidade visual em 3 frases

1. **Cores**: navy profundo `#06101F` de base, dourado `#C9A961` como assinatura, azul de sinal `#4FB3FF` para tech e verde `#34D399` para status ativo.
2. **Tipografia**: Manrope (display), Inter (corpo), JetBrains Mono (labels técnicos).
3. **Aesthetic**: Dark Mode OLED premium + Liquid Glass — backdrop blur, depth shadows multi-camada, halos sutis, transições 250-400ms.

---

## Dados oficiais (uso institucional)

- **Razão social**: a inserir
- **CNPJ**: 17.738.538/0001-09
- **Endereço**: Av. Dr. Chucri Zaidan, 1649 · São Paulo / SP · CEP 04711-130
- **WhatsApp**: +55 (11) 99719-4408
- **E-mail**: contato@iprotector.com.br

---

## Como atualizar este kit

A pasta foi gerada em conjunto com o site oficial do iProtector. Para regenerar
as imagens sociais (caso mude a tagline ou a paleta), rode:

```bash
cd /Users/kelviorocha/Downloads/iprotetor/iprotector-app
npm run og
# substitui os PNGs em public/og-* — copie pra cá manualmente depois
```

Para qualquer dúvida sobre como aplicar a marca, leia primeiro os 8 arquivos em
`context/` na ordem numerada — eles cobrem 95% dos casos.
