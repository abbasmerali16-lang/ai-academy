# Abbas’ AI Academy

A free, self-paced website for learning artificial intelligence, from beginner to master.

Seven levels of 16 lessons each, in 4 units per level, with quizzes, interactive activities, a glossary, sources for every lesson and progress tracking:

1. Foundations
2. AI tools in the real world (with the AI tools directory: `tools.html`, one page per tool at `tool.html?id=...`)
3. Claude in depth (every Claude app, model and feature, and how to use it well)
4. Data and Python
5. Machine learning in practice
6. Deep learning and LLMs
7. Mastery: build and deploy

## Open it locally
Double-click `index.html`. No install or build step needed.

## Put it on GitHub Pages
1. Create a new GitHub repository and upload everything in this folder.
2. In the repo, go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
3. Your site appears at `https://<your-username>.github.io/<repo-name>/` after a minute or two.

## Adding content
Lessons live in `assets/lessons.js` (Level 1), `assets/level-tools.js` (Level 2), `assets/level-claude.js` (Level 3) and `assets/level2.js` to `assets/level5.js` (Levels 4 to 7; the file names predate the tools level). The tools directory lives in `assets/tools.js`; link to a tool from any lesson with `<a data-tool="id">Name</a>`. Each lesson has a unit, title, summary, body (HTML), key terms, quiz questions and sources. Units are listed in `LEVEL1_UNITS`, and simple sorting activities can be added as data in `SORT_SETS` and placed in a lesson with `<div data-widget="sort" data-set="name"></div>`.

## How the content is written
Lesson text is original. Published courses, textbooks, papers and official guidance were used to decide what to cover and to fact-check, never copied. Short quotes are only used where exact wording matters, and every lesson ends with a "Sources and further reading" list crediting what was used.
