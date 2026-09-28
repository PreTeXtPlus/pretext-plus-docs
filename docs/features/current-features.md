---
sidebar_position: 1
---

# Current Features

A summary of what PreTeXt.Plus can do today, with links to the details.

## Authoring

- **Three markup styles** — [PreTeXt XML](/writing/pretext-style/), [LaTeX-style](/writing/latex-style/), and [Markdown-style](/writing/markdown-style/), all converted to real PreTeXt before building.
- **Mix styles in one project** — format is per-division, so a book can hold PreTeXt, LaTeX, and Markdown chapters side by side. See [Divisions](/editor/divisions/).
- **[Slideshows](/writing/slideshows/)** in any markup style.
- **Conversion to PreTeXt, one division at a time**, keeping the original.
- **Completions, live diagnostics, and PreTeXt schema validation** as you type.
- **[Spell checking](/editor/writing-tools/#spell-check)**, with a dictionary shared by everyone on the project.
- **An Insert menu** of common constructs, written in the division's own format, and **typing shortcuts** in PreTeXt — `$…$` becomes `<m>`, and stray `<`, `>`, and `&` are escaped for you.
- **Paste conversion** — LaTeX or Markdown pasted into a PreTeXt division arrives as PreTeXt.
- **[Find and replace](/editor/writing-tools/#find-and-replace) across the whole project**, with regular expressions.
- **[LaTeX cleanup](/editor/writing-tools/#cleaning-up-latex)** — legacy markup flagged, with quick fixes and a one-click cleanup.
- **[Snippets](/editor/snippets/)** — reusable pieces of source, included anywhere.
- **Project-wide macros and image preambles**, optionally shared across all your projects. See [Preamble](/editor/preamble/).
- **A document language** for the text PreTeXt generates, such as "Theorem" and "Figure".

## Starting a project

- [From scratch](/getting-started/creating-a-project/) — a manuscript or a slideshow — in the markup style of your choice.
- [From a template](/getting-started/templates/) curated by the PreTeXt.Plus team.
- [By importing](/getting-started/importing/) LaTeX, Markdown, or PreTeXt — or, through Pandoc, Word, OpenDocument, EPUB, HTML, Jupyter notebooks, and more — as single files or whole archives, split into divisions automatically. LaTeX and Markdown can stay in their own format or be converted to PreTeXt.
- [By copying](/getting-started/managing-projects/#copying-a-project) one of your projects, or anyone's shared source.

## Modular editing

Divisions are edited one at a time and assembled through include placeholders, so a large book stays manageable. Order follows the placeholders in the parent's source; divisions can be unplaced and parked, then placed again wherever you want them. Attributes on a placeholder, such as `component`, apply to what it includes. See the [Table of Contents](/editor/divisions/).

## Graphics

- **Uploaded images** — paste, drag, browse, or fetch from a URL; managed as [assets](/editor/assets/) with a reference you place in any markup style, at any width, with alt text.
- **Authored diagrams** — PreFigure, TikZ (`latex-image`), Asymptote, and Sage plots, created in the asset manager or written directly in a PreTeXt division, and rendered by the build server.

## Preview

An in-browser [live preview](/editor/preview/) using the official PreTeXt XSLT stylesheets — no build server. It updates as you type, renders each division in the context of the whole project, syncs clicks and scrolling both ways between source and output, lays out worksheets and handouts for print, and presents slideshows a slide at a time.

## Building and publishing

- **[Nine output formats](/building/outputs/)**: website, SCORM, PDF, EPUB, Kindle, braille, LaTeX source, reveal.js slides, and Beamer slides.
- **Multiple outputs per project** — a student and an instructor website, say — each with its own build history.
- **[Build settings](/building/build-settings/)** at the account, project, and output level: themes, numbering, table of contents, knowls, exercise components, printout layout, journal styles, EPUB covers, braille page size, and more.
- **[Versions](/building/build-settings/#versions-student-and-instructor-editions)** — student and instructor editions from one source.
- **One-click builds** of everything that is new or out of date, and a queue for builds beyond your concurrency limit.
- **Builds that report errors** but still produce output can be previewed, and used if they are good enough.
- **[Publish](/building/publishing/)** any built output to a stable public URL that always serves the last successful build.
- **Restore previous build** for a one-step rollback.
- **[Share source](/building/publishing/#share-source)** for others to read and copy.
- **[Download source](/building/publishing/#download-source)** as a complete PreTeXt-CLI project.

## Collaboration

Invite co-authors by email and edit together in real time, with presence avatars, remote cursors, and synchronized document structure. Hand a project to a collaborator when you are done with it. See [Collaborators](/editor/collaborators/).

## Accounts

Free accounts get unlimited projects, builds, publishing, and one collaborator per project. Subscriptions raise the limits and add one-click bulk builds, a public profile, and a custom site logo. See [Accounts and limits](/getting-started/accounts-and-limits/).
