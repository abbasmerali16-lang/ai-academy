(function () {
  "use strict";
  var LESSONS = window.LEVEL1 || [];
  var KEY = "aiAcademy.level1.v1";

  /* ---------- progress (saved in this browser only) ---------- */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* storage blocked: progress just won't persist */ }
  }
  var progress = load();
  function isDone(id) { return !!(progress[id] && progress[id].passed); }
  function doneCount() { return LESSONS.filter(function (l) { return isDone(l.id); }).length; }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function renderProgress(el) {
    if (!el) return;
    var n = doneCount(), t = LESSONS.length, pct = Math.round((n / t) * 100);
    el.innerHTML =
      '<div class="progress-row"><span>Your Level 1 progress, Abbas</span><span>' + n + " of " + t + " lessons · " + pct + "%</span></div>" +
      '<div class="bar"><span style="width:' + pct + '%"></span></div>';
  }

  /* ---------- home page ---------- */
  function renderHome() {
    renderProgress($("#progress"));
    var list = $("#lesson-list");
    var UNITS = window.LEVEL1_UNITS || [];
    var lastUnit = null;
    list.innerHTML = LESSONS.map(function (l, i) {
      var done = isDone(l.id);
      var head = "";
      if (l.unit && l.unit !== lastUnit) {
        lastUnit = l.unit;
        var u = UNITS.find(function (x) { return x.id === l.unit; });
        if (u) head = '<li class="unit-head"><h3>' + esc(u.title) + "</h3><p>" + esc(u.blurb) + "</p></li>";
      }
      return head + '<li class="lesson-item' + (done ? " done" : "") + '"><a href="lesson.html?id=' + l.id + '">' +
        '<span class="lesson-num">' + (done ? "✓" : i + 1) + "</span>" +
        '<span class="lesson-text"><strong>' + esc(l.title) + "</strong><span>" + esc(l.summary) + "</span></span>" +
        '<span class="lesson-meta">' + l.minutes + " min</span></a></li>";
    }).join("");

    var next = LESSONS.find(function (l) { return !isDone(l.id); });
    var start = $("#start-btn");
    if (next) {
      start.href = "lesson.html?id=" + next.id;
      start.textContent = doneCount() ? "Welcome back, Abbas. Continue: " + next.title : "Start Lesson 1";
    } else {
      start.href = "#certificate";
      start.textContent = "Level 1 complete, Abbas";
    }
    var cert = $("#certificate");
    if (cert) cert.hidden = !!next;
    renderLanding(next);

    var reset = $("#reset");
    if (reset) reset.onclick = function () {
      if (confirm("Abbas, reset all your Level 1 progress in this browser?")) { progress = {}; save(progress); renderHome(); }
    };
  }

  /* Home page landing sections: hero card, numbers strip, unit cards, closing call to action. */
  function renderLanding(next) {
    var UNITS = window.LEVEL1_UNITS || [];
    var mins = LESSONS.reduce(function (a, l) { return a + l.minutes; }, 0);
    var terms = LESSONS.reduce(function (a, l) { return a + l.terms.length; }, 0);
    var n = doneCount(), pct = Math.round(100 * n / LESSONS.length);
    var stats = $("#stats");
    if (stats) stats.innerHTML = [[LESSONS.length, "short lessons"], [UNITS.length, "units"], ["~" + Math.round(mins / 60), "hours in total"], [terms, "key terms explained"]]
      .map(function (x) { return "<div><dt>" + x[0] + "</dt><dd>" + x[1] + "</dd></div>"; }).join("");
    var hv = $("#hero-visual");
    if (hv) {
      var l = next || LESSONS[LESSONS.length - 1], i = LESSONS.indexOf(l);
      hv.innerHTML = '<div class="hv-card">' +
        '<span class="hv-label">' + (next ? (n ? "Continue where you left off" : "Your first lesson") : "Level 1 complete") + "</span>" +
        '<div class="hv-lesson"><span class="hv-num">' + (i + 1) + "</span><div><strong>" + esc(l.title) + "</strong><span>" + esc(l.summary) + "</span></div></div>" +
        '<div class="hv-meta"><span>' + l.minutes + " min read</span><span>Activity + quiz</span></div>" +
        '<a class="btn" href="lesson.html?id=' + l.id + '">' + (next ? "Open lesson " + (i + 1) : "Review lesson " + (i + 1)) + "</a></div>" +
        '<div class="hv-card hv-progress"><div class="hv-row"><span>Your progress</span><b>' + pct + "%</b></div>" +
        '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
        '<ul class="hv-units">' + UNITS.map(function (u) {
          var ls = LESSONS.filter(function (x) { return x.unit === u.id; }), d = ls.filter(function (x) { return isDone(x.id); }).length;
          return "<li><span>" + esc(u.title.replace(/^Unit (\d+) · /, "$1. ")) + "</span><b>" + d + "/" + ls.length + "</b></li>";
        }).join("") + "</ul></div>";
    }
    var uc = $("#unit-cards");
    if (uc) uc.innerHTML = UNITS.map(function (u, k) {
      var ls = LESSONS.filter(function (x) { return x.unit === u.id; }), d = ls.filter(function (x) { return isDone(x.id); }).length;
      var m = ls.reduce(function (a, x) { return a + x.minutes; }, 0);
      var first = ls.find(function (x) { return !isDone(x.id); }) || ls[0];
      return '<a class="unit-card" href="lesson.html?id=' + first.id + '"><span class="uc-num">Unit ' + (k + 1) + "</span>" +
        "<strong>" + esc(u.title.replace(/^Unit \d+ · /, "")) + "</strong><span class=\"uc-blurb\">" + esc(u.blurb) + "</span>" +
        '<span class="uc-meta">' + ls.length + " lessons · " + m + " min · " + d + "/" + ls.length + " done</span>" +
        '<span class="bar"><span style="width:' + Math.round(100 * d / ls.length) + '%"></span></span>' +
        '<span class="uc-go">' + (d === ls.length ? "Review unit" : d ? "Continue unit" : "Start unit") + " →</span></a>";
    }).join("");
    var cta = $("#cta-btn"), start = $("#start-btn");
    if (cta && start) { cta.href = start.getAttribute("href"); cta.textContent = start.textContent; }
  }

  /* ---------- lesson page ---------- */
  function renderLesson() {
    var id = new URLSearchParams(location.search).get("id");
    var idx = LESSONS.findIndex(function (l) { return l.id === id; });
    if (idx < 0) idx = 0;
    var l = LESSONS[idx];
    document.title = l.title + " · Abbas’ AI Academy";

    var html =
      '<p class="crumbs"><a href="index.html">Level 1: Foundations</a> › ' + (unitOf(l) ? esc(unitOf(l).title) + " › " : "") + "Lesson " + (idx + 1) + " of " + LESSONS.length + "</p>" +
      '<span class="eyebrow">Lesson ' + (idx + 1) + " · " + l.minutes + " min read</span>" +
      "<h1>" + esc(l.title) + "</h1>" +
      '<p class="lead">' + esc(l.summary) + "</p>" +
      l.body +
      "<h2>Key terms</h2><ul class=\"terms\">" +
      l.terms.map(function (t) { return "<li><dfn>" + esc(t[0]) + "</dfn>: " + esc(t[1]) + "</li>"; }).join("") +
      "</ul>" +
      renderSources(l) +
      '<section class="quiz" id="quiz"><h2>Check your understanding</h2>' +
      "<p>Get at least " + passMark(l) + " of " + l.quiz.length + " right to complete this lesson.</p>" +
      '<div id="questions"></div><div id="quiz-result"></div></section>' +
      '<nav class="pager">' +
      (idx > 0 ? '<a class="btn secondary" href="lesson.html?id=' + LESSONS[idx - 1].id + '">← ' + esc(LESSONS[idx - 1].title) + "</a>" : '<a class="btn secondary" href="index.html">← All lessons</a>') +
      (idx < LESSONS.length - 1 ? '<a class="btn" id="next-btn" href="lesson.html?id=' + LESSONS[idx + 1].id + '">Next: ' + esc(LESSONS[idx + 1].title) + " →</a>" : '<a class="btn" id="next-btn" href="index.html#certificate">Finish Level 1 →</a>') +
      "</nav>";

    $("#lesson").innerHTML = html;
    mountWidgets($("#lesson"));
    renderQuiz(l);
    window.scrollTo(0, 0);
  }

  function unitOf(l) {
    return (window.LEVEL1_UNITS || []).find(function (u) { return u.id === l.unit; });
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

  function renderQuiz(l) {
    var box = $("#questions");
    var answered = 0, correct = 0;
    l.quiz.forEach(function (item, qi) {
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
        r.innerHTML += '<div class="result pass">Congratulations, Abbas! You\'ve finished every Level 1 lesson. <a href="index.html#certificate">See your completion badge</a>.</div>';
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
    }
  };

  function mountWidgets(root) {
    root.querySelectorAll("[data-widget]").forEach(function (el) {
      var fn = WIDGETS[el.dataset.widget];
      if (fn) fn(el);
    });
  }

  /* ---------- glossary ---------- */
  function renderGlossary() {
    var all = [];
    LESSONS.forEach(function (l, i) { l.terms.forEach(function (t) { all.push({ term: t[0], def: t[1], lesson: l, n: i + 1 }); }); });
    all.sort(function (a, b) { return a.term.localeCompare(b.term); });
    var list = $("#gloss");
    function draw(filter) {
      var f = (filter || "").toLowerCase();
      list.innerHTML = all.filter(function (x) { return !f || (x.term + " " + x.def).toLowerCase().indexOf(f) >= 0; })
        .map(function (x) {
          return "<dt>" + esc(x.term) + "</dt><dd>" + esc(x.def) + ' <a href="lesson.html?id=' + x.lesson.id + '">Lesson ' + x.n + "</a></dd>";
        }).join("") || "<dd>No matching terms.</dd>";
    }
    $("#gloss-search").addEventListener("input", function (e) { draw(e.target.value); });
    draw("");
  }

  var page = document.body.dataset.page;
  if (page === "home") renderHome();
  else if (page === "lesson") renderLesson();
  else if (page === "glossary") renderGlossary();

  /* ---------- side panels (wide screens only) ---------- */
  function allTerms() {
    var all = [];
    LESSONS.forEach(function (l, i) { l.terms.forEach(function (t) { all.push({ term: t[0], def: t[1], lesson: l, n: i + 1 }); }); });
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
      '<p class="side-small">' + n + " of " + t + " lessons done</p>" +
      (next ? '<p class="side-small">Next up: <a href="lesson.html?id=' + next.id + '">' + esc(next.title) + "</a></p>" : "<p class=\"side-small\">Level 1 complete. Brilliant work, Abbas.</p>"));
  }
  function termCard() {
    var t = termOfTheDay();
    return card("Term of the day", '<p class="side-term">' + esc(t.term) + '</p><p class="side-small">' + esc(t.def) + '</p><p class="side-small"><a href="lesson.html?id=' + t.lesson.id + '">From Lesson ' + t.n + "</a></p>");
  }

  function navTab() {
    var UNITS = window.LEVEL1_UNITS || [];
    var curId = page === "lesson" ? (new URLSearchParams(location.search).get("id") || LESSONS[0].id) : null;
    var html = '<nav class="nav-tab" aria-label="Course menu">' +
      '<a class="nav-top' + (page === "home" ? " here" : "") + '" href="index.html">Home</a>' +
      '<a class="nav-top' + (page === "glossary" ? " here" : "") + '" href="glossary.html">Glossary</a>' +
      '<p class="nav-level">Level 1 · Foundations</p>';
    UNITS.forEach(function (u) {
      var ls = LESSONS.filter(function (l) { return l.unit === u.id; });
      var open = !curId || ls.some(function (l) { return l.id === curId; });
      var d = ls.filter(function (l) { return isDone(l.id); }).length;
      html += '<details class="nav-unit"' + (open ? " open" : "") + '><summary><span>' + esc(u.title.replace(/^Unit (\d+) · /, "$1. ")) + '</span><span class="side-count">' + d + "/" + ls.length + "</span></summary><ol>" +
        ls.map(function (l) {
          var n = LESSONS.indexOf(l) + 1;
          return '<li class="' + (l.id === curId ? "here" : "") + (isDone(l.id) ? " done" : "") + '"><a href="lesson.html?id=' + l.id + '"><span class="nav-num">' + (isDone(l.id) ? "✓" : n) + "</span>" + esc(l.title) + "</a></li>";
        }).join("") + "</ol></details>";
    });
    html += '<p class="nav-level nav-locked">Levels 2 to 5 · coming soon</p></nav>';
    return html;
  }

  function buildSides() {
    var main = document.querySelector("main");
    if (!main) return;
    var left = navTab(), right = "";
    if (page === "home") {
      var units = (window.LEVEL1_UNITS || []);
      document.querySelectorAll(".unit-head").forEach(function (h, i) { h.id = "unit-" + (i + 1); });
      right = progressCard() + termCard() + card("Jump to a unit", '<ol class="side-list">' + units.map(function (u, i) {
        var ls = LESSONS.filter(function (l) { return l.unit === u.id; }), d = ls.filter(function (l) { return isDone(l.id); }).length;
        return '<li><a href="#unit-' + (i + 1) + '">' + esc(u.title.replace(/^Unit \d+ · /, "")) + '</a><span class="side-count">' + d + "/" + ls.length + "</span></li>";
      }).join("") + "</ol>");
    } else if (page === "lesson") {
      var art = document.getElementById("lesson");
      var heads = art.querySelectorAll("h2");
      heads.forEach(function (h, i) { h.id = "sec-" + (i + 1); });
      var id = new URLSearchParams(location.search).get("id");
      var l = LESSONS.find(function (x) { return x.id === id; }) || LESSONS[0];
      right = card("In this lesson", '<ol class="side-list side-toc">' + Array.prototype.map.call(heads, function (h) {
        return '<li><a href="#' + h.id + '">' + esc(h.textContent) + "</a></li>";
      }).join("") + "</ol>") +
        card("Key terms", '<dl class="side-terms">' + l.terms.slice(0, 6).map(function (t) {
          return "<dt>" + esc(t[0]) + "</dt><dd>" + esc(t[1]) + "</dd>";
        }).join("") + "</dl>" + (l.terms.length > 6 ? '<p class="side-small"><a href="#sec-' + (Array.prototype.findIndex.call(heads, function (h) { return /key terms/i.test(h.textContent); }) + 1) + '">See all ' + l.terms.length + " terms</a></p>" : "")) +
        progressCard();
    } else if (page === "glossary") {
      var letters = {};
      document.querySelectorAll("#gloss dt").forEach(function (dt) {
        var c = dt.textContent.charAt(0).toUpperCase();
        if (!letters[c]) { letters[c] = true; dt.id = "letter-" + c; }
      });
      right = card("Jump to a letter", '<div class="side-letters">' + Object.keys(letters).map(function (c) { return '<a href="#letter-' + c + '">' + c + "</a>"; }).join("") + "</div>") + termCard() + progressCard();
    }
    var layout = document.createElement("div");
    layout.className = "layout";
    main.parentNode.insertBefore(layout, main);
    var a = document.createElement("aside"); a.className = "side side-left"; a.innerHTML = left;
    var b = document.createElement("aside"); b.className = "side side-right"; b.innerHTML = right;
    layout.appendChild(a); layout.appendChild(main); layout.appendChild(b);

    // Highlight the section being read in the lesson outline.
    var toc = document.querySelectorAll(".side-toc a");
    if (toc.length && "IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          toc.forEach(function (x) { x.classList.toggle("active", x.getAttribute("href") === "#" + e.target.id); });
        });
      }, { rootMargin: "0px 0px -70% 0px" });
      document.querySelectorAll("#lesson h2").forEach(function (h) { obs.observe(h); });
    }
  }
  buildSides();

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
    var ctx = c.getContext("2d"), colours = ["#e4572e", "#e0a800", "#111111", "#ffffff"], bits = [];
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
      var items = document.querySelectorAll("main h2, .lesson-item, .panel, .callout, .q, .terms li, .side-card, .level, .table-scroll, .unit-card, .steps li, .faq details, .cta-band, .stats div");
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px" });
      items.forEach(function (el, i) { el.classList.add("reveal"); el.style.transitionDelay = (el.classList.contains("side-card") ? (i % 5) * 70 : 0) + "ms"; io.observe(el); });
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
