---
sidebar_position: 2
---

# Publishing and Sharing

There are four different things you might mean by "sharing" a project, and PreTeXt.Plus keeps them separate:

| I want to… | Use |
|---|---|
| Give readers a link to the finished document | [Publish an output](#publishing-an-output) |
| Let a co-author edit with me | [Collaborators](/editor/collaborators/) |
| List my work on a public profile | [Project visibility](#project-visibility) |
| Move the project to a local PreTeXt install | [Download source](#download-source) |

## Publishing an output

Publishing exposes an [output](/building/outputs/) at a public URL. Open the output's **⋯** drawer and click **Publish this output**, or use **Publish** directly on the row.

Publishing **does not start a build** — it exposes the build that already succeeded. An output with no successful build cannot be published; the drawer says so.

### The public link

Published output is served from a separate host:

```
https://pub.pretext.plus/o/<project-id>/<output-slug>/index.html
```

The drawer shows the full URL with a **Copy** button.

A few things worth knowing:

- **The link always serves the most recent successful build.** A failed rebuild leaves it untouched, so readers never see a broken page because you were mid-edit.
- **The slug is fixed at creation.** Renaming an output does not change its URL, so a link in a syllabus keeps working. See [Renaming](/building/outputs/#renaming-and-why-the-url-does-not-change).
- **Anyone with the link can read it.** There is no per-reader access control.
- **Unpublishing breaks the link immediately**, and also makes previously published builds unreachable — not just the current one.
- Published documents live on their own hostname on purpose: your document's interactive content runs as real JavaScript, and it must not run on the origin that holds your login session.

### Embedding in an LMS

Two options:

- Link to (or iframe) the published website using PreTeXt's standard embed code.
- Build a **SCORM package** output and upload the resulting zip to your LMS.

## Project visibility

Separately from any output, each project has a visibility setting on its dashboard:

| Visibility | Effect |
|---|---|
| **Private** (default) | Not listed anywhere |
| **Unlisted** | Not listed, but links you hand out still work |
| **Public** | Listed on your public profile page |

If you have set a username in your account settings, your profile lives at `pretext.plus/@yourname` and lists your Public projects with links to their published outputs.

:::warning[Visibility is about listing, not access]
Setting a project to Public does not publish anything, and does not expose your source. What readers can reach is decided entirely by which outputs you have published.
:::

## Download source

**Download source** on the dashboard gives you a zip laid out as a standard PreTeXt-CLI project:

```
project.ptx                  # manifest, with one <target> per output
publication/publication.ptx  # publication file
source/main.ptx              # your document, fully assembled
source/external/…            # every asset file
```

`source/main.ptx` is the complete document: every division converted from its authoring format and every include expanded, in order. Unzip it and `pretext build` works straight away, using the same target names as your outputs.

This is your exit route. Nothing about PreTeXt.Plus locks your work in.

## Share source

Subscribers can hand out a **Share source** link, which shows the project's PreTeXt source to a reader and lets them make their own copy of the project. This is how a colleague adapts your materials without needing edit access to your project.

The link is available from the dashboard when the project owner has a subscription.

## Quick preview

**Quick preview** on the dashboard renders the current source without going through the build pipeline. It is a fast look at your work in progress, not a durable link — use a published output for anything you hand out.
