# CSC-101 Notes — Wabash College

Source for an open, interactive set of notes for CSC-101, a "CS0"-style
survey of computer science as a discipline, taught at Wabash College ahead
of an intro Python programming course. Built with
[PreTeXt](https://pretextbook.org).

This repo currently contains a **starter shell**: a working PreTeXt project
with a five-chapter placeholder skeleton (`source/ch-*.ptx`) matching the
rough shape discussed by the team, ready for real content. Nothing here is
final -- titles, chapter order, and author names all have `TODO` markers.

## Project layout

- `source/main.ptx` -- top-level book structure; includes every chapter.
- `source/docinfo.ptx` -- book-wide settings: LaTeX macros, and the
  `latex-image-preamble` (already loads `circuitikz` for circuit/logic-gate
  diagrams via `<latex-image>` elements).
- `source/frontmatter.ptx` -- title page, author/institution, license notice.
- `source/ch-*.ptx` -- one file per chapter.
- `project.ptx` -- build targets (web/HTML and print/PDF).
- `publication/publication.ptx` -- output styling/behavior options (mostly
  commented-out defaults -- see inline docs).
- `assets/` -- put static images/data files here.

## Getting set up

You have two reasonable options:

**Option A -- GitHub Codespaces (no local install).** Use the
[PreTeXt Codespace template](https://github.com/PreTeXtBook/pretext-codespace)
to get a fully configured browser-based environment. This is the easiest
on-ramp for anyone who doesn't want to install LaTeX/Python locally.

**Option B -- install locally.**
1. Install Python 3.9+ and (for PDF output / `<latex-image>` diagrams) a
   TeX distribution (e.g. TeX Live or MacTeX).
2. From this directory: `pip install -r requirements.txt`
3. Confirm it works: `pretext build web`

**Option C -- dedicated conda environment (recommended if you use conda).**
Installing `pretext` into your conda `base` environment is a common source
of confusing bugs later -- `base` easily ends up with an old or shared
version pinned by some other project. A project-specific environment avoids
that:

```bash
conda env create -f environment.yml
conda activate csc101-book
pretext build web
```

To pick up a version bump later (after `requirements.txt` changes):

```bash
conda activate csc101-book
pip install -r requirements.txt --upgrade
```

**Do not run `conda install pretext`.** There's an unrelated bioinformatics
package with the same name on the `bioconda` channel (Hi-C genome contact
maps) -- installing it would silently give you the wrong tool entirely.
PreTeXt only ships via pip.

## Day-to-day commands

- `pretext build web` -- build the HTML edition into `output/web/`.
- `pretext view web` -- build and open a local preview in your browser.
- `pretext build print` -- build the PDF edition (requires a TeX install).
- `pretext validate` -- check your source against the PreTeXt schema; good
  to run before committing.

## Publishing to GitHub Pages

The PreTeXt CLI has a built-in deploy command, which is the simplest path
and is what we recommend:

1. Push this repo to GitHub (see below if you haven't yet).
2. From your working copy, run `pretext deploy`. This builds the web
   target and pushes it to a `gh-pages` branch of your repo.
3. In the GitHub repo, go to **Settings -> Pages** and set the source to
   deploy from the `gh-pages` branch (root). Your book will be live at
   `https://<username-or-org>.github.io/<repo-name>/`.
4. Repeat step 2 any time you want to publish new changes -- `pretext
   deploy` is safe to re-run.

If several of you are editing, agree on who runs `pretext deploy` and when
(e.g. only from `main`, after review), so people don't clobber each other's
published output. A GitHub Actions workflow that deploys automatically on
push is a reasonable later upgrade once the team has a stable workflow --
worth revisiting once there's real content and a settled writing cadence.

### First time pushing this repo to GitHub

```bash
git init                       # if this isn't already a git repo
git add .
git commit -m "Initial PreTeXt shell for CSC-101"
git branch -M main
git remote add origin https://github.com/<username-or-org>/<repo-name>.git
git push -u origin main
```

Then create the (empty) repository on github.com first if you haven't, and
substitute your actual username/org and repo name above.

## Contributing: working on a branch

For anyone other than the sole maintainer, the workflow is: write on a
branch, preview it locally, open a pull request, merge, and only *then*
publish. This keeps in-progress or half-finished chapters off the live
public site.

**Getting a branch and previewing it locally:**

```bash
git fetch origin
git switch their-branch-name          # or: git checkout -b name origin/name
conda activate csc101-book            # see "Getting set up" above if not created yet
pretext validate                      # quick schema sanity check
pretext view web                      # builds and opens a local live preview
```

`pretext view web` builds the currently checked-out branch and starts a
local preview server in your browser (not `pretext build`, which builds but
doesn't serve/open anything, and not `pretext deploy`, which publishes --
see the warning below). Reviewing this local preview, not just reading the
diff, is the real test -- PreTeXt's rendering (knowls, cross-references,
numbering) can look different from how the raw XML reads.

**Important: never run `pretext deploy` from a branch.** `pretext deploy`
always publishes to the live `gh-pages` site, regardless of which branch you
currently have checked out -- it deploys whatever's currently built, not
specifically "the `main` branch." Running it while testing a draft branch
would push that draft live immediately. Treat `pretext deploy` as a
`main`-only command, run after a branch is reviewed and merged.

**Suggested full loop:**
1. `git switch -c my-topic-branch` and write.
2. `pretext view web` locally to check it, as many times as needed.
3. `git add`, `git commit`, `git push -u origin my-topic-branch`.
4. Open a pull request against `main` on GitHub.
5. After review/merge, whoever's turn it is to publish runs `pretext deploy`
   from an up-to-date `main`.

## Next steps for the team

- [ ] Confirm/replace placeholder title, author list, and license in
      `source/frontmatter.ptx` and `source/main.ptx`.
- [ ] Confirm the chapter list/order in `source/main.ptx` -- the current
      five chapters (What Is CS?, Representing Information, Algorithms,
      Systems & Networks, Computing & Society) are a starting guess, not a
      decision.
- [ ] Replace `<!-- TODO -->` / "Placeholder text." blocks with real
      content, one chapter/section at a time.
- [ ] Decide on a real GitHub org/repo name and update the URL in
      `source/frontmatter.ptx`.

## Learning PreTeXt

- [The PreTeXt Guide](https://pretextbook.org/documentation.html)
- [Annotated sample book](https://pretextbook.org/examples/sample-book/annotated/)
- [PreTeXt support group](https://groups.google.com/g/pretext-support) --
  active and responsive if you get stuck.
