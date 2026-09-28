---
sidebar_position: 6
---

# Snippets

A **snippet** is a named piece of source that you write once and include wherever you need it — the standard instructions at the top of every worksheet, a recurring notation box, a course-wide acknowledgement. Edit the snippet and every place that includes it changes too.

Snippets work like [assets](/editor/assets/): the snippet lives in the project, and the document holds only a reference to it.

## Creating a snippet

Open the **Snippets** panel from the project explorer and click **Add** — or, in a PreTeXt division, choose **File ▸ Snippets…** and **Add Snippet**. Give it a **Reference id** such as `worksheet-instructions`, click **Create**, and write its content.

Each snippet has its own **Source format** — PreTeXt, LaTeX, or Markdown — independent of the divisions that include it. It is converted to PreTeXt when the document is assembled.

## Including a snippet

| Format | Placeholder |
|---|---|
| PreTeXt | `<plus:snippet ref="worksheet-instructions"/>` |
| LaTeX-style | `\plus{snippet}{worksheet-instructions}` |
| Markdown-style | `::snippet{ref="worksheet-instructions"}` |

**Copy embed code** gives you the right form for the division you are in. A snippet can itself include images and other snippets.

## Managing snippets

**Manage snippet**, from a snippet's **⋮** menu or the snippet manager, opens its details: the embed code, its **Id** — changing it updates every reference already in your document — its **Source format**, and its **Source**. **Duplicate** copies it under a new id.

As with assets, the lists flag mismatches between the project and the document: **needs snippet** for a reference with no snippet behind it (**Link / create** one, or **Remove from document**), and **not placed** for a snippet that nothing includes. **Remove from project** deletes the snippet along with its placeholders.
