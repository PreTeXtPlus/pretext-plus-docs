---
sidebar_position: 5
---

# Assets and Images

An **asset** is a piece of content the project owns but that does not live in a division's prose — today, images: uploaded pictures, and diagrams you author in TikZ, Asymptote, and the like. Assets are managed separately from your text and placed with a reference, so the same image can appear in several places, at different widths, without duplicating anything.

This works differently from a local PreTeXt install, where an image is a file path in a repository. On PreTeXt.Plus you add the image once, PreTeXt.Plus gives it a **reference**, and you place that reference.

## Where assets live

Open the **Assets** panel from the project explorer. It lists every asset with a thumbnail and its reference, and has two buttons at the bottom:

- **Manage** — open the asset manager on its list of assets.
- **Add** — open the asset manager ready to add one.

In a PreTeXt division you can also reach the asset manager from **File ▸ Assets…**. The project page shows a read-only gallery of the same assets.

## Adding an image

Click **Add**, then choose a source:

- **Upload** — paste an image from the clipboard, drag and drop a file, or click to browse. PNG, JPEG, GIF, SVG, and WebP are supported.
- **External URL** — give the image's URL. PreTeXt.Plus fetches it and stores a copy, so the image will not break if the original disappears.
- **Custom** — an image generated from source; see [Authored diagrams](#authored-diagrams).

Optionally give it a **title** — this is what the asset lists show — and click **Add to Project**. The asset is stored and assigned a **reference**, derived from the title: a short identifier, unique within the project, that you use to place it.

## Placing an image

Put the placeholder wherever you want the image, using the syntax for the division's format. For an asset with reference `fig-tangent`:

| Format | Placeholder |
|---|---|
| PreTeXt | `<plus:image ref="fig-tangent"/>` |
| LaTeX-style | `\plus{image}{fig-tangent}` |
| Markdown-style | `::image{ref="fig-tangent"}` |

Rather than typing it, use **Copy embed code** — in the asset's menu or the asset manager — which gives you the right form for the division you are in.

### Width

Width is a property of the *placement*, not of the asset, so the same image can be full width in one place and half width in another. It is always a percentage.

| Format | Placeholder |
|---|---|
| PreTeXt | `<plus:image ref="fig-tangent" width="50%"/>` |
| LaTeX-style | `\plus[width=50]{image}{fig-tangent}` |
| Markdown-style | `::image{ref="fig-tangent" width="50%"}` |

In LaTeX-style a bare number on `width` is read as a percentage, because a literal `%` would start a comment. Any other attribute you add to the placeholder is copied onto the image too.

:::note[Markdown attributes are space-separated]
`::image{ref="fig-1" width="50%"}` — no commas between attributes.
:::

### What it becomes

At build time the placeholder is replaced by a real PreTeXt `<image>` element: a `source` attribute naming the file (`fig-tangent.png`), the placement's attributes such as `width`, the asset's short description, and any additional source you authored on it. Downloaded source therefore stays portable.

## Managing an asset

Choose **Manage asset** from an asset's **⋮** menu, or click it in the asset manager, to open its details:

- **Replace image…** — swap the underlying file, keeping the reference, so every placement updates at once.
- **Title** and **Id** — the Id is the reference. Changing it updates every placeholder already in your document.
- **Short description (Alt text)** — a brief, plain-text description of the image for readers who cannot see it, inserted as PreTeXt's `<shortdescription>`. The editor flags any image without one, since a short description is required for accessibility.
- **Advanced ▸ Additional source** — extra PreTeXt placed inside the generated `<image>`, such as a longer `<description>`.
- **Duplicate** — copy the asset under a new reference, for a variant that should be placed independently.

**Save and copy embed code** saves your changes and copies the placeholder, ready to paste.

## Keeping document and assets in step

The asset lists join what the project holds against what the document references, so both kinds of mismatch are visible:

| Status | Meaning | Fix |
|---|---|---|
| **Needs asset** | The document uses a reference that no asset has | **Link / create** — attach an asset to it — or **Remove from document** |
| **Not placed** | The asset exists but no placeholder points at it | Place it, or remove the asset |

**Remove from project** deletes the asset *and* strips its placeholders from the document; you are asked to confirm when it is actually placed.

## Authored diagrams

A **Custom** asset is an image generated from source by the PreTeXt toolchain — TikZ, Asymptote, a Sage plot, and so on. Give it a title and click **Create**; then write its PreTeXt in the **PreTeXt source** field of its details, for example:

```xml
<latex-image>
    \begin{tikzpicture}
        \draw[domain=-2:2] plot (\x, {\x*\x});
    \end{tikzpicture}
</latex-image>
```

It is placed like any other image, from any markup style, and gets the same short description. You can also write such an image directly in a PreTeXt division, wrapped in the usual `<image>` element.

These are rendered by the PreTeXt toolchain when you [build](/building/outputs/) — the live preview cannot generate them, so build a website output to see the result. TikZ libraries and styles go in the **Image Macros** section of your [preamble](/editor/preamble/).

## Limits

A free account can hold **100 assets** across all its projects; a subscription removes the limit. See [Accounts and limits](/getting-started/accounts-and-limits/).
