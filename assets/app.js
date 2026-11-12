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
      '<div class="progress-row"><span>Level 1 progress</span><span>' + n + " of " + t + " lessons · " + pct + "%</span></div>" +
      '<div class="bar"><span style="width:' + pct + '%"></span></div>';
  }

  /* ---------- home page ---------- */
  function renderHome() {
    renderProgress($("#progress"));
    var list = $("#lesson-list");
    list.innerHTML = LESSONS.map(function (l, i) {
      var done = isDone(l.id);
      return '<li class="lesson-item' + (done ? " done" : "") + '"><a href="lesson.html?id=' + l.id + '">' +
        '<span class="lesson-num">' + (done ? "✓" : i + 1) + "</span>" +
        '<span class="lesson-text"><strong>' + esc(l.title) + "</strong><span>" + esc(l.summary) + "</span></span>" +
        '<span class="lesson-meta">' + l.minutes + " min</span></a></li>";
    }).join("");

    var next = LESSONS.find(function (l) { return !isDone(l.id); });
    var start = $("#start-btn");
    if (next) {
      start.href = "lesson.html?id=" + next.id;
      start.textContent = doneCount() ? "Continue: " + next.title : "Start Lesson 1";
    } else {
      start.href = "#certificate";
      start.textContent = "Level 1 complete 🎉";
    }
    var cert = $("#certificate");
    if (cert) cert.hidden = !!next;

    var reset = $("#reset");
    if (reset) reset.onclick = function () {
      if (confirm("Reset all Level 1 progress in this browser?")) { progress = {}; save(progress); renderHome(); }
    };
  }

  /* ---------- lesson page ---------- */
  function renderLesson() {
    var id = new URLSearchParams(location.search).get("id");
    var idx = LESSONS.findIndex(function (l) { return l.id === id; });
    if (idx < 0) idx = 0;
    var l = LESSONS[idx];
    document.title = l.title + " · AI Academy";

    var html =
      '<p class="crumbs"><a href="index.html">Level 1: Foundations</a> › Lesson ' + (idx + 1) + " of " + LESSONS.length + "</p>" +
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
      '<nav class="pager">' +
      (idx > 0 ? '<a class="btn secondary" href="lesson.html?id=' + LESSONS[idx - 1].id + '">← ' + esc(LESSONS[idx - 1].title) + "</a>" : '<a class="btn secondary" href="index.html">← All lessons</a>') +
      (idx < LESSONS.length - 1 ? '<a class="btn" id="next-btn" href="lesson.html?id=' + LESSONS[idx + 1].id + '">Next: ' + esc(LESSONS[idx + 1].title) + " →</a>" : '<a class="btn" id="next-btn" href="index.html#certificate">Finish Level 1 →</a>') +
      "</nav>";

    $("#lesson").innerHTML = html;
    mountWidgets($("#lesson"));
    renderQuiz(l);
    window.scrollTo(0, 0);
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
          ex.textContent = (oi === item.answer ? "Correct. " : "Not quite. ") + item.explain;
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
      var r = $("#quiz-result");
      r.innerHTML = '<div class="result ' + (passed ? "pass" : "fail") + '">' +
        "You scored " + correct + " / " + l.quiz.length + ". " +
        (passed ? "Lesson complete! ✓" : "Have another read and try again.") + "</div>" +
        (passed ? "" : '<button class="btn secondary" type="button" id="retry">Retry quiz</button>');
      var retry = $("#retry");
      if (retry) retry.onclick = function () { $("#questions").innerHTML = ""; r.innerHTML = ""; renderQuiz(l); };
      if (passed && doneCount() === LESSONS.length) {
        r.innerHTML += '<div class="result pass">🎓 You finished every Level 1 lesson. <a href="index.html#certificate">See your completion badge</a>.</div>';
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
          (p >= 0.5 ? "🏖️ The neuron fires: <strong>go to the beach!</strong>" : "🏠 The neuron stays quiet: <strong>stay home.</strong>");
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
})();
