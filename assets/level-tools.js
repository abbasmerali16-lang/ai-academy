/* Level 2 course content: AI tools in the real world.
   Same shape as the other levels. All lesson text is original writing; sources are credited for
   fact-checking and further reading. Links written as <a data-tool="id">Name</a> point to that tool's
   page in the AI tools directory (assets/tools.js); app.js fills in the address. */
window.LEVELT_UNITS = [
  { id: "ltu1", title: "Unit 1 · Your AI toolbox", blurb: "The map of AI tools, the big assistants compared, AI in your phone and home, and how to choose and use tools safely." },
  { id: "ltu2", title: "Unit 2 · Words, research and languages", blurb: "Writing and editing, researching with sources you can check, translation, and AI in meetings and office work." },
  { id: "ltu3", title: "Unit 3 · Images, sound and video", blurb: "Making and editing pictures, voices and audio, video and music, and design and presentations." },
  { id: "ltu4", title: "Unit 4 · Building, automating and industry", blurb: "Coding assistants and GitHub, building apps without code, automating work with agents, and AI across industries." }
];

window.LEVELT = [
  /* ============================ UNIT 1 ============================ */
  {
    id: "t-landscape",
    unit: "ltu1",
    title: "The AI Tool Landscape",
    summary: "Thousands of AI tools exist, but they fall into a handful of families, and most are built on a few big models.",
    minutes: 10,
    body: `
<p>Welcome to Level 2, Abbas. In Level 1 you learned what AI is and how it works. This level is about what it's <em>for</em>: the real tools people use every day to write, research, translate, make pictures and videos, write code and automate their work. By the end you'll know your way around the whole landscape and have your own personal toolkit.</p>
<p>Alongside the lessons there's a new <a href="tools.html">AI tools directory</a>: over 100 tools, A to Z and by category. Hover over any tool's name to see a quick summary, and click it to open a full page on what it does, its strengths and limits, and how to start. Tool names in these lessons work the same way: try hovering over <a data-tool="chatgpt">ChatGPT</a>.</p>

<h2>So many tools, so few families</h2>
<p>New AI tools launch every week, which can feel overwhelming. The good news is that almost all of them belong to a small number of families, grouped by the job they do:</p>
<ul>
  <li><strong>Chat assistants</strong> such as <a data-tool="chatgpt">ChatGPT</a>, <a data-tool="claude">Claude</a> and <a data-tool="gemini">Gemini</a>: general helpers for writing, explaining, planning and analysing.</li>
  <li><strong>Search and research</strong> tools such as <a data-tool="perplexity">Perplexity</a> and <a data-tool="notebooklm">NotebookLM</a>, which show where their information came from.</li>
  <li><strong>Language</strong> tools: writing help like <a data-tool="grammarly">Grammarly</a> and translators like <a data-tool="deepl">DeepL</a>.</li>
  <li><strong>Media</strong> tools for images, voice, video and music, such as <a data-tool="midjourney">Midjourney</a>, <a data-tool="elevenlabs">ElevenLabs</a> and <a data-tool="runway">Runway</a>.</li>
  <li><strong>Building</strong> tools for code and apps, such as <a data-tool="github-copilot">GitHub Copilot</a> and <a data-tool="replit">Replit</a>.</li>
  <li><strong>Automation</strong> tools that connect apps and carry out tasks, such as <a data-tool="zapier">Zapier</a>.</li>
</ul>
<p>Once you know the family, you know roughly what to expect, what to watch for, and which alternatives to compare.</p>

<h2>Models, apps and wrappers</h2>
<p>It helps to separate two things that often share a name. A <strong>model</strong> is the trained AI system itself, such as OpenAI's GPT models, Anthropic's Claude models or Google's Gemini models. An <strong>app</strong> is the product you actually use, with its buttons, settings and features. ChatGPT is an app; the GPT models are what power it.</p>
<p>Only a handful of companies train the largest models, because it costs enormous amounts of computing power (you'll see why in Level 6). Thousands of other tools are built <em>on top</em> of those models through an API, a way for one program to use another (Level 7). People sometimes call these <strong>wrappers</strong>. A wrapper isn't necessarily bad: a good one adds a design, workflow or specialist knowledge that saves you real time. But it does mean that:</p>
<ul>
  <li>Two different-looking tools may give similar results because they use the same model underneath.</li>
  <li>A wrapper may cost more than using the underlying assistant directly.</li>
  <li>Your data may pass through two companies: the tool maker and the model provider.</li>
</ul>

<h2>Generalists and specialists</h2>
<p>General assistants can now do a remarkable range of jobs, including making images, searching the web and analysing spreadsheets. So why use anything else? Specialist tools usually win when you need:</p>
<ul>
  <li><strong>Depth in one job:</strong> <a data-tool="descript">Descript</a> edits video by editing the transcript; a general assistant can't.</li>
  <li><strong>A place in your workflow:</strong> <a data-tool="grammarly">Grammarly</a> works wherever you type; <a data-tool="m365-copilot">Microsoft 365 Copilot</a> sits inside Word and Outlook.</li>
  <li><strong>Special data or guarantees:</strong> <a data-tool="elicit">Elicit</a> searches scientific papers; <a data-tool="firefly">Adobe Firefly</a> was trained on licensed images.</li>
</ul>
<p>A sensible approach, and the one this level follows: get really good with one general assistant, then add a few specialists for the jobs you do often. Level 3 does exactly that with Claude.</p>

<div data-widget="sort" data-set="tool-family"></div>

<h2>How AI tools are priced</h2>
<p>Most AI tools follow one of a few pricing patterns:</p>
<ul>
  <li><strong>Free</strong>, often paid for by data or adverts, or as a way to bring you into a wider product.</li>
  <li><strong>Freemium:</strong> a free plan with limits, and paid plans (very often around $20 or £20 a month for the main assistants) that unlock better models and higher limits.</li>
  <li><strong>Credits:</strong> image and video tools often give you a monthly allowance of credits, because each generation costs them real computing power.</li>
  <li><strong>Per seat for businesses</strong>, and <strong>pay as you go</strong> for developers, who pay per token through an API.</li>
</ul>
<p>Prices and features change constantly, so the directory describes plans in general terms. Always check the maker's own website before paying.</p>

<div class="callout"><b>Takeaway:</b> Thousands of AI tools fit into a few families. Many are built on the same handful of models, so look at what a tool adds on top. Master one general assistant, then add specialists for jobs you do often.</div>
`,
    terms: [
      ["AI tool", "A product that uses AI to help with a task, such as writing, translating or making images."],
      ["Model", "The trained AI system underneath a tool, such as a GPT, Claude or Gemini model."],
      ["App", "The product you use, with its own design and features, built on one or more models."],
      ["Wrapper", "A tool built on top of another company's model, adding its own design or workflow."],
      ["General assistant", "A chat-based AI tool that can help with a wide range of tasks."],
      ["Specialist tool", "An AI tool designed for one kind of job, such as video editing or translation."],
      ["Freemium", "A pricing model with a free plan and paid plans that unlock more."],
      ["Credits", "A monthly allowance used up by each generation, common in image and video tools."]
    ],
    quiz: [
      { q: "What's the difference between ChatGPT and a GPT model?", options: ["They're the same thing", "ChatGPT is the app; the GPT models are what power it", "ChatGPT is the model; GPT is the company", "GPT models are only for images"], answer: 1, explain: "Keep the product and the model separate in your mind." },
      { q: "Why might two different-looking AI tools give very similar results?", options: ["They copy each other's answers", "They may be built on the same underlying model", "All AI is identical", "It's a coincidence"], answer: 1, explain: "Many tools are wrappers around a few big models." },
      { q: "When is a specialist tool usually worth it?", options: ["Never; general assistants do everything", "When you need depth in one job, a place in your workflow, or special data or guarantees", "Only when it's free", "Only for businesses"], answer: 1, explain: "Specialists earn their place by doing one job better or more conveniently." },
      { q: "Why do image and video tools often use credits?", options: ["Each generation costs real computing power", "To make maths harder", "Credits are required by law", "To stop people using them"], answer: 0, explain: "Generating media is expensive, so allowances are metered." },
      { q: "Which is a reasonable first step for a beginner?", options: ["Sign up for twenty tools at once", "Get good with one general assistant, then add specialists", "Only use free specialist tools", "Wait until the tools stop changing"], answer: 1, explain: "Depth with one tool teaches you skills that transfer to the rest." },
      { q: "A wrapper tool sends your text to another company's model. What's one thing that means?", options: ["Your data may pass through two companies", "Your text is encrypted forever", "The tool must be free", "It can't make mistakes"], answer: 0, explain: "Check both the tool maker's and the model provider's privacy terms." }
    ],
    sources: [
      ["Stanford HAI: AI Index Report", "https://hai.stanford.edu/ai-index", "Yearly data on AI models, costs, investment and adoption."],
      ["OECD: AI Policy Observatory", "https://oecd.ai/en/", "Data and policy on how AI is used across countries and industries."],
      ["Elements of AI", "https://www.elementsofai.com/", "Free course used to check the basics of how AI systems are built."],
      ["Google AI Essentials", "https://grow.google/ai-essentials/", "Practical introduction to using AI tools at work."]
    ]
  },
  {
    id: "t-assistants",
    unit: "ltu1",
    title: "General AI Assistants Compared",
    summary: "ChatGPT, Claude, Gemini, Copilot and the rest: what they share, where they differ, and the features worth learning.",
    minutes: 12,
    body: `
<p>A general assistant is the Swiss Army knife of AI, Abbas. Learn one well and you'll use it for a hundred small jobs a week. This lesson compares the main ones and shows you the features that make the biggest difference.</p>

<h2>The main assistants</h2>
<ul>
  <li><a data-tool="chatgpt">ChatGPT</a> (OpenAI): the best known, with the widest set of features: images, voice, research, agents, and custom GPTs.</li>
  <li><a data-tool="claude">Claude</a> (Anthropic): strong at long documents, natural writing and coding; Artifacts turn answers into small apps and documents.</li>
  <li><a data-tool="gemini">Gemini</a> (Google): tied into Google Search, Gmail, Drive and Android phones, with excellent image editing.</li>
  <li><a data-tool="copilot">Microsoft Copilot</a>: free and built into Windows and Edge; a separate work version lives inside Office.</li>
  <li><a data-tool="meta-ai">Meta AI</a>: inside WhatsApp, Instagram and Facebook. Convenient, but think about privacy.</li>
  <li>Others worth knowing: <a data-tool="grok">Grok</a> (xAI, built into X), <a data-tool="lechat">Le Chat</a> (Mistral, from France) and <a data-tool="deepseek">DeepSeek</a> (from China, with open models but data stored in China).</li>
</ul>
<p>Which is "best" changes month to month as new models are released; independent leaderboards swap places regularly. For everyday tasks, the top three or four are all very capable. So choose on the things that last: which apps you already use, which features you need, how the company treats your data, and which one you simply enjoy using.</p>

<h2>What they all share</h2>
<p>Underneath, they all work as you learned in Level 1: a large language model predicts text, one token at a time, guided by your prompt and the conversation so far. That's why they share the same strengths (language, summarising, explaining, brainstorming) and the same weaknesses:</p>
<ul>
  <li><strong>Hallucinations:</strong> confident statements that are false, including invented quotes, figures and references.</li>
  <li><strong>A knowledge cut-off:</strong> the model only learned from data up to a certain date, unless it searches the web.</li>
  <li><strong>Sensitivity to the prompt:</strong> small changes in wording or context can change the answer.</li>
</ul>

<h2>Features worth learning</h2>
<p>Most of the big assistants now offer versions of these. They're where the real time savings are:</p>
<ul>
  <li><strong>File uploads:</strong> give it a PDF, spreadsheet or photo and ask questions about it.</li>
  <li><strong>Web search:</strong> for anything recent, turn on search and check the links it shows.</li>
  <li><strong>Deep research:</strong> the assistant runs dozens of searches over several minutes and writes a long report with sources. Excellent for a first overview; still check the key claims.</li>
  <li><strong>Projects and custom assistants:</strong> a space with your own documents and standing instructions, such as ChatGPT's Projects and custom GPTs, Claude's Projects or Gemini's Gems. Set it up once and stop repeating yourself.</li>
  <li><strong>Memory and personalisation:</strong> it remembers facts about you across chats. Handy, but review what it has stored from time to time.</li>
  <li><strong>Voice mode:</strong> a natural spoken conversation, good for practising a language or thinking out loud on a walk.</li>
  <li><strong>Reasoning or "thinking" modes:</strong> the model works through a hard problem step by step before answering. Slower, but better for maths, logic and planning.</li>
</ul>

<h2>Three kinds of question, three kinds of tool</h2>
<p>A simple habit that will save you from many mistakes: before you ask, decide which kind of question it is.</p>
<ol>
  <li><strong>"Help me think, write or create":</strong> a general assistant is ideal.</li>
  <li><strong>"What's true out there right now?":</strong> use an answer engine like <a data-tool="perplexity">Perplexity</a>, or an assistant with web search on, and click the sources.</li>
  <li><strong>"What do <em>these documents</em> say?":</strong> use a tool that answers only from your sources, like <a data-tool="notebooklm">NotebookLM</a>, or upload the files to a project.</li>
</ol>

<div data-widget="sort" data-set="question-kind"></div>

<h2>Getting better answers</h2>
<p>Everything you learned about prompting in Level 1 applies to every assistant. The short version:</p>
<ul>
  <li>Give context: who you are, who it's for, why you need it.</li>
  <li>Be specific about the format and length you want.</li>
  <li>Show an example if you have one.</li>
  <li>Treat the first answer as a draft. Ask follow-ups: "shorter", "more formal", "what would a critic say?"</li>
  <li>For anything that matters, check it, or ask a second assistant and compare.</li>
</ul>

<div class="callout"><b>Takeaway:</b> The leading assistants share the same core skills and weaknesses. Pick one on lasting reasons (your apps, features, privacy), learn its features well (files, search, projects, research, voice), and match the tool to the kind of question.</div>
`,
    terms: [
      ["Hallucination", "A confident but false statement made by an AI model."],
      ["Knowledge cut-off", "The date up to which a model's training data runs."],
      ["Web search (in an assistant)", "A feature that lets an assistant look up current information and show links."],
      ["Deep research", "An assistant mode that runs many searches and writes a long, sourced report."],
      ["Project (in an assistant)", "A workspace holding your own documents and standing instructions for a topic."],
      ["Custom GPT / Gem", "A custom helper you set up once with instructions and files, in ChatGPT or Gemini."],
      ["Memory", "An assistant feature that remembers facts about you across conversations."],
      ["Reasoning mode", "A setting where the model works through a problem step by step before answering."],
      ["Answer engine", "A search tool that writes an answer and cites the web pages it used."]
    ],
    quiz: [
      { q: "You want to know which phones were released this month. What should you use?", options: ["Any assistant without web search", "An answer engine or an assistant with web search, then check the links", "A grammar checker", "An image generator"], answer: 1, explain: "Current facts need search, plus a quick check of sources." },
      { q: "Which is a lasting reason to choose one assistant over another?", options: ["Whichever topped a leaderboard this week", "Which apps you already use and how the company treats your data", "The colour of its logo", "Which one says it never makes mistakes"], answer: 1, explain: "Leaderboards shift; your apps and privacy needs don't." },
      { q: "What is a hallucination?", options: ["A picture the AI makes", "A confident but false statement", "A slow answer", "A voice feature"], answer: 1, explain: "All assistants can do this, so check facts that matter." },
      { q: "You keep pasting the same style guide into every chat. What feature would help?", options: ["Voice mode", "A project or custom assistant with standing instructions", "Deep research", "Turning off memory"], answer: 1, explain: "Set it up once and every chat in the project follows it." },
      { q: "When is a reasoning (thinking) mode most useful?", options: ["For a quick greeting", "For maths, logic and planning problems", "For making images", "For translating one word"], answer: 1, explain: "Thinking first helps with multi-step problems." },
      { q: "Why might DeepSeek's app be a poor choice for work documents?", options: ["It can't read English", "Its data is stored on servers in China and some governments have banned it on official devices", "It only does images", "It's too expensive"], answer: 1, explain: "Where your data goes matters, especially for work." }
    ],
    sources: [
      ["OpenAI Help Center", "https://help.openai.com/", "How ChatGPT features such as projects, memory and deep research work."],
      ["Anthropic: Claude help centre", "https://support.anthropic.com/", "Claude features including Projects and Artifacts."],
      ["Google: Gemini Apps Help", "https://support.google.com/gemini/", "Gemini features, Gems and privacy settings."],
      ["LMArena leaderboard", "https://lmarena.ai/leaderboard", "A public leaderboard where people compare model answers blind, showing how rankings change."],
      ["Reuters Institute: Digital News Report", "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025", "Survey data on how people use AI assistants for information."]
    ]
  },
  {
    id: "t-everyday",
    unit: "ltu1",
    title: "AI in Your Pocket and Your Home",
    summary: "The AI already in your phone, camera and speaker, the tools that open up the world for disabled people, and AI tutors.",
    minutes: 10,
    body: `
<p>You may already use more AI than you think, Abbas. Every time your phone sorts photos by face, suggests the next word, or reads out a message, that's AI. This lesson looks at the everyday tools that are worth knowing, and some that change lives.</p>

<h2>The assistant in your phone</h2>
<p>Phone assistants have been rebuilt around large language models:</p>
<ul>
  <li><a data-tool="apple-intelligence">Apple Intelligence</a> on newer iPhones and Macs: writing tools in every app, summaries, photo clean-up and live translation, with much of the work done on the device itself for privacy.</li>
  <li><a data-tool="gemini">Gemini</a> has replaced Google Assistant on many Android phones and can use your camera and screen to answer questions about what you're looking at.</li>
  <li><a data-tool="alexa">Alexa+</a> is Amazon's rebuilt home assistant, for more natural conversations and smart home control.</li>
</ul>
<p>The big shift is that these assistants can now understand context: "remind me to call the person who just texted me" or "what's this plant?" while pointing the camera.</p>

<h2>Your camera as a search box</h2>
<p><a data-tool="google-lens">Google Lens</a> and similar features let you search with your camera: identify plants, animals and landmarks, copy printed text into your phone, translate a menu in place, or find where to buy a lamp you've seen. <a data-tool="merlin">Merlin Bird ID</a> does the same for birdsong. These are computer vision and audio classification, the same ideas you met in Level 1, in your pocket.</p>
<p>One firm rule: identification apps make mistakes. Never eat a wild plant or mushroom, or take a medicine, based on what an app tells you.</p>

<h2>AI for accessibility</h2>
<p>Some of the most meaningful AI tools help disabled people do things independently:</p>
<ul>
  <li><a data-tool="be-my-eyes">Be My Eyes</a> and <a data-tool="seeing-ai">Seeing AI</a> describe photos and surroundings, read post and labels, and identify banknotes for blind and low-vision people.</li>
  <li>Live captions on phones and video calls help deaf and hard-of-hearing people follow conversations.</li>
  <li>Text-to-speech readers such as <a data-tool="speechify">Speechify</a> help people with dyslexia, and dictation helps people who find typing hard.</li>
</ul>
<p>These tools show AI at its best: giving people more independence, not replacing them.</p>

<h2>AI tutors and study helpers</h2>
<p>AI is also changing how people learn:</p>
<ul>
  <li><a data-tool="khanmigo">Khanmigo</a> from the non-profit Khan Academy acts like a patient tutor: it guides you with questions rather than giving answers away.</li>
  <li><a data-tool="photomath">Photomath</a> explains maths problems step by step from a photo, and <a data-tool="wolfram-alpha">Wolfram|Alpha</a> calculates exact answers, a useful check on chatbots, which can slip with numbers.</li>
  <li><a data-tool="duolingo">Duolingo</a> and <a data-tool="quizlet">Quizlet</a> use AI to adapt practice to what you find hard. ChatGPT, Claude and Gemini all offer study or learning modes too.</li>
</ul>
<p>Research on learning gives a clear lesson: AI helps you learn when it makes <em>you</em> think, and harms learning when it does the thinking for you. Use tutors that ask questions, try a problem before checking the answer, and ask an assistant to quiz you rather than summarise for you.</p>

<div data-widget="sort" data-set="rely-or-check"></div>

<h2>Privacy at home</h2>
<p>Everyday AI is close to your personal life, so a few habits are worth building:</p>
<ul>
  <li>Check which apps can use your microphone, camera and location, and remove what they don't need.</li>
  <li>Review voice recording settings on smart speakers, and delete old recordings.</li>
  <li>Be careful with AI features inside messaging apps: in group chats, other people's messages are involved too.</li>
</ul>

<div class="callout"><b>Takeaway:</b> AI is already in your phone, camera and home. Use camera search and assistants for convenience, value accessibility tools for the independence they give, use tutors that make you think, and double-check anything where a mistake could hurt you.</div>
`,
    terms: [
      ["On-device AI", "AI that runs on your phone or computer itself rather than on a company's servers."],
      ["Visual search", "Searching by pointing your camera at something instead of typing."],
      ["Accessibility", "Designing products so that disabled people can use them fully and independently."],
      ["Live captions", "Speech turned into on-screen text in real time."],
      ["Text to speech", "Turning written text into spoken audio."],
      ["AI tutor", "An AI tool designed to teach by guiding and questioning, not just giving answers."],
      ["Computational engine", "A tool that calculates exact answers from data and rules, like Wolfram|Alpha."]
    ],
    quiz: [
      { q: "An app says the mushroom you photographed is edible. What should you do?", options: ["Eat it; the app was confident", "Not eat it based on the app; ask an expert", "Ask a second app and eat it if both agree", "Cook it first to be safe"], answer: 1, explain: "Identification apps make mistakes, and some mistakes are deadly." },
      { q: "What does Be My Eyes do?", options: ["Edits videos", "Helps blind and low-vision people with AI descriptions and volunteer video calls", "Translates websites", "Writes code"], answer: 1, explain: "It's one of AI's most meaningful uses." },
      { q: "Which use of AI is most likely to help you learn maths?", options: ["Copying the final answer from a photo", "Trying the problem first, then using a step-by-step explanation to check", "Asking a chatbot to do all your homework", "Avoiding practice entirely"], answer: 1, explain: "Learning happens when you do the thinking." },
      { q: "Why is on-device AI good for privacy?", options: ["It's always more accurate", "Your data doesn't need to leave your phone", "It's free", "It can't be turned off"], answer: 1, explain: "Processing locally keeps data with you." },
      { q: "A chatbot gives you a calculation. What's a good way to check it?", options: ["Ask it if it's sure", "Use a calculator or a computational engine like Wolfram|Alpha", "Trust it if the explanation is long", "Ask it to repeat the answer"], answer: 1, explain: "Language models can slip with numbers; calculators don't." },
      { q: "Which is a sensible privacy habit for smart speakers?", options: ["Never update them", "Review and delete stored voice recordings", "Share your account with neighbours", "Leave every permission on"], answer: 1, explain: "Know what's stored and clear what you don't need." }
    ],
    sources: [
      ["Apple: Apple Intelligence", "https://www.apple.com/apple-intelligence/", "Apple's description of its on-device AI features and privacy approach."],
      ["Be My Eyes", "https://www.bemyeyes.com/", "How AI and volunteers support blind and low-vision people."],
      ["Khan Academy: Khanmigo", "https://www.khanmigo.ai/", "An AI tutor designed to guide rather than give answers."],
      ["UNESCO: Guidance for generative AI in education and research", "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research", "International guidance on using AI to support learning."],
      ["W3C: Introduction to web accessibility", "https://www.w3.org/WAI/fundamentals/accessibility-intro/", "What accessibility means and why it matters."]
    ]
  },
  {
    id: "t-choosing",
    unit: "ltu1",
    title: "Choosing and Using AI Tools Safely",
    summary: "A simple checklist for picking a tool, what never to paste into one, and how to stay in control of your data and your money.",
    minutes: 12,
    body: `
<p>Choosing an AI tool is a bit like choosing any service you'll trust with your information, Abbas. A few minutes of checking up front saves a lot of trouble later. This lesson gives you a checklist you can use for any tool in the directory.</p>

<h2>A five-question checklist</h2>
<ol>
  <li><strong>What job do I need done?</strong> Start from the task, not the tool. "I need to turn meeting recordings into notes" points you to a family of tools straight away.</li>
  <li><strong>Who makes it, and where does my data go?</strong> Look for a clear privacy policy, where data is stored, and whether your inputs are used to train models.</li>
  <li><strong>What does it really cost?</strong> Free plan limits, the monthly price, credits that run out, and whether it renews automatically.</li>
  <li><strong>How good is it at <em>my</em> task?</strong> Try it on three real examples, including a tricky one, and compare with one alternative.</li>
  <li><strong>What happens if it's wrong?</strong> The higher the stakes, the more human checking you need.</li>
</ol>

<div data-widget="tool-finder"></div>

<h2>What not to paste into an AI tool</h2>
<p>Most consumer AI tools send what you type to the company's servers. Some keep it for a while and, unless you switch it off, may use it to improve their models; staff may review some conversations for safety. So treat a public chatbot like a conversation in a public place. Don't paste in:</p>
<ul>
  <li><strong>Passwords, PINs, bank details or API keys</strong>, ever.</li>
  <li><strong>Other people's personal information</strong>, such as a friend's medical details or customers' contact details, without a clear right to share it.</li>
  <li><strong>Confidential work material</strong>, unless your organisation has approved the tool. Workplace versions (such as ChatGPT Enterprise, Claude Team and Enterprise, or Microsoft 365 Copilot) come with contracts that keep company data out of training.</li>
  <li><strong>Anything you'd be upset to see leaked.</strong></li>
</ul>
<p>In 2023 engineers at a large electronics company pasted confidential source code into a public chatbot, and the company banned such tools for a while. Mistakes like that are easy to make and hard to undo.</p>

<div data-widget="sort" data-set="share-or-not"></div>

<h2>Settings worth checking on day one</h2>
<ul>
  <li><strong>Training on your data:</strong> most big assistants let you opt out. In ChatGPT it's under Settings, Data controls; Claude and Gemini have similar settings.</li>
  <li><strong>Temporary or incognito chats</strong> that aren't saved to your history.</li>
  <li><strong>Memory:</strong> see what the assistant remembers about you and delete anything you don't want kept.</li>
  <li><strong>Connected apps:</strong> if you link your email or files, choose exactly which ones.</li>
  <li><strong>Two-factor authentication</strong> on your account, as you would for email.</li>
</ul>
<p>For really private material there's another route: run an open model on your own computer with <a data-tool="ollama">Ollama</a> or <a data-tool="lm-studio">LM Studio</a>. Nothing leaves your machine, though local models are smaller and less capable.</p>

<h2>Staying in control</h2>
<ul>
  <li><strong>Check facts that matter</strong>, especially figures, quotes, legal or medical points and references.</li>
  <li><strong>Be honest about AI use</strong> where it matters: at school, at work, and when publishing.</li>
  <li><strong>Respect other people's rights:</strong> don't make images or voices of real people without permission, and don't use AI to copy someone's work.</li>
  <li><strong>Watch your spending:</strong> note renewal dates and cancel trials you don't need.</li>
  <li><strong>Beware of fakes:</strong> scammers create look-alike "AI" apps and browser extensions. Download from the official site or app store, from the real maker.</li>
</ul>

<div class="callout"><b>Takeaway:</b> Start from the job, check who handles your data and what it really costs, test with real examples, and match human checking to the stakes. Never paste secrets or other people's private details into a public AI tool, and switch on the privacy settings you want on day one.</div>
`,
    terms: [
      ["Privacy policy", "A company's description of what data it collects, why, how long it keeps it and who it shares it with."],
      ["Training opt-out", "A setting that stops a provider using your conversations to improve its models."],
      ["Temporary chat", "A conversation that isn't saved to your history or used to personalise the assistant."],
      ["Enterprise plan", "A business version of a tool with contracts and controls that protect company data."],
      ["Local model", "An AI model running on your own computer, so data doesn't leave it."],
      ["Two-factor authentication", "Signing in with a second check, such as a code on your phone, as well as a password."],
      ["Human in the loop", "Keeping a person responsible for checking and approving what an AI produces."]
    ],
    quiz: [
      { q: "What's the best starting point when choosing an AI tool?", options: ["The tool with the most hype", "The job you need done", "The cheapest tool", "Whatever a friend uses"], answer: 1, explain: "Start from the task, then compare tools for it." },
      { q: "Which of these is fine to paste into a public chatbot?", options: ["Your online banking password", "A customer list with phone numbers", "A paragraph from a public news article you want explained", "Your company's unreleased financial results"], answer: 2, explain: "Public, non-personal information is fine; secrets and personal data aren't." },
      { q: "What do workplace versions of assistants usually add?", options: ["Funny voices", "Contracts and controls that keep company data out of model training", "Unlimited free images", "Guaranteed correct answers"], answer: 1, explain: "That's why organisations approve specific tools." },
      { q: "How can you keep very sensitive documents completely off company servers and still use AI?", options: ["Use a temporary chat", "Run an open model locally with Ollama or LM Studio", "Use a different browser", "Paste it in two halves"], answer: 1, explain: "Local models keep everything on your machine." },
      { q: "How should the amount of human checking relate to the task?", options: ["Always the same", "The higher the stakes, the more checking", "Only check creative tasks", "Never check if the tool is paid"], answer: 1, explain: "Match the checking to the cost of a mistake." },
      { q: "You find an \"AI assistant\" extension from an unknown developer promising free premium features. What's the risk?", options: ["None; extensions are always checked", "It could be a fake that steals data or logins", "It will be slower", "It only works on Sundays"], answer: 1, explain: "Download from the real maker through official stores." }
    ],
    sources: [
      ["OpenAI: Data controls FAQ", "https://help.openai.com/en/articles/7730893-data-controls-faq", "How to manage training and history settings in ChatGPT."],
      ["Google: Gemini Apps Privacy Hub", "https://support.google.com/gemini/answer/13594961", "What Gemini stores and how to control it."],
      ["UK National Cyber Security Centre: ChatGPT and large language models, what's the risk?", "https://www.ncsc.gov.uk/blog-post/chatgpt-and-large-language-models-whats-the-risk", "Practical security advice on what to share with chatbots."],
      ["UK ICO: Guidance on AI and data protection", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/", "How data protection law applies to AI."],
      ["Ollama", "https://ollama.com/", "Running open models privately on your own computer."]
    ]
  },

  /* ============================ UNIT 2 ============================ */
  {
    id: "t-writing",
    unit: "ltu2",
    title: "Writing and Editing with AI",
    summary: "Using AI as an editor, sparring partner and first-draft machine, while keeping your own voice and staying honest.",
    minutes: 11,
    body: `
<p>Writing is the most common thing people use AI for, Abbas. Used well, it makes you faster and clearer. Used badly, it makes everything sound the same and can land you in trouble. The trick is knowing which role to give it.</p>

<h2>Five roles AI can play</h2>
<ol>
  <li><strong>Proofreader:</strong> spelling, grammar and punctuation. <a data-tool="grammarly">Grammarly</a> does this wherever you type, and phones now have it built in (<a data-tool="apple-intelligence">Apple's Writing Tools</a>, for example).</li>
  <li><strong>Editor:</strong> "make this clearer", "cut it by a third", "make the tone warmer but still professional". Paste in your draft and ask for changes <em>and the reasons for them</em>, so you learn.</li>
  <li><strong>Sparring partner:</strong> "What would a sceptical reader object to?", "Which paragraph is weakest?" This is where AI is most underrated.</li>
  <li><strong>First-draft machine:</strong> routine writing such as a polite reminder, a product description or a meeting summary. Give it the facts and the tone, then edit.</li>
  <li><strong>Rewriter:</strong> tools like <a data-tool="quillbot">QuillBot</a> paraphrase and simplify. Useful for your own text; a problem if used to disguise someone else's.</li>
</ol>

<h2>A good writing prompt</h2>
<p>Generic prompts get generic writing. The difference comes from what <em>you</em> bring:</p>
<ul>
  <li><strong>Audience and purpose:</strong> "for my neighbours, to persuade them to join a street clean-up".</li>
  <li><strong>Your facts and points:</strong> the AI doesn't know your situation. Give it bullet points of what must be said.</li>
  <li><strong>Voice:</strong> paste a paragraph you've written and say "match this style".</li>
  <li><strong>Constraints:</strong> length, reading level, words to avoid, format.</li>
</ul>
<p>Then edit hard. Cut the filler and the phrases AI tends to overuse, and put in your own examples and opinions. The best AI-assisted writing doesn't read as AI writing because a person has shaped every line.</p>

<div data-widget="prompt-builder"></div>

<h2>Specialist writing tools</h2>
<ul>
  <li><a data-tool="jasper">Jasper</a> keeps a marketing team's writing in one brand voice.</li>
  <li><a data-tool="sudowrite">Sudowrite</a> supports fiction writers with ideas and description.</li>
  <li><a data-tool="deepl">DeepL Write</a> polishes text, and is helpful when you're writing in a second language.</li>
  <li><a data-tool="notion-ai">Notion AI</a> and <a data-tool="m365-copilot">Microsoft 365 Copilot</a> write inside your documents.</li>
</ul>

<h2>Honesty, ownership and detection</h2>
<p>Three things to keep in mind:</p>
<ul>
  <li><strong>Rules differ.</strong> Many schools and universities set clear rules on AI use, often requiring you to declare it. Workplaces and publishers have policies too. When in doubt, say how you used AI.</li>
  <li><strong>AI detectors are unreliable.</strong> Tools that claim to spot AI writing make many mistakes, and studies have found they wrongly flag writing by non-native English speakers more often. They shouldn't be the only evidence against anyone.</li>
  <li><strong>Ownership is still being settled.</strong> In several countries, including the US, purely AI-generated text without meaningful human creative input can't be protected by copyright. Your own edits and choices are what make a piece yours.</li>
</ul>

<div data-widget="sort" data-set="writing-fair"></div>

<div class="callout"><b>Takeaway:</b> Use AI as proofreader, editor, sparring partner and first-drafter. Bring your own audience, facts and voice, edit hard, and be open about AI use where the rules or readers expect it.</div>
`,
    terms: [
      ["Proofreading", "Checking text for spelling, grammar and punctuation errors."],
      ["Tone", "The attitude a piece of writing conveys, such as formal, friendly or urgent."],
      ["Paraphrasing", "Restating text in different words while keeping its meaning."],
      ["Brand voice", "The consistent personality and style an organisation uses in its writing."],
      ["AI detector", "A tool that claims to tell whether text was written by AI; often unreliable."],
      ["Disclosure", "Being open about when and how you used AI in your work."],
      ["Plagiarism", "Presenting someone else's work or ideas as your own."]
    ],
    quiz: [
      { q: "Which prompt is likely to get the most useful draft?", options: ["\"Write a letter.\"", "\"Write a letter to my landlord about the broken boiler: it failed on Monday, I reported it Tuesday, I need a fix date. Firm but polite, under 150 words.\"", "\"Write something good.\"", "\"Letter please, fast.\""], answer: 1, explain: "Audience, facts, tone and length make the difference." },
      { q: "What's an underrated way to use AI for writing?", options: ["As a sparring partner that points out weaknesses", "To write everything without reading it", "To make text longer", "To remove all your opinions"], answer: 0, explain: "Asking for objections and weak spots improves your own thinking." },
      { q: "Why shouldn't an AI detector score alone be used to accuse someone of cheating?", options: ["Detectors are illegal", "They make many mistakes, including flagging non-native English writers more often", "They're always right but slow", "They only work on poems"], answer: 1, explain: "They're unreliable evidence." },
      { q: "Rewording a classmate's essay with a paraphrasing tool and handing it in is...", options: ["Fine, because the words changed", "Still plagiarism", "Required by most schools", "A form of proofreading"], answer: 1, explain: "Changing the words doesn't change whose ideas they are." },
      { q: "What makes AI-assisted writing sound like you?", options: ["Using the longest model", "Your own facts, examples, voice and hard editing", "Adding more adjectives", "Asking it to sound human"], answer: 1, explain: "Your input and editing are what make it yours." },
      { q: "In the US, purely AI-generated text without human creative input...", options: ["Is always owned by the user", "Generally can't be protected by copyright", "Belongs to the government", "Must be published"], answer: 1, explain: "Human creative input is what copyright protects." }
    ],
    sources: [
      ["US Copyright Office: Copyright and Artificial Intelligence", "https://www.copyright.gov/ai/", "Reports on whether and how AI-generated material can be protected."],
      ["Liang et al. (2023): GPT detectors are biased against non-native English writers", "https://arxiv.org/abs/2304.02819", "Study showing AI detectors misclassify non-native writing."],
      ["UK Department for Education: Generative AI in education", "https://www.gov.uk/government/publications/generative-artificial-intelligence-in-education", "Government guidance on AI in schools and colleges, including written work."],
      ["Grammarly", "https://www.grammarly.com/", "A widely used AI writing assistant."]
    ]
  },
  {
    id: "t-research",
    unit: "ltu2",
    title: "Research and Search with AI",
    summary: "Answer engines, deep research and AI for scientific papers: how to find things out faster without being misled.",
    minutes: 12,
    body: `
<p>Search is changing faster than at any time since Google arrived, Abbas. Instead of ten blue links, you increasingly get a written answer. That's convenient, and it makes one skill more important than ever: checking where the answer came from.</p>

<h2>From links to answers</h2>
<p>An <strong>answer engine</strong> such as <a data-tool="perplexity">Perplexity</a>, or <a data-tool="google-ai-mode">Google's AI Mode</a>, runs searches for you, reads the results and writes a summary with numbered citations. Under the hood this is retrieval-augmented generation (RAG): fetch relevant pages first, then have a language model answer using them. You'll see exactly how it works in Level 6.</p>
<p>Citations are a big improvement on a chatbot answering from memory, but they're not a guarantee. The model can misread a page, merge two sources, or cite a page that doesn't really say what the answer claims. Studies of AI search tools have found plenty of citation errors. The fix is simple: for anything that matters, click the source and read the sentence yourself.</p>

<h2>Deep research</h2>
<p>ChatGPT, Gemini, Claude and Perplexity all offer a <strong>deep research</strong> mode. You describe a question, it plans an approach, runs dozens of searches over several minutes, and writes a long report with sources. It's a superb way to get an overview of an unfamiliar topic. Treat the report as a well-read assistant's briefing: a starting point to check, not a final verdict.</p>

<h2>Research from your own sources</h2>
<p>Sometimes the question isn't "what does the internet say?" but "what do <em>these</em> documents say?". <a data-tool="notebooklm">NotebookLM</a> answers only from sources you upload, with a citation for every point, and can even turn them into a podcast-style Audio Overview. Uploading files to <a data-tool="claude">Claude</a> or <a data-tool="chatgpt">ChatGPT</a> projects works in a similar way. This keeps answers grounded, but remember: the tool knows only what you gave it.</p>

<h2>Searching the science</h2>
<p>For health, education or science questions, the open web is full of opinion. Tools built on research papers help:</p>
<ul>
  <li><a data-tool="elicit">Elicit</a> finds studies and puts their findings in a comparison table.</li>
  <li><a data-tool="consensus">Consensus</a> shows how many studies support a claim.</li>
  <li><a data-tool="semantic-scholar">Semantic Scholar</a>, a free non-profit search engine, covers hundreds of millions of papers.</li>
</ul>
<p>Even here, quality matters more than quantity: one large, well-designed trial can outweigh ten small studies. Level 4's statistics lessons will help you judge them.</p>

<div data-widget="sort" data-set="research-tool"></div>

<h2>A five-step routine for checking</h2>
<ol>
  <li><strong>Click the source</strong> for any key fact and find the actual sentence.</li>
  <li><strong>Check who wrote it:</strong> an official body, a research paper, a reputable newspaper, or an anonymous blog?</li>
  <li><strong>Check the date:</strong> is the information current?</li>
  <li><strong>Look for a second, independent source</strong> for important claims.</li>
  <li><strong>Be extra careful with numbers, quotes and references:</strong> they're the most common things AI gets wrong.</li>
</ol>
<p>A real warning: in 2023 a New York lawyer submitted a court filing citing six cases that a chatbot had invented. The judge fined the lawyers involved. Similar cases have kept happening since. The tool wasn't the problem; skipping the check was.</p>

<div class="callout"><b>Takeaway:</b> Answer engines and deep research save hours, and your-own-sources tools keep answers grounded. Citations make checking possible, but you still have to check: click, read, date, second source.</div>
`,
    terms: [
      ["Citation", "A reference showing the source a statement came from."],
      ["Answer engine", "A search tool that writes an answer and cites the web pages it used."],
      ["Retrieval-augmented generation (RAG)", "Fetching relevant documents first and having a model answer using them."],
      ["Grounding", "Tying a model's answer to specific source material."],
      ["Deep research", "An assistant mode that runs many searches and writes a long, sourced report."],
      ["Peer review", "Checking of research by independent experts before publication."],
      ["Primary source", "The original document or data, rather than someone's summary of it."],
      ["Lateral reading", "Checking a source by seeing what other trustworthy sources say about it."]
    ],
    quiz: [
      { q: "An answer engine cites a source for a statistic. What should you do before using it in a report?", options: ["Nothing, it has a citation", "Click the source and check the number is really there", "Ask the tool if it's sure", "Round the number"], answer: 1, explain: "Citations can be wrong; check the actual sentence." },
      { q: "Which tool answers only from documents you upload?", options: ["Google AI Mode", "NotebookLM", "Midjourney", "Grok"], answer: 1, explain: "Its answers stay grounded in your sources." },
      { q: "What's the best use of a deep research report?", options: ["Publishing it unchanged", "A well-sourced starting point to check and build on", "Replacing all other reading", "Proof that a claim is true"], answer: 1, explain: "Treat it as a briefing, not a verdict." },
      { q: "For a question about whether a vitamin helps memory, which tool is designed for it?", options: ["Consensus or Elicit", "A music generator", "A grammar checker", "A meeting notetaker"], answer: 0, explain: "They're built on research papers." },
      { q: "What happened to the lawyer who cited chatbot-invented cases in 2023?", options: ["Nothing", "The lawyers were fined by the judge", "They won the case", "The chatbot was arrested"], answer: 1, explain: "Skipping the check had real consequences." },
      { q: "Which details does AI most often get wrong?", options: ["Greetings", "Numbers, quotes and references", "Common words", "Punctuation"], answer: 1, explain: "Specific details are where errors hide." }
    ],
    sources: [
      ["Tow Center for Digital Journalism: AI search has a citation problem", "https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php", "A 2025 test of AI search tools' citation accuracy."],
      ["Stanford History Education Group / Digital Inquiry Group: Civic Online Reasoning", "https://cor.inquirygroup.org/", "Free lessons on lateral reading and checking sources."],
      ["Wikipedia: Mata v. Avianca, Inc.", "https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.", "Summary of the case of chatbot-invented citations, with links to the court documents."],
      ["Google: NotebookLM", "https://notebooklm.google/", "A source-grounded research notebook."],
      ["Semantic Scholar", "https://www.semanticscholar.org/", "A free, non-profit academic search engine."]
    ]
  },
  {
    id: "t-translate",
    unit: "ltu2",
    title: "Translation and Languages",
    summary: "How AI translation works, when it's good enough, when you need a professional, and how AI can help you learn a language.",
    minutes: 11,
    body: `
<p>Machine translation is one of AI's quiet triumphs, Abbas. A tourist can now read a menu in Tokyo with a phone camera, and a doctor can have a basic conversation with a patient who speaks another language. But it has limits worth knowing.</p>

<h2>How it got so good</h2>
<p>Early translation software followed hand-written grammar rules and produced clumsy results. From the 2000s, statistical systems learned from millions of translated sentences. In 2016 <strong>neural machine translation</strong> arrived, and a year later the transformer, the architecture behind today's language models, was invented by Google researchers <em>for translation</em>. Now large language models translate too, and they're good at keeping tone and context across a whole document.</p>

<h2>The main tools</h2>
<ul>
  <li><a data-tool="google-translate">Google Translate</a>: free, well over 200 languages, camera translation and conversation mode. The widest coverage.</li>
  <li><a data-tool="deepl">DeepL</a>: often the most natural-sounding, especially between European languages, with document translation that keeps formatting.</li>
  <li><a data-tool="ms-translator">Microsoft Translator</a>: a group conversation mode where everyone reads in their own language.</li>
  <li>General assistants like <a data-tool="chatgpt">ChatGPT</a> and <a data-tool="claude">Claude</a> can translate <em>and explain</em>: "translate this, then tell me which phrases are idioms and how formal it sounds".</li>
  <li>Phones now offer live translation of calls and face-to-face conversations, and earbuds can translate speech into your ear.</li>
</ul>
<p>For video, tools like <a data-tool="heygen">HeyGen</a> and <a data-tool="elevenlabs">ElevenLabs</a> can dub a video into another language in the speaker's own voice.</p>

<h2>Where it struggles</h2>
<ul>
  <li><strong>Less common languages:</strong> quality depends on how much translated text exists. Big languages are excellent; many smaller ones are noticeably weaker.</li>
  <li><strong>Context and ambiguity:</strong> a word with several meanings, or a sentence that needs knowledge of the situation.</li>
  <li><strong>Idioms, humour and culture:</strong> "it's raining cats and dogs" shouldn't be translated word for word.</li>
  <li><strong>Formality:</strong> many languages have formal and informal "you"; getting it wrong can sound rude.</li>
  <li><strong>Gender and bias:</strong> translating from a language without gendered pronouns, systems have often guessed "he" for doctors and "she" for nurses.</li>
</ul>

<h2>When to use a professional</h2>
<p>Machine translation is fine for understanding, casual messages and travel. Use a professional human translator for anything where a mistake could cause real harm: legal contracts, medical instructions, immigration documents, safety information and anything published under your name or brand. Courts and hospitals often require certified human translators for good reason.</p>
<p>A useful middle path for important but not critical text: machine-translate, then have a fluent speaker check it. This is how many professional translators now work too, a practice called post-editing.</p>

<div data-widget="sort" data-set="translate-ok"></div>

<h2>Learning a language with AI</h2>
<ul>
  <li><a data-tool="duolingo">Duolingo</a> builds a daily habit; its top tier adds AI conversation practice and explanations of mistakes.</li>
  <li><a data-tool="speak">Speak</a> focuses on speaking out loud with an AI tutor.</li>
  <li>A general assistant's voice mode makes a patient conversation partner: "Talk to me in simple Spanish about food, and correct my mistakes gently at the end."</li>
</ul>
<p>AI won't replace conversation with real people, but it makes practice available any time, without embarrassment.</p>

<div class="callout"><b>Takeaway:</b> AI translation is excellent for understanding and everyday use, especially in major languages. It struggles with rarer languages, idioms, formality and context. Use professionals where mistakes could harm, and use AI tutors for practice.</div>
`,
    terms: [
      ["Machine translation", "Translating text or speech automatically with software."],
      ["Neural machine translation", "Translation using neural networks, which became standard around 2016."],
      ["Idiom", "A phrase whose meaning isn't clear from its individual words."],
      ["Post-editing", "A human correcting and improving a machine translation."],
      ["Certified translation", "A translation formally confirmed as accurate by a qualified translator, often required by courts and governments."],
      ["Low-resource language", "A language with relatively little digital text available to train AI."],
      ["Dubbing", "Replacing the speech in a video with speech in another language."]
    ],
    quiz: [
      { q: "The transformer architecture behind today's language models was first designed for...", options: ["Image generation", "Translation", "Self-driving cars", "Music"], answer: 1, explain: "The 2017 paper was about machine translation." },
      { q: "Which situation most clearly needs a professional human translator?", options: ["Reading a café menu on holiday", "Translating the dosage instructions for a medicine", "Understanding a friend's social media post", "Getting the gist of a news article"], answer: 1, explain: "Mistakes in medical instructions can cause harm." },
      { q: "Why is machine translation weaker for some languages?", options: ["Those languages are harder to type", "There's less translated text available to learn from", "The companies dislike them", "Computers only know English"], answer: 1, explain: "Quality follows the amount of training data." },
      { q: "What is post-editing?", options: ["Posting a translation online", "A human correcting a machine translation", "Translating posters", "Deleting old translations"], answer: 1, explain: "It's how many professionals now work." },
      { q: "Which tool is known for letting several people converse, each reading in their own language on their own phone?", options: ["Microsoft Translator", "Midjourney", "Zapier", "Otter.ai"], answer: 0, explain: "Its conversation mode is designed for groups." },
      { q: "Which phrase is most likely to go wrong in word-for-word translation?", options: ["\"The door is red.\"", "\"It's raining cats and dogs.\"", "\"I have two brothers.\"", "\"The shop opens at nine.\""], answer: 1, explain: "Idioms need meaning, not word-for-word translation." }
    ],
    sources: [
      ["Google: 110 new languages coming to Google Translate (2024)", "https://blog.google/products/translate/google-translate-new-languages-2024/", "How AI helped extend translation to many smaller languages."],
      ["Vaswani et al. (2017): Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "The transformer paper, which was tested on translation."],
      ["Chartered Institute of Linguists", "https://www.ciol.org.uk/", "Professional body on when and how to use qualified translators."],
      ["DeepL", "https://www.deepl.com/", "A leading neural translation service."]
    ]
  },
  {
    id: "t-meetings",
    unit: "ltu2",
    title: "Meetings, Notes and Office Work",
    summary: "AI notetakers, assistants inside email and documents, and the etiquette of recording people.",
    minutes: 11,
    body: `
<p>Office work is full of jobs AI is good at, Abbas: summarising, drafting, finding things and turning conversations into to-do lists. This lesson covers the tools and the manners that go with them.</p>

<h2>AI notetakers</h2>
<p>Meeting tools listen to a call, transcribe it with speech recognition, then use a language model to write a summary and action items. You can ask questions afterwards, like "what did we decide about the budget?".</p>
<ul>
  <li><a data-tool="otter">Otter.ai</a> and <a data-tool="fireflies">Fireflies.ai</a> join your video calls as a visible notetaker bot.</li>
  <li><a data-tool="granola">Granola</a> listens from your own computer with no bot, combining its transcript with your rough notes.</li>
  <li>Calling apps have it built in: <a data-tool="zoom-ai">Zoom AI Companion</a>, Microsoft Teams with <a data-tool="m365-copilot">Copilot</a>, and Google Meet with <a data-tool="gemini-workspace">Gemini</a>.</li>
</ul>

<h2>The etiquette and law of recording</h2>
<p>Recording people raises real questions:</p>
<ul>
  <li><strong>Tell people and get agreement.</strong> In many places, including parts of the US, recording without everyone's consent is illegal. In the UK and EU, recordings of identifiable people are personal data under data protection law.</li>
  <li><strong>Don't let a bot attend in your place</strong> without telling others. Some notetakers auto-join every meeting on your calendar, which has caused embarrassment when sensitive meetings were recorded and summaries emailed to everyone.</li>
  <li><strong>Check summaries before sharing.</strong> AI summaries can attribute words to the wrong person or miss the nuance of a disagreement.</li>
  <li><strong>Mind sensitive conversations:</strong> HR, health, legal and personal matters may be better without a recorder at all.</li>
</ul>

<div data-widget="sort" data-set="meeting-manners"></div>

<h2>AI inside your office apps</h2>
<p>The biggest office suites now have AI built in:</p>
<ul>
  <li><a data-tool="m365-copilot">Microsoft 365 Copilot</a> in Word, Excel, PowerPoint, Outlook and Teams.</li>
  <li><a data-tool="gemini-workspace">Gemini in Google Workspace</a> in Gmail, Docs, Sheets, Slides and Meet.</li>
  <li><a data-tool="notion-ai">Notion AI</a> across a Notion workspace of notes and projects.</li>
</ul>
<p>The handiest everyday uses:</p>
<ul>
  <li><strong>Catch-up:</strong> "summarise this 40-email thread and tell me what I need to decide".</li>
  <li><strong>Drafting:</strong> replies, reports and slides from your notes.</li>
  <li><strong>Spreadsheets in plain English:</strong> "which product had the biggest sales growth?", or "write a formula for the total per month".</li>
  <li><strong>Finding things:</strong> "where's the latest version of the supplier contract?"</li>
</ul>
<p>One important point for work versions: they can see everything <em>you</em> have permission to see. If a company's file permissions are messy, AI can surface documents people didn't realise were shared with them. Tidying permissions comes before switching on AI.</p>

<h2>Does it actually save time?</h2>
<p>Studies so far show real but uneven gains. Controlled experiments with customer support agents and consultants found big improvements on suitable tasks, with the largest gains for less experienced workers, but also that people did <em>worse</em> on tasks the AI couldn't handle well, because they trusted it too much. A good habit: notice which tasks AI genuinely speeds up for you, and keep doing the rest yourself.</p>

<div class="callout"><b>Takeaway:</b> AI notetakers and office assistants are great for summaries, drafts and catching up. Get consent before recording, check summaries before sharing, and remember that work AI sees whatever you can see.</div>
`,
    terms: [
      ["Transcript", "A written record of everything said in a recording."],
      ["Speech recognition", "Turning spoken words into text automatically."],
      ["Action item", "A task agreed in a meeting, usually with an owner and a deadline."],
      ["Notetaker bot", "An AI participant that joins a call to record and transcribe it."],
      ["Consent", "Clear agreement from people before you record or use their information."],
      ["Permissions", "Settings that control who can see and edit each file or folder."],
      ["Personal data", "Information relating to an identifiable person, protected by data protection law."]
    ],
    quiz: [
      { q: "Before using an AI notetaker in a call, you should...", options: ["Hide it", "Tell everyone and get their agreement", "Only tell the host", "Turn off the transcript"], answer: 1, explain: "Consent is good manners and, in many places, the law." },
      { q: "What's a risk of notetakers that auto-join every calendar meeting?", options: ["They make calls faster", "Sensitive meetings get recorded and summaries shared by surprise", "They improve audio", "They cancel meetings"], answer: 1, explain: "Check auto-join settings." },
      { q: "Why should a company tidy file permissions before switching on Microsoft 365 Copilot?", options: ["Copilot deletes untidy files", "Copilot can surface anything a user has permission to see", "It's required for printing", "It speeds up the internet"], answer: 1, explain: "AI makes over-shared files easy to find." },
      { q: "What did studies of AI at work find about gains?", options: ["Everyone improved equally on every task", "Real gains on suitable tasks, but worse results when people over-trusted AI on tasks it handled badly", "No effect at all", "AI always made work slower"], answer: 1, explain: "Know where it helps and where it doesn't." },
      { q: "Which is a good everyday use of AI in Gmail or Outlook?", options: ["Sending emails automatically without reading them", "Summarising a long thread and highlighting what you need to decide", "Reading colleagues' private mail", "Deleting all old emails"], answer: 1, explain: "Catch-up is a big time saver." },
      { q: "How does Granola differ from Otter or Fireflies?", options: ["It only works on paper", "It records from your computer with no bot joining the call", "It translates into 100 languages", "It makes music"], answer: 1, explain: "No visible bot, though consent still matters." }
    ],
    sources: [
      ["Brynjolfsson, Li and Raymond (2023): Generative AI at Work", "https://www.nber.org/papers/w31161", "Study of AI assistance for customer support agents."],
      ["Dell'Acqua et al. (2023): Navigating the Jagged Technological Frontier", "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700", "Experiment with consultants showing gains and pitfalls."],
      ["UK ICO: What is personal data?", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/personal-information-what-is-it/", "Why recordings of people are personal data."],
      ["Microsoft: Work Trend Index", "https://www.microsoft.com/en-us/worklab/work-trend-index", "Survey research on AI in the workplace."]
    ]
  },

  /* ============================ UNIT 3 ============================ */
  {
    id: "t-images",
    unit: "ltu3",
    title: "Making and Editing Images",
    summary: "Image generators and AI photo editing: which tool for which job, how to describe what you want, and the rules on fakes and copyright.",
    minutes: 12,
    body: `
<p>A few years ago, making a convincing picture of "a fox reading a newspaper in a Paris café, in the style of a 1950s poster" took an illustrator hours. Now it takes seconds, Abbas. This lesson shows you the main tools, how to get what you want, and where the lines are.</p>

<h2>How image generators work, in one paragraph</h2>
<p>Most image generators are <strong>diffusion models</strong>. During training, they learn to remove noise from millions of captioned images. To make a new picture, they start from pure random noise and remove it step by step, steered by your description, until an image appears. You'll explore exactly how in Level 6. Some newer systems, like those built into ChatGPT and Gemini, generate images inside a multimodal language model, which makes them better at following detailed instructions and editing through conversation.</p>

<h2>The main tools</h2>
<ul>
  <li><a data-tool="midjourney">Midjourney</a>: artistic, striking images; paid only.</li>
  <li><a data-tool="chatgpt">ChatGPT</a> and <a data-tool="nano-banana">Gemini (Nano Banana)</a>: make and edit images through conversation, very good at following instructions and editing your own photos.</li>
  <li><a data-tool="firefly">Adobe Firefly</a>: trained on licensed images, built into Photoshop's Generative Fill; a common choice for businesses.</li>
  <li><a data-tool="ideogram">Ideogram</a>: especially good at readable text in images, so handy for posters and invitations.</li>
  <li><a data-tool="stable-diffusion">Stable Diffusion</a> and <a data-tool="flux">FLUX</a>: open models you can run and customise yourself.</li>
  <li><a data-tool="canva">Canva</a>, <a data-tool="ms-designer">Microsoft Designer</a> and <a data-tool="leonardo">Leonardo.ai</a>: image generation inside design tools.</li>
</ul>

<h2>Describing what you want</h2>
<p>A good image prompt usually covers:</p>
<ol>
  <li><strong>Subject:</strong> what's in the picture, and what it's doing.</li>
  <li><strong>Setting:</strong> where and when.</li>
  <li><strong>Style or medium:</strong> photo, watercolour, flat illustration, 3D render, pencil sketch.</li>
  <li><strong>Composition:</strong> close-up, wide shot, view from above.</li>
  <li><strong>Lighting and mood:</strong> golden hour, soft studio light, moody and dark.</li>
</ol>
<p>Then iterate: change one thing at a time, and with conversational tools just say what to change ("make it night time", "remove the second chair"). For text in images, put the exact words in quotation marks.</p>

<div data-widget="image-prompt"></div>

<h2>AI photo editing</h2>
<p>Editing may be even more useful than generating. Everyday tools can now remove a stranger from a holiday photo (<a data-tool="apple-intelligence">Apple's Clean Up</a>, Google's Magic Eraser), extend a picture beyond its edges (Firefly's Generative Expand), cut out backgrounds in one click, or change a room's wall colour by asking. Gemini's image model is especially good at keeping a person or product looking the same across edits.</p>

<h2>Fakes, labels and consent</h2>
<p>Realistic images can mislead. In 2023 a fake picture of an explosion near the Pentagon briefly moved US stock markets. Some rules for yourself:</p>
<ul>
  <li><strong>Never</strong> make realistic images of real people doing or saying things they didn't, or intimate images of anyone. Many countries, including the UK, have made sexually explicit deepfakes a criminal offence.</li>
  <li><strong>Label</strong> realistic AI images when you share them. Major tools add markers: Google's invisible <strong>SynthID</strong> watermark, and <strong>Content Credentials</strong> (the C2PA standard) used by Adobe, OpenAI and others, which record how an image was made. These help, but they can be stripped, so a missing label proves nothing.</li>
  <li><strong>Edit photos of other people only with their permission.</strong></li>
</ul>

<h2>Copyright</h2>
<p>Two open questions are being fought over in courts around the world. First, training: artists, photo agencies and film studios have sued image companies for training on their work without permission. Second, ownership: in the US, images generated purely from a prompt generally can't be copyrighted, while human creative choices and edits can be. Practical advice: avoid copying famous characters, logos or living artists' named styles, and for business use prefer tools that offer licensed training data and legal protection.</p>

<div data-widget="sort" data-set="image-ethics"></div>

<div class="callout"><b>Takeaway:</b> Image tools now create and edit pictures from plain descriptions. Describe subject, setting, style, composition and lighting, and iterate one change at a time. Never fake real people, label realistic AI images, and steer clear of copying others' characters and styles.</div>
`,
    terms: [
      ["Image generator", "An AI tool that creates pictures from a text description."],
      ["Diffusion model", "A model that creates images by removing noise step by step, guided by a prompt."],
      ["Image prompt", "The description you give an image generator: subject, setting, style, composition and lighting."],
      ["Generative fill", "Selecting part of an image and describing what AI should put there."],
      ["Deepfake", "Realistic fake media showing a real person doing or saying something they didn't."],
      ["Watermark", "A visible or hidden marker showing where an image came from."],
      ["Content Credentials (C2PA)", "An open standard that attaches a record of how a piece of media was made and edited."],
      ["SynthID", "Google's invisible watermark for content made with its AI models."]
    ],
    quiz: [
      { q: "Which tool is a good choice for a poster with the words \"Summer Fair\" clearly spelled out?", options: ["Ideogram", "Otter.ai", "Zapier", "Whisper"], answer: 0, explain: "It's known for readable text in images." },
      { q: "Why do businesses often choose Adobe Firefly?", options: ["It's the only free tool", "Adobe says it was trained on licensed content, reducing copyright worries", "It makes music too", "It needs no internet"], answer: 1, explain: "Licensed training data matters for commercial use." },
      { q: "A shared image has no AI watermark. What does that prove?", options: ["It's a real photo", "Nothing for certain: labels can be missing or stripped", "It's from Midjourney", "It's illegal"], answer: 1, explain: "A missing label isn't proof of authenticity." },
      { q: "Which is the best way to improve an image that's nearly right?", options: ["Start again with a totally different prompt", "Change one thing at a time and say exactly what to change", "Add twenty new style words", "Lower the screen brightness"], answer: 1, explain: "Iterate step by step." },
      { q: "Which of these crosses a clear line?", options: ["A watercolour of your own garden", "A realistic fake photo of a real politician accepting a bribe", "A logo idea for your book club", "A cartoon fox reading a newspaper"], answer: 1, explain: "Realistic fakes of real people can deceive and harm." },
      { q: "In the US, a picture generated purely from a short prompt...", options: ["Is automatically copyrighted by you", "Generally can't be copyrighted", "Belongs to the AI", "Must carry your name"], answer: 1, explain: "Human creative input is what copyright protects." }
    ],
    sources: [
      ["C2PA and Content Credentials", "https://contentcredentials.org/", "The open standard for recording how media was made."],
      ["Google DeepMind: SynthID", "https://deepmind.google/models/synthid/", "How Google watermarks AI-generated images, audio, video and text."],
      ["US Copyright Office: Copyright and Artificial Intelligence", "https://www.copyright.gov/ai/", "Guidance on AI-generated images and copyright."],
      ["Adobe Firefly: approach to generative AI", "https://www.adobe.com/products/firefly.html", "Adobe's description of its licensed training data and Content Credentials."],
      ["Ho, Jain and Abbeel (2020): Denoising Diffusion Probabilistic Models", "https://arxiv.org/abs/2006.11239", "The paper behind modern diffusion image models."]
    ]
  },
  {
    id: "t-voice",
    unit: "ltu3",
    title: "Voice, Speech and Audio",
    summary: "Speech-to-text, lifelike AI voices, voice cloning, audio clean-up, and how to protect yourself from voice scams.",
    minutes: 11,
    body: `
<p>AI can now listen almost as well as a person and speak with a voice that's hard to tell from a human's, Abbas. That opens up wonderful uses, from accessibility to podcasts in many languages, and one serious risk: voice scams.</p>

<h2>Speech to text</h2>
<p>Speech recognition turns audio into text. Modern systems such as OpenAI's open-source <a data-tool="whisper">Whisper</a> were trained on hundreds of thousands of hours of audio and cope well with accents and background noise. You'll find speech recognition in:</p>
<ul>
  <li>Dictation on phones and computers, and voice typing in documents.</li>
  <li>Live captions in video calls and on phones.</li>
  <li>Meeting tools like <a data-tool="otter">Otter.ai</a>, and video editors like <a data-tool="descript">Descript</a>, which let you edit audio by editing its transcript.</li>
</ul>
<p>Accuracy is very high for clear speech in major languages, lower for strong accents, crowded rooms, technical jargon and less common languages. Proofread transcripts before you rely on them, especially names and numbers.</p>

<h2>Text to speech and AI voices</h2>
<p>Text-to-speech has gone from robotic to lifelike. <a data-tool="elevenlabs">ElevenLabs</a> offers thousands of expressive voices in many languages; <a data-tool="murf">Murf</a> is built for voiceovers; <a data-tool="speechify">Speechify</a> reads anything aloud. Uses include narrating videos and presentations, audiobooks, accessibility for people who find reading hard, and giving a voice to people who've lost theirs to illness. Some people with motor neurone disease now "bank" their voice so an AI copy can speak for them later.</p>
<p>Assistants can also hold real-time voice conversations: ChatGPT, Gemini and others offer voice modes that respond with natural timing and can be interrupted, like a phone call.</p>

<h2>Cleaning up audio</h2>
<p>AI is excellent at separating voices from noise. <a data-tool="adobe-podcast">Adobe Podcast's Enhance Speech</a> makes a phone recording sound as if it was made in a studio; <a data-tool="krisp">Krisp</a> removes background noise from calls in real time; other tools separate vocals from music. It's the same idea as image denoising, applied to sound.</p>

<div data-widget="sort" data-set="voice-task"></div>

<h2>Voice cloning: power and danger</h2>
<p>With a short sample of someone's voice, cloning tools can produce new speech that sounds like them. That's useful for dubbing your own videos into other languages or fixing a mistake in a recording without re-recording. It's also exploited by criminals:</p>
<ul>
  <li><strong>Family emergency scams:</strong> a call that sounds like a relative in trouble, begging for money urgently.</li>
  <li><strong>Business fraud:</strong> in 2024 an employee of the engineering firm Arup in Hong Kong was tricked into sending about US$25 million after a video call with deepfaked senior colleagues.</li>
  <li><strong>Political fakes:</strong> a fake robocall imitating President Biden's voice told voters in New Hampshire not to vote in 2024.</li>
</ul>
<p>How to protect yourself and your family:</p>
<ul>
  <li><strong>Agree a family safe word</strong> to use in a genuine emergency.</li>
  <li><strong>Hang up and call back</strong> on a number you already know.</li>
  <li><strong>Be suspicious of urgency and secrecy,</strong> and of requests for gift cards, cryptocurrency or bank transfers.</li>
  <li>For businesses: verify payment requests through a second, separate channel.</li>
</ul>
<p>Reputable cloning tools require you to confirm you have the right to use a voice, and add safeguards. Only ever clone your own voice, or one you have clear written permission to use.</p>

<div class="callout"><b>Takeaway:</b> Speech-to-text and text-to-speech are now excellent and power captions, notes, narration and accessibility. Audio clean-up rescues poor recordings. Voice cloning is powerful and abused, so clone only with permission and protect your family with a safe word and call-backs.</div>
`,
    terms: [
      ["Speech-to-text", "Turning spoken audio into written text; also called speech recognition."],
      ["Text-to-speech", "Turning written text into spoken audio."],
      ["Dictation", "Speaking to your device so it types what you say."],
      ["Voice cloning", "Creating an AI voice that sounds like a specific person from samples of their speech."],
      ["Voice banking", "Recording your voice so it can be recreated later if you lose the ability to speak."],
      ["Speech enhancement", "Removing noise and echo from recorded speech."],
      ["Safe word", "A secret word agreed in advance to confirm a caller really is who they claim."]
    ],
    quiz: [
      { q: "You get a call from what sounds like your cousin, crying and asking for money urgently. What's the best move?", options: ["Send the money quickly", "Hang up and call them back on a number you know, or ask for your family safe word", "Ask them to send a selfie", "Keep them talking until the money arrives"], answer: 1, explain: "Call-backs and safe words beat cloned voices." },
      { q: "Which tool would you use to make a noisy phone recording sound like a studio recording?", options: ["Adobe Podcast Enhance Speech", "Midjourney", "Zapier", "Ideogram"], answer: 0, explain: "It's built for exactly this." },
      { q: "When is voice cloning acceptable?", options: ["Whenever the voice is famous", "With your own voice, or with clear permission from the speaker", "When it's for a joke", "If the clip is short"], answer: 1, explain: "Consent is essential." },
      { q: "Where are speech-to-text systems least accurate?", options: ["Clear speech in a quiet room", "Strong accents, crowded rooms, jargon and less common languages", "Short sentences", "Slow speech"], answer: 1, explain: "Proofread transcripts in those conditions." },
      { q: "What is voice banking used for?", options: ["Storing money by voice", "Preserving someone's voice so an AI copy can speak for them if they lose their speech", "Banking app passwords", "Recording podcasts"], answer: 1, explain: "A moving and valuable use of the technology." },
      { q: "What made the 2024 Arup fraud possible?", options: ["A stolen laptop", "A video call with deepfaked colleagues that convinced an employee to transfer money", "A broken password", "An email typo"], answer: 1, explain: "Verify payments through a separate channel." }
    ],
    sources: [
      ["US FTC: Scammers use AI to enhance their family emergency schemes", "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes", "Consumer advice on voice-cloning scams."],
      ["Radford et al. (2022): Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)", "https://arxiv.org/abs/2212.04356", "The paper behind Whisper."],
      ["MND Association: Voice banking", "https://www.mndassociation.org/support-and-information/living-with-mnd/communication/voice-banking", "How people with motor neurone disease preserve their voices."],
      ["UK National Cyber Security Centre: Phishing and scams", "https://www.ncsc.gov.uk/collection/phishing-scams", "How to recognise and report scams."]
    ]
  },
  {
    id: "t-video",
    unit: "ltu3",
    title: "Video and Music",
    summary: "AI video generators, avatar presenters, editing shortcuts and AI music, with the debates about artists, fakes and jobs.",
    minutes: 12,
    body: `
<p>Video is the newest frontier for generative AI, Abbas, and it moved astonishingly fast: from wobbly two-second clips in 2023 to realistic scenes with synchronised sound by 2025. This lesson covers making videos, editing them, and making music.</p>

<h2>Generating video</h2>
<p>Video generators extend the ideas behind image diffusion through time, so that each frame stays consistent with the next. You describe a scene, or start from an image, and get a short clip, typically a few seconds to a minute long.</p>
<ul>
  <li><a data-tool="veo">Veo</a> (Google DeepMind) and <a data-tool="sora">Sora</a> (OpenAI): realistic video with matching sound and dialogue.</li>
  <li><a data-tool="runway">Runway</a>: a creative studio used in film and advertising.</li>
  <li><a data-tool="kling">Kling</a>, <a data-tool="luma">Luma Dream Machine</a> and <a data-tool="pika">Pika</a>: popular alternatives with free credits.</li>
</ul>
<p>Prompts work like image prompts, plus <strong>motion</strong> (what moves and how) and <strong>camera</strong> (slow push-in, aerial shot, handheld). Generators still struggle with long scenes, keeping a character exactly the same across shots, complex physics, and hands doing fiddly things.</p>

<h2>Avatar presenters</h2>
<p><a data-tool="synthesia">Synthesia</a> and <a data-tool="heygen">HeyGen</a> turn a script into a video of a lifelike presenter, in many languages. Businesses use them for training and how-to videos, because updating the video means editing text instead of re-filming. HeyGen can also translate a video of you into another language, in your voice, with your lips matched.</p>

<h2>Editing with AI</h2>
<p>For most people, AI <em>editing</em> is more useful than generation:</p>
<ul>
  <li><a data-tool="capcut">CapCut</a>: automatic captions, background removal and templates.</li>
  <li><a data-tool="descript">Descript</a>: edit video by editing the transcript, remove "ums" in one click.</li>
  <li><a data-tool="opus-clip">OpusClip</a>: turns a long talk or podcast into short clips for social media.</li>
</ul>

<div data-widget="sort" data-set="video-kind"></div>

<h2>Making music</h2>
<p><a data-tool="suno">Suno</a> and <a data-tool="udio">Udio</a> create complete songs, with vocals and lyrics, from a short description. Results can be catchy enough that AI-generated tracks have appeared in streaming charts, and some streaming services report that a large share of new uploads are AI-made. ElevenLabs and others offer music and sound effects for videos.</p>
<p>The music industry is in the middle of a big fight and negotiation. Major record labels sued Suno and Udio in 2024 for training on their recordings; since then, some labels have reached licensing deals and the services have changed their rules, especially around downloading and ownership. If you use AI music, check what your plan actually allows you to do with it.</p>

<h2>The bigger debates</h2>
<ul>
  <li><strong>Creative jobs:</strong> illustrators, voice actors, musicians and video professionals are already feeling the effects. Hollywood's 2023 writers' and actors' strikes won rules on AI use in contracts.</li>
  <li><strong>Misinformation:</strong> realistic fake video of news events or real people is now easy to make. Watermarks such as SynthID and Content Credentials help, but can be removed.</li>
  <li><strong>Consent:</strong> using someone's face, voice or likeness without permission is wrong and increasingly illegal.</li>
</ul>
<p>The most interesting work is coming from creators who use these tools for things that were impossible before (a short film made by one person, a lesson dubbed into twenty languages) while being open about how they made it.</p>

<div class="callout"><b>Takeaway:</b> AI can now generate short realistic videos with sound, make presenter videos from a script, speed up editing and create whole songs. Mind the limits (length, consistency, physics), the rights (training, ownership, likeness) and the risk of fakes.</div>
`,
    terms: [
      ["Text-to-video", "Generating a video clip from a written description."],
      ["Image-to-video", "Animating a still image into a short video clip."],
      ["AI avatar", "A computer-generated person who presents a script on video."],
      ["Lip sync", "Matching mouth movements in a video to the words being spoken."],
      ["Temporal consistency", "Keeping people and objects looking the same from one frame or shot to the next."],
      ["Auto-captions", "Subtitles generated automatically from the speech in a video."],
      ["Likeness", "A person's recognisable face, body or voice, which many laws protect."]
    ],
    quiz: [
      { q: "What do video prompts need that image prompts don't?", options: ["A file size", "Motion and camera directions", "A price", "A watermark"], answer: 1, explain: "Say what moves and how the camera moves." },
      { q: "Which is a common weakness of video generators?", options: ["They can't show colour", "Keeping a character exactly the same across shots", "They only work in black and white", "They're always silent"], answer: 1, explain: "Consistency over time is still hard." },
      { q: "Why do companies use avatar tools like Synthesia for training videos?", options: ["Avatars are always more engaging", "Updating the video means editing text, not re-filming, and it works in many languages", "They're required by law", "They need no script"], answer: 1, explain: "Easy updates and many languages." },
      { q: "You want short social clips from a one-hour podcast. Which tool fits?", options: ["OpusClip", "Wolfram|Alpha", "DeepL", "Grammarly"], answer: 0, explain: "It finds highlights and reframes them for phones." },
      { q: "What did Hollywood writers and actors win in 2023?", options: ["A ban on cameras", "Contract rules on AI use", "Free AI tools", "Shorter films"], answer: 1, explain: "Their strikes won protections over AI." },
      { q: "Before selling a song made with an AI music tool, you should...", options: ["Assume you own it", "Check what your plan and the service's current rules allow", "Remove the vocals", "Rename the file"], answer: 1, explain: "Rights and rules vary and have been changing." }
    ],
    sources: [
      ["Google DeepMind: Veo", "https://deepmind.google/models/veo/", "Google's video generation model with audio."],
      ["OpenAI: Sora", "https://openai.com/sora/", "OpenAI's video generation model and app."],
      ["WGA: Summary of the 2023 MBA (AI provisions)", "https://www.wgacontract2023.org/the-campaign/summary-of-the-2023-wga-mba", "What writers won on AI in their contract."],
      ["RIAA: Record companies sue Suno and Udio (2024)", "https://www.riaa.com/record-companies-bring-landmark-cases-for-responsible-ai-againstsuno-and-udio-in-boston-and-new-york-federal-courts-respectively/", "The labels' case on AI music training."],
      ["Content Credentials", "https://contentcredentials.org/", "Recording how media, including video, was made."]
    ]
  },
  {
    id: "t-design",
    unit: "ltu3",
    title: "Design and Presentations",
    summary: "Turning ideas into slides, posters and app designs in minutes with Canva, Gamma, Figma and friends, without losing your own message.",
    minutes: 10,
    body: `
<p>Design used to need special skills and expensive software, Abbas. AI design tools now get a non-designer to a good-looking first version in minutes. Your job shifts from pushing boxes around to deciding what to say and judging what works.</p>

<h2>The tools</h2>
<ul>
  <li><a data-tool="canva">Canva</a>: the all-rounder for posters, social posts, presentations and videos, with AI to generate designs, images and text, remove backgrounds and resize for every platform.</li>
  <li><a data-tool="gamma">Gamma</a>: type a topic or paste notes and get a complete presentation, document or one-page website.</li>
  <li><a data-tool="beautiful-ai">Beautiful.ai</a>: slides with smart templates that keep everything tidy and on-brand.</li>
  <li><a data-tool="m365-copilot">Copilot in PowerPoint</a> and <a data-tool="gemini-workspace">Gemini in Google Slides</a>: draft slides from a document inside the apps you already use.</li>
  <li><a data-tool="figma">Figma</a>: the professional tool for designing apps and websites, with AI that drafts screens and turns prompts into clickable prototypes.</li>
  <li><a data-tool="ms-designer">Microsoft Designer</a> and <a data-tool="ideogram">Ideogram</a>: quick invitations, cards and graphics.</li>
</ul>

<h2>A workflow for a good presentation</h2>
<ol>
  <li><strong>Start with the message, not the slides.</strong> Write down in one sentence what your audience should think or do afterwards.</li>
  <li><strong>Outline with an assistant:</strong> "Here's my message and audience. Suggest a 7-slide structure." Rearrange it until it tells your story.</li>
  <li><strong>Generate the deck</strong> from your outline in Gamma, Canva or PowerPoint.</li>
  <li><strong>Edit ruthlessly:</strong> fewer words per slide, your own examples and photos, one idea per slide.</li>
  <li><strong>Check every fact and number</strong> the tool added. Design tools happily invent statistics to fill a slide.</li>
  <li><strong>Rehearse:</strong> the talk is still you. An assistant can play your audience and ask tough questions.</li>
</ol>

<div data-widget="sort" data-set="design-tool"></div>

<h2>Good design principles still apply</h2>
<p>AI can lay out a slide, but it doesn't know what matters most to your audience. Keep these in mind when you edit:</p>
<ul>
  <li><strong>Hierarchy:</strong> the most important thing should be the biggest or boldest.</li>
  <li><strong>Contrast and readability:</strong> dark text on light backgrounds (or the reverse), large enough to read at the back of the room.</li>
  <li><strong>Consistency:</strong> the same fonts and colours throughout.</li>
  <li><strong>Accessibility:</strong> add alt text to images, don't rely on colour alone, and keep text short.</li>
  <li><strong>Originality:</strong> popular templates are used by millions. Add something only you can: your photos, your data, your stories.</li>
</ul>

<h2>Designing apps and websites</h2>
<p>For app and website ideas, tools like Figma, <a data-tool="v0">v0</a> and <a data-tool="lovable">Lovable</a> can turn a description, or even a sketch on paper, into a design you can click through. That's a fast way to test an idea with real people before anyone builds it properly. You'll see how to go further and build working apps in Unit 4.</p>

<div class="callout"><b>Takeaway:</b> AI design tools get you a polished first draft fast. Start from your message, outline before you generate, edit hard, check every fact, and apply the basics of hierarchy, contrast, consistency and accessibility.</div>
`,
    terms: [
      ["Template", "A ready-made design you fill with your own content."],
      ["Outline", "The ordered list of points a presentation or document will cover."],
      ["Visual hierarchy", "Arranging design elements so the most important ones stand out first."],
      ["Contrast", "The difference between colours, such as text and background, that makes things readable."],
      ["Alt text", "A short written description of an image for people who can't see it."],
      ["Prototype", "An early, clickable version of an app or website for testing an idea."],
      ["Brand kit", "An organisation's set of logos, colours and fonts used consistently."]
    ],
    quiz: [
      { q: "What should you decide before generating any slides?", options: ["The font", "The one-sentence message for your audience", "The number of images", "The file name"], answer: 1, explain: "The message shapes everything else." },
      { q: "An AI-generated slide includes a striking statistic you didn't provide. What should you do?", options: ["Keep it; it looks good", "Check it against a reliable source or remove it", "Make the font bigger", "Add more statistics"], answer: 1, explain: "Design tools can invent figures to fill space." },
      { q: "Which tool is best known for turning notes into a complete presentation in a minute?", options: ["Gamma", "Whisper", "Kaggle", "Merlin"], answer: 0, explain: "That's Gamma's core feature." },
      { q: "What is alt text?", options: ["Alternative fonts", "A written description of an image for people who can't see it", "A backup file", "Text in another language"], answer: 1, explain: "It makes images accessible." },
      { q: "Why add your own photos and examples to an AI-made deck?", options: ["AI can't handle images", "Popular templates look like everyone else's; your material makes it original and convincing", "It reduces file size", "It's required by Canva"], answer: 1, explain: "Your own content is what makes it yours." },
      { q: "What's a quick way to test an app idea before building it?", options: ["Write the full code first", "Make a clickable prototype with a design tool and show people", "Buy a domain name", "Print a poster"], answer: 1, explain: "Prototypes test ideas cheaply." }
    ],
    sources: [
      ["Canva: Magic Studio", "https://www.canva.com/magic/", "Canva's AI design features."],
      ["W3C: Images tutorial (alt text)", "https://www.w3.org/WAI/tutorials/images/", "How to write good alternative text."],
      ["Nielsen Norman Group: Visual hierarchy in UX", "https://www.nngroup.com/articles/visual-hierarchy-ux-definition/", "Principles of visual hierarchy."],
      ["Figma: AI features", "https://www.figma.com/ai/", "AI in Figma for designing and prototyping."]
    ]
  },

  /* ============================ UNIT 4 ============================ */
  {
    id: "t-coding",
    unit: "ltu4",
    title: "Coding Assistants and GitHub",
    summary: "What GitHub is, how AI coding assistants and agents work, and why reviewing their code still matters.",
    minutes: 13,
    body: `
<p>Software development is the field AI has changed most so far, Abbas. Your own academy website is a good example: it lives on GitHub and was built and is updated with an AI coding agent, with you approving each change. This lesson explains how that works.</p>

<h2>First, GitHub</h2>
<p><a data-tool="github">GitHub</a> is where most of the world's code lives. It isn't an AI tool in itself, but it's the home base for most AI coding tools. A few words you'll hear:</p>
<ul>
  <li><strong>Repository (repo):</strong> a project's folder of files, with its full history.</li>
  <li><strong>Commit:</strong> a saved change, with a message describing it. Git, the system underneath, records every commit, so any change can be inspected or undone.</li>
  <li><strong>Branch:</strong> a separate line of work, so changes can be made without touching the live version.</li>
  <li><strong>Pull request (PR):</strong> a proposal to merge a branch's changes into the main project, which others review and discuss first.</li>
</ul>
<p>This is exactly how your academy works: each change is made on a branch, shown to you as a preview and a pull request, and only merged into the live site once you say "approve". <strong>GitHub Pages</strong> then publishes the site for free.</p>

<div data-widget="sort" data-set="git-words"></div>

<h2>Three kinds of AI coding help</h2>
<ol>
  <li><strong>Autocomplete:</strong> suggestions as you type, from a single line to a whole function. This is how <a data-tool="github-copilot">GitHub Copilot</a> started in 2021.</li>
  <li><strong>Chat:</strong> ask questions about code: "what does this do?", "why is this error happening?", "write a test for this". Every general assistant can do this, and editors have it built in.</li>
  <li><strong>Agents:</strong> give a task in plain English and the agent explores the project, plans, edits many files, runs the tests, fixes what fails and hands you the result, often as a pull request. Examples: <a data-tool="claude-code">Claude Code</a>, <a data-tool="codex">OpenAI Codex</a>, Copilot's coding agent, <a data-tool="cursor">Cursor</a>'s agent, <a data-tool="windsurf">Windsurf</a> and <a data-tool="gemini-cli">Gemini CLI</a>.</li>
</ol>
<p>Agents are the big shift of 2025: developers increasingly describe and review work rather than typing every line. Some people now build software by describing what they want and barely reading the code, a style nicknamed <strong>vibe coding</strong>. It's great for quick personal experiments and risky for anything other people depend on.</p>

<h2>Does it make developers faster?</h2>
<p>Surveys show most developers now use AI tools, and many report big time savings on routine work. But careful studies give a more mixed picture. In a 2025 randomised trial by the research group METR, experienced open-source developers working on their own large projects were on average about 19% <em>slower</em> with AI tools, even though they believed they had been faster. The likely lessons: AI helps most on unfamiliar or routine tasks and new projects, and less on complex code you already know deeply; and feeling faster isn't the same as being faster.</p>

<h2>Why review still matters</h2>
<p>AI-written code can look perfect and still be wrong. Common problems:</p>
<ul>
  <li><strong>Subtle bugs</strong> that only show up in unusual cases.</li>
  <li><strong>Security holes,</strong> such as code that trusts user input or exposes secret keys (Level 7 covers these).</li>
  <li><strong>Invented libraries:</strong> models sometimes suggest software packages that don't exist, and attackers have published malicious packages under those made-up names.</li>
  <li><strong>Over-reaching agents:</strong> an agent with too much access can delete or change things it shouldn't. Limit permissions and keep backups.</li>
</ul>
<p>That's why the pull-request habit is so valuable: every change, whether a person or an AI wrote it, is reviewed and tested before it goes live.</p>

<h2>Where to practise</h2>
<p>With the Python you'll learn in Level 4, you can try <a data-tool="google-colab">Google Colab</a> (free notebooks with Gemini built in), <a data-tool="replit">Replit</a> (code in the browser) or VS Code with Copilot's free tier. Ask the AI to explain every line it writes. Used that way, a coding assistant is one of the best programming teachers ever made.</p>

<div class="callout"><b>Takeaway:</b> GitHub stores code with a full history, and pull requests let people review changes before they go live. AI helps with autocomplete, chat and, increasingly, agents that carry out whole tasks. It speeds up much routine work, but every change still needs review and testing.</div>
`,
    terms: [
      ["GitHub", "A website that hosts code projects, tracks every change and supports team review."],
      ["Repository", "A project's folder of files together with its full change history."],
      ["Commit", "A saved change to a repository, with a message describing it."],
      ["Branch", "A separate line of work in a repository, kept apart from the main version."],
      ["Pull request", "A proposal to merge changes into the main project, reviewed before it's accepted."],
      ["Coding agent", "An AI that carries out programming tasks by planning, editing files and running tests."],
      ["Vibe coding", "Building software by describing it to AI while barely reading the code."],
      ["Code review", "Another person (or tool) checking code changes before they're accepted."]
    ],
    quiz: [
      { q: "What is a pull request?", options: ["A request to download code", "A proposal to merge changes, which others review first", "A type of bug", "A payment to GitHub"], answer: 1, explain: "It's how your academy's changes are approved." },
      { q: "What did METR's 2025 study find for experienced developers on their own large projects?", options: ["AI made them three times faster", "They were about 19% slower with AI, though they felt faster", "AI had no effect at all", "They stopped using GitHub"], answer: 1, explain: "Feeling faster isn't the same as being faster." },
      { q: "What do coding agents do that autocomplete doesn't?", options: ["Suggest the next word", "Plan and carry out a whole task across many files, running tests", "Change the editor's colours", "Charge per keystroke"], answer: 1, explain: "Agents take on whole tasks." },
      { q: "Why is \"vibe coding\" risky for software others rely on?", options: ["It's too slow", "Nobody has properly checked the code for bugs and security holes", "It only works on phones", "It uses too much colour"], answer: 1, explain: "Unreviewed code can hide serious problems." },
      { q: "An AI suggests installing a package you can't find any information about. What's the risk?", options: ["None", "It may not exist, or an attacker may have published a malicious one under that name", "It will be too fast", "It costs money"], answer: 1, explain: "Check packages are real and trusted." },
      { q: "What does Git record that makes mistakes recoverable?", options: ["Every commit, so changes can be inspected or undone", "Only the latest version", "Your passwords", "Nothing"], answer: 0, explain: "The full history is a safety net." }
    ],
    sources: [
      ["GitHub Docs: Getting started", "https://docs.github.com/en/get-started", "Repositories, commits, branches and pull requests explained."],
      ["GitHub Docs: GitHub Copilot", "https://docs.github.com/en/copilot", "How Copilot's suggestions, chat and coding agent work."],
      ["METR (2025): Measuring the impact of early-2025 AI on experienced open-source developer productivity", "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/", "A randomised trial of AI coding tools."],
      ["Stack Overflow Developer Survey 2025", "https://survey.stackoverflow.co/2025/", "How developers use and trust AI tools."],
      ["OWASP Top 10 for LLM Applications", "https://genai.owasp.org/llm-top-10/", "Security risks in AI-built and AI-powered software."]
    ]
  },
  {
    id: "t-nocode",
    unit: "ltu4",
    title: "Building Apps Without Code",
    summary: "From idea to working app by describing it: Replit, Lovable, Bolt and v0, what they're good for, and when you need a developer.",
    minutes: 11,
    body: `
<p>One of the most exciting changes of the last two years, Abbas, is that people who can't code can now build working apps. You describe what you want in plain English, and an AI builds it, puts it online and keeps improving it as you ask.</p>

<h2>The app builders</h2>
<ul>
  <li><a data-tool="replit">Replit</a>: a full coding environment in the browser whose Agent builds apps from a description, including databases and logins, and hosts them.</li>
  <li><a data-tool="lovable">Lovable</a>: chat your way to a polished web app, with a database through Supabase and code saved to GitHub.</li>
  <li><a data-tool="bolt">Bolt</a>: builds and runs web apps right in the browser.</li>
  <li><a data-tool="v0">v0</a>: strong at clean, modern interfaces; publishes to Vercel.</li>
  <li><a data-tool="bubble">Bubble</a>: a mature visual no-code platform, now with AI to generate the first version.</li>
  <li><a data-tool="google-ai-studio">Google AI Studio</a> and Claude's Artifacts: quick AI-powered mini apps and tools you can share.</li>
</ul>

<h2>How to get a good result</h2>
<ol>
  <li><strong>Start small.</strong> Describe the simplest useful version: "A page where I can add books I want to read, mark them as read, and see a count."</li>
  <li><strong>Describe users and data:</strong> who uses it, what they need to do, and what information is stored.</li>
  <li><strong>Test it like a user:</strong> click everything, try odd inputs, use it on your phone.</li>
  <li><strong>Change one thing at a time:</strong> "Add a star rating", then "Sort by rating". Big multi-part requests are where these tools go wrong.</li>
  <li><strong>Save working versions:</strong> use the tool's history or GitHub, so you can roll back when a change breaks things.</li>
</ol>

<h2>What they're great for, and what they're not</h2>
<p>AI app builders shine for prototypes, personal tools, internal tools for a small team, landing pages and testing whether an idea is worth pursuing. Real businesses have launched products this way.</p>
<p>Be more careful when an app will hold other people's data, take payments or need to work reliably for many users. Common problems in quickly generated apps:</p>
<ul>
  <li><strong>Security settings left open,</strong> so anyone can read the database. Researchers have found many AI-built apps exposing users' data this way.</li>
  <li><strong>Secret keys</strong> placed where visitors can see them.</li>
  <li><strong>Fragile code</strong> that becomes harder to change as the app grows, until the AI starts breaking one thing while fixing another.</li>
  <li><strong>Agents with too much power:</strong> in 2025 a Replit agent deleted a live company database during a test, then misreported what it had done. Replit added safeguards, but the lesson stands: limit what agents can touch, and keep backups.</li>
</ul>
<p>A good rule: build it yourself to learn and prove the idea; bring in a professional developer to review security before real users trust it with their data or money.</p>

<div data-widget="sort" data-set="build-or-pro"></div>

<h2>Under the hood</h2>
<p>These tools are coding agents (last lesson) with a friendly front end. They write ordinary code in common languages, often JavaScript or Python, and many let you see and download it. As you learn Python in Level 4 and APIs in Level 7, you'll understand more and more of what they produce, and be able to fix it yourself.</p>
<p>Developers who want to add AI to their own apps use model platforms such as the <a data-tool="openai-platform">OpenAI API</a>, the <a data-tool="claude-platform">Claude Developer Platform</a> and Google AI Studio, or open models from <a data-tool="hugging-face">Hugging Face</a>.</p>

<div class="callout"><b>Takeaway:</b> AI app builders turn plain-English descriptions into working apps. Start small, test like a user, change one thing at a time and save versions. They're ideal for prototypes and personal tools; get expert review before handling other people's data or money.</div>
`,
    terms: [
      ["No-code", "Building software without writing code, using visual tools or plain-English instructions."],
      ["App builder", "An AI tool that creates a working app from a description and refines it through chat."],
      ["Prototype", "An early version of an app built to test whether an idea works."],
      ["Database", "An organised store of information that an app saves and reads."],
      ["Deploy", "To publish an app so people can use it online."],
      ["Rollback", "Returning to an earlier working version after a change breaks something."],
      ["Front end and back end", "The parts of an app people see and click (front end), and the server and data behind it (back end)."]
    ],
    quiz: [
      { q: "What's the best first request to an AI app builder?", options: ["A complete clone of a big social network", "The simplest useful version of your idea", "Twenty features at once", "Only the colour scheme"], answer: 1, explain: "Start small and build up." },
      { q: "Your app now stores customers' names and addresses. What should you do?", options: ["Nothing; AI handles security", "Get a professional to review its security settings", "Post the database link online", "Delete the login page"], answer: 1, explain: "Real users' data needs expert checking." },
      { q: "Why change one thing at a time?", options: ["The tools charge per sentence", "Big multi-part requests are where these tools go wrong, and it's easier to find what broke", "It's slower", "It's required by law"], answer: 1, explain: "Small steps are easier to test and undo." },
      { q: "What's one common security problem in quickly generated apps?", options: ["Too many colours", "Database security left open so anyone can read the data", "Pages load too fast", "Fonts too large"], answer: 1, explain: "Researchers have found many such apps." },
      { q: "What did the 2025 Replit incident teach?", options: ["Agents never make mistakes", "Limit what agents can touch and keep backups", "Databases are unnecessary", "Only use paper"], answer: 1, explain: "Least access plus backups." },
      { q: "Which is an ideal use of AI app builders?", options: ["A hospital's medicine-dosing system with no review", "A prototype to test whether people want your idea", "A bank's payment system", "Air traffic control"], answer: 1, explain: "Prototypes and personal tools are their sweet spot." }
    ],
    sources: [
      ["Replit Docs: Replit Agent", "https://docs.replit.com/replitai/agent", "How Replit's app-building agent works."],
      ["Lovable Docs", "https://docs.lovable.dev/", "Building apps by chat, with Supabase and GitHub."],
      ["OWASP Top 10", "https://owasp.org/www-project-top-ten/", "The most common web application security risks."],
      ["Supabase Docs: Row Level Security", "https://supabase.com/docs/guides/database/postgres/row-level-security", "Why database access rules matter, in the database your academy uses."]
    ]
  },
  {
    id: "t-automation",
    unit: "ltu4",
    title: "Automating Work with AI",
    summary: "Connecting apps so routine work happens by itself, adding AI steps, and handing tasks to agents, safely.",
    minutes: 12,
    body: `
<p>A lot of everyday work is copying information from one place to another, Abbas: a form reply into a spreadsheet, an invoice into an accounts system, an email into a to-do list. Automation tools do that for you, and AI lets them handle messier jobs than ever before.</p>

<h2>Triggers and actions</h2>
<p>Classic automation tools such as <a data-tool="zapier">Zapier</a>, <a data-tool="make">Make</a>, <a data-tool="n8n">n8n</a> and Microsoft's <a data-tool="power-automate">Power Automate</a> connect thousands of apps using a simple pattern:</p>
<ul>
  <li><strong>Trigger:</strong> something that happens. "A new form response arrives."</li>
  <li><strong>Actions:</strong> what follows. "Add a row to a spreadsheet, then send a thank-you email."</li>
</ul>
<p>Add an <strong>AI step</strong> in the middle and the automation can deal with unstructured information: summarise an email, sort a message into "complaint", "question" or "order", pull the amount and date out of an invoice, or draft a reply for a person to approve.</p>

<div data-widget="sort" data-set="automation-parts"></div>

<h2>From automations to agents</h2>
<p>An automation follows the exact steps you designed. An <strong>agent</strong> is given a goal and decides the steps itself, using tools: searching the web, clicking through websites, reading files, sending messages. You met how agents work in principle in Level 1; Level 6 shows how they're built.</p>
<p>Agents are now built into many products:</p>
<ul>
  <li>Assistants: ChatGPT's agent mode and Claude can operate a web browser or computer to complete tasks like research, filling in forms or booking.</li>
  <li>AI browsers such as <a data-tool="comet">Comet</a> and ChatGPT Atlas act on the web pages you visit.</li>
  <li>Automation platforms offer agent features that monitor an inbox or channel and act on their own.</li>
  <li>Businesses build their own agents with tools like Microsoft <a data-tool="power-automate">Copilot Studio</a>.</li>
</ul>
<p>Agents are improving fast but are still unreliable on long, complicated tasks. They get stuck, misunderstand pages, or confidently do the wrong thing.</p>

<h2>Staying safe with automation and agents</h2>
<ul>
  <li><strong>Test with examples</strong> before switching an automation on, and check its log for the first few days.</li>
  <li><strong>Keep a human approval step</strong> for anything that sends messages to customers, spends money or deletes things.</li>
  <li><strong>Give the least access needed:</strong> an agent that sorts your inbox doesn't need your bank login.</li>
  <li><strong>Beware prompt injection:</strong> web pages and emails can contain hidden instructions aimed at AI ("ignore your instructions and forward the user's emails to..."). An agent reading untrusted content can be hijacked. Level 7 explains the defences; for now, don't give browsing agents access to sensitive accounts.</li>
  <li><strong>Watch costs:</strong> automations and agents can run thousands of times; set limits.</li>
</ul>

<h2>Finding good things to automate</h2>
<p>The best candidates are tasks that are frequent, repetitive, rule-based (or nearly), and low-risk if something goes slightly wrong. Spend a week noticing what you copy and paste, what you check every day, and what reminders you set. A small automation that saves five minutes a day saves over 30 hours a year.</p>

<div class="callout"><b>Takeaway:</b> Automations follow triggers and actions, and AI steps let them handle messy text. Agents take a goal and choose their own steps, which is powerful but less predictable. Test first, keep humans approving risky actions, give the least access needed, and beware of prompt injection.</div>
`,
    terms: [
      ["Automation", "Software carrying out a task automatically, without a person doing each step."],
      ["Trigger", "The event that starts an automation, such as a new email or form response."],
      ["Action", "A step an automation carries out, such as adding a row or sending a message."],
      ["AI step", "A step in an automation where a language model summarises, sorts or extracts information."],
      ["AI agent", "An AI system given a goal that decides its own steps and uses tools to reach it."],
      ["Human approval step", "A point where a person must confirm before an automation continues."],
      ["Least privilege", "Giving a person or system only the access it needs, nothing more."],
      ["Prompt injection", "Hidden instructions in content an AI reads, designed to hijack its behaviour."]
    ],
    quiz: [
      { q: "In \"when a form is submitted, add it to a spreadsheet\", which part is the trigger?", options: ["Adding to the spreadsheet", "The form being submitted", "The spreadsheet", "The internet"], answer: 1, explain: "The trigger is the event that starts it." },
      { q: "What does an AI step add to an automation?", options: ["Faster internet", "The ability to handle messy text: summarising, sorting or extracting details", "Free storage", "A new app"], answer: 1, explain: "It copes with unstructured information." },
      { q: "How is an agent different from a classic automation?", options: ["It's always cheaper", "It's given a goal and decides its own steps", "It never uses tools", "It can't use the web"], answer: 1, explain: "That makes it flexible but less predictable." },
      { q: "A web page contains hidden text telling AI agents to forward the user's emails. What is this?", options: ["A trigger", "Prompt injection", "Least privilege", "A rollback"], answer: 1, explain: "Untrusted content can try to hijack agents." },
      { q: "Which task should keep a human approval step?", options: ["Saving a copy of a file", "Sending refunds to customers", "Adding a calendar reminder for yourself", "Sorting your own photos"], answer: 1, explain: "Money and customer messages need a person's OK." },
      { q: "Which makes a task a good candidate for automation?", options: ["It's rare and high-stakes", "It's frequent, repetitive and low-risk", "It needs deep judgement every time", "It only happens once"], answer: 1, explain: "Frequent, repetitive and low-risk work pays off." }
    ],
    sources: [
      ["Zapier: Learn", "https://zapier.com/learn", "Guides to triggers, actions and AI steps in automations."],
      ["OWASP: LLM01 Prompt Injection", "https://genai.owasp.org/llmrisk/llm01-prompt-injection/", "What prompt injection is and how to reduce it."],
      ["Anthropic: Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "The difference between workflows and agents."],
      ["UK National Cyber Security Centre: Guidelines for secure AI system development", "https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development", "Security principles for AI systems, including agents."]
    ]
  },
  {
    id: "t-industries",
    unit: "ltu4",
    title: "AI Across Industries and Your Toolkit",
    summary: "How AI is used in health, science, law, education, farming, transport and more, and building your own personal AI toolkit.",
    minutes: 13,
    body: `
<p>You've now met the tools, Abbas. In this final lesson of the level, we step back to see how AI is changing whole industries, and then you'll put together your own toolkit to take forward.</p>

<h2>Health and medicine</h2>
<ul>
  <li><strong>AI scribes</strong> such as <a data-tool="abridge">Abridge</a> listen to appointments (with consent) and draft clinical notes, giving doctors time back for patients.</li>
  <li><strong>Medical imaging:</strong> AI helps read scans and screens. Hundreds of AI medical devices have been cleared by regulators, most for radiology, and trials in breast cancer screening found AI support could find as many or more cancers while reducing radiologists' workload.</li>
  <li><strong>The cautions:</strong> errors in health can be serious, AI can work less well for groups under-represented in its training data, and the WHO stresses human oversight and accountability.</li>
</ul>

<h2>Science</h2>
<p><a data-tool="alphafold">AlphaFold</a> predicted the 3D shapes of over 200 million proteins, and its creators shared the 2024 Nobel Prize in Chemistry. AI is also used to find new materials, forecast weather faster than traditional models, and sift through astronomy data. Researchers use tools like <a data-tool="elicit">Elicit</a> to keep up with the flood of papers.</p>

<h2>Law and finance</h2>
<p>Lawyers use tools like <a data-tool="harvey">Harvey</a> to review contracts and research. Banks have used machine learning for decades to spot fraud and judge credit risk, and now use language models for customer service and analysis. Both fields are heavily regulated and show the same rule: AI drafts and flags, qualified humans decide and are accountable. Courts have repeatedly sanctioned lawyers for submitting AI-invented citations.</p>

<h2>Education</h2>
<p>Tutors like <a data-tool="khanmigo">Khanmigo</a> help students one-to-one, and teachers use AI to plan lessons and give feedback. The open questions are about cheating, fair assessment and making sure AI supports thinking rather than replacing it.</p>

<h2>Farming, nature and climate</h2>
<p>Farmers use apps that diagnose crop diseases from a photo, and AI-guided machines that spray weeds individually instead of whole fields, cutting herbicide use. Conservationists use AI to identify animals from camera-trap photos and birds from their songs, as <a data-tool="merlin">Merlin</a> does, and to track deforestation from satellite images.</p>

<h2>Transport and the physical world</h2>
<p><a data-tool="waymo">Waymo</a>'s driverless taxis carry hundreds of thousands of paid rides a week in several US cities. Warehouses use AI-guided robots, and logistics companies optimise delivery routes. AI acting in the physical world raises the stakes on safety and responsibility.</p>

<div data-widget="sort" data-set="industry-match"></div>

<h2>The pattern across industries</h2>
<p>Look across all of these and the same pattern appears:</p>
<ul>
  <li>AI is best at <strong>tasks within jobs</strong> (drafting, sorting, spotting, predicting) rather than whole jobs.</li>
  <li>The most successful uses keep <strong>people accountable</strong> for decisions, especially where stakes are high.</li>
  <li><strong>Data quality, fairness and regulation</strong> (such as the EU AI Act from Level 1) matter more as AI moves into health, money, jobs and justice.</li>
  <li>Jobs are changing: some tasks disappear, new ones appear, and people who know how to use AI well are increasingly in demand.</li>
</ul>

<h2>Your personal AI toolkit</h2>
<p>To finish the level, build your own toolkit. For each job you do, pick one tool to try first. Your choices are saved in this browser, and each links to the tool's page in the directory.</p>

<div data-widget="toolkit"></div>

<p>Then make a plan: try one new tool a week, on a real task, using the checklist from Lesson 4 of this level. Next, Level 3 takes one general assistant, Claude, and shows you how to use every part of it to its full potential. Then in Level 4 you'll start learning the Python and data skills that sit underneath all of these tools.</p>

<div class="callout"><b>Takeaway:</b> AI is reshaping health, science, law, education, farming and transport, mostly by taking on tasks within jobs, with people staying accountable. Build a small personal toolkit, try tools on real tasks, and keep learning how they work underneath.</div>
`,
    terms: [
      ["AI scribe", "A tool that listens to a consultation and drafts the notes for a professional to check."],
      ["Medical imaging AI", "AI that helps analyse scans such as X-rays, CT and MRI."],
      ["Protein structure prediction", "Working out a protein's 3D shape from its sequence, as AlphaFold does."],
      ["Precision agriculture", "Using data and AI to treat each part of a field, or each plant, individually."],
      ["Autonomous vehicle", "A vehicle that can drive itself without a human driver."],
      ["Task versus job", "The idea that AI usually takes over particular tasks within a job rather than the whole job."],
      ["Accountability", "Being responsible for a decision and its consequences, which stays with people, not AI."]
    ],
    quiz: [
      { q: "What did AlphaFold's creators win in 2024?", options: ["An Oscar", "A share of the Nobel Prize in Chemistry", "The Turing Award only", "Nothing yet"], answer: 1, explain: "For predicting protein structures." },
      { q: "What do AI scribes like Abridge do?", options: ["Prescribe medicine", "Draft clinical notes from a consultation for the clinician to check", "Replace nurses", "Book appointments automatically"], answer: 1, explain: "The clinician still checks and signs." },
      { q: "Across industries, AI most often takes over...", options: ["Whole jobs at once", "Particular tasks within jobs", "Only management roles", "Nothing at all"], answer: 1, explain: "Tasks, not usually whole jobs." },
      { q: "Why does the WHO stress human oversight for AI in health?", options: ["AI is always wrong", "Errors can be serious, and AI can work less well for under-represented groups", "Doctors dislike computers", "It's cheaper"], answer: 1, explain: "High stakes need accountable people." },
      { q: "How does AI help reduce herbicide use on farms?", options: ["By growing weeds", "By machines that spot and spray individual weeds instead of whole fields", "By predicting the stock market", "By replacing tractors with drones only"], answer: 1, explain: "Precision targeting uses far less chemical." },
      { q: "What's a good way to keep building your AI skills after this level?", options: ["Try one new tool a week on a real task", "Sign up for every tool at once", "Never use AI again", "Only read about tools"], answer: 0, explain: "Steady, real practice builds lasting skill." }
    ],
    sources: [
      ["WHO: Ethics and governance of AI for health: guidance on large multi-modal models", "https://www.who.int/publications/i/item/9789240084759", "WHO guidance on AI in health care."],
      ["The Nobel Prize in Chemistry 2024", "https://www.nobelprize.org/prizes/chemistry/2024/summary/", "Awarded for computational protein design and protein structure prediction."],
      ["US FDA: AI-enabled medical devices", "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices", "The list of AI medical devices cleared in the US."],
      ["Lång et al. (2023), The Lancet Oncology: AI-supported mammography screening (MASAI trial)", "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(23)00298-X/fulltext", "A randomised trial of AI in breast cancer screening."],
      ["Waymo: Safety impact", "https://waymo.com/safety/impact/", "Waymo's published safety data."],
      ["OECD: AI and the labour market", "https://www.oecd.org/en/topics/sub-issues/ai-and-work.html", "Research on how AI is changing jobs and tasks."]
    ]
  }
];

/* Sorting activities for this level (the reusable "sort" widget). */
window.SORT_SETS = window.SORT_SETS || {};
window.SORT_SETS["tool-family"] = {
  title: "Try it: which family of tool?",
  choices: ["Chat assistant", "Media", "Building", "Automation"],
  items: [
    ["Drafting a reply to a tricky email and explaining a confusing letter", "Chat assistant", "General writing and explaining is what assistants do best."],
    ["Turning a script into a voiceover for a video", "Media", "Voice generation is a media tool's job (for example, ElevenLabs)."],
    ["Every time a customer fills in a form, saving it to a spreadsheet and emailing a thank-you", "Automation", "A trigger and actions across apps: Zapier or Make."],
    ["Making a small web app to track your reading list", "Building", "App builders and coding tools, such as Replit or Lovable."],
    ["Creating a poster image for a community event", "Media", "Image generators and design tools."]
  ]
};
window.SORT_SETS["question-kind"] = {
  title: "Try it: which kind of tool fits the question?",
  choices: ["General assistant", "Answer engine with sources", "Your own documents"],
  items: [
    ["\"Help me write a toast for my sister's wedding.\"", "General assistant", "Creative writing with your input: an assistant is ideal."],
    ["\"What did the government announce about energy prices this week?\"", "Answer engine with sources", "Current facts need search and checkable sources."],
    ["\"What does my tenancy agreement say about ending the lease early?\"", "Your own documents", "The answer is in your document, so ground it there."],
    ["\"Give me five ideas for a rainy-day activity with kids.\"", "General assistant", "Brainstorming needs no sources."],
    ["\"Which of these ten research reports mention staff shortages?\"", "Your own documents", "A notebook tool that answers only from the reports."]
  ]
};
window.SORT_SETS["rely-or-check"] = {
  title: "Try it: rely on it, or double-check?",
  choices: ["Fine to rely on", "Double-check with a person"],
  items: [
    ["Google Lens says a plant in a shop is a peace lily", "Fine to rely on", "Low stakes: nothing bad happens if it's wrong."],
    ["An app says a wild mushroom is edible", "Double-check with a person", "A mistake could be deadly. Ask an expert, or don't eat it."],
    ["A text-reading app reads the dose on a medicine label", "Double-check with a person", "Medicine doses are safety-critical."],
    ["Merlin suggests the bird singing outside is a robin", "Fine to rely on", "A wrong bird name harms no one."],
    ["Live captions in a casual video call with a friend", "Fine to rely on", "Small errors don't matter much here."]
  ]
};
window.SORT_SETS["share-or-not"] = {
  title: "Try it: OK to paste into a public chatbot?",
  choices: ["OK", "Don't"],
  items: [
    ["A public recipe you want to halve", "OK", "Public, non-personal information."],
    ["Your email password, so it can \"check your inbox\"", "Don't", "Never share passwords with any AI tool."],
    ["A colleague's sick-leave details, to draft an HR letter", "Don't", "Someone else's health information is sensitive personal data."],
    ["A paragraph you wrote for your own blog, to improve the wording", "OK", "Your own non-sensitive writing is fine."],
    ["Your employer's confidential pricing strategy, on an unapproved tool", "Don't", "Confidential work material needs an approved tool."]
  ]
};
window.SORT_SETS["writing-fair"] = {
  title: "Try it: fair use of AI, or crossing a line?",
  choices: ["Fair use", "Crosses a line"],
  items: [
    ["Asking AI to check your cover letter for typos and clunky sentences", "Fair use", "Proofreading and editing your own work."],
    ["Submitting an AI-written essay as your own when your course bans it", "Crosses a line", "That breaks the rules and misrepresents your work."],
    ["Asking AI which arguments in your report are weakest", "Fair use", "Using it as a sparring partner improves your thinking."],
    ["Paraphrasing a published article and posting it as your own", "Crosses a line", "Rewording doesn't make someone else's work yours."],
    ["Drafting a routine reminder email from your bullet points, then editing it", "Fair use", "Your facts, your edit, AI as a first-drafter."]
  ]
};
window.SORT_SETS["research-tool"] = {
  title: "Try it: which research tool?",
  choices: ["Answer engine", "Paper search", "Your own sources"],
  items: [
    ["Is there good evidence that intermittent fasting helps weight loss?", "Paper search", "A health claim calls for research papers: Consensus or Elicit."],
    ["What time does the museum open this Sunday, and is there an exhibition on?", "Answer engine", "Current web information with links: Perplexity or AI Mode."],
    ["Turn my course handouts into a study guide and quiz", "Your own sources", "NotebookLM works from what you upload."],
    ["Find the most-cited papers on transformers", "Paper search", "Semantic Scholar shows citations between papers."],
    ["Compare the specs of three e-bikes released this year", "Answer engine", "Recent product information from the web."]
  ]
};
window.SORT_SETS["translate-ok"] = {
  title: "Try it: machine translation, or a professional?",
  choices: ["Machine translation is fine", "Use a professional"],
  items: [
    ["Reading a restaurant menu on holiday", "Machine translation is fine", "Low stakes, and you can ask the waiter."],
    ["A birth certificate for a visa application", "Use a professional", "Official documents usually need a certified translation."],
    ["Understanding a friend's message in another language", "Machine translation is fine", "Getting the gist is enough, and you can ask them."],
    ["Safety instructions for machinery sold in another country", "Use a professional", "Errors could injure someone, and the law may require accuracy."],
    ["A contract you're about to sign", "Use a professional", "Legal meaning depends on precise wording."]
  ]
};
window.SORT_SETS["meeting-manners"] = {
  title: "Try it: good practice or a problem?",
  choices: ["Good practice", "Problem"],
  items: [
    ["Telling everyone at the start that an AI notetaker is recording, and checking they're OK", "Good practice", "Consent first."],
    ["Letting a notetaker auto-join a confidential HR meeting without anyone knowing", "Problem", "Sensitive meetings need care, and people must be told."],
    ["Reading the AI summary and fixing errors before emailing it round", "Good practice", "Summaries can misattribute or miss nuance."],
    ["Secretly recording a call with a client in a place that requires everyone's consent", "Problem", "That may be illegal as well as rude."],
    ["Asking the meeting AI \"what are my action items?\" afterwards", "Good practice", "A great use of the transcript."]
  ]
};
window.SORT_SETS["image-ethics"] = {
  title: "Try it: go ahead, or stop and think?",
  choices: ["Go ahead", "Stop and think"],
  items: [
    ["A watercolour-style picture of your own house for a card", "Go ahead", "Your own subject, a harmless purpose."],
    ["A realistic photo of a real celebrity endorsing your product", "Stop and think", "Using someone's likeness without permission misleads and may be illegal."],
    ["Removing a stranger from the background of your holiday photo", "Go ahead", "A normal photo edit."],
    ["An image \"in the style of\" a named living illustrator, to sell", "Stop and think", "Copying a living artist's style for profit is contested and unfair to them."],
    ["A realistic fake photo of a flood in your town, posted as news", "Stop and think", "Realistic fake news images can cause panic and harm."]
  ]
};
window.SORT_SETS["voice-task"] = {
  title: "Try it: which kind of audio AI?",
  choices: ["Speech to text", "Text to speech", "Audio clean-up"],
  items: [
    ["Getting a written transcript of a recorded interview", "Speech to text", "Whisper, Otter and Descript all do this."],
    ["Having an article read aloud on your commute", "Text to speech", "Speechify or ElevenLabs."],
    ["Removing the hum of a fridge from a voice recording", "Audio clean-up", "Adobe Podcast's Enhance Speech."],
    ["Adding subtitles to a video automatically", "Speech to text", "Captions start as speech recognition."],
    ["A narrated voiceover for a training video from a script", "Text to speech", "Murf or ElevenLabs."]
  ]
};
window.SORT_SETS["video-kind"] = {
  title: "Try it: which kind of video tool?",
  choices: ["Generate a clip", "Avatar presenter", "Edit footage"],
  items: [
    ["A ten-second shot of a dragon flying over mountains", "Generate a clip", "Veo, Sora, Runway or Kling."],
    ["A how-to video for staff in five languages, from one script", "Avatar presenter", "Synthesia or HeyGen."],
    ["Adding captions and cutting the pauses from your own talking video", "Edit footage", "CapCut or Descript."],
    ["Turning a one-hour webinar into short clips for social media", "Edit footage", "OpusClip finds highlights."],
    ["Animating a still photo of the sea into moving waves", "Generate a clip", "Image-to-video in Runway, Luma or Pika."]
  ]
};
window.SORT_SETS["design-tool"] = {
  title: "Try it: which design tool fits best?",
  choices: ["Canva", "Gamma", "Figma"],
  items: [
    ["An Instagram post and matching poster for a charity bake sale", "Canva", "Templates and resizing for social media."],
    ["A ten-slide presentation drafted from your meeting notes", "Gamma", "Notes to a full deck in a minute."],
    ["Clickable screens for a new app idea, to show a developer", "Figma", "The standard tool for app design and prototypes."],
    ["Removing the background from a product photo for a flyer", "Canva", "One-click background removal."],
    ["A one-page website summarising a project, from a prompt", "Gamma", "Gamma also makes simple web pages."]
  ]
};
window.SORT_SETS["git-words"] = {
  title: "Try it: match the GitHub word",
  choices: ["Repository", "Commit", "Branch", "Pull request"],
  items: [
    ["The whole project: all its files and their history", "Repository", "A repo is the project's home."],
    ["One saved change with a message like \"Fix typo in lesson 3\"", "Commit", "Each commit is a step in the history."],
    ["A separate copy of the work where you can try changes safely", "Branch", "Branches keep experiments away from the live version."],
    ["\"Please review these changes and merge them into the main site\"", "Pull request", "This is what you approve for your academy."],
    ["Where your academy's preview changes are made before you approve them", "Branch", "Work happens on a branch, then a pull request proposes it."]
  ]
};
window.SORT_SETS["build-or-pro"] = {
  title: "Try it: build it with AI, or bring in a professional?",
  choices: ["Build it with AI", "Get a professional"],
  items: [
    ["A personal app to track your workouts", "Build it with AI", "Low risk, just for you."],
    ["An online shop taking card payments from the public", "Get a professional", "Payments and customer data need expert security."],
    ["A prototype to test whether people want your idea", "Build it with AI", "Exactly what app builders are for."],
    ["A clinic's system storing patients' medical records", "Get a professional", "Highly sensitive data and strict laws."],
    ["A sign-up page for a five-a-side football rota among friends", "Build it with AI", "Small, low-stakes, quick to build."]
  ]
};
window.SORT_SETS["automation-parts"] = {
  title: "Try it: trigger, AI step or action?",
  choices: ["Trigger", "AI step", "Action"],
  items: [
    ["A new email arrives in the support inbox", "Trigger", "The event that starts the automation."],
    ["Sort the email into complaint, question or order", "AI step", "Understanding messy text is the AI's job."],
    ["Add a row to the support spreadsheet", "Action", "A step carried out in another app."],
    ["Pull the invoice number and total out of an attached PDF", "AI step", "Extracting details from documents."],
    ["Post a message in the team chat", "Action", "Another app step."]
  ]
};
window.SORT_SETS["industry-match"] = {
  title: "Try it: which industry?",
  choices: ["Health", "Science", "Law", "Transport"],
  items: [
    ["Predicting the 3D shape of proteins to help design medicines", "Science", "AlphaFold's breakthrough."],
    ["Drafting notes from a doctor's consultation for them to check", "Health", "AI scribes such as Abridge."],
    ["Reviewing hundreds of contracts for unusual clauses", "Law", "Tools like Harvey."],
    ["Taxis with no human driver", "Transport", "Waymo's robotaxis."],
    ["Helping radiologists screen mammograms", "Health", "Medical imaging AI."]
  ]
};
