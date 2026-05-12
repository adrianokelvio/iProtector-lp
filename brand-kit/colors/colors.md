# Paleta iProtector

> **Filosofia visual**: Dark Mode OLED + Liquid Glass premium.
> Navy profundo de base, dourado como assinatura, azul de sinal pra
> indicar operação ao vivo e verde pra status ativo.

---

## 1 · Cores primárias

### Navy (background system)

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `navy-100` | `#1A3258` | rgb(26, 50, 88) | Superfícies elevadas / hover |
| `navy-200` | `#122847` | rgb(18, 40, 71) | Cards, modais, painéis |
| `navy-300` | `#0A1A2F` | rgb(10, 26, 47) | Superfícies padrão |
| `navy-400` | `#06101F` | rgb(6, 16, 31) | **Background base do site** |
| `navy-500` | `#050B17` | rgb(5, 11, 23) | Fade de fundo / profundidade |

### Gold (brand accent)

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `gold-100` | `#E8CC8B` | rgb(232, 204, 139) | Highlight claro / gradient top |
| `gold-200` | `#C9A961` | rgb(201, 169, 97) | **Gold padrão · CTAs · marca** |
| `gold-300` | `#8E7438` | rgb(142, 116, 56) | Hover escurecido / pressed |
| `gold-soft` | `rgba(201,169,97,0.14)` | — | Tinte para destaques sutis |

---

## 2 · Cores de acento

| Token | Hex | Uso |
|-------|-----|-----|
| `signal` | `#4FB3FF` | Azul operacional — rotas, mapa, tech |
| `emerald` | `#34D399` | Verde — status ativo, OK, online |
| `danger` | `#E5484D` | Vermelho — emergência, erro, botão pânico |

---

## 3 · Neutros

| Token | Hex | Contraste sobre navy-400 | Uso |
|-------|-----|--------------------------|-----|
| `fg` | `#F4F6FA` | 16.9:1 (AAA) | Texto principal |
| `fg-dim` | `#C7CFDB` | 11.4:1 (AAA) | Texto secundário / lead |
| `muted` | `#9AA4B2` | 6.7:1 (AAA) | Texto auxiliar / mono labels |
| `muted-2` | `#6B7585` | 3.8:1 (AA Large) | Texto desativado |

---

## 4 · Linhas e bordas

| Token | Valor | Uso |
|-------|-------|-----|
| `line` | `rgba(244, 246, 250, 0.08)` | Borda padrão de cards |
| `line-strong` | `rgba(244, 246, 250, 0.14)` | Borda em destaque |

---

## 5 · Regras de aplicação

### Backgrounds
- Use **navy-400** como fundo base sempre.
- Cards e modais usam um gradient sutil `linear-gradient(155deg, rgba(18,40,71,0.45), rgba(10,26,47,0.45))` + borda `line`.

### Hierarquia de cor
1. Texto principal → `fg`
2. Texto secundário → `fg-dim`
3. Texto técnico/labels → `muted` + `mono font`
4. Accent dourado → reserve pra CTAs, eyebrows, números, ícones — **não use em corpo de texto**

### CTAs
- **Primário**: fundo `gold-200`, texto `#1A1407` (navy bem escuro pra contraste), com `box-shadow: var(--depth-1) + glow-gold` no hover.
- **Ghost**: borda `line-strong`, texto `fg`, hover muda borda pra `gold-200`.

### Glows e gradientes
Pra dar profundidade premium, sobreponha:
```css
background:
  radial-gradient(ellipse at 80% 30%, rgba(201,169,97,0.10), transparent 60%),
  radial-gradient(ellipse at 10% 70%, rgba(79,179,255,0.06), transparent 60%),
  linear-gradient(180deg, #06101F, #0A1A2F);
```

---

## 6 · Não-usar

- ❌ Branco puro `#FFFFFF` em qualquer lugar — sempre use `fg` (#F4F6FA)
- ❌ Preto puro `#000000` — sempre use `navy-400` ou `navy-500`
- ❌ Cinza neutro tipo `#808080` — quebra a temperatura azulada
- ❌ Dourado saturado (#FFD700) — fica brega
- ❌ Verde whatsapp brilhante para o FAB — usamos dourado pra manter on-brand
