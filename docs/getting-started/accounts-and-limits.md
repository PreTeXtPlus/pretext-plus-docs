---
sidebar_position: 5
---

# Accounts and Limits

A free account lets you create real projects, build them, publish them, and invite a collaborator. A subscription raises every limit.

## Quotas

| | Free | Subscribed |
|---|---|---|
| Projects | 10 | 100 |
| [Outputs](/building/outputs/) per project | 3 | 12 |
| [Collaborators](/editor/collaborators/) per project | 1 | 5 |
| Asset upload storage | 20 MB | 100 MB |
| [Share source](/building/publishing/#share-source) with readers | — | ✓ |

Two notes on how these are applied:

- **Output and collaborator limits follow the project owner's plan**, not yours. On a project shared with you, the owner's subscription is what decides how many outputs and collaborators it may have — subscribing yourself will not raise someone else's project's limits.
- **Limits apply when adding, not retroactively.** If a subscription lapses, existing collaborators and outputs are kept; you simply cannot add more until you are back under the limit.

## Build limits

Independent of your plan, builds are bounded so one project cannot monopolize the build server:

- at most **20 builds per hour** per account;
- at most **3 builds running at once** per account.

If you hit either, the dashboard says so. A running build can be stopped from its row (**Cancel**), which frees its slot immediately.

## Subscribing

Open **Subscriptions** from the account menu. Both card checkout and invoice requests are supported.

## Project visibility and your public profile

Set a **username** in your account settings to get a public profile page at `pretext.plus/@yourname`, which lists your **Public** projects and links to their published outputs.

Each project's visibility is set on its dashboard:

| Visibility | Effect |
|---|---|
| **Private** (default) | Not listed on your profile. |
| **Unlisted** | Not listed on your profile, but a link you hand out still works. |
| **Public** | Listed on your profile page. |

Visibility controls **listing only** — it does not publish anything by itself and does not open your source to readers. What a reader can actually reach is governed by [publishing an output](/building/publishing/).

## Browser support

PreTeXt.Plus works best in an up-to-date Chromium-based browser (Google Chrome, Microsoft Edge). The in-browser preview relies on WebAssembly JSPI, which Chromium ships and some other browsers do not; where it is unavailable the preview falls back to a server build or is hidden. Editing itself works in any modern browser.
