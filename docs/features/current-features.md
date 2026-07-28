---
sidebar_position: 1
---

# Current Features

A summary of what PreTeXt.Plus can do today, with links to the details.

## Authoring

- **Three markup styles** — [PreTeXt XML](/writing/pretext-style/), [LaTeX-style](/writing/latex-style/), and [Markdown-style](/writing/markdown-style/), all converted to real PreTeXt before building.
- **Mix styles in one project** — format is per-division, so a book can hold PreTeXt, LaTeX, and Markdown chapters side by side. See [Divisions](/editor/divisions/).
- **One-way conversion to PreTeXt** — a LaTeX-style or Markdown-style project can be converted to classic PreTeXt, creating a copy.
- **Completions and live diagnostics** in every markup style.
- **Visual (WYSIWYG) editing** for PreTeXt divisions.
- **Project-wide macros and image preambles**, optionally shared across all your projects. See [Preamble](/editor/preamble/).

## Starting a project

- [From scratch](/getting-started/creating-a-project/) in the markup style of your choice.
- [From a template](/getting-started/templates/) curated by the PreTeXt.Plus team.
- [By importing](/getting-started/importing/) existing LaTeX, Markdown, or PreTeXt source — pasted or uploaded, single-file or archive, with automatic splitting into divisions. LaTeX imports may be kept as LaTeX-style source or converted to PreTeXt.

## Modular editing

Divisions are edited one at a time and assembled through include placeholders, so a large book stays manageable. Order follows the placeholders in the parent's source; divisions can be unplaced and parked, then placed again wherever you want them. See the [table of contents](/editor/divisions/).

## Graphics

- **Uploaded images** — drag, paste, browse, or fetch from a URL; managed as [assets](/editor/assets/) with a reference you place in any markup style, at any width.
- **Generated diagrams** — PreFigure, TikZ (`latex-image`), Asymptote, and Sage plots, authored directly in a PreTeXt division and rendered by the build server.

## Preview

An in-browser [live preview](/editor/overview/#live-preview) using the official PreTeXt XSLT stylesheets — no build server, roughly 90 ms per render — with two-way click-and-scroll sync between source and rendered output.

## Building and publishing

- **[Ten output formats](/building/outputs/)**: website, website zip, SCORM, PDF, EPUB, Kindle, braille, reveal.js slides, Beamer slides, and LaTeX source.
- **Multiple outputs per project** — a student and an instructor website, say — each with its own build history.
- **[Publish](/building/publishing/)** any built output to a stable public URL that always serves the last successful build.
- **Restore previous build** for a one-step rollback.
- **[Download source](/building/publishing/#download-source)** as a complete PreTeXt-CLI project.

## Collaboration

Invite co-authors by email and edit together in real time, with presence avatars, remote cursors, and synchronized document structure. See [Collaborators](/editor/collaborators/).

## Accounts

Free accounts get real projects, builds, publishing, and one collaborator per project. Subscriptions raise every limit and enable source sharing. See [Accounts and limits](/getting-started/accounts-and-limits/).
