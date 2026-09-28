---
sidebar_position: 2
---

# Divisions and Modular Editing

In a local PreTeXt project, structure lives in files and `xi:include`. PreTeXt.Plus replaces both: a project is a **flat pool of divisions**, and hierarchy is expressed by *include placeholders* inside a parent division's source.

This is what lets you edit one section at a time instead of scrolling through a whole book — and what lets each division carry its own markup style.

## What a division is

A division is any structural element of a PreTeXt document: the root (`article`, `book`, `slideshow`), and everything under it — `part`, `chapter`, `section`, `subsection`, `subsubsection`, `introduction`, `conclusion`, `worksheet`, `handout`, `exercises`, `references`, `glossary`, `solutions`, `reading-questions`, `paragraphs`, and the front and back matter of a book (`frontmatter`, `preface`, `acknowledgement`, `dedication`, `biography`, `contributors`, `colophon`, `backmatter`, `appendix`, `index`).

Each division has:

| | |
|---|---|
| **Title** | Its display title |
| **Type** | The PreTeXt element it becomes |
| **Id** | Its `xml:id`, unique in the project — this is what includes point at |
| **Format** | PreTeXt, LaTeX-style, or Markdown-style |
| **Source** | The text you edit |

## Include placeholders

A parent division points at a child by embedding a placeholder. The syntax depends on the parent's format, but all three mean the same thing:

| Format | Placeholder |
|---|---|
| PreTeXt | `<plus:section ref="sec-limits"/>` |
| LaTeX-style | `\plus{section}{sec-limits}` |
| Markdown-style | `::section{ref="sec-limits"}` |

The `ref` is the child's **Id**. Type-specific aliases (`plus:chapter`, `plus:subsection`, ...) are all accepted and equivalent — the tag names the kind of thing being included, the `ref` does the work.

At assembly time each placeholder is replaced by the child's content, converted to PreTeXt first if the child was written in LaTeX or Markdown. Because expansion happens on the *converted* output, a LaTeX division can include a Markdown child, which can include a PreTeXt child, and so on.

A division that references itself, directly or transitively, is rendered as a comment rather than looping forever.

### Placeholder attributes

Any other attribute on a placeholder is copied onto the division it brings in. The most useful is `component`, which marks a division for PreTeXt's [versions](/building/build-settings/#versions-student-and-instructor-editions) — say, instructor-only material:

| Format | Placeholder |
|---|---|
| PreTeXt | `<plus:section ref="sec-answers" component="instructor"/>` |
| LaTeX-style | `\plus[component=instructor]{section}{sec-answers}` |
| Markdown-style | `::section{ref="sec-answers" component="instructor"}` |

Because the attribute lives on the include rather than on the division, the same division can be included in different places with different attributes.

## The Table of Contents

The **Table of Contents** panel of the project explorer shows the division tree rooted at your document element. Click a division to open it in the editor, and click a chevron to expand or collapse its children. The division you are editing is always revealed.

Each division has a **⋮** menu (the root division has just the first two actions):

| Action | Effect |
|---|---|
| **Edit properties** | Change the title, type, and id |
| **Add new division** | Create a child and insert its placeholder — offered only where subdivisions are allowed, so not in a worksheet or an exercises division, for example |
| **Remove from document** | Delete the placeholder; keeps the division |
| **Delete from project** | Delete the division itself, and its placeholder |

**Add new division** opens a draft row at the position the new division will take. Choose its title, format, and type, and **Save**. Its id is filled in from the title and type as you type — `sec-limits` for a section titled "Limits", `ws-practice` for a worksheet — until you edit the Id yourself.

### Edit properties

