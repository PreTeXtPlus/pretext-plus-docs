---
sidebar_position: 1
---

# Build Outputs

An **output** is a named thing you want PreTeXt to produce from your project — "Course website", "Print PDF", "Instructor edition". A **build** is one attempt at producing it.

Outputs are managed on the project page, under **Outputs**. Each output corresponds to a `<target>` in the `project.ptx` a local PreTeXt-CLI project would have; PreTeXt.Plus writes that manifest for you.

Every new project starts with one output: **Website** for a manuscript, **Slides** for a slideshow.

## Adding an output

Open **+ Add an output** and choose:

**Output format.** What PreTeXt should produce:

| Format | Produces | You get |
|---|---|---|
| **Website** | A browsable HTML site | Preview it, and download the whole site as a zip |
| **SCORM package (for an LMS)** | A SCORM zip | A file to upload to your LMS |
| **PDF** | A PDF via LaTeX | Open or download |
| **EPUB** | An EPUB | Download |
| **Kindle** | A Kindle-compatible EPUB | Download |
| **Braille** | A BRF/text braille file | Download |
| **LaTeX source** | The generated `.tex` | Download |
| **Slides (reveal.js)** | An HTML slide deck | Open or download |
| **Slides (Beamer PDF)** | A Beamer PDF | Open or download |

A [slideshow](/writing/slideshows/) builds only to the two slide formats, and a manuscript to everything else.

**Name (optional).** A friendly name — "Print PDF", "Instructor edition" — for your own reference. Leave it blank to use the format's name. It can be changed later.

Several outputs may share a format — a student and an instructor website, for example; give each its own [build settings](/building/build-settings/).

### How many

| | Outputs per project |
|---|---|
| Free account | 3 |
| Subscription | 12 |

The limit follows the **owner's** plan. A collaborator on someone else's project cannot lift it by subscribing themselves.

## Building

Click **Build** (or **Rebuild**) on an output's row. The build runs on the PreTeXt.Plus build server using the official PreTeXt toolchain, and the row updates live as it progresses — no page refresh needed.

When several outputs need building, one button does it all: **Build all** builds every output that has never been built, and **Rebuild outdated** rebuilds every output that is out of date. This button is a subscriber feature.

### Build limits

Independent of your outputs quota:

- a free account runs **1 build at a time**, a subscription **5** — any more wait as **Queued** and start by themselves when a slot frees up;
- at most **20 build requests per hour**.

**Cancel** on the row stops a running or queued build and frees its slot immediately; nothing already published changes.

### Output states

Each row shows one state, describing the most recent *attempt*:

| State | Meaning |
|---|---|
| **Not built** | No successful build yet |
| **Queued** | Waiting for a free build slot |
| **Building** | The build server is working on it |
| **Current** | Built, and the source has not changed since |
| **Out of date** | Built, but you have edited the source since — rebuild to catch up |
| **Needs review** | The latest build reported errors but still produced output. It is not live until you accept it. |
| **Has errors** | You accepted a build that reported errors, and readers are seeing it |
| **Failed** | The most recent attempt failed |
| **Canceled** | You stopped the most recent attempt |

**Failed** and **Canceled** describe the last *attempt*, not what readers see. If a rebuild fails over an output that already had a good build, readers keep getting that good build and the row says so explicitly: *"Readers see the build from 2 hours ago — the most recent build failed."* This is deliberate: a broken rebuild never takes down a published document.

Editing your source marks every built output **Out of date**. Editing only the project's *title*, or its [build settings](/building/build-settings/), does not — settings take effect on the next build.

### Builds that report errors

PreTeXt sometimes finishes a build with errors but still produces usable output — one image failed, say, while everything else built. Rather than throw that output away, PreTeXt.Plus keeps it and marks the output **Needs review**. Nothing changes for readers yet.

Open the output's drawer and you will find **Preview it** (or **Open it**) beside **Use this build**. Look at the result and read the build log; if it is good enough, **Use this build** makes it what readers see, and the row then shows **Has errors** as a reminder. A later clean build replaces it as usual.

## The output drawer

Click **⋯** on any row to open its drawer.

**State summary.** The current state, what readers are being served right now (**Live now**), and when the last attempt was and how it went (**Last try**).

**Restore previous build.** PreTeXt.Plus keeps the two most recent successful builds. If the newest one is wrong, this deletes it and falls back to the one before, which readers then get. Only one earlier build is kept, so this is one step back, not a full history.

**Public link.** Publish or unpublish, and copy the URL. See [Publishing](/building/publishing/).

**Build log.** The build server's output for the most recent attempt — the first place to look when a build fails.

**History.** Recent attempts, newest first, each with its status — **Live**, **Superseded**, **Failed**, **Canceled**, **Queued**, **Building**, or, for builds that reported errors, **Not live · errors**, **Live · errors**, and **Superseded · errors** — a link to preview, open, or download that build, and a link to its full log.

**Settings.** Rename the output, open its own [build settings](/building/build-settings/), or remove it.

## Renaming, and why the URL does not change

An output's **name** is yours to change freely. Its **slug** — the short identifier in the public URL and in `project.ptx` — is derived from the name when the output is created and then left alone forever.

That means renaming "Website" to "Course site" changes what you see on the project page but not the link you may already have handed to students. The drawer tells you the slug so you always know what the link is.

## Removing an output

**Remove this output** in the drawer deletes the output and all of its builds. If it was published, the public link stops working immediately.

## Retention

To keep storage bounded, each output keeps its two most recent successful builds, the build readers are currently seeing, anything in flight, and the single most recent attempt (so a failure survives to keep the log honest). Older builds are pruned automatically.
