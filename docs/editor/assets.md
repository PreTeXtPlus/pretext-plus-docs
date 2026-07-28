---
sidebar_position: 3
---

# Assets and Images

An **asset** is a piece of content the project owns but that does not live in a division's prose — today, images. Assets are managed separately from your text and placed with a reference, so the same image can appear in several places, at different widths, without duplicating anything.

This works differently from a local PreTeXt install, where an image is a file path in a repository. On PreTeXt.Plus you upload the file once, PreTeXt.Plus gives it a **reference**, and you place that reference.

## Where assets live

At the bottom of the **Contents** panel is an **Assets** section, folded by default. It lists every asset with a thumbnail and its reference, grouped by kind, and has two buttons:

- **Manage** — open the asset manager on the *In Document* view.
- **Add** — open the asset manager on the *Add Asset* view.

In a PreTeXt division you can also reach it from the source menu's **Assets** action.

## Adding an image

1. Click **Add**.
2. Choose **Image** as the kind.
3. Either:
   - **Upload** — drag and drop a file, paste an image from the clipboard, or click to browse. A pasted image is named automatically.
   - **External URL** — switch to that tab and give the image's URL. PreTeXt.Plus fetches it and stores a copy, so the image will not break if the original disappears.
4. Optionally give it a **title** — this is what the Contents list shows.
5. Click **Add to Project**.

The asset is stored and assigned a **reference**: a short identifier, unique within the project, that you use to place it.

## Placing an image

Put the placeholder wherever you want the image, using the syntax for the division's format. For an asset with reference `fig-tangent`:

| Format | Placeholder |
|---|---|
| PreTeXt | `<plus:image ref="fig-tangent"/>` |
| LaTeX-style | `\plus{image}{fig-tangent}` |
| Markdown-style | `::image{ref="fig-tangent"}` |

Rather than typing it, use **Copy embed code** in the asset manager — it gives you the right form for the division you are in.

### Width

Width is a property of the *placement*, not of the asset, so the same image can be full width in one place and half width in another. It is always a percentage.

| Format | Placeholder |
|---|---|
| PreTeXt | `<plus:image ref="fig-tangent" width="50%"/>` |
| LaTeX-style | `\plus[width=50]{image}{fig-tangent}` |
| Markdown-style | `::image{ref="fig-tangent" width="50%"}` |

In LaTeX-style a bare number on `width` is read as a percentage, because a literal `%` would start a comment.

:::note[Markdown attributes are space-separated]
`::image{ref="fig-1" width="50%"}` — no commas between attributes.
:::

### What it becomes

At build time the placeholder is replaced by a real PreTeXt `<image>` element, with a `source` attribute naming the file (`fig-tangent.png`), the width if you gave one, and any description you authored on the asset. The internal storage key is never written into your document, so downloaded source stays portable.

## Managing existing assets

The asset manager's **In Document** view joins what the project holds against what the document references, so both kinds of mismatch are visible:

| Status | Meaning | Fix |
|---|---|---|
| **Needs asset** | The document references a reference that no asset uses | **Link / create** — attach an upload to it — or **Remove from document** |
| **Not placed** | The asset exists but no placeholder points at it | Add a placeholder, or remove the asset |

Per-asset actions:

- **Edit** — change the title or authored description.
- **Replace asset** — swap the underlying file, keeping the reference, so every placement updates at once.
- **Duplicate** — copy the asset under a new reference. Useful for a variant that should be placed independently.
- **Copy embed code** — the placeholder for the current division's format.
- **Remove from project** — deletes the asset *and* strips its placeholders from the document. You are asked to confirm when it is actually placed.
- **Remove from document** — for an unlinked reference, deletes just the placeholder.

## Storage

Uploads count against your account's storage quota: **20 MB** on a free account, **100 MB** with a subscription. See [Accounts and limits](/getting-started/accounts-and-limits/).

Supported image types include PNG, JPEG, GIF, SVG, WebP, BMP, and TIFF. SVGs are displayed inline in the editor.

## Generated diagrams

Diagrams generated from source — PreFigure, TikZ (`latex-image`), Asymptote, Sage plots — are written directly in a **PreTeXt** division, using the normal PreTeXt elements:

```xml
<image xml:id="fig-plot">
    <shortdescription>A parabola</shortdescription>
    <latex-image>
        \begin{tikzpicture}
            \draw[domain=-2:2] plot (\x, {\x*\x});
        \end{tikzpicture}
    </latex-image>
</image>
```

These are rendered by the PreTeXt toolchain when you [build](/building/outputs/) — the in-browser live preview cannot generate them, so build a website output to see the result. TikZ preambles go in the **Image Macros** section of your [preamble](/editor/preamble/).

The asset manager does not yet cover generated diagrams; managing them through the same picker is on the [roadmap](/features/roadmap/).
