---
sidebar_position: 5
---

# Collaborators

A project can be shared with co-authors, who edit it alongside you — in real time, in the same document, with each other's cursors visible.

Collaborators are managed from the project **dashboard**, in the **Collaborators** section.

## Inviting someone

As the project owner, type a colleague's email address into **Invite by email** and click **Invite**.

- If a confirmed PreTeXt.Plus account already exists for that address, access is granted immediately.
- If not, the invitation sits **invited** (shown with an amber badge) until someone registers an account under that address. No invitation token is needed — the invite is addressed to the email the account is registered under, so it is claimed automatically on registration.

The roster leads with the project's owner, badged **owner**, followed by every collaborator and pending invitation. Your own row is badged **you**.

## How many

| | Collaborators per project |
|---|---|
| Free account | 1 |
| Subscription | 5 |

The limit follows the **owner's** plan, not the collaborator's — subscribing yourself will not raise the limit on someone else's project. The cap is checked only when adding someone, so a project that goes over its limit (because the owner's subscription lapsed) keeps everyone it already has.

## What a collaborator can do

A collaborator is a co-author. They can:

- write and edit every division;
- add, replace, and remove assets;
- edit the project preamble;
- create outputs, run builds, and publish;
- download the project source.

They **cannot**:

- delete the project;
- invite or remove other collaborators.

Only the owner manages the roster. A collaborator's own way out is **Leave this project**, which ends their access and nothing else.

## Removing someone

The owner's **Remove** button on a roster row revokes access immediately. This does not touch anything they wrote — their work stays in the project.

## Real-time co-editing

As soon as a project has any collaborator (accepted or invited), it switches to collaborative mode:

- **Everyone edits the same live document.** Changes appear as they are typed, with no save-and-refresh cycle.
- **Presence avatars** in the top bar show who else is in the project, and remote cursors appear in the code editor in each person's color.
- **Structure syncs too.** Adding, renaming, reordering, or deleting a division shows up for everyone, and a division and the placeholder pointing at it always arrive together — nobody ever sees a placeholder referring to a division they do not have.
- **Assets sync as metadata.** The file bytes are uploaded once and everyone learns about the asset from the shared document.

Collaborative mode stays on for your solo sessions too, so the shared document never falls behind. When the last collaborator is removed the project returns to ordinary solo editing.

### Working at the same time

Concurrent editing in the same division is handled by a conflict-free merge, so two people typing in different paragraphs will not clobber each other. Two people typing on the *same line* will still produce a muddle — the usual courtesy of dividing up the work applies.

## Sharing without collaborating

Collaborating means editing. If you only want people to *read* the result, publish an output instead — see [Publishing](/building/publishing/).
