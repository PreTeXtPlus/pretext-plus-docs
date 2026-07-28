---
sidebar_position: 4
---

# Preamble and Macros

Every PreTeXt document has a `<docinfo>` block holding project-wide settings: math macros, image preambles, cross-reference conventions, and so on. PreTeXt.Plus keeps it out of your source and gives it its own editor — you never write the `<pretext>` or `<docinfo>` wrapper yourself.

Open it from the source menu: **Edit Macros** in PreTeXt and Markdown divisions, **Edit Preamble** in LaTeX divisions. It is the same dialog either way.

## The three sections

### LaTeX Macros

LaTeX macros available throughout the document, stored in `<macros>`. Define them with `\newcommand` (avoid `\def`):

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\abs}[1]{\left|#1\right|}
```

These are available in **every** division's math, whatever markup style the division uses — so `$\abs{x}$` works in a PreTeXt, LaTeX-style, or Markdown-style division alike. This is the right home for notation you use across a book.

:::tip[Macros defined in a division are local]
`\newcommand` written in a LaTeX-style division's body keeps the editor from flagging it as unknown, but it is not shared with the rest of the project. Put anything you use more than once here instead.
:::

### Image Macros

LaTeX macros used when rendering TikZ and other `latex-image` graphics, stored in `<latex-image-preamble>`. This is where `\usetikzlibrary{...}` and any TikZ styles belong:

```latex
\usetikzlibrary{arrows.meta, positioning}
\tikzset{node/.style = {circle, draw, minimum size=6mm}}
```

Because these graphics are rendered by the real PreTeXt toolchain, they appear in [builds](/building/outputs/) but not in the in-browser live preview.

### Other Elements

Any other `<docinfo>` children — `<cross-references>`, `<rename>`, `<brandlogo>`, and so on — edited as raw XML, one element per line:

```xml
<cross-references text="type-global"/>
<rename element="theorem">Result</rename>
```

New projects start with a `<brandlogo>` entry here.

## Common preamble across projects

If you write several projects with the same notation, you can keep one preamble at the *account* level and reuse it.

In the preamble dialog, tick **Use my common docinfo/preamble**. The project then uses your common preamble instead of its own. The common preamble can be edited from the same dialog, and changes propagate to every project that opts in.

Untick it and the project falls back to its own preamble, which is preserved unchanged in the meantime.

## What PreTeXt.Plus supplies for you

You do not write, and cannot edit here:

- the `<pretext>` root element;
- the `<docinfo>` wrapper itself;
- the `project.ptx` manifest — that is generated from your [build outputs](/building/outputs/).

If you [download the project](/building/publishing/#download-source), all three appear in the archive, assembled and ready for PreTeXt-CLI.

## Publication file options

PreTeXt's publication file — the settings that control numbering depth, HTML chunking, and similar per-output choices — is not yet editable from the interface. It is on the [roadmap](/features/roadmap/). A [downloaded project](/building/publishing/#download-source) includes a minimal `publication/publication.ptx` you can extend locally with PreTeXt-CLI.
