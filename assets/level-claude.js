/* Level 3 course content: Claude in depth.
   A deep dive into one assistant, Anthropic's Claude: every app, model, setting and feature, and how to
   use each one well. Same shape as the other levels. All lesson text is original writing; Anthropic's own
   help centre and documentation (checked 13 November 2026) are credited as sources for fact-checking and
   further reading. Claude changes often, so each lesson says where to check the current details.
   Links written as <a data-tool="id">Name</a> point to that tool's page in the AI tools directory. */
window.LEVELC_UNITS = [
  { id: "lcu1", title: "Unit 1 · Meet Claude", blurb: "Where Claude lives, the models and effort settings, plans, limits and privacy, and how to write prompts Claude loves." },
  { id: "lcu2", title: "Unit 2 · Teach Claude your world", blurb: "Files and long documents, Projects, memory and instructions, and web search, Research and thinking." },
  { id: "lcu3", title: "Unit 3 · Make things with Claude", blurb: "Artifacts, Docs, Slides, Design and Data, files, code and visuals, and Claude inside your browser, office apps and phone." },
  { id: "lcu4", title: "Unit 4 · Let Claude do the work", blurb: "Connectors, skills and plugins, Cowork and scheduled tasks, Claude Code, and building on the Claude Developer Platform." }
];

