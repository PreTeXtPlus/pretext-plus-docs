---
sidebar_position: 5
---

# Slideshows

A slideshow is a PreTeXt document built as a slide deck — a reveal.js presentation or a Beamer PDF — rather than as a website or a book.

## Creating one

Choose **Slideshow** as the document type when you [create a project](/getting-started/creating-a-project/), or import an existing deck (see [Importing](/getting-started/importing/)). The choice is permanent: a slideshow cannot become a manuscript, or a manuscript a slideshow.

A new slideshow starts with one slide, and with a **Slides** output that builds a reveal.js deck.

## Writing slides

Every markup style can write a slideshow. Slides can be grouped into sections, or sit directly in the deck for a short presentation:

| | PreTeXt | LaTeX-style | Markdown-style |
|---|---|---|---|
| The deck | `<slideshow>` | `\slideshow{Title}` | `division: slideshow` in the frontmatter |
| A section | `<section>` | `\section{Title}` | `# Title` |
| A slide | `<slide>`, with a `<title>` | `\begin{frame}{Title}` … `\end{frame}` | `## Title` |

In LaTeX-style, slides use Beamer's `frame` environment (`slide` works too), and a second argument — `\begin{frame}{Title}{Subtitle}` — adds a subtitle. In Markdown-style, headings shift down a level inside a slideshow: `#` is a section and `##` a slide.

For example, in Markdown:

```markdown
---
division: slideshow
id: document
title: My Talk
---

# Introduction

## Why this matters

- First point
- Second point
```

**Insert ▸ Slide** adds a slide in whichever style you are writing. Sections you add from the Table of Contents become divisions of their own, like any other; slides always live inside the division that holds them.

## Previewing

The [live preview](/editor/preview/#slideshows) shows a slideshow two ways: **Deck**, the whole presentation as one scrolling page, and **Present**, one slide at a time as it will be shown. Use **−** and **+** to zoom.

## Building

A slideshow builds to **Slides (reveal.js)** — an HTML deck you can open, present from, and publish — and **Slides (Beamer PDF)**. These are the only output formats a slideshow offers. See [Build outputs](/building/outputs/).
