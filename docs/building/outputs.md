---
sidebar_position: 1
---

# Build Outputs

An **output** is a named thing you want PreTeXt to produce from your project — "Course website", "Print PDF", "Instructor edition". A **build** is one attempt at producing it.

Outputs are managed on the project dashboard, under **Outputs**. Each output corresponds to a `<target>` in the `project.ptx` a local PreTeXt-CLI project would have; PreTeXt.Plus writes that manifest for you.

Every new project starts with one output called **Website**.

## Adding an output

Open **+ Add an output** and give two things:

**Name.** A friendly name — "Print PDF", "Instructor edition". This is only for you, and it can be changed later.

**Output format.** What PreTeXt should produce:

| Format | Produces | You get |
|---|---|---|
| **Website** | A browsable HTML site | Preview, and a zip of the whole site |
| **Website (zip download)** | The same site, packaged | A zip file |
| **SCORM package (for an LMS)** | A SCORM zip | A file to upload to your LMS |
| **PDF** | A PDF via LaTeX | Open or download |
| **EPUB** | An EPUB | Download |
| **Kindle** | A Kindle-compatible EPUB | Download |
| **Braille** | A BRF/text braille file | Download |
| **Slides (reveal.js)** | An HTML slide deck | Open or download |
| **Slides (Beamer PDF)** | A Beamer PDF | Open or download |
| **LaTeX source** | The generated `.tex` | Download |

Several outputs may share a format — a student website and an instructor website, for example.

:::note[Slides need a slideshow]
**Slides (reveal.js)** and **Slides (Beamer PDF)** are only offered when the project's document type is `slideshow`. Set it from **Edit properties** on the root division in the Contents panel. Conversely, a project that already has a slide output cannot be changed away from `slideshow` until that output is removed — the dashboard names the outputs in the way.
:::

### How many

| | Outputs per project |
|---|---|
| Free account | 3 |
| Subscription | 12 |

The limit follows the **owner's** plan. A collaborator on someone else's project cannot lift it by subscribing themselves.

## Building

Click **Build** (or **Rebuild**) on an output's row. The build runs on the PreTeXt.Plus build server using the official PreTeXt toolchain, and the row updates live as it progresses — no page refresh needed.

### Build limits

Independent of your plan:

- **20 builds per hour** per account;
- **3 builds running at once** per account.

A running build holds one of those slots until it finishes or times out. **Cancel** on the row stops it and frees the slot immediately; nothing already published changes.

### Output states

Each row shows one state, describing the most recent *attempt*:

| State | Meaning |
|---|---|
| **Not built** | No successful build yet |
| **Building** | The build server is working on it |
| **Current** | Built, and the source has not changed since |
| **Out of date** | Built, but you have edited the source since — rebuild to catch up |
| **Failed** | The most recent attempt failed |
| **Canceled** | You stopped the most recent attempt |

**Failed** and **Canceled** describe the last *attempt*, not what readers see. If a rebuild fails over an output that already had a good build, readers keep getting that good build and the row says so explicitly: *"Readers see the build from 2 hours ago — the most recent build failed."* This is deliberate: a broken rebuild never takes down a published document.

Editing your source marks every built output **Out of date**. Editing only the project's *title* does not.

## The output drawer

Click **⋯** on any row to open its drawer.

**State summary.** The current state, what readers are being served right now (**Live now**), and when the last attempt was and how it went (**Last try**).

**Restore previous build.** PreTeXt.Plus keeps the two most recent successful builds. If the newest one is wrong, this deletes it and falls back to the one before, which readers then get. Only one earlier build is kept, so this is one step back, not a full history.

**Public link.** Publish or unpublish, and copy the URL. See [Publishing](/building/publishing/).

**Build log.** The build server's output for the most recent attempt — the first place to look when a build fails.

**History.** Recent attempts, newest first, each with its status (**Live**, **Superseded**, **Failed**, **Canceled**, **Building**), a link to open or download that build's artifact, and a link to its full log.

**Settings.** Rename or remove the output.

## Renaming, and why the URL does not change

An output's **name** is yours to change freely. Its **slug** — the short identifier in the public URL and in `project.ptx` — is derived from the name when the output is created and then left alone forever.

That means renaming "Website" to "Course site" changes what you see on the dashboard but not the link you may already have handed to students. The drawer tells you the slug so you always know what the link is.

## Removing an output

**Remove this output** in the drawer deletes the output and all of its builds. If it was published, the public link stops working immediately.

## Retention

To keep storage bounded, each output keeps its two most recent successful builds, anything currently in flight, and the single most recent attempt (so a failure survives to keep the log honest). Older builds are pruned automatically.
