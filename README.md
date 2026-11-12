# AI Academy

A free, self-paced website for learning artificial intelligence, from beginner to master.

**Level 1: Foundations** (available now): 16 lessons in 4 units, with quizzes, interactive activities, a glossary, sources for every lesson and progress tracking.

## Open it locally
Double-click `index.html`. No install or build step needed.

## Put it on GitHub Pages
1. Create a new GitHub repository and upload everything in this folder.
2. In the repo, go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
3. Your site appears at `https://<your-username>.github.io/<repo-name>/` after a minute or two.

## Adding content
Lessons live in `assets/lessons.js`. Each lesson has a unit, title, summary, body (HTML), key terms, quiz questions and sources. Units are listed in `LEVEL1_UNITS`, and simple sorting activities can be added as data in `SORT_SETS` and placed in a lesson with `<div data-widget="sort" data-set="name"></div>`.

## How the content is written
Lesson text is original. Published courses, textbooks, papers and official guidance were used to decide what to cover and to fact-check, never copied. Short quotes are only used where exact wording matters, and every lesson ends with a "Sources and further reading" list crediting what was used.
