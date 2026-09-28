---
sidebar_position: 3
---

# Writing Tools

The code editor does more than hold text. This page covers the help it gives you while you write, in every markup style.

## The Insert menu

**Insert** adds a common construct at the cursor, already written in the current division's format — `\begin{theorem}` in LaTeX, `:::theorem` in Markdown, `<theorem>` in PreTeXt:

| Group | Constructs |
|---|---|
| Slides | Slide *(slideshows only)* |
| Text | Paragraph, Emphasis, Term, Inline code, Cross-reference, Link |
| Blocks | Theorem, Definition, Example, Remark, Exercise |
| Lists | Bulleted list, Numbered list, Description list |
| Math | Inline math, Displayed math, Aligned math |
| Figures & Code | Figure, Table, Code listing |

Press `Tab` to move between the placeholders in an inserted construct.

## Completions

The code editor offers context-aware completions in every format:

- **PreTeXt** — elements and attributes, driven by the PreTeXt schema.
- **LaTeX-style** — type `\` for macros, `\begin{` for environments (inserting the matching `\end`), `\end{` to close the innermost open environment, and `\ref{` for labels defined in the document. Inside math, only math macros are offered.
- **Markdown-style** — directive names after `:::` and `::`, and math macros inside `$…$`.

Nothing is offered inside comments, verbatim environments, or fenced code.

## Diagnostics

Problems are underlined as you type. Hover to read the message.

- **PreTeXt** divisions are checked against the PreTeXt schema, in the context of the whole assembled document, so a misplaced or misspelled element is flagged before you build.
- **LaTeX-style** and **Markdown-style** divisions are linted: an unmatched `\begin`/`\end` or an unclosed directive fence is an **error**, an unsupported environment or directive is a **warning**, and an unrecognized macro is **information**. Macros you define with `\newcommand` in the document are not flagged.

## Spell check

Prose is spell checked in all three formats, against an English dictionary. Math, code, markup, ids, and URLs are skipped; titles are checked.

Misspellings are underlined. Put the cursor on one and press `Ctrl`/`Cmd`+`.` (or click the lightbulb) for:

- suggested corrections;
- **Add "word" to dictionary** — saved with the project, so every collaborator shares it;
- **Ignore "word" this session**.

## Typing shortcuts in PreTeXt

In PreTeXt divisions a few things you would otherwise have to escape by hand are converted as you type:

| You type | You get |
|---|---|
| `$x^2$` | `<m>x^2</m>` |
| `$$x^2$$` | `<md>x^2</md>` |
| `x < 5` | `x &lt; 5` |
| `x > 3` | `x &gt; 3` |
| `A & B` | `A &amp; B` |

Conversion never happens inside markup, comments, code, or existing math, and prices such as "$5 or $10" are left alone. Press `Ctrl`/`Cmd`+`Z` to undo a conversion you did not want.

## Pasting LaTeX and Markdown

Paste LaTeX or Markdown into a PreTeXt division and it arrives converted to PreTeXt, fitted to where you pasted it. Text that does not look like LaTeX or Markdown is pasted unchanged.

To paste something verbatim, use `Ctrl`/`Cmd`+`Shift`+`V`, or turn conversion off with **Edit ▸ Convert Pasted LaTeX & Markdown**.

For more than a snippet — a whole file, or a Word document — use **File ▸ Import…**. See [Importing into an existing project](/getting-started/importing/#importing-into-an-existing-project).

## Find and replace

`Ctrl`/`Cmd`+`F` searches the division you are editing; expand the search box to replace as well.

To search the whole project, open **Find in Project** from the project explorer — or press `Ctrl`/`Cmd`+`Shift`+`F`, or choose **Edit ▸ Find/Replace in Project…**. Matches are listed by division as you type; click one to jump to it. Options: **Match case**, **Whole word**, and **Regex**. Enter replacement text to **Replace** a single match or **Replace All**.

## Cleaning up LaTeX

LaTeX pasted from an older document is often full of markup that means nothing to PreTeXt: spacing commands, font-size switches, low-level TeX, and publisher-specific macros. In a LaTeX-style division these are underlined, each with quick fixes (`Ctrl`/`Cmd`+`.`).

**File ▸ Clean up LaTeX…** reviews them all at once. Changes the editor can make for you are applied with **Fix all**. The rest — `\textbf` and its relatives, which describe appearance rather than meaning — are listed for you to decide, since only you know whether bold meant a warning, a defined term, or ordinary emphasis. Their quick fixes offer:

- **Replace with a semantic macro** — `\alert`, `\term`, or `\emph` for `\textbf`, for example;
- **Remove the macro, keep its text**;
- **Delete the macro and its text**.
