---
sidebar_position: 4
---

# Importing Existing Documents

If you already have a document, PreTeXt.Plus can convert it into a project and split it into divisions for you.

Click **+ New project**, then **Import existing documents**.

## Choosing a file

Drag a file onto the importer, or click **Select File**. PreTeXt.Plus picks a converter from the file's extension:

| Converter | Reads |
|---|---|
| **Built-in** | LaTeX (`.tex`), Markdown (`.md`), PreTeXt (`.ptx`, `.xml`), and `.zip` or `.tar.gz` archives of a whole project |
| **Pandoc** | Word (`.docx`), OpenDocument (`.odt`), EPUB, HTML, reStructuredText, Org, Jupyter notebooks (`.ipynb`), Typst, and Textile — up to 10 MB |

**Document kind** defaults to **Auto detect**. Choose **Article**, **Book**, or **Slides** if the guess is wrong — Slides is how you import a Markdown deck that does not declare `division: slideshow` in its frontmatter.

If an archive contains more than one standalone document, you are asked which is the **Main document**, and whether to attach each of the others as a chapter or a section, or leave it out.

## The review step

Before anything is created you get an **Import Summary**: the source, its detected format and document kind, and how the result will be laid out.

- **Conversion warnings** are listed macro by macro — each says what was dropped, replaced, or rewritten, and how many times. LaTeX imports typically produce several; they are informational, not errors.
- **Convert with Pandoc instead** appears when both converters can read your file (LaTeX and Markdown). Try it if the built-in result looks worse.

### Import mode (LaTeX and Markdown sources)

| Mode | Result |
|---|---|
| **Keep as LaTeX** / **Keep as Markdown** (default) | The divisions stay in [LaTeX-style](/writing/latex-style/) or [Markdown-style](/writing/markdown-style/) PreTeXt, converted at build time. Your source stays recognizable and editable. |
| **Convert to PreTeXt** | The divisions are stored as PreTeXt XML, so you get the full PreTeXt feature set. |

A PreTeXt source has no choice to make; it is kept as is. You can also keep the original format now and [convert individual divisions](/editor/divisions/#converting-a-division-to-pretext) later.

### Divisions to import

Import **Everything**, or tick just the divisions you want. A selected division comes in whole, with everything inside it. Picking divisions always imports converted PreTeXt.

### Split into files

Each division becomes its own entry in the editor's Table of Contents. **Split into files** chooses how deep the split goes — **One file**, **1 level**, **2 levels**, and so on — and shows the resulting layout as you change it. By default, a slideshow is kept in one division.

Use **Preview** to read the converted files (for LaTeX, **Show what changed** reveals the cleanup edits) before committing. Click **Confirm Import** — or **Start Over** — and the new project opens.

## What the LaTeX cleaner does

LaTeX import runs a cleaning pass before conversion. It drops comments, normalizes whitespace, expands `\input` and `\include`, rewrites plain-TeX font directives, and strips presentation-only macros that have no semantic meaning in PreTeXt. Everything it removes or rewrites is reported in the warnings list.

Macros defined in the source's preamble with `\newcommand`, `\renewcommand`, `\DeclareMathOperator`, or `\def` are collected into the project's **LaTeX Macros**, so they work in every division's math. Complex or presentation-heavy preambles will still need attention afterwards — see [Preamble and macros](/editor/preamble/).

## Importing into an existing project

In a **PreTeXt** division, choose **File ▸ Import…**. Paste LaTeX or Markdown, open a file, or drag one in — Word and the other formats above work too — and click **Convert**. The result is fitted to the division you are in; review or edit it, then click **Copy and Close** and paste it where you want it.

Tick **Clean up LaTeX before converting** to run the cleaner first, or **Convert with Pandoc instead** where it is offered.

For a quick paragraph or two you do not even need the dialog: LaTeX or Markdown pasted into a PreTeXt division is converted as it arrives. See [Writing tools](/editor/writing-tools/#pasting-latex-and-markdown).

## After importing

Expect to do some cleanup:

- Check the **Table of Contents** — the splitter's idea of your division structure may not match yours. Divisions can be renamed, retyped, and re-placed. See [Divisions](/editor/divisions/).
- Images inside an uploaded archive are imported as project [assets](/editor/assets/). A single file cannot bring its images along, so add those afterwards.
- Work through the conversion warnings.
- Build a website output early — the build server is the authority on whether the result is valid PreTeXt. See [Build outputs](/building/outputs/).
