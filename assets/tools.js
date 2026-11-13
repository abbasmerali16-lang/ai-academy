/* The AI tools directory: real AI tools, grouped by what they're for.
   Each tool gets its own page (tool.html?id=...). Written in our own words; prices and features
   change often, so every page points to the maker's own site for the latest details.
   Fields: id, name, maker, cat, price, blurb (one line, shown on hover), what, uses, good, watch,
   start (first steps), tryit (a first thing to try), alts (other tool ids), url, lesson (lesson id). */
window.TOOL_CATS = [
  { id: "chat", name: "Chat assistants", blurb: "All-round assistants you talk to in plain language: they write, explain, summarise, plan and more." },
  { id: "research", name: "Search and research", blurb: "Tools that find information and show where it came from, from web answers to scientific papers." },
  { id: "writing", name: "Writing and editing", blurb: "Help with spelling, tone, rewording and longer pieces of writing." },
  { id: "language", name: "Translation and languages", blurb: "Translate text, speech and photos, or learn a new language with an AI tutor." },
  { id: "voice", name: "Voice, speech and audio", blurb: "Turn speech into text and text into natural speech, clean up recordings and edit audio." },
  { id: "meetings", name: "Meetings and office work", blurb: "Meeting notes, email, documents and spreadsheets with AI built in." },
  { id: "images", name: "Images", blurb: "Create pictures from a description, or edit and extend photos." },
  { id: "video", name: "Video", blurb: "Generate video clips, make presenter videos with AI avatars, and edit faster." },
  { id: "music", name: "Music", blurb: "Create songs and backing tracks from a description." },
  { id: "design", name: "Design and presentations", blurb: "Slides, social posts, posters and app designs, drafted with AI." },
  { id: "coding", name: "Coding", blurb: "Assistants that write, explain and fix code, plus GitHub, where most code lives." },
  { id: "nocode", name: "Building apps without code", blurb: "Describe an app or website in plain English and get a working version." },
  { id: "automation", name: "Automation and agents", blurb: "Connect your apps and let AI carry out multi-step jobs for you." },
  { id: "builders", name: "Models and platforms for builders", blurb: "Where developers find models, run them, and call them from their own programs." },
  { id: "learning", name: "Learning and study", blurb: "Tutors, maths helpers and study tools." },
  { id: "everyday", name: "Everyday and accessibility", blurb: "AI in your phone, your home and your camera, including tools for blind and low-vision people." },
  { id: "industry", name: "Specialist and industry", blurb: "AI built for one field: medicine, law, science, nature and transport." }
];

