---
sidebar_position: 4
---

# Importing Existing Documents

If you already have a LaTeX, Markdown, or PreTeXt document, PreTeXt.Plus can bring it in and split it into divisions for you.

Click **+ New project**, then **Import existing documents**.

## Supplying the source

You can either **paste** source text into the box or **upload / drag in a file**.

Two settings control how the source is read:

**Source format.** Defaults to **Auto detect**, which decides from the content: source starting with `<` is treated as PreTeXt; source containing markers such as `\documentclass`, `\begin{document}`, `\section`, or `\title` is treated as LaTeX; source starting with a `#` heading is treated as Markdown. Override it with **LaTeX**, **Markdown**, or **PreTeXt** if the guess is wrong.

**Document kind.** Defaults to **Auto detect**, or you can force **Article** or **Book**. A book is split into one division per chapter; tick **Split each chapter into sections** to go a level deeper.

## The review step

Before anything is created you get an import summary:

- the source name, the detected format, the detected document kind, and how many files the conversion produced;
- **conversion warnings**, listed macro by macro — each says what was dropped, replaced, or rewritten, and how many times. LaTeX imports typically produce several; they are informational, not errors.

Use **Preview** to read the converted files before committing.

### Import mode (LaTeX sources only)

When the source is LaTeX you choose what actually gets stored:

| Mode | Result |
|---|---|
| **Converted** (default) | The divisions are stored as PreTeXt XML. Recommended for new projects — you get the full PreTeXt feature set and the visual editor. |
| **Native** | The divisions are stored as [LaTeX-style PreTeXt](/writing/latex-style/), converted to PreTeXt at build time. Keeps your source recognizable and editable as LaTeX. |

Markdown and PreTeXt sources have no such choice: Markdown is kept as [Markdown-style PreTeXt](/writing/markdown-style/), and PreTeXt is kept as-is.

Click **Import** (or **Start Over** / **Cancel** to back out) and the editor opens on the new project.

## What the LaTeX cleaner does

LaTeX import runs a cleaning pass before conversion. It drops comments, normalizes whitespace, expands `\input` and `\include`, rewrites plain-TeX font directives, and strips presentation-only macros that have no semantic meaning in PreTeXt. Everything it removes or rewrites is reported in the warnings list.

Custom macros defined with `\newcommand` are recognized, but complex or presentation-heavy preambles will need attention afterwards. Move the macros you actually want to keep into the project preamble — see [Preamble and macros](/editor/preamble/).

## Importing LaTeX into an existing project

You can also pull LaTeX into a project you have already started. In a **PreTeXt** division, open the source menu and choose **Import LaTeX**; the converted PreTeXt is inserted into the division you are editing.

## After importing

Expect to do some cleanup:

- Check the **Contents** panel — the splitter's idea of your division structure may not match yours. Divisions can be renamed, retyped, and re-placed. See [Divisions](/editor/divisions/).
- Images referenced by `\includegraphics` come through as `<image>` elements, but the image *files* are not automatically uploaded from a pasted source. Add them as [assets](/editor/assets/).
- Work through the conversion warnings.
- Build a website output early — the build server is the authority on whether the result is valid PreTeXt. See [Build outputs](/building/outputs/).