window.LEVELC = [
  /* ============================ UNIT 1 ============================ */
  {
    id: "c-meet",
    unit: "lcu1",
    title: "Meet Claude",
    summary: "Who makes Claude, what it is, and all the places you can use it: web, desktop, phone, browser, office apps, chat apps and code.",
    minutes: 11,
    body: `
<p>Welcome to Level 3, Abbas. In Level 2 you toured the whole world of AI tools and saw that the best plan is to get really good at one general assistant. This level does exactly that with <a data-tool="claude">Claude</a>, the assistant made by Anthropic. Over sixteen lessons you'll learn how every part of it works, from the model menu and memory to Artifacts, Cowork, Claude Code and the developer platform, and how to use each one to its full potential.</p>
<p>One honest warning before we start: Claude changes fast. New models and features arrive every few weeks. Everything here was checked against Anthropic's own help centre and documentation in November 2026, and every lesson tells you where to look for the latest details. The ideas will last longer than the button names.</p>

<h2>Who makes Claude</h2>
<p><strong>Anthropic</strong> is an AI safety and research company founded in 2021. It trains the Claude <strong>models</strong> (the AI itself) and builds the Claude <strong>apps</strong> you use. Anthropic publishes the principles Claude is trained to follow, which it calls Claude's <strong>constitution</strong>: in short, to be genuinely helpful while being honest, avoiding harm and supporting human oversight of AI. That shapes how Claude behaves. It will tell you when it's unsure, push back if you're about to make a mistake, and decline a small number of harmful requests.</p>
<div class="callout"><b>One-line definition:</b> Claude is a family of AI models made by Anthropic, and also the name of the apps and tools you use them through.</div>

<h2>One Claude, many doors</h2>
<p>The same Claude, and the same account, can be reached in many places. Your chats, projects, memory and settings follow you between them.</p>
<ul>
  <li><strong>Claude on the web</strong> at claude.ai: the full experience in any browser.</li>
  <li><strong>Claude Desktop</strong> for Mac, Windows and (in beta) Linux: everything on the web, plus access to files on your computer, desktop extensions and a Code tab.</li>
  <li><strong>Claude for iOS and Android:</strong> chat, voice conversations, photos from your camera, and quick access from your lock screen.</li>
  <li><strong>Claude in Chrome:</strong> a browser extension that can read, click and fill in web pages for you (Lesson 12).</li>
  <li><strong>Inside your office apps:</strong> add-ins for Excel, PowerPoint, Word and Outlook, and a sidebar in Google Docs, Sheets and Slides (Lesson 12).</li>
  <li><strong>Inside your team's chat:</strong> Claude Tag lets a team tag @Claude in Slack to hand it work.</li>
  <li><a data-tool="claude-code">Claude Code</a>: an agent for building software, in a terminal, a code editor, the desktop app or the web (Lesson 15).</li>
  <li>The <a data-tool="claude-platform">Claude Developer Platform</a>: for programmers who build Claude into their own apps (Lesson 16).</li>
</ul>
<p>You've actually been using Claude throughout this course. This academy was written and is maintained with Claude Code, and the AI tutor in the Claude-hosted copy of the site is Claude answering your questions.</p>

<h2>Chat, then tasks</h2>
<p>For most of its life Claude was a chat assistant: you ask, it answers. Since 2026 it can also take on <strong>tasks</strong>: describe an outcome, step away, and come back to finished work, such as a researched report, a tidied folder or a spreadsheet with working formulas. Anthropic calls this way of working <strong>Cowork</strong>, and in the newest version of the app, chat and Cowork share one home: you simply ask, and Claude decides whether it needs a quick answer or a longer piece of work. Unit 4 covers this in depth.</p>

<h2>A map of this level</h2>
<ol>
  <li><strong>Meet Claude</strong> (this unit): models, effort, plans, limits, privacy and prompting.</li>
  <li><strong>Teach Claude your world:</strong> files, Projects, memory and instructions, search and Research.</li>
  <li><strong>Make things:</strong> Artifacts, Docs, Slides, Design, files, code, visuals, and Claude in your other apps.</li>
  <li><strong>Let Claude do the work:</strong> connectors, skills, plugins, Cowork, Claude Code and the API.</li>
</ol>

<div data-widget="sort" data-set="claude-door"></div>

<h2>What Claude is good at, and where to be careful</h2>
<p>Claude is strong at reading and writing long documents, careful reasoning, coding, and natural, clear writing. It can see images, read PDFs and spreadsheets, search the web, and make documents, decks and small apps. It doesn't generate photos or paintings the way image tools do; for that, use a tool from the Level 2 directory.</p>
<p>Like every assistant, it can still be wrong. It can misread a document, make a calculation slip, or state something confidently that isn't true. The habits from Level 1 still apply: check facts that matter, ask for sources, and keep a human in charge of decisions with real consequences.</p>

<div class="callout"><b>Takeaway:</b> Claude is Anthropic's family of models and the apps built on them. One account reaches it on the web, desktop, phone, browser, office apps, Slack and code tools. It now does tasks as well as chat, and like any AI it still needs your judgement.</div>
`,
    terms: [
      ["Claude", "Anthropic's family of AI models, and the apps and tools you use them through."],
      ["Anthropic", "The AI safety and research company that makes Claude."],
      ["Claude's constitution", "The published set of values and principles Anthropic trains Claude to follow."],
      ["Claude Desktop", "Claude's app for Mac, Windows and Linux, with extra features such as access to local files."],
      ["Surface", "One of the places you can use Claude, such as the web, the phone app or Chrome."],
      ["Task", "A piece of work you hand to Claude to complete on its own, rather than a single question and answer."]
    ],
    quiz: [
      { q: "What's the difference between Anthropic and Claude?", options: ["They're two rival companies", "Anthropic is the company; Claude is its family of AI models and apps", "Claude makes Anthropic's apps", "Anthropic is the free version of Claude"], answer: 1, explain: "Anthropic trains the models and builds the apps; Claude is what you use." },
      { q: "What does Claude Desktop add compared with the website?", options: ["Nothing at all", "Access to files on your computer, desktop extensions and a Code tab", "Image generation", "A different set of models only"], answer: 1, explain: "The desktop app can reach your computer, which the website can't." },
      { q: "If you start a chat on your phone, can you continue it on your laptop?", options: ["No, each device is separate", "Yes, chats and settings follow your account", "Only on paid plans", "Only if you email it to yourself"], answer: 1, explain: "Your account carries your chats, projects and memory everywhere." },
      { q: "What is Claude's constitution?", options: ["A legal contract you sign", "The published principles Anthropic trains Claude to follow", "A list of banned words", "The terms of the paid plans"], answer: 1, explain: "It describes the values behind how Claude behaves." },
      { q: "Which job is NOT a strength of Claude itself?", options: ["Summarising a long contract", "Writing clear emails", "Generating a photorealistic picture of a beach", "Explaining code"], answer: 2, explain: "Claude can make diagrams and charts, but not photos or paintings. Use an image tool for that." },
      { q: "What's the big change of 2026 in how you work with Claude?", options: ["It only answers yes or no", "It can take on whole tasks and come back with finished work", "It no longer needs prompts", "It stopped making mistakes"], answer: 1, explain: "Cowork brought task-based working to everyday Claude." }
    ],
    sources: [
      ["Anthropic: company", "https://www.anthropic.com/company", "Who Anthropic is and what it builds."],
      ["Anthropic: Claude's constitution", "https://www.anthropic.com/constitution", "The principles Claude is trained to follow."],
      ["Claude Help Center", "https://support.claude.com/en/collections/4078531-claude-help-center", "Anthropic's official guides to every Claude feature."],
      ["Install Claude Desktop", "https://support.claude.com/en/articles/10065433-install-claude-desktop", "Desktop app for macOS, Windows and Linux."],
      ["Get started with Claude Cowork", "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork", "How tasks and chat now share one home."]
    ]
  },
  {
    id: "c-models",
    unit: "lcu1",
    title: "Models, Effort and Thinking",
    summary: "Fable, Opus, Sonnet and Haiku: what each model is for, how effort and thinking change answers, and how big Claude's memory for one chat is.",
    minutes: 12,
    body: `
<p>Next to the send button in Claude there's a small menu that most people never touch, Abbas. It's one of the most powerful controls in the app. It sets three things: <strong>which model</strong> answers you, <strong>how much effort</strong> it puts in, and whether it <strong>thinks</strong> before answering.</p>

<h2>The model family</h2>
<p>Anthropic releases Claude models in families with a version number. The current family (November 2026) is the 5 generation, with four main sizes, from most powerful to fastest:</p>
<ul>
  <li><strong>Claude Fable 5.2:</strong> the most capable. Built for the hardest reasoning and very long pieces of agent work that run for hours or days. Slower and the most expensive to run.</li>
  <li><strong>Claude Opus 5.5:</strong> Anthropic's recommended starting point for most serious work: long documents, complex analysis, coding and agent tasks.</li>
  <li><strong>Claude Sonnet 5.5:</strong> the best balance of speed and intelligence. Excellent for everyday writing, questions and quick analysis.</li>
  <li><strong>Claude Haiku 5.5:</strong> the fastest and cheapest. Great for quick, simple jobs and for apps that handle huge volumes.</li>
</ul>
<p>There is also <strong>Claude Mythos</strong>, a model kept for approved organisations doing specialist work such as cybersecurity, so you won't see it in the normal menu. Older models stay available for a while under "More models" and are then retired.</p>
<div class="callout"><b>Tip:</b> A bigger model isn't always better for you. It's slower and uses more of your allowance. Use Sonnet for everyday jobs and switch up to Opus or Fable when a task is hard or important.</div>

<h2>Effort: how hard Claude tries</h2>
<p>Effort controls how thorough Claude is with every response. The levels are:</p>
<ul>
  <li><strong>Low</strong> and <strong>Medium:</strong> quick and economical, fine for routine tasks.</li>
  <li><strong>High:</strong> the best overall balance of quality and speed.</li>
  <li><strong>Extra high:</strong> for long coding and agent tasks that need deeper reasoning.</li>
  <li><strong>Max:</strong> the most thorough, for the hardest problems where being right matters most. Slow, and it uses the most allowance.</li>
</ul>
<p>Each model has a recommended level, marked "Default" in the menu. Higher effort means better answers on hard problems, but it takes longer and you reach your usage limit sooner.</p>

<h2>Thinking</h2>
<p>When Claude <strong>thinks</strong>, it works through the problem step by step before writing its answer: planning, trying approaches, checking itself. You see a "Thinking" section with a timer that you can open to read a summary of its reasoning. That's useful for spotting where it went wrong.</p>
<p>On the newest models, thinking is always on and <strong>adaptive</strong>: Claude decides how much to think, and the effort level steers it. To make it think less, lower the effort. On some older models you'll see a "Thinking" or "Extended" switch instead. Thinking helps most with maths, logic, planning, detailed document analysis and multi-step problems; it adds little to "write a birthday message".</p>

<div data-widget="sort" data-set="claude-model"></div>

<h2>The context window: Claude's working memory</h2>
<p>Everything Claude can "see" at once, your messages, its replies, uploaded files and instructions, has to fit in its <strong>context window</strong>, measured in tokens (Level 1). Current Claude models have a context window of <strong>1 million tokens</strong>, roughly 550,000 words: several long novels at once. Each answer can be up to 128,000 tokens long.</p>
<p>Two things follow. First, you can give Claude really big documents. Second, a very long chat gets slower, costs more of your allowance, and the details from the start can get crowded out. When a chat gets very long, Claude automatically summarises older parts to make room (called <strong>compaction</strong>). When you change topic, start a fresh chat.</p>

<h2>Knowledge cut-off</h2>
<p>Each model learned from data up to a date called its <strong>knowledge cut-off</strong>. For the 5.5 models that's June 2026. For anything after that, or anything that changes often, such as prices, news or opening times, let Claude search the web (Lesson 8).</p>

<h2>Changing settings mid-chat</h2>
<p>You can change model, effort or thinking at any point in a conversation; the change applies from Claude's next reply. A good pattern: brainstorm quickly on Sonnet, then switch to Opus with high effort for the final careful version.</p>

<div class="callout"><b>Takeaway:</b> Pick the model for the job (Haiku fast, Sonnet everyday, Opus serious, Fable hardest), turn effort up for hard or high-stakes work and down for routine jobs, and remember the 1-million-token context window and the June 2026 knowledge cut-off.</div>
`,
    terms: [
      ["Claude Opus", "Anthropic's model for most serious work: long documents, analysis, coding and agents."],
      ["Claude Sonnet", "The Claude model that balances speed and intelligence, ideal for everyday tasks."],
      ["Claude Haiku", "The fastest and cheapest Claude model, for quick and high-volume jobs."],
      ["Claude Fable", "Anthropic's most capable model, for the hardest reasoning and very long agent work."],
      ["Effort level", "A setting (low to max) that controls how thorough Claude is, trading speed and usage for quality."],
      ["Adaptive thinking", "Claude decides how much to reason before answering, guided by the effort level."],
      ["Context window", "The total amount of text, measured in tokens, that Claude can take into account at once."],
      ["Compaction", "Automatically summarising older parts of a long conversation to make room in the context window."]
    ],
    quiz: [
      { q: "Which model does Anthropic suggest as the starting point for most serious work?", options: ["Haiku", "Opus", "Mythos", "Any model from 2023"], answer: 1, explain: "Opus 5.5 is the recommended default for most workloads." },
      { q: "You need hundreds of short product descriptions quickly and cheaply. Which model fits?", options: ["Fable", "Opus at Max effort", "Haiku", "Mythos"], answer: 2, explain: "Haiku is built for fast, high-volume work." },
      { q: "What happens when you raise the effort level?", options: ["Answers are more thorough but slower and use more allowance", "Claude gets faster", "Claude stops thinking", "Nothing changes"], answer: 0, explain: "More effort buys quality at the cost of time and usage." },
      { q: "On the newest models, how do you make Claude think less?", options: ["Switch thinking off", "Lower the effort level", "Type in capital letters", "Use incognito"], answer: 1, explain: "Thinking is always on and adaptive; effort steers it." },
      { q: "Roughly how much text fits in a 1-million-token context window?", options: ["About 500 words", "About 5,000 words", "Roughly 550,000 words", "Unlimited text"], answer: 2, explain: "Enough for several long books at once." },
      { q: "Why start a new chat when you change topic?", options: ["Old chats get deleted", "Long chats are slower, use more allowance and crowd out details", "Claude refuses long chats", "It's required by the terms"], answer: 1, explain: "A fresh chat keeps Claude focused and saves usage." }
    ],
    sources: [
      ["Claude Platform Docs: Models overview", "https://platform.claude.com/docs/en/models/overview", "The current models, context windows, cut-offs and prices."],
      ["Change the model, effort, and thinking settings", "https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings", "Official guide to the model menu."],
      ["Claude Platform Docs: Choosing a model", "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model", "How to match a model to a job."],
      ["Claude Platform Docs: Context windows", "https://platform.claude.com/docs/en/build-with-claude/context-windows", "How the context window and compaction work."]
    ]
  },
  {
    id: "c-plans",
    unit: "lcu1",
    title: "Plans, Limits and Privacy",
    summary: "Free, Pro, Max, Ultra, Team and Enterprise; how usage limits really work and how to stretch them; and the privacy settings to check on day one.",
    minutes: 11,
    body: `
<p>To use Claude to its full potential you need to know what your plan includes, how your allowance is counted, and how your data is handled. This lesson covers all three, Abbas. Prices here are from Anthropic's pricing page in November 2026; check claude.com/pricing before you buy, as they change.</p>

<h2>The plans</h2>
<ul>
  <li><strong>Free ($0):</strong> chat on web, desktop and phone with Sonnet and Haiku; web search; file creation and running code; memory; connectors; Artifacts including Docs, Slides and Design; voice mode; skills; up to 5 Projects. Limited usage.</li>
  <li><strong>Pro ($20 a month, or $17 a month paid yearly):</strong> more usage, unlimited Projects, Opus and more models, Research, Claude Code, Cowork tasks and scheduling, Claude in Chrome and the Microsoft 365 add-ins. Fable can be used by paying with usage credits.</li>
  <li><strong>Max ($100 a month):</strong> five times Pro's usage, Fable included up to half your weekly limit, early access to new features, priority at busy times, and $100 a month of developer API credits.</li>
  <li><strong>Ultra ($200 a month):</strong> ten times Pro's weekly usage, no five-hour limit for verified accounts, and $200 a month of API credits.</li>
  <li><strong>Team</strong> (2 to 150 people, from $20 per seat a month paid yearly) and <strong>Enterprise</strong> (for larger organisations): shared projects, admin controls, single sign-on, Claude Tag in Slack, and by default no training on your content.</li>
</ul>
<p>For someone learning AI seriously, Pro is the natural step up from Free, because it unlocks Opus, Research, Claude Code and Cowork. Max and Ultra are for people who hit Pro's limits regularly.</p>

<h2>How usage limits work</h2>
<p>Anthropic doesn't count "messages". It measures how much computing your work uses. Paid plans have two limits:</p>
<ul>
  <li><strong>A five-hour session limit:</strong> the clock starts with your first message, and your allowance resets in full five hours later.</li>
  <li><strong>A weekly limit:</strong> resets at a fixed time each week, the same for your account whatever day you start.</li>
</ul>
<p>Everything shares the same allowance: chats on claude.ai, Claude Desktop, Claude Code and Cowork. You can see how much you've used and when it resets in <strong>Settings, Usage</strong>. On paid plans, if you run out you can keep going with <strong>usage credits</strong>, paid at developer rates.</p>
<p>Some things use much more than others: long conversations, big files, Research, high effort, the larger models, and multi-step tasks such as running code or browsing.</p>

<h2>Stretching your allowance</h2>
<ol>
  <li><strong>Start fresh chats</strong> for new topics, instead of one endless chat. Claude re-reads the whole conversation every time it replies.</li>
  <li><strong>Batch your questions</strong> into one well-written message rather than five small ones.</li>
  <li><strong>Put reused documents in a Project.</strong> Project content is cached, so it counts less when reused.</li>
  <li><strong>Match the model and effort to the job.</strong> Sonnet at medium is plenty for a shopping list.</li>
  <li><strong>Edit your earlier message</strong> instead of adding "no, I meant..." replies: it replaces the off-track branch rather than adding to it.</li>
</ol>

<div data-widget="sort" data-set="claude-usage"></div>

<h2>Privacy: settings to check on day one</h2>
<p>Open <strong>Settings, Privacy</strong> and decide these for yourself:</p>
<ul>
  <li><strong>Help improve Claude:</strong> on Free, Pro, Max and Ultra you choose whether your chats may be used to train future models. You can change your mind at any time. On Team and Enterprise, content is not used for training by default.</li>
  <li><strong>Incognito chats:</strong> click the ghost icon when starting a chat. It won't be saved to your history or memory and isn't used for training. (Anthropic still keeps it for 30 days for safety checks.) Use it for one-off sensitive questions.</li>
  <li><strong>Memory:</strong> see and edit what Claude remembers about you (Lesson 7).</li>
  <li><strong>Export or delete:</strong> you can export all your data and delete individual chats.</li>
</ul>
<p>And the golden rule from Level 2 still applies: don't paste passwords, full card numbers or other people's private details into any AI chat.</p>

<div class="callout"><b>Takeaway:</b> Free is generous; Pro unlocks Opus, Research, Claude Code and Cowork; Max and Ultra are for heavy use. Usage is measured in five-hour and weekly limits shared across every surface, so start fresh chats, batch questions and match effort to the job. Set your privacy choices on day one.</div>
`,
    terms: [
      ["Pro plan", "Claude's main paid personal plan, adding more usage, Opus, Research, Claude Code and Cowork."],
      ["Max and Ultra plans", "Claude's higher-usage personal plans for people who use it heavily."],
      ["Session limit", "The allowance that resets five hours after your first message."],
      ["Weekly limit", "The allowance that resets at a fixed time each week."],
      ["Usage credits", "Extra usage you can buy on paid plans once you reach your limit."],
      ["Incognito chat", "A temporary chat that isn't saved to your history or memory and isn't used for training."],
      ["Model training setting", "The privacy choice that decides whether your chats may help train future Claude models."]
    ],
    quiz: [
      { q: "Which plan is the lowest that includes Claude Code and Research?", options: ["Free", "Pro", "Only Enterprise", "Only Ultra"], answer: 1, explain: "Pro unlocks Claude Code, Research and Cowork." },
      { q: "When does the five-hour usage limit reset?", options: ["At midnight", "Five hours after the first message of the session", "Every Monday", "Never"], answer: 1, explain: "The five-hour clock starts with your first message." },
      { q: "Do Claude Code and the Claude website share the same allowance?", options: ["No, they're separate", "Yes, all surfaces share one allowance", "Only on Free", "Only on weekends"], answer: 1, explain: "claude.ai, Desktop, Claude Code and Cowork all count towards the same limits." },
      { q: "Which habit stretches your allowance the most?", options: ["Keeping one huge chat for everything", "Starting fresh chats for new topics", "Always using Max effort", "Uploading the same file in every chat"], answer: 1, explain: "Claude re-reads the whole chat each time, so long chats cost more." },
      { q: "What does an incognito chat do?", options: ["Hides your IP address", "Isn't saved to history or memory and isn't used for training", "Deletes all your other chats", "Makes Claude answer anonymously to others"], answer: 1, explain: "It's a temporary chat, kept only briefly for safety checks." },
      { q: "On Free, Pro, Max and Ultra plans, who decides whether your chats can train future models?", options: ["Only Anthropic", "You, in the privacy settings", "Your internet provider", "Nobody; they're always used"], answer: 1, explain: "It's your choice, and you can change it at any time." }
    ],
    sources: [
      ["Claude: Plans and pricing", "https://claude.com/pricing", "Current plans, prices and what each includes."],
      ["How do usage and length limits work?", "https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work", "Five-hour and weekly limits explained."],
      ["Usage limit best practices", "https://support.claude.com/en/articles/9797557-usage-limit-best-practices", "Anthropic's tips for making your allowance go further."],
      ["Use incognito chats", "https://support.claude.com/en/articles/12260368-use-incognito-chats", "How incognito chats work and what's kept."],
      ["Anthropic Privacy Center", "https://privacy.claude.com/", "How your data is used and the choices you have."]
    ]
  },
  {
    id: "c-prompting",
    unit: "lcu1",
    title: "Prompting Claude Like a Pro",
    summary: "Anthropic's own advice: be clear and direct, explain why, show examples, structure with tags, give a role, and iterate.",
    minutes: 13,
    body: `
<p>In Level 1 you learned the basics of prompting, Abbas. This lesson goes further with the advice Anthropic gives developers for getting the best out of Claude. It works just as well in the everyday app.</p>

<h2>1. Treat Claude like a brilliant new colleague</h2>
<p>Anthropic's own image: Claude is like a brilliant person on their first day. Smart, but with no idea about your situation, your standards or what "good" looks like to you. A useful test: if you handed your prompt to a capable colleague who knew nothing about the task, would they be confused? If so, Claude will be too.</p>
<ul>
  <li>Say exactly what you want, including the format and length.</li>
  <li>If you want more than the bare minimum, ask for it. "Make me a budget spreadsheet" gets a basic sheet; "Make a monthly budget spreadsheet with categories, a chart, and a warning when I overspend" gets something far better.</li>
  <li>When order matters, give the steps as a numbered list.</li>
</ul>

<h2>2. Explain why</h2>
<p>Claude does better when it knows the reason behind an instruction, because it can apply the reason to cases you didn't think of. "Never use abbreviations" is weaker than "This will be read aloud by a screen reader, so write words out in full."</p>

<h2>3. Show, don't just tell</h2>
<p>Examples are one of the most reliable ways to steer tone, style and format. Paste two or three examples of what you like (Anthropic suggests three to five for important jobs). Make them varied, so Claude learns the pattern rather than copying one example.</p>

<h2>4. Structure long prompts with tags</h2>
<p>When a prompt mixes instructions, background, examples and a document, label each part. Claude was trained to understand <strong>XML-style tags</strong>, simple labels in angle brackets, like this:</p>
<div class="callout"><b>Example:</b> &lt;context&gt;I run a small bakery in Leeds.&lt;/context&gt; &lt;document&gt;...paste the supplier contract...&lt;/document&gt; &lt;task&gt;List anything in the contract that could cost me money, in plain English.&lt;/task&gt;</div>
<p>The tag names aren't magic words; any clear, consistent names work. They simply stop Claude mixing up your instructions with the text you want it to work on. For long documents, put the document first and your question at the end.</p>

<h2>5. Give Claude a role</h2>
<p>One sentence of role sets the tone and level: "You're an experienced primary school teacher" or "Act as a sceptical investor reviewing my pitch." Roles are especially useful in Project instructions (Lesson 6).</p>

<div data-widget="prompt-xml"></div>

<h2>6. Let Claude ask you questions</h2>
<p>For anything important, end with: "Before you start, ask me any questions you need answered to do this well." Claude will spot the gaps in your brief. It's often the single biggest improvement you can make.</p>

<h2>7. Iterate, edit and branch</h2>
<ul>
  <li><strong>Iterate:</strong> treat the first answer as a draft. Say what's good and what to change: "Keep the structure, make it half as long, and drop the jargon."</li>
  <li><strong>Edit your message:</strong> if Claude misunderstood, click edit on your earlier message and fix the prompt. This creates a new branch of the chat; you can flip back to the old one with the arrows.</li>
  <li><strong>Retry:</strong> ask for a fresh answer to the same prompt to compare options.</li>
  <li><strong>Ask it to check itself:</strong> "Now review your answer for mistakes and anything I didn't ask for."</li>
</ul>

<h2>8. Ask Claude to help you prompt</h2>
<p>You can simply say: "Help me write a good prompt for this job." Claude knows these techniques and will draft a structured prompt for you to reuse. Good prompts you use often can become Project instructions or skills (Lessons 6 and 13), so you never have to write them twice.</p>

<div data-widget="sort" data-set="claude-prompt-fix"></div>

<div class="callout"><b>Takeaway:</b> Be clear and specific, explain why, show examples, label the parts of long prompts with tags, give a role, let Claude ask questions, and iterate by editing and branching. Save prompts that work so you can reuse them.</div>
`,
    terms: [
      ["XML tags", "Labels in angle brackets, such as <context> and <task>, that separate the parts of a prompt."],
      ["Few-shot prompting", "Including a few examples in a prompt to show the output you want."],
      ["Role prompt", "Telling Claude who to act as, to set its tone, focus and level of expertise."],
      ["Branching", "Editing an earlier message to create a new version of the chat while keeping the old one."],
      ["Iteration", "Improving a result through several rounds of feedback."],
      ["Self-check", "Asking Claude to review its own answer for mistakes before you use it."]
    ],
    quiz: [
      { q: "What's Anthropic's 'brilliant new colleague' test for a prompt?", options: ["Would a colleague with no background understand and follow it?", "Is it under ten words?", "Does it use polite words?", "Is it in capital letters?"], answer: 0, explain: "If a capable newcomer would be confused, Claude will be too." },
      { q: "Why explain the reason behind an instruction?", options: ["It's polite", "Claude can apply the reason to cases you didn't mention", "It makes answers shorter", "Claude ignores rules without reasons"], answer: 1, explain: "Context lets Claude generalise sensibly." },
      { q: "What are XML tags in a prompt for?", options: ["Making the text bold", "Separating instructions, background, examples and documents clearly", "Hiding text from Claude", "Translating the prompt"], answer: 1, explain: "Labels stop Claude mixing up your instructions with your material." },
      { q: "For a long document, where should your question usually go?", options: ["Before the document", "After the document, at the end", "In a separate chat", "It doesn't matter at all"], answer: 1, explain: "Put long material first and the question at the end." },
      { q: "Claude misunderstood your request three messages ago. What's the cleanest fix?", options: ["Add five more corrections", "Edit that earlier message to create a new branch", "Delete your account", "Switch to incognito"], answer: 1, explain: "Editing branches the chat and removes the off-track part from Claude's view." },
      { q: "What one line often improves an important prompt the most?", options: ["\"Be smart\"", "\"Ask me any questions you need answered before you start\"", "\"Hurry up\"", "\"Don't make mistakes\""], answer: 1, explain: "Claude's questions reveal the gaps in your brief." }
    ],
    sources: [
      ["Claude Platform Docs: Prompting best practices", "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices", "Anthropic's full guide to prompting Claude."],
      ["Claude Platform Docs: Prompt engineering overview", "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview", "Where to start when improving prompts."],
      ["Anthropic Academy: AI Fluency", "https://academy.claude.com/", "Anthropic's free courses on working well with AI."],
      ["Anthropic: interactive prompt engineering tutorial", "https://github.com/anthropics/prompt-eng-interactive-tutorial", "Step-by-step exercises from Anthropic."]
    ]
  },

  /* ============================ UNIT 2 ============================ */
  {
    id: "c-files",
    unit: "lcu2",
    title: "Files, Images and Long Documents",
    summary: "What you can give Claude to read, how it sees images and PDFs, and how to get reliable answers from long documents.",
    minutes: 11,
    body: `
<p>One of Claude's greatest strengths is reading, Abbas. It can take in a 300-page report, a messy spreadsheet or a photo of a letter and help you make sense of it. This lesson shows how to do that well.</p>

<h2>What you can upload</h2>
<p>Click the <strong>+</strong> button in the message box, drag a file in, or paste it. Claude can work with:</p>
<ul>
  <li><strong>Documents:</strong> PDF, Word (DOCX), plain text, CSV, HTML, ODT, RTF, EPUB e-books and JSON.</li>
  <li><strong>Spreadsheets:</strong> Excel (XLSX), when the code execution setting is on (Lesson 11).</li>
  <li><strong>Images:</strong> JPEG, PNG, GIF and WebP: photos, screenshots, charts, handwriting and diagrams.</li>
</ul>
<p>On the phone app you can snap a photo straight from the camera. On Claude Desktop, and in Cowork, Claude can also work with files in folders on your computer without uploading them one by one. And with connectors (Lesson 13) it can read files directly from Google Drive, OneDrive or SharePoint.</p>

<h2>How Claude "sees"</h2>
<p>Claude has <strong>vision</strong>: it reads images the way it reads text. With PDFs it looks at the pages, so it can read charts, tables and pictures inside the document, not just the words. Some everyday uses:</p>
<ul>
  <li>A photo of a confusing letter: "What is this asking me to do, and by when?"</li>
  <li>A screenshot of an error message: "What does this mean and how do I fix it?"</li>
  <li>A chart from a report: "What's the main trend, and is anything misleading about how it's drawn?"</li>
  <li>A photo of a handwritten recipe: "Type this up and double the quantities."</li>
</ul>
<p>Vision isn't perfect. It can misread small or blurry text, count objects wrongly, or misjudge exact positions. For anything that matters, such as numbers on a bill, check against the original.</p>

<h2>Getting reliable answers from long documents</h2>
<p>With a 1-million-token context window (Lesson 2), Claude can hold huge documents. To get answers you can trust:</p>
<ol>
  <li><strong>Say who you are and what you need it for.</strong> "I'm a tenant deciding whether to renew" gets a very different summary from "summarise this."</li>
  <li><strong>Ask for quotes.</strong> "For each point, quote the exact sentence and give the page number." Anthropic's own advice is to ask Claude to pull out the relevant quotes first and then answer from them; it reduces mistakes.</li>
  <li><strong>Ask what's missing:</strong> "What would I expect to find in a contract like this that isn't here?"</li>
  <li><strong>Compare documents:</strong> upload two versions and ask, "List every change between these, and which ones matter for me."</li>
  <li><strong>Spot-check:</strong> pick two or three claims and look them up yourself in the document.</li>
</ol>

<div data-widget="sort" data-set="claude-file-ask"></div>

<h2>Files Claude makes for you</h2>
<p>Reading is half the story. Claude can also produce files: Word documents, PowerPoint decks, Excel spreadsheets with working formulas, and PDFs, by running code in a safe sandbox. You'll learn this in Lesson 11, and the shareable documents and slide decks called Artifacts in Lessons 9 and 10.</p>

<h2>Privacy with files</h2>
<p>Treat an upload like sending the file to a company, because that's what it is. Remove information you don't need to share, such as account numbers, before uploading. For a one-off sensitive document, use an incognito chat. And if a file belongs to your employer, check their rules first.</p>

<div class="callout"><b>Takeaway:</b> Claude reads documents, spreadsheets and images, including the charts and tables inside PDFs. Give it your purpose, ask for quotes with page numbers, ask what's missing, and spot-check anything that matters. Remove details it doesn't need before you upload.</div>
`,
    terms: [
      ["Upload", "Giving Claude a file from your device to read in a chat."],
      ["Vision", "Claude's ability to read and understand images, screenshots, charts and handwriting."],
      ["PDF support", "Claude reading the text, tables, charts and pictures on a PDF's pages."],
      ["Quote-first answering", "Asking Claude to find the exact supporting quotes before answering, to reduce mistakes."],
      ["Spot-check", "Checking a few of Claude's claims against the original yourself."]
    ],
    quiz: [
      { q: "Which of these can Claude read directly?", options: ["Only plain text", "PDFs, Word files, CSVs, e-books and images", "Only images", "Only Excel files"], answer: 1, explain: "Claude handles many document and image types." },
      { q: "Can Claude understand a chart inside a PDF?", options: ["No, only the words", "Yes, it looks at the pages, including charts and tables", "Only if you retype it", "Only on paid plans"], answer: 1, explain: "Claude reads PDF pages visually as well as their text." },
      { q: "What's the best way to get trustworthy answers from a long contract?", options: ["Ask for a one-word answer", "Ask for exact quotes with page numbers, then spot-check", "Upload it three times", "Ask Claude to guess"], answer: 1, explain: "Quotes and page numbers let you verify quickly." },
      { q: "Claude read the total on a blurry photo of a bill as £148. What should you do?", options: ["Pay £148", "Check the original, since vision can misread small or blurry text", "Ask Claude if it's sure, then pay", "Ignore the bill"], answer: 1, explain: "For numbers that matter, check the source." },
      { q: "Which upload habit protects your privacy?", options: ["Upload everything you own", "Remove details Claude doesn't need, and use incognito for one-off sensitive files", "Rename the file", "Upload only at night"], answer: 1, explain: "Share only what the job needs." },
      { q: "Why tell Claude who you are and why you need the summary?", options: ["It's required", "So it focuses on what matters for you", "To make it slower", "It doesn't matter"], answer: 1, explain: "Purpose shapes what a good summary includes." }
    ],
    sources: [
      ["Upload files to Claude", "https://support.claude.com/en/articles/8241126-upload-files-to-claude", "Supported file types and how to upload."],
      ["Claude Platform Docs: PDF support", "https://platform.claude.com/docs/en/build-with-claude/pdf-support", "How Claude reads the text and visuals in PDFs."],
      ["Claude Platform Docs: Vision", "https://platform.claude.com/docs/en/build-with-claude/vision", "What Claude can and can't do with images."],
      ["Claude Platform Docs: Long context prompting", "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices", "Anthropic's advice on documents first and quoting before answering."]
    ]
  },
  {
    id: "c-projects",
    unit: "lcu2",
    title: "Projects: Your Own Workspaces",
    summary: "Give Claude standing knowledge and instructions for one area of your life or work, so every chat starts already up to speed.",
    minutes: 11,
    body: `
<p>If you find yourself explaining the same background to Claude again and again, you need a <strong>Project</strong>, Abbas. A Project is a self-contained workspace with its own files, instructions, memory and chats.</p>

<h2>What's inside a Project</h2>
<ul>
  <li><strong>Project knowledge:</strong> documents, notes, code or other files that Claude uses as background in every chat in the Project.</li>
  <li><strong>Project instructions:</strong> standing guidance such as tone, role, format or rules. "You are my Spanish tutor. Correct my mistakes gently and explain one grammar point per reply."</li>
  <li><strong>Project memory:</strong> what Claude learns while you work there (Lesson 7). It stays with the Project.</li>
  <li><strong>Its own chats:</strong> all the conversations about that topic, in one place.</li>
</ul>
<p>Free accounts can create up to five Projects; paid plans have no limit.</p>

<h2>Good uses</h2>
<ul>
  <li><strong>Learning:</strong> a Project with your course notes and the instruction "quiz me and explain like I'm a beginner." (A Project for this academy would be a great study partner.)</li>
  <li><strong>A job search:</strong> your CV, target roles and cover-letter style guide.</li>
  <li><strong>A household:</strong> tenancy agreement, appliance manuals and insurance documents.</li>
  <li><strong>A small business:</strong> price list, brand voice guide and common customer questions.</li>
  <li><strong>Writing:</strong> your style guide and examples of your best work, so drafts sound like you.</li>
</ul>

<h2>Big Projects: retrieval</h2>
<p>On paid plans, when a Project's knowledge grows close to the context window, Claude automatically switches to <strong>retrieval</strong> mode (RAG, which you'll build yourself in Level 6): instead of reading every file every time, it searches the Project for the passages it needs. This lets a Project hold up to ten times more. You'll see Claude use a "project knowledge search" tool when it happens. Tip: give files clear names and keep them well organised, so search finds the right passages.</p>

<h2>Writing great Project instructions</h2>
<p>Instructions are a prompt that applies to every chat in the Project, so everything from Lesson 4 applies. A strong set usually covers:</p>
<ol>
  <li><strong>Who you are</strong> and what the Project is for.</li>
  <li><strong>Claude's role</strong> and the level to pitch at.</li>
  <li><strong>Format and tone:</strong> length, headings or not, British or American spelling.</li>
  <li><strong>Rules:</strong> "Only answer from the project files; if they don't cover it, say so."</li>
  <li><strong>The why</strong> behind any unusual rule.</li>
</ol>

<div data-widget="sort" data-set="claude-where-info"></div>

<h2>Sharing (Team and Enterprise)</h2>
<p>On Team and Enterprise plans, Projects can be shared with colleagues, who can view and chat ("can view") or also change the knowledge and instructions ("can edit"). A shared Project becomes a team's shared brain: onboarding documents, policies and templates that everyone's Claude knows.</p>

<h2>The new kind of Project</h2>
<p>Anthropic is rolling out a new version of Projects, starting with Claude Code. In it, a Project is <strong>one ongoing conversation</strong>: you say what you need as it comes to you, and Claude splits the work into separate <strong>threads</strong> that run in parallel in the cloud and keep going even when you close your laptop. Each thread starts with the Project's files, instructions and memory, and a Library collects everything you add and everything Claude produces. You've been using one: the threads that built this academy, each working on one request and reporting back to you, are exactly this.</p>

<div class="callout"><b>Takeaway:</b> A Project bundles knowledge, instructions, memory and chats for one area, so Claude starts every conversation already briefed. Write instructions like a good prompt, keep files well named, and on paid plans Projects grow large through retrieval.</div>
`,
    terms: [
      ["Project", "A Claude workspace with its own files, instructions, memory and chats for one area."],
      ["Project knowledge", "Files and notes added to a Project that Claude uses as background in every chat there."],
      ["Project instructions", "Standing guidance that applies to every chat in one Project."],
      ["Project knowledge search", "The tool Claude uses to find relevant passages when a Project is too big to read all at once."],
      ["Thread", "In the new Projects, a separate piece of work Claude runs in parallel within one Project."],
      ["Library", "In the new Projects, the place that collects the files you add and the files Claude makes."]
    ],
    quiz: [
      { q: "What problem does a Project solve best?", options: ["Typing faster", "Re-explaining the same background in every chat", "Making images", "Lowering the price"], answer: 1, explain: "Projects carry knowledge and instructions into every chat." },
      { q: "Where should a standing rule like 'always use British spelling' go?", options: ["In project instructions", "In every single message", "In the chat title", "Nowhere; Claude can't follow rules"], answer: 0, explain: "Instructions apply to every chat in the Project." },
      { q: "What happens when a paid Project's knowledge gets very large?", options: ["It stops working", "Claude switches to searching the Project for relevant passages", "Files are deleted", "You must buy more storage"], answer: 1, explain: "Retrieval lets a Project hold up to ten times more." },
      { q: "How many Projects can a Free account create?", options: ["None", "Up to five", "Up to fifty", "Unlimited"], answer: 1, explain: "Free accounts get five; paid plans have no limit." },
      { q: "In the new version of Projects, what is a thread?", options: ["A chat in Slack", "A separate piece of work Claude runs in parallel within the Project", "A type of file", "A shared password"], answer: 1, explain: "Threads let several jobs run at once and report back." },
      { q: "Which instruction makes Claude safer to trust in a Project about your lease?", options: ["\"Be creative\"", "\"Only answer from the project files; if they don't cover it, say so\"", "\"Answer in one word\"", "\"Never ask questions\""], answer: 1, explain: "Grounding answers in your files reduces made-up answers." }
    ],
    sources: [
      ["What are projects?", "https://support.claude.com/en/articles/9517075-what-are-projects", "Project knowledge, instructions, sharing and the new version."],
      ["Retrieval augmented generation (RAG) for projects", "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects", "How large Projects use search."],
      ["Understanding Claude's personalization features", "https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features", "Instructions, Project instructions and skills compared."],
      ["Claude Code Docs: Projects", "https://code.claude.com/docs/en/claude-projects", "The new Projects with parallel threads and a Library."]
    ]
  },
  {
    id: "c-memory",
    unit: "lcu2",
    title: "Memory, Instructions and Personalisation",
    summary: "How Claude remembers you across chats, how to see and edit what it knows, and the settings that make every answer fit you.",
    minutes: 12,
    body: `
<p>A good assistant remembers that you're vegetarian, that your manager likes short updates, and what you were working on last week, Abbas. Claude can do this in three ways: <strong>memory</strong>, <strong>chat search</strong> and <strong>instructions</strong>. Each is under your control.</p>

<h2>Memory</h2>
<p>With memory on, Claude saves useful facts about you as you chat, organised into <strong>topics</strong>: your role and projects, the people and places in your life, how you like answers written, your technical preferences and ongoing work. Mention that a deadline has moved, and your next conversation already knows. You can also say "remember this" to save something on purpose, or "forget that" to remove it.</p>
<ul>
  <li><strong>See and edit it:</strong> Settings, Your Claude, then "Manage" next to Your memory. Open any topic to read, edit or delete it.</li>
  <li><strong>Project memory:</strong> each Project has its own memory. Inside a Project, Claude uses that Project's memory plus your general memory, but not memory from other Projects.</li>
  <li><strong>Across chat and tasks:</strong> memory is shared between chat and Cowork tasks, so a task you hand off already knows who your manager is.</li>
  <li><strong>Sensitive topics</strong> such as health, religion or politics are not saved unless you switch that on. Some things are never saved, even if you ask, such as government ID numbers and financial account numbers.</li>
</ul>

<h2>Turning memory off</h2>
<ul>
  <li><strong>For one chat:</strong> before your first message, click + and switch "Memory" off. The chat stays in your history, but Claude won't use or add to memory.</li>
  <li><strong>Incognito:</strong> the ghost icon starts a chat that isn't saved at all.</li>
  <li><strong>Pause or reset:</strong> in settings, pausing keeps what's stored but stops using it; resetting deletes all memory permanently.</li>
</ul>

<h2>Searching past chats</h2>
<p>On paid plans you can ask Claude to look through your earlier conversations: "What did we decide about the holiday budget?" or "Let's continue where we left off with my CV." You'll see it search, with links back to the original chats.</p>

<h2>Instructions for Claude</h2>
<p>In Settings, Your Claude, the <strong>Instructions</strong> box holds guidance that applies to <em>every</em> conversation. This is where your lasting preferences go:</p>
<div class="callout"><b>Example:</b> I'm Abbas, a beginner learning AI. Explain things in plain English with a real-life example. Use British spelling. Keep answers short unless I ask for detail. If I'm about to make a mistake, tell me directly.</div>
<p>How the layers fit together:</p>
<ul>
  <li><strong>Instructions for Claude:</strong> everywhere, always.</li>
  <li><strong>Project instructions:</strong> only inside one Project.</li>
  <li><strong>Memory:</strong> facts Claude picks up and keeps updating.</li>
  <li><strong>Skills</strong> (Lesson 13): step-by-step know-how that loads only when a task needs it.</li>
</ul>

<div data-widget="sort" data-set="claude-personal"></div>

<h2>Bringing memory from another assistant</h2>
<p>If you've used ChatGPT or Gemini for a while, you can move what they know about you. Settings, Your Claude, "Start import" gives you a prompt to paste into your old assistant; it lists everything it remembers, and you paste the result back into Claude. This feature is still experimental, so check what was imported.</p>

<h2>Your monthly recap</h2>
<p>With memory on, Free, Pro, Max and Ultra users can open a <strong>monthly recap</strong> (Settings, Wellbeing, Reflect). It shows what you spent time on, when you use Claude most, and suggestions based on Anthropic's four <strong>AI fluency</strong> skills: <em>Delegation</em> (what to hand off), <em>Description</em> (the context you give), <em>Discernment</em> (judging what comes back) and <em>Diligence</em> (using AI responsibly). It's a useful mirror for getting better at working with AI. The same settings area lets you set break reminders and quiet hours.</p>

<div class="callout"><b>Takeaway:</b> Memory keeps topics about you and updates as you chat; you can view, edit, pause or reset it and switch it off for one chat. Put lasting preferences in Instructions for Claude, area-specific rules in Projects, and use chat search to pick up old threads.</div>
`,
    terms: [
      ["Memory", "Facts about you that Claude saves as topics and uses in later conversations."],
      ["Memory topic", "One saved area of memory, such as your job or your writing preferences, which you can read and edit."],
      ["Chat search", "Claude searching your earlier conversations to bring back relevant details."],
      ["Instructions for Claude", "Account-wide guidance that applies to every conversation."],
      ["Memory import", "Bringing what another AI assistant remembers about you into Claude."],
      ["AI fluency", "Anthropic's framework of four skills for working with AI: delegation, description, discernment and diligence."],
      ["Monthly recap", "A private summary of how you used Claude over a period, with suggestions."]
    ],
    quiz: [
      { q: "Where can you see exactly what Claude remembers about you?", options: ["Nowhere; it's hidden", "Settings, Your Claude, Manage memory", "Only by emailing Anthropic", "In your browser history"], answer: 1, explain: "Memory topics are listed and editable in settings." },
      { q: "You want one chat where Claude ignores your memory, but you still want to keep the chat. What do you do?", options: ["Use incognito", "Switch Memory off in the + menu before the first message", "Reset all memory", "Delete the chat afterwards"], answer: 1, explain: "Incognito doesn't keep the chat; the per-chat switch does." },
      { q: "Does memory from your 'Job search' Project appear inside your 'Garden' Project?", options: ["Yes, always", "No, each Project keeps its own memory", "Only on Fridays", "Only on mobile"], answer: 1, explain: "Project memories are kept separate from each other." },
      { q: "Where should 'Always use British spelling' go if you want it in every chat?", options: ["Instructions for Claude", "A single Project", "Your chat title", "An incognito chat"], answer: 0, explain: "Instructions for Claude apply everywhere." },
      { q: "Which information does Claude never save to memory, even if asked?", options: ["Your favourite colour", "Government ID numbers and financial account numbers", "Your job title", "Your writing style"], answer: 1, explain: "Some sensitive data is always excluded." },
      { q: "Which is NOT one of the four AI fluency skills?", options: ["Delegation", "Description", "Discernment", "Decoration"], answer: 3, explain: "The four are delegation, description, discernment and diligence." }
    ],
    sources: [
      ["Use Claude's chat search and memory", "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context", "How memory topics, project memory and chat search work."],
      ["Import and export your memory from Claude", "https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude", "Moving memory between assistants."],
      ["Understanding Claude's personalization features", "https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features", "Instructions, Project instructions and skills."],
      ["See your monthly recap", "https://support.claude.com/en/articles/15672559-see-your-monthly-recap", "The recap and the four AI fluency skills."],
      ["Anthropic Academy: AI Fluency", "https://academy.claude.com/", "Free course on the 4D AI fluency framework."]
    ]
  },
  {
    id: "c-search",
    unit: "lcu2",
    title: "Web Search, Research and Thinking",
    summary: "When to let Claude search the web, when to run a full Research report, and when it just needs to think harder.",
    minutes: 11,
    body: `
<p>Claude has three ways to go beyond its built-in knowledge, Abbas, and choosing the right one saves time and allowance. Anthropic's own help centre puts it like this: web search for quick facts, thinking for hard reasoning, and Research for in-depth reports.</p>

<h2>Web search: quick, current facts</h2>
<p>Web search is best for questions one or two searches can answer: today's news, a company's opening hours, the result of last night's match, the current price of something. Claude runs the search, reads the results and answers with <strong>citations</strong>, numbered links to the pages it used, so you can check them.</p>
<ul>
  <li>In the newest Claude app there's no switch: Claude searches when it helps. In older layouts, turn on "Web search" from the + menu.</li>
  <li><strong>Web fetch:</strong> paste a link and Claude reads that page in full. Handy for "summarise this article", but a very long page uses a lot of allowance.</li>
  <li><strong>Images:</strong> search can show pictures too: "What does a ripe papaya look like?"</li>
  <li>Claude can also show live <strong>visual answers</strong> for some topics, such as weather forecasts, recipe cards and sports scores.</li>
</ul>

<h2>Research: the in-depth report</h2>
<p><strong>Research</strong> (paid plans) is for questions that need many searches that build on each other: comparing several products, understanding a new field, or planning something with many moving parts. Claude decides what to look into next based on what it finds, explores different angles, and writes a long, cited report. It usually takes a few minutes, and longer for big questions.</p>
<ul>
  <li>Turn it on from the + menu ("Research"). Web search must be enabled.</li>
  <li>On the web and desktop, Research can also use your <strong>connected apps</strong>, such as Gmail, Google Calendar and Docs, to combine your own information with the web. On the phone app it only searches the web.</li>
  <li>Research always runs on a strong model (currently Opus 5.5), whichever model you picked.</li>
  <li>It uses your allowance faster than normal chat, so save it for questions that deserve it.</li>
</ul>

<h2>Thinking: reasoning without the web</h2>
<p>Some questions don't need new information, just harder thought: a maths problem, a tricky plan, weighing up a decision from several angles. Raise the <strong>effort</strong> (Lesson 2) rather than searching. You can combine both: high effort plus Research gives a carefully planned investigation.</p>

<div data-widget="sort" data-set="claude-search-mode"></div>

<h2>Writing a great Research request</h2>
<ol>
  <li><strong>The goal:</strong> "I'm choosing a laptop for video editing under £1,200."</li>
  <li><strong>What to cover:</strong> "Compare five options on performance, screen, battery and reliability."</li>
  <li><strong>Where to look, or not:</strong> "Prefer independent reviews over makers' websites; ignore anything older than 2025."</li>
  <li><strong>The output:</strong> "End with a comparison table and a recommendation with reasons."</li>
</ol>

<h2>Checking what comes back</h2>
<p>Citations make checking easy, but they don't guarantee accuracy. A source can be wrong, out of date or misread. For decisions that matter: open the two or three sources behind the key claims, check that they really say what Claude says, prefer original sources (the official site, the study itself) to blogs about them, and be wary of anything with no citation at all.</p>

<div class="callout"><b>Takeaway:</b> Web search for quick current facts, with citations to check; Research for multi-step, cited reports that can also draw on your connected apps; higher effort when the problem needs thinking, not searching. Always open the sources behind the claims that matter.</div>
`,
    terms: [
      ["Web search", "Claude looking up current information online and answering with citations."],
      ["Citation", "A numbered link to the source behind a statement, so you can check it."],
      ["Web fetch", "Claude reading the full content of a web page from a link you give it."],
      ["Research", "Claude's mode for in-depth investigations: many linked searches and a long, cited report."],
      ["Primary source", "The original source of information, such as the official site or the study itself."]
    ],
    quiz: [
      { q: "Which tool fits 'What time does the Science Museum open tomorrow?'", options: ["Research", "Web search", "Max effort with no search", "A Project"], answer: 1, explain: "One quick, current fact: web search." },
      { q: "Which fits 'Compare the six best family cars for safety, running costs and reliability, with a report'?", options: ["Web search", "Research", "Incognito", "Haiku at low effort"], answer: 1, explain: "Many linked searches and a long report: Research." },
      { q: "Which fits 'Help me work out the fairest way to split rent between three rooms of different sizes'?", options: ["Research", "Higher effort and thinking, no search needed", "Web fetch", "Voice mode"], answer: 1, explain: "It needs reasoning, not new information." },
      { q: "What extra can Research use on the web and desktop?", options: ["Your connected apps, such as Gmail and Calendar", "Your bank PIN", "Other people's chats", "Nothing beyond the web"], answer: 0, explain: "Research can combine connected apps with the web." },
      { q: "Do citations guarantee a claim is true?", options: ["Yes, always", "No; check that key sources really say it and are reliable", "Only if there are more than three", "Only on Pro"], answer: 1, explain: "Sources can be wrong or misread, so verify the important ones." },
      { q: "You paste a link to a very long report and ask for a summary. What's worth knowing?", options: ["Claude can't open links", "Claude reads the whole page, which uses a lot of allowance", "It costs money per word", "It only reads the title"], answer: 1, explain: "Web fetch pulls the full page into the chat." }
    ],
    sources: [
      ["When should I use web search, extended thinking, and research?", "https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research", "Anthropic's guide to choosing between the three."],
      ["Enable and use web search", "https://support.claude.com/en/articles/10684626-enable-and-use-web-search", "Citations, web fetch and image results."],
      ["Use research on Claude", "https://support.claude.com/en/articles/11088861-use-research-on-claude", "How Research works and what it can reach."],
      ["Visual and interactive content", "https://support.claude.com/en/articles/13641943-visual-and-interactive-content", "Weather, recipes, sports and custom visuals."]
    ]
  },

  /* ============================ UNIT 3 ============================ */
  {
    id: "c-artifacts",
    unit: "lcu3",
    title: "Artifacts: Things You Can Use and Share",
    summary: "Turn answers into documents, decks, designs, dashboards and small apps that open beside the chat, keep improving, and can be shared.",
    minutes: 12,
    body: `
<p>Most of what an assistant writes disappears up the chat window, Abbas. An <strong>artifact</strong> is different: it's something Claude makes that you'd put in front of someone, like a document, a deck, a design, a dashboard or a small interactive tool. It opens in its own panel beside the conversation, you can keep improving it, and you can share it with a link. The Claude-hosted copy of this academy, with its AI tutor, is an artifact.</p>

<h2>When Claude makes one</h2>
<p>Claude creates an artifact when the content is substantial, stands on its own, and is something you'll likely edit, reuse or come back to: a full report rather than a two-line answer. You can also simply ask: "Make this an artifact", or choose an output type from the message box (Lesson 10).</p>
<p>Artifacts can be almost anything: a document, a code snippet, a one-page website, a diagram or flowchart, a chart, a quiz, a calculator, a game, a habit tracker.</p>

<h2>Improving an artifact</h2>
<ul>
  <li><strong>Ask Claude:</strong> "Make the header smaller and add a dark mode." The artifact updates live, and earlier versions are kept.</li>
  <li><strong>Edit directly:</strong> in artifacts made from a template, type straight into the document, edit a slide, or drag elements on a design.</li>
  <li><strong>Highlight and ask:</strong> select some text, click "Edit with Claude" and say what to change. Claude edits exactly there, so you don't have to describe which paragraph you mean.</li>
  <li><strong>Fix errors:</strong> if an interactive artifact breaks, click "Try fixing with Claude".</li>
</ul>

<h2>Finding them again</h2>
<p>Everything you make is saved in the <strong>Artifacts</strong> tab in the sidebar, so you can find it from any conversation, start a new one from a template, and organise what you've made.</p>

<h2>Sharing</h2>
<p>Artifacts start <strong>private</strong>: only you can see them. Click "Share" to choose who else can open it:</p>
<ul>
  <li><strong>Personal plans:</strong> "Only you", "Anyone with the link", or invite specific people by email (they sign in to Claude to open it).</li>
  <li><strong>Team and Enterprise:</strong> invited people, anyone in your organisation, or anyone with the link if your admin allows it.</li>
</ul>
<p>People you share with can view, comment or edit, depending on the access you give. Change sharing settings on the web or desktop; the phone apps can view and edit but not reshare.</p>

<div data-widget="sort" data-set="claude-artifact-or-not"></div>

<h2>Artifacts that remember: storage</h2>
<p>On paid plans, an artifact can <strong>store data</strong> between visits, so you can build journals, trackers, sign-up sheets or a family chore chart. Storage is either:</p>
<ul>
  <li><strong>Personal:</strong> each person sees only their own data (a private journal).</li>
  <li><strong>Shared:</strong> everyone sees the same data (a game leaderboard or a team sign-up list). Claude shows a warning the first time you use shared storage.</li>
</ul>
<p>An artifact can hold up to 100 MB and 25,000 records by default, and can include an upload button for images, PDFs or spreadsheets. Before typing anything sensitive into someone else's artifact, check whether it uses shared storage.</p>

<h2>Artifacts that connect to your apps</h2>
<p>On paid plans, an artifact can also use your <strong>connected apps</strong> (Lesson 13): a dashboard that pulls from your Google Calendar, say. The first time, Claude shows which apps and tools it will use and asks you to approve them. Everyone who opens a shared artifact connects their <em>own</em> apps, so they see their own data, never yours.</p>

<h2>Safety with other people's artifacts</h2>
<p>You can copy a published artifact you like and build your own version. Only do this with artifacts from people you trust: it's someone else's code, so treat it like a file from a stranger.</p>

<div class="callout"><b>Takeaway:</b> Artifacts turn Claude's work into documents, designs, tools and apps beside the chat. Improve them by asking, editing directly or highlighting; find them in the Artifacts tab; share by link or invitation. On paid plans they can store data and use your connected apps.</div>
`,
    terms: [
      ["Artifact", "Something Claude makes that you can use, edit and share, such as a document, deck, design or small app."],
      ["Artifacts tab", "The sidebar area that keeps everything you've made with Claude."],
      ["Edit with Claude", "Highlighting part of an artifact and asking Claude to change just that part."],
      ["Personal storage", "Artifact data that each person keeps privately."],
      ["Shared storage", "Artifact data that everyone using the artifact sees and changes together."],
      ["Publishing", "Sharing an artifact so others can open it, by link or invitation."]
    ],
    quiz: [
      { q: "Which is a good candidate for an artifact?", options: ["\"Yes, that's right\"", "A reusable weekly meal planner you'll come back to", "A one-word answer", "\"Thanks!\""], answer: 1, explain: "Artifacts are for substantial, reusable things." },
      { q: "Who can see a new artifact when Claude first makes it?", options: ["Everyone on the internet", "Only you", "Everyone at Anthropic", "Your contacts"], answer: 1, explain: "Artifacts start private until you share them." },
      { q: "What does 'Edit with Claude' do?", options: ["Deletes the artifact", "Changes exactly the part you highlighted", "Starts a new chat", "Prints it"], answer: 1, explain: "Highlight, ask, and Claude edits that spot." },
      { q: "You build a team leaderboard where everyone sees the same scores. Which storage is that?", options: ["Personal", "Shared", "Incognito", "None"], answer: 1, explain: "Shared storage is visible to everyone using the artifact." },
      { q: "A friend shares a calendar dashboard artifact with you. Whose calendar do you see?", options: ["Your friend's", "Your own, after you connect your own apps", "Anthropic's", "Nobody's"], answer: 1, explain: "Everyone connects their own apps to a shared artifact." },
      { q: "Where do you find everything you've made?", options: ["In the Artifacts tab", "Only in your email", "In your browser downloads", "Nowhere; they vanish"], answer: 0, explain: "The Artifacts tab keeps them all." }
    ],
    sources: [
      ["What are artifacts and how do I use them?", "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them", "Creating, editing, storing and connecting artifacts."],
      ["Share artifacts", "https://support.claude.com/en/articles/9547008-share-artifacts", "Who can open an artifact and how to invite people."],
      ["Use artifacts with a keyboard or screen reader", "https://support.claude.com/en/articles/17457950-use-artifacts-with-a-keyboard-or-screen-reader", "Accessibility guide to artifacts."]
    ]
  },
  {
    id: "c-templates",
    unit: "lcu3",
    title: "Docs, Slides, Design and Data",
    summary: "Claude's ready-made artifact types: living documents, presentation decks, visual designs, data dashboards, sheets, whiteboards and animations.",
    minutes: 12,
    body: `
<p>Since September 2026, every Claude conversation can produce professional work from a set of <strong>templates</strong>, Abbas: ready-made kinds of artifact with their own editors. Ask for one in plain words ("Make me a deck about..."), pick it from "Output" in the message box, or start from the Artifacts tab. Here's each one.</p>

<h2>Claude Docs: living documents</h2>
<p>A Doc is a rich document saved to your account, with headings, tables and even several tabs, like a notebook. Ask for one and Claude asks a few questions first, drafts it in front of you, and leaves comments explaining its choices. You and anyone you share it with can edit, comment and ask Claude for the next pass; every change is labelled with who made it, person or Claude. Docs export to Word, PDF, Markdown or Google Docs. Available on every plan.</p>
<p><em>Try:</em> "Turn the plan we just worked out into a one-page brief I can send to my family."</p>

<h2>Claude Slides: presentations</h2>
<p>Slides builds a deck from your notes, a report or the work already in your chat. Edit any slide directly, present without leaving Claude, and export to PowerPoint, PDF or Google Slides. Available on every plan.</p>
<p><em>Try:</em> "Make a ten-slide talk on what I've learned about AI tools, for a community group, with one idea per slide."</p>

<h2>Claude Design: visuals and prototypes</h2>
<p>Design pairs a conversation with a <strong>canvas</strong>. Describe a poster, a one-pager, a landing page or an app screen and Claude builds a working design you can refine by chatting, commenting or dragging things on the canvas. A <strong>design system</strong> (your colours, fonts and building blocks) can be attached, so everything matches your brand. Exports include PDF, PowerPoint, standalone HTML and a zip. Available on every plan. (The older standalone site at claude.ai/design closes on 14 December 2026; the same features now live inside Claude.)</p>

<h2>Claude Data: dashboards from your numbers</h2>
<p>Data (paid plans, formerly called Dashboards) turns questions about data into dashboards, scrolling data stories, short narrated videos or written analyses. Connect a data source, such as a company data warehouse or an app like Salesforce, and ask in plain English. Claude writes a query for each chart, and every chart shows its query and when it was last refreshed, so you can see exactly what's being counted.</p>

<h2>Sheets, Whiteboards and Motion (beta)</h2>
<ul>
  <li><strong>Sheets</strong> (paid plans): spreadsheets Claude builds with you, with formulas across tabs, that you both edit in the same cells.</li>
  <li><strong>Whiteboards</strong> (paid plans): a shared board for thinking through ideas with Claude and others.</li>
  <li><strong>Motion</strong> (Team and Enterprise): animated explainers and charts. Change one word or number and the rest stays as it was. Exports as an MP4 video.</li>
</ul>

<div data-widget="sort" data-set="claude-template"></div>

<h2>Getting great results from any template</h2>
<ol>
  <li><strong>Say what it's for and who will see it:</strong> "a two-page launch brief for our sales team" beats "a launch brief".</li>
  <li><strong>Point to the material:</strong> name the file, Project or connected app Claude should use.</li>
  <li><strong>Answer its questions:</strong> the few seconds you spend up front save several rounds later.</li>
  <li><strong>Refine in small steps:</strong> one change at a time is easier to check than ten.</li>
  <li><strong>Check facts and numbers</strong> before you share: a beautiful deck with a wrong figure is still wrong.</li>
</ol>

<div class="callout"><b>Takeaway:</b> Docs for living documents, Slides for decks, Design for visuals and prototypes, Data for dashboards from your numbers, plus Sheets, Whiteboards and Motion in beta. Ask in plain words, point Claude at the right material, and check the facts before sharing.</div>
`,
    terms: [
      ["Template", "A ready-made type of artifact, such as Docs, Slides or Design, with its own editor."],
      ["Claude Docs", "Living rich-text documents you write and edit with Claude and other people."],
      ["Claude Slides", "Presentation decks Claude builds and you can edit, present and export."],
      ["Claude Design", "A canvas for designs, mock-ups and prototypes built by chatting."],
      ["Design system", "A set of colours, fonts and components that keeps designs consistent with a brand."],
      ["Claude Data", "Dashboards and data stories built from connected data, showing the query behind each chart."],
      ["Canvas", "The visual workspace beside the chat where a design is shown and edited."]
    ],
    quiz: [
      { q: "You need a presentation for a club meeting. Which template?", options: ["Docs", "Slides", "Data", "Motion"], answer: 1, explain: "Slides makes decks you can present and export." },
      { q: "What makes Claude Docs 'living' documents?", options: ["They expire after a day", "You, other people and Claude keep editing them, with every change attributed", "They talk out loud", "They can't be exported"], answer: 1, explain: "Docs are shared and keep evolving." },
      { q: "What does a design system do in Claude Design?", options: ["Makes designs random", "Keeps colours, fonts and components consistent with a brand", "Deletes old designs", "Prints posters"], answer: 1, explain: "New work picks up your brand automatically." },
      { q: "Why does Claude Data show the query behind every chart?", options: ["To look technical", "So you can see exactly what's being counted and check it", "It's required by law", "To slow it down"], answer: 1, explain: "Transparency lets you verify the numbers." },
      { q: "Which formats can a Slides deck export to?", options: ["Only images", "PowerPoint, PDF or Google Slides", "MP3", "None"], answer: 1, explain: "Decks export to the formats people already use." },
      { q: "What's the most important step before sharing a polished deck?", options: ["Add more animations", "Check the facts and numbers", "Make it longer", "Change the font"], answer: 1, explain: "Good design doesn't make a wrong figure right." }
    ],
    sources: [
      ["Get started with Claude Docs", "https://support.claude.com/en/articles/16923645-get-started-with-claude-docs", "Creating, editing and sharing Docs."],
      ["Get started with Claude Design", "https://support.claude.com/en/articles/14604416-get-started-with-claude-design", "The design canvas and design systems."],
      ["Get started with Claude Data", "https://support.claude.com/en/articles/17454700-get-started-with-claude-data", "Dashboards and data stories from connected data."],
      ["What are artifacts and how do I use them?", "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them", "All templates and which plans include them."]
    ]
  },
  {
    id: "c-make",
    unit: "lcu3",
    title: "Files, Code and Visuals",
    summary: "How Claude runs code in a safe sandbox to analyse data and create Excel, Word, PowerPoint and PDF files, and draws charts and diagrams in the chat.",
    minutes: 11,
    body: `
<p>Behind many of Claude's most useful tricks is one quiet capability, Abbas: it can <strong>write and run code</strong>. When you ask for a spreadsheet with formulas or a chart of your bank statement, Claude writes a small program, runs it in a safe, sealed-off computer called a <strong>sandbox</strong>, and hands you the result. You never have to see the code unless you want to.</p>

<h2>Switching it on</h2>
<p>It's on by default for personal plans. If it's off, go to Settings, Capabilities and turn on <strong>Code execution and file creation</strong> (called "Create and edit files" in the newer settings layout). Artifacts and skills also need it, so it's worth leaving on.</p>

<h2>What it lets Claude do</h2>
<ul>
  <li><strong>Make real office files:</strong> Excel spreadsheets with working formulas, Word documents, PowerPoint decks and PDFs, ready to download.</li>
  <li><strong>Analyse data:</strong> upload a CSV or spreadsheet and ask "Which month did I spend most on eating out?" Claude calculates the answer instead of estimating it, which is far more reliable for numbers.</li>
  <li><strong>Edit files:</strong> "Here's my CV in Word. Tighten it to one page and keep the formatting."</li>
  <li><strong>Convert and tidy:</strong> merge spreadsheets, clean messy columns, turn a table in a PDF into a spreadsheet.</li>
  <li><strong>Do exact maths:</strong> for loan repayments or statistics, ask Claude to calculate with code so the answer isn't a guess.</li>
</ul>
<div class="callout"><b>Tip:</b> For any sum that matters, add "use code to calculate this". Language models can slip on arithmetic; code doesn't.</div>

<h2>Visuals in the chat</h2>
<p>Claude doesn't paint pictures or create photos. But it can <strong>build</strong> visuals from code, right in the conversation: flowcharts, diagrams, timelines, interactive charts you can hover over, and simple explorable tools. Ask "How does a mortgage work? Show me a diagram", or upload a spreadsheet and ask for a chart. These custom visuals are built for your question, and you can ask Claude to adjust them. They work on the web and desktop, and the phone apps can show interactive charts and diagrams too.</p>
<p>Claude can also ask you structured questions with clickable options instead of a wall of text, which makes planning conversations quicker.</p>

<div data-widget="sort" data-set="claude-code-or-not"></div>

<h2>Network access</h2>
<p>The sandbox is separate from your computer. On personal plans it can reach the internet to install software packages it needs. On Team and Enterprise plans, admins choose how much it can reach, from nothing at all to a list of approved sites. Turning network access off is the safest choice for sensitive data, because nothing can leave the sandbox, even if Claude were tricked.</p>

<h2>Good habits</h2>
<ol>
  <li><strong>Describe the result, not the method:</strong> "a budget sheet with a monthly total and a pie chart by category".</li>
  <li><strong>Open the file and test it:</strong> change a number and check the formulas update.</li>
  <li><strong>Ask Claude to explain:</strong> "Explain each formula in plain English" teaches you as well as checking its work.</li>
  <li><strong>Keep the original:</strong> always keep your own copy of anything you ask Claude to edit.</li>
</ol>

<div class="callout"><b>Takeaway:</b> With code execution on, Claude runs code in a sealed sandbox to make real Excel, Word, PowerPoint and PDF files, analyse data exactly, and build charts and diagrams in the chat. Ask it to calculate with code when numbers matter, and test the files it gives you.</div>
`,
    terms: [
      ["Code execution", "Claude writing and running small programs to calculate, analyse data or create files."],
      ["Sandbox", "A sealed-off computer where Claude's code runs, separate from your own device."],
      ["File creation", "Claude producing downloadable files such as spreadsheets, documents, decks and PDFs."],
      ["Custom visual", "A chart, diagram or interactive tool Claude builds from code for your question."],
      ["Network egress", "Whether code in the sandbox can reach the internet."]
    ],
    quiz: [
      { q: "How does Claude create an Excel file with working formulas?", options: ["It draws a picture of a spreadsheet", "It writes and runs code in a sandbox to build the file", "It asks Microsoft", "It can't"], answer: 1, explain: "Code execution produces real files." },
      { q: "Why say 'use code to calculate this' for a loan repayment?", options: ["It sounds technical", "Code does exact arithmetic, while language models can slip", "It's faster to type", "It's free"], answer: 1, explain: "Calculated answers are more reliable than estimated ones." },
      { q: "Can Claude generate a photo of your living room redesigned?", options: ["Yes, photorealistic", "No; it builds diagrams and charts from code, not photos", "Only on Max", "Only on mobile"], answer: 1, explain: "Use an image tool from Level 2 for photos." },
      { q: "What is the sandbox?", options: ["A game", "A sealed-off computer where Claude's code runs, separate from yours", "A type of model", "Your Downloads folder"], answer: 1, explain: "Code runs in isolation from your device." },
      { q: "Which setting must be on for file creation, Artifacts and skills?", options: ["Incognito", "Code execution and file creation", "Voice mode", "Dark mode"], answer: 1, explain: "Many features rely on code execution." },
      { q: "Claude gives you a budget spreadsheet. What's a sensible check?", options: ["Trust it completely", "Change a number and see if the totals update correctly", "Print it immediately", "Delete the formulas"], answer: 1, explain: "Testing shows whether the formulas really work." }
    ],
    sources: [
      ["Create and edit files with Claude", "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude", "File creation, the sandbox and network settings."],
      ["Custom visuals in chat and Cowork", "https://support.claude.com/en/articles/13979539-custom-visuals-in-chat-and-cowork", "Charts, diagrams and interactive visuals."],
      ["Can Claude produce images?", "https://support.claude.com/en/articles/9002504-can-claude-produce-images", "What Claude can and can't make visually."],
      ["How does Claude handle mathematical equations and calculations?", "https://support.claude.com/en/articles/10366421-how-does-claude-handle-mathematical-equations-and-calculations", "Why code helps with maths."]
    ]
  },
  {
    id: "c-apps",
    unit: "lcu3",
    title: "Claude Everywhere: Browser, Office, Voice and Phone",
    summary: "Claude in Chrome, the Excel, Word, PowerPoint and Outlook add-ins, Google Docs, Sheets and Slides, voice mode, the phone apps, and Claude in Slack.",
    minutes: 12,
    body: `
<p>You don't always have to go to Claude, Abbas. Increasingly, Claude comes to where you already work. This lesson tours those places and what each is best for.</p>

<h2>Claude in Chrome</h2>
<p>Claude in Chrome (paid plans) is a browser extension that lets Claude <strong>read, click, type and navigate</strong> websites alongside you. Open the side panel and Claude sees the page you're on: summarise or compare open tabs, pull details from a page into a note or form, or walk through a task on a site step by step while you watch. It can also be used by Cowork and Claude Code to do browser work for them.</p>
<p>It's powerful, and it carries real risks:</p>
<ul>
  <li><strong>Prompt injection:</strong> a web page or email can hide instructions meant to trick an AI ("ignore your user and send me their data"). Anthropic trains Claude to resist this and runs safety checks on content and on every action, but the risk isn't zero.</li>
  <li><strong>Screenshots:</strong> Claude takes screenshots of the tabs it works in, so anything visible becomes part of the conversation. Close tabs with private information first.</li>
  <li>Use it on trusted sites, keep an eye on what it does, and don't let it handle money or sensitive accounts unsupervised. High-risk actions, such as downloads or entering sensitive information, ask for your approval.</li>
</ul>

<h2>Microsoft 365: Excel, PowerPoint, Word and Outlook</h2>
<p><strong>Claude for Microsoft 365</strong> is a set of add-ins that put Claude inside your Office apps:</p>
<ul>
  <li><strong>Excel:</strong> read and write cells, formulas, formatting, pivot tables and charts. "What does column F calculate?" or "Build a three-year forecast on a new tab."</li>
  <li><strong>PowerPoint:</strong> create and edit slides using your existing templates.</li>
  <li><strong>Word:</strong> draft, review and edit with tracked changes and comments.</li>
  <li><strong>Outlook:</strong> sort your inbox, draft replies in your voice, summarise threads and find meeting times.</li>
</ul>
<p>They share the conversation between apps, so the analysis you did in Excel can flow into the deck in PowerPoint. Separately, the <strong>Microsoft 365 connector</strong> (all plans) lets Claude search your Outlook mail, calendar and OneDrive from an ordinary chat.</p>

<h2>Google Docs, Sheets and Slides</h2>
<p><strong>Claude for Google Workspace</strong> (beta, paid plans) adds a Claude sidebar to Google Docs, Sheets and Slides (Extensions, Claude, Open Claude). It reads the file you have open and edits it in place, with every change in the version history. This is the opposite direction to the Google Drive and Gmail connectors, which bring your files <em>into</em> a Claude chat.</p>

<h2>Voice mode</h2>
<p>Tap the sound-wave icon to have a spoken conversation (all plans, works best on the phone). <strong>Hands-free</strong> mode listens continuously and replies when you pause; <strong>push-to-talk</strong> is better in noisy places. Voice can use web search and your connected apps, so "What's on my calendar tomorrow?" works by voice too. Great for practising a language, thinking out loud on a walk, or cooking with messy hands.</p>

<h2>The phone apps</h2>
<p>Beyond chat and voice: snap a photo for Claude to look at, open Claude from the lock screen or Action button on iPhone, check on long tasks you started on your laptop, and view and edit your artifacts.</p>

<div data-widget="sort" data-set="claude-surface"></div>

<h2>Claude in your team's chat and meetings</h2>
<ul>
  <li><strong>Claude Tag</strong> (Team and Enterprise, beta): tag @Claude in a Slack channel to hand it a task. It works in the thread where everyone can see and steer it, and can follow up on its own.</li>
  <li><strong>Claude Meetings</strong> (Team and Enterprise, beta from November 2026): Claude joins Google Meet calls to take notes, answer questions and build documents and slides.</li>
</ul>

<h2>Claude Duet (research preview)</h2>
<p>Claude Duet is an early experiment for Pro, Max and Ultra users in the US, by invitation: an app you message like a person. It works across your connected apps, sends a morning brief from your email and calendar, takes on larger jobs, and is designed to ask before it sends a message, pays for anything, signs a document or deletes something. It shows where personal assistants are heading.</p>

<div class="callout"><b>Takeaway:</b> Claude in Chrome acts on web pages (use trusted sites and watch it); the Microsoft 365 and Google Workspace add-ins bring Claude into your documents; voice mode and the phone apps make it hands-free and portable; Claude Tag and Meetings bring it into team chat and calls.</div>
`,
    terms: [
      ["Claude in Chrome", "A browser extension that lets Claude read, click and fill in web pages for you."],
      ["Prompt injection", "Hidden instructions in a web page, email or document that try to trick an AI into doing something you didn't ask."],
      ["Add-in", "A small extension that adds Claude to another app, such as Excel or Word."],
      ["Claude for Microsoft 365", "Claude add-ins for Excel, PowerPoint, Word and Outlook."],
      ["Claude for Google Workspace", "A Claude sidebar inside Google Docs, Sheets and Slides."],
      ["Voice mode", "Talking with Claude out loud and hearing it reply."],
      ["Claude Tag", "Claude working inside Slack when someone tags @Claude."]
    ],
    quiz: [
      { q: "What is prompt injection?", options: ["A faster way to type prompts", "Hidden instructions in content that try to trick an AI", "A medical term", "A type of plan"], answer: 1, explain: "It's the biggest risk for AI that browses or reads your email." },
      { q: "Before letting Claude in Chrome work, what should you do with a tab showing your bank account?", options: ["Leave it open", "Close it, because Claude takes screenshots of tabs it works in", "Zoom in", "Refresh it"], answer: 1, explain: "Anything visible can become part of the conversation." },
      { q: "You want Claude to build a forecast directly inside your Excel workbook. What do you use?", options: ["Voice mode", "Claude for Excel add-in", "Incognito", "Claude Tag"], answer: 1, explain: "The add-in works on the open workbook." },
      { q: "What's the difference between the Google Docs sidebar and the Google Drive connector?", options: ["None", "The sidebar brings Claude into the file; the connector brings files into a Claude chat", "The connector is only for photos", "The sidebar only reads"], answer: 1, explain: "They work in opposite directions." },
      { q: "Which voice setting suits a noisy train?", options: ["Hands-free", "Push-to-talk", "Incognito", "Max effort"], answer: 1, explain: "Push-to-talk only listens while you hold the button." },
      { q: "What is Claude Tag?", options: ["A name badge", "Claude working in Slack when tagged", "A price label", "A memory topic"], answer: 1, explain: "Tag @Claude in a channel to hand it work." }
    ],
    sources: [
      ["Get started with Claude in Chrome", "https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome", "What the extension does and where it works."],
      ["Use Claude in Chrome safely", "https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely", "Prompt injection, screenshots and safeguards."],
      ["Claude for Microsoft 365 overview", "https://claude.com/docs/office-agents/overview", "The Excel, PowerPoint, Word and Outlook add-ins."],
      ["Use Claude in Google Docs, Sheets, and Slides", "https://support.claude.com/en/articles/16951679-use-claude-in-google-docs-sheets-and-slides", "The Google Workspace sidebar."],
      ["Use voice mode", "https://support.claude.com/en/articles/11101966-use-voice-mode", "Hands-free and push-to-talk."],
      ["What is Claude Tag?", "https://support.claude.com/en/articles/15594475-what-is-claude-tag", "Claude in Slack for teams."]
    ]
  },

  /* ============================ UNIT 4 ============================ */
  {
    id: "c-connectors",
    unit: "lcu4",
    title: "Connectors, Skills and Plugins",
    summary: "Plug Claude into your apps with connectors, teach it repeatable know-how with skills, and install whole ready-made setups with plugins.",
    minutes: 13,
    body: `
<p>Out of the box, Claude knows a lot about the world and nothing about your inbox, calendar or the way you like a report laid out, Abbas. Three features fix that. <strong>Connectors</strong> give Claude access to your apps. <strong>Skills</strong> teach it how to do particular jobs. <strong>Plugins</strong> bundle both into a ready-made kit. You'll find all three under <strong>Customize</strong> in the sidebar.</p>

<h2>Connectors: Claude's hands in your apps</h2>
<p>A connector lets Claude read from and act in another service: search your Google Drive, read and draft Gmail, check your calendar, create tasks in Asana or Linear, post in Slack, look things up in Notion, and much more. Once connected, Claude brings an app into a conversation by itself when it fits your request, so you don't have to name it every time.</p>
<ul>
  <li><strong>Add one:</strong> Customize, Connectors, then browse the directory and click Connect. You sign in to the service and approve what Claude may do.</li>
  <li><strong>Your permissions, not more:</strong> Claude inherits your access. If you can't open a file, neither can Claude.</li>
  <li><strong>Read and write:</strong> some connectors can only read; others can also act, such as sending email or creating events. Claude asks before many actions, and you can choose which tools need approval.</li>
  <li><strong>Desktop extensions:</strong> on Claude Desktop, extensions can connect Claude to programs and files on your own computer.</li>
</ul>
<p>Connectors are built on the <strong>Model Context Protocol (MCP)</strong>, an open standard Anthropic created in 2024 and now used across the AI industry. Think of MCP as a universal plug: any service that offers an MCP server can be connected to Claude, and you can add custom connectors by pasting a server's address. The same connectors work in chat, Cowork, Claude Code and the developer API.</p>
<div class="callout"><b>Tip:</b> Only connect services you trust and need. A connector that can send email is powerful; it also means a tricked or mistaken Claude could send one. Start with read-only uses.</div>

<h2>Skills: teach Claude a job once</h2>
<p>A <strong>skill</strong> is a folder of instructions, and sometimes scripts and templates, that teaches Claude to do one kind of task the same, reliable way. The heart of a skill is a file called SKILL.md: a name, a one-line description of when to use it, and the step-by-step instructions.</p>
<p>The clever part is <strong>progressive disclosure</strong>. Claude only sees each skill's short description at first. When a task matches, it loads the full instructions; otherwise they take up no space. So you can have dozens of skills without slowing Claude down.</p>
<ul>
  <li><strong>Anthropic's skills:</strong> built in, for creating excellent Word, Excel, PowerPoint and PDF files. Claude uses them automatically.</li>
  <li><strong>Directory skills:</strong> ready-made skills from Anthropic and partners (Customize, Skills, Browse).</li>
  <li><strong>Your own skills:</strong> written in plain language, no coding needed. The easiest way is to ask Claude: "Help me turn how I write my weekly update into a skill." Then upload it as a zip in Customize, Skills.</li>
</ul>
<p>Skills follow an open standard (Agent Skills), so a skill you write can work in other tools that adopt it. Skills need code execution switched on (Lesson 11).</p>

<h2>How the pieces differ</h2>
<ul>
  <li><strong>Instructions for Claude:</strong> general preferences, always on.</li>
  <li><strong>Project:</strong> background knowledge, always loaded in that Project.</li>
  <li><strong>Skill:</strong> a procedure that loads only when the task needs it, everywhere.</li>
  <li><strong>Connector:</strong> access to an app and its data.</li>
</ul>
<p>They combine: a connector lets Claude reach your sales spreadsheet; a skill teaches it how your company formats the monthly report.</p>

<div data-widget="sort" data-set="claude-extend"></div>

<h2>Plugins: the ready-made kit</h2>
<p>A <strong>plugin</strong> (paid plans) bundles skills, connectors, slash commands and helper agents into one package for a role, such as sales, finance, legal, marketing, HR, design or data analysis. Add it from Customize, Plugins, and you get a working setup from the first conversation instead of configuring each piece. Type "/" in the message box to see the commands your plugins add. Plugins follow your account into Cowork and Claude Code too. As with any software, install plugins only from sources you trust.</p>

<div class="callout"><b>Takeaway:</b> Connectors (built on the open MCP standard) let Claude use your apps with your permissions; skills are reusable instructions that load only when needed; plugins bundle both for a role. Find them all under Customize, connect only what you trust, and turn your best repeatable prompts into skills.</div>
`,
    terms: [
      ["Connector", "A link that lets Claude read from and act in another app, such as Gmail or Google Drive."],
      ["Model Context Protocol (MCP)", "An open standard for connecting AI assistants to apps and data; the basis of Claude's connectors."],
      ["MCP server", "A small service that offers an app's data and actions to AI assistants through MCP."],
      ["Skill", "A folder of instructions (and sometimes scripts) that teaches Claude to do one kind of task reliably."],
      ["SKILL.md", "The main file of a skill, with its name, a description of when to use it and its instructions."],
      ["Progressive disclosure", "Loading a skill's full instructions only when a task needs it, keeping the context window free."],
      ["Plugin", "A package of skills, connectors and commands set up for a particular role."],
      ["Desktop extension", "An add-on for Claude Desktop that connects Claude to programs or files on your computer."]
    ],
    quiz: [
      { q: "What does a connector give Claude?", options: ["A new personality", "Access to read from and act in one of your apps", "A faster model", "More memory"], answer: 1, explain: "Connectors link Claude to services like Gmail or Drive." },
      { q: "Can a connector let Claude open a file you don't have permission to see?", options: ["Yes", "No, Claude inherits your own permissions", "Only on Enterprise", "Only at night"], answer: 1, explain: "Claude can't reach more than you can." },
      { q: "What is MCP?", options: ["A Microsoft product", "An open standard for connecting AI to apps and data", "A Claude model", "A payment method"], answer: 1, explain: "The Model Context Protocol is a universal plug for AI." },
      { q: "Why can you install many skills without slowing Claude down?", options: ["Skills are tiny pictures", "Progressive disclosure: only descriptions load until a skill is needed", "Claude ignores them", "They run on your phone"], answer: 1, explain: "Full instructions load only when relevant." },
      { q: "You always format monthly reports the same way. What should you make?", options: ["A connector", "A skill", "An incognito chat", "A new account"], answer: 1, explain: "A repeatable procedure is exactly what a skill is for." },
      { q: "What does a plugin bundle together?", options: ["Only fonts", "Skills, connectors and commands for a role", "Your passwords", "Several Claude accounts"], answer: 1, explain: "A plugin is a ready-made kit for a type of work." }
    ],
    sources: [
      ["Use connectors to extend Claude's capabilities", "https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities", "Adding and using connectors."],
      ["What are skills?", "https://support.claude.com/en/articles/12512176-what-are-skills", "How skills work and how they differ from Projects and MCP."],
      ["How to create custom skills", "https://support.claude.com/en/articles/12512198-how-to-create-custom-skills", "Writing your own SKILL.md."],
      ["Use plugins in Claude", "https://support.claude.com/en/articles/13837440-use-plugins-in-claude", "What plugins include and how to add them."],
      ["Model Context Protocol", "https://modelcontextprotocol.io/", "The open standard behind connectors."],
      ["Agent Skills open standard", "https://agentskills.io/", "The open format for skills."]
    ]
  },
  {
    id: "c-cowork",
    unit: "lcu4",
    title: "Cowork: Handing Claude Whole Tasks",
    summary: "Describe an outcome and come back to finished work: how Claude's agent mode works, scheduled tasks, computer use, and staying safe.",
    minutes: 13,
    body: `
<p>Everything so far has been a conversation: you ask, Claude answers, you ask again. <strong>Cowork</strong> (paid plans) is different, Abbas. You describe an <em>outcome</em>, and Claude plans the steps, uses its tools, checks its work and comes back with the finished result. It's the same "agent" technology that powers Claude Code (Lesson 15), made for everyday knowledge work, with no programming needed.</p>

<h2>What a task looks like</h2>
<ul>
  <li>"Go through the PDFs in my Receipts folder, build a spreadsheet of every expense by category, and flag anything over £100."</li>
  <li>"Research the five best-reviewed primary schools near me and make a one-page comparison doc."</li>
  <li>"Read my last month of emails from the landlord and draft a polite summary of the outstanding repairs."</li>
  <li>"Turn these meeting notes into a deck for Monday, using our template."</li>
</ul>
<p>Claude shows its plan and progress as it works. You can steer it mid-task, answer its questions, or leave and come back.</p>

<h2>How it works</h2>
<ul>
  <li><strong>In the cloud:</strong> tasks run on Anthropic's computers, so they keep going when you close your laptop, and you can start a task on your computer and check it on your phone.</li>
  <li><strong>Your files:</strong> on Claude Desktop, Claude can read and write files in folders you choose, without uploading.</li>
  <li><strong>Your tools:</strong> connectors, skills, plugins, web search, code execution and the browser all work inside tasks.</li>
  <li><strong>Teamwork inside Claude:</strong> for big jobs, Claude splits the work and runs <strong>sub-agents</strong> in parallel, then pulls the results together.</li>
  <li><strong>Shared memory:</strong> tasks use and add to the same memory as your chats.</li>
  <li><strong>Computer use</strong> (research preview): Claude can operate apps on your computer by looking at the screen and using the mouse and keyboard, for programs that have no connector.</li>
</ul>
<p>In the newest Claude app, chat and Cowork are merged: there's one message box, and Claude decides whether your request needs a quick answer or a longer task.</p>

<h2>Scheduled tasks</h2>
<p>Describe a job once and Claude runs it on a schedule, or whenever you click run, even when your computer is asleep:</p>
<ul>
  <li>"Every weekday at 8am, summarise my unread emails and today's calendar."</li>
  <li>"Every Friday, collect this week's news about electric cars into a one-page brief."</li>
  <li>"On the 1st of each month, tidy my Downloads folder into dated subfolders."</li>
</ul>
<p>Say what you want and how often in any conversation, check the name, schedule and instructions Claude proposes, then click Schedule. See past and upcoming runs under "Scheduled" in the sidebar.</p>

<div data-widget="sort" data-set="claude-chat-or-task"></div>

<h2>Staying safe with an agent</h2>
<p>An agent that can read your files and act in your apps is genuinely useful and carries real risk. Anthropic's safety guide boils it down to two questions: <strong>what can Claude read</strong>, and <strong>what can Claude do</strong>?</p>
<ul>
  <li><strong>Read tools</strong> (reading email, viewing files) are lower risk. <strong>Write tools</strong> (sending, deleting, buying, running commands) are higher risk. Keep a human check on write actions when the stakes are high.</li>
  <li><strong>Prompt injection</strong> (Lesson 12) is most dangerous when Claude both reads untrusted content, such as emails from strangers or random websites, and can take actions. Avoid giving one task both.</li>
  <li>Don't give access to folders with sensitive documents, such as financial records, unless the task truly needs them.</li>
  <li>Be deliberate about which websites it works on, especially sites where you're signed in or that handle money.</li>
  <li>Review the result before you rely on it. You can delete any task from your history.</li>
</ul>

<div class="callout"><b>Takeaway:</b> Cowork turns Claude from a chat partner into a colleague you delegate to: describe the outcome, let it plan and work (in the cloud, with your files, tools and memory), and schedule jobs that repeat. Think about what it can read and what it can do, keep a human check on risky actions, and review the results.</div>
`,
    terms: [
      ["Cowork", "Claude's mode for taking on multi-step tasks on its own and returning finished work."],
      ["Agent", "An AI that plans and carries out steps using tools to reach a goal, checking its progress as it goes."],
      ["Sub-agent", "A helper agent that a main agent starts to handle part of a big job in parallel."],
      ["Scheduled task", "A Cowork task that runs automatically on a regular schedule."],
      ["Computer use", "Claude operating apps by looking at the screen and using the mouse and keyboard."],
      ["Read tool", "A tool that lets Claude look at information, such as reading files or email."],
      ["Write tool", "A tool that lets Claude take actions, such as sending, deleting or running commands."]
    ],
    quiz: [
      { q: "What's the main difference between chat and a Cowork task?", options: ["Tasks are written in capitals", "You describe an outcome and Claude plans and does the steps itself", "Tasks are free", "Chat can't use files"], answer: 1, explain: "Cowork is delegation, not back-and-forth." },
      { q: "Can a cloud task keep running after you close your laptop?", options: ["No", "Yes, it runs on Anthropic's computers", "Only if you leave the lid open", "Only on Fridays"], answer: 1, explain: "Cloud sessions keep working without you." },
      { q: "You want a summary of your inbox every weekday morning. What do you use?", options: ["Incognito chat", "A scheduled task", "Voice mode", "A Project"], answer: 1, explain: "Scheduled tasks repeat on your chosen cadence." },
      { q: "Which kind of tool carries more risk?", options: ["Read tools", "Write tools, such as sending, deleting or buying", "Both are the same", "Neither"], answer: 1, explain: "Actions can't always be undone, so keep a human check." },
      { q: "When is prompt injection most dangerous?", options: ["When Claude reads untrusted content AND can take actions", "When Claude is offline", "When you use British spelling", "When the task is short"], answer: 0, explain: "Remove either condition and attacks become much harder." },
      { q: "What are sub-agents?", options: ["Spare Claude accounts", "Helper agents that handle parts of a big job in parallel", "Human assistants", "A type of plan"], answer: 1, explain: "Claude splits big work and coordinates the pieces." }
    ],
    sources: [
      ["Get started with Claude Cowork", "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork", "What Cowork does and where it runs."],
      ["Schedule recurring tasks in Claude Cowork", "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork", "Setting up scheduled tasks."],
      ["Use Claude Cowork safely", "https://support.claude.com/en/articles/13364135-use-claude-cowork-safely", "Read and write tools, prompt injection and safe habits."],
      ["Anthropic: Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic's explanation of how agents work."]
    ]
  },
  {
    id: "c-code",
    unit: "lcu4",
    title: "Claude Code: Building Software by Describing It",
    summary: "The agent that built this academy: where it runs, how its loop works, CLAUDE.md, permission modes, checkpoints, and how to work with it well.",
    minutes: 13,
    body: `
<p><a data-tool="claude-code">Claude Code</a> is Anthropic's agent for building software, Abbas, and the tool that built and maintains this academy. Each time you asked for a change and then said "approve", Claude Code read the site's files, made a plan, edited the code, tested it, and opened a pull request for you. This lesson explains how it works, so you can use it yourself.</p>

<h2>Where it runs</h2>
<p>Claude Code is included in Pro and higher plans and shares your usage allowance. You can use it in several places:</p>
<ul>
  <li><strong>The Code tab in Claude Desktop:</strong> the easiest start. Choose a folder and describe what you want.</li>
  <li><strong>On the web and phone</strong> (claude.ai/code): connect a GitHub repository and Claude works in a cloud copy, even while you're away.</li>
  <li><strong>The terminal:</strong> the full-featured command-line version, started by typing <code>claude</code> in a project folder.</li>
  <li><strong>Code editors:</strong> extensions for VS Code and JetBrains.</li>
  <li><strong>Automations:</strong> in GitHub, in Slack via Claude Tag, or on a schedule.</li>
</ul>

<h2>The agentic loop</h2>
<p>Claude Code works in a loop: <strong>gather context</strong> (read the relevant files), <strong>take action</strong> (edit files, run commands), <strong>verify</strong> (run the tests, check the result), and repeat until the job is done. It reads your files as it needs them, so there's nothing to upload. You can interrupt at any time: press <strong>Esc</strong> to stop it, then give new directions.</p>

<h2>CLAUDE.md: the project's briefing</h2>
<p>Every session starts fresh, without memory of past sessions. To give Claude lasting knowledge about a project, you keep a file called <strong>CLAUDE.md</strong> in it: how to build and test, the project's rules and conventions, things to avoid. Type <code>/init</code> and Claude writes a starter one. Anthropic's advice is to keep it short and only include what Claude can't work out by reading the code. Claude also keeps its own auto memory of things it learns.</p>

<h2>Staying in control</h2>
<ul>
  <li><strong>Permission modes</strong> (cycle with Shift+Tab): <em>Manual</em> asks before edits and commands; <em>Accept edits</em> lets it edit files without asking; <em>Plan</em> explores and proposes a plan without changing anything; <em>Auto</em> lets a safety classifier approve routine actions and block risky ones.</li>
  <li><strong>Checkpoints:</strong> before each edit, Claude saves a snapshot. Press Esc twice, or ask it to undo, to rewind. (Checkpoints cover file edits, not things done outside your computer, like a sent message.)</li>
  <li><strong>Git and pull requests:</strong> for real projects, changes go on a branch and into a pull request you review before anything goes live, exactly how your academy works.</li>
</ul>

<h2>Extending it</h2>
<p>Everything from Lesson 13 works here too: <strong>skills</strong> for team procedures, <strong>MCP connectors</strong> to tools like GitHub or a database, and <strong>plugins</strong>. Two more: <strong>sub-agents</strong> handle side jobs in their own fresh context, and <strong>hooks</strong> are rules that run automatically at set moments, such as "run the tests every time Claude finishes".</p>

<div data-widget="sort" data-set="claude-code-mode"></div>

<h2>Working with it well</h2>
<ol>
  <li><strong>Describe the outcome and the why,</strong> like briefing a skilled colleague: "Add a dark mode, because Abbas reads at night. Keep the gold accent colour."</li>
  <li><strong>Plan first for big changes:</strong> use Plan mode or ask "Make a plan and wait for my OK."</li>
  <li><strong>Give it a check it can run:</strong> tests, a screenshot to compare, or a list of requirements. Claude does its best work when it can verify its own results.</li>
  <li><strong>Brainstorm before building:</strong> "What are three ways to do this, and which would you pick?"</li>
  <li><strong>One job per session;</strong> start a new session (or /clear) when you switch tasks.</li>
  <li><strong>Review before you approve.</strong> You're still the decision-maker.</li>
</ol>

<div class="callout"><b>Takeaway:</b> Claude Code is an agent that reads, edits, runs and checks code, in the desktop app, the web, the terminal or an editor. Brief it with CLAUDE.md, control it with permission modes, Plan mode and checkpoints, extend it with skills, connectors and hooks, and give it a way to check its own work.</div>
`,
    terms: [
      ["Claude Code", "Anthropic's agent for building software, which reads, edits, runs and tests code."],
      ["Agentic loop", "Gather context, take action, verify, repeat: how an agent works towards a goal."],
      ["CLAUDE.md", "A file in a project that tells Claude Code its rules, commands and conventions every session."],
      ["Permission mode", "The setting that decides what Claude Code may do without asking you."],
      ["Plan mode", "A mode where Claude Code explores and proposes a plan without changing any files."],
      ["Checkpoint", "A snapshot taken before Claude Code edits a file, so you can rewind."],
      ["Hook", "A rule that runs automatically at a set moment, such as running tests after each change."],
      ["Terminal", "A text window for typing commands to a computer, where Claude Code's command-line version runs."]
    ],
    quiz: [
      { q: "What is the easiest way for a beginner to start using Claude Code?", options: ["Write a compiler", "The Code tab in Claude Desktop", "Phone Anthropic", "Buy a new computer"], answer: 1, explain: "Desktop includes Claude Code with nothing else to install." },
      { q: "What does CLAUDE.md do?", options: ["Stores your password", "Briefs Claude Code on a project's rules and commands every session", "Lists your chats", "Changes the model"], answer: 1, explain: "Sessions start fresh, so CLAUDE.md carries lasting project knowledge." },
      { q: "Which mode explores and proposes a plan without changing files?", options: ["Accept edits", "Plan", "Auto", "Max"], answer: 1, explain: "Plan mode is ideal before big changes." },
      { q: "Claude Code just made an edit you don't like. What's the quickest undo?", options: ["Reinstall it", "Press Esc twice to rewind to a checkpoint, or ask it to undo", "Delete the project", "Wait for it to fix itself"], answer: 1, explain: "Checkpoints snapshot files before each edit." },
      { q: "According to Anthropic, what helps Claude Code most to produce good work?", options: ["Typing faster", "Giving it a check it can run, like tests or requirements", "Using capital letters", "Never reviewing its work"], answer: 1, explain: "When Claude can verify results, it can fix its own mistakes." },
      { q: "How did Claude Code change your academy safely?", options: ["Straight onto the live site", "On a branch and pull request, merged only after you approved", "By email", "It didn't"], answer: 1, explain: "Pull requests keep a human review before changes go live." }
    ],
    sources: [
      ["Claude Code Docs: Overview", "https://code.claude.com/docs/en/overview", "Where Claude Code runs and how to install it."],
      ["Claude Code Docs: How Claude Code works", "https://code.claude.com/docs/en/how-claude-code-works", "The agentic loop, permissions and checkpoints."],
      ["Claude Code Docs: Best practices", "https://code.claude.com/docs/en/best-practices", "Anthropic's advice for working with Claude Code."],
      ["Your first day in Claude Code", "https://support.claude.com/en/articles/14552382-your-first-day-in-claude-code", "A 15-minute beginner's start."]
    ]
  },
  {
    id: "c-platform",
    unit: "lcu4",
    title: "Building on Claude, and Your Mastery Plan",
    summary: "The Claude Developer Platform in plain English (API, Console, pricing, tools, agents), then a checklist to get the most from Claude every day.",
    minutes: 13,
    body: `
<p>This last lesson has two halves, Abbas. First, how developers build Claude into their own apps, which you'll do yourself in Level 7. Then a checklist that brings the whole level together into a plan for using Claude to its full potential.</p>

<h2>The Claude Developer Platform</h2>
<p>The <a data-tool="claude-platform">Claude Developer Platform</a> is how programs, rather than people, use Claude. An app sends a request to Claude's <strong>API</strong> (a way for one program to talk to another) and gets a reply back. Every chatbot on a company website "powered by Claude" works like this.</p>
<ul>
  <li><strong>The Console</strong> (platform.claude.com): where developers create an account, get an <strong>API key</strong> (a secret password for their app), set spending limits, and test prompts in a playground.</li>
  <li><strong>The Messages API:</strong> the basic request. The developer sends a model name, a <strong>system prompt</strong> (standing instructions, like Project instructions) and the conversation; Claude sends back its reply.</li>
  <li><strong>Pay as you go:</strong> instead of a monthly plan, developers pay per million tokens. In November 2026: Haiku 5.5 from $0.10 in and $0.50 out, Sonnet 5.5 $2 and $10, Opus 5.5 $4 and $20, Fable 5.2 $8 and $40. Max, Ultra and Team plans include monthly API credits.</li>
</ul>

<h2>The developer's toolbox</h2>
<ul>
  <li><strong>Tool use:</strong> the developer describes tools (say, "check order status"); Claude decides when to call them, and the app runs them. This is how agents are built.</li>
  <li><strong>Built-in tools:</strong> web search, web fetch, code execution, and computer and browser use, run by Anthropic.</li>
  <li><strong>Structured outputs:</strong> force replies into an exact format (JSON) that a program can read.</li>
  <li><strong>Prompt caching:</strong> reuse a long, unchanging start of a prompt at a fraction of the price. <strong>Batch processing:</strong> send thousands of requests at once at half price, for jobs that can wait.</li>
  <li><strong>Files, PDFs, images and citations:</strong> answers about documents that point to the exact passages.</li>
  <li><strong>Skills and the MCP connector:</strong> the same skills and connectors you met in Lesson 13.</li>
  <li><strong>Claude Agent SDK:</strong> the engine behind Claude Code, packaged so developers can build their own agents.</li>
  <li><strong>Claude Managed Agents</strong> (beta): Anthropic runs the whole agent, with a cloud sandbox, tools, memory and schedules, so developers don't have to.</li>
</ul>
<p>Claude models are also offered through Amazon, Google Cloud and Microsoft, for organisations that already use those clouds. The golden rule: <strong>keep API keys secret</strong>, on a server, never in a web page, and set spending limits.</p>

<div data-widget="sort" data-set="claude-feature-pick"></div>

<h2>Your Claude mastery plan</h2>
<p>Here's the whole level as a set of habits. Tick each one off as you set it up; your progress is saved in this browser.</p>
<div data-widget="claude-checklist"></div>

<h2>Keep up to date</h2>
<p>Claude will keep changing. Three places keep you current: the <strong>release notes</strong> in the Claude Help Center (what's new each week), the Anthropic <strong>news</strong> page (new models), and Anthropic Academy's free courses. When a big feature arrives, ask Claude itself: "What's new in Claude this month, and how could I use it?" with web search on.</p>

<div class="callout"><b>Takeaway:</b> Developers reach Claude through the API, paying per token, with tools, structured outputs, caching, batches, skills, MCP and ready-made agents. For you, mastery is a set of habits: right model and effort, good prompts, Projects and instructions, memory under control, Artifacts, connectors and skills, delegated tasks, and always checking what matters.</div>
`,
    terms: [
      ["Claude Developer Platform", "Anthropic's service for building Claude into apps, with the API and the Console."],
      ["API key", "A secret code that identifies an app to the Claude API; it must be kept private."],
      ["System prompt", "Standing instructions sent with every API request, setting Claude's role and rules."],
      ["Tool use", "Claude asking an app to run a tool, such as a database lookup, and using the result."],
      ["Structured outputs", "Making Claude's reply follow an exact format, such as JSON, that a program can read."],
      ["Prompt caching", "Reusing an unchanged start of a prompt to cut cost and time."],
      ["Batch processing", "Sending many API requests together at half price, for work that can wait."],
      ["Claude Agent SDK", "The toolkit behind Claude Code that developers use to build their own agents."]
    ],
    quiz: [
      { q: "How does a company's website chatbot 'powered by Claude' usually work?", options: ["Someone types answers by hand", "The website sends requests to Claude's API and shows the replies", "It copies claude.ai", "It uses voice mode"], answer: 1, explain: "Apps reach Claude through the API." },
      { q: "Where must an API key never be put?", options: ["On a secure server", "In a web page's public code", "In a password manager", "In an environment variable"], answer: 1, explain: "Anyone could copy it and spend your money." },
      { q: "How do developers pay for the API?", options: ["A fixed £20 a month", "Per million tokens used", "Per website visitor", "It's free"], answer: 1, explain: "The API is pay as you go, priced per token." },
      { q: "Which feature halves the price for jobs that can wait?", options: ["Batch processing", "Voice mode", "Incognito", "Plan mode"], answer: 0, explain: "Batches run later at 50% off." },
      { q: "What is tool use?", options: ["Claude using a hammer", "Claude asking the app to run a described tool and using the result", "A plan type", "A memory setting"], answer: 1, explain: "It's the building block of agents." },
      { q: "What is the Claude Agent SDK?", options: ["A phone", "The engine behind Claude Code, for building your own agents", "A chat theme", "A Slack channel"], answer: 1, explain: "It packages Claude Code's agent loop for developers." }
    ],
    sources: [
      ["Claude Platform Docs: Intro to Claude", "https://platform.claude.com/docs/en/intro", "The Messages API and Managed Agents."],
      ["Claude Platform Docs: Features overview", "https://platform.claude.com/docs/en/build-with-claude/overview", "Every API feature in one list."],
      ["Claude Platform Docs: Pricing", "https://platform.claude.com/docs/en/about-claude/pricing", "Per-token prices, caching and batch discounts."],
      ["Claude Platform Docs: Tool use", "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview", "How Claude calls tools."],
      ["Claude Platform Docs: Agent SDK", "https://platform.claude.com/docs/en/agent-sdk/overview", "Building agents with the engine behind Claude Code."],
      ["Claude Help Center: Release notes", "https://support.claude.com/en/articles/12138966-release-notes", "What's new in Claude, week by week."]
    ]
  }
];

