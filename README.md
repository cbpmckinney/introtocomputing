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
