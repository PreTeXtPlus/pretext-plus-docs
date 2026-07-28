---
sidebar_position: 2
---

# Divisions and Modular Editing

In a local PreTeXt project, structure lives in files and `xi:include`. PreTeXt.Plus replaces both: a project is a **flat pool of divisions**, and hierarchy is expressed by *include placeholders* inside a parent division's source.

This is what lets you edit one section at a time instead of scrolling through a whole book — and what lets each division carry its own markup style.

## What a division is

A division is any structural element of a PreTeXt document: the root (`article`, `book`, `slideshow`), and everything under it — `part`, `chapter`, `section`, `subsection`, `subsubsection`, `introduction`, `conclusion`, `worksheet`, `handout`, `exercises`, `references`, `glossary`, `solutions`, `reading-questions`, `paragraphs`.

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

## The Contents panel

The panel shows the division tree rooted at your document element. Click a division to open it in the editor. Click the chevron to expand or collapse its children.

Each division has a **⋯** menu:

| Action | Effect |
|---|---|
| **Edit properties** | Change title, type, and id (and, for a new division, its format) |
| **Add new division** | Create a child and insert its placeholder |
| **Insert at cursor** | Put this division's placeholder where the cursor is |
| **Remove from document** | Delete the placeholder; keeps the division |
| **Delete from project** | Delete the division itself, and its placeholder |

### Edit properties

- **Title** — rewritten in the source: as a `<title>` element in PreTeXt, as the header macro's argument in LaTeX, as `title:` in Markdown frontmatter.
- **Type** — rewritten too: `\section{...}` becomes `\worksheet{...}` in LaTeX, `division:` changes in Markdown frontmatter, the wrapper element changes in PreTeXt. On the root division this switches the document type (`article` → `book` → `slideshow`); existing children are untouched, so their types may need a follow-up edit.
- **Id** — the `xml:id`. In LaTeX it is written as the `\label` immediately after the header macro; in Markdown as `id:` in the frontmatter. Renaming updates every placeholder pointing at it.
- **Format** — only selectable while the division is new and unsaved. An existing division's source cannot be losslessly translated between formats, so the field goes read-only once saved.

:::note[LaTeX has no `label` attribute]
PreTeXt's separate `label` attribute has no LaTeX-style spelling. It is available on PreTeXt and Markdown divisions (`label:` in frontmatter) only.
:::

### Unplaced divisions

A division whose id appears in no other division's placeholders is *unplaced*. It still exists and is still editable, but it is not part of the document, so it is not built. Unplaced divisions are listed separately at the bottom of the tree, with two extra menu actions:

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

You can see the result at any time with **Display Full Source** in the source menu.

## Placeholders inside verbatim content

Text that looks like a placeholder but sits inside verbatim content is treated as an example, not an include — so you can document the syntax without triggering it. The verbatim regions are:

| Format | Ignored inside |
|---|---|
| PreTeXt | `<pre>`, `<c>`, `<cd>`, `<program>`, `<console>`, `<sage>`, `<latex-image>`, `<sageplot>`, `<asymptote>` |
| Markdown | Fenced code (backticks or tildes), inline code spans |
| LaTeX | `verbatim` and `lstlisting` environments, `\verb\|...\|` |

## Protected regions

In the code editor, a division's structural lines — its opening element and closing tag — are read-only. This keeps the wrapper intact while you edit the body, and is what makes it safe for the editor to reassemble the document from the pool.
