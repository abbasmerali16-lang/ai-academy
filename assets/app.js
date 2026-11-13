(function () {
  "use strict";
  /* ---------- levels ---------- */
  // Each level's lessons live in their own file (lessons.js for Level 1, level-tools.js, level-claude.js, level2.js, ...).
  // A level with no lessons loaded yet shows as "coming soon".
  var LEVELS = [
    { n: 1, id: "1", name: "Foundations", key: "LEVEL1", what: "what AI is, how it reasons and learns, and how to use it well and within the rules", lead: "Sixteen short lessons take you from \"what is AI?\" to using it well and knowing the rules. No maths or coding needed.", cert: "You've finished AI Foundations. You can explain what AI is, how it reasons and learns, how to judge whether it's any good, how chatbots and other AI tools work, and how to use AI responsibly and within the rules." },
    { n: 2, id: "tools", name: "AI tools in the real world", key: "LEVELT", lead: "Sixteen lessons on the AI tools people really use, from assistants, research and translation to images, voice, video, design, coding, app builders and automation, with a directory of over 100 tools.", cert: "You've finished AI tools in the real world. You know the main families of AI tools, how to choose and use them safely, and how AI is used for writing, research, languages, images, sound, video, design, coding, automation and across industries." },
    { n: 3, id: "claude", name: "Claude in depth", key: "LEVELC", lead: "Sixteen lessons on using one assistant, Anthropic's Claude, to its full potential: every app, model and setting, Projects, memory, Research, Artifacts, connectors, skills, Cowork, Claude Code and the developer platform.", cert: "You've finished Claude in depth. You know how every part of Claude works, from models, effort, Projects and memory to Artifacts, connectors, skills, Cowork, Claude Code and the API, and how to use each one well and safely." },
    { n: 4, id: "2", name: "Data and Python", key: "LEVEL2", lead: "Sixteen lessons take you from your first line of Python to exploring a real dataset, with the statistics and gentle maths that AI is built on. You can run real code right in the page.", cert: "You've finished Data and Python. You can write and read Python, load, clean and summarise data with NumPy and pandas, describe it with statistics and charts, and explain the maths ideas that machine learning rests on." },
    { n: 5, id: "3", name: "Machine learning in practice", key: "LEVEL3", lead: "Sixteen lessons on building real machine learning models with scikit-learn: framing problems, the main model families, measuring and improving them, and making them fair and explainable.", cert: "You've finished Machine learning in practice. You can frame a problem, prepare data, train and compare models, tune and evaluate them honestly, and explain and check them for fairness." },
    { n: 6, id: "4", name: "Deep learning and LLMs", key: "LEVEL4", lead: "Sixteen lessons inside modern AI: how neural networks really train, attention and transformers, how large language models are built, and image generators, retrieval and agents.", cert: "You've finished Deep learning and LLMs. You can explain how neural networks train, how transformers and large language models work, and how image generators, retrieval and agents are built." },
    { n: 7, id: "5", name: "Mastery: build and deploy", key: "LEVEL5", lead: "Sixteen lessons on building, shipping and governing real AI systems: AI APIs, retrieval and agents, deployment and monitoring, security, governance and reading research.", cert: "You've completed the whole academy. You can design, build, evaluate, deploy, secure and govern AI systems, and keep learning from the research frontier." }
  ];
  LEVELS.forEach(function (m) {
    m.lessons = window[m.key] || [];
    m.units = window[m.key + "_UNITS"] || [];
    m.ready = m.lessons.length > 0;
    m.lessons.forEach(function (l, i) { l.level = m.n; l.num = i + 1; });
  });
  var READY = LEVELS.filter(function (m) { return m.ready; });
  var ALL = [].concat.apply([], READY.map(function (m) { return m.lessons; }));
  var LV = READY[0], LESSONS = LV.lessons, UNITS = LV.units;
  function setLevel(m) { LV = m; LESSONS = m.lessons; UNITS = m.units; }
  function levelOf(l) { return LEVELS[l.level - 1]; }
  var NUMWORD = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  function lessonById(id) { return ALL.find(function (l) { return l.id === id; }); }
  function lessonTag(l) { return l.level > 1 ? l.level + "." + l.num : String(l.num); }
  // Addresses of pages (the Claude-hosted copy swaps these for in-page links).
  function lessonHref(id) { return "lesson.html?id=" + id; }
  function levelHref(n) { return n > 1 ? "index.html?level=" + n : "index.html"; }
  function lessonsHref(n) { return n > 1 ? "lessons.html?level=" + n : "lessons.html"; }
  function currentLessonId() { return new URLSearchParams(location.search).get("id"); }
  function requestedLevel() { return parseInt(new URLSearchParams(location.search).get("level"), 10) || 0; }
  var KEY = "aiAcademy.level1.v1";

  /* ---------- progress (saved in this browser only) ---------- */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* storage blocked: progress just won't persist */ }
    acctChanged(p);
  }
  var progress = load();
  function isDone(id) { return !!(progress[id] && progress[id].passed); }
  function doneCount() { return LESSONS.filter(function (l) { return isDone(l.id); }).length; }
  function nextAll() { return ALL.find(function (l) { return !isDone(l.id); }); }
  // The level to show: the one asked for, else the one holding your next lesson.
  function pickLevel() {
    var want = LEVELS[requestedLevel() - 1];
    if (want && want.ready) return want;
    var nx = nextAll();
    return nx ? levelOf(nx) : READY[READY.length - 1];
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function renderProgress(el) {
    if (!el) return;
    var n = doneCount(), t = LESSONS.length, pct = Math.round((n / t) * 100);
    el.innerHTML =
      '<div class="progress-row"><span>Your Level ' + LV.n + ' progress, Abbas</span><span>' + n + " of " + t + " lessons · " + pct + "%</span></div>" +
      '<div class="bar"><span style="width:' + pct + '%"></span></div>';
  }

  /* ---------- home page ---------- */
  function renderHome() {
    setLevel(pickLevel());
    renderLevelCopy();
    renderProgress($("#progress"));
    var list = $("#lesson-list");
    var lastUnit = null;
    if (list) list.innerHTML = LESSONS.map(function (l, i) {
      var done = isDone(l.id);
      var head = "";
      if (l.unit && l.unit !== lastUnit) {
        lastUnit = l.unit;
        var u = UNITS.find(function (x) { return x.id === l.unit; });
        if (u) head = '<li class="unit-head"><h3>' + esc(u.title) + "</h3><p>" + esc(u.blurb) + "</p></li>";
      }
      return head + '<li class="lesson-item' + (done ? " done" : "") + '"><a href="' + lessonHref(l.id) + '">' +
        '<span class="lesson-num">' + (done ? "✓" : i + 1) + "</span>" +
        '<span class="lesson-text"><strong>' + esc(l.title) + "</strong><span>" + esc(l.summary) + "</span></span>" +
        '<span class="lesson-meta">' + l.minutes + " min</span></a></li>";
    }).join("");

    var next = LESSONS.find(function (l) { return !isDone(l.id); });
    var start = $("#start-btn");
    if (start && next) {
      start.href = lessonHref(next.id);
      start.textContent = doneCount() ? "Welcome back, Abbas. Continue: " + next.title : (LV.n > 1 ? "Start Level " + LV.n + ", Lesson 1" : "Start Lesson 1");
    } else if (start) {
      start.href = page === "lessons" ? "#certificate" : lessonsHref(LV.n) + "#certificate";
      start.textContent = "Level " + LV.n + " complete, Abbas";
    }
    var cert = $("#certificate");
    if (cert) cert.hidden = !!next;
    renderLanding(next);

    var reset = $("#reset");
    if (reset) reset.onclick = function () {
      if (confirm("Abbas, reset all your progress, on every level, in this browser?")) { progress = {}; save(progress); renderHome(); }
    };
  }

  /* Home page landing sections: hero card, numbers strip, unit cards, closing call to action. */
  /* Home page wording and the road of levels, for whichever level is showing. */
  function renderLevelCopy() {
    var set = function (id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; };
    var title = "Level " + LV.n + " · " + esc(LV.name);
    var onList = page === "lessons";
    set("hero-eyebrow", onList ? title : "Welcome to your AI Journey");
    set("hero-lead", onList ? "Abbas, here is everything in Level " + LV.n + " on one page: the units, every lesson, how lessons work and common questions." : "Abbas, this academy was built just for you. " + NUMWORD[LEVELS.length].replace(/^./, function (c) { return c.toUpperCase(); }) + " levels and " + ALL.length + " short lessons take you from \"what is AI?\" to building and running AI systems of your own. You start with no maths or coding and pick both up along the way.");
    set("lp-title", "Your Level " + LV.n + " lessons");
    if (onList) document.title = "Level " + LV.n + " lessons · Abbas’ AI Academy";
    set("units-kicker", title);
    set("units-title", ["", "One", "Two", "Three", "Four", "Five", "Six"][UNITS.length] + " units. One clear path.");
    set("lessons-kicker", "All " + LESSONS.length + " lessons");
    set("lessons-title", "Every lesson, unit by unit");
    set("cert-big", "LEVEL " + LV.n);
    set("cert-title", "Well done, Abbas: Level " + LV.n + " complete");
    set("cert-text", esc(LV.cert) + (LEVELS[LV.n] && LEVELS[LV.n].ready ? ' <a href="' + levelHref(LV.n + 1) + '">On to Level ' + (LV.n + 1) + ": " + esc(LEVELS[LV.n].name) + " →</a>" : ""));
    set("road-kicker", "All " + NUMWORD[LEVELS.length] + " levels");
    set("levels", LEVELS.map(function (m) {
      var d = m.lessons.filter(function (l) { return isDone(l.id); }).length;
      var state = m === LV ? "current" : (m.ready ? "open" : "locked");
      var label = m === LV ? "You are here" : (m.ready ? (d === m.lessons.length ? "Complete" : d ? d + " of " + m.lessons.length + " done" : "Available now") : "Coming soon");
      var inner = "<b>Level " + m.n + "</b>" + esc(m.name) + "<br><span>" + label + "</span>";
      return m.ready ? '<a class="level ' + state + '" href="' + (page === "lessons" ? lessonsHref(m.n) : levelHref(m.n)) + '">' + inner + "</a>" : '<div class="level locked">' + inner + "</div>";
    }).join(""));
  }

  function renderLanding(next) {
    var n = doneCount(), pct = Math.round(100 * n / LESSONS.length);
    var stats = $("#stats");
    // Numbers for the whole course (every level), not just the level showing.
    var cMins = ALL.reduce(function (a, l) { return a + l.minutes; }, 0);
    var cTerms = uniqueTermCount();
    var cUnits = READY.reduce(function (a, m) { return a + m.units.length; }, 0);
    if (stats) stats.innerHTML = [[LEVELS.length, "levels"], [cUnits, "units"], [ALL.length, "short lessons"], ["~" + Math.round(cMins / 60), "hours in total"], [cTerms, "key terms explained"]]
      .map(function (x) { return "<div><dt>" + x[0] + "</dt><dd>" + x[1] + "</dd></div>"; }).join("");
    var hv = $("#hero-visual");
    if (hv) {
      var l = next || LESSONS[LESSONS.length - 1], i = LESSONS.indexOf(l);
      hv.innerHTML = '<div class="hv-card">' +
        '<span class="hv-label">' + (next ? (n ? "Continue where you left off" : "Your first lesson") : "Level " + LV.n + " complete") + "</span>" +
        '<div class="hv-lesson"><span class="hv-num">' + (i + 1) + "</span><div><strong>" + esc(l.title) + "</strong><span>" + esc(l.summary) + "</span></div></div>" +
        '<div class="hv-meta"><span>' + l.minutes + " min read</span><span>Activity + quiz</span></div>" +
        '<a class="btn" href="' + lessonHref(l.id) + '">' + (next ? "Open lesson " + (i + 1) : "Review lesson " + (i + 1)) + "</a></div>" +
        '<div class="hv-card hv-progress"><div class="hv-row"><span>Your progress</span><b>' + pct + "%</b></div>" +
        '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
        '<ul class="hv-units">' + UNITS.map(function (u) {
          var ls = LESSONS.filter(function (x) { return x.unit === u.id; }), d = ls.filter(function (x) { return isDone(x.id); }).length;
          return "<li><span>" + esc(u.title.replace(/^Unit (\d+) · /, "$1. ")) + "</span><b>" + d + "/" + ls.length + "</b></li>";
        }).join("") + "</ul></div>" +
        '<div class="hv-card hv-up"><span class="hv-label">Coming up after that</span><ol class="hv-list">' +
        LESSONS.slice(i + 1, i + 4).map(function (x, k) {
          return '<li><a href="' + lessonHref(x.id) + '"><span class="hv-n">' + (i + k + 2) + "</span><span>" + esc(x.title) + "</span><em>" + x.minutes + " min</em></a></li>";
        }).join("") + (i + 1 >= LESSONS.length ? "<li>You're at the end of Level " + LV.n + ".</li>" : "") + "</ol></div>";
    }
    var uc = $("#unit-cards");
    if (uc) uc.innerHTML = UNITS.map(function (u, k) {
      var ls = LESSONS.filter(function (x) { return x.unit === u.id; }), d = ls.filter(function (x) { return isDone(x.id); }).length;
      var m = ls.reduce(function (a, x) { return a + x.minutes; }, 0);
      var first = ls.find(function (x) { return !isDone(x.id); }) || ls[0];
      return '<a class="unit-card" href="' + lessonHref(first.id) + '"><span class="uc-num">Unit ' + (k + 1) + "</span>" +
        "<strong>" + esc(u.title.replace(/^Unit \d+ · /, "")) + "</strong><span class=\"uc-blurb\">" + esc(u.blurb) + "</span>" +
        '<span class="uc-meta">' + ls.length + " lessons · " + m + " min · " + d + "/" + ls.length + " done</span>" +
        '<span class="bar"><span style="width:' + Math.round(100 * d / ls.length) + '%"></span></span>' +
        '<span class="uc-go">' + (d === ls.length ? "Review unit" : d ? "Continue unit" : "Start unit") + " →</span></a>";
    }).join("");
    var ab = $("#all-btn");
    if (ab) { ab.href = lessonsHref(LV.n); ab.textContent = "See all Level " + LV.n + " lessons"; }
    var pt = $("#path-tiles");
    if (pt) {
      var gloss = uniqueTermCount();
      var tile = function (href, label, title, text, meta, go, bar) {
        return '<a class="unit-card path-tile" href="' + href + '"><span class="uc-num">' + label + "</span><strong>" + title + '</strong><span class="uc-blurb">' + text + "</span>" +
          '<span class="uc-meta">' + meta + "</span>" + (bar != null ? '<span class="bar"><span style="width:' + bar + '%"></span></span>' : "") + '<span class="uc-go">' + go + " →</span></a>";
      };
      pt.innerHTML =
        tile(lessonsHref(LV.n), "Level " + LV.n + " · " + esc(LV.name), "All lessons", "Every lesson in this level on one page, grouped into its " + UNITS.length + " units.", n + " of " + LESSONS.length + " done", "See all lessons", pct) +
        tile("review.html", "Practise", "Review and tests", "Ten-question rounds on terms you’ve learned, plus a test at the end of each level.", "A certificate for each level", "Start reviewing") +
        tile("glossary.html", "Reference", "Glossary", "Every key term from every level in plain English, A to Z.", gloss + " key terms", "Open the glossary") +
        tile(toolsHref(), "Real-world AI", "AI tools directory", "Over " + Math.floor(TOOLS.length / 10) * 10 + " AI tools, A to Z and by job, each with its own page.", TOOLS.length + " tools", "Browse the tools") +
        tile("me.html", "Your space", "My learning", "Your streak, daily goal, notes, certificates and save code.", "All in one place", "Open My learning");
    }
    initSearch();
    var cta = $("#cta-btn"), start = $("#start-btn");
    if (cta && start) { cta.href = start.getAttribute("href"); cta.textContent = start.textContent; }
  }

  /* Home page search: lessons (title, summary, text) and key terms, plus a sliding row of topic buttons. */
  var searchReady = false;
  function initSearch() {
    var form = $("#hero-search"), q = $("#hero-q"), out = $("#hero-results"), chips = $("#topic-chips");
    if (!form || searchReady) return;
    searchReady = true;
    var strip = function (h) { return String(h).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").toLowerCase(); };
    var index = ALL.map(function (l) { return { l: l, n: lessonTag(l), t: l.title.toLowerCase(), s: l.summary.toLowerCase(), b: strip(l.body || ""), terms: l.terms }; });
    function run(text) {
      var words = text.toLowerCase().trim().split(/\s+/).filter(Boolean);
      if (!words.length) { out.hidden = true; out.innerHTML = ""; return; }
      var lessons = index.map(function (x) {
        var sc = 0;
        words.forEach(function (w) { if (x.t.indexOf(w) >= 0) sc += 6; if (x.s.indexOf(w) >= 0) sc += 3; if (x.b.indexOf(w) >= 0) sc += 1; });
        return { x: x, sc: sc };
      }).filter(function (r) { return r.sc > 0; }).sort(function (a, b) { return b.sc - a.sc; }).slice(0, 5);
      var terms = [];
      index.forEach(function (x) { x.terms.forEach(function (t) {
        var hay = (t[0] + " " + t[1]).toLowerCase();
        if (words.every(function (w) { return hay.indexOf(w) >= 0; })) terms.push({ t: t, x: x });
      }); });
      terms = terms.slice(0, 4);
      var tools = TOOLS.map(function (t) {
        var sc = 0, n = t.name.toLowerCase(), hay = (t.maker + " " + t.blurb + " " + catOf(t).name).toLowerCase();
        words.forEach(function (w) { if (n.indexOf(w) >= 0) sc += 6; if (hay.indexOf(w) >= 0) sc += 2; });
        return { t: t, sc: sc };
      }).filter(function (r) { return r.sc > 0; }).sort(function (a, b) { return b.sc - a.sc; }).slice(0, 4);
      out.innerHTML = (lessons.length ? '<p class="sr-head">Lessons</p>' + lessons.map(function (r) {
          return '<a class="sr-item" href="' + lessonHref(r.x.l.id) + '"><span class="sr-n">' + r.x.n + "</span><span><strong>" + esc(r.x.l.title) + "</strong><small>" + esc(r.x.l.summary) + "</small></span></a>";
        }).join("") : "") +
        (terms.length ? '<p class="sr-head">Key terms</p>' + terms.map(function (r) {
          return '<a class="sr-item" href="' + lessonHref(r.x.l.id) + '"><span class="sr-n">' + r.x.n + "</span><span><strong>" + esc(r.t[0]) + "</strong><small>" + esc(r.t[1]) + "</small></span></a>";
        }).join("") : "") +
        (tools.length ? '<p class="sr-head">AI tools</p>' + tools.map(function (r) {
          return '<a class="sr-item" href="' + toolHref(r.t.id) + '"><span class="sr-n">Tool</span><span><strong>' + esc(r.t.name) + "</strong><small>" + esc(r.t.blurb) + "</small></span></a>";
        }).join("") : "") +
        (!lessons.length && !terms.length && !tools.length ? '<p class="sr-none">Nothing found for "' + esc(text) + '", Abbas. Try a simpler word, like "data" or "chatbot".</p>' : "");
      out.hidden = false;
    }
    q.addEventListener("input", function () { run(q.value); });
    form.addEventListener("submit", function (e) { e.preventDefault(); run(q.value); var first = out.querySelector("a"); if (first) first.focus(); });
    document.addEventListener("click", function (e) { if (!form.contains(e.target) && !out.contains(e.target) && !(chips && chips.parentNode.contains(e.target))) out.hidden = true; });
    q.addEventListener("keydown", function (e) { if (e.key === "Escape") { out.hidden = true; } });

    var topics = ["Chatbots", "Neural networks", "Prompting", "Machine learning", "Python", "Data", "pandas", "Bias", "Generative AI", "Statistics", "Probability", "Deep learning", "Algorithms", "Matrices", "Overfitting", "Random forests", "Clustering", "Fairness", "Transformers", "Attention", "Diffusion", "RAG", "Agents", "Fine-tuning", "Evals", "Security", "Red teaming", "Drift", "Interpretability", "Careers", "Computer vision", "Ethics", "AI laws", "Privacy", "History", "Accuracy"];
    if (chips) {
      chips.innerHTML = topics.map(function (t) { return '<button type="button" class="topic-chip">' + esc(t) + "</button>"; }).join("");
      chips.addEventListener("click", function (e) {
        var b = e.target.closest(".topic-chip"); if (!b || chips.dataset.dragged) return;
        chips.querySelectorAll(".topic-chip").forEach(function (c) { c.classList.toggle("on", c === b); });
        q.value = b.textContent; run(b.textContent);
      });
      var slider = chips.parentNode;
      slider.querySelector(".ts-prev").onclick = function () { chips.scrollBy({ left: -chips.clientWidth * 0.7, behavior: "smooth" }); };
      slider.querySelector(".ts-next").onclick = function () { chips.scrollBy({ left: chips.clientWidth * 0.7, behavior: "smooth" }); };
      var edges = function () {
        slider.classList.toggle("at-start", chips.scrollLeft < 4);
        slider.classList.toggle("at-end", chips.scrollLeft + chips.clientWidth > chips.scrollWidth - 4);
      };
      chips.addEventListener("scroll", edges, { passive: true }); window.addEventListener("resize", edges); edges();
      // Drag to slide with a mouse; touch screens swipe natively.
      var down = false, startX = 0, startL = 0;
      chips.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; startX = e.clientX; startL = chips.scrollLeft; delete chips.dataset.dragged; });
      window.addEventListener("pointermove", function (e) { if (!down) return; var dx = e.clientX - startX; if (Math.abs(dx) > 5) chips.dataset.dragged = "1"; chips.scrollLeft = startL - dx; });
      window.addEventListener("pointerup", function () { if (!down) return; down = false; setTimeout(function () { delete chips.dataset.dragged; }, 0); });
    }
  }

  /* ---------- lesson page ---------- */
  function renderLesson() {
    var l = lessonById(currentLessonId()) || ALL[0];
    setLevel(levelOf(l));
    var idx = LESSONS.indexOf(l), at = ALL.indexOf(l), prev = ALL[at - 1], nxt = ALL[at + 1];
    document.title = l.title + " · Abbas’ AI Academy";

    var html =
      '<p class="crumbs"><a href="' + lessonsHref(LV.n) + '">Level ' + LV.n + ": " + esc(LV.name) + '</a> › ' + (unitOf(l) ? esc(unitOf(l).title) + " › " : "") + "Lesson " + (idx + 1) + " of " + LESSONS.length + "</p>" +
      '<span class="eyebrow">Lesson ' + (idx + 1) + " · " + l.minutes + " min read</span>" +
      "<h1>" + esc(l.title) + "</h1>" +
      '<p class="lead">' + esc(l.summary) + "</p>" +
      l.body +
      "<h2>Key terms</h2><ul class=\"terms\">" +
      l.terms.map(function (t) { return "<li><dfn>" + esc(t[0]) + "</dfn>: " + esc(t[1]) + "</li>"; }).join("") +
      "</ul>" +
      '<section class="quiz" id="quiz"><h2>Check your understanding</h2>' +
      "<p>Get at least " + passMark(l) + " of " + l.quiz.length + " right to complete this lesson.</p>" +
      '<div id="questions"></div><div id="quiz-result"></div></section>' +
      renderSources(l) +
      '<nav class="pager">' +
      (prev ? '<a class="btn secondary" href="' + lessonHref(prev.id) + '">← ' + esc(prev.title) + "</a>" : '<a class="btn secondary" href="' + lessonsHref(LV.n) + '">← All lessons</a>') +
      (idx < LESSONS.length - 1 ? '<a class="btn" id="next-btn" href="' + lessonHref(nxt.id) + '">Next: ' + esc(nxt.title) + " →</a>" :
        nxt ? '<a class="btn" id="next-btn" href="' + lessonHref(nxt.id) + '">Start Level ' + nxt.level + ": " + esc(levelOf(nxt).name) + " →</a>" :
        '<a class="btn" id="next-btn" href="' + lessonsHref(LV.n) + '#certificate">Finish Level ' + LV.n + " →</a>") +
      "</nav>";

    $("#lesson").innerHTML = html;
    linkTools($("#lesson"));
    mountWidgets($("#lesson"));
    renderQuiz(l);
    window.scrollTo(0, 0);
  }

  function unitOf(l) {
    return levelOf(l).units.find(function (u) { return u.id === l.unit; });
  }

  function renderSources(l) {
    if (!l.sources || !l.sources.length) return "";
    return '<section class="sources"><h2>Sources and further reading</h2>' +
      "<p>This lesson is written in our own words. These are the sources we used to check facts and decide what to cover, and they're great next steps if you want to go deeper.</p><ul>" +
      l.sources.map(function (s) {
        return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + "</a>" + (s[2] ? " · <span>" + esc(s[2]) + "</span>" : "") + "</li>";
      }).join("") + "</ul></section>";
  }

  function passMark(l) { return Math.ceil(l.quiz.length * 0.66); }

  /* Mix up the order of answer options each time, so the right answer isn't always in the same place.
     Options like "All of them" stay last, where they read naturally. */
  function mixOptions(item) {
    var idx = item.options.map(function (_, i) { return i; });
    var last = idx.filter(function (i) { return /^(all|none|both) of (them|these|the above)$|^(all|both|neither) /i.test(item.options[i]) && /^(all of|none of|both of|neither)/i.test(item.options[i]); });
    var rest = idx.filter(function (i) { return last.indexOf(i) < 0; });
    for (var i = rest.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = rest[i]; rest[i] = rest[j]; rest[j] = t; }
    var order = rest.concat(last);
    return { q: item.q, explain: item.explain, options: order.map(function (i) { return item.options[i]; }), answer: order.indexOf(item.answer) };
  }

  function renderQuiz(l) {
    var box = $("#questions");
    var answered = 0, correct = 0;
    l.quiz.map(mixOptions).forEach(function (item, qi) {
      var q = document.createElement("div");
      q.className = "q";
      q.innerHTML = "<p>" + (qi + 1) + ". " + esc(item.q) + "</p>";
      item.options.forEach(function (opt, oi) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "opt"; b.textContent = opt;
        b.onclick = function () {
          var buttons = q.querySelectorAll(".opt");
          buttons.forEach(function (x) { x.disabled = true; });
          buttons[item.answer].classList.add("right");
          if (oi !== item.answer) b.classList.add("wrong"); else correct++;
          var ex = document.createElement("div");
          ex.className = "explain";
          ex.textContent = (oi === item.answer ? "Correct, Abbas. " : "Not quite, Abbas. ") + item.explain;
          q.appendChild(ex);
          answered++;
          if (answered === l.quiz.length) finish();
        };
        q.appendChild(b);
      });
      box.appendChild(q);
    });

    function finish() {
      var passed = correct >= passMark(l);
      var prev = progress[l.id] || {};
      if (passed && !prev.passed && typeof logDay === "function") logDay("l");
      progress[l.id] = { passed: passed || !!prev.passed, best: Math.max(correct, prev.best || 0) };
      save(progress);
      if (passed) celebrate();
      var r = $("#quiz-result");
      r.innerHTML = '<div class="result ' + (passed ? "pass" : "fail") + '">' +
        "Abbas, you scored " + correct + " / " + l.quiz.length + ". " +
        (passed ? "Lesson complete, well done! ✓" : "Have another read and try again. You've got this.") + "</div>" +
        (passed ? "" : '<button class="btn secondary" type="button" id="retry">Retry quiz</button>');
      var retry = $("#retry");
      if (retry) retry.onclick = function () { $("#questions").innerHTML = ""; r.innerHTML = ""; renderQuiz(l); };
      if (passed && doneCount() === LESSONS.length) {
        r.innerHTML += '<div class="result pass">Congratulations, Abbas! You\'ve finished every Level ' + LV.n + ' lesson. <a href="' + lessonsHref(LV.n) + '#certificate">See your completion badge</a>.</div>';
      }
    }
  }

  /* ---------- interactive widgets ---------- */
  var WIDGETS = {
    "is-it-ai": function (el) {
      var items = [
        ["A calculator adding two numbers", false, "It follows fixed rules; nothing is learned."],
        ["Your phone grouping photos by the people in them", true, "Face recognition learns from examples."],
        ["A spam filter that improves as you mark emails as junk", true, "It learns from your labels."],
        ["A light that turns on at exactly 7pm every day", false, "A simple timer rule, not learning."],
        ["A chatbot answering questions in plain English", true, "Language models learn from huge amounts of text."],
        ["A spreadsheet totalling a column", false, "A fixed formula, no learning involved."]
      ];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: AI or not AI?</h3><p>For each one, decide whether it's AI (learns from data) or just ordinary rules.</p>";
      items.forEach(function (it) {
        var row = document.createElement("div");
        row.className = "sort-item";
        row.innerHTML = "<span>" + esc(it[0]) + '</span><button class="chip" type="button">AI</button><button class="chip" type="button">Not AI</button><div class="feedback"></div>';
        var btns = row.querySelectorAll(".chip");
        [true, false].forEach(function (guess, i) {
          btns[i].onclick = function () {
            btns.forEach(function (b) { b.className = "chip"; });
            var ok = guess === it[1];
            btns[i].classList.add(ok ? "yes" : "no");
            row.querySelector(".feedback").textContent = (ok ? "✓ " : "✗ ") + it[2];
          };
        });
        el.appendChild(row);
      });
    },

    "ml-sort": function (el) {
      var items = [
        ["Predicting if an X-ray shows a broken bone, using labelled X-rays", "Supervised"],
        ["Grouping news articles by topic with no categories given", "Unsupervised"],
        ["An AI learning to play a video game by maximising its score", "Reinforcement"],
        ["Estimating a used car's price from past sales", "Supervised"],
        ["Flagging unusual network traffic that might be a hacker", "Unsupervised"]
      ];
      var kinds = ["Supervised", "Unsupervised", "Reinforcement"];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: which type of learning?</h3>";
      items.forEach(function (it) {
        var row = document.createElement("div");
        row.className = "sort-item";
        row.innerHTML = "<span>" + esc(it[0]) + "</span>" + kinds.map(function (k) { return '<button class="chip" type="button">' + k + "</button>"; }).join("");
        var btns = row.querySelectorAll(".chip");
        btns.forEach(function (b, i) {
          b.onclick = function () {
            btns.forEach(function (x) { x.className = "chip"; });
            b.classList.add(kinds[i] === it[1] ? "yes" : "no");
          };
        });
        el.appendChild(row);
      });
    },

    "neuron": function (el) {
      el.className = "panel";
      el.innerHTML =
        "<h3>Try it: a beach-trip neuron</h3>" +
        "<p><strong>Inputs</strong> (0 = no, 1 = yes)</p>" +
        slider("sun", "Sunny?", 0, 1, 1, 1) +
        slider("friends", "Friends going?", 0, 1, 1, 0) +
        slider("work", "Work to do?", 0, 1, 1, 1) +
        "<p><strong>Weights</strong> (how much each matters; negative means it puts you off)</p>" +
        slider("wSun", "Sun weight", -5, 5, 0.5, 3) +
        slider("wFriends", "Friends weight", -5, 5, 0.5, 2) +
        slider("wWork", "Work weight", -5, 5, 0.5, -4) +
        slider("bias", "Bias", -5, 5, 0.5, -1) +
        '<div class="neuron-out" aria-live="polite"></div>';
      function slider(id, label, min, max, step, val) {
        return '<label class="slider-row"><span>' + label + '</span><input type="range" data-k="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"><output></output></label>';
      }
      function update() {
        var v = {};
        el.querySelectorAll("input").forEach(function (inp) {
          v[inp.dataset.k] = parseFloat(inp.value);
          inp.nextElementSibling.textContent = inp.value;
        });
        var sum = v.sun * v.wSun + v.friends * v.wFriends + v.work * v.wWork + v.bias;
        var p = 1 / (1 + Math.exp(-sum));
        el.querySelector(".neuron-out").innerHTML =
          "Weighted sum = " + sum.toFixed(1) + " → activation (sigmoid) = <strong>" + Math.round(p * 100) + "%</strong><br>" +
          (p >= 0.5 ? "The neuron fires: <strong>go to the beach!</strong>" : "The neuron stays quiet: <strong>stay home.</strong>");
      }
      el.addEventListener("input", update);
      update();
    },

    "ethics-check": function (el) {
      var items = [
        ["Using AI to suggest titles for your school essay, then choosing one yourself", "Low risk"],
        ["Letting AI alone decide who gets a job interview", "High risk"],
        ["Sharing an AI-generated video of a politician without checking if it's real", "High risk"],
        ["Asking AI to explain a hard topic, then checking a textbook", "Low risk"]
      ];
      var kinds = ["Low risk", "High risk"];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: low or high risk?</h3>";
      items.forEach(function (it) {
        var row = document.createElement("div");
        row.className = "sort-item";
        row.innerHTML = "<span>" + esc(it[0]) + "</span>" + kinds.map(function (k) { return '<button class="chip" type="button">' + k + "</button>"; }).join("");
        var btns = row.querySelectorAll(".chip");
        btns.forEach(function (b, i) {
          b.onclick = function () {
            btns.forEach(function (x) { x.className = "chip"; });
            b.classList.add(kinds[i] === it[1] ? "yes" : "no");
          };
        });
        el.appendChild(row);
      });
    },

    /* ===== AI tools level activities ===== */
    /* Pick a job and see which tools to try first. */
    "tool-finder": function (el) {
      el.className = "panel";
      el.innerHTML = "<h3>Try it: which tool for the job?</h3><p>Pick a job you often do. You'll see good tools to try first; hover over a name for a summary, or click it to open its page.</p>" +
        '<div class="chip-row">' + TOOL_JOBS.map(function (j, i) { return '<button class="chip" type="button" data-j="' + i + '">' + esc(j.job) + "</button>"; }).join("") + "</div>" +
        '<div class="tf-out" aria-live="polite"><p class="rv-note"><em>Choose a job above.</em></p></div>';
      var out = el.querySelector(".tf-out");
      el.querySelectorAll("[data-j]").forEach(function (b) {
        b.onclick = function () {
          el.querySelectorAll("[data-j]").forEach(function (x) { x.classList.toggle("yes", x === b); });
          var j = TOOL_JOBS[+b.dataset.j];
          out.innerHTML = '<p class="tf-tip">' + esc(j.tip) + '</p><div class="td-grid">' + j.tools.map(toolById).filter(Boolean).map(toolItem).join("") + "</div>";
        };
      });
    },

    /* Build and save a personal toolkit: one tool per job. Saved in this browser. */
    "toolkit": function (el) {
      var KIT = "aiAcademy.toolkit.v1", kit = loadKey(KIT);
      el.className = "panel";
      function summary() {
        var picked = TOOL_JOBS.filter(function (j) { return kit[j.id]; });
        return picked.length ? '<p><strong>Your toolkit, Abbas (' + picked.length + " of " + TOOL_JOBS.length + " jobs):</strong></p><ul class=\"tk-list\">" + picked.map(function (j) {
          var t = toolById(kit[j.id]); return t ? "<li>" + esc(j.job) + ": " + toolLink(t) + "</li>" : "";
        }).join("") + "</ul>" : '<p class="rv-note"><em>Nothing picked yet. Choose a tool for any job you do.</em></p>';
      }
      el.innerHTML = "<h3>Try it: build your personal AI toolkit</h3><p>For each job, choose the tool you'll try first. Your choices are saved in this browser.</p>" +
        '<div class="tk-grid">' + TOOL_JOBS.map(function (j) {
          return '<label class="tk-row"><span>' + esc(j.job) + '</span><select data-k="' + j.id + '"><option value="">Not for me yet</option>' +
            j.tools.map(toolById).filter(Boolean).map(function (t) { return '<option value="' + t.id + '"' + (kit[j.id] === t.id ? " selected" : "") + ">" + esc(t.name) + "</option>"; }).join("") + "</select></label>";
        }).join("") + "</div>" + '<div class="tk-sum" aria-live="polite">' + summary() + "</div>";
      el.querySelectorAll("select").forEach(function (s) {
        s.onchange = function () { if (s.value) kit[s.dataset.k] = s.value; else delete kit[s.dataset.k]; saveKey(KIT, kit); el.querySelector(".tk-sum").innerHTML = summary(); };
      });
    },

    /* Put an image prompt together from its parts. */
    "image-prompt": function (el) {
      var parts = [
        ["Subject", ["a red fox reading a newspaper", "an old lighthouse", "a busy street food market", "a cup of coffee on a wooden table"]],
        ["Setting", ["in a Paris café", "on a stormy cliff", "in Lagos at night", "by a rainy window"]],
        ["Style", ["photograph", "watercolour painting", "1950s travel poster", "flat vector illustration"]],
        ["Composition", ["close-up", "wide shot", "view from above", "centred, with space for a title"]],
        ["Lighting and mood", ["golden hour, warm and calm", "soft studio light", "moody and dramatic", "bright and cheerful"]]
      ];
      var pick = [0, -1, -1, -1, -1];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: build an image prompt</h3><p>Choose one option from each row (click again to remove it) and watch the prompt take shape. Then paste it into any image tool.</p>" +
        parts.map(function (p, r) { return '<p class="ip-head">' + p[0] + '</p><div class="chip-row">' + p[1].map(function (o, i) { return '<button class="chip' + (pick[r] === i ? " yes" : "") + '" type="button" data-r="' + r + '" data-i="' + i + '">' + esc(o) + "</button>"; }).join("") + "</div>"; }).join("") +
        '<div class="neuron-out prompt-out" aria-live="polite"></div>';
      function update() {
        var bits = pick.map(function (i, r) { return i < 0 ? null : parts[r][1][i]; });
        var n = bits.filter(Boolean).length;
        var text = [bits[2] ? bits[2] + " of " + (bits[0] || "something") : bits[0], bits[1], bits[3], bits[4]].filter(Boolean).join(", ");
        el.querySelector(".prompt-out").innerHTML = (text ? "<em>" + esc(text.charAt(0).toUpperCase() + text.slice(1)) + "</em>" : "<em>(empty prompt)</em>") + "<br><br><strong>" +
          (n <= 1 ? "Vague: the tool will choose style, setting and lighting for you." : n <= 3 ? "Better: you're steering the picture." : "Specific: you'll get much closer to what you imagined.") + "</strong>";
      }
      el.querySelectorAll("[data-r]").forEach(function (b) {
        b.onclick = function () {
          var r = +b.dataset.r, i = +b.dataset.i;
          pick[r] = pick[r] === i ? -1 : i;
          el.querySelectorAll('[data-r="' + r + '"]').forEach(function (x) { x.classList.toggle("yes", pick[r] === +x.dataset.i); });
          update();
        };
      });
      update();
    },

    /* Reusable sorting activity. Data lives in window.SORT_SETS (lessons.js). */
    "sort": function (el) {
      var set = (window.SORT_SETS || {})[el.dataset.set];
      if (!set) return;
      el.className = "panel";
      el.innerHTML = "<h3>" + esc(set.title) + "</h3>";
      set.items.forEach(function (it) {
        var row = document.createElement("div");
        row.className = "sort-item";
        row.innerHTML = "<span>" + esc(it[0]) + "</span>" + set.choices.map(function (k) { return '<button class="chip" type="button">' + esc(k) + "</button>"; }).join("") + '<div class="feedback"></div>';
        var btns = row.querySelectorAll(".chip");
        btns.forEach(function (b, i) {
          b.onclick = function () {
            btns.forEach(function (x) { x.className = "chip"; });
            var ok = set.choices[i] === it[1];
            b.classList.add(ok ? "yes" : "no");
            row.querySelector(".feedback").textContent = (ok ? "✓ " : "✗ Answer: " + it[1] + ". ") + (it[2] || "");
          };
        });
        el.appendChild(row);
      });
    },

    /* Lesson 3: compare breadth-first search with heuristic (greedy best-first) search on a grid. */
    "route-search": function (el) {
      var MAP = [
        "..........",
        "..........",
        "S...#.....",
        "....#.....",
        "....#....G",
        "..........",
        ".........."
      ];
      var R = MAP.length, C = MAP[0].length, start, goal;
      MAP.forEach(function (row, r) { row.split("").forEach(function (ch, c) { if (ch === "S") start = [r, c]; if (ch === "G") goal = [r, c]; }); });
      el.className = "panel";
      el.innerHTML = "<h3>Try it: two ways to search a maze</h3>" +
        "<p>Find a route from <b>S</b> to <b>G</b>. Breadth-first search spreads out evenly in all directions. A* search uses a heuristic: it favours squares where the steps taken so far plus a straight-line guess of the steps left is smallest. Watch how many squares each one has to explore.</p>" +
        '<div class="chip-row"><button class="chip" type="button" data-m="bfs">Run breadth-first</button><button class="chip" type="button" data-m="astar">Run A* search</button></div>' +
        '<div class="maze" style="grid-template-columns:repeat(' + C + ',1fr)"></div><p class="neuron-out maze-out" aria-live="polite">Pick a search method.</p>';
      var grid = el.querySelector(".maze"), cells = [];
      for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
        var d = document.createElement("div");
        var ch = MAP[r][c];
        d.className = "cell" + (ch === "#" ? " wall" : "");
        d.textContent = ch === "S" || ch === "G" ? ch : "";
        grid.appendChild(d); cells.push(d);
      }
      var timer = null;
      function key(p) { return p[0] * C + p[1]; }
      function run(mode) {
        clearInterval(timer);
        cells.forEach(function (d) { d.classList.remove("seen", "path"); });
        var h = function (p) { return Math.abs(p[0] - goal[0]) + Math.abs(p[1] - goal[1]); };
        var frontier = [start], came = {}, g = {}, done = {}, order = [];
        g[key(start)] = 0;
        while (frontier.length) {
          // A* tries the square with the lowest (steps so far + estimated steps left); breadth-first just takes the oldest.
          if (mode === "astar") frontier.sort(function (a, b) { return (g[key(a)] + h(a)) - (g[key(b)] + h(b)) || h(a) - h(b); });
          var cur = frontier.shift();
          if (done[key(cur)]) continue;
          done[key(cur)] = true;
          order.push(cur);
          if (cur[0] === goal[0] && cur[1] === goal[1]) break;
          [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (dlt) {
            var n = [cur[0] + dlt[0], cur[1] + dlt[1]];
            if (n[0] < 0 || n[1] < 0 || n[0] >= R || n[1] >= C || MAP[n[0]][n[1]] === "#") return;
            var ng = g[key(cur)] + 1;
            if (g[key(n)] === undefined || ng < g[key(n)]) { g[key(n)] = ng; came[key(n)] = cur; frontier.push(n); }
          });
        }
        var path = [], p = goal;
        while (p && key(p) !== key(start)) { path.push(p); p = came[key(p)]; }
        var i = 0, out = el.querySelector(".maze-out");
        timer = setInterval(function () {
          if (i < order.length) { cells[key(order[i])].classList.add("seen"); i++; out.textContent = "Squares explored: " + i; return; }
          clearInterval(timer);
          path.forEach(function (q) { cells[key(q)].classList.add("path"); });
          out.innerHTML = (mode === "bfs" ? "Breadth-first" : "A*") + " search explored <strong>" + order.length + "</strong> squares and found a route " + path.length + " steps long." +
            (mode === "bfs" ? " Breadth-first always finds the shortest route, but checks a lot." : " The heuristic steered it towards the goal, so it found an equally short route while exploring fewer squares.");
        }, 45);
      }
      el.querySelectorAll("[data-m]").forEach(function (b) { b.onclick = function () { run(b.dataset.m); }; });
    },

    /* Lesson 4: Bayes with natural counts. */
    "bayes": function (el) {
      el.className = "panel";
      el.innerHTML = "<h3>Try it: the base-rate calculator</h3><p>Change the numbers for a medical test and see what a positive result really means, counted out of 10,000 people.</p>" +
        sl("base", "How common (%)", 0.1, 30, 0.1, 1) + sl("sens", "Catches (%)", 50, 100, 1, 90) + sl("fa", "False alarms (%)", 0, 30, 0.5, 9) +
        '<div class="neuron-out" aria-live="polite"></div>';
      function sl(id, label, min, max, step, val) {
        return '<label class="slider-row"><span>' + label + '</span><input type="range" data-k="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"><output></output></label>';
      }
      function update() {
        var v = {};
        el.querySelectorAll("input").forEach(function (inp) { v[inp.dataset.k] = parseFloat(inp.value); inp.nextElementSibling.textContent = inp.value; });
        var N = 10000, ill = N * v.base / 100, healthy = N - ill;
        var tp = ill * v.sens / 100, fp = healthy * v.fa / 100;
        var post = tp + fp ? tp / (tp + fp) : 0;
        el.querySelector(".neuron-out").innerHTML =
          "Out of 10,000 people, <b>" + Math.round(ill).toLocaleString() + "</b> are ill and the test catches <b>" + Math.round(tp) + "</b> of them. " +
          "Of the <b>" + Math.round(healthy).toLocaleString() + "</b> healthy people, <b>" + Math.round(fp).toLocaleString() + "</b> get a false alarm.<br>" +
          "So if you test positive, the chance you're really ill is <strong>" + (post * 100).toFixed(1) + "%</strong>.";
      }
      el.addEventListener("input", update);
      update();
    },

    /* Lesson 6: fit a line by hand and watch the error. */
    "fit-line": function (el) {
      var pts = [[50, 160], [65, 190], [70, 215], [80, 230], [90, 245], [100, 280], [110, 290], [120, 330], [135, 350], [150, 390]];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: be the gradient descent</h3><p>Each dot is a home: floor area (m²) across, price (£ thousands) up. Move the sliders to fit a line through the dots and make the average error as small as you can.</p>" +
        '<svg class="plot" viewBox="0 0 320 220" role="img" aria-label="Scatter plot of home size against price with an adjustable line"></svg>' +
        '<label class="slider-row"><span>Slope</span><input type="range" data-k="m" min="0" max="4" step="0.05" value="1"><output></output></label>' +
        '<label class="slider-row"><span>Starting price</span><input type="range" data-k="b" min="0" max="200" step="2" value="150"><output></output></label>' +
        '<div class="chip-row"><button class="chip" type="button" data-best>Show the best fit</button></div>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg");
      function X(x) { return 30 + (x - 40) * 2.5; } function Y(y) { return 200 - (y - 100) * 0.62; }
      var n = pts.length, sx = 0, sy = 0, sxy = 0, sxx = 0;
      pts.forEach(function (p) { sx += p[0]; sy += p[1]; sxy += p[0] * p[1]; sxx += p[0] * p[0]; });
      var bestM = (n * sxy - sx * sy) / (n * sxx - sx * sx), bestB = (sy - bestM * sx) / n;
      function mae(m, b) { return pts.reduce(function (a, p) { return a + Math.abs(p[1] - (m * p[0] + b)); }, 0) / n; }
      var bestErr = mae(bestM, bestB);
      function update() {
        var m = parseFloat(el.querySelector('[data-k="m"]').value), b = parseFloat(el.querySelector('[data-k="b"]').value);
        el.querySelectorAll("input").forEach(function (inp) { inp.nextElementSibling.textContent = inp.value; });
        var html = '<line class="axis" x1="30" y1="200" x2="310" y2="200"/><line class="axis" x1="30" y1="10" x2="30" y2="200"/>';
        pts.forEach(function (p) {
          html += '<line class="err" x1="' + X(p[0]) + '" y1="' + Y(p[1]) + '" x2="' + X(p[0]) + '" y2="' + Y(m * p[0] + b) + '"/>';
        });
        pts.forEach(function (p) { html += '<circle class="dot" cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="4.5"/>'; });
        html += '<line class="fit" x1="' + X(40) + '" y1="' + Y(m * 40 + b) + '" x2="' + X(147) + '" y2="' + Y(m * 147 + b) + '"/>';
        svg.innerHTML = html;
        var e = mae(m, b);
        el.querySelector(".neuron-out").innerHTML = "Average error (the <em>loss</em>): <strong>£" + Math.round(e) + "k</strong> per home. " +
          (e < bestErr + 3 ? "Excellent, that's about as good as a straight line gets here." : "The red lines show each error. Try to shrink them.");
      }
      el.querySelector("[data-best]").onclick = function () {
        el.querySelector('[data-k="m"]').value = bestM.toFixed(2); el.querySelector('[data-k="b"]').value = Math.round(bestB); update();
      };
      el.addEventListener("input", update);
      update();
    },

    /* Lesson 8: k-nearest neighbours with fruit. */
    "knn": function (el) {
      var fruit = [[120, 80, "A"], [140, 85, "A"], [155, 70, "A"], [170, 90, "A"], [130, 60, "A"], [160, 55, "A"], [185, 75, "A"],
                   [70, 20, "L"], [90, 15, "L"], [80, 35, "L"], [105, 25, "L"], [60, 30, "L"], [115, 40, "L"], [95, 45, "L"]];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: apple or lemon?</h3><p>Known fruit are plotted by weight (across) and how red they are (up). Move the mystery fruit ★ and choose how many neighbours vote.</p>" +
        '<svg class="plot" viewBox="0 0 320 220" role="img" aria-label="Scatter plot of apples and lemons with a movable mystery fruit"></svg>' +
        '<label class="slider-row"><span>Weight (g)</span><input type="range" data-k="w" min="50" max="200" step="1" value="118"><output></output></label>' +
        '<label class="slider-row"><span>Redness</span><input type="range" data-k="r" min="0" max="100" step="1" value="48"><output></output></label>' +
        '<label class="slider-row"><span>Neighbours (k)</span><input type="range" data-k="k" min="1" max="7" step="2" value="3"><output></output></label>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg");
      function X(w) { return 30 + (w - 50) * 1.8; } function Y(r) { return 200 - r * 1.85; }
      function update() {
        var v = {};
        el.querySelectorAll("input").forEach(function (inp) { v[inp.dataset.k] = parseFloat(inp.value); inp.nextElementSibling.textContent = inp.value; });
        var ranked = fruit.map(function (f) { var dx = X(f[0]) - X(v.w), dy = Y(f[1]) - Y(v.r); return { f: f, d: Math.sqrt(dx * dx + dy * dy) }; })
          .sort(function (a, b) { return a.d - b.d; }).slice(0, v.k);
        var votes = { A: 0, L: 0 };
        var html = '<line class="axis" x1="30" y1="200" x2="310" y2="200"/><line class="axis" x1="30" y1="10" x2="30" y2="200"/>';
        ranked.forEach(function (n) { votes[n.f[2]]++; html += '<line class="link" x1="' + X(v.w) + '" y1="' + Y(v.r) + '" x2="' + X(n.f[0]) + '" y2="' + Y(n.f[1]) + '"/>'; });
        fruit.forEach(function (f) { html += '<circle class="' + (f[2] === "A" ? "apple" : "lemon") + '" cx="' + X(f[0]) + '" cy="' + Y(f[1]) + '" r="6"/>'; });
        html += '<text class="star" x="' + X(v.w) + '" y="' + (Y(v.r) + 6) + '" text-anchor="middle">★</text>';
        svg.innerHTML = html;
        var guess = votes.A > votes.L ? "an apple" : "a lemon";
        el.querySelector(".neuron-out").innerHTML = "The " + v.k + " nearest neighbour" + (v.k > 1 ? "s vote" : " votes") + ": " + votes.A + " apple, " + votes.L + " lemon. Prediction: <strong>" + guess + "</strong>.";
      }
      el.addEventListener("input", update);
      update();
    },

    /* Lesson 9: move the threshold, watch precision and recall trade off. */
    "threshold": function (el) {
      // [spam score 0-100, actually spam?]
      var mail = [[97, 1], [93, 1], [88, 1], [85, 0], [81, 1], [76, 1], [72, 0], [68, 1], [63, 0], [58, 1], [55, 0], [49, 0], [44, 1], [40, 0], [35, 0], [28, 0], [22, 0], [15, 0], [9, 0], [4, 0]];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: set the spam threshold</h3>" +
        "<p>Abbas, an AI has looked at 20 emails and given each one a score from 0 to 100 for how spammy it seems. Some really are spam and some are genuine emails. You choose the cut-off: any email scoring at or above it goes to <b>Junk</b>, and the rest stay in your <b>Inbox</b>.</p>" +
        "<p>Move the slider and watch what happens. Emails in the wrong place turn red: spam that got into your inbox, or a real email sent to junk.</p>" +
        '<label class="slider-row"><span>Cut-off</span><input type="range" min="0" max="100" step="1" value="60" aria-label="Spam cut-off"><output></output></label>' +
        '<div class="mailboxes"><div class="mailbox"><h4>Inbox <span class="box-count" data-box="in"></span></h4><div class="mailrow" data-box="in"></div></div>' +
        '<div class="mailbox junk"><h4>Junk <span class="box-count" data-box="junk"></span></h4><div class="mailrow" data-box="junk"></div></div></div>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var inbox = el.querySelector('.mailrow[data-box="in"]'), junk = el.querySelector('.mailrow[data-box="junk"]');
      function chip(m, flag) {
        var wrong = flag !== !!m[1];
        return '<span class="mail' + (wrong ? " wrong" : "") + '" title="AI score ' + m[0] + '">' + (m[1] ? "SPAM" : "REAL") + "<small>" + m[0] + "</small></span>";
      }
      function update() {
        var t = parseInt(el.querySelector("input").value, 10);
        el.querySelector("output").textContent = t;
        var tp = 0, fp = 0, fn = 0, tn = 0, inH = "", junkH = "";
        mail.forEach(function (m) {
          var flag = m[0] >= t;
          if (flag && m[1]) tp++; else if (flag) fp++; else if (m[1]) fn++; else tn++;
          if (flag) junkH += chip(m, true); else inH += chip(m, false);
        });
        inbox.innerHTML = inH || '<em class="empty">Empty</em>';
        junk.innerHTML = junkH || '<em class="empty">Empty</em>';
        el.querySelector('.box-count[data-box="in"]').textContent = "(" + (fn + tn) + ")";
        el.querySelector('.box-count[data-box="junk"]').textContent = "(" + (tp + fp) + ")";
        var prec = tp + fp ? Math.round(100 * tp / (tp + fp)) : 100, rec = Math.round(100 * tp / (tp + fn));
        el.querySelector(".neuron-out").innerHTML =
          "Spam caught: <b>" + tp + " of " + (tp + fn) + "</b> · Spam that got through: <b>" + fn + "</b> · Real emails wrongly sent to junk: <b>" + fp + "</b><br>" +
          "<b>Precision " + prec + "%</b>: of the emails in Junk, how many really are spam. " +
          "<b>Recall " + rec + "%</b>: of all the spam, how much ended up in Junk.";
      }
      el.addEventListener("input", update);
      update();
    },

    /* Lesson 12: next-token probabilities and temperature. */
    "next-token": function (el) {
      var cands = [["mat", 4.0], ["sofa", 3.2], ["floor", 2.9], ["roof", 2.0], ["keyboard", 1.6], ["moon", 0.2]];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: pick the next token</h3><p>The prompt is <em>“The cat sat on the …”</em>. The bars show the probability the model gives each next word. Change the temperature, then generate a few times.</p>" +
        '<label class="slider-row"><span>Temperature</span><input type="range" min="0.1" max="2" step="0.1" value="1"><output></output></label>' +
        '<div class="bars"></div><div class="chip-row"><button class="chip" type="button">Generate</button></div><div class="neuron-out" aria-live="polite">The cat sat on the …</div>';
      var probs = [];
      function update() {
        var T = parseFloat(el.querySelector("input").value);
        el.querySelector("output").textContent = T.toFixed(1);
        var ex = cands.map(function (c) { return Math.exp(c[1] / T); }), sum = ex.reduce(function (a, b) { return a + b; }, 0);
        probs = ex.map(function (e) { return e / sum; });
        el.querySelector(".bars").innerHTML = cands.map(function (c, i) {
          var pct = Math.round(probs[i] * 100);
          return '<div class="barrow"><span>' + c[0] + '</span><div class="bar"><span style="width:' + pct + '%"></span></div><b>' + pct + "%</b></div>";
        }).join("");
      }
      el.querySelector("button").onclick = function () {
        var r = Math.random(), acc = 0, pick = cands[cands.length - 1][0];
        for (var i = 0; i < probs.length; i++) { acc += probs[i]; if (r <= acc) { pick = cands[i][0]; break; } }
        el.querySelector(".neuron-out").innerHTML = "The cat sat on the <strong>" + pick + "</strong>.";
      };
      el.addEventListener("input", update);
      update();
    },

    /* Lesson 13: build a prompt from parts. */
    "prompt-builder": function (el) {
      var parts = [
        ["Task", "Write a short message inviting my neighbours to a street clean-up."],
        ["Context", "It's this Saturday at 10am, meeting outside number 12. Gloves and bags are provided. Many neighbours are elderly."],
        ["Format", "Make it fit on one flyer: a headline, 3 short bullet points and a one-line sign-off."],
        ["Tone and constraints", "Friendly and warm, plain English, no jargon, under 80 words."],
        ["Example", "Here's a flyer I liked last year: “Spring Clean Day! Join us for tea, biscuits and a tidy street…”"]
      ];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: build a better prompt</h3><p>Switch parts of the prompt on and off and watch it grow from vague to clear.</p>" +
        '<div class="chip-row">' + parts.map(function (p, i) { return '<button class="chip' + (i === 0 ? " yes" : "") + '" type="button" data-i="' + i + '">' + p[0] + "</button>"; }).join("") + "</div>" +
        '<div class="neuron-out prompt-out" aria-live="polite"></div>';
      var on = [true, false, false, false, false];
      function update() {
        var text = parts.filter(function (p, i) { return on[i]; }).map(function (p) { return p[1]; }).join(" ");
        var n = on.filter(Boolean).length;
        var verdict = n <= 1 ? "Vague: the AI will have to guess almost everything." : n <= 3 ? "Better: the AI knows more about what you need." : "Clear and specific: this should get a useful first draft.";
        el.querySelector(".prompt-out").innerHTML = (text ? "<em>" + esc(text) + "</em>" : "<em>(empty prompt)</em>") + "<br><br><strong>" + verdict + "</strong>";
      }
      el.querySelectorAll("[data-i]").forEach(function (b) {
        b.onclick = function () { var i = +b.dataset.i; on[i] = !on[i]; b.classList.toggle("yes", on[i]); update(); };
      });
      update();
    },

    /* ===== Claude in depth activities ===== */

    /* Switch the parts of a Claude-style prompt on and off and see it take shape, with XML tags. */
    "prompt-xml": function (el) {
      var parts = [
        ["Role", "role", "You're a friendly personal finance coach who explains things simply."],
        ["Context", "context", "I'm 34, I rent in Manchester, and I want to start saving for a house deposit. I've never had a budget."],
        ["Document", "document", "(my last three months of bank statements, pasted or uploaded)"],
        ["Task", "task", "Suggest a simple monthly budget and three changes that would save the most money."],
        ["Format", "format", "A short table of categories with suggested amounts, then the three changes as bullet points. Under 250 words."],
        ["Ask first", "questions", "Before you start, ask me up to three questions you need answered to do this well."]
      ];
      var on = [false, false, false, true, false, false];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: build a Claude-style prompt</h3><p>Switch the parts on and off. Notice how the tags keep each part separate, so Claude can't mix up your instructions with your material.</p>" +
        '<div class="chip-row">' + parts.map(function (p, i) { return '<button class="chip' + (on[i] ? " yes" : "") + '" type="button" data-i="' + i + '">' + p[0] + "</button>"; }).join("") + "</div>" +
        '<div class="neuron-out prompt-out" aria-live="polite"></div>';
      function update() {
        var lines = parts.filter(function (p, i) { return on[i]; }).map(function (p) { return "&lt;" + p[1] + "&gt;" + esc(p[2]) + "&lt;/" + p[1] + "&gt;"; });
        var n = on.filter(Boolean).length;
        var verdict = n <= 1 ? "Vague: Claude knows the job but nothing about you, so it will give generic advice." : n <= 3 ? "Better: Claude can tailor its answer to you." : n <= 5 ? "Strong: clear role, background and output." : "Excellent: Claude will check the gaps with you before it starts.";
        el.querySelector(".prompt-out").innerHTML = (lines.length ? '<span class="px-lines">' + lines.join("<br>") + "</span>" : "<em>(empty prompt)</em>") + "<br><br><strong>" + verdict + "</strong>";
      }
      el.querySelectorAll("[data-i]").forEach(function (b) {
        b.onclick = function () { var i = +b.dataset.i; on[i] = !on[i]; b.classList.toggle("yes", on[i]); update(); };
      });
      update();
    },

    /* "My Claude setup": tick off each habit from the level. Saved in this browser. */
    "claude-checklist": function (el) {
      var KEY_CL = "aiAcademy.claudeSetup.v1", done = loadKey(KEY_CL), items = window.CLAUDE_CHECKLIST || [];
      el.className = "panel";
      el.innerHTML = "<h3>Your Claude setup, Abbas</h3><p>Tick each habit once you've done it for real. The link takes you back to the lesson that explains it. Your ticks are saved in this browser.</p>" +
        '<div class="bar cl-bar" role="progressbar" aria-label="Claude setup progress" aria-valuemin="0" aria-valuemax="' + items.length + '"><span></span></div>' +
        '<p class="cl-count" aria-live="polite"></p>' +
        '<ul class="cl-list">' + items.map(function (it) {
          var l = lessonById(it.lesson);
          return '<li><label><input type="checkbox" data-k="' + it.id + '"' + (done[it.id] ? " checked" : "") + "> <span>" + esc(it.text) + "</span></label>" +
            (l ? ' <a class="cl-link" href="' + lessonHref(l.id) + '">Lesson ' + l.num + "</a>" : "") + "</li>";
        }).join("") + "</ul>";
      function update() {
        var n = items.filter(function (it) { return done[it.id]; }).length;
        el.querySelector(".cl-bar").setAttribute("aria-valuenow", n);
        el.querySelector(".cl-bar span").style.width = Math.round(100 * n / Math.max(1, items.length)) + "%";
        el.querySelector(".cl-count").innerHTML = "<strong>" + n + " of " + items.length + "</strong> done" + (n === items.length ? ". You're using Claude to its full potential." : ".");
        return n;
      }
      el.querySelectorAll("input[data-k]").forEach(function (c) {
        c.onchange = function () {
          if (c.checked) done[c.dataset.k] = 1; else delete done[c.dataset.k];
          saveKey(KEY_CL, done);
          if (update() === items.length && c.checked) celebrate();
        };
      });
      update();
    },

    /* ===== Level 2 activities ===== */

    /* Run real Python in the page. Markup: <div data-widget="py" data-title="..."><textarea>code</textarea></div> */
    "py": function (el) {
      var src = el.querySelector("textarea"), start = src ? src.value.replace(/^\n+|\s+$/g, "") : "";
      var title = el.dataset.title || "Try it: run the code";
      el.className = "panel py";
      el.innerHTML = "<h3>" + esc(title) + "</h3>" +
        '<p class="py-status">Change anything you like, then press Run. The first run takes a few seconds while Python loads.</p>' +
        '<label class="sr-only">Python code</label><textarea class="py-code" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>' +
        '<div class="chip-row"><button class="btn" type="button" data-run>Run</button><button class="btn secondary" type="button" data-reset>Reset</button></div>' +
        '<pre class="py-out" aria-live="polite">Output will appear here.</pre>';
      var ta = el.querySelector(".py-code"), out = el.querySelector(".py-out"), run = el.querySelector("[data-run]");
      ta.value = start;
      var fit = function () { ta.style.height = "auto"; ta.style.height = Math.max(120, ta.scrollHeight + 4) + "px"; };
      fit(); ta.addEventListener("input", fit);
      ta.addEventListener("keydown", function (e) {
        if (e.key === "Tab" && !e.shiftKey) { e.preventDefault(); var a = ta.selectionStart; ta.setRangeText("    ", a, ta.selectionEnd, "end"); }
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); run.click(); }
      });
      el.querySelector("[data-reset]").onclick = function () { ta.value = start; fit(); out.className = "py-out"; out.textContent = "Output will appear here."; };
      run.onclick = function () {
        run.disabled = true; out.className = "py-out"; out.textContent = pyLoading ? "Loading Python…" : "Running…";
        getPython().then(function (py) {
          var lines = [];
          py.setStdout({ batched: function (t) { lines.push(t); } });
          py.setStderr({ batched: function (t) { lines.push(t); } });
          var ns = py.globals.get("dict")();
          return py.loadPackagesFromImports(ta.value).then(function () { return py.runPythonAsync(ta.value, { globals: ns }); }).then(function (v) {
            if (v !== undefined && v !== null && !lines.length) lines.push(String(v));
            out.textContent = lines.join("\n") || "(The code ran, but printed nothing. Use print(...) to see a result.)";
          }, function (err) {
            var msg = String(err && err.message || err).trim().split("\n");
            var last = msg[msg.length - 1];
            var lineNo = (String(err && err.message || "").match(/line (\d+)/g) || []).pop();
            out.className = "py-out err";
            if (/Failed to load|No module named '(numpy|pandas)/.test(String(err && err.message || err))) {
              out.textContent = "This example needs an add-on library (NumPy or pandas) that couldn't load just now, Abbas. Check your internet connection and press Run again. If you're on the Claude-hosted copy of the academy, open this lesson on your main academy site instead.";
              return;
            }
            out.textContent = (lines.length ? lines.join("\n") + "\n\n" : "") + "Python found a problem, Abbas" + (lineNo ? " (" + lineNo.replace(/(\d+)/, "$1") + ")" : "") + ":\n" + last;
          });
        }, function () {
          out.className = "py-out err";
          out.textContent = "Python couldn't load, Abbas. Check your internet connection and press Run again. If you're on the Claude-hosted copy of the academy, code boxes only run on your main academy site. (The lesson text explains what this code prints.)";
        }).then(function () { run.disabled = false; });
      };
    },

    /* Mean versus median: drag one salary upwards and watch which average moves. */
    "mean-median": function (el) {
      var base = [24, 27, 29, 31, 33, 35, 38];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: one big salary</h3><p>Seven people in a small team earn these salaries (in £ thousands). Move the slider to give the boss a bigger salary and watch what happens to the mean and the median.</p>" +
        '<svg class="plot" viewBox="0 0 320 120" role="img" aria-label="Salaries on a number line with the mean and median marked"></svg>' +
        '<label class="slider-row"><span>Boss earns</span><input type="range" min="40" max="400" step="5" value="45"><output></output></label>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), inp = el.querySelector("input");
      function update() {
        var boss = +inp.value; inp.nextElementSibling.textContent = boss + "k";
        var all = base.concat([boss]).sort(function (a, b) { return a - b; });
        var mean = all.reduce(function (a, b) { return a + b; }, 0) / all.length;
        var med = (all[3] + all[4]) / 2;
        var X = function (v) { return 14 + (Math.min(v, 400) / 400) * 292; };
        var h = '<line class="axis" x1="14" y1="70" x2="306" y2="70"/>';
        all.forEach(function (v) { h += '<circle class="dot" cx="' + X(v) + '" cy="70" r="5"/>'; });
        h += '<line class="fit" x1="' + X(med) + '" y1="30" x2="' + X(med) + '" y2="90"/><text x="' + X(med) + '" y="24" text-anchor="middle" font-size="11">median</text>';
        h += '<line class="err" x1="' + X(mean) + '" y1="40" x2="' + X(mean) + '" y2="100"/><text x="' + X(mean) + '" y="114" text-anchor="middle" font-size="11">mean</text>';
        svg.innerHTML = h;
        el.querySelector(".neuron-out").innerHTML = "Mean (add up and divide): <strong>£" + mean.toFixed(1) + "k</strong>. Median (the middle value): <strong>£" + med.toFixed(1) + "k</strong>. " +
          (mean - med > 10 ? "One extreme value has dragged the mean far above what a typical person earns. The median hardly moved." : "With no extreme values, the mean and median are close together.");
      }
      inp.addEventListener("input", update); update();
    },

    /* Sampling: draw random samples and watch the averages pile up into a bell shape. */
    "sampling": function (el) {
      el.className = "panel";
      el.innerHTML = "<h3>Try it: averages of random samples</h3><p>Each roll of a fair dice is equally likely to be 1 to 6, which is a flat shape, not a bell. Now roll a handful of dice, take their average, and repeat. The chart counts how often each average comes up.</p>" +
        '<label class="slider-row"><span>Dice per sample</span><input type="range" min="1" max="30" step="1" value="1"><output></output></label>' +
        '<div class="chip-row"><button class="chip" type="button" data-n="1">Take 1 sample</button><button class="chip" type="button" data-n="100">Take 100 samples</button><button class="chip" type="button" data-n="1000">Take 1,000 samples</button><button class="chip" type="button" data-clear>Clear</button></div>' +
        '<svg class="plot" viewBox="0 0 320 170" role="img" aria-label="Bar chart of sample averages"></svg>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), inp = el.querySelector("input"), means = [];
      function draw() {
        inp.nextElementSibling.textContent = inp.value;
        var bins = new Array(26).fill(0);
        means.forEach(function (m) { bins[Math.min(25, Math.floor((m - 1) / 5 * 25))]++; });
        var top = Math.max.apply(null, bins.concat([1]));
        var h = '<line class="axis" x1="10" y1="150" x2="310" y2="150"/>';
        bins.forEach(function (c, i) { var bh = 130 * c / top; h += '<rect class="bar-col" x="' + (12 + i * 11.5) + '" y="' + (150 - bh) + '" width="10" height="' + bh + '"/>'; });
        [1, 2, 3, 4, 5, 6].forEach(function (v) { h += '<text x="' + (12 + (v - 1) / 5 * 25 * 11.5) + '" y="165" font-size="11">' + v + "</text>"; });
        svg.innerHTML = h;
        var n = means.length, avg = n ? means.reduce(function (a, b) { return a + b; }, 0) / n : 0;
        var sd = n > 1 ? Math.sqrt(means.reduce(function (a, b) { return a + (b - avg) * (b - avg); }, 0) / (n - 1)) : 0;
        el.querySelector(".neuron-out").innerHTML = n ? "<strong>" + n.toLocaleString() + "</strong> samples so far. Average of the averages: <strong>" + avg.toFixed(2) + "</strong> (the true average of a dice is 3.5). Spread (standard deviation): <strong>" + sd.toFixed(2) + "</strong>. " +
          (+inp.value === 1 ? "With one dice per sample the shape stays flat. Now try 10 or 30 dice per sample." : "More dice per sample gives a narrower bell, centred on 3.5.") : "Press a button to start rolling.";
      }
      el.querySelectorAll("[data-n]").forEach(function (b) {
        b.onclick = function () {
          var k = +inp.value;
          for (var s = 0; s < +b.dataset.n; s++) { var t = 0; for (var j = 0; j < k; j++) t += 1 + Math.floor(Math.random() * 6); means.push(t / k); }
          draw();
        };
      });
      el.querySelector("[data-clear]").onclick = function () { means = []; draw(); };
      inp.addEventListener("input", function () { means = []; draw(); });
      draw();
    },

    /* Correlation: change how strongly two things move together. */
    "correlation": function (el) {
      el.className = "panel";
      el.innerHTML = "<h3>Try it: see a correlation</h3><p>Each dot is one day: hours of sunshine across, ice creams sold up. Move the slider to change how closely they are linked.</p>" +
        '<svg class="plot" viewBox="0 0 320 200" role="img" aria-label="Scatter plot whose correlation you can change"></svg>' +
        '<label class="slider-row"><span>Link strength</span><input type="range" min="-1" max="1" step="0.05" value="0.7"><output></output></label>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), inp = el.querySelector("input");
      // Fixed pseudo-random pairs so the picture is stable.
      var seed = 7, rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      var gauss = function () { return Math.sqrt(-2 * Math.log(rnd() + 1e-9)) * Math.cos(2 * Math.PI * rnd()); };
      var A = [], B = []; for (var i = 0; i < 60; i++) { A.push(gauss()); B.push(gauss()); }
      function update() {
        var r = +inp.value; inp.nextElementSibling.textContent = r.toFixed(2);
        var ys = A.map(function (a, i) { return r * a + Math.sqrt(1 - r * r) * B[i]; });
        var n = A.length, mx = 0, my = 0; A.forEach(function (a, i) { mx += a; my += ys[i]; }); mx /= n; my /= n;
        var sxy = 0, sxx = 0, syy = 0; A.forEach(function (a, i) { sxy += (a - mx) * (ys[i] - my); sxx += (a - mx) * (a - mx); syy += (ys[i] - my) * (ys[i] - my); });
        var rr = sxy / Math.sqrt(sxx * syy);
        var h = '<line class="axis" x1="20" y1="185" x2="310" y2="185"/><line class="axis" x1="20" y1="10" x2="20" y2="185"/>';
        A.forEach(function (a, i) { h += '<circle class="dot" cx="' + (165 + a * 45) + '" cy="' + (97 - ys[i] * 30) + '" r="4"/>'; });
        svg.innerHTML = h;
        var word = Math.abs(rr) > 0.7 ? "strong" : Math.abs(rr) > 0.3 ? "moderate" : "weak or no";
        el.querySelector(".neuron-out").innerHTML = "Correlation coefficient <em>r</em> = <strong>" + rr.toFixed(2) + "</strong>: a " + word + (Math.abs(rr) > 0.3 ? (rr > 0 ? " positive" : " negative") : "") + " link. " +
          (rr > 0.3 ? "When one goes up, the other tends to go up." : rr < -0.3 ? "When one goes up, the other tends to go down." : "Knowing one tells you little about the other.") + " Remember: even a strong correlation does not prove one causes the other.";
      }
      inp.addEventListener("input", update); update();
    },

    /* Slopes: slide along a curve and see the slope, then take gradient descent steps downhill. */
    "slope": function (el) {
      el.className = "panel";
      el.innerHTML = "<h3>Try it: roll downhill</h3><p>The curve is a loss: lower is better. The slope (the derivative) tells you which way is downhill. Press Step to move against the slope, and change the step size (the learning rate).</p>" +
        '<svg class="plot" viewBox="0 0 320 200" role="img" aria-label="A U-shaped curve with a ball and its slope"></svg>' +
        '<label class="slider-row"><span>Learning rate</span><input type="range" min="0.05" max="1.05" step="0.05" value="0.2"><output></output></label>' +
        '<div class="chip-row"><button class="chip" type="button" data-step>Step downhill</button><button class="chip" type="button" data-reset>Start again</button></div>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), inp = el.querySelector("input"), x = -3.6, steps = 0;
      var f = function (v) { return (v - 1) * (v - 1) + 1; }, d = function (v) { return 2 * (v - 1); };
      var X = function (v) { return 160 + (v - 1) * 30; }, Y = function (v) { return 190 - v * 7.5; };
      function draw(msg) {
        inp.nextElementSibling.textContent = (+inp.value).toFixed(2);
        var h = '<line class="axis" x1="10" y1="190" x2="310" y2="190"/><path class="fit" fill="none" d="';
        for (var v = -4; v <= 6.01; v += 0.1) h += (v === -4 ? "M" : "L") + X(v).toFixed(1) + " " + Y(f(v)).toFixed(1) + " ";
        h += '"/>';
        var sl = d(x), x0 = x - 0.9, x1 = x + 0.9;
        h += '<line class="err" x1="' + X(x0) + '" y1="' + Y(f(x) + sl * (x0 - x)) + '" x2="' + X(x1) + '" y2="' + Y(f(x) + sl * (x1 - x)) + '"/>';
        h += '<circle class="dot" cx="' + X(x) + '" cy="' + Y(f(x)) + '" r="7"/>';
        svg.innerHTML = h;
        el.querySelector(".neuron-out").innerHTML = (msg ? msg + " " : "") + "Position <strong>" + x.toFixed(2) + "</strong>, loss <strong>" + f(x).toFixed(2) + "</strong>, slope <strong>" + sl.toFixed(2) + "</strong>" +
          (Math.abs(sl) < 0.05 ? ". The slope is almost zero: you have reached the bottom in " + steps + " steps." : sl < 0 ? ". Negative slope: downhill is to the right." : ". Positive slope: downhill is to the left.");
      }
      el.querySelector("[data-step]").onclick = function () {
        var lr = +inp.value; x = x - lr * d(x); steps++;
        if (Math.abs(x) > 40) { x = -3.6; steps = 0; draw("The steps were so big the ball flew off the chart. A learning rate that is too large makes training blow up."); return; }
        draw(lr >= 1 ? "Too big a step: the ball jumps past the bottom and back again." : "");
      };
      el.querySelector("[data-reset]").onclick = function () { x = -3.6; steps = 0; draw(); };
      inp.addEventListener("input", function () { draw(); });
      draw();
    },

    /* ===== Level 3 activities ===== */

    /* Precision and recall: move the threshold over 40 scored cases and watch the confusion matrix. */
    "pr-tradeoff": function (el) {
      // [model score, truly positive?] for 40 invented screening cases
      var seed = 3, rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      var cases = [];
      for (var i = 0; i < 40; i++) { var pos = i < 12; cases.push([Math.min(0.99, Math.max(0.01, (pos ? 0.68 : 0.32) + (rnd() - 0.5) * 0.7)), pos]); }
      el.className = "panel";
      el.innerHTML = "<h3>Try it: set the threshold</h3><p>Forty patients have been scored by a screening model. Gold dots really have the condition; grey dots don't. Everyone to the right of the line is flagged. Move the line and watch the four boxes.</p>" +
        '<svg class="plot" viewBox="0 0 320 90" role="img" aria-label="Scores of 40 cases on a line from 0 to 1 with a movable threshold"></svg>' +
        '<label class="slider-row"><span>Threshold</span><input type="range" min="0.05" max="0.95" step="0.01" value="0.5"><output></output></label>' +
        '<div class="table-scroll"><table class="cm"><tr><th></th><th>Flagged</th><th>Not flagged</th></tr><tr><th>Has it</th><td data-k="tp"></td><td data-k="fn"></td></tr><tr><th>Doesn\'t</th><td data-k="fp"></td><td data-k="tn"></td></tr></table></div>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), inp = el.querySelector("input");
      function update() {
        var t = +inp.value; inp.nextElementSibling.textContent = t.toFixed(2);
        var c = { tp: 0, fp: 0, fn: 0, tn: 0 }, X = function (v) { return 10 + v * 300; };
        var h = '<line class="axis" x1="10" y1="60" x2="310" y2="60"/><text x="10" y="80" font-size="11">0</text><text x="304" y="80" font-size="11">1</text>';
        var row = {};
        cases.forEach(function (cs) {
          var flag = cs[0] >= t; c[(flag ? (cs[1] ? "tp" : "fp") : (cs[1] ? "fn" : "tn"))]++;
          var bx = Math.round(cs[0] * 30); row[bx] = (row[bx] || 0) + 1;
          h += '<circle class="' + (cs[1] ? "dot" : "dot-off") + '" cx="' + X(cs[0]) + '" cy="' + (56 - (row[bx] - 1) * 9) + '" r="4"/>';
        });
        h += '<line class="fit" x1="' + X(t) + '" y1="5" x2="' + X(t) + '" y2="66"/>';
        svg.innerHTML = h;
        Object.keys(c).forEach(function (k) { el.querySelector('[data-k="' + k + '"]').textContent = c[k] + (k === "fn" ? " missed" : k === "fp" ? " false alarms" : k === "tp" ? " caught" : " correctly clear"); });
        var prec = c.tp + c.fp ? c.tp / (c.tp + c.fp) : 0, rec = c.tp / (c.tp + c.fn);
        el.querySelector(".neuron-out").innerHTML = "Precision <strong>" + Math.round(prec * 100) + "%</strong> (of those flagged, how many really have it). Recall <strong>" + Math.round(rec * 100) + "%</strong> (of those who have it, how many we caught). Accuracy " + Math.round(100 * (c.tp + c.tn) / 40) + "%. " +
          (rec >= 0.99 ? "Nobody is missed, at the cost of more false alarms." : rec < 0.6 ? "Many real cases are being missed. For a screening test, that's the costly mistake." : "Slide left to catch more cases, right for fewer false alarms.");
      }
      inp.addEventListener("input", update); update();
    },

    /* Overfitting: fit curves of different flexibility to noisy points and compare training and test error. */
    "overfit": function (el) {
      var seed = 9, rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      var g = function () { return Math.sqrt(-2 * Math.log(rnd() + 1e-9)) * Math.cos(2 * Math.PI * rnd()); };
      var truth = function (x) { return Math.sin(x * 1.3); };
      var train = [], test = [];
      for (var i = 0; i < 12; i++) { var x = -2.4 + i * 0.43 + (rnd() - 0.5) * 0.2; train.push([x, truth(x) + g() * 0.25]); }
      for (var j = 0; j < 30; j++) { var x2 = -2.4 + rnd() * 4.8; test.push([x2, truth(x2) + g() * 0.25]); }
      el.className = "panel";
      el.innerHTML = "<h3>Try it: too simple, too flexible, just right</h3><p>Gold dots are the training data; grey dots are new test data the model never sees. Raise the flexibility (the polynomial degree) and watch both errors.</p>" +
        '<svg class="plot" viewBox="0 0 320 200" role="img" aria-label="Training and test points with a fitted curve"></svg>' +
        '<label class="slider-row"><span>Flexibility</span><input type="range" min="0" max="11" step="1" value="1"><output></output></label>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), inp = el.querySelector("input");
      // Least squares polynomial fit by solving the normal equations (with a tiny ridge for stability).
      function fit(d) {
        var n = d + 1, A = [], b = [];
        for (var r = 0; r < n; r++) { A.push(new Array(n).fill(0)); b.push(0); }
        train.forEach(function (p) { var xs = []; for (var k = 0; k < n; k++) xs.push(Math.pow(p[0] / 2.4, k));
          for (var r2 = 0; r2 < n; r2++) { b[r2] += xs[r2] * p[1]; for (var c2 = 0; c2 < n; c2++) A[r2][c2] += xs[r2] * xs[c2]; } });
        for (var q = 0; q < n; q++) A[q][q] += 1e-9;
        for (var col = 0; col < n; col++) {
          var piv = col; for (var r3 = col + 1; r3 < n; r3++) if (Math.abs(A[r3][col]) > Math.abs(A[piv][col])) piv = r3;
          var tA = A[col]; A[col] = A[piv]; A[piv] = tA; var tb = b[col]; b[col] = b[piv]; b[piv] = tb;
          for (var r4 = col + 1; r4 < n; r4++) { var f = A[r4][col] / A[col][col]; for (var c4 = col; c4 < n; c4++) A[r4][c4] -= f * A[col][c4]; b[r4] -= f * b[col]; }
        }
        var w = new Array(n).fill(0);
        for (var r5 = n - 1; r5 >= 0; r5--) { var sum = b[r5]; for (var c5 = r5 + 1; c5 < n; c5++) sum -= A[r5][c5] * w[c5]; w[r5] = sum / A[r5][r5]; }
        return function (x) { var y = 0; for (var k = 0; k < n; k++) y += w[k] * Math.pow(x / 2.4, k); return y; };
      }
      var X = function (x) { return 160 + x * 60; }, Y = function (y) { return 100 - y * 55; };
      function mse(f, d) { return d.reduce(function (a, p) { var e = f(p[0]) - p[1]; return a + e * e; }, 0) / d.length; }
      function update() {
        var d = +inp.value; inp.nextElementSibling.textContent = d;
        var f = fit(d), h = '<line class="axis" x1="10" y1="100" x2="310" y2="100"/>', path = "";
        for (var x = -2.5; x <= 2.5; x += 0.025) { var yy = Math.max(-1.7, Math.min(1.7, f(x))); path += (path ? "L" : "M") + X(x).toFixed(1) + " " + Y(yy).toFixed(1) + " "; }
        test.forEach(function (p) { h += '<circle class="dot-off" cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="3.5"/>'; });
        train.forEach(function (p) { h += '<circle class="dot" cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="5"/>'; });
        h += '<path class="fit" fill="none" d="' + path + '"/>';
        svg.innerHTML = h;
        var tr = mse(f, train), te = mse(f, test);
        el.querySelector(".neuron-out").innerHTML = "Training error <strong>" + tr.toFixed(3) + "</strong>, test error <strong>" + (te > 9.99 ? "over 10" : te.toFixed(3)) + "</strong>. " +
          (d <= 1 ? "Underfitting: a straight line can't follow the wave, so both errors are high." : d <= 5 ? "About right: the curve follows the pattern and the test error is low." : "Overfitting: the curve bends to hit every training dot, so training error keeps falling while test error climbs.");
      }
      inp.addEventListener("input", update); update();
    },

    /* k-means, one step at a time. */
    "kmeans": function (el) {
      var seed = 5, rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      var g = function () { return Math.sqrt(-2 * Math.log(rnd() + 1e-9)) * Math.cos(2 * Math.PI * rnd()); };
      var centres = [[80, 60], [230, 70], [150, 150]], pts = [];
      centres.forEach(function (c) { for (var i = 0; i < 25; i++) pts.push([c[0] + g() * 22, c[1] + g() * 18]); });
      var cols = ["km-a", "km-b", "km-c"], cent, assign, stage, steps;
      el.className = "panel";
      el.innerHTML = "<h3>Try it: run k-means by hand</h3><p>Three centroids (the squares) start in random places. Press Step to alternate between the two moves: assign every point to its nearest centroid, then move each centroid to the middle of its points.</p>" +
        '<svg class="plot" viewBox="0 0 320 200" role="img" aria-label="Points being grouped into three clusters"></svg>' +
        '<div class="chip-row"><button class="chip" type="button" data-step>Step</button><button class="chip" type="button" data-reset>New random start</button></div>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg");
      function reset() { cent = [0, 1, 2].map(function () { return [30 + rnd() * 260, 20 + rnd() * 160]; }); assign = pts.map(function () { return -1; }); stage = 0; steps = 0; draw("Press Step to assign each point to its nearest centroid."); }
      function draw(msg) {
        var h = "";
        pts.forEach(function (p, i) { h += '<circle class="' + (assign[i] < 0 ? "dot-off" : cols[assign[i]]) + '" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4"/>'; });
        cent.forEach(function (c, k) { h += '<rect class="' + cols[k] + ' km-centre" x="' + (c[0] - 7).toFixed(1) + '" y="' + (c[1] - 7).toFixed(1) + '" width="14" height="14"/>'; });
        svg.innerHTML = h;
        el.querySelector(".neuron-out").textContent = msg;
      }
      el.querySelector("[data-step]").onclick = function () {
        if (stage === 0) {
          var changed = 0;
          pts.forEach(function (p, i) {
            var best = 0, bd = 1e9;
            cent.forEach(function (c, k) { var d = (p[0] - c[0]) * (p[0] - c[0]) + (p[1] - c[1]) * (p[1] - c[1]); if (d < bd) { bd = d; best = k; } });
            if (assign[i] !== best) changed++; assign[i] = best;
          });
          stage = 1; steps++;
          draw(changed ? "Assigned: " + changed + " points changed colour. Now press Step to move each centroid to the middle of its points." : "No point changed group, so k-means has converged after " + steps + " rounds. Try a new random start: sometimes it settles on a worse answer, which is why it's run several times.");
        } else {
          cent = cent.map(function (c, k) {
            var mine = pts.filter(function (p, i) { return assign[i] === k; });
            if (!mine.length) return c;
            return [mine.reduce(function (a, p) { return a + p[0]; }, 0) / mine.length, mine.reduce(function (a, p) { return a + p[1]; }, 0) / mine.length];
          });
          stage = 0; draw("Centroids moved to the average of their points. Press Step to reassign.");
        }
      };
      el.querySelector("[data-reset]").onclick = reset;
      reset();
    },

    /* ===== Level 4 activities ===== */

    /* Attention: click a word to see which other words it draws information from (illustrative weights). */
    "attention": function (el) {
      var ending = "tired", focus = 7;
      el.className = "panel";
      el.innerHTML = "<h3>Try it: where does each word look?</h3><p>Click any word to see how strongly it attends to the others: darker gold means more attention. Start with <em>it</em>, then switch the last word and watch what <em>it</em> refers to. The weights here are illustrative, chosen to show the kind of pattern trained models really learn.</p>" +
        '<div class="chip-row" role="group" aria-label="Last word"><button class="chip" type="button" data-end="tired">...too tired</button><button class="chip" type="button" data-end="wide">...too wide</button></div>' +
        '<div class="att-row"></div><div class="neuron-out" aria-live="polite"></div>';
      function words() { return ["The", "animal", "didn't", "cross", "the", "street", "because", "it", "was", "too", ending]; }
      function scores(i) {
        var w = words(), s = w.map(function (x, j) { return j === i ? 1 : Math.abs(j - i) === 1 ? 0.6 : 0.15; });
        var t = ending === "tired";
        if (w[i] === "it") { s[1] = t ? 2.2 : 0.4; s[5] = t ? 0.4 : 2.2; s[10] = 1; }
        if (i === 10) { s[7] = 1.4; s[t ? 1 : 5] = 1.2; }
        if (w[i] === "cross") { s[1] = 1.1; s[5] = 1.3; }
        if (w[i] === "didn't") { s[3] = 1.3; }
        if (w[i] === "animal" || w[i] === "street") { s[3] = 1.1; }
        return s;
      }
      function draw() {
        var w = words(), s = scores(focus), e = s.map(function (v) { return Math.exp(2 * v); }), tot = e.reduce(function (a, b) { return a + b; }, 0);
        var p = e.map(function (v) { return v / tot; });
        el.querySelector(".att-row").innerHTML = w.map(function (x, j) {
          var pct = Math.round(p[j] * 100);
          return '<button type="button" class="att-word' + (j === focus ? " att-focus" : "") + '" data-i="' + j + '" style="background:color-mix(in srgb, var(--gold) ' + Math.min(100, Math.round(p[j] * 160)) + '%, transparent)"><span>' + x + "</span><small>" + pct + "%</small></button>";
        }).join("");
        el.querySelectorAll("[data-end]").forEach(function (b) { b.classList.toggle("sel", b.dataset.end === ending); b.setAttribute("aria-pressed", b.dataset.end === ending); });
        var top = -1; p.forEach(function (v, j) { if (j !== focus && (top < 0 || v > p[top])) top = j; });
        el.querySelector(".neuron-out").innerHTML = "<strong>" + w[focus] + "</strong> pays most attention to <strong>" + w[top] + "</strong> (" + Math.round(p[top] * 100) + "%). " +
          (w[focus] === "it" ? (ending === "tired" ? "Animals get tired, so <em>it</em> means the animal." : "Streets are wide, so <em>it</em> means the street.") + " One changed word at the end changes the link, and attention can make it in a single step." : "Its new vector will be a blend of these words' values, weighted by these percentages.");
      }
      el.addEventListener("click", function (ev) {
        var b = ev.target.closest("button"); if (!b) return;
        if (b.dataset.end) ending = b.dataset.end; else if (b.dataset.i) focus = +b.dataset.i;
        draw();
      });
      draw();
    },

    /* Temperature: reshape a next-word distribution and sample from it. */
    "temperature": function (el) {
      var words = ["tea", "coffee", "milk", "water", "soup", "ink"], logits = [3.2, 3.0, 1.6, 1.2, 0.0, -2.0];
      el.className = "panel";
      el.innerHTML = "<h3>Try it: turn the temperature dial</h3><p>A model is choosing the word after <em>\"For breakfast I had a cup of...\"</em>. Move the temperature and watch the probabilities, then sample ten times.</p>" +
        '<svg class="plot" viewBox="0 0 320 170" role="img" aria-label="Probability of each candidate next word"></svg>' +
        '<label class="slider-row"><span>Temperature</span><input type="range" min="0.1" max="2" step="0.05" value="1"><output></output></label>' +
        '<div class="chip-row"><button class="chip" type="button" data-sample>Sample 10 words</button></div>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), inp = el.querySelector("input"), p = [];
      function probs(T) { var z = logits.map(function (l) { return l / T; }), m = Math.max.apply(null, z), e = z.map(function (v) { return Math.exp(v - m); }), s = e.reduce(function (a, b) { return a + b; }, 0); return e.map(function (v) { return v / s; }); }
      function update(msg) {
        var T = +inp.value; inp.nextElementSibling.textContent = T.toFixed(2);
        p = probs(T);
        svg.innerHTML = words.map(function (w, i) {
          var y = 10 + i * 26, bw = Math.max(1, p[i] * 230);
          return '<text x="4" y="' + (y + 13) + '" font-size="12">' + w + '</text><rect class="bar-col" x="60" y="' + y + '" width="' + bw.toFixed(1) + '" height="18"/><text x="' + (66 + bw).toFixed(1) + '" y="' + (y + 13) + '" font-size="11">' + (p[i] < 0.005 ? "<1" : Math.round(p[i] * 100)) + "%</text>";
        }).join("");
        el.querySelector(".neuron-out").innerHTML = msg || (T < 0.5 ? "Low temperature: the top word dominates. Predictable, good for facts and code." : T > 1.4 ? "High temperature: the odds flatten, so odd choices like <em>soup</em> or even <em>ink</em> start to appear." : "Around 1: the model's own probabilities, with some natural variety.");
      }
      el.querySelector("[data-sample]").onclick = function () {
        var out = [];
        for (var k = 0; k < 10; k++) { var r = Math.random(), c = 0, pick = words.length - 1; for (var i = 0; i < p.length; i++) { c += p[i]; if (r < c) { pick = i; break; } } out.push(words[pick]); }
        update("Ten samples: <strong>" + out.join(", ") + "</strong>. Press again and you'll likely get a different mix: that's why the same question can get different answers.");
      };
      inp.addEventListener("input", function () { update(); }); update();
    },

    /* Diffusion's forward process: blend a picture with noise. */
    "noise": function (el) {
      var pic = [".....##.....", "....####....", ".....##.....", "....#..#....", "....####....", "....#..#....", "...######...", "...#....#...", "...######...", "..#......#..", "..########..", "############"];
      var seed = 11, rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      var g = function () { return Math.sqrt(-2 * Math.log(rnd() + 1e-9)) * Math.cos(2 * Math.PI * rnd()); };
      var x0 = [], eps = [];
      pic.forEach(function (row) { for (var c = 0; c < row.length; c++) { x0.push(row[c] === "#" ? 1 : -1); eps.push(g()); } });
      el.className = "panel";
      el.innerHTML = "<h3>Try it: bury a picture in noise</h3><p>This is the forward process. Slide right to add noise, step by step, until nothing of the lighthouse is left. A diffusion model is trained to undo one small step at a time; generating an image means starting at the far right and walking all the way back.</p>" +
        '<svg class="plot noise-grid" viewBox="0 0 240 240" role="img" aria-label="A small lighthouse picture with adjustable noise"></svg>' +
        '<label class="slider-row"><span>Noise step</span><input type="range" min="0" max="1000" step="10" value="0"><output></output></label>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), inp = el.querySelector("input");
      function update() {
        var t = +inp.value, ab = Math.pow(Math.cos((t / 1000) * Math.PI / 2), 2), h = "";
        inp.nextElementSibling.textContent = t;
        x0.forEach(function (v, i) {
          var val = Math.sqrt(ab) * v + Math.sqrt(1 - ab) * eps[i], o = Math.max(0, Math.min(1, (val + 1.5) / 3));
          h += '<rect x="' + (i % 12) * 20 + '" y="' + Math.floor(i / 12) * 20 + '" width="20" height="20" fill="var(--heading)" fill-opacity="' + o.toFixed(2) + '"/>';
        });
        svg.innerHTML = h;
        el.querySelector(".neuron-out").innerHTML = "Step " + t + " of 1000: the mix is about <strong>" + Math.round(ab * 100) + "%</strong> picture and <strong>" + Math.round((1 - ab) * 100) + "%</strong> noise. " +
          (t === 0 ? "The clean training image." : t >= 1000 ? "Pure static. Every generated image starts from something like this." : t > 700 ? "You can barely tell there was a picture. Denoising from here takes many careful steps." : "At each step the network is shown a picture like this and asked to predict the noise that was added.");
      }
      inp.addEventListener("input", update); update();
    },

    /* Drift: shift live data away from training data and watch the PSI. */
    "drift": function (el) {
      var cuts = [-1.2816, -0.8416, -0.5244, -0.2533, 0, 0.2533, 0.5244, 0.8416, 1.2816];
      function phi(z) { var t = 1 / (1 + 0.2316419 * Math.abs(z)), d = 0.3989423 * Math.exp(-z * z / 2), p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))); return z > 0 ? 1 - p : p; }
      function dens(x, m, s) { var z = (x - m) / s; return Math.exp(-z * z / 2) / (s * 2.5066); }
      el.className = "panel";
      el.innerHTML = "<h3>Try it: let the customers drift</h3><p>The outline shows the ages your model was trained on (average 40). The shaded shape is this week's live customers. Move the sliders to shift and widen the live ages, and watch the population stability index (PSI).</p>" +
        '<svg class="plot" viewBox="0 0 320 160" role="img" aria-label="Training and live age distributions"></svg>' +
        '<label class="slider-row"><span>Average age shift</span><input type="range" data-k="m" min="-15" max="15" step="1" value="0"><output></output></label>' +
        '<label class="slider-row"><span>Spread</span><input type="range" data-k="s" min="0.6" max="1.8" step="0.05" value="1"><output></output></label>' +
        '<div class="neuron-out" aria-live="polite"></div>';
      var svg = el.querySelector("svg"), ins = el.querySelectorAll("input");
      function update() {
        var shift = +ins[0].value, sc = +ins[1].value, m = 40 + shift, s = 10 * sc;
        ins[0].nextElementSibling.textContent = (shift > 0 ? "+" : "") + shift + " yrs";
        ins[1].nextElementSibling.textContent = "x" + sc.toFixed(2);
        var X = function (a) { return 10 + (a - 0) * 300 / 90; }, Y = function (d) { return 140 - d * 2000; };
        var tr = "", lv = "M" + X(0) + " 140";
        for (var a = 0; a <= 90; a += 1) { tr += (a ? "L" : "M") + X(a).toFixed(1) + " " + Y(dens(a, 40, 10)).toFixed(1); lv += "L" + X(a).toFixed(1) + " " + Y(dens(a, m, s)).toFixed(1); }
        lv += "L" + X(90) + " 140Z";
        var ticks = [0, 20, 40, 60, 80].map(function (t) { return '<text x="' + (X(t) - 6) + '" y="155" font-size="10">' + t + "</text>"; }).join("");
        svg.innerHTML = '<line class="axis" x1="10" y1="140" x2="310" y2="140"/>' + ticks +
          '<path d="' + lv + '" fill="var(--gold)" fill-opacity=".45" stroke="none"/>' +
          '<path d="' + tr + '" fill="none" stroke="var(--heading)" stroke-width="2" stroke-dasharray="5 3"/>';
        var psi = 0, prev = 0;
        for (var i = 0; i <= cuts.length; i++) {
          var edge = i < cuts.length ? 40 + 10 * cuts[i] : Infinity, c = edge === Infinity ? 1 : phi((edge - m) / s);
          var live = Math.max(c - prev, 1e-4); prev = c;
          psi += (live - 0.1) * Math.log(live / 0.1);
        }
        var verdict = psi < 0.1 ? "<strong>Stable.</strong> Small differences like this are normal week to week." : psi < 0.25 ? "<strong>Worth a look.</strong> Check whether performance has moved and what caused the shift." : "<strong>Act.</strong> The model is now working on customers unlike the ones it learned from. Investigate, check accuracy and consider retraining.";
        el.querySelector(".neuron-out").innerHTML = "Live average age " + m + ". PSI = <strong>" + psi.toFixed(3) + "</strong>. " + verdict;
      }
      ins.forEach(function (i) { i.addEventListener("input", update); }); update();
    }
  };

  /* Python runs in the browser with Pyodide, loaded only when first needed. */
  var PY_BASES = ["https://cdn.jsdelivr.net/pyodide/v0.27.7/full/"];
  var pyPromise = null, pyLoading = false;
  function getPython() {
    if (pyPromise) return pyPromise;
    pyLoading = true;
    pyPromise = new Promise(function (resolve, reject) {
      // Try each address in turn until Python loads.
      (function attempt(k) {
        if (k >= PY_BASES.length) return reject(new Error("Python could not load"));
        var base = PY_BASES[k], next = function () { delete window.loadPyodide; attempt(k + 1); };
        var sc = document.createElement("script");
        sc.src = base + "pyodide.js";
        sc.onload = function () { window.loadPyodide({ indexURL: base }).then(resolve, next); };
        sc.onerror = next;
        document.head.appendChild(sc);
      })(0);
    });
    pyPromise.then(function () { pyLoading = false; }, function () { pyPromise = null; pyLoading = false; });
    return pyPromise;
  }

  function mountWidgets(root) {
    root.querySelectorAll("[data-widget]").forEach(function (el) {
      var fn = WIDGETS[el.dataset.widget];
      if (fn) fn(el);
    });
  }

  /* ---------- glossary ---------- */
  /* Glossary: one entry per term (a term used in several lessons lists each meaning), grouped under
     letter headings, with a search box and a level filter. */
  // Some terms appear in more than one lesson; count each term once.
  function uniqueTermCount() { var seen = {}; ALL.forEach(function (l) { l.terms.forEach(function (t) { seen[t[0].toLowerCase()] = 1; }); }); return Object.keys(seen).length; }
  function glossLetter(term) { var c = term.charAt(0).toUpperCase(); return /[A-Z]/.test(c) ? c : "#"; }
  function renderGlossary() {
    var groups = {};
    ALL.forEach(function (l) { l.terms.forEach(function (t) {
      var k = t[0].toLowerCase();
      if (!groups[k]) groups[k] = { term: t[0], uses: [] };
      groups[k].uses.push({ def: t[1], lesson: l });
    }); });
    var all = Object.keys(groups).map(function (k) { return groups[k]; });
    all.sort(function (a, b) { var la = glossLetter(a.term), lb = glossLetter(b.term); if (la !== lb) return la === "#" ? -1 : lb === "#" ? 1 : la.localeCompare(lb); return a.term.localeCompare(b.term); });
    var list = $("#gloss"), level = 0, text = "";
    var count = $("#gloss-count");
    function draw() {
      var f = text.toLowerCase(), shown = 0, html = "", cur = null;
      all.forEach(function (g) {
        var uses = g.uses.filter(function (u) { return (!level || u.lesson.level === level) && (!f || (g.term + " " + u.def).toLowerCase().indexOf(f) >= 0); });
        if (!uses.length) return;
        var L = glossLetter(g.term);
        if (L !== cur) { if (cur !== null) html += "</dl></section>"; cur = L; html += '<section class="gl-group" id="letter-' + (L === "#" ? "num" : L) + '"><h2 class="gl-letter">' + L + "</h2><dl>"; }
        shown++;
        html += '<div class="gl-item"><dt>' + esc(g.term) + "</dt>" + uses.map(function (u) {
          return "<dd>" + esc(u.def) + ' <a href="' + lessonHref(u.lesson.id) + '">' + (u.lesson.level > 1 ? "Level " + u.lesson.level + ", lesson " + u.lesson.num : "Lesson " + u.lesson.num) + "</a></dd>";
        }).join("") + "</div>";
      });
      if (cur !== null) html += "</dl></section>";
      list.innerHTML = html || '<p class="rv-note"><em>No matching terms, Abbas. Try a shorter word.</em></p>';
      if (count) count.textContent = shown + " term" + (shown === 1 ? "" : "s");
      document.querySelectorAll(".letter-bar a").forEach(function (a) { a.classList.toggle("off", !document.getElementById(a.getAttribute("href").slice(1))); });
      if (typeof fitTitles === "function") { /* letter headings are short; nothing to fit */ }
    }
    $("#gloss-search").addEventListener("input", function (e) { text = e.target.value; draw(); });
    var lv = $("#gloss-levels");
    if (lv) {
      lv.innerHTML = '<span>Show terms from:</span><button type="button" data-lv="0" class="on">All levels</button>' + READY.map(function (m) { return '<button type="button" data-lv="' + m.n + '">Level ' + m.n + "</button>"; }).join("");
      lv.querySelectorAll("button").forEach(function (b) { b.onclick = function () { level = +b.dataset.lv; lv.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); }); draw(); }; });
    }
    renderGlossary.redraw = draw;
    draw();
  }

  /* ---------- AI tools directory (tools.html) and one page per tool (tool.html?id=...) ---------- */
  var TOOLS = window.AI_TOOLS || [], TOOL_CATS = window.TOOL_CATS || [];
  function toolHref(id) { return "tool.html?id=" + id; }
  function toolsHref(cat) { return cat ? "tools.html?cat=" + cat : "tools.html"; }
  function toolById(id) { return TOOLS.find(function (t) { return t.id === id; }); }
  function catOf(t) { return TOOL_CATS.find(function (c) { return c.id === t.cat; }) || { id: t.cat, name: t.cat, blurb: "" }; }
  function currentToolId() { return new URLSearchParams(location.search).get("id"); }
  function requestedCat() { return new URLSearchParams(location.search).get("cat") || ""; }
  function toolLessonLabel(l) { return "Level " + l.level + ", lesson " + l.num + ": " + l.title; }
  // A tool's name as a link: hover (or focus) shows a short preview, a click opens its page.
  function toolLink(t, cls) { return '<a class="tool-link' + (cls ? " " + cls : "") + '" data-tool="' + t.id + '" href="' + toolHref(t.id) + '">' + esc(t.name) + "</a>"; }
  function linkTools(root) {
    (root || document).querySelectorAll("a[data-tool]").forEach(function (a) {
      var t = toolById(a.dataset.tool);
      if (!t) { a.removeAttribute("data-tool"); return; }
      a.href = toolHref(t.id);
      a.classList.add("tool-link");
    });
  }
  // One floating preview card, shared by every tool link on the page.
  var toolPop = null, popTimer = null, popFor = null;
  function showToolPop(a) {
    var t = toolById(a.dataset.tool);
    if (!t) return;
    if (!toolPop) {
      toolPop = document.createElement("div");
      toolPop.className = "tool-pop"; toolPop.setAttribute("role", "tooltip"); toolPop.id = "tool-pop";
      toolPop.addEventListener("mouseenter", function () { clearTimeout(popTimer); });
      toolPop.addEventListener("mouseleave", hideToolPopSoon);
      document.body.appendChild(toolPop);
    }
    popFor = a;
    toolPop.innerHTML = '<p class="tp-cat">' + esc(catOf(t).name) + '</p><p class="tp-name">' + esc(t.name) + '</p><p class="tp-meta">' + esc(t.maker) + " · " + esc(t.price) + "</p>" +
      '<p class="tp-blurb">' + esc(t.blurb) + '</p><a class="tp-go" href="' + toolHref(t.id) + '">Open the full page →</a>';
    a.setAttribute("aria-describedby", "tool-pop");
    toolPop.hidden = false;
    var r = a.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 24);
    toolPop.style.width = w + "px";
    var left = Math.max(12, Math.min(window.innerWidth - w - 12, r.left)) + window.scrollX;
    var h = toolPop.offsetHeight, below = r.bottom + 8;
    var top = below + h > window.innerHeight && r.top - h - 8 > 0 ? r.top - h - 8 : below;
    toolPop.style.left = left + "px";
    toolPop.style.top = (top + window.scrollY) + "px";
  }
  function hideToolPopSoon() { clearTimeout(popTimer); popTimer = setTimeout(function () { if (toolPop) toolPop.hidden = true; if (popFor) popFor.removeAttribute("aria-describedby"); }, 160); }
  var canHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;
  document.addEventListener("mouseover", function (e) {
    var a = e.target.closest && e.target.closest("a[data-tool]");
    if (!a || !canHover) return;
    clearTimeout(popTimer);
    popTimer = setTimeout(function () { showToolPop(a); }, 120);
  });
  document.addEventListener("mouseout", function (e) {
    var a = e.target.closest && e.target.closest("a[data-tool]");
    if (a && !(e.relatedTarget && a.contains(e.relatedTarget))) hideToolPopSoon();
  });
  document.addEventListener("focusin", function (e) { var a = e.target.closest && e.target.closest("a[data-tool]"); if (a) showToolPop(a); });
  document.addEventListener("focusout", function (e) { if (e.target.closest && e.target.closest("a[data-tool]")) hideToolPopSoon(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && toolPop) toolPop.hidden = true; });
  window.addEventListener("scroll", function () { if (toolPop && !toolPop.hidden && !toolPop.matches(":hover")) toolPop.hidden = true; }, { passive: true });

  function toolItem(t) {
    return '<div class="td-item">' + toolLink(t, "td-name") + '<span class="td-meta">' + esc(t.maker) + " · " + esc(t.price) + "</span><p>" + esc(t.blurb) + "</p></div>";
  }
  function renderTools() {
    var box = $("#tools");
    if (!box) return;
    var cat = TOOL_CATS.some(function (c) { return c.id === requestedCat(); }) ? requestedCat() : "", view = "cat", text = "";
    var sorted = TOOLS.slice().sort(function (a, b) { return a.name.localeCompare(b.name, "en", { sensitivity: "base" }); });
    var letterOf = function (t) { var c = t.name.charAt(0).toUpperCase(); return /[A-Z]/.test(c) ? c : "#"; };
    var count = $("#tool-count"), bar = $("#tool-letters");
    function match(t) {
      if (cat && t.cat !== cat) return false;
      if (!text) return true;
      var hay = (t.name + " " + t.maker + " " + t.blurb + " " + catOf(t).name + " " + t.uses.join(" ")).toLowerCase();
      return text.toLowerCase().split(/\s+/).filter(Boolean).every(function (w) { return hay.indexOf(w) >= 0; });
    }
    function draw() {
      var shown = 0, html = "";
      if (view === "cat") {
        TOOL_CATS.forEach(function (c) {
          var ts = TOOLS.filter(function (t) { return t.cat === c.id && match(t); });
          if (!ts.length) return;
          shown += ts.length;
          html += '<section class="td-cat" id="cat-' + c.id + '"><h2 class="gl-letter">' + esc(c.name) + '</h2><p class="td-blurb">' + esc(c.blurb) + '</p><div class="td-grid">' + ts.map(toolItem).join("") + "</div></section>";
        });
      } else {
        var cur = null;
        sorted.forEach(function (t) {
          if (!match(t)) return;
          var L = letterOf(t);
          if (L !== cur) { if (cur !== null) html += "</div></section>"; cur = L; html += '<section class="gl-group td-cat" id="tl-' + (L === "#" ? "num" : L) + '"><h2 class="gl-letter">' + L + '</h2><div class="td-grid">'; }
          shown++;
          html += toolItem(t);
        });
        if (cur !== null) html += "</div></section>";
      }
      box.innerHTML = html || '<p class="rv-note"><em>No tools match that, Abbas. Try a shorter word, or pick "All".</em></p>';
      if (count) count.textContent = shown + " tool" + (shown === 1 ? "" : "s") + (cat ? " in " + catOf({ cat: cat }).name : "");
      if (bar) {
        bar.hidden = view !== "az";
        bar.querySelectorAll("a").forEach(function (a) { a.classList.toggle("off", !document.getElementById(a.getAttribute("href").slice(1))); });
      }
    }
    if (bar) bar.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function (c) { return '<a href="#tl-' + c + '">' + c + "</a>"; }).join("");
    var cats = $("#tool-cats");
    if (cats) {
      cats.innerHTML = '<span>Show:</span><button type="button" data-cat="">All</button>' + TOOL_CATS.map(function (c) { return '<button type="button" data-cat="' + c.id + '">' + esc(c.name) + "</button>"; }).join("");
      var mark = function () { cats.querySelectorAll("button").forEach(function (b) { b.classList.toggle("on", b.dataset.cat === cat); }); };
      cats.querySelectorAll("button").forEach(function (b) { b.onclick = function () { cat = b.dataset.cat; mark(); draw(); }; });
      mark();
    }
    var vw = $("#tool-view");
    if (vw) {
      vw.innerHTML = '<span>View:</span><button type="button" data-v="cat" class="on">By category</button><button type="button" data-v="az">A to Z</button>';
      vw.querySelectorAll("button").forEach(function (b) { b.onclick = function () { view = b.dataset.v; vw.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); }); draw(); }; });
    }
    var q = $("#tool-search");
    if (q) q.addEventListener("input", function () { text = q.value.trim(); draw(); });
    draw();
  }

  function renderTool() {
    var art = $("#tool");
    if (!art) return;
    var t = toolById(currentToolId()) || TOOLS[0];
    if (!t) return;
    var c = catOf(t), lesson = lessonById(t.lesson);
    document.title = t.name + " · AI tools · Abbas’ AI Academy";
    var list = function (xs) { return "<ul>" + xs.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; };
    var order = [];
    TOOL_CATS.forEach(function (k) { TOOLS.forEach(function (x) { if (x.cat === k.id) order.push(x); }); });
    var at = order.indexOf(t), prev = order[at - 1], nxt = order[at + 1];
    var same = TOOLS.filter(function (x) { return x.cat === t.cat && x !== t; });
    var alts = t.alts.map(toolById).filter(Boolean);
    art.innerHTML =
      '<p class="crumbs"><a href="' + toolsHref() + '">AI tools directory</a> › <a href="' + toolsHref(c.id) + '">' + esc(c.name) + "</a></p>" +
      '<span class="eyebrow">' + esc(c.name) + "</span>" +
      "<h1>" + esc(t.name) + "</h1>" +
      '<p class="lead">' + esc(t.blurb) + "</p>" +
      '<dl class="tool-facts">' +
        "<div><dt>Made by</dt><dd>" + esc(t.maker) + "</dd></div>" +
        "<div><dt>Price</dt><dd>" + esc(t.price) + "</dd></div>" +
        '<div><dt>Category</dt><dd><a href="' + toolsHref(c.id) + '">' + esc(c.name) + "</a></dd></div>" +
        '<div><dt>Website</dt><dd><a href="' + esc(t.url) + '" target="_blank" rel="noopener">' + esc(t.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")) + "</a></dd></div>" +
      "</dl>" +
      "<h2>What it is</h2><p>" + esc(t.what) + "</p>" +
      "<h2>What you can use it for</h2>" + list(t.uses) +
      "<h2>Strengths</h2>" + list(t.good) +
      "<h2>Things to watch</h2>" + list(t.watch) +
      "<h2>How to get started</h2><ol>" + t.start.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>" +
      '<div class="callout"><b>Try this first, Abbas:</b> ' + esc(t.tryit) + "</div>" +
      (alts.length ? '<h2>Alternatives to compare</h2><div class="td-grid td-alts">' + alts.map(toolItem).join("") + "</div>" : "") +
      (lesson ? '<h2>Learn more in your course</h2><p>This tool features in <a href="' + lessonHref(lesson.id) + '">' + esc(toolLessonLabel(lesson)) + "</a>, alongside the other tools that do the same kind of job.</p>" : "") +
      (same.length ? "<h2>More " + esc(c.name.toLowerCase()) + ' tools</h2><p class="td-more">' + same.map(function (x) { return toolLink(x); }).join(" · ") + "</p>" : "") +
      '<p class="tool-note"><em>Prices and features change often. Check the official website for the latest details before you sign up or pay. Written in our own words, ' + "November 2026.</em></p>" +
      '<nav class="pager">' +
        (prev ? '<a class="btn secondary" href="' + toolHref(prev.id) + '">← ' + esc(prev.name) + "</a>" : '<a class="btn secondary" href="' + toolsHref() + '">← All tools</a>') +
        (nxt ? '<a class="btn" href="' + toolHref(nxt.id) + '">Next: ' + esc(nxt.name) + " →</a>" : '<a class="btn" href="' + toolsHref() + '">Back to all tools →</a>') +
      "</nav>";
    window.scrollTo(0, 0);
  }
  // Everyday jobs and the tools worth trying first (used by the tool finder and toolkit activities).
  var TOOL_JOBS = [
    { id: "write", job: "Write and polish emails", tools: ["chatgpt", "claude", "gemini", "grammarly"], tip: "A general assistant drafts; Grammarly checks as you type everywhere." },
    { id: "research", job: "Look things up with sources", tools: ["perplexity", "google-ai-mode", "chatgpt"], tip: "Use search-based answers for anything current, and click the sources." },
    { id: "docs", job: "Understand long documents", tools: ["notebooklm", "claude", "chatgpt"], tip: "Upload the document so answers come from it, with citations." },
    { id: "translate", job: "Translate", tools: ["deepl", "google-translate", "ms-translator"], tip: "DeepL for natural text, Google Translate for the most languages and camera translation." },
    { id: "meetings", job: "Take meeting notes", tools: ["otter", "granola", "zoom-ai", "m365-copilot"], tip: "Always tell people you're recording." },
    { id: "images", job: "Make or edit images", tools: ["nano-banana", "chatgpt", "midjourney", "firefly", "canva"], tip: "Conversational tools are easiest for edits; Midjourney for artistic looks." },
    { id: "slides", job: "Make presentations and posters", tools: ["gamma", "canva", "m365-copilot"], tip: "Outline your message first, then generate." },
    { id: "voice", job: "Voiceovers and audio clean-up", tools: ["elevenlabs", "adobe-podcast", "descript"], tip: "Only clone your own voice, or one you have permission to use." },
    { id: "video", job: "Make or edit video", tools: ["capcut", "descript", "veo", "sora", "runway"], tip: "Editing tools save the most time; generators are for new footage." },
    { id: "code", job: "Write or understand code", tools: ["github-copilot", "claude-code", "cursor", "google-colab"], tip: "Ask it to explain every line, and review before you use it." },
    { id: "apps", job: "Build a small app", tools: ["replit", "lovable", "bolt", "v0"], tip: "Start with the smallest useful version." },
    { id: "automate", job: "Automate routine tasks", tools: ["zapier", "make", "n8n"], tip: "Test with examples and keep a human approval step for anything risky." },
    { id: "learn", job: "Learn and revise", tools: ["khanmigo", "notebooklm", "quizlet", "duolingo"], tip: "Pick tools that make you do the thinking." },
    { id: "private", job: "Use AI privately offline", tools: ["ollama", "lm-studio"], tip: "Local models keep everything on your computer." }
  ];

  var page = document.body.dataset.page;
  if (page === "glossary" || page === "home" || page === "lessons" || page === "review" || page === "me" || page === "tools" || page === "tool") setLevel(pickLevel());
  if (page === "home" || page === "lessons") renderHome();
  else if (page === "lesson") renderLesson();
  else if (page === "glossary") renderGlossary();
  else if (page === "tools") renderTools();
  else if (page === "tool") renderTool();

  /* ---------- side panels (wide screens only) ---------- */
  function allTerms() {
    var all = [];
    ALL.forEach(function (l) { l.terms.forEach(function (t) { all.push({ term: t[0], def: t[1], lesson: l, n: lessonTag(l) }); }); });
    return all;
  }
  function termOfTheDay() {
    var all = allTerms(), day = Math.floor(Date.now() / 86400000);
    return all[day % all.length];
  }
  function card(title, body) { return '<section class="side-card"><h4>' + title + "</h4>" + body + "</section>"; }
  function progressCard() {
    var n = doneCount(), t = LESSONS.length, pct = Math.round((n / t) * 100);
    var next = LESSONS.find(function (l) { return !isDone(l.id); });
    return card("Your progress",
      '<div class="side-big">' + pct + '%</div><div class="bar"><span style="width:' + pct + '%"></span></div>' +
      '<p class="side-small">' + n + " of " + t + " Level ' + LV.n + ' lessons done</p>" +
      (next ? '<p class="side-small">Next up: <a href="' + lessonHref(next.id) + '">' + esc(next.title) + "</a></p>" : "<p class=\"side-small\">Level " + LV.n + " complete. Brilliant work, Abbas.</p>"));
  }
  function termCard() {
    var t = termOfTheDay();
    return card("Term of the day", '<p class="side-term">' + esc(t.term) + '</p><p class="side-small">' + esc(t.def) + '</p><p class="side-small"><a href="' + lessonHref(t.lesson.id) + '">From ' + (t.lesson.level > 1 ? "Level " + t.lesson.level + ", lesson " + t.lesson.num : "Lesson " + t.n) + "</a></p>");
  }

  function navTab() {
    var curId = page === "lesson" ? (currentLessonId() || ALL[0].id) : null;
    var html = '<nav class="nav-tab" aria-label="Course menu">' +
      '<a class="nav-top' + (page === "home" ? " here" : "") + '" href="' + levelHref(LV.n) + '">Home</a>' +
      '<a class="nav-top' + (page === "tools" || page === "tool" ? " here" : "") + '" href="' + toolsHref() + '">AI tools</a>' +
      '<a class="nav-top' + (page === "glossary" ? " here" : "") + '" href="glossary.html">Glossary</a>' +
      '<a class="nav-top' + (page === "review" ? " here" : "") + '" href="review.html">Review</a>' +
      '<a class="nav-top' + (page === "me" ? " here" : "") + '" href="me.html">My learning</a>';
    LEVELS.forEach(function (m) {
      if (!m.ready) { html += '<p class="nav-level nav-locked">Level ' + m.n + " · " + esc(m.name) + " · coming soon</p>"; return; }
      var md = m.lessons.filter(function (l) { return isDone(l.id); }).length;
      if (m !== LV) { html += '<a class="nav-level nav-level-link" href="' + levelHref(m.n) + '"><span>Level ' + m.n + " · " + esc(m.name) + '</span><span class="side-count">' + md + "/" + m.lessons.length + "</span></a>"; return; }
      html += '<p class="nav-level">Level ' + m.n + " · " + esc(m.name) + "</p>";
      m.units.forEach(function (u) {
        var ls = m.lessons.filter(function (l) { return l.unit === u.id; });
        var open = !curId || ls.some(function (l) { return l.id === curId; });
        var d = ls.filter(function (l) { return isDone(l.id); }).length;
        html += '<details class="nav-unit"' + (open ? " open" : "") + '><summary><span>' + esc(u.title.replace(/^Unit (\d+) · /, "$1. ")) + '</span><span class="side-count">' + d + "/" + ls.length + "</span></summary><ol>" +
          ls.map(function (l) {
            return '<li class="' + (l.id === curId ? "here" : "") + (isDone(l.id) ? " done" : "") + '"><a href="' + lessonHref(l.id) + '"><span class="nav-num">' + (isDone(l.id) ? "✓" : l.num) + "</span>" + esc(l.title) + "</a></li>";
          }).join("") + "</ol></details>";
      });
    });
    return html + "</nav>";
  }
  /* ---------- top navigation with drop-down menus ---------- */
  function buildTopNav() {
    var nav = document.querySelector(".site-header .nav");
    if (!nav) return;
    var curId = page === "lesson" ? (currentLessonId() || ALL[0].id) : null;
    var n = doneCount(), t = LESSONS.length;
    var levels = LEVELS.map(function (m) {
      if (!m.ready) return '<li class="dd-off"><span class="dd-lv">Level ' + m.n + "</span><span>" + esc(m.name) + '</span><em>Coming soon</em></li>';
      var md = m.lessons.filter(function (l) { return isDone(l.id); }).length;
      return '<li' + (m === LV ? ' class="here"' : "") + '><a href="' + levelHref(m.n) + '"><span class="dd-lv">Level ' + m.n + "</span><span>" + esc(m.name) + "</span><em>" + md + "/" + m.lessons.length + " done</em></a></li>";
    }).join("");
    var units = UNITS.map(function (u) {
      var ls = LESSONS.filter(function (l) { return l.unit === u.id; });
      return '<div class="dd-col"><p class="dd-head">' + esc(u.title) + "</p><ol>" + ls.map(function (l) {
        return '<li class="' + (l.id === curId ? "here" : "") + (isDone(l.id) ? " done" : "") + '"><a href="' + lessonHref(l.id) + '"><span class="dd-num">' + (isDone(l.id) ? "✓" : lessonTag(l)) + "</span><span>" + esc(l.title) + "</span></a></li>";
      }).join("") + "</ol></div>";
    }).join("");
    nav.className = "nav topnav";
    nav.setAttribute("aria-label", "Main menu");
    nav.innerHTML =
      '<a class="tn-link' + (page === "home" ? " active" : "") + '" href="' + levelHref(LV.n) + '">Home</a>' +
      '<div class="tn-item"><button class="tn-btn" type="button" aria-expanded="false">Levels</button>' +
        '<div class="dd dd-levels"><ul class="dd-list">' + levels + "</ul></div></div>" +
      '<div class="tn-item tn-mega"><button class="tn-btn' + (page === "lesson" || page === "lessons" ? " active" : "") + '" type="button" aria-expanded="false">Lessons</button>' +
        '<div class="dd dd-mega"><div class="dd-top"><span>Level ' + LV.n + ": " + esc(LV.name) + '</span><a href="' + lessonsHref(LV.n) + '">See all on one page →</a></div><div class="dd-cols">' + units + "</div></div></div>" +
      '<a class="tn-link' + (page === "tools" || page === "tool" ? " active" : "") + '" href="' + toolsHref() + '">AI tools</a>' +
      '<a class="tn-link' + (page === "glossary" ? " active" : "") + '" href="glossary.html">Glossary</a>' +
      '<a class="tn-link' + (page === "review" ? " active" : "") + '" href="review.html">Review</a>' +
      '<a class="tn-link' + (page === "me" ? " active" : "") + '" href="me.html">My learning</a>' +
      displayMenu() + accountMenu() +
      // The level badge only shows inside a level (a lesson or that level's lesson list).
      (page === "lesson" || page === "lessons" ? '<a class="tn-pill" href="' + lessonsHref(LV.n) + '" title="Your progress in Level ' + LV.n + '">Level ' + LV.n + " · " + n + "/" + t + "</a>" : "");
    wireDisplay(nav); wireAccount(nav);
    var items = nav.querySelectorAll(".tn-item");
    function closeAll(except) { items.forEach(function (it) { if (it !== except) { it.classList.remove("open"); it.querySelector(".tn-btn").setAttribute("aria-expanded", "false"); } }); }
    items.forEach(function (it) {
      var b = it.querySelector(".tn-btn");
      b.addEventListener("click", function (e) { e.stopPropagation(); var open = !it.classList.contains("open"); closeAll(it); it.classList.toggle("open", open); b.setAttribute("aria-expanded", String(open)); });
      it.addEventListener("mouseenter", function () { if (window.matchMedia("(hover: hover)").matches) { closeAll(it); it.classList.add("open"); b.setAttribute("aria-expanded", "true"); } });
      it.addEventListener("mouseleave", function () { if (window.matchMedia("(hover: hover)").matches) { it.classList.remove("open"); b.setAttribute("aria-expanded", "false"); } });
    });
    document.addEventListener("click", function (e) { if (!nav.contains(e.target)) closeAll(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });
  }

  /* ---------- what used to sit in the side panels now flows inside each page ---------- */
  function pageBand(nodes) {
    var main = document.querySelector("main");
    if (!main || !nodes.length) return;
    var band = document.createElement("section");
    band.className = "page-band";
    var inner = document.createElement("div"); inner.className = "page-band-inner";
    nodes.forEach(function (x) { if (x) inner.appendChild(x); });
    band.appendChild(inner);
    main.parentNode.insertBefore(band, main);
  }
  function termStrip() {
    var t = termOfTheDay();
    return '<aside class="term-strip"><span class="ts-label">Term of the day</span><p><strong>' + esc(t.term) + "</strong> " + esc(t.def) + '</p><a href="' + lessonHref(t.lesson.id) + '">From ' + (t.lesson.level > 1 ? "Level " + t.lesson.level + ", lesson " + t.lesson.num : "Lesson " + t.n) + " →</a></aside>";
  }
  function buildInline() {
    if (page === "home") {
      var paths = document.getElementById("paths");
      if (paths) paths.insertAdjacentHTML("afterend", termStrip());
    } else if (page === "lessons") {
      document.querySelectorAll(".unit-head").forEach(function (h, i) { h.id = "unit-" + (i + 1); });
      var top = document.querySelector("main .hero");
      if (top) { pageBand([top.querySelector(".eyebrow"), top.querySelector("h1"), top.querySelector(".lead"), top.querySelector(".band-actions")]); top.remove(); }
    } else if (page === "lesson") {
      var art = document.getElementById("lesson");
      var l = lessonById(currentLessonId()) || ALL[0];
      pageBand([art.querySelector(".crumbs"), art.querySelector(".eyebrow"), art.querySelector("h1"), art.querySelector(".lead")]);
      var heads = art.querySelectorAll("h2");
      heads.forEach(function (h, i) { h.id = "sec-" + (i + 1); });
      var n = doneCount(), t = LESSONS.length, pct = Math.round(100 * n / t);
      var box = '<nav class="in-lesson" aria-label="In this lesson"><div class="il-head"><span>In this lesson</span>' +
        '<span class="il-meta">' + l.minutes + " min read · " + l.terms.length + " key terms · quiz at the end</span></div>" +
        '<ol class="il-list">' + Array.prototype.map.call(heads, function (h) { return '<li><a href="#' + h.id + '">' + esc(h.textContent) + "</a></li>"; }).join("") + "</ol>" +
        '<div class="il-progress"><span>Your Level ' + LV.n + " progress: " + n + " of " + t + ' lessons</span><div class="bar"><span style="width:' + pct + '%"></span></div></div></nav>';
      art.insertAdjacentHTML("afterbegin", box);
      // Highlight the section being read.
      var toc = art.querySelectorAll(".il-list a");
      if (toc.length && "IntersectionObserver" in window) {
        var obs = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) toc.forEach(function (x) { x.classList.toggle("active", x.getAttribute("href") === "#" + e.target.id); }); });
        }, { rootMargin: "0px 0px -70% 0px" });
        heads.forEach(function (h) { obs.observe(h); });
      }
    } else if (page === "tools") {
      var th = document.querySelector("main .hero");
      if (th) { pageBand([th.querySelector(".eyebrow"), th.querySelector("h1"), th.querySelector(".lead")]); th.remove(); }
    } else if (page === "tool") {
      var ta = document.getElementById("tool");
      if (ta && ta.querySelector("h1")) pageBand([ta.querySelector(".crumbs"), ta.querySelector(".eyebrow"), ta.querySelector("h1"), ta.querySelector(".lead")]);
    } else if (page === "glossary") {
      var hero = document.querySelector("main .hero");
      if (hero) { pageBand([hero.querySelector(".eyebrow"), hero.querySelector("h1"), hero.querySelector(".lead")]); hero.remove(); }
      var letters = ["#"].concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
      var bar = document.getElementById("gloss-letters");
      if (bar) {
        bar.innerHTML = letters.map(function (c) { return '<a href="#letter-' + (c === "#" ? "num" : c) + '"' + (c === "#" ? ' aria-label="Numbers"' : "") + ">" + (c === "#" ? "0–9" : c) + "</a>"; }).join("");
        if (renderGlossary.redraw) renderGlossary.redraw();
      }
      var search = document.getElementById("gloss-search");
      if (search) search.insertAdjacentHTML("beforebegin", termStrip());
    }
  }
  /* =====================================================================
     Extras: review, level tests and certificates, streak and daily goal,
     lesson notes, save codes, and comfort settings (text size, dark mode,
     read aloud). Everything is saved in this browser only.
     ===================================================================== */
  var EX_KEY = "aiAcademy.extras.v1", PREF_KEY = "aiAcademy.prefs.v1";
  function loadKey(k) { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { return {}; } }
  function saveKey(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked */ } }
  var extras = loadKey(EX_KEY);
  ["days", "notes", "cards", "tests"].forEach(function (k) { if (!extras[k] || typeof extras[k] !== "object") extras[k] = {}; });
  if (!extras.goal) extras.goal = 1;
  function saveExtras() { saveKey(EX_KEY, extras); acctChanged(); }

  function heroToBand() {
    document.querySelectorAll(".page-band").forEach(function (b) { b.remove(); });
    var hero = document.querySelector("main .hero");
    if (hero) { pageBand([hero.querySelector(".eyebrow"), hero.querySelector("h1"), hero.querySelector(".lead")]); hero.remove(); }
  }
  function dayKey(d) { d = d || new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function addDays(n) { var d = new Date(); d.setDate(d.getDate() + n); return dayKey(d); }
  function logDay(kind) {
    var k = dayKey(), d = extras.days[k] || { l: 0, r: 0 };
    d[kind] = (d[kind] || 0) + 1; extras.days[k] = d; saveExtras();
  }
  function streak() {
    var n = 0, i = extras.days[dayKey()] ? 0 : -1;
    while (extras.days[addDays(i - n)]) n++;
    return n;
  }
  function todayLessons() { var d = extras.days[dayKey()]; return d ? d.l || 0 : 0; }

  /* ---------- account: sign in once, progress follows you to every device ----------
     Uses a Supabase project named in assets/config.js. With no project named
     (or on the Claude-hosted copy), all of this stays switched off and the
     site keeps saving in this browser only. */
  var ACCT = window.AIA_ACCOUNT && window.AIA_ACCOUNT.url && window.AIA_ACCOUNT.key ? {
    url: String(window.AIA_ACCOUNT.url).replace(/\/+$/, ""), key: window.AIA_ACCOUNT.key,
    table: "academy_progress", state: "out", msg: "", timer: 0, busy: false, again: false, last: 0
  } : null;
  var SESS_KEY = "aiAcademy.session.v1", SYNC_KEY = "aiAcademy.sync.v1", REMEMBER_KEY = "aiAcademy.remember";
  function remembered() { try { return localStorage.getItem(REMEMBER_KEY) !== "0"; } catch (e) { return true; } }
  function sessStore() { try { return remembered() ? localStorage : sessionStorage; } catch (e) { return null; } }
  function getSess() { try { return JSON.parse(sessStore().getItem(SESS_KEY)) || null; } catch (e) { return null; } }
  function setSess(s) {
    try {
      localStorage.removeItem(SESS_KEY); sessionStorage.removeItem(SESS_KEY);
      if (s) sessStore().setItem(SESS_KEY, JSON.stringify(s));
    } catch (e) { /* storage blocked */ }
  }
  var syncInfo = loadKey(SYNC_KEY);
  function saveSyncInfo() { saveKey(SYNC_KEY, syncInfo); }

  // Called whenever progress or extras are saved in this browser.
  function acctChanged(p) {
    if (!syncInfo) return;
    syncInfo.changed = Date.now();
    if (p && typeof p === "object" && !Object.keys(p).length) syncInfo.resetAt = syncInfo.changed;
    syncInfo.dirty = true; saveSyncInfo();
    if (!ACCT || ACCT.state !== "in") return;
    clearTimeout(ACCT.timer); ACCT.timer = setTimeout(acctPush, 1500);
  }

  function api(path, opts) {
    opts = opts || {};
    var h = { apikey: ACCT.key, "Content-Type": "application/json" };
    if (opts.token) h.Authorization = "Bearer " + opts.token;
    if (opts.prefer) h.Prefer = opts.prefer;
    return fetch(ACCT.url + path, { method: opts.method || "GET", headers: h, body: opts.body ? JSON.stringify(opts.body) : undefined, keepalive: !!opts.keepalive })
      .then(function (r) {
        return r.text().then(function (t) {
          var d = null; try { d = t ? JSON.parse(t) : null; } catch (e) { d = null; }
          if (!r.ok) { var err = new Error((d && (d.msg || d.message || d.error_description)) || ("HTTP " + r.status)); err.status = r.status; throw err; }
          return d;
        });
      });
  }
  function keepSess(d, email) {
    var s = { at: d.access_token, rt: d.refresh_token, exp: Date.now() + (d.expires_in || 3600) * 1000, email: email || (d.user && d.user.email) || "", id: d.user && d.user.id };
    setSess(s); return s;
  }
  // A fresh sign-in token, renewing it quietly when it is about to run out.
  function token() {
    var s = getSess();
    if (!s) return Promise.reject(new Error("signed out"));
    if (s.exp - Date.now() > 60000) return Promise.resolve(s);
    return api("/auth/v1/token?grant_type=refresh_token", { method: "POST", body: { refresh_token: s.rt } })
      .then(function (d) { return keepSess(d, s.email); }, function (e) {
        if (e.status === 400 || e.status === 401) { setSess(null); acctSet("out", "You were signed out. Sign in again to keep saving to your account."); }
        throw e;
      });
  }

  function mergeInto(local, remote, remoteNewer) {
    var p = local.p, x = local.x, rp = remote.p || {}, rx = remote.x || {};
    Object.keys(rp).forEach(function (id) {
      var a = p[id] || {}, b = rp[id] || {};
      p[id] = { passed: !!(a.passed || b.passed), best: Math.max(a.best || 0, b.best || 0) };
    });
    var rd = rx.days || {};
    Object.keys(rd).forEach(function (k) {
      var a = x.days[k] || {}, b = rd[k] || {};
      x.days[k] = { l: Math.max(a.l || 0, b.l || 0), r: Math.max(a.r || 0, b.r || 0) };
    });
    var rt = rx.tests || {};
    Object.keys(rt).forEach(function (k) {
      var a = x.tests[k], b = rt[k];
      if (!a) { x.tests[k] = b; return; }
      x.tests[k] = { best: Math.max(a.best || 0, b.best || 0), passed: !!(a.passed || b.passed), date: a.passed && b.passed ? (a.date < b.date ? a.date : b.date) : (a.passed ? a.date : b.date) };
    });
    ["notes", "cards"].forEach(function (k) {
      var r = rx[k] || {};
      Object.keys(r).forEach(function (id) { if (!(id in x[k]) || remoteNewer) x[k][id] = r[id]; });
    });
    if (rx.goal && (remoteNewer || !x.goal)) x.goal = rx.goal;
  }
  function stable(v) {
    if (Array.isArray(v)) return "[" + v.map(stable).join(",") + "]";
    if (v && typeof v === "object") return "{" + Object.keys(v).sort().map(function (k) { return JSON.stringify(k) + ":" + stable(v[k]); }).join(",") + "}";
    return JSON.stringify(v);
  }
  function body() { return { v: 1, p: progress, x: extras, resetAt: syncInfo.resetAt || 0 }; }

  function acctPull() {
    if (!ACCT || ACCT.busy) return Promise.resolve();
    ACCT.busy = true; acctSet("syncing");
    return token().then(function (s) {
      return api("/rest/v1/" + ACCT.table + "?select=data,updated_at&user_id=eq." + encodeURIComponent(s.id), { token: s.at }).then(function (rows) {
        var row = rows && rows[0], remote = row && row.data;
        var before = stable({ p: progress, x: extras });
        if (remote && remote.v === 1) {
          var rReset = remote.resetAt || 0, lReset = syncInfo.resetAt || 0;
          if (rReset > lReset) {
            // Progress was reset on another device: start again from the account's copy.
            progress = {}; extras = { days: {}, notes: {}, cards: {}, tests: {}, goal: extras.goal || 1 };
            syncInfo.resetAt = rReset;
          }
          if (!(lReset > rReset && syncInfo.dirty)) {
            var remoteNewer = Date.parse(row.updated_at) > (syncInfo.changed || 0);
            mergeInto({ p: progress, x: extras }, remote, remoteNewer);
          }
        }
        var after = stable({ p: progress, x: extras });
        if (after !== before) {
          try { localStorage.setItem(KEY, JSON.stringify(progress)); localStorage.setItem(EX_KEY, JSON.stringify(extras)); } catch (e) { /* storage blocked */ }
        }
        syncInfo.lastPull = Date.now(); saveSyncInfo();
        ACCT.busy = false;
        var needPush = !remote || syncInfo.dirty || stable({ p: remote.p, x: remote.x }) !== after;
        if (after !== before) acctRefresh();
        return needPush ? acctPush() : acctSet("in");
      });
    }).catch(function (e) { ACCT.busy = false; if (getSess()) acctSet("in", "Couldn’t reach your account just now, so this device is saving locally and will try again."); });
  }
  function acctPush(keepalive) {
    if (!ACCT || !getSess()) return Promise.resolve();
    if (ACCT.busy && !keepalive) { ACCT.again = true; return Promise.resolve(); }
    clearTimeout(ACCT.timer); ACCT.busy = true; acctSet("syncing");
    var sentAt = Date.now();
    return token().then(function (s) {
      return api("/rest/v1/" + ACCT.table + "?on_conflict=user_id", {
        method: "POST", token: s.at, prefer: "resolution=merge-duplicates,return=minimal", keepalive: keepalive,
        body: { user_id: s.id, data: body(), updated_at: new Date().toISOString() }
      });
    }).then(function () {
      ACCT.busy = false; ACCT.last = Date.now();
      if (!syncInfo.changed || syncInfo.changed <= sentAt) syncInfo.dirty = false;
      saveSyncInfo(); acctSet("in");
      if (ACCT.again) { ACCT.again = false; return acctPush(); }
    }, function () { ACCT.busy = false; if (getSess()) acctSet("in", "Couldn’t reach your account just now, so this device is saving locally and will try again."); });
  }
  // After new progress arrives from the account, redraw what is on screen.
  function acctRefresh() {
    if (typeof route === "function") { route(); return; }
    var typing = document.activeElement && /TEXTAREA|INPUT/.test(document.activeElement.tagName);
    // Reload once so every number on the page is up to date (never twice in a row).
    if (!typing && Date.now() - (syncInfo.reloadedAt || 0) > 15000) { syncInfo.reloadedAt = Date.now(); saveSyncInfo(); location.reload() }
  }

  function acctSend(email, keep) {
    try { localStorage.setItem(REMEMBER_KEY, keep ? "1" : "0"); localStorage.setItem("aiAcademy.email", email); } catch (e) { /* storage blocked */ }
    var back = location.origin + location.pathname + location.search;
    acctSet("sending");
    return api("/auth/v1/otp?redirect_to=" + encodeURIComponent(back), { method: "POST", body: { email: email, create_user: true } })
      .then(function () { acctSet("sent"); }, function (e) {
        acctSet("out", e.status === 429 ? "Too many sign-in emails in a short time. Please wait a few minutes and try again." : "That didn’t work: " + e.message);
      });
  }
  function acctSignOut() {
    var s = getSess();
    if (s) api("/auth/v1/logout", { method: "POST", token: s.at }).catch(function () {});
    setSess(null); acctSet("out", "Signed out. Your progress is still saved in your account and in this browser.");
  }
  // Finish signing in when Abbas arrives from the email link.
  function acctLanding() {
    var h = location.hash.replace(/^#/, "");
    if (!/(^|&)(access_token|error_description)=/.test(h)) return null;
    var q = new URLSearchParams(h);
    history.replaceState(null, "", location.pathname + location.search);
    if (q.get("error_description")) { acctSet("out", "That sign-in link didn’t work (" + q.get("error_description").replace(/\+/g, " ") + "). Links work once and run out after an hour, so ask for a new one."); return null; }
    var d = { access_token: q.get("access_token"), refresh_token: q.get("refresh_token"), expires_in: +q.get("expires_in") || 3600 };
    return api("/auth/v1/user", { token: d.access_token }).then(function (u) {
      d.user = u; keepSess(d); ACCT.welcome = true;
    }, function () { acctSet("out", "That sign-in link didn’t work. Please ask for a new one."); });
  }
  function acctStart() {
    if (!ACCT) return;
    Promise.resolve(acctLanding()).then(function () {
      if (!getSess()) { if (ACCT.state !== "out" || !ACCT.msg) acctSet("out", ACCT.msg); return; }
      acctSet("in", ACCT.welcome ? "Welcome, Abbas. You’re signed in, and your progress now saves to your account." : "");
      acctPull();
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible" && getSess() && Date.now() - (syncInfo.lastPull || 0) > 30000) acctPull();
    });
    window.addEventListener("pagehide", function () { if (ACCT.timer && getSess()) acctPush(true); });
  }

  function ago(t) {
    if (!t) return "";
    var s = Math.round((Date.now() - t) / 1000);
    return s < 45 ? "just now" : s < 3600 ? Math.round(s / 60) + " min ago" : "earlier today";
  }
  function accountPanel() {
    var s = getSess(), st = ACCT.state;
    var note = ACCT.msg ? '<p class="acct-msg">' + esc(ACCT.msg) + "</p>" : "";
    if (s) {
      return '<p class="dd-head">Your account</p><p class="acct-who">Signed in as <strong>' + esc(s.email) + "</strong></p>" + note +
        '<p class="acct-status">' + (st === "syncing" ? "Saving…" : ACCT.last ? "Progress saved to your account " + ago(ACCT.last) + "." : "Your progress saves to your account automatically.") + "</p>" +
        '<p><button class="btn secondary" type="button" data-acct="out">Sign out</button></p>';
    }
    if (st === "sent") {
      return '<p class="dd-head">Check your email</p><p>Abbas, I’ve sent you a sign-in link. Open it on this device to finish signing in. It works once and runs out after an hour.</p>' +
        '<p><button class="btn secondary" type="button" data-acct="again">Use a different email</button></p>';
    }
    var em = ""; try { em = localStorage.getItem("aiAcademy.email") || ""; } catch (e) { em = ""; }
    return '<p class="dd-head">Sign in</p><p>Sign in once and your progress, notes, streak and test scores follow you to every device.</p>' + note +
      '<form class="acct-form" data-acct="form"><label for="acct-email-' + (++accountPanel.n) + '">Email</label><input type="email" required autocomplete="email" id="acct-email-' + accountPanel.n + '" value="' + esc(em) + '" placeholder="you@example.com">' +
      '<label class="acct-keep"><input type="checkbox"' + (remembered() ? " checked" : "") + "> Keep me signed in on this device</label>" +
      '<button class="btn" type="submit"' + (st === "sending" ? " disabled" : "") + ">" + (st === "sending" ? "Sending…" : "Email me a sign-in link") + "</button></form>" +
      '<p class="acct-small"><em>No password needed. Untick the box on a shared computer, and you’ll be signed out when you close the browser.</em></p>';
  }
  accountPanel.n = 0;
  function accountMenu() {
    if (!ACCT) return "";
    return '<div class="tn-item tn-account"><button class="tn-btn" type="button" aria-expanded="false">' + (getSess() ? "Account" : "Sign in") + "</button>" +
      '<div class="dd dd-account">' + accountPanel() + "</div></div>";
  }
  function wireAccount(root) {
    if (!ACCT) return;
    root.querySelectorAll(".dd-account, .acct-box").forEach(function (box) {
      if (box.dataset.wired) return;
      box.dataset.wired = "1";
      box.addEventListener("click", function (e) {
        e.stopPropagation();
        var b = e.target.closest("[data-acct]"); if (!b || b.tagName === "FORM") return;
        if (b.dataset.acct === "out") acctSignOut();
        if (b.dataset.acct === "again") acctSet("out", "");
      });
      box.addEventListener("submit", function (e) {
        var f = e.target; e.preventDefault();
        acctSend(f.querySelector("input[type=email]").value.trim(), f.querySelector("input[type=checkbox]").checked);
      });
    });
  }
  // Redraw every account panel on the page (top menu, phone menu, My learning).
  function acctSet(state, msg) {
    if (!ACCT) return;
    ACCT.state = state; if (msg !== undefined) ACCT.msg = msg;
    document.querySelectorAll(".dd-account, .acct-box").forEach(function (box) {
      if (box.contains(document.activeElement) && document.activeElement.tagName === "INPUT") return;
      box.innerHTML = accountPanel();
    });
    document.querySelectorAll(".tn-account > .tn-btn").forEach(function (b) { b.textContent = getSess() ? "Account" : "Sign in"; });
  }

  /* ---------- comfort settings: text size and dark mode ---------- */
  var prefs = loadKey(PREF_KEY);
  function applyPrefs() {
    var r = document.documentElement;
    r.classList.toggle("fs-s", prefs.size === "s");
    r.classList.toggle("fs-l", prefs.size === "l");
    r.classList.toggle("fs-xl", prefs.size === "xl");
    r.classList.toggle("dark", !!prefs.dark);
  }
  applyPrefs();
  function displayMenu() {
    var sizes = [["s", "Smaller"], ["", "Normal"], ["l", "Larger"], ["xl", "Largest"]];
    return '<div class="tn-item tn-display"><button class="tn-btn" type="button" aria-expanded="false" aria-label="Display settings">Aa</button>' +
      '<div class="dd dd-display"><p class="dd-head">Text size</p><div class="seg">' + sizes.map(function (s) {
        return '<button type="button" data-size="' + s[0] + '" class="' + ((prefs.size || "") === s[0] ? "on" : "") + '">' + s[1] + "</button>";
      }).join("") + '</div><p class="dd-head">Colours</p><div class="seg">' +
      '<button type="button" data-dark="0" class="' + (prefs.dark ? "" : "on") + '">Light</button><button type="button" data-dark="1" class="' + (prefs.dark ? "on" : "") + '">Dark</button></div></div></div>';
  }
  function wireDisplay(root) {
    root.querySelectorAll("[data-size]").forEach(function (b) {
      b.onclick = function (e) { e.stopPropagation(); prefs.size = b.dataset.size; saveKey(PREF_KEY, prefs); applyPrefs(); root.querySelectorAll("[data-size]").forEach(function (x) { x.classList.toggle("on", x === b); }); if (typeof fitTitles === "function") fitTitles(); };
    });
    root.querySelectorAll("[data-dark]").forEach(function (b) {
      b.onclick = function (e) { e.stopPropagation(); prefs.dark = b.dataset.dark === "1"; saveKey(PREF_KEY, prefs); applyPrefs(); root.querySelectorAll("[data-dark]").forEach(function (x) { x.classList.toggle("on", x === b); }); };
    });
  }

  /* ---------- review: practise key terms from lessons you've finished ---------- */
  var GAPS = [0, 1, 2, 4, 8, 16];
  function cardKey(lessonId, term) { return lessonId + "|" + term; }
  function termPool(scope) {
    var lessons = scope === "done" ? ALL.filter(function (l) { return isDone(l.id); }) : (LEVELS[scope - 1] || LV).lessons;
    var pool = [];
    lessons.forEach(function (l) { l.terms.forEach(function (t) { pool.push({ l: l, term: t[0], def: t[1], key: cardKey(l.id, t[0]) }); }); });
    return pool;
  }
  function dueCount() {
    var today = dayKey();
    return termPool("done").filter(function (c) { var s = extras.cards[c.key]; return !s || s.due <= today; }).length;
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* One question at a time, with a bar showing how far through you are. */
  function runQuestions(box, items, opts) {
    var i = 0, right = 0, again = [];
    function show() {
      var item = items[i];
      box.innerHTML = '<div class="rv-top"><span>' + opts.label + " " + (i + 1) + " of " + items.length + '</span><span>' + right + ' right so far</span></div>' +
        '<div class="bar"><span style="width:' + Math.round(100 * i / items.length) + '%"></span></div>' +
        '<div class="q rv-q"><p class="rv-ask">' + item.ask + "</p>" + (item.from ? '<p class="rv-from">' + item.from + "</p>" : "") + '<div class="rv-opts"></div><div class="rv-after"></div></div>';
      var wrap = box.querySelector(".rv-opts");
      item.options.forEach(function (o, oi) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "opt"; b.textContent = o;
        b.onclick = function () {
          var all = wrap.querySelectorAll(".opt"); all.forEach(function (x) { x.disabled = true; });
          all[item.answer].classList.add("right");
          var ok = oi === item.answer;
          if (ok) right++; else { b.classList.add("wrong"); again.push(item); }
          if (opts.onAnswer) opts.onAnswer(item, ok);
          var after = box.querySelector(".rv-after");
          after.innerHTML = '<div class="explain">' + (ok ? "Correct, Abbas. " : "Not quite, Abbas. ") + esc(item.explain || "") + '</div><button class="btn" type="button">' + (i + 1 < items.length ? "Next question →" : "See my result") + "</button>";
          var nb = after.querySelector(".btn"); nb.focus();
          nb.onclick = function () { i++; if (i < items.length) show(); else opts.done(right, items.length, again); };
        };
        wrap.appendChild(b);
      });
    }
    show();
  }

  function renderReview() {
    var main = $("#main"), test = parseInt(new URLSearchParams(location.search).get("test"), 10);
    if (test && LEVELS[test - 1] && LEVELS[test - 1].ready) return renderTest(LEVELS[test - 1]);
    var done = ALL.filter(function (l) { return isDone(l.id); }).length;
    var scope = done ? "done" : LV.n;
    function intro() {
      var pool = termPool(scope), today = dayKey();
      var due = pool.filter(function (c) { var s = extras.cards[c.key]; return !s || s.due <= today; });
      var learnt = pool.filter(function (c) { var s = extras.cards[c.key]; return s && s.box >= 4; }).length;
      main.innerHTML =
        '<section class="hero"><span class="eyebrow">Practise</span><h1>Review what you’ve learned</h1>' +
        '<p class="lead">Abbas, short practice rounds help lessons stick. Each round asks you to match 10 key terms to their meaning. Terms you get wrong come back sooner; ones you know well come back less often.</p></section>' +
        '<div class="rv-panel"><div class="rv-choose"><span>Practise terms from:</span>' +
        '<button type="button" data-scope="done" class="' + (scope === "done" ? "on" : "") + '"' + (done ? "" : " disabled") + ">Lessons I’ve finished (" + done + ")</button>" +
        READY.map(function (m) { return '<button type="button" data-scope="' + m.n + '" class="' + (scope === m.n ? "on" : "") + '">Level ' + m.n + "</button>"; }).join("") + "</div>" +
        (done ? "" : '<p class="rv-note"><em>You haven’t finished a lesson yet, so this round uses Level ' + LV.n + ' terms. Once you pass a lesson quiz, its terms are added to your review.</em></p>') +
        '<dl class="stats rv-stats"><div><dt>' + pool.length + "</dt><dd>terms in this set</dd></div><div><dt>" + due.length + "</dt><dd>due today</dd></div><div><dt>" + learnt + "</dt><dd>known well</dd></div></dl>" +
        '<p class="rv-go"><button class="btn" type="button" id="rv-start"' + (pool.length < 4 ? " disabled" : "") + ">Start a 10-question round</button></p></div>" +
        '<div id="rv-box"></div>';
      main.querySelectorAll("[data-scope]").forEach(function (b) {
        b.onclick = function () { scope = b.dataset.scope === "done" ? "done" : +b.dataset.scope; intro(); };
      });
      $("#rv-start").onclick = function () { start(pool, due); };
      heroToBand(); fitTitles();
    }
    function start(pool, due) {
      var picks = shuffle(due).concat(shuffle(pool.filter(function (c) { return due.indexOf(c) < 0; }))).slice(0, 10);
      var everyDef = allTerms();
      var items = shuffle(picks).map(function (c) {
        // Wrong answers come from the same level, so they are not too easy to rule out.
        var near = everyDef.filter(function (t) { return t.lesson.level === c.l.level && t.term !== c.term && t.def !== c.def; });
        var wrong = shuffle(near).slice(0, 3).map(function (t) { return t.def; });
        var options = shuffle(wrong.concat([c.def]));
        return { card: c, ask: "What does <strong>" + esc(c.term) + "</strong> mean?", from: "From " + (c.l.level > 1 ? "Level " + c.l.level + ", lesson " + c.l.num : "Lesson " + c.l.num) + ": " + esc(c.l.title), options: options, answer: options.indexOf(c.def), explain: c.term + ": " + c.def };
      });
      var box = $("#rv-box");
      main.querySelector(".rv-panel").hidden = true;
      runQuestions(box, items, {
        label: "Question",
        onAnswer: function (item, ok) {
          var s = extras.cards[item.card.key] || { box: 0 };
          s.box = ok ? Math.min(5, (s.box || 0) + 1) : 1;
          s.due = addDays(ok ? GAPS[s.box] : 0);
          extras.cards[item.card.key] = s; saveExtras();
        },
        done: function (right, total, again) {
          logDay("r");
          if (right / total >= 0.8) celebrate();
          box.innerHTML = '<div class="result ' + (right / total >= 0.6 ? "pass" : "fail") + '">Abbas, you got ' + right + " of " + total + " right. " +
            (right === total ? "Perfect round." : right / total >= 0.8 ? "Great work." : "Those you missed will come back soon, so they’ll stick.") + "</div>" +
            (again.length ? '<h2>Worth another look</h2><ul class="terms">' + again.map(function (x) { return "<li><dfn>" + esc(x.card.term) + "</dfn>: " + esc(x.card.def) + ' <a href="' + lessonHref(x.card.l.id) + '">Open the lesson</a></li>'; }).join("") + "</ul>" : "") +
            '<p class="rv-go"><button class="btn" type="button" id="rv-again">Another round</button> <a class="btn secondary" href="' + levelHref(LV.n) + '">Back to home</a></p>';
          $("#rv-again").onclick = intro;
          window.scrollTo(0, 0);
        }
      });
      window.scrollTo(0, 0);
    }
    intro();
  }

  /* ---------- level test and certificate ---------- */
  var TEST_LEN = 20, TEST_PASS = 0.8;
  function certHTML(m, t) {
    var date = new Date(t.date + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    return '<div class="certificate-card" id="cert-' + m.n + '"><p class="cc-top">Abbas’ AI Academy</p><p class="cc-small">This certifies that</p><p class="cc-name">Abbas</p>' +
      '<p class="cc-small">has completed</p><p class="cc-level">Level ' + m.n + ": " + esc(m.name) + "</p>" +
      '<p class="cc-small">passing the level test with ' + t.best + " out of " + TEST_LEN + "</p><p class=\"cc-date\">" + date + "</p></div>" +
      '<p class="rv-go"><button class="btn" type="button" data-print="' + m.n + '">Print or save as PDF</button></p>';
  }
  function wirePrint(root) {
    root.querySelectorAll("[data-print]").forEach(function (b) {
      b.onclick = function () {
        var c = document.getElementById("cert-" + b.dataset.print);
        document.querySelectorAll(".certificate-card").forEach(function (x) { x.classList.toggle("print-me", x === c); });
        document.body.classList.add("printing-cert");
        window.print();
        setTimeout(function () { document.body.classList.remove("printing-cert"); }, 500);
      };
    });
  }
  function renderTest(m) {
    setLevel(m);
    var main = $("#main");
    var bank = [];
    m.lessons.forEach(function (l) { l.quiz.forEach(function (q) { bank.push({ q: q, l: l }); }); });
    function intro() {
      var t = extras.tests[m.id];
      document.title = "Level " + m.n + " test · Abbas’ AI Academy";
      main.innerHTML = '<section class="hero"><span class="eyebrow">Level ' + m.n + " · " + esc(m.name) + '</span><h1>Level ' + m.n + ' test</h1>' +
        '<p class="lead">Abbas, this test mixes ' + TEST_LEN + " questions from all " + m.lessons.length + " lessons in Level " + m.n + ". Get " + Math.ceil(TEST_LEN * TEST_PASS) + " or more right to earn your certificate. You can take it as many times as you like.</p></section>" +
        (t && t.passed ? '<h2>Your certificate</h2>' + certHTML(m, t) : "") +
        '<div class="rv-panel"><dl class="stats rv-stats"><div><dt>' + TEST_LEN + "</dt><dd>questions</dd></div><div><dt>" + Math.ceil(TEST_LEN * TEST_PASS) + "</dt><dd>needed to pass</dd></div><div><dt>" + (t ? t.best + "/" + TEST_LEN : "–") + "</dt><dd>your best score</dd></div></dl>" +
        '<p class="rv-go"><button class="btn" type="button" id="test-start">' + (t ? "Take the test again" : "Start the test") + "</button></p></div><div id=\"rv-box\"></div>";
      wirePrint(main);
      $("#test-start").onclick = start;
      heroToBand(); fitTitles();
    }
    function start() {
      var items = shuffle(bank).slice(0, TEST_LEN).map(function (x) {
        var mq = mixOptions(x.q);
        return { ask: esc(x.q.q), from: "From lesson " + x.l.num + ": " + esc(x.l.title), options: mq.options, answer: mq.answer, explain: x.q.explain };
      });
      main.querySelector(".rv-panel").hidden = true;
      main.querySelectorAll(".certificate-card, .certificate-card + .rv-go, main > h2").forEach(function (x) { x.hidden = true; });
      var box = $("#rv-box");
      runQuestions(box, items, {
        label: "Question",
        done: function (right, total) {
          var passed = right >= Math.ceil(total * TEST_PASS);
          var prev = extras.tests[m.id] || {};
          var rec = { best: Math.max(right, prev.best || 0), passed: passed || !!prev.passed, date: passed && !prev.passed ? dayKey() : (prev.date || dayKey()) };
          extras.tests[m.id] = rec; saveExtras(); logDay("r");
          if (passed) celebrate();
          box.innerHTML = '<div class="result ' + (passed ? "pass" : "fail") + '">Abbas, you scored ' + right + " out of " + total + ". " +
            (passed ? "You passed the Level " + m.n + " test. Here is your certificate." : "You need " + Math.ceil(total * TEST_PASS) + " to pass. Review the lessons you’re unsure of and try again.") + "</div>" +
            (rec.passed ? certHTML(m, rec) : "") +
            '<p class="rv-go"><button class="btn secondary" type="button" id="test-again">Back to the test page</button> <a class="btn secondary" href="review.html">Practise key terms</a></p>';
          wirePrint(box);
          $("#test-again").onclick = intro;
          window.scrollTo(0, 0);
        }
      });
      window.scrollTo(0, 0);
    }
    intro();
  }

  /* ---------- save codes: move progress to another device ---------- */
  function makeCode() {
    var json = JSON.stringify({ p: progress, x: extras });
    return "AIA1-" + btoa(unescape(encodeURIComponent(json)));
  }
  function readCode(code) {
    code = String(code || "").trim().replace(/\s+/g, "");
    if (code.indexOf("AIA1-") !== 0) throw new Error("bad");
    var data = JSON.parse(decodeURIComponent(escape(atob(code.slice(5)))));
    if (!data || typeof data.p !== "object") throw new Error("bad");
    return data;
  }

  /* ---------- My learning page ---------- */
  function renderMe() {
    var main = $("#main");
    var s = streak(), tl = todayLessons();
    var days = []; for (var i = -13; i <= 0; i++) days.push(addDays(i));
    var noted = ALL.filter(function (l) { return extras.notes[l.id] && extras.notes[l.id].trim(); });
    var certs = READY.filter(function (m) { return extras.tests[m.id] && extras.tests[m.id].passed; });
    var totalDone = ALL.filter(function (l) { return isDone(l.id); }).length;
    main.innerHTML =
      '<section class="hero"><span class="eyebrow">Your space</span><h1>My learning</h1><p class="lead">Abbas, here is your streak, your notes, your certificates and a way to carry your progress to another device.</p></section>' +
      '<nav class="jump" aria-label="On this page"><a href="#streak">Streak</a><a href="#notes">My notes</a><a href="#certs">Certificates</a><a href="#move">Move my progress</a></nav>' +
      '<section id="streak"><span class="kicker">Keep going</span><h2>Your streak and daily goal</h2>' +
      '<dl class="stats rv-stats"><div><dt>' + s + "</dt><dd>day streak</dd></div><div><dt>" + tl + " / " + extras.goal + "</dt><dd>lessons today</dd></div><div><dt>" + totalDone + "</dt><dd>lessons done in total</dd></div></dl>" +
      '<div class="day-row" aria-label="The last 14 days">' + days.map(function (d) {
        var on = extras.days[d], lbl = new Date(d + "T12:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric" });
        return '<span class="day' + (on ? " on" : "") + (d === dayKey() ? " today" : "") + '" title="' + lbl + (on ? ": you learned something" : "") + '"><b>' + lbl.split(" ")[0].slice(0, 2) + "</b>" + lbl.split(" ")[1] + "</span>";
      }).join("") + "</div>" +
      '<p class="rv-note"><em>A day counts towards your streak when you pass a lesson quiz or finish a review round.</em></p>' +
      '<div class="rv-choose"><span>My daily goal:</span>' + [1, 2, 3].map(function (g) { return '<button type="button" data-goal="' + g + '" class="' + (extras.goal === g ? "on" : "") + '">' + g + " lesson" + (g > 1 ? "s" : "") + " a day</button>"; }).join("") + "</div></section>" +
      '<section id="notes"><span class="kicker">Your words</span><h2>My notes</h2>' +
      (noted.length ? '<ul class="notes-list">' + noted.map(function (l) {
        return '<li><a href="' + lessonHref(l.id) + '#my-notes"><span class="nl-tag">' + (l.level > 1 ? "Level " + l.level + ", lesson " + l.num : "Lesson " + l.num) + "</span><strong>" + esc(l.title) + '</strong></a><p>' + esc(extras.notes[l.id]).replace(/\n/g, "<br>") + "</p></li>";
      }).join("") + "</ul>" : '<p class="rv-note"><em>No notes yet. Every lesson has a "My notes" box just above the quiz; anything you type there appears here.</em></p>') + "</section>" +
      '<section id="certs"><span class="kicker">Proof of your progress</span><h2>Certificates</h2>' +
      (certs.length ? certs.map(function (m) { return certHTML(m, extras.tests[m.id]); }).join("") : '<p class="rv-note"><em>Pass a level test to earn a certificate.</em></p>') +
      '<ul class="test-links">' + READY.map(function (m) { var t = extras.tests[m.id]; return '<li><a href="review.html?test=' + m.n + '">Level ' + m.n + " test: " + esc(m.name) + "</a><span>" + (t ? (t.passed ? "Passed, best " : "Best ") + t.best + "/" + TEST_LEN : "Not taken yet") + "</span></li>"; }).join("") + "</ul></section>" +
      '<section id="move"><span class="kicker">Laptop, phone, tablet</span><h2>Move my progress</h2>' +
      (ACCT ? '<div class="acct-box acct-page">' + accountPanel() + "</div>" +
        '<p class="rv-note"><em>Not signed in on a device? You can still carry your progress by hand: copy your save code here, send it to yourself, then paste it on the other device.</em></p>'
        : '<p>Your progress is saved in this browser only. To carry it to another device, copy your save code here, send it to yourself (for example by email), then paste it on the other device.</p>') +
      '<div class="move-grid"><div><h3>1. Copy my code</h3><textarea id="code-out" readonly rows="4" aria-label="Your save code"></textarea><p><button class="btn" type="button" id="code-copy">Copy code</button> <span class="code-msg" id="copy-msg"></span></p></div>' +
      '<div><h3>2. Paste a code here</h3><textarea id="code-in" rows="4" aria-label="Paste a save code" placeholder="Paste a code that starts with AIA1-"></textarea><p><button class="btn secondary" type="button" id="code-load">Load this code</button> <span class="code-msg" id="load-msg"></span></p></div></div>' +
      '<p style="margin-top:28px"><button class="btn secondary" type="button" id="reset-all">Reset all my progress</button></p></section>';
    $("#code-out").value = makeCode();
    $("#code-copy").onclick = function () {
      var t = $("#code-out"); t.select();
      var ok = function () { $("#copy-msg").textContent = "Copied."; };
      if (navigator.clipboard) navigator.clipboard.writeText(t.value).then(ok, function () { document.execCommand("copy"); ok(); }); else { document.execCommand("copy"); ok(); }
    };
    $("#code-load").onclick = function () {
      try {
        var d = readCode($("#code-in").value);
        if (!confirm("Abbas, replace the progress in this browser with the progress from this code?")) return;
        progress = d.p; save(progress);
        if (d.x) { extras = d.x; saveExtras(); }
        $("#load-msg").textContent = "Loaded. Refreshing…";
        setTimeout(function () { location.reload(); }, 600);
      } catch (e) { $("#load-msg").textContent = "That code didn’t work. Check you copied all of it."; }
    };
    $("#reset-all").onclick = function () {
      if (confirm("Abbas, reset all your progress, notes, streak and test scores in this browser?")) { progress = {}; save(progress); extras = { days: {}, notes: {}, cards: {}, tests: {}, goal: 1 }; saveExtras(); location.reload(); }
    };
    main.querySelectorAll("[data-goal]").forEach(function (b) { b.onclick = function () { extras.goal = +b.dataset.goal; saveExtras(); renderMe(); fitTitles(); location.hash = "streak"; }; });
    wirePrint(main); wireAccount(main);
    heroToBand();
  }

  /* ---------- lesson page: notes box and read aloud ---------- */
  function lessonExtras() {
    var l = lessonById(currentLessonId()) || ALL[0];
    var quiz = $("#quiz");
    if (quiz) {
      quiz.insertAdjacentHTML("beforebegin", '<section class="my-notes" id="my-notes"><h2>My notes</h2><p class="rv-note"><em>Jot down anything you want to remember, Abbas. Notes save as you type and are collected on your <a href="me.html#notes">My learning</a> page.</em></p>' +
        '<textarea id="note-box" rows="5" aria-label="My notes for this lesson" placeholder="Type your notes here…"></textarea><p class="code-msg" id="note-msg"></p></section>');
      var box = $("#note-box"), msg = $("#note-msg"), tm;
      box.value = extras.notes[l.id] || "";
      box.addEventListener("input", function () {
        clearTimeout(tm); msg.textContent = "Saving…";
        tm = setTimeout(function () { extras.notes[l.id] = box.value; if (!box.value.trim()) delete extras.notes[l.id]; saveExtras(); msg.textContent = "Saved."; }, 400);
      });
    }
    // Read aloud, one paragraph at a time, using the browser's built-in voice.
    var il = document.querySelector(".in-lesson .il-head");
    if (!il || !("speechSynthesis" in window)) return;
    il.insertAdjacentHTML("afterend", '<div class="read-aloud"><button class="btn secondary" type="button" id="ra-play">Read this lesson aloud</button><button class="btn secondary" type="button" id="ra-stop" hidden>Stop</button></div>');
    var play = $("#ra-play"), stop = $("#ra-stop"), synth = window.speechSynthesis, state = "idle", parts = [], at = 0;
    function voice() {
      var vs = synth.getVoices();
      return vs.find(function (v) { return /en-GB/i.test(v.lang); }) || vs.find(function (v) { return /^en/i.test(v.lang); });
    }
    function mark(el) { document.querySelectorAll(".reading-now").forEach(function (x) { x.classList.remove("reading-now"); }); if (el) { el.classList.add("reading-now"); el.scrollIntoView({ block: "center", behavior: "smooth" }); } }
    function speakNext() {
      if (at >= parts.length) return finish();
      var el = parts[at], u = new SpeechSynthesisUtterance(el.textContent.replace(/\s+/g, " ").trim());
      var v = voice(); if (v) u.voice = v;
      u.rate = 0.95;
      u.onend = function () { if (state === "playing") { at++; speakNext(); } };
      mark(el); synth.speak(u);
    }
    function finish() { synth.cancel(); state = "idle"; at = 0; mark(null); play.textContent = "Read this lesson aloud"; stop.hidden = true; }
    play.onclick = function () {
      if (state === "idle") {
        var top = document.querySelector(".page-band h1"), lead = document.querySelector(".page-band .lead");
        parts = [top, lead].filter(Boolean).concat(Array.prototype.filter.call(document.querySelectorAll("#lesson > h2, #lesson > p, #lesson > ul > li, #lesson > ol > li, #lesson > .callout"), function (el) {
          return !el.closest(".quiz, .sources, .my-notes, .in-lesson") && el.textContent.trim();
        }));
        state = "playing"; at = 0; play.textContent = "Pause"; stop.hidden = false; speakNext();
      } else if (state === "playing") { state = "paused"; synth.pause(); play.textContent = "Resume"; }
      else { state = "playing"; synth.resume(); play.textContent = "Pause"; }
    };
    stop.onclick = finish;
    window.addEventListener("beforeunload", function () { synth.cancel(); });
  }

  /* ---------- home page: streak line ---------- */
  function homeExtras() {
    var paths = $("#paths");
    if (!paths) return;
    var s = streak(), tl = todayLessons(), due = dueCount(), anyDone = ALL.some(function (l) { return isDone(l.id); });
    var anchor = document.querySelector(".stats-band") || paths;
    anchor.insertAdjacentHTML("beforebegin", '<div class="streak-wrap"><div class="streak-strip">' +
      '<div><span class="ss-big">' + s + '</span><span>day streak</span></div>' +
      '<div><span class="ss-big">' + tl + " / " + extras.goal + '</span><span>today’s goal (lessons)</span></div>' +
      '<div><span class="ss-big">' + (anyDone ? due : "–") + '</span><span>' + (anyDone ? "terms due for review" : "review opens after your first lesson") + "</span></div>" +
      '<div class="ss-links"><a class="btn" href="review.html">Review now</a><a class="btn secondary" href="me.html">My learning</a></div></div></div>');
  }

  /* ---------- lessons page: level test box ---------- */
  function lessonsExtras() {
    var road = $("#road");
    if (!road) return;
    var t = extras.tests[LV.id];
    var spot = $("#lessons") || road;
    spot.insertAdjacentHTML("afterend", '<section id="level-test" class="cta-band test-band"><span class="kicker">Level ' + LV.n + ' test</span><h2>Ready to prove it, Abbas?</h2>' +
      "<p>" + TEST_LEN + " questions from across all " + LESSONS.length + " lessons. Get " + Math.ceil(TEST_LEN * TEST_PASS) + " right to earn your Level " + LV.n + " certificate." + (t ? " Your best so far: " + t.best + "/" + TEST_LEN + (t.passed ? ", passed." : ".") : "") + "</p>" +
      '<a class="btn" href="review.html?test=' + LV.n + '">' + (t && t.passed ? "See my certificate" : "Take the Level " + LV.n + " test") + "</a></section>");
  }

  buildTopNav();
  buildInline();
  if (page === "review") renderReview();
  else if (page === "me") renderMe();
  else if (page === "lesson") lessonExtras();
  else if (page === "home") homeExtras();
  else if (page === "lessons") lessonsExtras();
  acctStart();



  /* Footer with grouped, clearly labelled links (same on every page). */
  function buildFooter() {
    var f = document.getElementById("site-footer");
    if (!f) return;
    var next = nextAll();
    f.innerHTML = '<div class="foot-grid">' +
      '<div class="foot-brand"><p class="foot-name">Abbas’ AI Academy</p><p>Your path from AI beginner to master, one short lesson at a time.</p><p class="foot-note">Your progress is saved in this browser only.</p></div>' +
      '<div><p class="foot-head">Learn</p><ul><li><a href="' + levelHref(LV.n) + '">Home</a></li><li><a href="' + lessonsHref(LV.n) + '">All Level ' + LV.n + ' lessons</a></li><li><a href="' + toolsHref() + '">AI tools directory</a></li><li><a href="glossary.html">Glossary</a></li><li><a href="review.html">Review</a></li><li><a href="review.html?test=' + LV.n + '">Level ' + LV.n + ' test</a></li><li><a href="me.html">My learning</a></li>' +
        (next ? '<li><a href="' + lessonHref(next.id) + '">Next lesson: ' + esc(next.title) + "</a></li>" : "") + "</ul></div>" +
      '<div><p class="foot-head">Level ' + LV.n + ' units</p><ul>' + UNITS.map(function (u, i) {
        var first = LESSONS.find(function (l) { return l.unit === u.id; });
        return '<li><a href="' + lessonHref(first.id) + '">' + (i + 1) + ". " + esc(u.title.replace(/^Unit \d+ · /, "")) + "</a></li>";
      }).join("") + "</ul></div>" +
      '<div><p class="foot-head">Your road</p><ul class="foot-plain">' + LEVELS.map(function (m) {
        var t = "Level " + m.n + ": " + esc(m.name);
        return "<li>" + (m.ready ? '<a href="' + levelHref(m.n) + '">' + t + "</a>" : t + ' <span class="foot-soon">coming soon</span>') + (m === LV ? ' <span class="foot-tag">Now</span>' : "") + "</li>";
      }).join("") + "</ul></div>" +
      "</div>" + '<div class="foot-bottom">Every lesson lists its sources so you can check the facts.</div>';
  }
  buildFooter();

  /* Menu button for smaller screens, where the left-hand menu is hidden. */
  function initMenu() {
    var head = document.querySelector(".site-header .wrap");
    if (!head || document.querySelector(".menu-btn")) return;
    var btn = document.createElement("button");
    btn.className = "menu-btn"; btn.type = "button"; btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", "drawer");
    btn.innerHTML = '<span class="menu-icon" aria-hidden="true"></span>Menu';
    head.insertBefore(btn, head.firstChild);
    var drawer = document.createElement("div"); drawer.id = "drawer"; drawer.className = "drawer"; drawer.hidden = true;
    document.body.appendChild(drawer);
    function close() { drawer.hidden = true; document.body.classList.remove("menu-open"); btn.setAttribute("aria-expanded", "false"); }
    btn.onclick = function () {
      if (!drawer.hidden) return close();
      drawer.innerHTML = '<div class="drawer-panel">' + navTab() + '<div class="drawer-display">' + displayMenu() + (ACCT ? '<div class="acct-box">' + accountPanel() + "</div>" : "") + "</div></div>";
      wireDisplay(drawer); wireAccount(drawer);
      drawer.hidden = false; document.body.classList.add("menu-open"); btn.setAttribute("aria-expanded", "true");
      var here = drawer.querySelector(".here a, a.here"); if (here) here.focus(); else { var a = drawer.querySelector("a"); if (a) a.focus(); }
    };
    drawer.addEventListener("click", function (e) { if (e.target === drawer || e.target.closest("a")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !drawer.hidden) { close(); btn.focus(); } });
  }
  initMenu();
  document.querySelectorAll(".nav a.active").forEach(function (a) { a.setAttribute("aria-current", "page"); });

  /* Shrink long titles so each fits on one line; very long ones may still wrap at the minimum size. */
  function fitTitles() {
    document.querySelectorAll("main h1, main h2, .hero-band h1").forEach(function (h) {
      h.style.fontSize = "";
      h.style.whiteSpace = "nowrap";
      var size = parseFloat(getComputedStyle(h).fontSize), min = h.tagName === "H1" ? 22 : 20;
      while (h.scrollWidth > h.clientWidth && size > min) { size -= 1; h.style.fontSize = size + "px"; }
      h.style.whiteSpace = "";
    });
  }
  fitTitles();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTitles);
  window.addEventListener("resize", fitTitles);

  /* ---------- movement and feedback ---------- */
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Celebrate a passed quiz with a short burst of orange and gold confetti.
  function celebrate() {
    if (calm) return;
    var c = document.createElement("canvas");
    c.className = "confetti";
    c.width = window.innerWidth; c.height = window.innerHeight;
    document.body.appendChild(c);
    var ctx = c.getContext("2d"), cs = getComputedStyle(document.documentElement), colours = [cs.getPropertyValue("--accent").trim() || "#e4572e", cs.getPropertyValue("--gold").trim() || "#e0a800", cs.getPropertyValue("--ink").trim() || "#111111", "#ffffff"], bits = [];
    for (var i = 0; i < 140; i++) bits.push({ x: c.width / 2, y: c.height * 0.55, vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 16 - 4, s: 5 + Math.random() * 6, r: Math.random() * 6, c: colours[i % colours.length] });
    var t = 0;
    (function frame() {
      ctx.clearRect(0, 0, c.width, c.height);
      bits.forEach(function (b) { b.vy += 0.45; b.x += b.vx; b.y += b.vy; b.r += 0.2; ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r); ctx.fillStyle = b.c; ctx.fillRect(-b.s / 2, -b.s / 2, b.s, b.s * 0.6); ctx.restore(); });
      if (++t < 110) requestAnimationFrame(frame); else c.remove();
    })();
  }

  function animate() {
    // Progress bars fill up from empty, and big percentages count up.
    document.querySelectorAll(".bar > span").forEach(function (b) {
      var w = b.style.width; if (calm || !w) return;
      b.style.width = "0"; requestAnimationFrame(function () { requestAnimationFrame(function () { b.style.width = w; }); });
    });
    document.querySelectorAll(".side-big").forEach(function (el) {
      var target = parseInt(el.textContent, 10) || 0; if (calm || !target) return;
      var start = performance.now();
      (function tick(now) { var k = Math.min(1, (now - start) / 900); el.textContent = Math.round(target * k) + "%"; if (k < 1) requestAnimationFrame(tick); })(start);
    });

    // Cards and sections slide gently into view as you scroll.
    if (!calm && "IntersectionObserver" in window) {
      var items = document.querySelectorAll("main h2, .lesson-item, .panel, .callout, .q, .terms li, .level, .term-strip, .table-scroll, .unit-card, .steps li, .faq details, .cta-band, .stats div");
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px" });
      items.forEach(function (el, i) { el.classList.add("reveal"); el.style.transitionDelay = 0 + "ms"; io.observe(el); });
    }

    // Thin reading bar at the top shows how far through the lesson you are.
    if (page === "lesson") {
      var rb = document.createElement("div"); rb.className = "read-bar"; document.body.appendChild(rb);
      var upd = function () { var h = document.documentElement; var k = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight); rb.style.transform = "scaleX(" + Math.min(1, Math.max(0, k)) + ")"; };
      window.addEventListener("scroll", upd, { passive: true }); upd();
    }
  }
  animate();
})();
