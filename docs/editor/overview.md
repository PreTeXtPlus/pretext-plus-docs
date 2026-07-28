---
sidebar_position: 1
---

# The Editor

Open a project's editor with the **Write** button on its dashboard, or by clicking the project on your Projects page.

## Layout

The editor has three regions:

**Contents panel (left).** The table of contents: the division tree, unplaced divisions, and the Assets list. Collapse it with the chevron in its header. See [Divisions](/editor/divisions/) and [Assets](/editor/assets/).

**Editor panel.** The code editor for the division you are currently on. Above it sits a source menu and a badge naming the division's format — **PreTeXt**, **LaTeX**, or **Markdown**.

**Preview / visual panel.** On PreTeXt divisions you can switch this between the **live preview** and the **visual (WYSIWYG) editor**. On LaTeX and Markdown divisions the visual editor is read-only, since the source is converted rather than edited directly.

On screens narrower than about 800px the two panels become tabs; wider screens get a draggable split you can resize.

The top bar carries the project **title** (editable in place), the preview toggle, collaborator presence avatars, and a **Give feedback** link.

## Saving

The editor **autosaves every 10 seconds** while there are unsaved changes. The **Save** button forces an immediate save, and `Ctrl`/`Cmd`+`S` does the same.

Some actions persist immediately rather than waiting for the next autosave — adding or deleting a division, and adding, replacing, or removing an asset.

## The source menu

The actions offered depend on the format of the division you are editing.

| Action | PreTeXt | LaTeX | Markdown |
|---|:---:|:---:|:---:|
| **Format PreTeXt** — reindent the source | ✓ | | |
| **Import LaTeX** — convert LaTeX and insert it here | ✓ | | |
| **Assets** — open the asset manager | ✓ | | |
| **Edit Macros** / **Edit Preamble** — the project preamble | ✓ | ✓ | ✓ |
| **Display Full Source** — assembled PreTeXt for the whole project | ✓ | ✓ | ✓ |
| **Convert to PreTeXt** — create a PreTeXt copy of the project | | ✓ | ✓ |

If the window is narrow, actions that do not fit collapse into a **⋯ More** menu.

### Display Full Source

Shows the complete assembled PreTeXt document: every division converted from its authoring format, every `<plus:… ref="…"/>` placeholder expanded, in document order. This is exactly what gets built, and it is the fastest way to see what your LaTeX or Markdown actually became.

### Convert to PreTeXt

Available on LaTeX and Markdown divisions. It converts the project and creates a **new project** from the result; the project you are in is untouched. There is no way back — PreTeXt cannot be turned into LaTeX-style or Markdown-style source.

## Completions and diagnostics

The code editor offers context-aware completions in every format:

- **PreTeXt** — elements and attributes, driven by the PreTeXt schema.
- **LaTeX-style** — type `\` for macros, `\begin{` for environments (inserting the matching `\end`), `\end{` to close the innermost open environment, and `\ref{` for labels defined in the document. Inside math, only math macros are offered.
- **Markdown-style** — directive names after `:::`, and math macros inside `$…$`.

Nothing is offered inside comments, verbatim environments, or fenced code.

Diagnostics appear as squiggles as you type: unmatched `\begin`/`\end` or an unclosed directive fence is an **error**, an unrecognized environment or directive is a **warning**, and an unrecognized macro is **information**. Macros you define with `\newcommand` in the document are not flagged.

## Live preview

The preview renders PreTeXt to HTML **in your browser**, using the official PreTeXt XSLT stylesheets compiled to WebAssembly. There is no build server involved: the first preview in a session costs roughly 400 ms, later ones about 90 ms.

Previews rebuild **when you save**, not on every keystroke. Switching to a different division rebuilds immediately.

### Two-way sync

Click anything in the preview and the cursor moves to the matching source line. Move the cursor and the preview scrolls to the matching element. Clicking content from an expanded child division opens *that* division and lands on the right line of its own source.

Line-level sync works for PreTeXt divisions. A LaTeX or Markdown division is converted before rendering and the conversion carries no source map, so clicking such content does not move the cursor — but clicking a PreTeXt subsection nested inside one still opens it.

### If a render fails

Most often this means the document is not well-formed mid-edit. The last good preview stays on screen and a dismissible banner reports the problem.

### Light and dark

The preview starts in light mode and has its own readability menu, including a theme switch. That choice persists across rebuilds.

### Browser requirements

In-browser rendering needs WebAssembly JSPI, which Chromium-based browsers (Chrome, Edge) ship. Where it is unavailable the preview falls back to a server build or is hidden. The WASM renderer also cannot generate `latex-image` or `sageplot` graphics — for those, run a real [build](/building/outputs/).