- **Title** — rewritten in the source: as a `<title>` element in PreTeXt, as the header macro's argument in LaTeX, as `title:` in Markdown frontmatter.
- **Type** — rewritten too: `\section{...}` becomes `\worksheet{...}` in LaTeX, `division:` changes in Markdown frontmatter, the wrapper element changes in PreTeXt. Only types valid under the parent are offered — a book offers **Chapter** and **Part**, a chapter offers **Section** and the specialized divisions like **Worksheet** and **Exercises**. On the root this switches between **Article** and **Book**; existing children are untouched, so their types may need a follow-up edit. A slideshow root cannot change type.
- **Id** — the `xml:id`. In LaTeX it is written as the `\label` immediately after the header macro; in Markdown as `id:` in the frontmatter. Renaming updates every placeholder pointing at it.
- **Format** — only selectable while the division is new and unsaved. An existing division's source cannot be losslessly translated between formats, so after that the field is gone — use [Convert to PreTeXt](#converting-a-division-to-pretext) instead.

You can also open the form by clicking a division's locked header lines in the code editor — see [Protected regions](#protected-regions).

:::note[LaTeX has no `label` attribute]
PreTeXt's separate `label` attribute has no LaTeX-style spelling. It is available on PreTeXt and Markdown divisions (`label:` in frontmatter) only.
:::

### Unplaced divisions

A division whose id appears in no other division's placeholders is *unplaced*. It still exists and is still editable, but it is not part of the document, so it is not built. Unplaced divisions are listed in their own foldable section at the bottom of the Table of Contents, with two extra menu actions:

- **Place in document** — add its placeholder at a sensible spot.
- **Insert at cursor** — add its placeholder exactly where you are typing.

Divisions become unplaced when you use **Remove from document**, or when you delete a placeholder by hand. This is a feature: it is how you park a section you are not ready to include.

## Mixing markup styles

Because format is per-division, one project can hold all three. A typical shape:

```xml
<book xml:id="my-book">
    <title>A Book</title>
    <plus:chapter ref="ch-intro"/>
    <plus:chapter ref="ch-old-paper"/>
    <plus:chapter ref="ch-draft"/>
</book>
```

where `ch-intro` is PreTeXt, `ch-old-paper` is LaTeX-style pasted from an existing article, and `ch-draft` is Markdown-style. Each converts independently; the assembled document is one coherent PreTeXt file.

You can see the result at any time with **File ▸ Display Full Source**.

## Converting a division to PreTeXt

A LaTeX-style or Markdown-style division can be converted to PreTeXt XML with the **Convert to PreTeXt** button in the corner of the code editor, or **Tools ▸ Convert to PreTeXt**. A dialog shows the current source beside the converted PreTeXt; **Create PreTeXt Division** confirms.

The division keeps its id and its place in the document, but from then on it is written in PreTeXt. Your original source is not lost: it is kept as a new, [unplaced](#unplaced-divisions) division in its original format, which you can delete once you are happy with the result.

There is no conversion in the other direction: PreTeXt cannot be turned back into LaTeX-style or Markdown-style source.

## Placeholders inside verbatim content

Text that looks like a placeholder but sits inside verbatim content is treated as an example, not an include — so you can document the syntax without triggering it. The verbatim regions are:

| Format | Ignored inside |
|---|---|
| PreTeXt | `<pre>`, `<c>`, `<cd>`, `<program>`, `<console>`, `<sage>`, `<latex-image>`, `<sageplot>`, `<asymptote>` |
| Markdown | Fenced code (backticks or tildes), inline code spans |
| LaTeX | `verbatim` and `lstlisting` environments, `\verb\|...\|` |

## Protected regions

In the code editor, a division's structural lines are read-only:

| Format | Locked |
|---|---|
| PreTeXt | The opening tag and the `<title>` line after it, and the closing tag |
| LaTeX-style | The header line — `\section{Title}\label{id}` — and the blank line below it |
| Markdown-style | The `---` frontmatter block |

These hold the title, type, and id, which you change from **Edit properties** instead — click any locked line to open it. Keeping the wrapper intact is what makes it safe for the editor to reassemble the document from the pool.
