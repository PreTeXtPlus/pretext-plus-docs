---
name: update-docs
description: Bring the PreTeXt.Plus documentation in this Docusaurus repo up to date with the current PreTeXt.Plus app (the pretext-plus repo and the pretext-tools converters). Use when asked to update, refresh, sync, audit, or fact-check the docs against pretext.plus, or to document recently shipped PreTeXt.Plus features.
---

# Updating the PreTeXt.Plus docs

Goal: every claim in `docs/` matches what pretext.plus does **today**. Verify each claim in code. Do not trust PR titles, the app repo's design docs, or the existing docs — when this was first run, several claims had been wrong from the day they were written (a visual editor that was disabled, "Convert to PreTeXt" creating a project copy, a paste box in the importer).

## 0. Set up

- Sibling repos (clone any that are missing):
  - `../pretext-plus` — the app (github.com/PreTeXtPlus/pretext-plus)
  - `../pretext-tools` — converters, linters, and the import wizard (github.com/PreTeXtBook/pretext-tools); needs `npm install` for the probes
  - `../unified-latex` — the LaTeX→PreTeXt fork, branch `pretextbook` (github.com/pretextplus/unified-latex)
- In the sibling repos, **never check out or reset** — the user may have work there. `git fetch origin`, then read `origin/main` with `git show` / `git diff`, or export it: `git archive origin/main | tar -x -C <scratch>/pp-main`.
- In this repo, work on a branch (see README: PRs to `main` get a test build). Commit only when asked.
- Keep a running log in your scratchpad of what you checked; findings go in a table: page · claim · status (wrong / wrong-from-the-start / new / ok) · source.

## 1. Find what changed

- Baseline: the commit in `last-sync.txt` (next to this file).
- Merged work since then:
  `git -C ../pretext-plus log --first-parent <baseline>..origin/main --reverse --format='%h %ad %s%n    %b' --date=short`
- Changed design docs and starter documents:
  `git -C ../pretext-plus diff --stat <baseline> origin/main -- docs packages/web-editor/README.md app/default_docs`
- Converter and library versions: compare the `node_modules/@pretextbook/*` entries in `package-lock.json` at the baseline and at `origin/main`, then read `../pretext-tools/packages/<pkg>/CHANGELOG.md` between those versions.
- Triage PR titles into user-facing and internal (admin, billing internals, dependencies, CI, tests, refactors). Treat the user-facing list as leads to verify, not as facts.

## 2. Verify in the code

Where each kind of fact lives in `pretext-plus` (paths relative to its root):

| Topic | Source of truth |
|---|---|
| Editor menus and labels | `packages/web-editor/src/components/{TopBar,CodeEditorMenu,documentActionMenuEntries,editorCommands}.tsx`; `app/javascript/controllers/react/{editor,helpEntries,accountEntries}.js(x)` |
| Project explorer, division menus | `components/ProjectExplorer.tsx`, `components/toc/*.tsx` (`ArticleToc.tsx` holds the ⋮ menu items) |
| Division types and nesting rules | `components/toc/types.ts` |
| Locked lines | `components/lockedRegion.ts` |
| Preview | `components/{LivePreview,wasmPreview,previewSync}.ts(x)` |
| Assets and snippets | `components/{Asset,Snippet}*Modal.tsx`, `components/toc/{AssetList,SnippetList}.tsx`, `src/sectionUtils.ts` (placeholder syntax, assembly), `src/assetTransforms.ts` |
| Spell check, typing and paste conversion | `components/editorConfigs/spellcheck/*`, `components/editorConfigs/*AutoConvert.ts`, `src/pasteConvert.ts` |
| Quotas and permissions | `app/models/{user,project,ability}.rb`; rate limits in `app/controllers/builds_controller.rb` |
| New-project dialog and starter documents | `app/views/projects/new.html.erb`, `app/default_docs/*` |
| Project page | `app/views/projects/show.html.erb`, `app/views/targets/{_target,_drawer}.html.erb`, `app/helpers/targets_helper.rb` (state labels, publish confirmations) |
| Output formats | `app/models/target/catalog.rb` |
| Build settings | `app/models/publication/catalog.rb` (background: `docs/publication-settings.md`) |
| Visibility and publishing | `app/models/project.rb`, `targets_controller#publish` |
| Collaborators | `app/views/collaborations/_panel.html.erb`, `app/controllers/collaborations_controller.rb` |
| Account, profile, subscriptions | `app/views/users/*`, `app/views/subscriptions/*`, `app/models/subscription_type.rb`, site nav in `app/views/layouts/application.html.erb` |
| Import wizard | `app/javascript/controllers/react/{import,importEngines}.js(x)`; the wizard UI is `../pretext-tools/packages/import/src/react/import-wizard.tsx` at the version in `package-lock.json` (read it via its git tag) |
| LaTeX-style tables | `../pretext-tools/packages/latex-style-pretext/src/data/*.ts` at the pinned tag |
| Download zip layout | `app/services/project_archive_builder.rb` |

