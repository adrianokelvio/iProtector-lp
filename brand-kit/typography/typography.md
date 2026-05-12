# Tipografia iProtector

## 1 · Famílias

| Família | Função | Pesos usados | Google Fonts |
|---------|--------|--------------|--------------|
| **Manrope** | Display — headlines, títulos, botões, números grandes | 400, 500, 600, 700, 800 | [manrope](https://fonts.google.com/specimen/Manrope) |
| **Inter** | Body — corpo de texto, lead, parágrafos, legendas | 400, 500, 600 | [inter](https://fonts.google.com/specimen/Inter) |
| **JetBrains Mono** | Mono — eyebrows, labels, números técnicos, badges | 400, 500 | [jetbrains-mono](https://fonts.google.com/specimen/JetBrains+Mono) |

### Import (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 2 · Escala tipográfica

| Token | Tamanho (responsive clamp) | Line-height | Letter-spacing | Família |
|-------|----------------------------|-------------|----------------|---------|
| `h1` | `clamp(36px, 5vw, 64px)` | 1.04 | -0.035em | Manrope 700 |
| `h2` | `clamp(28px, 3.6vw, 48px)` | 1.08 | -0.028em | Manrope 600 |
| `h3` | `clamp(19px, 1.6vw, 24px)` | 1.20 | normal | Manrope 600 |
| `h4` | 16px | 1.35 | normal | Manrope 600 |
| `lead` | `clamp(16px, 1.2vw, 19px)` | 1.55 | normal | Inter 400 |
| `body` | 15px | 1.55 | normal | Inter 400 |
| `small` | 13.5px | 1.50 | normal | Inter 400 |
| `caption` | 11.5px | 1.40 | normal | Inter 500 |
| `eyebrow` | 11px | 1.40 | 0.18em UPPERCASE | JetBrains Mono 500 |

---

## 3 · Padrão de uso (Manrope vs Inter vs Mono)

- **Manrope** é a fonte de personalidade — vai em tudo que precisa de presença e elegância: H1, H2, nome de planos, números de stats, botões.
- **Inter** é a fonte de leitura — vai em qualquer texto corrido. Lead, parágrafo, descrição, legenda.
- **JetBrains Mono** é a fonte técnica/institucional — vai em eyebrows entre colchetes `[CATEGORIA]`, labels de campos, IDs, status, timestamps, números de processos.

---

## 4 · Padrão FIC de capitalização

Esta marca usa a **tipografia do Grupo FIC Capital**. Regras-chave:

### Colchetes `[CAIXA ALTA]`
Marcam categorias, etapas, estados, taxonomias. Sempre em mono.

✅ `[PERSONAL PROTECTION AS A SERVICE]`
✅ `[CLIENTE FINAL]`
✅ `[EMPRESA PARCEIRA]`
✅ `[PROTEÇÃO ATIVA]`
✅ `[PLANO GOLD]`
✅ `[MAIS POPULAR]`
✅ `[PRODUTO]` `[PARCEIROS]` `[EMPRESA]` `[LEGAL]`

### Numerais ordinais
Use `1º / 2ª / 3º` (ordinal sobrescrito) — não `01. / 1) / Passo 1`.

✅ `1º PASSO`, `2º PASSO`, `3º PASSO`, `4º PASSO`
✅ `1º CADASTRO` (masc.) · `2ª HOMOLOGAÇÃO` (fem.) · `3º ONBOARDING` (masc.) · `4ª OPERAÇÃO ATIVA` (fem.)

### Numerais entre brackets para modelos/cards
Quando não houver hierarquia sequencial estrita, usa `[01]`, `[02]`, `[03]`…

✅ `[01] Sob demanda` · `[02] Assinaturas recorrentes`

### NÃO fazer
- ❌ Negrito `**palavra**` pra dar ênfase → use CAIXA ALTA ou cor dourada
- ❌ Itálico decorativo
- ❌ Aspas tipográficas misturadas — sempre `" "` direitas
- ❌ Pontuação inconsistente nas frases dentro de colchetes (sem ponto final em labels curtos)

---

## 5 · Letter-spacing por contexto

| Contexto | LS | Motivo |
|----------|-----|--------|
| H1 hero | `-0.035em` | Aperta o título pra ficar denso e cinematográfico |
| H2 | `-0.028em` | Mesma lógica, levemente menos agressivo |
| Eyebrow `[CATEGORIA]` | `+0.18em` | Espaça letras pra dar ar institucional |
| Body | normal | Padrão Inter, fica legível |
| Mono labels | `+0.06em` a `+0.18em` | Conforme tamanho (mais espaçado em fontes pequenas) |
| Plan name `[PLANO GOLD]` | `+0.04em` | Sutil, mantém leitura |

---

## 6 · Hierarquia visual (exemplo no hero)

```
[PERSONAL PROTECTION AS A SERVICE]         ← Eyebrow · mono · gold · 11px
                                              · letter-spacing 0.18em

A nova geração de proteção                 ← H1 · Manrope 700 · fg branco
como serviço.                                 com "proteção" em gold gradient
                                              · 64px · letter-spacing -0.035em

Conectamos você a agentes de segurança…    ← Lead · Inter 400 · fg-dim · 17.5px
                                              · max-width 60ch

[Contratar proteção agora →]               ← Botão · Manrope 600 · 15px
                                              · CTA dourada
```
