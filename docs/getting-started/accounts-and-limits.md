---
sidebar_position: 6
---

# Accounts and Limits

A free account lets you create as many projects as you like, build and publish them, and invite a collaborator. A subscription raises the limits, adds a few extras, and helps fund PreTeXt.Plus.

## Quotas

| | Free | Subscribed |
|---|---|---|
| Projects | Unlimited | Unlimited |
| [Outputs](/building/outputs/) per project | 3 | 12 |
| [Collaborators](/editor/collaborators/) per project | 1 | 5 |
| [Assets](/editor/assets/), across all your projects | 100 | Unlimited |
| Builds running at once | 1 | 5 |
| One-click **Build all** / **Rebuild outdated** | — | ✓ |
| Custom site logo in [Build settings](/building/build-settings/) | — | ✓ |
| [Public profile](#your-public-profile) visible to everyone | — | ✓ |

Two notes on how these are applied:

- **A project's limits follow its owner's plan**, not yours. On a project shared with you, the owner's subscription decides how many outputs and collaborators it may have and whether **Build all** is offered — subscribing yourself will not change someone else's project.
- **Limits apply when adding, not retroactively.** If a subscription lapses, existing outputs, collaborators, and assets are kept; you simply cannot add more until you are back under the limit.

## Build limits

Builds run on a shared build server, so they are bounded:

- A free account can have **1 build running at a time**; a subscription allows **5**. Start more and the extras wait their turn — the output shows **Queued** — and begin automatically as earlier builds finish.
- At most **20 build requests per hour**.

**Cancel** on a running or queued build stops it and frees its slot immediately.

## Subscribing

Open **Account ▸ Manage Subscriptions**. Plans are priced per seat and paid by card or, where offered, by invoice; some plans include a free trial for new subscribers. Confirm your email address before subscribing.

A plan with several seats can cover colleagues: open the plan and enter their email addresses. **Request a Demo** on the same page puts you in touch with the team.

## Account settings

**Account ▸ Settings** holds your name, username, and subscription-renewal reminder emails, plus your default [Build settings](/building/build-settings/) for every project you own.

## Your public profile

Set a **username** in your settings to get a profile page at `pretext.plus/@yourname`. It lists your **Public** projects, each with its description, links to its published outputs, and a **View source** link.

A profile is visible to everyone only while you have a subscription; until then, only you can see it. What each visibility setting means is covered in [Project visibility](/building/publishing/#project-visibility).

## Browser support

PreTeXt.Plus works best in an up-to-date Chromium-based browser (Google Chrome, Microsoft Edge). The live preview relies on WebAssembly JSPI, which Chromium ships and some other browsers do not. Elsewhere the preview is built on the server instead: slower, refreshed only when you ask, and without two-way sync. Editing itself works in any modern browser.
