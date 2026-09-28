---
sidebar_position: 3
---

# Publishing and Sharing

There are several different things you might mean by "sharing" a project, and PreTeXt.Plus keeps them separate:

| I want to… | Use |
|---|---|
| Give readers a link to the finished document | [Publish an output](#publishing-an-output) |
| Let a co-author edit with me | [Collaborators](/editor/collaborators/) |
| List my work on a public profile | [Project visibility](#project-visibility) |
| Let colleagues see my source and adapt it | [Share source](#share-source) |
| Move the project to a local PreTeXt install | [Download source](#download-source) |

## Private previews

Once an output has been built, **Preview (private)** — or **Open (private)** for a PDF or slide deck — on its row shows you the result. Only you and your collaborators can open it; it is not a link to hand out.

## Publishing an output

Publishing exposes an [output](/building/outputs/) at a public URL. Use **Publish** on the output's row, or **Publish this output** in its **⋯** drawer.

Publishing **does not start a build** — it exposes the build that already succeeded. An output with no successful build cannot be published.

Two things ask for confirmation first:

- publishing an output of a **Private** project makes the project **Unlisted** — see [Project visibility](#project-visibility);
- publishing output from a build that [reported errors](/building/outputs/#builds-that-report-errors).

Once published, the row shows a **Public link ↗** and a **View** button, and the drawer shows the full URL with a **Copy** button.

### The public link

Published output is served from a separate host:

```
https://pub.pretext.plus/o/<project-id>/<output-slug>/index.html
```

A few things worth knowing:

- **The link always serves the most recent successful build.** A failed rebuild leaves it untouched, so readers never see a broken page because you were mid-edit.
- **The slug is fixed at creation.** Renaming an output does not change its URL, so a link in a syllabus keeps working. See [Renaming](/building/outputs/#renaming-and-why-the-url-does-not-change).
- **Anyone with the link can read it.** There is no per-reader access control.
- **Unpublishing breaks the link immediately**, and also makes previously published builds unreachable — not just the current one.
- Published documents live on their own hostname on purpose: your document's interactive content runs as real JavaScript, and it must not run on the origin that holds your login session.

### Embedding in an LMS

Two options:

- Link to, or embed, pages of the published website. Websites include an **embed button** in their toolbar by default, which gives readers the code to embed a page; turn it off in [Build settings](/building/build-settings/).
- Build a **SCORM package** output and upload the resulting zip to your LMS.

## Project visibility

Each project has a visibility setting, chosen at the top of its project page. Only the owner can change it.

| Visibility | Effect |
|---|---|
| **Private** (default) | Nothing about the project is public. Switching a project to Private unpublishes all of its outputs. |
| **Unlisted** | Not listed on your profile, but its published outputs and its [Share source](#share-source) link work for anyone who has them. |
| **Public** | Listed on your [public profile](/getting-started/accounts-and-limits/#your-public-profile), with its description, links to its published outputs, and its source. |

Publishing an output of a Private project makes it Unlisted, since a published output is, by definition, something the public can reach.

## Share source

Any project that is not Private has a **Share source** page, reached from the button on the project page. It shows the project's source in a read-only copy of the editor — Table of Contents, live preview, and all.

Anyone with the link can read it. A signed-in visitor can **copy this project** into their own account and edit the copy; see [Copying a project](/getting-started/managing-projects/#copying-a-project). This is how a colleague adapts your materials without needing edit access to your project.

## Download source

**Download source** on the project page gives you a zip laid out as a standard PreTeXt-CLI project:

```
project.ptx                  # manifest, with one <target> per output
publication/publication.ptx  # the project's build settings
publication/<slug>.ptx       # one per output, with its own settings applied
source/main.ptx              # your document, fully assembled
source/external/…            # every asset file
```

`source/main.ptx` is the complete document: every division converted from its authoring format and every include expanded, in order. Unzip it and `pretext build <slug>` works straight away, using the same output names and settings as your project.

This is your exit route. Nothing about PreTeXt.Plus locks your work in.

## Legacy quick-preview links

Before build outputs existed, some projects got a quick-preview link. Where a project still has one, the project page says so. These links stop working after **November 1, 2026** — build and publish a website output to replace yours.