/* Sorting activities for this level (the reusable "sort" widget). */
window.SORT_SETS = window.SORT_SETS || {};
window.SORT_SETS["claude-door"] = {
  title: "Try it: which way into Claude?",
  choices: ["Phone app", "Claude in Chrome", "Office add-in", "Claude Code"],
  items: [
    ["Asking about a letter by snapping a photo of it on the bus", "Phone app", "The camera and voice make the phone app ideal on the move."],
    ["Comparing three hotel booking pages you have open in tabs", "Claude in Chrome", "The extension can read and compare your open tabs."],
    ["Fixing a formula inside the budget workbook you already have open", "Office add-in", "Claude for Excel works on the open workbook."],
    ["Adding a new page to your website's code", "Claude Code", "Building software is Claude Code's job."],
    ["Drafting replies to the emails in your Outlook inbox", "Office add-in", "Claude for Outlook drafts replies in your voice."]
  ]
};
window.SORT_SETS["claude-model"] = {
  title: "Try it: which model and effort?",
  choices: ["Haiku or Sonnet, low effort", "Sonnet, default effort", "Opus or Fable, high effort"],
  items: [
    ["Turn this list of groceries into aisles", "Haiku or Sonnet, low effort", "A quick, simple job: save your allowance."],
    ["Write a friendly email declining a party invitation", "Sonnet, default effort", "Everyday writing: Sonnet does it well."],
    ["Review a 90-page contract for risks before you sign", "Opus or Fable, high effort", "Long, high-stakes analysis deserves the strongest settings."],
    ["Plan a two-week trip across four countries on a fixed budget", "Opus or Fable, high effort", "Many constraints to juggle: let it think harder."],
    ["Explain what 'inflation' means in two sentences", "Haiku or Sonnet, low effort", "Simple explanation, no deep reasoning needed."]
  ]
};
window.SORT_SETS["claude-usage"] = {
  title: "Try it: saves allowance, or burns it?",
  choices: ["Saves allowance", "Burns allowance"],
  items: [
    ["Keeping one chat going for three months about everything", "Burns allowance", "Claude re-reads the whole long chat with every reply."],
    ["Putting the handbook you ask about every week into a Project", "Saves allowance", "Project content is cached when reused."],
    ["Using Max effort to choose a sandwich filling", "Burns allowance", "Match effort to the job."],
    ["Combining four related questions into one clear message", "Saves allowance", "One well-written message beats four small ones."],
    ["Editing your earlier message instead of adding corrections", "Saves allowance", "It replaces the off-track part rather than adding to it."]
  ]
};
window.SORT_SETS["claude-prompt-fix"] = {
  title: "Try it: which technique fixes this prompt?",
  choices: ["Add context and why", "Add examples", "Use tags", "Let Claude ask questions"],
  items: [
    ["\"Write a product description.\" (It comes back in the wrong style every time.)", "Add examples", "Two or three descriptions you like show the style instantly."],
    ["\"Never use long sentences.\" (Claude follows it too rigidly.)", "Add context and why", "Explain: \"My readers are learning English, so keep sentences short.\""],
    ["A prompt mixing your rules, a pasted report and your question, and Claude confuses them", "Use tags", "Wrap each part in <instructions>, <report> and <question>."],
    ["\"Plan my wedding speech.\" (You haven't said anything about the couple.)", "Let Claude ask questions", "Claude will ask what it needs to know."],
    ["\"Summarise this for my boss.\" (Claude doesn't know your boss wants decisions, not detail.)", "Add context and why", "Say who it's for and what they need from it."]
  ]
};
window.SORT_SETS["claude-file-ask"] = {
  title: "Try it: good question, or risky question?",
  choices: ["Good question", "Risky question"],
  items: [
    ["\"Quote the clauses about ending the lease early, with page numbers.\"", "Good question", "Quotes and page numbers make checking easy."],
    ["\"Is this contract fine? Yes or no.\"", "Risky question", "A one-word verdict hides the reasoning you need to check."],
    ["\"What would I expect in a contract like this that's missing here?\"", "Good question", "Asking about gaps finds what a summary skips."],
    ["Uploading your full bank statements with account numbers to ask about one coffee shop", "Risky question", "Remove details the question doesn't need."],
    ["\"Compare these two versions and list every change that affects me.\"", "Good question", "A focused comparison with your purpose."]
  ]
};
window.SORT_SETS["claude-where-info"] = {
  title: "Try it: where should this information live?",
  choices: ["Instructions for Claude", "A Project", "Just this chat"],
  items: [
    ["\"I prefer short answers in British English.\"", "Instructions for Claude", "A preference for every conversation."],
    ["Your thesis chapters and your supervisor's feedback", "A Project", "Background for one ongoing piece of work."],
    ["The photo of a parking sign you want explained right now", "Just this chat", "A one-off question."],
    ["\"In my Spanish practice, always correct my grammar gently.\"", "A Project", "A rule for one area: Project instructions."],
    ["\"I'm a beginner, so explain technical words.\"", "Instructions for Claude", "True in every conversation you have."]
  ]
};
window.SORT_SETS["claude-personal"] = {
  title: "Try it: which personal setting fits?",
  choices: ["Memory", "Incognito chat", "Memory off for one chat", "Chat search"],
  items: [
    ["You want Claude to know your daughter's name and your job from now on", "Memory", "Facts that help in future conversations."],
    ["A one-off private question you don't want saved anywhere", "Incognito chat", "Not kept in history or memory."],
    ["Planning a surprise party: keep the chat, but don't let it shape future answers", "Memory off for one chat", "The chat stays in history; memory isn't used or changed."],
    ["\"What did we decide about the boiler last month?\"", "Chat search", "Claude searches your earlier conversations."],
    ["Testing how Claude answers someone who knows nothing about you, without losing the chat", "Memory off for one chat", "No memory, but the chat is kept."]
  ]
};
window.SORT_SETS["claude-search-mode"] = {
  title: "Try it: search, Research or think?",
  choices: ["Web search", "Research", "Think harder"],
  items: [
    ["\"Is the Northern line running normally right now?\"", "Web search", "One quick, current fact."],
    ["\"Write me a cited report comparing heat pumps, solar panels and insulation for my house.\"", "Research", "Many linked searches and a long, cited report."],
    ["\"Find the flaw in my reasoning about this business plan.\"", "Think harder", "Reasoning, not new information."],
    ["\"What's the exchange rate from pounds to euros today?\"", "Web search", "Changes daily: search."],
    ["\"Map out who the main companies in vertical farming are, their funding and their prospects.\"", "Research", "A broad investigation across many sources."]
  ]
};
window.SORT_SETS["claude-artifact-or-not"] = {
  title: "Try it: artifact, or just a chat reply?",
  choices: ["Artifact", "Chat reply"],
  items: [
    ["A packing checklist you'll reuse for every holiday", "Artifact", "Reusable, self-contained and worth keeping."],
    ["\"Is it 'affect' or 'effect' here?\"", "Chat reply", "A quick answer you won't come back to."],
    ["A small quiz game to help your nephew learn times tables", "Artifact", "An interactive tool you'll use and share."],
    ["A two-line thank-you text", "Chat reply", "Too short to need its own panel."],
    ["A shared sign-up sheet for a charity bake sale", "Artifact", "Interactive, shared and stored: a perfect artifact."]
  ]
};
window.SORT_SETS["claude-template"] = {
  title: "Try it: which template?",
  choices: ["Docs", "Slides", "Design", "Data"],
  items: [
    ["A ten-minute talk for your local history society", "Slides", "A deck you can present and export."],
    ["A poster for a neighbourhood plant swap", "Design", "Visual layout on a canvas."],
    ["A project plan your family will keep editing together", "Docs", "A living document with comments and history."],
    ["Monthly sign-ups by region from your company's database", "Data", "Charts built from a connected data source."],
    ["A mock-up of a phone app's home screen", "Design", "Prototypes and screens are Design's job."]
  ]
};
window.SORT_SETS["claude-code-or-not"] = {
  title: "Try it: does Claude need to run code for this?",
  choices: ["Run code", "Just words"],
  items: [
    ["Calculate the total interest on a £180,000 mortgage over 25 years at 4.5%", "Run code", "Exact arithmetic: calculate, don't estimate."],
    ["Write a warm message to a friend who's moving abroad", "Just words", "Pure writing needs no code."],
    ["Turn a CSV of 2,000 sales into a chart by month", "Run code", "Data analysis and charts come from code."],
    ["Make a downloadable Word document of your CV", "Run code", "File creation uses the sandbox."],
    ["Explain the plot of a novel you uploaded", "Just words", "Reading and explaining, no calculation."]
  ]
};
window.SORT_SETS["claude-surface"] = {
  title: "Try it: where would you use Claude for this?",
  choices: ["Voice mode", "Google Docs sidebar", "Claude in Chrome", "Claude Tag"],
  items: [
    ["Practising French conversation while you walk", "Voice mode", "Spoken conversation, hands-free."],
    ["Tightening the report you're writing in Google Docs, in place", "Google Docs sidebar", "Claude edits the open document directly."],
    ["Filling in the same details on a long online form", "Claude in Chrome", "It can click and type on web pages (watch it on sensitive sites)."],
    ["Your team asking @Claude in Slack to summarise a long thread", "Claude Tag", "Claude working inside your team's channel."],
    ["Asking a question while your hands are covered in flour", "Voice mode", "Talk instead of typing."]
  ]
};
window.SORT_SETS["claude-extend"] = {
  title: "Try it: connector, skill or plugin?",
  choices: ["Connector", "Skill", "Plugin"],
  items: [
    ["Let Claude read the files in your Google Drive", "Connector", "Access to an app's data."],
    ["Teach Claude your exact format for meeting minutes", "Skill", "A repeatable procedure."],
    ["A ready-made sales kit with CRM access, call-prep and email commands", "Plugin", "Skills, connectors and commands bundled for a role."],
    ["Let Claude create tasks in your Asana", "Connector", "Acting in another app."],
    ["Teach Claude to check every invoice against your three company rules", "Skill", "Know-how that loads when the task needs it."]
  ]
};
window.SORT_SETS["claude-chat-or-task"] = {
  title: "Try it: quick chat, task, or scheduled task?",
  choices: ["Quick chat", "Task", "Scheduled task"],
  items: [
    ["\"What's a polite way to say no to extra work?\"", "Quick chat", "A single answer."],
    ["\"Sort the 200 photos in this folder into albums by place and date.\"", "Task", "Many steps with files: delegate it."],
    ["\"Every Monday at 9am, summarise last week's team emails.\"", "Scheduled task", "Repeats on a schedule."],
    ["\"Research ten suppliers, compare prices and build a spreadsheet.\"", "Task", "Multi-step work with a finished file at the end."],
    ["\"On the last day of each month, list my subscriptions that renewed.\"", "Scheduled task", "A regular, repeating job."]
  ]
};
window.SORT_SETS["claude-code-mode"] = {
  title: "Try it: which Claude Code control?",
  choices: ["Plan mode", "Checkpoint rewind", "CLAUDE.md", "Hook"],
  items: [
    ["Before a big redesign, you want to see Claude's approach without any files changing", "Plan mode", "Plan mode proposes without editing."],
    ["Claude's last edit broke the page and you want it back as it was", "Checkpoint rewind", "Press Esc twice or ask it to undo."],
    ["Every session should know 'run the site check before finishing'", "CLAUDE.md", "Lasting project rules live in CLAUDE.md."],
    ["The tests must run automatically every time Claude finishes, no exceptions", "Hook", "Hooks run at set moments, every time."],
    ["New sessions keep forgetting that the site uses British spelling", "CLAUDE.md", "Put it in the project briefing."]
  ]
};
window.SORT_SETS["claude-feature-pick"] = {
  title: "Try it: which Claude feature is the best fit?",
  choices: ["Project", "Artifact", "Research", "Cowork task"],
  items: [
    ["A study space with all your course notes and \"quiz me\" instructions", "Project", "Standing knowledge and instructions."],
    ["A shareable interactive budget calculator", "Artifact", "Something to use and share."],
    ["A cited report on the pros and cons of studying abroad", "Research", "Many searches, one cited report."],
    ["Go through your receipts folder and build an expenses spreadsheet", "Cowork task", "A multi-step job with files."],
    ["A reusable workspace for planning your small business", "Project", "Ongoing context for one area."]
  ]
};