Grep the views and components for the exact UI strings the docs quote. Use the labels the user sees, not internal names.

## 3. Probe the converters

The Writing pages are detailed specifications, so check them by running the converters rather than reading tables:

1. In `../pretext-tools`, confirm the working tree matches the pinned versions — e.g. `git diff --stat "@pretextbook/latex-pretext@<ver>" HEAD -- packages/latex-pretext/src` prints nothing — and that `node_modules` has the pinned transitive versions (notably `@pretextbook/unified-latex-to-pretext`).
2. Run `node scripts/probe-latex.mjs` and `node scripts/probe-markdown.mjs` (in this skill's folder). They run the TypeScript sources directly through `jiti`; set `PRETEXT_TOOLS` if pretext-tools is not a sibling of this repo. Add samples for any new claim.
3. Document only what converts correctly. Collect anything broken for the report to the team, rather than documenting it as behavior.

Windows notes: import `jiti` through a `file://` URL, and write probe scripts with a file-writing tool rather than a shell heredoc, which mangles backslashes.

## 4. Edit the docs

Page map:

| Section | Pages |
|---|---|
| Getting Started | try-it, creating-a-project, templates, importing, managing-projects, accounts-and-limits |
| Writing | index, pretext-style, latex-style, markdown-style, slideshows |
| The Editor | overview (layout, menus, saving, shortcuts), divisions, writing-tools, preview, assets, snippets, preamble, collaborators |
| Building & Publishing | outputs, build-settings, publishing |
| Features | current-features, roadmap |

Style:

- Concise and user-facing. The team trims instructions it considers unnecessary (see commit 3c13f98), so explain what readers need and skip internals such as CRDTs, background jobs, and database details.
- Exact UI labels in bold; menu paths as **File ▸ Import…**; keys as `Ctrl`/`Cmd`+`S`. Mac equivalents differ for some shortcuts (Go to Line is `Ctrl`+`G` everywhere), so check `editorCommands.ts` before claiming one.
- Terminology: **Projects Dashboard** is the project list; the **project page** is one project; the **project explorer** is the left rail with Table of Contents / Snippets / Assets / Find in Project. **⋮** opens explorer menus, **⋯** opens an output's drawer.
- Tables for syntax that differs across the three markup styles.
- Roadmap: move shipped items to "Recently shipped", but never invent plans. List any roadmap wording you changed for the team to confirm.
- Keep headings (anchors) stable where you can. When you rename or move a page, grep `docs/` and the footer in `docusaurus.config.ts` for links to it.
- Update `_category_.json` descriptions when a section gains pages.

## 5. Check and finish

- `npm run build` must pass — `onBrokenLinks` is `throw`, and broken anchors print warnings.
- Grep `docs/` for terms from UI that no longer exists, and add new ones here. So far: `Contents panel|source menu|Give feedback|visual editor|Quick preview|zip download|brandlogo|Import LaTeX|20 MB` (the roadmap's "Visual (WYSIWYG) editing" item is intentional).
- Update `last-sync.txt`: the new `origin/main` commit, the date, and the converter versions.
- Report to the user: pages changed or added; claims that were already wrong at the baseline; app and converter bugs found; roadmap edits needing confirmation.

## Known issues to re-check (as of last-sync.txt)

If these are fixed, the docs can say more:

- LaTeX-style: `\paragraph` becomes a TODO (`\subparagraph` and `\paragraphs` work); `\references` and `\bibliography` headers lose their title; the `list` environment mangles its content; size switches (`{\large …}`) and `\makebox` drop their text; `\textsc` is unconverted; `\newcommand` in a division body leaves a TODO marker; `\hyperref[id]{text}` becomes `<url href="#id">` rather than a cross-reference; the linter warns on `\plus{snippet}{…}` although it converts correctly.
- Markdown-style: no GFM, so tables and strikethrough pass through as text; `![img](…)`, `<!-- comments -->`, `---` rules, and hard line breaks become TODOs; headings ignore `{#id}`.
- App: **File ▸ Clean up LaTeX…** appears in every format, though only LaTeX-style divisions have anything to clean.
