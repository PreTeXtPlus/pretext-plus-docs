---
sidebar_position: 1
---

# The Editor

Open a project's editor with **Write** — on the project's card in your Projects Dashboard, or on the project page. **Manage project**, at the right of the editor's top bar, takes you back to the project page.

## Layout

**Top bar.** The PreTeXt.Plus logo (back to your projects); the project **title** — click it to rename the project — with a [save-status icon](#saving) beside it; and the menus: **File**, **Edit**, **Insert**, **Tools**, **Language**, and **Help & Feedback**. At the right are the **Manage project** button and your **Account** menu. In a narrow window the top bar folds onto two rows: **Manage project** shows just its icon, and the Account menu moves into **File**.

**Project explorer.** A rail of icons down the left edge, each opening a panel beside it:

| Panel | What it holds |
|---|---|
| **Table of Contents** | The division tree. See [Divisions](/editor/divisions/). |
| **Snippets** | Reusable pieces of source. See [Snippets](/editor/snippets/). |
| **Assets** | Images and other assets. See [Assets](/editor/assets/). |
| **Find in Project** | Search and replace across every division. See [Writing tools](/editor/writing-tools/#find-and-replace). |

Click the open panel's icon again to collapse it back to the rail.

**Code editor.** The source of the division you are on. A badge in its lower-right corner names the format — **PreTeXt**, **LaTeX**, or **Markdown** — with a **Convert to PreTeXt** button beside it on LaTeX and Markdown divisions. Collaborators' avatars appear there too.

**Live preview.** The rendered division, updated as you type. See [Live preview](/editor/preview/).

The code editor and the preview share a split you can drag to resize. On screens narrower than about 800px they become **Editor** and **Preview** tabs instead.

## The menus

### File

Document-level actions. Some apply to only one format:

| Action | PreTeXt | LaTeX | Markdown |
|---|:---:|:---:|:---:|
| **Format PreTeXt** — reindent the source | ✓ | | |
| **Import…** — convert outside material for this division | ✓ | | |
| **Clean up LaTeX…** — review legacy LaTeX markup | | ✓ | |
| **Edit Macros…** / **Edit Preamble…** — the project preamble | ✓ | ✓ | ✓ |
| **Assets…** — open the asset manager | ✓ | | |
| **Snippets…** — open the snippet manager | ✓ | | |
| **Display Full Source** — the assembled PreTeXt for the whole project | ✓ | ✓ | ✓ |
| **Manage Project** — save, then go to the project page | ✓ | ✓ | ✓ |

In LaTeX and Markdown divisions, open assets and snippets from their panels in the project explorer.

**Display Full Source** shows the complete assembled document: every division converted from its authoring format and every `<plus:… ref="…"/>` placeholder expanded, in document order. This is exactly what gets built, and it is the fastest way to see what your LaTeX or Markdown actually became.

### Edit

Undo and redo; cut, copy, and paste; **Select All**, which selects the division's editable body; find and replace within the current division; and **Find/Replace in Project…**. In PreTeXt divisions it also holds the **Convert Pasted LaTeX & Markdown** switch — see [Writing tools](/editor/writing-tools/#pasting-latex-and-markdown).

### Insert

Common constructs — paragraphs, emphasis, terms, cross-references, links, theorems, definitions, examples, remarks, exercises, lists, math, figures, tables, and code listings — inserted at the cursor, written in the current division's format. A slideshow also gets **Slide**. See [Writing tools](/editor/writing-tools/#the-insert-menu).

### Tools

Editor commands: **Command Palette…**, **Go to Line…**, **Quick Fix…**, **Toggle Comment**, **Toggle Word Wrap**, **Fold All**, and **Unfold All** — plus, in LaTeX and Markdown divisions, **Convert to PreTeXt** (see [Divisions](/editor/divisions/#converting-a-division-to-pretext)).

### Language

The language the document is written in, chosen from a list of locales; English (United States) is the default. It is recorded as the document's `xml:lang`, which PreTeXt uses for the text it generates, such as "Theorem" and "Figure".

### Help & Feedback

Links to this documentation, the PreTeXt Guide, and the PreTeXt sample article, and **Support / Feedback**, which sends a message to the PreTeXt.Plus team.

## Saving

On a project without collaborators, the editor **autosaves every 10 seconds** while there are unsaved changes. `Ctrl`/`Cmd`+`S` saves immediately, and **Manage project** — or **File ▸ Manage Project** — saves and takes you to the project page.

Some actions persist immediately rather than waiting for the next autosave — adding or deleting a division, and adding, replacing, or removing an asset.

On a project with [collaborators](/editor/collaborators/), every change is saved as it is typed.

The cloud icon beside the title shows where things stand; hover over it for details:

| Status | Meaning |
|---|---|
| **Saved** | Everything is saved. |
| **Saving…** | A save is on its way. |
| **Unsaved changes** | You have edits that have not been saved yet. Click the icon to save now. |
| **Not saved** | The last save failed, so your latest changes exist only in this tab. Click the icon to try again. |
| **Reconnecting** | The connection dropped. Your changes will save when it returns — keep the tab open until then. |

### Leaving the editor

Every way out that the editor offers — **Manage project**, the logo, the Account menu, and **Sign out** — saves first, and warns you if the save fails rather than leaving your latest changes behind. If you close the tab or reload the page while changes are unsaved, your browser asks you to confirm.

## Keyboard shortcuts

`Cmd` replaces `Ctrl` on a Mac.

| Shortcut | Action |
|---|---|
| `Ctrl`+`S` | Save, and refresh the preview |
| `Ctrl`+`Enter` | Refresh the preview |
| `Ctrl`+`F` | Find (and replace) in this division |
| `Ctrl`+`Shift`+`F` | Find and replace in the whole project |
| `Ctrl`+`.` | Quick fix — spelling suggestions, LaTeX cleanup |
| `Ctrl`+`Shift`+`V` | Paste as plain text, without conversion |
| `Ctrl`+`/` | Toggle comment |
| `F1` | Command palette |
