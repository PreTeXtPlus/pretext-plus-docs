---
sidebar_position: 2
---

# Creating a Project

After logging in you land on your **Projects Dashboard**. Click **+ New project** to start.

You are offered three ways to begin:

| | |
|---|---|
| 📄 **New empty document** | Start from a bare-bones document in the markup style of your choice. |
| 🧩 **Start project from template** | Copy a ready-made project curated by the PreTeXt.Plus team. See [Templates](/getting-started/templates/). |
| 📥 **Import existing documents** | Convert an existing file or archive — PreTeXt, LaTeX, Markdown, Word, and more. See [Importing](/getting-started/importing/). |

## New empty document

The dialog asks for three things.

**Project name.** Free text; leave it blank and the project is called "New Project". You can rename it later from the title at the top of the editor.

**Document type.** This choice is permanent:

| Type | What it is |
|---|---|
| **Manuscript** | Anything from a short note to a full-sized book. It starts as an article, and you can switch it to a book at any time. |
| **Slideshow** | A slide deck for presentations. See [Slideshows](/writing/slideshows/). |

**Markup style.** This sets the source format of the project's *root division* — the format you will be writing in when the editor opens:

| Style | What you write |
|---|---|
| **PreTeXt** | Semantic XML markup designed for academic writing with a focus on accessibility. |
| **LaTeX-style PreTeXt** | A subset of the classic typesetting language, compatible with PreTeXt. |
| **Markdown-style PreTeXt** | A flavor of the popular lightweight markup language, compatible with PreTeXt. |

Click **Create project** and the editor opens on a blank document containing only its title; a slideshow also gets one starter slide. Looking for example markup? Start from a [template](/getting-started/templates/) instead.

:::tip[The markup style is per-division, not per-project]
The choice here only sets the *starting* format. Every division you add afterwards gets its own format, chosen when you create it, and a project may freely mix all three. See [Divisions and modular editing](/editor/divisions/).
:::

## Article or book

A manuscript starts as an **article**. To make it a **book**, open the editor's Table of Contents, choose **Edit properties** from the root division's **⋮** menu, and change **Type**. You can switch back the same way.

Changing the root type does not touch existing children, so their own types may need a follow-up edit to remain valid — a `section` directly inside a `book`, for example, should usually become a `chapter`.

A manuscript can never become a slideshow, or a slideshow a manuscript: the two hold different content and build to different outputs.

## Your first output

Every project starts with one [build output](/building/outputs/): **Website** for a manuscript, **Slides** (reveal.js) for a slideshow. Add more from the project page.
