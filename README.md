# Elizaveta Brandukova — academic portfolio

A responsive, build-free website using HTML, CSS, and JavaScript. No package installation, external font service, analytics, or backend is required.

## Local preview

From this repository, run `python3 -m http.server 8000 --bind 127.0.0.1` and visit http://127.0.0.1:8000.

## Editing

- `index.html`: all academic content, bibliography, section order, and contact details.
- `styles.css`: typography, responsive layouts, colors, and motion preferences.
- `script.js`: reveal animations, subtle title parallax, navigation state, publication filters, and email copying.
- `assets/`: local visual assets. Currently contains only the site favicon; no portrait or research photography has been supplied. Add verified images here when available.

Publication numbering and citation text preserve the order and information in the supplied CV. ISBN 978-5-74775909-1 was supplied separately by the owner for publication 5. Conference universities are not specified in the CV and have not been inferred. No peer-review status, DOI, or external publication link has been assumed. The academic profile placeholder can be replaced with verified links when provided.

## Privacy

The original CV is outside this repository. The site contains no CV download or PDF link. PDF files are ignored to avoid accidental inclusion. Keep private source documents, home addresses, phone numbers, and references' contact details outside this repository.

## GitHub Pages — only after owner approval

All asset paths are relative and work at a GitHub Pages project URL. When publication is authorized, push `main`, then in GitHub repository Settings → Pages, choose **Deploy from a branch**, **main**, and **/(root)**. `.nojekyll` serves these static files directly. No workflow automatically deploys this website.

## Version history

Use `git log --oneline` to review commits. To undo a committed change while preserving history, use `git revert <commit>`. Review changes with `git diff` before committing. Never force-push this repository.