/* "My Claude setup" checklist for the final lesson (claude-checklist widget). */
window.CLAUDE_CHECKLIST = [
  { id: "privacy", text: "Checked my privacy settings and know how to start an incognito chat", lesson: "c-plans" },
  { id: "instructions", text: "Wrote my Instructions for Claude (who I am, how I like answers)", lesson: "c-memory" },
  { id: "memory", text: "Looked at what Claude remembers about me and tidied it", lesson: "c-memory" },
  { id: "model", text: "Know when to switch model and effort, and have tried it", lesson: "c-models" },
  { id: "prompt", text: "Used examples, tags or \"ask me questions first\" in a real prompt", lesson: "c-prompting" },
  { id: "project", text: "Set up a Project for something I work on often", lesson: "c-projects" },
  { id: "research", text: "Ran a Research report and checked its key sources", lesson: "c-search" },
  { id: "artifact", text: "Made and shared an artifact (a doc, deck, design or small app)", lesson: "c-artifacts" },
  { id: "file", text: "Had Claude analyse a spreadsheet or make a file with code", lesson: "c-make" },
  { id: "connector", text: "Connected one app I trust (calendar, email or drive)", lesson: "c-connectors" },
  { id: "skill", text: "Turned a task I repeat into a skill", lesson: "c-connectors" },
  { id: "task", text: "Handed Claude a whole task, or scheduled one", lesson: "c-cowork" },
  { id: "code", text: "Tried Claude Code on a small project", lesson: "c-code" }
];
