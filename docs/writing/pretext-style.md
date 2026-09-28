---
sidebar_position: 2
---

# Classic PreTeXt

A PreTeXt division holds native PreTeXt XML. This is the most capable option: no translation layer, and the full PreTeXt feature set is available.

For the PreTeXt language itself — every element, attribute, and idiom — use the [PreTeXt Author's Guide](https://pretextbook.org/doc/guide/html/). This page covers only what differs on PreTeXt.Plus.

## What a division's source looks like

A PreTeXt division's source is the complete element, including its own wrapper tag:

```xml
<section xml:id="sec-limits">
    <title>Limits</title>
    <p>
        A first paragraph.
    </p>
</section>
```

The root division is the document element (`<article>`, `<book>`, or `<slideshow>`). You do **not** write a `<pretext>` wrapper or a `<docinfo>` block — PreTeXt.Plus assembles those for you at build time from your [preamble](/editor/preamble/).

The editor keeps the opening tag, the title line, and the closing tag read-only, so the wrapper cannot be accidentally deleted mid-edit. Change the title, type, or id from **Edit properties** in the Table of Contents — or just click one of those lines. See [Protected regions](/editor/divisions/#protected-regions).

## Includes and assets

Child divisions, assets, and snippets are referenced with `plus:` placeholders rather than XInclude:

```xml
<plus:chapter ref="ch-intro"/>
<plus:section ref="sec-limits"/>
<plus:image ref="fig-tangent" width="60%"/>
<plus:snippet ref="worksheet-instructions"/>
```

The `ref` matches the child division's `xml:id`, or the asset's or snippet's reference. At assembly time each placeholder is replaced by the referenced content — converting it from LaTeX-style or Markdown-style first, if that is how it was written. Any other attribute on a placeholder, such as `component="instructor"`, is copied onto the content it brings in.

Placeholders written *inside* verbatim content (`<pre>`, `<c>`, `<cd>`, `<program>`, `<console>`, `<sage>`, `<latex-image>`, `<sageplot>`, `<asymptote>`) are treated as examples, not real includes, so you can document the syntax without triggering it.

See [Divisions and modular editing](/editor/divisions/), [Assets](/editor/assets/), and [Snippets](/editor/snippets/).

## Editor features specific to PreTeXt divisions

PreTeXt divisions get the richest tooling:

| Feature | Where |
|---|---|
| Schema-driven completions and validation | As you type |
| `$…$` becomes `<m>`, and `<`, `>`, `&` are escaped for you | As you type |
| Pasted LaTeX and Markdown converted to PreTeXt | Paste (`Ctrl`/`Cmd`+`Shift`+`V` to paste as is) |
| **Format PreTeXt** — reformat and indent the source | File menu |
| **Import…** — convert LaTeX, Markdown, Word, and more for this division | File menu |
| **Assets…** and **Snippets…** — the asset and snippet managers | File menu |

See [Writing tools](/editor/writing-tools/) for the details.

## When to use PreTeXt directly

- You are an experienced PreTeXt author.
- You need an element that the LaTeX-style or Markdown-style conversion does not cover.
- You are writing the structural spine of a large project and want the includes explicit.

A common pattern is a PreTeXt root division that mostly holds `plus:` placeholders, with the actual prose written in whichever style suits each chapter.