window.AI_TOOLS = [
  /* ---------------- Chat assistants ---------------- */
  {
    id: "chatgpt", name: "ChatGPT", maker: "OpenAI", cat: "chat", price: "Free + paid plans",
    blurb: "The best-known AI assistant: chat, write, analyse files, make images, search the web and talk by voice.",
    what: "ChatGPT is OpenAI's chat assistant, launched in November 2022 and now used by hundreds of millions of people every week. You type or speak a request and it replies in plain language. Behind it sit OpenAI's GPT family of models, and it has grown into a whole toolbox: web search, file and data analysis, image generation, voice conversations, a research mode that writes long reports, and an agent mode that can carry out tasks in a browser.",
    uses: ["Drafting emails, letters, posts and reports", "Explaining a topic at the level you ask for, then quizzing you on it", "Reading a PDF or spreadsheet you upload and answering questions about it", "Making and editing images from a description", "Planning trips, meals, workouts and projects"],
    good: ["Very wide range of features in one place", "Strong at writing, reasoning and everyday questions", "Apps for phone, computer and web, with a natural voice mode", "Projects and memory let it keep context about you and your work"],
    watch: ["It can still state wrong things confidently, so check facts that matter", "Free use has limits on the strongest models and features", "By default your chats may be used to improve models; you can switch this off in Settings, Data controls"],
    start: ["Go to chatgpt.com or install the app and create a free account", "Ask a real question from your day, and give context: who it's for, how long, what tone", "Open Settings and look at Personalisation and Data controls"],
    tryit: "Paste in a long email you've received and ask: \"Summarise this in three bullet points and draft a polite reply that says yes to the meeting but asks to move it to Friday.\"",
    alts: ["claude", "gemini", "copilot"], url: "https://chatgpt.com", lesson: "t-assistants"
  },
  {
    id: "claude", name: "Claude", maker: "Anthropic", cat: "chat", price: "Free + paid plans",
    blurb: "A careful, capable assistant that's especially good at long documents, writing and coding.",
    what: "Claude is Anthropic's AI assistant. It handles very long inputs well, so you can give it whole reports, contracts or books and ask questions across them. It's known for clear, natural writing and strong coding. Projects let you keep documents and instructions together, and Artifacts let it build small apps, documents and charts you can see and share. Anthropic also makes Claude Code, a coding tool, and offers Claude to developers through an API.",
    uses: ["Reading and comparing long documents", "Writing and editing with a natural tone", "Building small web pages, tools and charts in Artifacts", "Thinking through a decision step by step", "Coding help, from explaining code to writing it"],
    good: ["Handles long documents and files very well", "Writing that sounds natural rather than robotic", "Strong at coding and careful reasoning", "Clear privacy controls"],
    watch: ["Like all assistants it can make mistakes; check important facts", "Free use has message limits that reset every few hours", "Fewer built-in media features than some rivals (for example, no video generation)"],
    start: ["Go to claude.ai or install the app and sign up", "Upload a PDF you need to understand and ask for a plain-English summary", "Try a Project: add a few documents and some standing instructions"],
    tryit: "Upload a long terms-and-conditions document and ask: \"What are the five things here I'd most want to know before signing, and is anything unusual?\"",
    alts: ["chatgpt", "gemini", "lechat"], url: "https://claude.ai", lesson: "c-meet"
  },
  {
    id: "gemini", name: "Gemini", maker: "Google", cat: "chat", price: "Free + paid plans",
    blurb: "Google's assistant, tied into Search, Gmail, Docs, YouTube and Android phones.",
    what: "Gemini is Google's AI assistant and also the name of the models behind it. It works on the web, as a phone app and, on many Android phones, as the built-in assistant. Its big advantage is Google's world: it can use Google Search, and with your permission it can look through your Gmail, Drive, Calendar and YouTube. It also includes Deep Research for long reports, Gems (custom helpers), image generation and editing, and video generation on paid plans.",
    uses: ["Questions that need up-to-date information from the web", "Finding and summarising things in your Gmail and Google Drive", "Making and editing images with plain instructions", "Researching a topic in depth and getting a report with sources", "Using your phone camera to ask about what you're looking at"],
    good: ["Strong connection to Google Search and Google's apps", "Generous free tier", "Excellent image editing from simple instructions", "Built into Android phones and Chrome"],
    watch: ["Connecting your Gmail and Drive means trusting it with personal data; you choose which apps it can see", "Human reviewers may read some conversations unless you turn off activity saving", "Some features vary by country and plan"],
    start: ["Go to gemini.google.com with your Google account, or install the Gemini app", "Ask something current, such as a comparison of two products released this year", "Look at Settings, Apps to choose which Google apps it may use"],
    tryit: "Take a photo of the inside of your fridge and ask: \"What three simple dinners could I make with this, and what would I need to buy?\"",
    alts: ["chatgpt", "claude", "google-ai-mode"], url: "https://gemini.google.com", lesson: "t-assistants"
  },
  {
    id: "copilot", name: "Microsoft Copilot", maker: "Microsoft", cat: "chat", price: "Free + paid plans",
    blurb: "Microsoft's free assistant for Windows, Edge and the web, with a work version inside Office.",
    what: "Microsoft Copilot is Microsoft's everyday AI assistant. It's built into Windows and the Edge browser and is also a phone app and website. It uses OpenAI models alongside Microsoft's own, and can search the web with Bing, create images and talk by voice. A separate work version, Microsoft 365 Copilot, lives inside Word, Excel, Outlook and Teams.",
    uses: ["Quick questions and web answers while using Windows", "Summarising the web page you have open in Edge", "Creating images for cards and posts", "Help with PC settings and everyday tasks"],
    good: ["Free and already on most Windows computers", "Web answers include links to sources", "Works across PC, browser and phone"],
    watch: ["The consumer Copilot and the work Microsoft 365 Copilot are different products with different data protections", "Answers drawn from the web can still be wrong or out of date"],
    start: ["Press the Copilot key or open the Copilot app on Windows, or visit copilot.microsoft.com", "Ask it to summarise a web page you have open", "Try its voice mode for a hands-free conversation"],
    tryit: "With a long news article open in Edge, ask Copilot: \"Summarise this page in five bullet points and tell me what's opinion rather than fact.\"",
    alts: ["chatgpt", "gemini", "m365-copilot"], url: "https://copilot.microsoft.com", lesson: "t-assistants"
  },
  {
    id: "meta-ai", name: "Meta AI", maker: "Meta", cat: "chat", price: "Free",
    blurb: "The assistant inside WhatsApp, Instagram, Facebook and Messenger, plus Ray-Ban Meta glasses.",
    what: "Meta AI is the assistant built into Meta's apps. You can chat with it in WhatsApp or Instagram, ask it questions in a group chat, and make images. It runs on Meta's Llama family of models. It also powers the voice assistant on Meta's camera glasses.",
    uses: ["Quick answers without leaving WhatsApp", "Settling a question in a group chat", "Making fun images to share"],
    good: ["Free and already in apps billions of people use", "No new app to install"],
    watch: ["Treat anything you share with it as not private, especially in group chats", "Meta may use your interactions with its AI to personalise ads and content", "Less capable than the leading assistants for complex work"],
    start: ["Open WhatsApp and look for the Meta AI button or chat", "Ask a simple question, and check where the answer came from", "Read Meta's AI privacy page before sharing anything personal"],
    tryit: "In a WhatsApp chat with Meta AI, ask for five name ideas for a family quiz team, then ask it to make a logo image for your favourite.",
    alts: ["chatgpt", "gemini", "grok"], url: "https://www.meta.ai", lesson: "t-assistants"
  },
  {
    id: "grok", name: "Grok", maker: "xAI", cat: "chat", price: "Free + paid plans",
    blurb: "Elon Musk's xAI assistant, built into X (formerly Twitter), with live access to posts on X.",
    what: "Grok is the assistant from xAI. It's built into X and also has its own app and website. It can draw on posts on X in real time, which makes it quick to pick up trending topics, and it can make images and hold voice conversations.",
    uses: ["Catching up on what people are saying about a news event", "General questions and writing", "Image creation"],
    good: ["Real-time view of conversations on X", "Capable models on paid tiers"],
    watch: ["Posts on X are not a reliable source of facts; check claims elsewhere", "Has produced offensive and false answers in public incidents, so judge its output carefully", "Fewer privacy and safety controls than some rivals"],
    start: ["Open Grok in the X app or at grok.com", "Ask about a current event, then check its sources", "Compare its answer with another assistant's"],
    tryit: "Ask Grok to summarise the main views people are posting about a news story, then ask which claims have reliable sources behind them.",
    alts: ["chatgpt", "perplexity", "gemini"], url: "https://grok.com", lesson: "t-assistants"
  },
  {
    id: "lechat", name: "Le Chat", maker: "Mistral AI", cat: "chat", price: "Free + paid plans",
    blurb: "A fast assistant from French company Mistral, a European alternative to the big US players.",
    what: "Le Chat is the assistant from Mistral AI, based in Paris. It's quick, can search the web, read documents and make images, and is popular with people and organisations who prefer a European provider. Mistral also releases many of its models openly, so developers can run them on their own computers.",
    uses: ["Everyday questions and writing in several European languages", "Summarising documents", "A European option for organisations with data-location rules"],
    good: ["Very fast replies", "European company, which some organisations prefer for data rules", "Mistral publishes open-weight models too"],
    watch: ["Smaller set of features than ChatGPT or Gemini", "Check facts as you would with any assistant"],
    start: ["Visit chat.mistral.ai or install the Le Chat app", "Ask the same question you asked another assistant and compare"],
    tryit: "Ask Le Chat to translate a short message into French, German and Spanish, and explain any phrase that doesn't translate neatly.",
    alts: ["chatgpt", "claude", "ollama"], url: "https://chat.mistral.ai", lesson: "t-assistants"
  },
  {
    id: "deepseek", name: "DeepSeek", maker: "DeepSeek (China)", cat: "chat", price: "Free",
    blurb: "A Chinese assistant whose open models shook the industry in 2025 by matching rivals at far lower cost.",
    what: "DeepSeek is a Chinese AI company. In January 2025 its R1 reasoning model matched leading US models on many tests while being far cheaper to build and run, and its weights were published openly. Its free chat app briefly topped app store charts around the world.",
    uses: ["Maths and step-by-step reasoning problems", "Coding help", "For developers: running its open models on their own hardware"],
    good: ["Free and strong at reasoning and maths", "Open models that anyone can download and inspect"],
    watch: ["The app and website store data on servers in China, and several governments have banned it on official devices", "It avoids or follows Chinese government lines on politically sensitive topics", "Don't share personal or work information with the hosted app"],
    start: ["If you try it, use it only for non-sensitive questions such as maths puzzles", "Developers can run its open models locally with Ollama or LM Studio instead"],
    tryit: "Give it a logic puzzle and watch how it lays out its reasoning step by step before answering.",
    alts: ["chatgpt", "lechat", "ollama"], url: "https://www.deepseek.com", lesson: "t-choosing"
  },

  /* ---------------- Search and research ---------------- */
  {
    id: "perplexity", name: "Perplexity", maker: "Perplexity AI", cat: "research", price: "Free + paid plans",
    blurb: "An answer engine: ask a question and get a written answer with numbered links to its sources.",
    what: "Perplexity searches the web for you, reads the results and writes a short answer with numbered citations, so you can click through and check. It's like a search engine and a chatbot combined. It has a Research mode for longer reports and its own AI web browser called Comet.",
    uses: ["Quick factual questions where you want to see the sources", "Comparing products, places or options", "Getting started on a research topic"],
    good: ["Every answer shows its sources", "Good at current information", "Clean and quick to use"],
    watch: ["A cited answer can still misread or misquote its source; click through on anything important", "Publishers have taken legal action over how it uses their content"],
    start: ["Go to perplexity.ai and ask a question you'd normally type into Google", "Click two of the numbered sources and check they really say what the answer claims"],
    tryit: "Ask: \"What are the pros and cons of heat pumps for a three-bedroom house in the UK?\" and check two of the sources it cites.",
    alts: ["google-ai-mode", "chatgpt", "comet"], url: "https://www.perplexity.ai", lesson: "t-research"
  },
  {
    id: "notebooklm", name: "NotebookLM", maker: "Google", cat: "research", price: "Free + paid plans",
    blurb: "Upload your own documents and ask questions about them; it can even turn them into a podcast-style chat.",
    what: "NotebookLM is a research notebook from Google that only works from the sources you give it: PDFs, Google Docs, web pages, YouTube videos or pasted text. Every answer points to the exact passage it used. It can make study guides, mind maps and Audio Overviews, which are realistic podcast-style conversations between two AI hosts about your material, and video overviews too.",
    uses: ["Studying: upload course notes and get quizzes and summaries", "Understanding a pile of reports for work", "Listening to an Audio Overview of a long document on a walk"],
    good: ["Answers stay grounded in your own sources, with citations", "Audio Overviews are a genuinely new way to absorb material", "Free with a Google account"],
    watch: ["It only knows what you upload, so its view is as narrow as your sources", "Audio hosts can still oversimplify or slip up; check key points"],
    start: ["Go to notebooklm.google.com and create a notebook", "Add two or three sources on one topic", "Ask a question, then click the citation numbers to see where answers came from"],
    tryit: "Add the PDF of a lesson or report you're reading, then generate an Audio Overview and listen to it.",
    alts: ["claude", "elicit", "perplexity"], url: "https://notebooklm.google.com", lesson: "t-research"
  },
  {
    id: "elicit", name: "Elicit", maker: "Elicit", cat: "research", price: "Free + paid plans",
    blurb: "An AI research assistant for academic papers: finds studies, summarises them and pulls out key data.",
    what: "Elicit searches a large database of scientific papers, finds those relevant to your question, and summarises their findings in a table. It can extract details such as sample sizes and results across many papers at once, which saves hours when reviewing research.",
    uses: ["Finding studies on a health, education or science question", "Building a table of what many papers found", "Starting a literature review"],
    good: ["Built around real published papers", "Tables make it easy to compare studies"],
    watch: ["Summaries can miss nuance; read the key papers yourself", "Covers mainly open academic literature, so some papers are missing"],
    start: ["Go to elicit.com and ask a research question in plain English", "Add a column to the results table, such as \"main finding\" or \"number of participants\""],
    tryit: "Ask: \"Does regular walking improve sleep quality in adults?\" and look at how many studies agree.",
    alts: ["consensus", "semantic-scholar", "notebooklm"], url: "https://elicit.com", lesson: "t-research"
  },
  {
    id: "consensus", name: "Consensus", maker: "Consensus", cat: "research", price: "Free + paid plans",
    blurb: "Ask a yes-or-no science question and see what the research says, with links to the papers.",
    what: "Consensus is a search engine for scientific research. You ask a question and it reads relevant peer-reviewed papers and summarises what they found, often with a \"consensus meter\" showing how many studies say yes, no or possibly.",
    uses: ["Checking a health or diet claim you've heard", "Getting a quick view of the evidence on a topic"],
    good: ["Draws on peer-reviewed research rather than the open web", "Shows how much studies agree"],
    watch: ["Counting studies isn't the same as weighing their quality", "Still worth reading the strongest papers yourself"],
    start: ["Go to consensus.app and ask a research question", "Open a couple of the papers it lists"],
    tryit: "Ask: \"Does drinking coffee reduce the risk of type 2 diabetes?\" and see how the studies line up.",
    alts: ["elicit", "semantic-scholar", "perplexity"], url: "https://consensus.app", lesson: "t-research"
  },
  {
    id: "semantic-scholar", name: "Semantic Scholar", maker: "Allen Institute for AI (Ai2)", cat: "research", price: "Free",
    blurb: "A free, non-profit search engine for over 200 million academic papers, with one-line AI summaries.",
    what: "Semantic Scholar is a free academic search engine run by the non-profit Allen Institute for AI. It covers a huge range of papers, gives many of them a one-sentence AI summary, shows which papers cite which, and has a reader that explains terms as you read.",
    uses: ["Finding papers on any topic", "Seeing which papers are most influential", "Following up the sources from your lessons"],
    good: ["Completely free and run by a non-profit", "Shows how papers connect through citations"],
    watch: ["Not every paper's full text is free to read", "One-line summaries are a starting point, not the whole story"],
    start: ["Go to semanticscholar.org and search a topic from a lesson, such as \"attention is all you need\""],
    tryit: "Search for \"Attention Is All You Need\" and see how many later papers cite it.",
    alts: ["elicit", "consensus"], url: "https://www.semanticscholar.org", lesson: "t-research"
  },
  {
    id: "google-ai-mode", name: "Google AI Mode", maker: "Google", cat: "research", price: "Free",
    blurb: "AI answers inside Google Search: AI Overviews at the top of results, and a fuller chat-style AI Mode.",
    what: "Google now adds AI-written summaries, called AI Overviews, to the top of many search results. AI Mode goes further: a chat-style search where you can ask long, complicated questions and follow-ups, and get an answer built from many searches at once, with links.",
    uses: ["Complex questions that would take several searches", "Follow-up questions in a conversation", "Quick overviews before you dig into websites"],
    good: ["Free, and already where most people search", "Links to the websites it used"],
    watch: ["AI Overviews have made memorable mistakes; check anything important", "It can mean fewer clicks for the websites that wrote the original content"],
    start: ["Search on Google and look for the AI Mode tab", "Ask a detailed question and then a follow-up"],
    tryit: "In AI Mode, ask: \"Plan a three-day trip to Edinburgh in December for someone who loves history and good food, using public transport only.\"",
    alts: ["perplexity", "gemini", "copilot"], url: "https://www.google.com", lesson: "t-research"
  },

  /* ---------------- Writing and editing ---------------- */
  {
    id: "grammarly", name: "Grammarly", maker: "Grammarly (company now called Superhuman)", cat: "writing", price: "Free + paid plans",
    blurb: "Checks spelling, grammar and tone as you type, almost anywhere on your computer or phone.",
    what: "Grammarly is a writing assistant that works inside your browser, email, documents and phone keyboard. It underlines mistakes, suggests clearer wording and tells you how your tone comes across. Its AI features can also rewrite or draft text for you.",
    uses: ["Catching mistakes in emails and messages before you send them", "Making a message sound more friendly, confident or formal", "Shortening wordy writing"],
    good: ["Works almost everywhere you type", "The free version catches most spelling and grammar errors", "Tone feedback is useful for important messages"],
    watch: ["It reads what you type, so check your organisation allows it for confidential work", "Don't accept every suggestion: it can flatten your own voice"],
    start: ["Install the Grammarly browser extension or desktop app", "Write an email as usual and look at the suggestions"],
    tryit: "Write a short complaint email, then use Grammarly's tone check to make it firm but polite.",
    alts: ["quillbot", "chatgpt", "claude"], url: "https://www.grammarly.com", lesson: "t-writing"
  },
  {
    id: "quillbot", name: "QuillBot", maker: "QuillBot (part of Learneo)", cat: "writing", price: "Free + paid plans",
    blurb: "A paraphrasing tool that rewrites sentences in different styles, plus grammar checking and summaries.",
    what: "QuillBot is best known for its paraphraser: paste in a sentence and it rewrites it, with settings such as simpler, more formal or shorter. It also offers a grammar checker, summariser, translator and citation generator.",
    uses: ["Finding a clearer way to say something", "Simplifying a complicated paragraph", "Summarising an article"],
    good: ["Fast and simple", "Several rewriting styles to choose from"],
    watch: ["Rewording someone else's work to pass it off as your own is still plagiarism", "Schools and universities may treat paraphrasing tools as cheating"],
    start: ["Go to quillbot.com and paste in a paragraph", "Try two of the modes and compare"],
    tryit: "Paste a dense paragraph from a lesson into the paraphraser using the Simple mode and see if it's easier to read.",
    alts: ["grammarly", "chatgpt"], url: "https://quillbot.com", lesson: "t-writing"
  },
  {
    id: "jasper", name: "Jasper", maker: "Jasper AI", cat: "writing", price: "Paid (free trial)",
    blurb: "An AI writing platform for marketing teams that keeps every piece in the company's brand voice.",
    what: "Jasper is built for marketing teams. You teach it your brand's voice, products and audience, and it helps produce on-brand blog posts, adverts, emails and social posts at scale, with templates and team workflows.",
    uses: ["Marketing copy that matches a brand", "Turning one piece of content into many formats"],
    good: ["Brand voice and style controls", "Designed for teams"],
    watch: ["Costs more than general assistants", "Marketing copy still needs a human check for facts and claims"],
    start: ["Start a free trial at jasper.ai", "Set up a brand voice using some of your existing writing"],
    tryit: "Give it a product description and ask for a launch email, three social posts and an advert headline in the same voice.",
    alts: ["chatgpt", "claude", "canva"], url: "https://www.jasper.ai", lesson: "t-writing"
  },
  {
    id: "sudowrite", name: "Sudowrite", maker: "Sudowrite", cat: "writing", price: "Paid (free trial)",
    blurb: "An AI writing partner for novelists and storytellers: brainstorming, describing scenes and drafting.",
    what: "Sudowrite is made for fiction writers. It can suggest what happens next, describe a scene using the five senses, help with characters and plot, and draft passages in your style, while you stay in charge of the story.",
    uses: ["Getting unstuck when writing a story", "Brainstorming plot twists and character names", "Richer descriptions"],
    good: ["Designed for creative writing rather than business", "Tools that support your writing rather than replace it"],
    watch: ["Many writers and publishers have strong views on AI-written fiction; be open about how you used it", "Some publishers and competitions don't accept AI-generated text"],
    start: ["Sign up for a trial at sudowrite.com", "Paste a paragraph you've written and ask for sensory description"],
    tryit: "Write two sentences about a rainy station platform and use the Describe tool to see five different ways to enrich them.",
    alts: ["claude", "chatgpt"], url: "https://www.sudowrite.com", lesson: "t-writing"
  },

  /* ---------------- Translation and languages ---------------- */
  {
    id: "deepl", name: "DeepL", maker: "DeepL (Germany)", cat: "language", price: "Free + paid plans",
    blurb: "A translator widely praised for natural-sounding results, plus DeepL Write for polishing text.",
    what: "DeepL is a German translation service that many people find sounds more natural than other translators, especially between European languages. It translates text and whole documents (keeping their formatting), offers a choice of alternative wordings, and its Write tool improves text in the same language.",
    uses: ["Translating emails and documents", "Checking your own writing in a language you're learning", "Choosing between formal and informal tone in languages that have both"],
    good: ["Natural, fluent translations", "Keeps document layout", "Glossaries let you fix how specific terms are translated"],
    watch: ["The free version isn't meant for confidential documents; the paid Pro plan deletes your texts after translation", "Covers fewer languages than Google Translate", "For legal or medical documents, use a professional translator"],
    start: ["Go to deepl.com or install the app", "Translate a paragraph, then click any word to see alternatives"],
    tryit: "Translate a friendly email into German, then switch between formal and informal tone to see the difference.",
    alts: ["google-translate", "ms-translator", "chatgpt"], url: "https://www.deepl.com", lesson: "t-translate"
  },
  {
    id: "google-translate", name: "Google Translate", maker: "Google", cat: "language", price: "Free",
    blurb: "Free translation for well over 200 languages: text, speech, live conversations and photos of signs.",
    what: "Google Translate is the world's most used translator. It covers far more languages than any rival, including many smaller languages added with the help of AI. You can type, speak, hold a two-way conversation, or point your camera at a menu or sign and see it translated in place.",
    uses: ["Reading menus and signs abroad with your camera", "Having a basic two-way conversation in another language", "Translating websites"],
    good: ["Free, with the widest language coverage", "Camera translation works on the spot", "Offline language packs for travel"],
    watch: ["Quality is lower for less common languages", "Don't rely on it for medical, legal or safety-critical messages"],
    start: ["Install the Google Translate app before you travel", "Download offline packs for the languages you need", "Try the camera on a printed page"],
    tryit: "Point the app's camera at a page of text in another language and watch it translate in place.",
    alts: ["deepl", "ms-translator", "google-lens"], url: "https://translate.google.com", lesson: "t-translate"
  },
  {
    id: "ms-translator", name: "Microsoft Translator", maker: "Microsoft", cat: "language", price: "Free",
    blurb: "Free translation with a handy multi-person conversation mode, built into Office and Edge.",
    what: "Microsoft Translator translates text, speech and images. Its standout feature is conversation mode: several people join on their own phones and each sees the conversation in their own language. It also powers translation in Word, Outlook, Teams and Edge.",
    uses: ["Group conversations where people speak different languages", "Translating documents inside Microsoft Office", "Live captions in another language"],
    good: ["Multi-device conversation mode", "Built into Microsoft products many people already use"],
    watch: ["Like all machine translation, check important messages with a fluent speaker"],
    start: ["Install the Microsoft Translator app", "Start a conversation and share the code with a friend"],
    tryit: "Start a conversation in the app, join from a second phone set to another language, and chat.",
    alts: ["google-translate", "deepl"], url: "https://translator.microsoft.com", lesson: "t-translate"
  },
  {
    id: "duolingo", name: "Duolingo", maker: "Duolingo", cat: "language", price: "Free + paid plans",
    blurb: "The popular language app; its top tier adds AI video calls and explanations of your mistakes.",
    what: "Duolingo teaches languages through short daily lessons and games. It uses AI to tailor lessons to you, and its top paid tier adds features powered by large language models, such as explaining why your answer was wrong and practising conversation in video calls with an animated character.",
    uses: ["Building a daily habit of learning a language", "Practising speaking without feeling embarrassed"],
    good: ["Fun and habit-forming", "Free core lessons"],
    watch: ["Great for basics; you'll need real conversation practice to become fluent", "The AI features are only on the most expensive plan"],
    start: ["Install Duolingo and pick a language", "Set a daily goal of five to ten minutes"],
    tryit: "Do one lesson a day for a week and notice how the app adjusts to the words you get wrong.",
    alts: ["speak", "chatgpt"], url: "https://www.duolingo.com", lesson: "t-translate"
  },
  {
    id: "speak", name: "Speak", maker: "Speak", cat: "language", price: "Paid (free trial)",
    blurb: "A speaking-first language app where you talk out loud with an AI tutor that corrects you.",
    what: "Speak is a language-learning app built around speaking. You practise real conversations out loud with an AI tutor that listens, responds and gives feedback on your pronunciation and grammar.",
    uses: ["Practising conversation before a trip or move", "Getting feedback on pronunciation"],
    good: ["Lots of speaking practice", "Patient, judgement-free tutor"],
    watch: ["Paid subscription after the trial", "Fewer languages than Duolingo"],
    start: ["Install Speak and try the free lessons", "Practise a role-play such as ordering food"],
    tryit: "Do a role-play of checking into a hotel and ask for feedback on your pronunciation.",
    alts: ["duolingo", "chatgpt"], url: "https://www.speak.com", lesson: "t-translate"
  },

  /* ---------------- Voice, speech and audio ---------------- */
  {
    id: "elevenlabs", name: "ElevenLabs", maker: "ElevenLabs", cat: "voice", price: "Free + paid plans",
    blurb: "Lifelike AI voices: turn text into speech, clone a voice, dub videos into other languages.",
    what: "ElevenLabs makes some of the most natural-sounding AI voices. Type text and choose from thousands of voices, or create a copy of your own voice from a recording. It also dubs videos into other languages while keeping the speaker's voice, makes sound effects and music, and lets companies build voice agents.",
    uses: ["Voiceovers for videos and presentations", "Turning articles into audio", "Dubbing a video into another language", "Audiobooks and podcasts"],
    good: ["Very natural, expressive voices in many languages", "Free plan to try it"],
    watch: ["Voice cloning can be misused for scams; only clone voices you have permission to use", "Commercial use needs a paid plan; check the licence", "Be open with listeners that a voice is AI-generated"],
    start: ["Sign up at elevenlabs.io", "Paste a paragraph into Text to Speech and try three voices"],
    tryit: "Paste the opening of a lesson and generate it in two different voices to hear how much the voice changes the feel.",
    alts: ["murf", "speechify", "descript"], url: "https://elevenlabs.io", lesson: "t-voice"
  },
  {
    id: "whisper", name: "Whisper", maker: "OpenAI", cat: "voice", price: "Free and open source",
    blurb: "An open-source speech recognition model that transcribes and translates audio in around 100 languages.",
    what: "Whisper is a speech-to-text model that OpenAI released openly in 2022. It turns recordings into text very accurately, works in about 100 languages and can translate speech into English. Because it's open, it's built into many apps, and developers can run it on their own computers so audio never leaves the machine.",
    uses: ["Transcribing interviews, lectures and voice notes", "Making subtitles for videos", "Private transcription on your own computer"],
    good: ["Accurate, even with accents and background noise", "Free and can run fully offline"],
    watch: ["Running it yourself needs some technical setup (or an app built on it)", "Can occasionally invent words in silent or unclear parts of a recording"],
    start: ["Easiest route: use an app built on Whisper, such as the transcription in ChatGPT's voice features", "Developers: install it with Python (Level 2 skills) and run it on an audio file"],
    tryit: "Record a one-minute voice note, transcribe it with a Whisper-based app, and count the mistakes.",
    alts: ["otter", "descript"], url: "https://github.com/openai/whisper", lesson: "t-voice"
  },
  {
    id: "descript", name: "Descript", maker: "Descript", cat: "voice", price: "Free + paid plans",
    blurb: "Edit audio and video by editing the transcript, like a text document. Removes ums with one click.",
    what: "Descript transcribes your recording, then lets you edit the media by editing the text: delete a sentence and it's cut from the video. It can remove filler words, improve sound quality, fix eye contact, and its AI assistant can do many edits from a plain instruction.",
    uses: ["Editing podcasts and interviews", "Cleaning up talking-head videos", "Making clips for social media"],
    good: ["Editing by text is much easier for beginners", "Studio Sound makes cheap microphones sound better"],
    watch: ["Its voice-cloning feature should only be used on your own voice", "Free plan has limits on exports and transcription hours"],
    start: ["Download Descript and import a short recording", "Delete a sentence in the transcript and watch the video update"],
    tryit: "Record yourself explaining something for two minutes, then use Remove filler words and compare before and after.",
    alts: ["capcut", "adobe-podcast", "opus-clip"], url: "https://www.descript.com", lesson: "t-voice"
  },
  {
    id: "adobe-podcast", name: "Adobe Podcast", maker: "Adobe", cat: "voice", price: "Free + paid plans",
    blurb: "Makes voice recordings sound studio-quality with one click by removing echo and background noise.",
    what: "Adobe Podcast is a set of web tools for spoken audio. Its best-known feature, Enhance Speech, takes a recording made on a phone in an echoey room and makes it sound as if it was recorded in a studio. It also checks your microphone setup.",
    uses: ["Rescuing a noisy interview or voice note", "Improving audio for videos and podcasts"],
    good: ["Remarkable results with one click", "Free to try in the browser"],
    watch: ["Heavy enhancement can make voices sound slightly artificial; use the strength slider", "Free use has length limits"],
    start: ["Go to podcast.adobe.com and upload a recording to Enhance Speech"],
    tryit: "Record a voice note in your kitchen, run it through Enhance Speech and listen to both versions.",
    alts: ["descript", "krisp"], url: "https://podcast.adobe.com", lesson: "t-voice"
  },
  {
    id: "murf", name: "Murf AI", maker: "Murf", cat: "voice", price: "Free trial + paid plans",
    blurb: "A studio for making voiceovers for training videos, presentations and adverts.",
    what: "Murf is a voiceover studio: type your script, pick a voice, then adjust pace, pauses and emphasis line by line, and sync it to slides or video. It's popular for training and explainer videos.",
    uses: ["Narrating training courses and presentations", "Explainer and product videos"],
    good: ["Fine control over timing and emphasis", "Works well with slides and video"],
    watch: ["Downloads and commercial use need a paid plan"],
    start: ["Sign up at murf.ai and paste a short script", "Try adding a pause and changing the emphasis on one word"],
    tryit: "Write a 30-second script introducing yourself and make it sound warm and unhurried.",
    alts: ["elevenlabs", "synthesia"], url: "https://murf.ai", lesson: "t-voice"
  },
  {
    id: "speechify", name: "Speechify", maker: "Speechify", cat: "voice", price: "Free + paid plans",
    blurb: "Reads web pages, PDFs, emails and books aloud in natural voices, at any speed you like.",
    what: "Speechify is a text-to-speech reader for phones, computers and browsers. It reads almost anything aloud, can scan printed pages with your camera, and lets you speed up listening. It's widely used by people with dyslexia and anyone who prefers to listen.",
    uses: ["Listening to articles and documents while walking or driving", "Support for dyslexia and visual strain", "Getting through reading faster"],
    good: ["Works on nearly any text", "Comfortable to listen to for long periods"],
    watch: ["The best voices and top speeds are on the paid plan", "Free alternatives exist built into phones (for example, Speak Screen on iPhone)"],
    start: ["Install the Speechify browser extension or app", "Open an article and press play"],
    tryit: "Have it read one of your lessons aloud at 1.5x speed while you follow along.",
    alts: ["elevenlabs", "seeing-ai"], url: "https://speechify.com", lesson: "t-voice"
  },
  {
    id: "krisp", name: "Krisp", maker: "Krisp", cat: "voice", price: "Free + paid plans",
    blurb: "Removes background noise, like barking dogs and keyboards, from your calls in real time.",
    what: "Krisp sits between your microphone and your calling app and uses AI to remove background noise and echo as you speak. It also offers meeting transcription and notes.",
    uses: ["Clean audio on calls from home or a café", "Muting noise from the other side of the call too"],
    good: ["Works with almost any calling app", "Real-time and easy to set up"],
    watch: ["Many calling apps (Zoom, Teams, Google Meet) now have decent built-in noise removal, so check that first"],
    start: ["Install Krisp and select it as your microphone in your calling app"],
    tryit: "Make a test call while running a tap or tapping a keyboard, with Krisp on and off.",
    alts: ["adobe-podcast", "zoom-ai"], url: "https://krisp.ai", lesson: "t-voice"
  },

  /* ---------------- Meetings and office work ---------------- */
  {
    id: "otter", name: "Otter.ai", maker: "Otter.ai", cat: "meetings", price: "Free + paid plans",
    blurb: "Joins your meetings, writes a live transcript and summary, and lists the action items.",
    what: "Otter records and transcribes meetings and conversations in real time. It can join Zoom, Teams and Google Meet calls on its own, then gives you a summary, action items and a searchable transcript, and you can ask it questions about past meetings.",
    uses: ["Notes for work meetings and interviews", "Lecture transcripts", "Searching what was said weeks ago"],
    good: ["Live transcripts you can search", "Automatic summaries and action items"],
    watch: ["Always tell people they're being recorded, and check your local laws and workplace rules", "Auto-joining can surprise people; check its calendar settings", "Transcripts may name people wrongly"],
    start: ["Sign up at otter.ai and connect your calendar", "Record a short test conversation first"],
    tryit: "Record a five-minute chat about weekend plans and see if the summary picks out the decisions.",
    alts: ["fireflies", "granola", "zoom-ai"], url: "https://otter.ai", lesson: "t-meetings"
  },
  {
    id: "fireflies", name: "Fireflies.ai", maker: "Fireflies.ai", cat: "meetings", price: "Free + paid plans",
    blurb: "A meeting assistant that records, transcribes and summarises calls and links them to your work apps.",
    what: "Fireflies joins your video calls as a notetaker bot, then produces transcripts, summaries and action items. It connects to tools like Slack, CRMs and project boards, so meeting notes go where the work happens.",
    uses: ["Sales and customer calls", "Team meetings with lots of follow-ups"],
    good: ["Many integrations with work tools", "Search across all your meetings"],
    watch: ["Same consent rules as any recording", "A bot joining calls can feel intrusive to clients; ask first"],
    start: ["Sign up and connect your calendar", "Choose which meetings it should join"],
    tryit: "Ask it after a meeting: \"What did we agree to do by Friday?\"",
    alts: ["otter", "granola"], url: "https://fireflies.ai", lesson: "t-meetings"
  },
  {
    id: "granola", name: "Granola", maker: "Granola", cat: "meetings", price: "Free + paid plans",
    blurb: "An AI notepad for meetings that listens from your computer, with no bot joining the call.",
    what: "Granola runs on your computer and transcribes the audio of your meetings without adding a bot to the call. You jot rough notes as normal, and afterwards it combines your notes with the transcript into clean, well-organised meeting notes.",
    uses: ["Meeting notes without a visible recording bot", "Turning scrappy notes into a tidy write-up"],
    good: ["No bot, so meetings feel normal", "Keeps your own notes at the centre"],
    watch: ["You still need everyone's consent to transcribe a meeting"],
    start: ["Install the app and allow it to hear your system audio", "Type a few notes during your next call and press enhance afterwards"],
    tryit: "Type three rough bullet points during a call, then see how it fills them out from the transcript.",
    alts: ["otter", "fireflies"], url: "https://www.granola.ai", lesson: "t-meetings"
  },
  {
    id: "zoom-ai", name: "Zoom AI Companion", maker: "Zoom", cat: "meetings", price: "Included with paid Zoom plans",
    blurb: "Zoom's built-in assistant: meeting summaries, catch-up if you join late, and draft follow-ups.",
    what: "AI Companion is built into Zoom. It can summarise a meeting, tell a latecomer what they missed, answer questions about what was said, and draft follow-up messages, all without a separate tool.",
    uses: ["Summaries of Zoom calls", "Catching up when you join late"],
    good: ["Nothing extra to install for Zoom users", "Included with paid plans"],
    watch: ["Hosts control whether it's on; participants are notified when it's used"],
    start: ["In Zoom settings, turn on AI Companion features", "Start a meeting summary from the meeting toolbar"],
    tryit: "Join a meeting five minutes late and ask AI Companion what you missed.",
    alts: ["otter", "m365-copilot", "gemini-workspace"], url: "https://www.zoom.com/en/products/ai-assistant/", lesson: "t-meetings"
  },
  {
    id: "m365-copilot", name: "Microsoft 365 Copilot", maker: "Microsoft", cat: "meetings", price: "Paid add-on for businesses; included in some home plans",
    blurb: "Copilot inside Word, Excel, PowerPoint, Outlook and Teams, working with your organisation's files.",
    what: "Microsoft 365 Copilot is the work version of Copilot. It sits inside Word, Excel, PowerPoint, Outlook and Teams and can use your organisation's emails, files and meetings (only those you already have access to). It drafts documents, summarises email threads and Teams meetings, builds slides from a document, and helps analyse spreadsheets.",
    uses: ["Summarising a long email thread in Outlook", "Turning a Word document into a PowerPoint draft", "Recapping a Teams meeting you missed", "Asking questions about a spreadsheet in plain English"],
    good: ["Works with your real work files, inside apps you already use", "Business data protections: your organisation's data isn't used to train the models"],
    watch: ["It sees whatever you have permission to see, so messy file permissions can surface things they shouldn't", "Expensive per person for businesses; measure whether it saves time"],
    start: ["If your workplace has it, look for the Copilot button in Word or Outlook", "Ask it to summarise the last week of emails from one person"],
    tryit: "In Word, ask Copilot to turn your rough notes into a one-page plan with headings, then ask it to make it shorter.",
    alts: ["gemini-workspace", "notion-ai", "copilot"], url: "https://www.microsoft.com/microsoft-365/copilot", lesson: "t-meetings"
  },
  {
    id: "gemini-workspace", name: "Gemini in Google Workspace", maker: "Google", cat: "meetings", price: "Included in Workspace business plans and Google AI plans",
    blurb: "Gemini built into Gmail, Docs, Sheets, Slides and Meet: drafts, summaries and meeting notes.",
    what: "Google has built Gemini into its office apps. In Gmail it summarises threads and drafts replies; in Docs it writes and edits; in Sheets it helps with formulas and analysis; in Meet it takes notes; and a side panel can pull in information from your Drive.",
    uses: ["Summarising long email threads", "Automatic meeting notes in Google Meet", "Formulas and charts in Sheets from a plain request"],
    good: ["Built into apps many people use daily", "Can draw on your Drive files"],
    watch: ["Check which data your organisation lets it use", "Drafts still need your own judgement and tone"],
    start: ["Look for the Gemini star icon in Gmail or Docs", "Ask it to summarise a long thread"],
    tryit: "In Sheets, describe a calculation in words (such as \"total per month\") and let Gemini write the formula.",
    alts: ["m365-copilot", "notion-ai"], url: "https://workspace.google.com/solutions/ai/", lesson: "t-meetings"
  },
  {
    id: "notion-ai", name: "Notion AI", maker: "Notion", cat: "meetings", price: "Included in higher paid plans (limited free trial)",
    blurb: "AI inside the Notion workspace: write, summarise, search across your notes, and take meeting notes.",
    what: "Notion is a workspace for notes, documents, wikis and project boards. Notion AI adds writing help, summaries, meeting notes, and a search that answers questions using everything in your workspace and connected apps.",
    uses: ["Keeping a personal or team knowledge base", "Asking questions across all your notes", "Turning meeting notes into tasks"],
    good: ["Works across everything you keep in Notion", "Flexible for both personal and team use"],
    watch: ["Most useful once you keep a lot of information in Notion", "AI features depend on your plan"],
    start: ["Create a free Notion account and make a page for your AI course notes", "Try the AI button on a page of notes"],
    tryit: "Keep your notes from this level in Notion, then ask it: \"Which tools did I say I want to try?\"",
    alts: ["m365-copilot", "gemini-workspace", "notebooklm"], url: "https://www.notion.com/product/ai", lesson: "t-meetings"
  },

  /* ---------------- Images ---------------- */
  {
    id: "midjourney", name: "Midjourney", maker: "Midjourney", cat: "images", price: "Paid",
    blurb: "Famous for beautiful, artistic images from a text description. Also makes short videos.",
    what: "Midjourney is an independent lab whose image generator is known for striking, artistic results. You type a description (a prompt) and get four images to choose from, then vary, upscale or edit them. It started on Discord and now has its own website, and has added video from still images.",
    uses: ["Concept art, mood boards and illustrations", "Exploring visual styles quickly", "Striking images for presentations"],
    good: ["Outstanding artistic quality and style", "Lots of control over style and variation"],
    watch: ["No free plan", "Images made on lower plans are public by default", "Major film studios have sued Midjourney over copyrighted characters; avoid copying famous characters or living artists' styles"],
    start: ["Subscribe at midjourney.com", "Start with a clear prompt: subject, setting, style, lighting"],
    tryit: "Prompt: \"a lighthouse on a stormy cliff at dawn, watercolour, soft light\" and try varying the style word.",
    alts: ["firefly", "ideogram", "nano-banana"], url: "https://www.midjourney.com", lesson: "t-images"
  },
  {
    id: "firefly", name: "Adobe Firefly", maker: "Adobe", cat: "images", price: "Free credits + paid plans",
    blurb: "Adobe's image and video generator, trained on licensed images and built into Photoshop.",
    what: "Firefly is Adobe's family of generative models. Adobe says its own models were trained on licensed content such as Adobe Stock and public-domain images, which makes it popular with businesses worried about copyright. It powers Generative Fill in Photoshop, where you select part of a photo and describe what should be there.",
    uses: ["Removing or adding objects in photos", "Extending a photo beyond its edges", "Marketing images where copyright matters"],
    good: ["Built into Photoshop, Illustrator and Adobe Express", "Designed to be safe for commercial use", "Adds Content Credentials, a label showing AI was used"],
    watch: ["Uses a credit system; heavy use needs a paid plan", "Can be less adventurous in style than Midjourney"],
    start: ["Try it free at firefly.adobe.com", "Upload a photo and use Generative Fill to remove something"],
    tryit: "Upload a holiday photo and use Generative Expand to widen it into a panorama.",
    alts: ["midjourney", "canva", "nano-banana"], url: "https://firefly.adobe.com", lesson: "t-images"
  },
  {
    id: "ideogram", name: "Ideogram", maker: "Ideogram", cat: "images", price: "Free + paid plans",
    blurb: "An image generator that's especially good at putting readable text into pictures: posters, logos, cards.",
    what: "Ideogram was one of the first image generators to reliably spell words correctly inside images. That makes it handy for posters, invitations, T-shirt designs and logos.",
    uses: ["Posters and invitations with text", "Logo ideas", "Social media graphics"],
    good: ["Strong at text in images", "Free tier to try"],
    watch: ["Free images are public", "Check logos for accidental similarity to existing brands"],
    start: ["Go to ideogram.ai and describe a poster including the exact words in quotes"],
    tryit: "Prompt: a retro poster that says \"Abbas' AI Academy\" in bold letters, with a sunrise.",
    alts: ["canva", "midjourney", "firefly"], url: "https://ideogram.ai", lesson: "t-images"
  },
  {
    id: "stable-diffusion", name: "Stable Diffusion", maker: "Stability AI", cat: "images", price: "Free and open (licence terms apply)",
    blurb: "The open image model that anyone can download, run on their own computer and customise.",
    what: "Stable Diffusion is a family of image-generation models released openly by Stability AI from 2022. Because the weights are public, a huge community has built tools, add-ons and custom versions for it. You can run it on a decent home computer, so images never leave your machine. You met the idea behind it, diffusion, in Level 6.",
    uses: ["Private image generation on your own computer", "Training custom styles or characters", "Experimenting with how diffusion works"],
    good: ["Free to run and fully customisable", "Huge community of tools and models"],
    watch: ["Needs a good graphics card and some setup (apps like ComfyUI help)", "Fewer built-in safety filters, so responsibility sits with you", "Getty Images took Stability AI to court over training data"],
    start: ["Try a hosted version on Hugging Face first", "Later, install a local app such as ComfyUI"],
    tryit: "Run a demo on Hugging Face and change the number of steps to see the image sharpen.",
    alts: ["flux", "hugging-face", "midjourney"], url: "https://stability.ai", lesson: "t-images"
  },
  {
    id: "flux", name: "FLUX", maker: "Black Forest Labs", cat: "images", price: "Free open versions + paid",
    blurb: "High-quality image models from a German lab, with open versions and powerful editing.",
    what: "FLUX is a family of image models from Black Forest Labs, founded by researchers behind Stable Diffusion. Some versions are open to download, others are offered through apps and APIs. FLUX models are known for realistic photos and for editing images from plain instructions.",
    uses: ["Photo-realistic images", "Editing an image while keeping the same character or product"],
    good: ["Excellent image quality", "Open versions for developers"],
    watch: ["Usually used through other apps or developer platforms rather than one simple app", "Licence terms differ between versions"],
    start: ["Try FLUX inside apps that offer it, or on Hugging Face"],
    tryit: "Generate a product photo, then ask for the same product on a different background.",
    alts: ["stable-diffusion", "midjourney", "nano-banana"], url: "https://bfl.ai", lesson: "t-images"
  },
  {
    id: "nano-banana", name: "Nano Banana (Gemini image)", maker: "Google", cat: "images", price: "Free + paid plans",
    blurb: "Google's image model in the Gemini app, superb at editing photos from simple instructions.",
    what: "Nano Banana is the nickname of Google's Gemini image model, available in the Gemini app. It's especially good at editing: change the background of a photo, restyle a room, or put the same person in a new scene while they still look like themselves. Images carry an invisible SynthID watermark showing they were made with Google AI.",
    uses: ["Editing photos by describing the change", "Trying out room or outfit ideas", "Keeping a character consistent across images"],
    good: ["Very good at keeping people and objects consistent", "Easy: just ask in plain words in Gemini"],
    watch: ["Only edit photos of people with their permission", "Be careful with realistic edits that could mislead"],
    start: ["Open the Gemini app, upload a photo and describe a change"],
    tryit: "Upload a photo of a room and ask: \"Show this room painted sage green with a wooden floor.\"",
    alts: ["firefly", "midjourney", "chatgpt"], url: "https://gemini.google.com", lesson: "t-images"
  },
  {
    id: "leonardo", name: "Leonardo.ai", maker: "Leonardo (owned by Canva)", cat: "images", price: "Free + paid plans",
    blurb: "An image and video platform popular for game art, characters and design assets.",
    what: "Leonardo.ai offers image and video generation with many style models and fine control, and is popular with game makers and designers. It was bought by Canva in 2024.",
    uses: ["Game and character art", "Consistent visual assets for a project"],
    good: ["Lots of styles and controls", "Daily free credits"],
    watch: ["Many settings can be confusing at first", "Free images may be public"],
    start: ["Sign up at leonardo.ai and try a preset style"],
    tryit: "Create a character, then generate them in three different poses.",
    alts: ["midjourney", "canva", "stable-diffusion"], url: "https://leonardo.ai", lesson: "t-images"
  },
  {
    id: "ms-designer", name: "Microsoft Designer", maker: "Microsoft", cat: "images", price: "Free + included in Microsoft 365",
    blurb: "Free AI design tool for invitations, cards, posts and images, from Microsoft.",
    what: "Microsoft Designer creates images, stickers, invitations and social posts from a description, and offers simple photo edits like removing backgrounds. It is linked with Copilot and Microsoft 365.",
    uses: ["Party invitations and greeting cards", "Quick social media graphics"],
    good: ["Free and simple", "Good templates"],
    watch: ["Less control than professional tools"],
    start: ["Go to designer.microsoft.com and describe what you need"],
    tryit: "Make a birthday invitation for a garden party with the date and time on it.",
    alts: ["canva", "ideogram"], url: "https://designer.microsoft.com", lesson: "t-images"
  },

  /* ---------------- Video ---------------- */
  {
    id: "sora", name: "Sora", maker: "OpenAI", cat: "video", price: "Free (limited) + paid plans",
    blurb: "OpenAI's video generator, with its own social app for making and remixing short clips with sound.",
    what: "Sora turns a text description or an image into a short video. The second version, released in 2025, adds synchronised sound and dialogue and comes with a social app where people create, share and remix clips, including \"cameos\" of themselves (with consent controls). Availability varies by country.",
    uses: ["Short creative clips and ideas for videos", "Visualising a scene before filming it", "Fun remixes with friends"],
    good: ["Realistic motion and sound together", "Simple to use in the app"],
    watch: ["Realistic fake videos can mislead; clips carry visible and invisible watermarks, but they can be removed", "Never make videos of real people without their permission", "Rights holders have raised concerns about copyrighted characters"],
    start: ["Check if the Sora app is available where you live", "Start with a short, simple scene description"],
    tryit: "Describe a ten-second scene: \"a paper boat sailing down a rainy city gutter, close-up, cinematic\".",
    alts: ["veo", "runway", "kling"], url: "https://openai.com/sora", lesson: "t-video"
  },
  {
    id: "veo", name: "Veo", maker: "Google DeepMind", cat: "video", price: "Paid (Google AI plans)",
    blurb: "Google's video model, used in the Gemini app and the Flow film-making tool, with sound included.",
    what: "Veo is Google DeepMind's video-generation model. Since Veo 3 in 2025 it makes video with matching sound, dialogue and music. You can use it in the Gemini app on paid plans and in Flow, a tool for building scenes and short films from clips.",
    uses: ["Short films and adverts", "Turning a storyboard into moving scenes"],
    good: ["High-quality video with sound", "Flow helps keep characters and scenes consistent"],
    watch: ["Needs a paid Google AI plan for regular use", "Videos carry a SynthID watermark; use them honestly"],
    start: ["In the Gemini app on a paid plan, choose the video option and describe a scene"],
    tryit: "Describe an eight-second clip of a street food vendor in Lagos at night, with sizzling sounds.",
    alts: ["sora", "runway", "kling"], url: "https://deepmind.google/models/veo/", lesson: "t-video"
  },
  {
    id: "runway", name: "Runway", maker: "Runway", cat: "video", price: "Free credits + paid plans",
    blurb: "A creative video studio with AI generation and editing tools used in film and advertising.",
    what: "Runway was one of the first companies to offer AI video generation and is used by filmmakers and agencies. Its Gen models create clips from text and images, and it has editing tools such as removing backgrounds, changing the look of footage and extending shots.",
    uses: ["Creative video projects and music videos", "Editing effects that used to need a studio"],
    good: ["Professional tools and controls", "Strong at keeping a style consistent"],
    watch: ["Credits run out quickly on the free plan"],
    start: ["Sign up at runwayml.com and try image to video with one of your photos"],
    tryit: "Upload a landscape photo and turn it into a slow cinematic camera move.",
    alts: ["sora", "veo", "pika"], url: "https://runwayml.com", lesson: "t-video"
  },
  {
    id: "synthesia", name: "Synthesia", maker: "Synthesia (UK)", cat: "video", price: "Free (limited) + paid plans",
    blurb: "Makes presenter videos with AI avatars: type a script and an avatar speaks it in 100+ languages.",
    what: "Synthesia, a London company, lets businesses make videos where a lifelike AI avatar presents a script. It's widely used for training, onboarding and how-to videos, because updating the video means just editing the text. Videos can be made in many languages.",
    uses: ["Training and onboarding videos", "The same video in many languages", "Updating instructions without re-filming"],
    good: ["Quick to update", "Many languages and avatars"],
    watch: ["Viewers should be told the presenter is AI", "Avatars can feel less engaging than a real person for some audiences"],
    start: ["Try a free demo video at synthesia.io"],
    tryit: "Write a 45-second welcome message for a new team member and make it in English and Spanish.",
    alts: ["heygen", "murf"], url: "https://www.synthesia.io", lesson: "t-video"
  },
  {
    id: "heygen", name: "HeyGen", maker: "HeyGen", cat: "video", price: "Free (limited) + paid plans",
    blurb: "AI avatar videos and video translation that keeps your own voice and matches your lips.",
    what: "HeyGen creates avatar videos and is known for video translation: upload a video of yourself speaking and it produces a version in another language, in your own voice, with your lips moving to match.",
    uses: ["Translating your own videos for other audiences", "Avatar videos for marketing and training"],
    good: ["Impressive lip-synced translation", "Easy to use"],
    watch: ["Only use avatars of yourself or people who've agreed", "Translations should be checked by a native speaker"],
    start: ["Sign up at heygen.com and try translating a short clip of yourself"],
    tryit: "Record a 20-second introduction and translate it into French.",
    alts: ["synthesia", "elevenlabs"], url: "https://www.heygen.com", lesson: "t-video"
  },
  {
    id: "pika", name: "Pika", maker: "Pika", cat: "video", price: "Free + paid plans",
    blurb: "A playful video generator for short clips and fun effects on your own photos.",
    what: "Pika makes short videos from text or images and is known for fun effects, such as making objects in your photo melt, inflate or explode. It's aimed at social media creators.",
    uses: ["Fun clips for social media", "Animating a still image"],
    good: ["Easy and fun", "Good for quick experiments"],
    watch: ["Less suited to professional or long-form work"],
    start: ["Go to pika.art and try an effect on one of your photos"],
    tryit: "Animate a photo of a cake with a playful effect.",
    alts: ["runway", "luma", "kling"], url: "https://pika.art", lesson: "t-video"
  },
  {
    id: "luma", name: "Luma Dream Machine", maker: "Luma AI", cat: "video", price: "Free + paid plans",
    blurb: "A video generator with smooth, realistic camera movement, from text or images.",
    what: "Luma AI's Dream Machine turns text and images into realistic video clips with smooth camera motion. It's popular for product shots, scene ideas and creative experiments.",
    uses: ["Product and scene videos", "Bringing still images to life"],
    good: ["Natural motion and camera moves", "Simple interface"],
    watch: ["Free use is limited and may carry watermarks"],
    start: ["Visit lumalabs.ai and describe a short scene"],
    tryit: "Turn a photo of a coffee cup into a slow orbiting shot with steam rising.",
    alts: ["runway", "pika", "sora"], url: "https://lumalabs.ai", lesson: "t-video"
  },
  {
    id: "kling", name: "Kling", maker: "Kuaishou (China)", cat: "video", price: "Free credits + paid plans",
    blurb: "A strong video generator from Chinese company Kuaishou, known for realistic motion.",
    what: "Kling is a video-generation tool from Kuaishou, the company behind a large Chinese short-video app. It produces realistic clips with convincing human movement and has quickly become one of the most used video generators worldwide.",
    uses: ["Realistic short video clips", "Animating images"],
    good: ["Realistic motion", "Daily free credits"],
    watch: ["Data is handled by a Chinese company; avoid uploading personal or confidential images", "Content rules follow Chinese regulations"],
    start: ["Try it with a non-personal image, such as a landscape"],
    tryit: "Generate a clip of waves crashing on rocks at sunset and compare it with another tool.",
    alts: ["sora", "veo", "runway"], url: "https://klingai.com", lesson: "t-video"
  },
  {
    id: "capcut", name: "CapCut", maker: "ByteDance", cat: "video", price: "Free + paid plans",
    blurb: "A popular free video editor with AI auto-captions, background removal and effects.",
    what: "CapCut is a video editor for phone, computer and web made by ByteDance, the company behind TikTok. It's packed with AI features: automatic captions, removing backgrounds without a green screen, turning long videos into short clips, voice effects and templates.",
    uses: ["Editing short videos for social media", "Adding accurate captions automatically"],
    good: ["Free and very capable", "Auto-captions save lots of time"],
    watch: ["Its terms give it broad rights over content you upload; read them", "Ownership by ByteDance raises data concerns for some organisations"],
    start: ["Install CapCut and import a short clip", "Use Auto captions and fix any errors"],
    tryit: "Film a 30-second clip on your phone and add auto-captions in a clear style.",
    alts: ["descript", "opus-clip"], url: "https://www.capcut.com", lesson: "t-video"
  },
  {
    id: "opus-clip", name: "OpusClip", maker: "OpusClip", cat: "video", price: "Free + paid plans",
    blurb: "Turns a long video, like a podcast or talk, into short clips ready for social media.",
    what: "OpusClip watches a long video, picks out the most interesting moments, reframes them for phone screens, adds captions and scores how likely each clip is to do well.",
    uses: ["Turning podcasts and webinars into short clips", "Saving editing time for creators"],
    good: ["Fast, with captions included", "Good at finding highlights"],
    watch: ["Its choice of highlights can miss context; review each clip"],
    start: ["Paste a YouTube link at opus.pro"],
    tryit: "Give it a talk you've enjoyed on YouTube and see which moments it picks.",
    alts: ["capcut", "descript"], url: "https://www.opus.pro", lesson: "t-video"
  },

  /* ---------------- Music ---------------- */
  {
    id: "suno", name: "Suno", maker: "Suno", cat: "music", price: "Free + paid plans",
    blurb: "Creates full songs, with vocals and lyrics, from a short description.",
    what: "Suno makes complete songs, with singing, instruments and lyrics, from a short description of the style and subject, or from lyrics you write. You can extend, remix and edit songs.",
    uses: ["A personalised song for a birthday", "Jingles and background music ideas", "Playing with musical styles"],
    good: ["Surprisingly complete, catchy songs", "Very easy to use"],
    watch: ["Big record labels sued Suno in 2024 over training on their recordings; licensing deals and rules have been changing since", "Commercial use depends on your plan; check what you're allowed to do with songs"],
    start: ["Sign up at suno.com and describe a song in one line"],
    tryit: "Ask for \"an upbeat acoustic song about learning AI one lesson at a time\".",
    alts: ["udio", "elevenlabs"], url: "https://suno.com", lesson: "t-video"
  },
  {
    id: "udio", name: "Udio", maker: "Udio", cat: "music", price: "Free + paid plans",
    blurb: "An AI music generator known for high audio quality and fine control over song sections.",
    what: "Udio generates songs from text descriptions and lets you build them section by section. Following legal action and a settlement with a major label in 2025, it has been reshaping its service around licensed music, so features such as downloads have changed.",
    uses: ["Experimenting with music styles", "Building a song piece by piece"],
    good: ["High audio quality", "Fine control over each part"],
    watch: ["Its features and terms have been changing as it moves to licensed music; check the current rules"],
    start: ["Visit udio.com and try a short description"],
    tryit: "Generate a 30-second jazz intro, then extend it with a chorus.",
    alts: ["suno"], url: "https://www.udio.com", lesson: "t-video"
  },

  /* ---------------- Design and presentations ---------------- */
  {
    id: "canva", name: "Canva", maker: "Canva (Australia)", cat: "design", price: "Free + paid plans",
    blurb: "The easy design tool for posters, social posts and slides, with a full set of AI features.",
    what: "Canva is a drag-and-drop design tool used by hundreds of millions of people. Its AI features (Magic Studio and Canva AI) generate designs, images and text from a description, remove backgrounds, resize a design for every social network, and turn documents into presentations.",
    uses: ["Social posts, posters and flyers", "Presentations", "Quick photo edits"],
    good: ["Very easy for beginners", "Huge template library", "Strong free plan"],
    watch: ["Designs built from popular templates can look similar to everyone else's", "Some AI features and assets need Canva Pro"],
    start: ["Sign up at canva.com and pick a template", "Try Magic Design: describe what you need"],
    tryit: "Describe a poster for a local book club meeting and let Canva draft three designs.",
    alts: ["gamma", "ms-designer", "firefly"], url: "https://www.canva.com", lesson: "t-design"
  },
  {
    id: "gamma", name: "Gamma", maker: "Gamma", cat: "design", price: "Free + paid plans",
    blurb: "Type a topic or paste notes and get a complete, good-looking presentation in a minute.",
    what: "Gamma creates presentations, documents and simple websites from a prompt or your notes. It drafts the outline, writes the slides and lays them out with images, and you edit by chatting or by hand. You can export to PowerPoint or PDF.",
    uses: ["A first draft of a presentation", "Turning notes into slides", "Simple one-page websites"],
    good: ["Very fast first drafts", "Clean modern designs"],
    watch: ["Check every fact it adds to slides", "Your own story and examples make a talk; don't let the draft replace them"],
    start: ["Sign up at gamma.app and paste in some notes", "Edit the outline before it builds the slides"],
    tryit: "Paste your notes from one lesson and make a six-slide summary you could present to a friend.",
    alts: ["canva", "beautiful-ai", "m365-copilot"], url: "https://gamma.app", lesson: "t-design"
  },
  {
    id: "beautiful-ai", name: "Beautiful.ai", maker: "Beautiful.ai", cat: "design", price: "Paid (free trial)",
    blurb: "Presentation software whose smart templates keep slides tidy and on-brand automatically.",
    what: "Beautiful.ai uses smart slide templates that rearrange themselves as you add content, so slides always look neat. Its AI can draft a whole deck from a prompt, and teams can lock in brand colours and fonts.",
    uses: ["Business presentations", "Team decks that stay on-brand"],
    good: ["Slides always look tidy", "Good for teams"],
    watch: ["Less freedom than PowerPoint for unusual layouts", "Paid after the trial"],
    start: ["Start a trial and generate a deck from a prompt"],
    tryit: "Generate a five-slide pitch for a neighbourhood community garden.",
    alts: ["gamma", "canva"], url: "https://www.beautiful.ai", lesson: "t-design"
  },
  {
    id: "figma", name: "Figma", maker: "Figma", cat: "design", price: "Free + paid plans",
    blurb: "The leading tool for designing apps and websites, now with AI that turns prompts into designs and prototypes.",
    what: "Figma is where most app and website designs are made, collaboratively in the browser. Its AI features can generate design ideas, rename and tidy layers, write placeholder text and, with Figma Make, turn a description into a working prototype.",
    uses: ["Designing app and website screens", "Clickable prototypes", "Collaborating with developers"],
    good: ["Industry standard, with real-time collaboration", "Free plan for individuals"],
    watch: ["There's a learning curve for beginners"],
    start: ["Sign up at figma.com and open a community template", "Try generating a first screen from a prompt"],
    tryit: "Ask for a home screen for a simple habit-tracking app, then change its colours.",
    alts: ["canva", "v0", "lovable"], url: "https://www.figma.com", lesson: "t-design"
  },

  /* ---------------- Coding ---------------- */
  {
    id: "github", name: "GitHub", maker: "GitHub (owned by Microsoft)", cat: "coding", price: "Free + paid plans",
    blurb: "Where most of the world's code lives: store projects, track every change and work together.",
    what: "GitHub isn't an AI tool in itself; it's the home of most of the world's code, and the place where AI coding tools do much of their work. It stores projects (repositories) using Git, which records every change so you can see who changed what and undo mistakes. People suggest changes through pull requests, which others review before they're merged. GitHub Pages can host a simple website for free, which is how your academy is published.",
    uses: ["Storing and backing up code", "Working with others through pull requests and reviews", "Free website hosting with GitHub Pages", "Finding open-source projects and AI models"],
    good: ["Free for public and private projects", "Every change is recorded and can be undone", "Home of GitHub Copilot and many AI coding agents"],
    watch: ["Never put passwords or API keys in a repository; bots scan public code for them within minutes", "Public repositories can be seen by anyone"],
    start: ["Create a free account at github.com", "Look around a popular project, such as the one for Whisper", "Open the History of a file to see how changes are tracked"],
    tryit: "Look at the commit history of your own academy's repository and find the change that added this tools directory.",
    alts: ["github-copilot", "replit"], url: "https://github.com", lesson: "t-coding"
  },
  {
    id: "github-copilot", name: "GitHub Copilot", maker: "GitHub (Microsoft)", cat: "coding", price: "Free tier + paid plans",
    blurb: "The most widely used AI pair programmer: suggests code as you type and can work on tasks by itself.",
    what: "GitHub Copilot suggests code as you type in editors like VS Code, answers questions about code in a chat, and has an agent mode that can make changes across many files. Its coding agent can even be given a GitHub issue and come back with a pull request for you to review. You can choose between models from several AI companies.",
    uses: ["Code suggestions while typing", "Explaining unfamiliar code", "Writing tests and fixing bugs", "Handing small tasks to an agent that opens a pull request"],
    good: ["Built into popular editors and GitHub itself", "Free tier for individuals; free for verified students and teachers"],
    watch: ["Review every suggestion: AI code can contain bugs and security holes", "Check your organisation's policy before using it on work code"],
    start: ["Sign in to GitHub and turn on Copilot Free", "Install VS Code and the Copilot extension", "Write a comment describing a function and watch it suggest the code"],
    tryit: "In VS Code, type a comment: \"# function that converts Celsius to Fahrenheit\" and accept the suggestion, then ask Copilot Chat to explain it.",
    alts: ["cursor", "claude-code", "codex"], url: "https://github.com/features/copilot", lesson: "t-coding"
  },
  {
    id: "cursor", name: "Cursor", maker: "Anysphere", cat: "coding", price: "Free + paid plans",
    blurb: "A code editor built around AI: chat with your whole project and let an agent make multi-file changes.",
    what: "Cursor is a code editor (based on VS Code) designed around AI. It understands your whole project, predicts your next edit, and its agent can plan and carry out changes across many files, run commands and fix errors, while you review each change.",
    uses: ["Building and changing whole features with AI help", "Understanding a large unfamiliar codebase", "Refactoring code"],
    good: ["Feels like a normal editor with powerful AI built in", "Choice of models from several providers"],
    watch: ["Easy to accept changes you don't understand; read the diffs", "Heavy use of top models costs extra"],
    start: ["Download Cursor from cursor.com", "Open a project and ask: \"Explain how this project is organised\""],
    tryit: "Open a small project and ask the agent to add a dark mode, then read every change it proposes.",
    alts: ["github-copilot", "windsurf", "claude-code"], url: "https://cursor.com", lesson: "t-coding"
  },
  {
    id: "claude-code", name: "Claude Code", maker: "Anthropic", cat: "coding", price: "Included in Claude paid plans",
    blurb: "An AI coding agent you give tasks to in plain English; it reads your project, writes code and runs tests.",
    what: "Claude Code is Anthropic's agentic coding tool. It works in your terminal, in code editors, in the Claude apps and on the web. You describe what you want and it explores the code, makes a plan, edits files, runs commands and tests, and can open pull requests on GitHub. Your academy website was built and is maintained with it.",
    uses: ["Building features from a plain-English description", "Fixing bugs and writing tests", "Working through a list of changes on GitHub"],
    good: ["Handles big, multi-step tasks across a whole project", "Works in many places: terminal, editor, web and phone"],
    watch: ["It acts on your files and can run commands, so review its plans and use its permission settings", "Needs a paid Claude plan or API usage"],
    start: ["With a paid Claude plan, open Claude Code on the web or install it in a terminal", "Start with a small task in a test project"],
    tryit: "Ask it to add a small new feature to a test project, and read the plan before letting it make changes.",
    alts: ["codex", "cursor", "github-copilot"], url: "https://www.anthropic.com/claude-code", lesson: "c-code"
  },
  {
    id: "codex", name: "OpenAI Codex", maker: "OpenAI", cat: "coding", price: "Included in ChatGPT paid plans",
    blurb: "OpenAI's coding agent: hand it tasks from ChatGPT, your editor or terminal and review what it returns.",
    what: "Codex is OpenAI's software engineering agent. You can give it tasks from ChatGPT, a command line tool or your editor; it works in a safe cloud copy of your project, writes and tests code, and returns changes for you to review or turn into a pull request.",
    uses: ["Delegating several coding tasks in parallel", "Fixing bugs and writing tests", "Code review"],
    good: ["Runs tasks in the background while you do other work", "Available inside ChatGPT"],
    watch: ["Always review the changes before merging", "Needs a paid ChatGPT plan"],
    start: ["In ChatGPT, open Codex and connect a GitHub repository", "Give it a small, clear task"],
    tryit: "Ask it to find and fix any spelling mistakes in a project's README file.",
    alts: ["claude-code", "github-copilot", "cursor"], url: "https://openai.com/codex", lesson: "t-coding"
  },
  {
    id: "windsurf", name: "Windsurf", maker: "Cognition", cat: "coding", price: "Free + paid plans",
    blurb: "An AI-first code editor with an agent called Cascade that follows what you're doing.",
    what: "Windsurf is an AI code editor, similar in spirit to Cursor. Its agent, Cascade, keeps track of your recent actions so it can help with what you're in the middle of. It was bought by Cognition, makers of the Devin coding agent, in 2025.",
    uses: ["AI-assisted coding in a full editor", "Multi-file changes with an agent"],
    good: ["Generous free tier", "Agent that follows your context"],
    watch: ["Ownership changes in 2025 mean features may keep shifting"],
    start: ["Download Windsurf and open a small project"],
    tryit: "Ask Cascade to write a short README for a project you've opened.",
    alts: ["cursor", "github-copilot"], url: "https://windsurf.com", lesson: "t-coding"
  },
  {
    id: "gemini-cli", name: "Gemini CLI", maker: "Google", cat: "coding", price: "Free (with limits) + paid",
    blurb: "Google's open-source AI agent for the command line, with a generous free allowance.",
    what: "Gemini CLI brings Gemini into the terminal, the text window developers use to run commands. It can read and change code, run commands, search the web and automate tasks. It's open source and offers a generous free allowance with a Google account.",
    uses: ["Coding help in the terminal", "Automating file and project chores"],
    good: ["Open source", "Large free allowance"],
    watch: ["Terminal tools can change files and run commands; check before approving"],
    start: ["Install it following the instructions on its GitHub page and sign in with Google"],
    tryit: "In a folder of files, ask it to list what's there and summarise each file in one line.",
    alts: ["claude-code", "codex"], url: "https://github.com/google-gemini/gemini-cli", lesson: "t-coding"
  },
  {
    id: "tabnine", name: "Tabnine", maker: "Tabnine", cat: "coding", price: "Paid (trial)",
    blurb: "A coding assistant focused on privacy, which companies can run on their own servers.",
    what: "Tabnine is an AI coding assistant designed for companies with strict privacy needs. It can run inside a company's own infrastructure, so code never leaves, and it promises not to train on customers' code.",
    uses: ["AI coding help in regulated industries like banking and healthcare"],
    good: ["Strong privacy options, including fully private deployment"],
    watch: ["Mainly aimed at businesses rather than individuals"],
    start: ["See tabnine.com for a trial"],
    tryit: "Compare its privacy promises with another coding assistant's terms.",
    alts: ["github-copilot", "cursor"], url: "https://www.tabnine.com", lesson: "t-coding"
  },

  /* ---------------- Building apps without code ---------------- */
  {
    id: "replit", name: "Replit", maker: "Replit", cat: "nocode", price: "Free + paid plans",
    blurb: "Build and publish apps in your browser; its Agent builds a working app from a description.",
    what: "Replit is a complete coding environment in the browser: write code, run it and publish it online without installing anything. Replit Agent can build an app from a plain-English description, including the database and login, and then keep improving it as you ask.",
    uses: ["Building a small app or website from an idea", "Learning to code with nothing to install", "Hosting simple tools online"],
    good: ["Everything in the browser, from code to hosting", "Agent can go from idea to working app quickly"],
    watch: ["Agent usage is charged by effort and can add up", "Apps built quickly still need checking for security and privacy", "In 2025 a Replit agent deleted a user's live database during a test; keep backups and limit what agents can touch"],
    start: ["Sign up at replit.com", "Describe a small app, such as a reading-list tracker", "Test it, then ask for one improvement at a time"],
    tryit: "Ask Agent: \"Build a simple app where I can log which AI tools I've tried and rate them out of five.\"",
    alts: ["lovable", "bolt", "v0"], url: "https://replit.com", lesson: "t-nocode"
  },
  {
    id: "lovable", name: "Lovable", maker: "Lovable (Sweden)", cat: "nocode", price: "Free + paid plans",
    blurb: "Describe a website or app in chat and Lovable builds it, with a database, logins and hosting.",
    what: "Lovable is a Swedish app builder: you describe what you want in a chat, it builds a polished web app, and you refine it by chatting. It connects to Supabase for databases and logins, syncs code to GitHub, and publishes your app with a link. It grew to be one of the fastest-growing software companies in Europe.",
    uses: ["Prototypes and small business apps", "Personal tools and websites"],
    good: ["Polished-looking results quickly", "Code is yours on GitHub"],
    watch: ["Check security settings before storing real users' data", "Complex apps eventually need a developer's eye"],
    start: ["Sign up at lovable.dev and describe a one-page app"],
    tryit: "Describe a booking page for a small yoga class and ask for a waiting list when it's full.",
    alts: ["replit", "bolt", "v0"], url: "https://lovable.dev", lesson: "t-nocode"
  },
  {
    id: "bolt", name: "Bolt", maker: "StackBlitz", cat: "nocode", price: "Free + paid plans",
    blurb: "Prompt, run, edit and deploy full web apps from your browser.",
    what: "Bolt (bolt.new) builds web apps from a prompt and runs them right in your browser, so you can see and use the app instantly, edit it by chatting or by changing the code, and publish it.",
    uses: ["Quick prototypes", "Small web tools and sites"],
    good: ["Very fast from idea to running app", "Can switch between chat and code"],
    watch: ["Usage is measured in tokens, which can run out on bigger projects"],
    start: ["Go to bolt.new and describe an app"],
    tryit: "Ask for a simple quiz app with five questions about AI tools.",
    alts: ["lovable", "replit", "v0"], url: "https://bolt.new", lesson: "t-nocode"
  },
  {
    id: "v0", name: "v0", maker: "Vercel", cat: "nocode", price: "Free + paid plans",
    blurb: "Vercel's AI app builder, strong at clean, modern website and interface designs.",
    what: "v0 by Vercel generates websites and web apps from a description or a screenshot, using modern web building blocks. It's especially good at clean interfaces and can publish straight to Vercel's hosting.",
    uses: ["Landing pages and dashboards", "Turning a sketch or screenshot into a working page"],
    good: ["Clean, professional-looking interfaces", "One-click publishing"],
    watch: ["Best for web interfaces; complex back ends need more work"],
    start: ["Go to v0.app and describe a landing page"],
    tryit: "Upload a screenshot of a website you like and ask for a similar layout for your own project.",
    alts: ["lovable", "bolt", "figma"], url: "https://v0.app", lesson: "t-nocode"
  },
  {
    id: "bubble", name: "Bubble", maker: "Bubble", cat: "nocode", price: "Free + paid plans",
    blurb: "A visual no-code platform for building serious web apps, now with AI to generate the first version.",
    what: "Bubble lets you build web apps visually, by dragging elements and setting up workflows, without writing code. Its AI can generate a first version from a description, which you then edit visually. Many startups have launched products on it.",
    uses: ["Marketplaces, booking systems and internal tools", "Launching a startup idea without hiring developers"],
    good: ["Mature platform for real apps", "Visual editing you can understand"],
    watch: ["Your app lives on Bubble's platform and can't easily be moved", "Takes time to learn properly"],
    start: ["Sign up at bubble.io and try generating an app"],
    tryit: "Generate a simple marketplace for swapping second-hand books.",
    alts: ["lovable", "replit"], url: "https://bubble.io", lesson: "t-nocode"
  },
  {
    id: "google-ai-studio", name: "Google AI Studio", maker: "Google", cat: "nocode", price: "Free (with limits) + paid API",
    blurb: "Google's free playground for trying Gemini models and building small AI apps from a prompt.",
    what: "Google AI Studio is a free web playground for Gemini models. You can test prompts, adjust settings like temperature, try image, video and speech models, build small AI-powered apps from a description, and get an API key to use Gemini in your own code.",
    uses: ["Experimenting with prompts and model settings", "Building a quick AI app", "Getting a free API key for learning"],
    good: ["Generous free use", "See the settings you learned about, like temperature, in action"],
    watch: ["On the free tier, Google may use your inputs to improve its products; don't use private data"],
    start: ["Go to aistudio.google.com and sign in", "Try the same prompt at two temperatures"],
    tryit: "Set temperature to 0 and then to 1.5 and ask for a story opening each time.",
    alts: ["claude-platform", "openai-platform", "hugging-face"], url: "https://aistudio.google.com", lesson: "t-nocode"
  },

  /* ---------------- Automation and agents ---------------- */
  {
    id: "zapier", name: "Zapier", maker: "Zapier", cat: "automation", price: "Free + paid plans",
    blurb: "Connects thousands of apps so that something happening in one triggers actions in others, with AI steps.",
    what: "Zapier links over 7,000 apps. You build \"Zaps\": when something happens (a form is filled in), do these things (add a row to a spreadsheet, send an email). AI steps can summarise, sort or draft text in the middle, and Zapier Agents can carry out tasks more independently.",
    uses: ["Saving form replies to a spreadsheet and sending a thank-you email", "Sorting incoming emails with AI and alerting you", "Posting the same update to several places"],
    good: ["Connects almost any app", "Easy to start, with templates"],
    watch: ["Automations run without you watching, so test them carefully", "Costs grow with the number of tasks"],
    start: ["Sign up at zapier.com and pick a template", "Test it with one example before turning it on"],
    tryit: "Make a Zap: when you star an email in Gmail, add its subject to a Google Sheet.",
    alts: ["make", "n8n", "power-automate"], url: "https://zapier.com", lesson: "t-automation"
  },
  {
    id: "make", name: "Make", maker: "Make (Celonis)", cat: "automation", price: "Free + paid plans",
    blurb: "A visual automation builder where you connect apps and AI on a canvas, like a flowchart.",
    what: "Make (formerly Integromat) lets you build automations visually, as a flowchart of connected apps. It handles branches, loops and data shaping well, and has AI modules and agents.",
    uses: ["More complex automations with several branches", "Processing data between apps"],
    good: ["Visual and powerful", "Often cheaper than Zapier for heavy use"],
    watch: ["A steeper learning curve than Zapier"],
    start: ["Sign up at make.com and open a template scenario"],
    tryit: "Build a scenario that watches an RSS feed and asks AI to summarise each new article.",
    alts: ["zapier", "n8n"], url: "https://www.make.com", lesson: "t-automation"
  },
  {
    id: "n8n", name: "n8n", maker: "n8n (Germany)", cat: "automation", price: "Free to self-host + paid cloud",
    blurb: "A flexible workflow tool loved by technical users, which you can run on your own server.",
    what: "n8n is a workflow automation tool with a visual editor, strong AI agent features and the option to host it yourself. That makes it popular with developers and with organisations that need to keep data in-house.",
    uses: ["AI agent workflows", "Automations that must keep data on your own servers"],
    good: ["Can run on your own server", "Very flexible, with code when you need it"],
    watch: ["Self-hosting means you're responsible for security and updates"],
    start: ["Try the cloud version at n8n.io, or explore templates"],
    tryit: "Open an AI agent template and trace what each step does.",
    alts: ["make", "zapier"], url: "https://n8n.io", lesson: "t-automation"
  },
  {
    id: "power-automate", name: "Power Automate and Copilot Studio", maker: "Microsoft", cat: "automation", price: "Included in some Microsoft 365 plans + paid",
    blurb: "Microsoft's tools for automating work and building custom AI agents inside Microsoft 365.",
    what: "Power Automate automates tasks across Microsoft and other apps, including clicking through older programs on a computer. Copilot Studio lets organisations build their own AI agents that answer questions from company documents or carry out tasks. You can describe an automation in plain English to get started.",
    uses: ["Approval workflows and routine office tasks", "A company help bot built on internal documents"],
    good: ["Deep connection to Microsoft 365", "Enterprise security and admin controls"],
    watch: ["Licensing can be complicated", "Mostly used inside organisations"],
    start: ["If your workplace uses Microsoft 365, open Power Automate and describe a flow"],
    tryit: "Describe: \"When I get an email with an attachment, save the attachment to OneDrive.\"",
    alts: ["zapier", "m365-copilot"], url: "https://www.microsoft.com/power-platform/products/power-automate", lesson: "t-automation"
  },
  {
    id: "comet", name: "Comet (AI browser)", maker: "Perplexity", cat: "automation", price: "Free + paid plans",
    blurb: "A web browser with an AI assistant that can read pages and carry out tasks for you, like booking or shopping.",
    what: "Comet is Perplexity's web browser with an assistant built in. It can summarise the page you're on, compare tabs, and act for you, such as filling in forms or doing a shopping task. Other \"agentic browsers\", including OpenAI's ChatGPT Atlas, work in a similar way.",
    uses: ["Summarising and comparing open tabs", "Delegating routine web tasks"],
    good: ["Assistance right where you browse"],
    watch: ["Web pages can hide instructions that try to hijack an AI agent (prompt injection, from Level 7); don't give it access to banking or sensitive accounts", "Check its actions before anything is bought or sent"],
    start: ["Download Comet and ask it to summarise a page", "Start with tasks that can't do harm, like research"],
    tryit: "Open three product reviews in tabs and ask it to compare them in a table.",
    alts: ["chatgpt", "perplexity"], url: "https://www.perplexity.ai/comet", lesson: "t-automation"
  },

  /* ---------------- Models and platforms for builders ---------------- */
  {
    id: "hugging-face", name: "Hugging Face", maker: "Hugging Face", cat: "builders", price: "Free + paid plans",
    blurb: "The \"GitHub of AI\": hundreds of thousands of open models and datasets, plus free demos to try them.",
    what: "Hugging Face is the main home of open AI. It hosts a vast number of models and datasets that anyone can download, Spaces where people publish free demos of AI apps, and popular code libraries such as Transformers, which you'd use to run models in Python.",
    uses: ["Trying new open models in the browser", "Finding a model or dataset for a project", "Sharing your own demo app"],
    good: ["Free and open, with a huge community", "Model cards explain what each model is for and its limits"],
    watch: ["Quality varies; check a model's card, licence and downloads", "Don't run code from unknown models without care"],
    start: ["Visit huggingface.co and browse Spaces", "Try a demo for speech, images or translation"],
    tryit: "Search Spaces for \"background removal\" and try one with a photo.",
    alts: ["ollama", "kaggle", "github"], url: "https://huggingface.co", lesson: "t-nocode"
  },
  {
    id: "ollama", name: "Ollama", maker: "Ollama", cat: "builders", price: "Free and open source",
    blurb: "Run open AI models on your own computer, privately and offline, with one command.",
    what: "Ollama makes it easy to download and run open-weight language models, such as Llama, Mistral, Gemma, Qwen or DeepSeek, on your own computer. Nothing you type leaves your machine, and it works offline. Developers can call it from their own programs too.",
    uses: ["Private chat with documents that must not leave your computer", "Experimenting with different open models", "Building apps on local models"],
    good: ["Private and free", "Simple to install, with a desktop app"],
    watch: ["Local models are smaller and less capable than the best online ones", "Larger models need a powerful computer with plenty of memory"],
    start: ["Download Ollama from ollama.com", "Pull a small model and chat with it"],
    tryit: "Turn off your Wi-Fi and chat with a small model to see that it really runs offline.",
    alts: ["lm-studio", "hugging-face"], url: "https://ollama.com", lesson: "t-choosing"
  },
  {
    id: "lm-studio", name: "LM Studio", maker: "LM Studio", cat: "builders", price: "Free",
    blurb: "A friendly desktop app for finding, downloading and chatting with open models on your own computer.",
    what: "LM Studio is a desktop app with a simple chat window for running open models locally. It helps you pick models that will fit your computer's memory and lets you chat with your own documents privately.",
    uses: ["Private local AI without the command line", "Comparing open models side by side"],
    good: ["Beginner-friendly", "Shows which models suit your computer"],
    watch: ["Same limits as any local model: smaller and slower than top online models"],
    start: ["Download from lmstudio.ai and pick a recommended small model"],
    tryit: "Ask the same question to two different local models and compare.",
    alts: ["ollama", "hugging-face"], url: "https://lmstudio.ai", lesson: "t-choosing"
  },
  {
    id: "google-colab", name: "Google Colab", maker: "Google", cat: "builders", price: "Free + paid plans",
    blurb: "Free Python notebooks in your browser, with free GPU time and Gemini to help write the code.",
    what: "Colab gives you Jupyter notebooks in the browser, with Python and the main data science libraries ready to go, plus free (limited) access to GPUs for training models. Gemini is built in to write, explain and fix code. It's the natural next step after the Python boxes in Level 4.",
    uses: ["Running the Python you learned in Level 4 on bigger data", "Training small models on a free GPU", "Sharing notebooks"],
    good: ["Nothing to install", "Free GPU access for learning"],
    watch: ["Free sessions time out and GPUs aren't guaranteed", "Don't upload sensitive data"],
    start: ["Go to colab.research.google.com and create a notebook", "Paste in code from one of your Level 4 lessons and run it"],
    tryit: "Run a Level 4 pandas example in Colab and ask Gemini to add a chart.",
    alts: ["kaggle", "replit"], url: "https://colab.research.google.com", lesson: "t-coding"
  },
  {
    id: "kaggle", name: "Kaggle", maker: "Google", cat: "builders", price: "Free",
    blurb: "Free datasets, notebooks, courses and machine learning competitions.",
    what: "Kaggle is a community for data science and machine learning. It has thousands of free datasets, free notebooks with GPUs, short courses, and competitions where people compete to build the best model for a real problem.",
    uses: ["Finding datasets to practise on", "Learning from other people's notebooks", "Entering beginner competitions"],
    good: ["Free and full of real examples", "Great for practising Level 4 and 5 skills"],
    watch: ["Competition code can be very advanced; start with beginner ones"],
    start: ["Sign up at kaggle.com and try the Titanic beginner competition"],
    tryit: "Open a popular notebook for the Titanic competition and find where they handle missing data.",
    alts: ["google-colab", "hugging-face"], url: "https://www.kaggle.com", lesson: "t-coding"
  },
  {
    id: "openai-platform", name: "OpenAI API Platform", maker: "OpenAI", cat: "builders", price: "Pay as you go",
    blurb: "Use OpenAI's models in your own apps through an API, paying per token.",
    what: "The OpenAI Platform gives developers access to OpenAI's models through an API, with tools for building agents, search over files, speech and images. You pay per token used, as you learned in Level 7.",
    uses: ["Adding AI to your own app or website", "Building chatbots and agents"],
    good: ["Wide range of models and tools", "Extensive documentation"],
    watch: ["Keep API keys secret and set spending limits"],
    start: ["Create an account at platform.openai.com, add a small budget and set a limit"],
    tryit: "Use the Playground to test a system prompt before writing any code.",
    alts: ["claude-platform", "google-ai-studio"], url: "https://platform.openai.com", lesson: "t-nocode"
  },
  {
    id: "claude-platform", name: "Claude Developer Platform", maker: "Anthropic", cat: "builders", price: "Pay as you go",
    blurb: "Use Claude models in your own programs through Anthropic's API, with a Console for testing prompts.",
    what: "Anthropic's developer platform offers Claude models through an API, with features such as tool use, prompt caching and batch processing (all covered in Level 7), and a Console for writing and testing prompts.",
    uses: ["Building apps and agents on Claude", "Processing large numbers of documents"],
    good: ["Strong models for long documents, coding and agents", "Clear documentation"],
    watch: ["Keep keys on a server, never in web page code", "Set spending limits"],
    start: ["Create an account in the Claude Console, add a small budget and test a prompt in the Workbench"],
    tryit: "Write a system prompt for a helpful bike shop assistant and test it with three customer questions.",
    alts: ["openai-platform", "google-ai-studio"], url: "https://console.anthropic.com", lesson: "c-platform"
  },

  /* ---------------- Learning and study ---------------- */
  {
    id: "khanmigo", name: "Khanmigo", maker: "Khan Academy (non-profit)", cat: "learning", price: "Free for teachers; low-cost for learners",
    blurb: "Khan Academy's AI tutor, which guides you to the answer with questions instead of just giving it.",
    what: "Khanmigo is an AI tutor from the non-profit Khan Academy. Rather than handing over answers, it asks guiding questions and gives hints, the way a good tutor does. It's free for teachers in many countries and helps them plan lessons.",
    uses: ["Learning maths and science step by step", "Practising essay writing with feedback", "Lesson planning for teachers"],
    good: ["Designed to teach, not to do the work for you", "Backed by a respected education non-profit"],
    watch: ["Availability and pricing vary by country"],
    start: ["Visit khanmigo.ai and see what's available where you live"],
    tryit: "Ask it for help with a maths problem and notice how it makes you do the thinking.",
    alts: ["chatgpt", "photomath", "duolingo"], url: "https://www.khanmigo.ai", lesson: "t-everyday"
  },
  {
    id: "photomath", name: "Photomath", maker: "Google", cat: "learning", price: "Free + paid plans",
    blurb: "Point your phone at a maths problem and see a step-by-step explanation of how to solve it.",
    what: "Photomath reads a printed or handwritten maths problem through your camera and shows the solution step by step, with explanations of each step. It's owned by Google.",
    uses: ["Checking homework and understanding each step", "Revising maths"],
    good: ["Clear step-by-step explanations", "Handles handwriting"],
    watch: ["Copying answers doesn't build understanding; try first, then check"],
    start: ["Install Photomath and point it at a maths problem"],
    tryit: "Write an equation by hand, scan it, and follow each step of the explanation.",
    alts: ["wolfram-alpha", "khanmigo"], url: "https://photomath.com", lesson: "t-everyday"
  },
  {
    id: "wolfram-alpha", name: "Wolfram|Alpha", maker: "Wolfram Research", cat: "learning", price: "Free + paid plans",
    blurb: "A computational knowledge engine: exact answers to maths, science and data questions, not guesses.",
    what: "Wolfram|Alpha computes answers instead of searching for them. Ask it a maths problem, a unit conversion, a chemistry question or a statistic and it calculates the answer from curated data and rules. It's a good partner for chatbots, which can be weak at exact calculation.",
    uses: ["Maths, from arithmetic to calculus, with steps on the paid plan", "Unit conversions and science facts", "Checking numbers a chatbot gave you"],
    good: ["Exact, calculated answers", "Decades of curated data"],
    watch: ["You need to phrase questions fairly precisely"],
    start: ["Go to wolframalpha.com and type a calculation or question"],
    tryit: "Ask: \"distance from London to Tokyo in miles\", then \"derivative of x^3 sin x\".",
    alts: ["photomath", "chatgpt"], url: "https://www.wolframalpha.com", lesson: "t-everyday"
  },
  {
    id: "quizlet", name: "Quizlet", maker: "Quizlet", cat: "learning", price: "Free + paid plans",
    blurb: "Flashcards and study games, with AI that turns your notes into flashcards and practice tests.",
    what: "Quizlet is a study app built around flashcards. Its AI features can turn your notes or documents into flashcard sets and practice tests, and adapt practice to what you find hard.",
    uses: ["Learning vocabulary and key terms", "Turning notes into practice tests"],
    good: ["Easy, effective practice", "Huge library of shared sets"],
    watch: ["Check AI-made cards for mistakes before learning them"],
    start: ["Sign up and make a set from a page of notes"],
    tryit: "Make flashcards from the key terms of this level and practise them for five minutes.",
    alts: ["notebooklm", "khanmigo"], url: "https://quizlet.com", lesson: "t-everyday"
  },

  /* ---------------- Everyday and accessibility ---------------- */
  {
    id: "apple-intelligence", name: "Apple Intelligence and Siri", maker: "Apple", cat: "everyday", price: "Free on supported devices",
    blurb: "Apple's AI on iPhone, iPad and Mac: writing tools, photo clean-up, summaries and a smarter Siri.",
    what: "Apple Intelligence is Apple's set of AI features built into recent iPhones, iPads and Macs. It includes writing tools that proofread and rewrite text anywhere, notification and email summaries, Clean Up to remove objects from photos, and live translation. Much of it runs on the device itself, and Siri can hand harder questions to ChatGPT if you allow it.",
    uses: ["Proofreading a message in any app", "Removing a stranger from a holiday photo", "Summaries of long email threads"],
    good: ["Built in and free on supported devices", "Strong privacy design: on-device processing first"],
    watch: ["Only on newer devices", "Early notification summaries made embarrassing mistakes with news headlines; check summaries of important things"],
    start: ["On a supported device, turn it on in Settings, Apple Intelligence and Siri", "Select some text in Notes and try Writing Tools"],
    tryit: "Use Clean Up in the Photos app to remove something distracting from a picture.",
    alts: ["gemini", "alexa", "google-lens"], url: "https://www.apple.com/apple-intelligence/", lesson: "t-everyday"
  },
  {
    id: "alexa", name: "Alexa+", maker: "Amazon", cat: "everyday", price: "Included with Amazon Prime; paid otherwise",
    blurb: "Amazon's rebuilt voice assistant, powered by generative AI, for smart speakers and the home.",
    what: "Alexa+ is Amazon's new generation of its voice assistant, rebuilt on large language models. It holds more natural conversations, remembers preferences and can carry out tasks like booking, ordering and controlling smart home devices.",
    uses: ["Hands-free help in the kitchen and home", "Controlling lights and heating by voice", "Reminders and shopping lists"],
    good: ["Natural conversation by voice", "Works with many smart home devices"],
    watch: ["Speakers listen for the wake word; review your voice recording settings", "Be careful letting it make purchases"],
    start: ["On a compatible Echo device, check whether Alexa+ is available in your country"],
    tryit: "Ask it to plan a week of dinners and add the ingredients to your shopping list.",
    alts: ["apple-intelligence", "gemini"], url: "https://www.amazon.com/alexa-plus", lesson: "t-everyday"
  },
  {
    id: "google-lens", name: "Google Lens", maker: "Google", cat: "everyday", price: "Free",
    blurb: "Point your camera at anything to identify it, translate it, copy its text or search for it.",
    what: "Google Lens uses computer vision to understand what your camera sees. It identifies plants, animals, landmarks and products, copies printed text into your phone, translates signs in place and helps with homework. You can also circle anything on your screen to search for it.",
    uses: ["Identifying a plant, bird or building", "Copying text from a printed page", "Finding where to buy something you see"],
    good: ["Free and quick", "Built into Google apps and many Android phones"],
    watch: ["Plant and mushroom identification can be wrong: never eat a wild plant based on an app"],
    start: ["Open the Google app and tap the camera icon"],
    tryit: "Point Lens at a plant in your home or street and read about it.",
    alts: ["google-translate", "seeing-ai", "merlin"], url: "https://lens.google", lesson: "t-everyday"
  },
  {
    id: "be-my-eyes", name: "Be My Eyes", maker: "Be My Eyes (Denmark)", cat: "everyday", price: "Free",
    blurb: "Helps blind and low-vision people: an AI describes what the camera sees, or volunteers help by video.",
    what: "Be My Eyes connects blind and low-vision people with sighted volunteers through live video. Its Be My AI feature, built on OpenAI's models, describes photos in rich detail and answers follow-up questions, such as reading a label or describing a room.",
    uses: ["Reading labels, letters and menus", "Describing surroundings", "Help from a human volunteer when needed"],
    good: ["Free, life-changing independence for many people", "Combines AI with human help"],
    watch: ["AI descriptions can be wrong; for safety-critical things like medicine labels, double-check with a human"],
    start: ["Install Be My Eyes, or sign up as a volunteer to help others"],
    tryit: "Sign up as a volunteer, or try Be My AI on a photo and see how detailed the description is.",
    alts: ["seeing-ai", "google-lens"], url: "https://www.bemyeyes.com", lesson: "t-everyday"
  },
  {
    id: "seeing-ai", name: "Seeing AI", maker: "Microsoft", cat: "everyday", price: "Free",
    blurb: "A free app that narrates the world for blind and low-vision people: text, people, money and scenes.",
    what: "Seeing AI is a free Microsoft app that speaks aloud what the camera sees: short text as soon as it appears, whole documents, product barcodes, banknotes, people and scenes, with detailed AI descriptions.",
    uses: ["Reading post and documents aloud", "Identifying products and banknotes"],
    good: ["Free, with many specialised modes"],
    watch: ["Like any AI description, it can make mistakes"],
    start: ["Install Seeing AI and try the Short Text mode on a printed page"],
    tryit: "Close your eyes and use it to read the label on something in your kitchen.",
    alts: ["be-my-eyes", "google-lens"], url: "https://www.seeingai.com", lesson: "t-everyday"
  },

  /* ---------------- Specialist and industry ---------------- */
  {
    id: "alphafold", name: "AlphaFold", maker: "Google DeepMind and EMBL-EBI", cat: "industry", price: "Free for research",
    blurb: "Predicts the 3D shape of proteins; its creators shared the 2024 Nobel Prize in Chemistry.",
    what: "AlphaFold predicts the 3D structure of proteins from their sequence of building blocks, a problem that had challenged biologists for 50 years. A free database holds predicted structures for over 200 million proteins, used by millions of researchers to study disease and design medicines. Demis Hassabis and John Jumper shared the 2024 Nobel Prize in Chemistry for it. AlphaFold 3 extends this to how proteins interact with DNA, RNA and drug molecules.",
    uses: ["Drug discovery and disease research", "Understanding how proteins work", "Designing enzymes, for example to break down plastic"],
    good: ["A landmark scientific achievement", "Free database open to everyone"],
    watch: ["Predictions are very good but not perfect; scientists still confirm key structures by experiment"],
    start: ["Explore the AlphaFold Protein Structure Database at alphafold.ebi.ac.uk"],
    tryit: "Search the database for \"haemoglobin\" and rotate the 3D model.",
    alts: ["hugging-face"], url: "https://alphafold.ebi.ac.uk", lesson: "t-industries"
  },
  {
    id: "abridge", name: "Abridge", maker: "Abridge", cat: "industry", price: "Sold to health systems",
    blurb: "Listens to doctor-patient conversations (with consent) and drafts the clinical notes.",
    what: "Abridge is an \"ambient clinical documentation\" tool. With the patient's consent, it listens to the appointment and drafts the medical notes, which the clinician checks and signs. It's used by large US health systems, and similar tools (often called AI scribes) are spreading in the UK's NHS and elsewhere.",
    uses: ["Reducing doctors' paperwork", "More eye contact and attention for patients"],
    good: ["Gives clinicians time back", "Notes link back to the part of the conversation they came from"],
    watch: ["The clinician must check every note: errors in medical records can be serious", "Patients must be told and able to say no"],
    start: ["Not a consumer app; ask your doctor whether they use an AI scribe"],
    tryit: "Next time you see a doctor, notice whether they use a tool like this and how they explain it.",
    alts: ["otter"], url: "https://www.abridge.com", lesson: "t-industries"
  },
  {
    id: "harvey", name: "Harvey", maker: "Harvey", cat: "industry", price: "Sold to law firms and companies",
    blurb: "An AI platform for lawyers: research, contract review and drafting, used by large law firms.",
    what: "Harvey is AI built for legal and professional services work. Lawyers use it to research case law, review and compare contracts, and draft documents, within the security that law firms need.",
    uses: ["Reviewing large numbers of contracts", "Legal research and first drafts"],
    good: ["Built for legal work and security needs"],
    watch: ["Lawyers have been sanctioned by courts for submitting AI-invented case citations (from general chatbots); every citation must be checked"],
    start: ["Not a consumer tool; read Harvey's customer stories to see how firms use it"],
    tryit: "Think of a contract you've signed and list what an AI reviewer should flag for a human to check.",
    alts: ["claude", "chatgpt"], url: "https://www.harvey.ai", lesson: "t-industries"
  },
  {
    id: "merlin", name: "Merlin Bird ID", maker: "Cornell Lab of Ornithology", cat: "industry", price: "Free",
    blurb: "Identifies birds from their songs or a photo, free, from a respected university lab.",
    what: "Merlin, from Cornell University's Lab of Ornithology, identifies birds from a photo, a short description, or by listening to birdsong in real time. Its Sound ID shows the name of each bird as it sings. It's trained on millions of recordings and sightings shared by birdwatchers.",
    uses: ["Learning the birds in your garden or park", "Recording what you've seen"],
    good: ["Free, accurate and works offline with downloaded packs", "Built on citizen-science data"],
    watch: ["Rare birds can be misidentified; experts check unusual records"],
    start: ["Install Merlin and download the bird pack for your region", "Open Sound ID outside in the morning"],
    tryit: "Stand by an open window early in the morning and use Sound ID for two minutes.",
    alts: ["google-lens"], url: "https://merlin.allaboutbirds.org", lesson: "t-industries"
  },
  {
    id: "waymo", name: "Waymo", maker: "Waymo (Alphabet)", cat: "industry", price: "Pay per ride",
    blurb: "Fully driverless taxis, carrying paying passengers in several US cities, with London planned.",
    what: "Waymo, owned by Google's parent company Alphabet, runs taxis with no human driver in several US cities, including Phoenix, San Francisco and Los Angeles, giving hundreds of thousands of paid rides a week. Its cars use cameras, radar and lidar with AI to see and decide. It has announced plans for London from 2026.",
    uses: ["Getting around cities without a driver", "An example of AI acting in the physical world"],
    good: ["Waymo's published data shows far fewer injury crashes than human drivers over the same distance"],
    watch: ["Only in limited areas", "Raises big questions about jobs, safety rules and responsibility when things go wrong"],
    start: ["Watch one of Waymo's videos showing what the car \"sees\""],
    tryit: "Find Waymo's safety data page and note what it compares, and what it doesn't.",
    alts: [], url: "https://waymo.com", lesson: "t-industries"
  }
];
