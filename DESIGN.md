# ZDROVY — design rules

The whole visual system lives in `app/globals.css` as tokens. These rules exist
because the site previously had 20 font sizes, 19 gap values and 4 card radii —
every section invented its own numbers, so nothing matched.

**The one rule: never write a raw px value in component CSS. Use a token, or add
a token if the scale genuinely lacks a step.**

---

## Colour

Two background levels. That is the whole system.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#ffffff` | page background |
| `--fg` | `#1d1d1f` | all primary text |
| `--muted` | `#6e6e73` | body copy, eyebrows, labels |
| `--border` | `#d2d2d7` | hairlines |
| `--surface` | `#f5f5f7` | cards, and tinted section bands |
| `--surface-2` | `#ebebed` | hover only |
| `--accent` | `#0071e3` | links, checkmarks |

**Contrast rule:** a card and the thing behind it must differ.
- On the page (`--bg`) → card is `--surface`.
- On a band (`--surface`) → card flips to `--bg`. `.section--band .card` does
  this automatically; never hand-set a card background.

Never introduce a third grey.

## Spacing

4px base. Only these steps exist:

`--s2` 8 · `--s3` 12 · `--s4` 16 · `--s5` 24 · `--s6` 32 · `--s7` 48 · `--s8` 64 · `--s9` 96

- Inside a component: `--s2`…`--s5`
- Between blocks in a section: `--s5`…`--s6`
- Section rhythm: `--section-y` only

## Vertical rhythm

`.section` owns **all** vertical rhythm — `padding-block: var(--section-y)`
(96px desktop, 48px mobile).

- Never add `margin-top` between sections.
- Never use a spacer `<div>`. If you need air, you need another `<Section>`.
- Two adjacent plain sections collapse to one rhythm unit automatically.

## Type

Five roles. Nothing in between — no 15px, no 17px, no 18px.

| Token | Size | Role |
|---|---|---|
| `--t-display` | 40→64 | page `<h1>` (Hero only) |
| `--t-h2` | 28→36 | section heading |
| `--t-h3` | 24 | card title, contact value, search input |
| `--t-body` | 16 | body copy |
| `--t-small` | 14 | eyebrow, label, pill, footer |

- `.eyebrow` = small + weight 500 + muted. Always.
- `.lead` = body + muted, capped at `60ch`.
- Headings take `--ls-tight` (-0.02em). Body text never does.

## Radius

`--r-lg` 20px — cards and media.
`--r-full` — pills and round buttons.

Nothing else. No 28px, no 10px.

## Controls

One `.pill`, two variants:

- `.pill` — outlined, secondary
- `.pill pill--solid` — filled, primary

Height is `--control-h` (44px) so every control lines up. Do not build a second
button style.

## Motion

`--dur` (0.2s) and `--ease` for every transition. The one deliberate exception
is the card auto-cycle, which respects `prefers-reduced-motion`.

---

## The grid

`.grid` is a 12-column grid with a `--s5` gutter. Swiss layouts are built here,
not with one-off flexbox.

```html
<div class="grid">
  <h2 class="text2 col-7">Statement</h2>
  <p class="lead col-4 col-start-9">Supporting copy</p>
</div>
```

- `.col-N` sets only `grid-column-end: span N`, so it composes with an explicit
  `.col-start-N`. Never use the `grid-column` shorthand for spans — it sets both
  ends and silently kills the span.
- Below 900px every column goes full width.
- Asymmetry is the point. A 7 + 4 split with an empty column between reads as
  designed; a 6 + 6 split reads as a default.

Rules (hairlines) are carried by the pieces that need them — `.stat` and
`.feature` each draw their own top border. `.marker` supplies the 01 / 02 / 03
labels, used as structure rather than decoration.

## Components

| Component | Job |
|---|---|
| `Hero` | The page header. Every page uses it. Only `title` is required; omit a prop and that element disappears. `align="center"` (default) or `"left"`. |
| `Section` | A band of content + the site's vertical rhythm. `heading` renders the h2; `tone="band"` tints it. |
| `Figure` | A photo slot. With `src` it renders the photo; without one it renders a labelled placeholder carrying the shot brief and the pixel size. `ratio="wide" \| "portrait" \| "square"`. |
| `Cards` | A responsive card grid, 1–3 columns, driven by an `items` array. `autoCycle` runs the step highlight. |
| `Toolbar` / `Footer` | Site chrome. |

Smaller pieces: `.stats` / `.stat` (numeric proof bar), `.feature` (rule +
title + text), `.price-figure` (large numeral + unit).

## Page structure

A commercial page runs in this order, and every block earns its place:

1. **Headline** — the benefit, not the mechanism. What the customer gets.
2. **Problem → solution** — paired, one line each, facing across the grid.
3. **What you get** — labels, not sentences.
4. **CTA** — price and one clear button.

Social proof belongs between 3 and 4 once there is any. Build it only from
real quotes and real numbers — never from invented copy, and never as an
empty placeholder on a live page.

Copy is written to be scanned. If a sentence explains what the heading above it
already said, cut the sentence.

## Photography

Photos carry this product, so they follow the same discipline as the type:

- **Documentary, not staged.** Real stores, real staff, real wear. A rendered
  mockup undoes the credibility the rest of the page is buying.
- **Daylight, no heavy grading.** The palette is already neutral; let the
  Żabka green be the only colour that shouts.
- **One idea per frame.** If the caption needs two sentences, it is two photos.
- Ratios come from `Figure`: `wide` 16:9 for context and product, `portrait`
  4:5 for people and steps, `square` 1:1 for objects.

Adding a page means composing `Hero` + `Section`s. If you find yourself writing
page-specific CSS, that is the signal the system is missing a primitive — add
the primitive rather than a one-off class.
