---
sidebar_position: 1
---

# Writing in PreTeXt.Plus

Every PreTeXt.Plus project is, in the end, a PreTeXt document. What is unique to PreTeXt.Plus is that you can *write* that document in three different markups, and mix them freely within one project.

| Markup style | You write | Best for |
|---|---|---|
| [PreTeXt](/writing/pretext-style/) | Native PreTeXt XML | Full control; the complete PreTeXt feature set |
| [LaTeX-style](/writing/latex-style/) | LaTeX-like syntax | Authors coming from LaTeX; pasting in existing `.tex` |
| [Markdown-style](/writing/markdown-style/) | Extended Markdown | Fast drafting; lightweight documents; authors from Quarto/R Markdown |

Any of them can also be used to write a [slideshow](/writing/slideshows/).

## How the conversion works

LaTeX-style and Markdown-style source is **converted to PreTeXt XML**, never rendered directly. That conversion happens in your browser, continuously:

- the **preview** shows the converted result;
- **File ▸ Display Full Source** shows the assembled PreTeXt for the whole project, with every division converted and every include expanded;
- the **build** runs the official PreTeXt toolchain on that same converted XML.

So the accessibility guarantees, the multi-format output, and the semantics are PreTeXt's in all three cases. The markup style only changes what you type.

## The subset rule

LaTeX-style PreTeXt is not LaTeX, and Markdown-style PreTeXt is not CommonMark plus everything. Each supports the constructs that have a *meaning* in PreTeXt:

- A LaTeX macro that only changes appearance (`\vspace`, `\textcolor`, font size switches) is either dropped or mapped to the nearest semantic element.
- Anything the converter does not recognize is reported to you rather than silently discarded — as a lint warning in the editor, and as a `<TODO>` placeholder in the converted output.

This is deliberate. Restricting the input is what guarantees the output is valid, accessible PreTeXt.

## Mixing styles in one project

Divisions carry their own format. A book can have PreTeXt chapters, a LaTeX chapter pasted from an old paper, and a Markdown chapter drafted quickly — each is converted independently and assembled into one document.

The mechanism is the *include placeholder*, written differently in each style:

| Style | Include a child division | Include an asset | Include a snippet |
|---|---|---|---|
| PreTeXt | `<plus:section ref="sec-intro"/>` | `<plus:image ref="fig-1"/>` | `<plus:snippet ref="note"/>` |
| LaTeX-style | `\plus{section}{sec-intro}` | `\plus{image}{fig-1}` | `\plus{snippet}{note}` |
| Markdown-style | `::section{ref="sec-intro"}` | `::image{ref="fig-1"}` | `::snippet{ref="note"}` |

All three convert to the same `<plus:… ref="…"/>` element, which is expanded at assembly time. See [Divisions and modular editing](/editor/divisions/), [Assets](/editor/assets/), and [Snippets](/editor/snippets/).

:::note[One-way conversion]
You can convert a LaTeX-style or Markdown-style division to PreTeXt, keeping the original as an unplaced division. You cannot convert PreTeXt back into LaTeX-style or Markdown-style. See [Converting a division to PreTeXt](/editor/divisions/#converting-a-division-to-pretext).
:::

## Editor support

Whichever style you use, the code editor provides completions, live diagnostics, and spell checking for it:

- **PreTeXt** — schema-driven element and attribute completion, and validation against the PreTeXt schema.
- **LaTeX-style** — environment and macro completion, `\begin`/`\end` matching, math-mode awareness, `\label`/`\ref` intelligence, and help cleaning up legacy LaTeX.
- **Markdown-style** — directive completion, fence matching, math-mode awareness.

See [Writing tools](/editor/writing-tools/) for the details.
