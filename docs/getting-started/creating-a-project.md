---
sidebar_position: 2
---

# Creating a Project

After logging in you land on your **Projects** page, which lists every project you own or collaborate on. Click **+ New project** to start.

You are offered three ways to begin:

| | |
|---|---|
| 📄 **New empty document** | Start from a bare-bones document in the markup style of your choice. |
| 🧩 **Start project from template** | Copy a ready-made project curated by the PreTeXt.Plus team. See [Templates](/getting-started/templates/). |
| 📥 **Import existing documents** | Bring in and convert existing LaTeX, Markdown, or PreTeXt source. See [Importing](/getting-started/importing/). |

## New empty document

The dialog asks for two things.

**Project name.** Free text; leave it blank and the project is called "New Project". You can rename it later from the editor's title field.

**Markup style.** This sets the source format of the project's *root division* — the format you will be writing in when the editor opens:

| Style | What you write |
|---|---|
| **PreTeXt** | Semantic XML markup designed for academic writing with a focus on accessibility. |
| **LaTeX-style PreTeXt** | A subset of the classic typesetting language, compatible with PreTeXt. |
| **Markdown-style PreTeXt** | A flavor of the popular lightweight markup language, compatible with PreTeXt. |

Click **Create project** and the editor opens on a short sample document in that style. Delete the sample and start writing, or paste in source you already have.

:::tip[The markup style is per-division, not per-project]
The choice here only sets the *starting* format. Every division you add afterwards gets its own format, chosen when you create it, and a project may freely mix all three. See [Divisions and modular editing](/editor/divisions/).
:::

## Document type

New projects start as an **article**. To make a book or a slideshow instead, open the **Contents** panel in the editor, choose **Edit properties** on the root division, and change **Type** to `book` or `slideshow`.

Changing the root type does not touch existing children, so their own types may need a follow-up edit to remain valid — a `section` directly inside a `book`, for example, should usually become a `chapter`.

The document type also matters for building: reveal.js and Beamer slide outputs are only offered on a `slideshow`. See [Build outputs](/building/outputs/).

## Converting between markup styles

A LaTeX-style or Markdown-style project can be converted to classic PreTeXt at any time using **Convert to PreTeXt** in the editor's source menu. This creates a **new copy** of the project — your original is untouched.

There is no conversion in the other direction: PreTeXt XML cannot be turned back into LaTeX-style or Markdown-style source.

## Deleting a project

From the project dashboard, **Delete this project** removes the project and all of its build outputs. Only the owner can delete a project; collaborators cannot.
