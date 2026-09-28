---
sidebar_position: 2
---

# Build Settings

**Build settings** are the publisher options that shape how your outputs are built: the website's theme, how deep numbering goes, how a PDF is laid out, and more. They end up in PreTeXt's *publication file*, which PreTeXt.Plus writes for you.

## Three levels

Settings can be made at three levels, each overriding the one above it, **one option at a time**:

| Level | Where | Applies to |
|---|---|---|
| **Your account** | **Account ▸ Settings ▸ Edit build settings** | Every project you own |
| **A project** | **Build settings**, beside **Outputs** on the project page | Every output of that project |
| **An output** | **Build settings** in the output's drawer | That output only |

An option left blank inherits from the level above — the menu says what that means, as in *Inherit — Salem (from your account)*. So a project that sets only a theme still gets the numbering depth from your account defaults.

Changes take effect on the next build; saving settings does not mark outputs out of date. The [live preview](/editor/preview/) does not use them.

## What you can set

Settings are grouped into tabs by the outputs they reach. An output's own settings show only the tabs for its format.

### General — every output

| Setting | What it does |
|---|---|
| **Division numbering** | How deep numbering runs on chapters, sections, and subsections |
| **Table of contents** | How much of the document the table of contents lists |
| **Version components** | Build only the parts marked with these components — see [below](#versions-student-and-instructor-editions) |
| More numbering options | Where numbering restarts, and which things share a counter, for blocks, equations, footnotes, exercises, figures, projects, and open problems |
| Exercise components | Show or hide statements, hints, answers, and solutions — separately for inline, divisional, and worksheet exercises, reading questions, and projects |
| Printout (worksheet and handout) options | Page margins for printed worksheets and handouts, and headers and footers (websites only) |

### HTML — website and SCORM

| Setting | What it does |
|---|---|
| **Theme** | The look of the site: Default-modern, Denver, Tacoma, Salem, Greeley, or Boulder |
| **Dark mode** | Whether readers can switch the site to a dark color scheme |
| **Logo** | An image from your project to show at the top of every page, instead of the PreTeXt.Plus logo *(subscribers)* |
| **Logo link** | Where clicking the logo takes a reader *(subscribers)* |
| **Webpage split level** | How much of the document goes on each web page |
| **Embed button** | A toolbar button that gives readers the code to embed a page in an LMS or another site — on by default |
| Knowls (expandable blocks) | Which kinds of blocks — proofs, examples, and so on — hide behind a link that expands in place, and which are shown in full |

### PDF — PDF and LaTeX

| Setting | What it does |
|---|---|
| **Journal style** | Typeset an article to a journal's or publisher's submission requirements, using its LaTeX style |
| **Intended use** | Screen or print. A print PDF drops the link coloring meant for a screen, and is double-sided unless you say otherwise. |
| **Page sides** | One- or two-sided layout |

### EPUB — EPUB and Kindle

| Setting | What it does |
|---|---|
| **Cover image** | An image from your project for the book cover; PreTeXt makes a plain cover otherwise |

### Braille

| Setting | What it does |
|---|---|
| **Cells per line** | Your embosser's page width (40 by default) |
| **Lines per page** | Your embosser's page height (25 by default) |

## Versions: student and instructor editions

PreTeXt can build different versions of one document from the same source. Mark the parts that belong to only one version with a `component` attribute — in a PreTeXt division directly (`<exercise component="instructor">`), or on the placeholder that includes a division, in any markup style:

```latex
\plus[component=instructor]{section}{sec-answers}
```

See [Placeholder attributes](/editor/divisions/#placeholder-attributes) for the PreTeXt and Markdown forms.

Then, in an output's build settings, list the components to include in **Version components**, separated by spaces. Everything unmarked is always included. Tick **Leave out every marked part** to build only the unmarked material, and leave the setting empty to build everything.

A common setup is two website outputs: "Student edition", which leaves out every marked part, and "Instructor edition", which includes `instructor`.

## In a downloaded project

[Download source](/building/publishing/#download-source) writes one publication file per output (`publication/<slug>.ptx`), each with the settings resolved through all three levels, so `pretext build <slug>` reproduces the same build locally.
