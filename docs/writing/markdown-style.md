---
sidebar_position: 4
---

# Markdown-Style PreTeXt

Markdown-style PreTeXt is CommonMark (plus GitHub-flavored extensions) with two additions: **YAML frontmatter** that declares what the division is, and **directives** that carry the PreTeXt-specific structure Markdown has no syntax for.

Everything converts to PreTeXt XML before preview or build.

## Frontmatter

Each Markdown division begins with a `---` fenced block:

```markdown
---
division: section
id: sec-limits
title: Limits
---

The body starts here.
```

| Key | Meaning |
|---|---|
| `division` | What this division is. Either a document root (`book`, `article`, `slideshow`) or a division type (`chapter`, `section`, `subsection`, `worksheet`, `exercises`, `introduction`, `conclusion`, ...). |
| `title` | The division's title. |
| `id` | The `xml:id`. Also accepted as `xmlid` or `xml:id`. |
| `label` | The PreTeXt `label` attribute. |
| `component` | The PreTeXt `component` attribute. |

When `division` names a **document root**, the whole file is wrapped in that element and `#` headings become its outermost child division — `#` under `book` is a chapter, under `article` a section, under `slideshow` a section (with `##` for individual slides).

Only these keys are read; the block is not general YAML.

## Headings become divisions

Headings nest divisions relative to the division's own level:

```markdown
---
division: chapter
title: Sequences
---

Some introductory text.

# Convergence

## The formal definition
```

Here `#` is a section and `##` a subsection. Once the hierarchy runs out, deeper headings become `paragraphs`.

Content appearing **before** the first heading is wrapped in an `<introduction>` automatically — unless the heading immediately follows the title, in which case no introduction is added.

:::tip[Titles live in frontmatter]
With a `title:` in the frontmatter, a leading `#` starts the *first subdivision* rather than titling the division. Without one, a leading `#` supplies the division's title (older behavior, still supported).
:::

## Mathematics

| Form | Syntax | Converts to |
|---|---|---|
| Inline | `$x^2$` or `\(x^2\)` | `<m>` |
| Display | `$$ ... $$` or `\[ ... \]` | `<md>` |

A display block spanning multiple lines (or split on `\\`) becomes an `<md>` containing one `<mrow>` per line:

```markdown
$$
a &= b + c \\
  &= d
$$
```

Math delimiters inside inline code or a fenced code block are left alone, so `` `$5` `` stays literal text. Inside math you may use whatever KaTeX supports.

## Inline formatting

| Markdown | Converts to | Note |
|---|---|---|
| `*emphasis*` | `<em>` | asterisks |
| `_term_` | `<term>` | **underscores mean something different** |
| `**strong**` | `<alert>` | |
| `` `code` `` | `<c>` | |
| `$math$` | `<m>` | |

The asterisk/underscore distinction is the one surprise for Markdown veterans: in most Markdown, `*x*` and `_x_` are the same. Here `_x_` marks a **defined term**, matching PreTeXt's `<term>`.

## Blocks

| Markdown | Converts to |
|---|---|
| Paragraph | `<p>` |
| `- item` / `1. item` | `<ul>` / `<ol>` with `<li>` |
| `> quoted` | `<blockquote>` |
| Fenced code | `<program>`, with `language` taken from the info string |
| `<!-- ... -->` | Comment; ignored |

````markdown
```python
def f(x):
    return x + 1
```
````

becomes `<program language="python">`.

## Container directives

Container directives are how you write theorems, examples, proofs, and the rest. The colon-fence form is:

```markdown
:::theorem[Pythagoras]{#thm-pyth}
In a right triangle, $a^2 + b^2 = c^2$.

::::proof
See any geometry text.
::::
:::
```

- `[...]` after the name is the **title**.
- `{#id}` sets `xml:id`. Other `{key=value}` pairs pass through as attributes.
- Nesting is by colon count: an inner directive uses *more* colons than its parent. Mixed counts are normalized for you, so mismatched-but-unambiguous nesting still parses.
- Directive names are case-insensitive.

### Supported container directives

Directives marked **statement** have their body wrapped in `<statement>`, with `proof`, `hint`, `answer`, and `solution` hoisted out as siblings.

| Category | Directives | Statement |
|---|---|---|
| Theorem-like | `theorem`, `lemma`, `corollary`, `proposition`, `claim`, `fact`, `conjecture`, `axiom`, `principle`, `hypothesis`, `algorithm` | ✓ |
| Definition-like | `definition`, `notation` | ✓ |
| Remark-like | `remark`, `note`, `observation`, `warning`, `insight`, `assemblage` | |
| Example-like | `example`, `question`, `problem`, `activity`, `exploration`, `investigation` | |
| Exercise-like | `exercise`, `project`, `task` | ✓ |
| Proof-like | `proof`, `case` | |
| Solution-like | `solution`, `hint`, `answer` | |

Anything else is a warning in the editor and becomes a `<TODO>` placeholder in the output, carrying your original source inside it so nothing is lost.

### Nested tasks

`exercise`, `project`, and `task` accept nested `task` children. Content before the first task becomes an `<introduction>`, and content after the last becomes a `<conclusion>`:

```markdown
:::exercise
Consider the function $f(x) = x^2$.

::::task
Find $f'(x)$.
::::

::::task
Find $f''(x)$.
::::
:::
```

Content sitting *between* tasks has nowhere to go in PreTeXt and is dropped, with a warning.

## Indentation-style directives

Directives can also be written Python-style: the name, a colon, and an indented body. This is often more comfortable for prose-heavy documents.

```markdown
Theorem[Pythagoras]{#thm-pyth}:
    In a right triangle, $a^2 + b^2 = c^2$.

    Proof:
        See any geometry text.
```

Rules:

- The keyword must be a known directive name (case-insensitive) and the line must end with `:`.
- Anything after the name must be `[title]` and/or `{attributes}` — a line like `Proof by contradiction:` is ordinary text, not a directive.
- The body is whatever is indented under it; the block closes when indentation returns.
- Relative indentation inside the body is preserved, so nested lists work. A four-space-indented body is **not** treated as a code block.
- Directive markers are not detected inside fenced code blocks.

Colon-fence and indentation styles can be mixed in the same document.

## Includes and assets

Leaf directives (`::` — two colons) are the include syntax:

```markdown
::section{ref="sec-limits"}
::chapter{ref="ch-intro"}
::image{ref="fig-tangent" width="50%"}
```

Each becomes `<plus:KIND ref="..."/>`, with attributes passed through verbatim. Attributes are space-separated, in the usual directive style — not comma-separated.

Any name works, so `::doenet{ref="activity-3"}` is valid too; the converter does not check the kind against a list.

Content appearing before a **division-typed** leaf directive is wrapped in an `<introduction>`, just as it is before a heading. An asset include like `::image` does not trigger that.

## Text (inline) directives

The inline directive form `:name[content]` is parsed but has no conversion yet — it produces a `<TODO>` placeholder. Use the inline formatting above instead; `_term_` covers the common case.

## What is not supported

- Markdown tables, images (`![](...)`), and links currently convert to `<TODO>` placeholders rather than PreTeXt elements. Use an [asset include](#includes-and-assets) for images; for now, write tables in a PreTeXt division.
- Raw HTML.
- Text directives, as above.

Placeholders are visible in the full-source view and in the build, so you always know where they are. If you need a construct that is missing, tell us at [feedback@pretext.plus](mailto:feedback@pretext.plus).
