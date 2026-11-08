# double-alpha.com

Website for Double Alpha Management Inc., built with Jekyll and hosted on GitHub Pages.

## How to add a blog post
Create a file in `_posts/` named `YYYY-MM-DD-short-title.md` with this header, then the article in Markdown:

```
---
title: "Post title"
tag: "Rig market"
summary: "One-sentence summary shown on cards."
substack_url: https://doublealpha.substack.com/p/...   # optional
takeaway: "One-line conclusion."                       # optional
---
```

## Structure
- `_services/` and `_experience/` — one file per level-2 page; edit the lists in the header.
- `index.html`, `services/`, `experience/`, `blog/`, `about/`, `contact/` — level-1 pages.
- `assets/css/site.css` — brand tokens (Double Alpha design system: ink, sage, Inter).
