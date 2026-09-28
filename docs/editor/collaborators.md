---
sidebar_position: 8
---

# Collaborators

A project can be shared with co-authors, who edit it alongside you — in real time, in the same document, with each other's cursors visible.

Collaborators are managed on the project page, in the **Collaborators** section.

## Inviting someone

As the project owner, type a colleague's email address into **Invite by email** and click **Invite**.

- If a PreTeXt.Plus account already exists for that address, access is granted immediately and they get an email saying so.
- If not, they get an invitation email, and the invitation sits **invited** (shown with an amber badge) until they create an account with that address. The project then appears in their project list — no invitation link is needed.

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
- add, replace, and remove assets and snippets;
- edit the project preamble;
- create outputs, run builds, and publish;
- download the project source.

They **cannot**:

- delete the project;
- change its visibility;
- invite or remove other collaborators.

Only the owner manages the roster. A collaborator's own way out is **Leave this project**, which ends their access and nothing else.

## Removing someone

The owner's **Remove** button on a roster row revokes access immediately. This does not touch anything they wrote — their work stays in the project.

## Transferring ownership

The owner can hand the project to any collaborator who has accepted: click **Make owner** on their row and confirm. You become an ordinary collaborator, they become the owner, and they get an email.

Because a project's limits follow its owner's plan, the project uses the new owner's subscription from then on. Ownership cannot be given to a pending invitation.

## Real-time co-editing

As soon as a project has any collaborator (accepted or invited), it switches to collaborative mode:

- **Everyone edits the same live document.** Changes appear as they are typed, and every change is saved as it happens — there is no save-and-refresh cycle.
- **Presence avatars** in the corner of the code editor show who else is in the project, and remote cursors appear in each person's color.
- **Structure syncs too.** Adding, renaming, reordering, or deleting a division shows up for everyone, and a division and the placeholder pointing at it always arrive together — nobody ever sees a placeholder referring to a division they do not have.
- **Assets sync too.** The file is uploaded once, and everyone sees the new asset.

Collaborative mode stays on for your solo sessions too, so the shared document never falls behind. When the last collaborator is removed the project returns to ordinary solo editing.

If the live connection is interrupted, a banner says so. Your work is still being saved; collaborators' changes just take a few seconds longer to appear until it recovers.

### Working at the same time

Concurrent editing in the same division is merged automatically, so two people typing in different paragraphs will not clobber each other. Two people typing on the *same line* will still produce a muddle — the usual courtesy of dividing up the work applies.

## Sharing without collaborating

Collaborating means editing. If you only want people to *read* the result, publish an output instead — see [Publishing](/building/publishing/). To let someone start their own version of your work, give them your [Share source](/building/publishing/#share-source) link.
