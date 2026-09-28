---
sidebar_position: 7
---

# Preamble and Macros

Every PreTeXt document has a `<docinfo>` block holding project-wide settings: math macros, image preambles, cross-reference conventions, and so on. PreTeXt.Plus keeps it out of your source and gives it its own editor — you never write the `<pretext>` or `<docinfo>` wrapper yourself.

Open it from the **File** menu: **Edit Macros…** in PreTeXt and Markdown divisions, **Edit Preamble…** in LaTeX divisions. It is the same dialog either way.

## The three tabs

### LaTeX Macros

LaTeX macros available throughout the document, stored in `<macros>`. Define them with `\newcommand` (avoid `\def`):

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\abs}[1]{\left|#1\right|}
```

These are available in **every** division's math, whatever markup style the division uses — so `$\abs{x}$` works in a PreTeXt, LaTeX-style, or Markdown-style division alike. This is the right home for notation you use across a book.

:::tip[Define macros here, not in a division]
A `\newcommand` written in the body of a LaTeX-style division is not shared with the rest of the project, and the conversion does not handle it cleanly. Put your macros here instead.
:::

### Image Macros

LaTeX macros used when rendering TikZ and other `latex-image` graphics, stored in `<latex-image-preamble>`. This is where `\usetikzlibrary{...}` and any TikZ styles belong:

```latex
\usetikzlibrary{arrows.meta, positioning}
\tikzset{node/.style = {circle, draw, minimum size=6mm}}
```

Because these graphics are rendered by the real PreTeXt toolchain, they appear in [builds](/building/outputs/) but not in the live preview.

### Other Elements

Any other `<docinfo>` children — `<cross-references>`, `<rename>`, and so on — edited as raw XML, one element per line:

```xml
<cross-references text="type-global"/>
<rename element="theorem">Result</rename>
```

New projects start with a `<blurb>` here: the summary of your document that appears in search results and social-media previews. Edit it to describe your work.

## Common preamble across projects

If you write several projects with the same notation, you can keep one preamble at the *account* level and reuse it.

In the preamble dialog, tick **Use my common docinfo/preamble**. The project then uses your common preamble instead of its own, and the dialog edits the common preamble — a banner reminds you that changes apply to every project that uses it.

Untick it and the project falls back to its own preamble, which is preserved unchanged in the meantime. **Import common docinfo** merges your common macros and elements into the project's own preamble, as a starting point.

## What PreTeXt.Plus supplies for you

You do not write, and cannot edit here:

- the `<pretext>` root element;
- the `<docinfo>` wrapper itself;
- the `project.ptx` manifest — generated from your [build outputs](/building/outputs/);
- the publication files — generated from your [build settings](/building/build-settings/), which is also where you choose a theme, numbering depth, a custom logo, and other publisher options.

If you [download the project](/building/publishing/#download-source), all of these appear in the archive, assembled and ready for PreTeXt-CLI.
