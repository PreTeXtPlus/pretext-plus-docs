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

The editor keeps the opening and closing structural lines read-only, so the wrapper cannot be accidentally deleted mid-edit.

## Includes and assets

Child divisions and assets are referenced with `plus:` placeholders rather than XInclude:

```xml
<plus:chapter ref="ch-intro"/>
<plus:section ref="sec-limits"/>
<plus:image ref="fig-tangent" width="60%"/>
```

The `ref` matches the child division's `xml:id`, or the asset's reference. At assembly time each placeholder is replaced by the referenced content — converting it from LaTeX-style or Markdown-style first, if that is how the child was written.

Placeholders written *inside* verbatim content (`<pre>`, `<c>`, `<cd>`, `<program>`, `<console>`, `<sage>`, `<latex-image>`, `<sageplot>`, `<asymptote>`) are treated as examples, not real includes, so you can document the syntax without triggering it.

See [Divisions and modular editing](/editor/divisions/) and [Assets](/editor/assets/).

## Editor features specific to PreTeXt divisions

PreTeXt divisions get the richest tooling:

| Feature | Where |
|---|---|
| Schema-driven completions | As you type |
| **Format PreTeXt** — reformat/indent the source | Source menu |
| **Import LaTeX** — convert LaTeX and insert it here | Source menu |
| **Assets** — open the asset manager | Source menu |
| **Edit Macros** — the project preamble | Source menu |
| **Display Full Source** — the assembled document | Source menu |
| Visual (WYSIWYG) editing | Editor panel |

The visual editor is only active on PreTeXt source. LaTeX-style and Markdown-style divisions get a read-only rendered preview instead.

## When to use PreTeXt directly

- You are an experienced PreTeXt author.
- You need an element that the LaTeX-style or Markdown-style conversion does not cover.
- You want the visual editor.
- You are writing the structural spine of a large project and want the includes explicit.

A common pattern is a PreTeXt root division that mostly holds `plus:` placeholders, with the actual prose written in whichever style suits each chapter.
