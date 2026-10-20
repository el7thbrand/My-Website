# Elizaveta Brandukova — academic portfolio

A responsive, build-free website using HTML, CSS, and JavaScript. No package installation, external font service, analytics, or backend is required.

## Local preview

From this repository, run `python3 -m http.server 8000 --bind 127.0.0.1` and visit http://127.0.0.1:8000.

## Editing

- `index.html`: all academic content, bibliography, section order, and contact details.
- `styles.css`: typography, responsive layouts, colors, and motion preferences.
- `script.js`: reveal animations, subtle title parallax, navigation state, publication filters, and email copying.
- `assets/`: local visual assets. Contains the favicon, the owner-supplied laboratory portrait, and the owner-supplied University of Idaho Vandals image and a transparent-background version used in the header.

Publication numbering, titles, and venue details preserve the order and information in the supplied CV. At the owner’s request, publication author labels display the full name in first-name-first order: Elizaveta Brandukova. ISBN 978-5-74775909-1 was supplied separately by the owner for publication 5. Conference universities are not specified in the CV and have not been inferred. No peer-review status, DOI, or external publication link has been assumed. The contact section links to the owner-provided LinkedIn profile. The introduction uses the owner-supplied portrait in `assets/elizaveta-brandukova.jpg`.

## Privacy

The original CV is outside this repository. The site contains no CV download or PDF link. PDF files are ignored to avoid accidental inclusion. Keep private source documents, home addresses, phone numbers, and references' contact details outside this repository.

## GitHub Pages — only after owner approval

All asset paths are relative and work at a GitHub Pages project URL. When publication is authorized, push `main`, then in GitHub repository Settings → Pages, choose **Deploy from a branch**, **main**, and **/(root)**. `.nojekyll` serves these static files directly. No workflow automatically deploys this website.

## Version history

Use `git log --oneline` to review commits. To undo a committed change while preserving history, use `git revert <commit>`. Review changes with `git diff` before committing. Never force-push this repository.

The portrait retains the original 1280 × 1126 image with its full proportions and no cropping. The logo cutout at `assets/idaho-vandals-transparent.png` was made with built-in ImageGen using this prompt: “Remove only the outer rectangular white background and surrounding gray drop shadow; make the exterior transparent, preserving the gold I, black outlines, white logo contour, Vandals lettering, registered mark, proportions, and interior artwork.” Original image files are preserved.

The fieldwork photograph in `assets/fieldwork.jpg` is a JPEG conversion of the owner-supplied `IMG_9665.HEIC`. It appears alongside the scientific toolkit with a CSS edge fade and the existing upward scroll reveal; reduced-motion preferences disable the reveal animation. The original HEIC remains unchanged.
