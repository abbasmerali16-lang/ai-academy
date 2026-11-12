/* Level 1 course content.
   Each lesson: id, unit, title, summary, minutes, body (HTML), terms, quiz, sources.
   All lesson text is original writing. Sources are listed for credit, fact-checking and further reading;
   they were used to decide WHAT to cover, not copied for HOW it is said. */
window.LEVEL1_UNITS = [
  { id: "u1", title: "Unit 1 · What AI is", blurb: "Definitions, history, and the two big families of AI: reasoning with rules and learning from data." },
  { id: "u2", title: "Unit 2 · How machines learn", blurb: "Data, training, the classic algorithms, how we measure them, and neural networks." },
  { id: "u3", title: "Unit 3 · AI in action", blurb: "How AI sees, hears and writes, how to use it well, and what it can and can't do at work." },
  { id: "u4", title: "Unit 4 · AI and society", blurb: "Fairness, safety, the environment, and the laws that are starting to govern AI." }
];

window.LEVEL1 = [
  /* ============================ UNIT 1 ============================ */
  {
    id: "what-is-ai",
    unit: "u1",
    title: "What is Artificial Intelligence?",
    summary: "A plain-English definition, the official one, and where you already meet AI every day.",
    minutes: 11,
    body: `
<p><strong>Artificial intelligence (AI)</strong> is the field of building computer systems that do things we would normally say need human intelligence: understanding language, recognising images, making decisions, or spotting patterns.</p>
<p>The key difference from ordinary software is <em>how</em> it gets its behaviour. A normal program follows rules a person wrote line by line. Most modern AI instead <strong>learns its rules from examples</strong>. Show it thousands of photos labelled "cat" and "dog" and it works out for itself what tends to separate the two.</p>

<div class="callout"><b>One-line definition:</b> AI is software that learns patterns from data (or reasons with knowledge it has been given) and uses them to make predictions, recommendations, content or decisions about new situations.</div>

<h2>Why is AI so hard to define?</h2>
<p>Even experts don't agree on a single definition, for three reasons:</p>
<ul>
  <li><strong>"Intelligence" itself is fuzzy.</strong> Is a pocket calculator intelligent? It does maths faster than any person, but nobody calls it smart.</li>
  <li><strong>The goalposts move.</strong> Once a problem is solved, people stop calling it AI. Route-finding in maps apps and the opponent in a chess game were once cutting-edge AI; now they feel like ordinary software. This is sometimes called the <strong>"AI effect"</strong>.</li>
  <li><strong>Films get in the way.</strong> Science fiction shows AI as robots with feelings and plans of their own. Real AI is mostly invisible software doing narrow jobs.</li>
</ul>

<h2>The official definition</h2>
<p>Governments needed a shared definition to write laws, so the OECD (a club of 38 countries) agreed one in 2019 and updated it in 2023. The EU's AI Act uses almost the same wording. In plain words, it says an AI system is:</p>
<ol>
  <li>a <strong>machine-based system</strong>,</li>
  <li>that works towards <strong>objectives</strong> (which may be stated or only implied),</li>
  <li>that <strong>infers from its input</strong> how to produce outputs such as <strong>predictions, content, recommendations or decisions</strong>,</li>
  <li>and those outputs can <strong>affect the physical or digital world</strong>.</li>
</ol>
<p>It also notes that AI systems differ in how <strong>autonomous</strong> they are (how much they act without a person) and how <strong>adaptive</strong> they are (whether they keep learning after launch). The key word is <em>infers</em>: an AI system works something out that nobody spelled out for it, which is what separates it from a simple fixed rule.</p>

<h2>Two useful properties</h2>
<p>A handy way to spot AI is to look for these two traits:</p>
<ul>
  <li><strong>Autonomy:</strong> it can carry out tasks in complex situations without a person guiding every step.</li>
  <li><strong>Adaptivity:</strong> it can improve its performance by learning from experience.</li>
</ul>

<h2>Four ways to think about "intelligent"</h2>
<p>The most widely used university textbook on AI, by Stuart Russell and Peter Norvig, sorts definitions along two questions: should a machine <em>think</em> or <em>act</em>, and should it be judged against <em>humans</em> or against <em>ideal, rational</em> behaviour? That gives four possible goals:</p>
<div class="table-scroll"><table>
  <tr><th></th><th>Like a human</th><th>Rationally (the best possible choice)</th></tr>
  <tr><td><b>Thinking</b></td><td>Model how people's minds work</td><td>Follow the rules of correct logic</td></tr>
  <tr><td><b>Acting</b></td><td>Behave so you can't tell it from a person</td><td>Take the action most likely to achieve the goal</td></tr>
</table></div>
<p>Most AI built today aims at the bottom-right box: an <strong>agent</strong> that senses its surroundings and acts to do as well as possible on some goal. A spam filter, a self-driving car and a chess engine all fit that description.</p>

<h2>You already use AI every day</h2>
<ul>
  <li><strong>Phone face unlock</strong> recognises your face from the camera.</li>
  <li><strong>Spam filters</strong> decide which emails are junk.</li>
  <li><strong>Maps apps</strong> predict traffic and pick the fastest route.</li>
  <li><strong>Streaming and shopping recommendations</strong> guess what you'll want next.</li>
  <li><strong>Bank fraud alerts</strong> flag card payments that don't look like you.</li>
  <li><strong>Photo apps</strong> sort pictures by who is in them and sharpen low-light shots.</li>
  <li><strong>Voice assistants and chatbots</strong> understand and reply to what you say.</li>
  <li><strong>Autocorrect, predictive text and live translation</strong> guess and convert words as you type.</li>
</ul>

<h2>Narrow AI vs general AI</h2>
<p>Every AI system that exists today is <strong>narrow AI</strong> (also called weak AI): it is good at a specific kind of task. A chess engine can beat any human at chess but cannot drive a car. Even large chatbots, which seem to know a bit about everything, are still trained for one core job (predicting text) and can fail in surprising ways outside it.</p>
<p><strong>Artificial general intelligence (AGI)</strong> would be a system that can learn and perform any intellectual task a human can. People also talk about <strong>superintelligence</strong>, meaning AI far beyond human ability. Both are debated: some researchers think AGI could arrive within years, others think it is decades away or poorly defined. A good habit is to notice who is making a claim and what evidence they give.</p>

<h2>AI, machine learning and deep learning</h2>
<p>These words get mixed up all the time. Think of them as circles inside circles:</p>
<ul>
  <li><strong>AI</strong> is the whole field: any technique that makes machines act intelligently, including hand-written rules and search (Lesson 3).</li>
  <li><strong>Machine learning (ML)</strong> is the part of AI where systems learn from data instead of being hand-programmed.</li>
  <li><strong>Deep learning</strong> is the part of ML that uses large <em>neural networks</em> with many layers. It powers most of today's headline AI, like image generators and chatbots.</li>
  <li><strong>Generative AI</strong> is a use of deep learning that creates new text, images, audio or video.</li>
</ul>
<p>Two neighbours often get confused with AI: <strong>data science</strong> (using data to find insights and answer questions, often with ML as one tool) and <strong>robotics</strong> (machines that move in the physical world, which may or may not use AI).</p>

<h2>The five big ideas</h2>
<p>A group of US teachers and researchers (AI4K12) suggests that everyone should understand five big ideas about AI. This course covers each of them:</p>
<ol>
  <li><strong>Perception:</strong> computers sense the world through cameras, microphones and other sensors (Lesson 11).</li>
  <li><strong>Representation and reasoning:</strong> AI keeps a model of the world and uses it to make decisions (Lessons 3 and 4).</li>
  <li><strong>Learning:</strong> computers can learn from data (Unit 2).</li>
  <li><strong>Natural interaction:</strong> talking with people is hard and needs lots of knowledge (Lessons 11 to 13).</li>
  <li><strong>Societal impact:</strong> AI can help or harm society (Unit 4).</li>
</ol>

<div data-widget="is-it-ai"></div>
`,
    terms: [
      ["Artificial intelligence (AI)", "Computer systems that perform tasks normally requiring human intelligence."],
      ["AI system (OECD definition)", "A machine-based system that infers from its input how to produce outputs like predictions, content, recommendations or decisions that can affect its environment."],
      ["AI effect", "The tendency to stop calling something AI once it works and becomes ordinary."],
      ["Autonomy", "How far a system can act without a person guiding each step."],
      ["Adaptivity", "A system's ability to improve by learning from experience."],
      ["Agent", "Anything that senses its environment and takes actions towards a goal."],
      ["Narrow AI", "AI built for a specific task or kind of task. All current AI is narrow."],
      ["AGI", "Artificial general intelligence: a hypothetical AI that can learn any intellectual task a human can."],
      ["Machine learning", "A branch of AI where systems learn patterns from data."],
      ["Deep learning", "Machine learning using neural networks with many layers."]
    ],
    quiz: [
      { q: "What mainly makes modern AI different from ordinary software?", options: ["It runs faster", "It learns its rules from examples instead of having every rule written by hand", "It only works on the internet", "It never makes mistakes"], answer: 1, explain: "Traditional programs follow hand-written rules; machine learning systems discover rules from data." },
      { q: "Which of these is narrow AI?", options: ["A chess engine", "A spam filter", "A voice assistant", "All of them"], answer: 3, explain: "Every AI system in use today is narrow AI, built for a particular kind of task." },
      { q: "How do AI, machine learning and deep learning relate?", options: ["They are three unrelated fields", "Deep learning is inside machine learning, which is inside AI", "AI is a type of deep learning", "Machine learning is bigger than AI"], answer: 1, explain: "They are nested: deep learning ⊂ machine learning ⊂ AI." },
      { q: "In the OECD definition, what does an AI system do with its input?", options: ["Stores it unchanged", "Infers how to produce outputs such as predictions, content, recommendations or decisions", "Deletes it for privacy", "Sends it to a human to decide"], answer: 1, explain: "Inferring outputs (rather than following one fixed rule) is the heart of the definition." },
      { q: "Route-finding in maps apps was once seen as cutting-edge AI but now feels ordinary. What is this called?", options: ["The AI winter", "The AI effect", "Overfitting", "The Turing Test"], answer: 1, explain: "The 'AI effect' is when we stop calling a solved problem AI." },
      { q: "Most AI today aims to be which kind of system?", options: ["One that thinks exactly like a human", "An agent that acts to do as well as possible on a goal", "A robot with feelings", "A system with no goals"], answer: 1, explain: "Practical AI is mostly about agents acting rationally towards an objective." }
    ],
    sources: [
      ["Elements of AI, Chapter 1 (University of Helsinki & MinnaLearn)", "https://www.elementsofai.com/", "Free beginner course; covers defining AI, autonomy and adaptivity."],
      ["OECD: Explanatory memorandum on the updated definition of an AI system (2024)", "https://www.oecd.org/en/publications/explanatory-memorandum-on-the-updated-oecd-definition-of-an-ai-system_623da898-en.html", "The official definition used by many governments."],
      ["Russell & Norvig, Artificial Intelligence: A Modern Approach (book website)", "https://aima.cs.berkeley.edu/", "The standard university textbook; Chapter 1 covers the four approaches."],
      ["AI4K12: Five Big Ideas in AI", "https://ai4k12.org/", "Guidelines for what every student should know about AI."],
      ["AI For Everyone (DeepLearning.AI)", "https://www.deeplearning.ai/courses/ai-for-everyone/", "Non-technical course by Andrew Ng."]
    ]
  },

  {
    id: "history",
    unit: "u1",
    title: "A Short History of AI",
    summary: "From Alan Turing to today's chatbots: the big moments, the hype and the 'AI winters'.",
    minutes: 12,
    body: `
<p>AI feels brand new, but people have been working on it for more than 70 years. Its history is a cycle of big promises, disappointment, and then breakthroughs once computers and data caught up.</p>

<h2>Before computers</h2>
<p>The dream is old. Ancient myths told of bronze giants and clay figures brought to life. In the 1840s <strong>Ada Lovelace</strong>, writing about Charles Babbage's planned Analytical Engine, suggested such a machine could work with symbols like musical notes, not just numbers, though she doubted it could ever truly create something new. Her doubt is still debated today.</p>

<h2>Timeline</h2>
<ul class="timeline">
  <li><b>1943</b> Warren McCulloch and Walter Pitts describe a simple mathematical model of a brain cell, the first <strong>artificial neuron</strong>.</li>
  <li><b>1950</b> Alan Turing publishes "Computing Machinery and Intelligence", asks whether machines can think, and proposes the <strong>Turing Test</strong> (he called it the "imitation game"): if a judge can't tell a machine from a person in a text conversation, does it matter whether it "really" thinks?</li>
  <li><b>1956</b> The <strong>Dartmouth workshop</strong>, organised by John McCarthy, Marvin Minsky, Nathaniel Rochester and Claude Shannon, gives the field its name: "artificial intelligence". The organisers expected rapid progress.</li>
  <li><b>1958</b> Frank Rosenblatt builds the <strong>Perceptron</strong>, a machine with an artificial neuron that learns to recognise simple patterns.</li>
  <li><b>1966</b> <strong>ELIZA</strong>, a simple chatbot that mimics a therapist, surprises people with how human it seems despite following basic rules. People reading human feelings into simple programs is now called the <strong>ELIZA effect</strong>.</li>
  <li><b>1969</b> A book by Minsky and Papert shows the limits of single-layer perceptrons; interest in neural networks fades for years.</li>
  <li><b>1970s</b> <strong>First AI winter</strong>: progress is slower than promised, and reports in the UK and US lead to funding cuts.</li>
  <li><b>1980s</b> <strong>Expert systems</strong>, built from hand-written rules from human experts, boom in business. They prove costly to maintain and brittle outside their narrow area, leading to the <strong>second AI winter</strong> in the late 1980s and early 1990s.</li>
  <li><b>1986</b> Rumelhart, Hinton and Williams popularise <strong>backpropagation</strong>, a way to train neural networks with several layers.</li>
  <li><b>1990s</b> Yann LeCun's convolutional neural networks read handwritten digits; banks use them to read cheques. Statistical machine learning grows.</li>
  <li><b>1997</b> IBM's <strong>Deep Blue</strong> beats world chess champion Garry Kasparov, mostly through powerful search rather than learning.</li>
  <li><b>2011</b> IBM's <strong>Watson</strong> wins the US quiz show Jeopardy!, and Apple launches <strong>Siri</strong>, bringing voice assistants to millions of phones.</li>
  <li><b>2012</b> A deep neural network called <strong>AlexNet</strong> wins the ImageNet image recognition contest by a huge margin. The <strong>deep learning era</strong> begins, powered by GPUs and big datasets.</li>
  <li><b>2014</b> <strong>Generative adversarial networks (GANs)</strong> show that neural networks can create realistic new images.</li>
  <li><b>2016</b> DeepMind's <strong>AlphaGo</strong> beats Go champion Lee Sedol, a game long thought too complex for computers.</li>
  <li><b>2017</b> Google researchers publish the <strong>Transformer</strong> architecture ("Attention Is All You Need"), the design behind modern language models.</li>
  <li><b>2018–2020</b> Large pre-trained language models (BERT, GPT-2, GPT-3) show that training on huge amounts of text gives broad language skills. In 2020 <strong>AlphaFold 2</strong> predicts protein shapes with accuracy close to lab experiments.</li>
  <li><b>2022</b> Image generators such as DALL·E 2, Midjourney and Stable Diffusion go public, and <strong>ChatGPT</strong> launches, reaching an estimated 100 million users in about two months. Generative AI goes mainstream.</li>
  <li><b>2023</b> AI assistants from many companies appear (Anthropic's Claude, Google's Bard, later Gemini, Meta's Llama and others). The first global AI Safety Summit is held at Bletchley Park in the UK.</li>
  <li><b>2024</b> The <strong>Nobel Prize in Physics</strong> goes to John Hopfield and Geoffrey Hinton for foundational work on neural networks, and the <strong>Nobel Prize in Chemistry</strong> is shared by Demis Hassabis and John Jumper (for AlphaFold) with David Baker (for protein design). The EU's AI Act becomes law.</li>
  <li><b>2025 onward</b> "Reasoning" models that work through problems step by step, and <strong>AI agents</strong> that can use tools and carry out multi-step tasks, become a major focus.</li>
</ul>

<h2>Two schools of thought</h2>
<p>For much of its history, AI was split between two camps:</p>
<ul>
  <li><strong>Symbolic AI</strong> ("good old-fashioned AI"): intelligence comes from manipulating symbols with logic and rules that people write down. Expert systems and early chess programs came from here.</li>
  <li><strong>Connectionist AI</strong> (neural networks): intelligence emerges from many simple units learning connections from data. This is the camp that won the last decade.</li>
</ul>
<p>Modern systems increasingly blend the two, for example a neural network that calls a calculator or a search tool.</p>

<h2>Why did it take off now?</h2>
<p>The ideas behind neural networks are decades old. Three things changed:</p>
<ol>
  <li><strong>Data:</strong> the internet and smartphones created enormous amounts of text, images and video to learn from.</li>
  <li><strong>Compute:</strong> graphics chips (GPUs), first built for video games, turned out to be great at the maths neural networks need. Cloud computing made them rentable.</li>
  <li><strong>Better methods:</strong> improvements like the Transformer made it possible to train much bigger models effectively.</li>
</ol>
<p>Money followed results: once deep learning clearly worked, large technology companies invested heavily, which sped things up further.</p>
<div class="callout"><b>Takeaway:</b> AI progress has come in waves of hype and disappointment. Knowing the history helps you stay calm about both the hype and the doom, and ask "what has actually been shown to work?"</div>
`,
    terms: [
      ["Turing Test", "Alan Turing's 1950 test: can a machine's conversation be told apart from a human's?"],
      ["Dartmouth workshop", "The 1956 summer meeting where the term 'artificial intelligence' was adopted."],
      ["Perceptron", "An early (1958) learning machine based on a single artificial neuron."],
      ["ELIZA effect", "People's tendency to read understanding or feelings into simple computer programs."],
      ["AI winter", "A period when AI funding and interest dropped after unmet promises."],
      ["Expert system", "1980s-style AI built from hand-written if-then rules from human experts."],
      ["Symbolic AI", "AI built on logic, symbols and hand-written rules."],
      ["Connectionism", "The approach of building AI from networks of simple learning units (neural networks)."],
      ["GPU", "Graphics processing unit: a chip that does many calculations in parallel, ideal for training neural networks."],
      ["Transformer", "The 2017 neural network design behind modern large language models."]
    ],
    quiz: [
      { q: "What was the Turing Test designed to explore?", options: ["How fast a computer can calculate", "Whether a machine's conversation can be told apart from a human's", "How much memory a computer has", "Whether robots can walk"], answer: 1, explain: "Turing proposed judging machine intelligence by conversation." },
      { q: "What is an 'AI winter'?", options: ["When AI systems stop working in cold weather", "A period of reduced funding and interest after unmet expectations", "The release of a new AI model", "A type of neural network"], answer: 1, explain: "There were AI winters in the 1970s and in the late 1980s to early 1990s." },
      { q: "Which three things drove the modern AI boom?", options: ["Data, compute and better methods", "Robots, satellites and the cloud", "Faster internet, bigger screens and phones", "Luck, funding and marketing"], answer: 0, explain: "Huge datasets, powerful GPUs and methods like the Transformer came together." },
      { q: "Expert systems of the 1980s were built mainly from…", options: ["Neural networks trained on the internet", "Hand-written if-then rules from human experts", "Random guessing", "Reinforcement learning"], answer: 1, explain: "They were symbolic AI: rules written down by people." },
      { q: "Which 2012 event is often seen as the start of the deep learning era?", options: ["Deep Blue beating Kasparov", "AlexNet winning the ImageNet contest", "ChatGPT's launch", "The Dartmouth workshop"], answer: 1, explain: "AlexNet beat other image recognition approaches by a wide margin." },
      { q: "In 2024 AI research won Nobel Prizes in which subjects?", options: ["Peace and Literature", "Physics and Chemistry", "Medicine and Economics", "None, AI cannot win Nobels"], answer: 1, explain: "Physics went to Hopfield and Hinton for neural networks; Chemistry included Hassabis and Jumper for AlphaFold." }
    ],
    sources: [
      ["A. M. Turing (1950), Computing Machinery and Intelligence, Mind", "https://doi.org/10.1093/mind/LIX.236.433", "The original paper proposing the imitation game."],
      ["McCarthy et al. (1955), Proposal for the Dartmouth Summer Research Project on AI", "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf", "The document that named the field."],
      ["Vaswani et al. (2017), Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "The Transformer paper."],
      ["Nobel Prize in Physics 2024", "https://www.nobelprize.org/prizes/physics/2024/summary/", "Hopfield and Hinton."],
      ["Nobel Prize in Chemistry 2024", "https://www.nobelprize.org/prizes/chemistry/2024/summary/", "Baker, Hassabis and Jumper."],
      ["Stanford HAI, AI Index Report", "https://hai.stanford.edu/ai-index", "Yearly data on the state of AI."]
    ]
  },

  {
    id: "search-and-reasoning",
    unit: "u1",
    title: "Thinking Machines: Rules, Search and Reasoning",
    summary: "The 'old-school' AI that plans routes, plays games and follows rules, and why it still matters.",
    minutes: 11,
    body: `
<p>Before machine learning took over, most AI worked by <strong>reasoning</strong>: people gave the computer facts and rules, and it worked out answers by searching through the possibilities. This kind of AI still runs your satnav, schedules flights and plays board games. It's also the easiest way to see what "intelligent behaviour" means for a machine.</p>

<h2>Problems as states and moves</h2>
<p>Many problems can be described with just four things:</p>
<ul>
  <li><strong>States:</strong> the possible situations. In a route planner, a state is "I'm at this junction".</li>
  <li><strong>A start state:</strong> where you begin.</li>
  <li><strong>Actions:</strong> the moves available from each state, like "turn left onto the high street".</li>
  <li><strong>A goal test:</strong> how to know you've arrived.</li>
</ul>
<p>Often there's also a <strong>cost</strong> for each action (minutes of driving, fuel, money), and we want the cheapest path to the goal. Laying the problem out this way is called building a <strong>state space</strong>, and it can be drawn as a map of dots (states) joined by arrows (actions).</p>

<h2>Searching for an answer</h2>
<p>Once a problem is a state space, a computer can <strong>search</strong> it:</p>
<ul>
  <li><strong>Breadth-first search</strong> explores everything one step away, then everything two steps away, and so on, like ripples on a pond. It finds the shortest route but can be slow.</li>
  <li><strong>Depth-first search</strong> follows one path as far as it can before backing up and trying another, like exploring a maze with one hand on the wall.</li>
  <li><strong>Heuristic search</strong> uses a rule of thumb (a <strong>heuristic</strong>) to try the most promising options first. A route planner might prefer roads that head roughly towards your destination. A famous algorithm called <strong>A*</strong> ("A-star") combines the distance travelled so far with a heuristic guess of the distance left, and is used in maps and video games.</li>
</ul>
<div class="callout"><b>Why it's hard:</b> The number of possibilities explodes. There are more possible chess games than atoms in the observable universe. Good AI doesn't check everything; it decides cleverly what <em>not</em> to check.</div>

<h2>Playing games</h2>
<p>In a two-player game, you also have to think about your opponent. Game-playing AI builds a <strong>game tree</strong>: my possible moves, then each of your replies, then my replies to those, and so on. The <strong>minimax</strong> idea says: assume the opponent will always pick the move that's worst for me, and choose the move whose worst case is best. Since the full tree is far too large, the program looks a few moves ahead and uses an <strong>evaluation function</strong> (for chess, something like "count the pieces and check king safety") to score positions.</p>
<p>Deep Blue beat Kasparov in 1997 mostly with fast search plus a hand-tuned evaluation. AlphaGo in 2016 added a twist: it <em>learned</em> its evaluation from millions of games, mixing search with machine learning.</p>

<h2>Knowledge and logic</h2>
<p>Another strand of reasoning AI stores <strong>knowledge</strong> as facts and rules, then uses <strong>logic</strong> to draw conclusions:</p>
<ul>
  <li>Fact: <em>Tweety is a penguin.</em></li>
  <li>Rule: <em>All penguins are birds.</em></li>
  <li>Conclusion (by <strong>inference</strong>): <em>Tweety is a bird.</em></li>
</ul>
<p>Expert systems in the 1980s worked this way, with thousands of rules such as "IF the patient has a fever AND a stiff neck THEN consider meningitis". Today, <strong>knowledge graphs</strong> (huge webs of facts like "Paris is the capital of France") help search engines answer questions directly.</p>

<h2>Strengths and weaknesses</h2>
<div class="table-scroll"><table>
  <tr><th></th><th>Rules and search</th><th>Machine learning</th></tr>
  <tr><td><b>Good at</b></td><td>Puzzles, planning, schedules, problems with clear rules</td><td>Messy perception tasks: images, speech, language</td></tr>
  <tr><td><b>Explainable?</b></td><td>Yes, you can trace every step</td><td>Often hard to explain</td></tr>
  <tr><td><b>Weak spot</b></td><td>Brittle: fails when the world doesn't match its rules; rules are slow to write</td><td>Needs lots of data; can be confidently wrong</td></tr>
</table></div>
<p>Writing rules for "is this a cat?" is almost impossible: whiskers can be hidden, cats can be any colour, photos can be blurry. That's exactly where learning from examples shines. But if you need a guaranteed-correct timetable, search and logic are still the right tools. Modern AI agents often combine both, using a language model to understand a request and a classic planner or calculator to get the details exactly right.</p>

<div data-widget="route-search"></div>
`,
    terms: [
      ["State space", "All the possible situations in a problem, linked by the actions that move between them."],
      ["Search algorithm", "A step-by-step method for exploring possibilities to find a solution."],
      ["Breadth-first search", "Search that explores all options one step away before going further."],
      ["Depth-first search", "Search that follows one path as deep as possible before backing up."],
      ["Heuristic", "A rule of thumb that estimates which option is most promising."],
      ["A* search", "A widely used search method that combines cost so far with a heuristic estimate of cost remaining."],
      ["Minimax", "A game strategy that picks the move with the best worst-case outcome."],
      ["Inference (logic)", "Drawing new conclusions from known facts and rules."],
      ["Knowledge graph", "A network of facts that links things (people, places, ideas) by their relationships."]
    ],
    quiz: [
      { q: "In a route-planning problem, what is a 'state'?", options: ["The country you live in", "A situation, such as being at a particular junction", "The speed of the car", "The final answer"], answer: 1, explain: "States are the possible situations the problem can be in." },
      { q: "What does a heuristic do?", options: ["Guarantees the perfect answer every time", "Estimates which option is most promising so search can try it first", "Stores training data", "Makes the computer faster by adding memory"], answer: 1, explain: "Heuristics are rules of thumb that guide search." },
      { q: "Why can't a chess program simply check every possible game?", options: ["It's against the rules", "There are far too many possibilities", "Computers can't understand chess", "It would always lose"], answer: 1, explain: "The number of possible games is astronomically large, so programs search selectively." },
      { q: "The minimax idea assumes your opponent will…", options: ["Play randomly", "Always choose the move that's worst for you", "Copy your moves", "Give up early"], answer: 1, explain: "You pick the move whose worst-case outcome is best." },
      { q: "Which task suits hand-written rules and search better than machine learning?", options: ["Recognising cats in photos", "Understanding accents", "Building a guaranteed-correct exam timetable", "Translating slang"], answer: 2, explain: "Problems with clear rules and constraints are a natural fit for search and logic." }
    ],
    sources: [
      ["CS50's Introduction to AI with Python, Lectures 0 to 1 (Harvard)", "https://cs50.harvard.edu/ai/", "Free university course covering search and knowledge."],
      ["Elements of AI, Chapter 2: AI problem solving", "https://www.elementsofai.com/", "Beginner introduction to search and games."],
      ["Russell & Norvig, Artificial Intelligence: A Modern Approach", "https://aima.cs.berkeley.edu/", "Parts II and III cover search, games and logic in depth."],
      ["Red Blob Games: Introduction to A*", "https://www.redblobgames.com/pathfinding/a-star/introduction.html", "Excellent interactive explanation of path-finding."]
    ]
  },

  {
    id: "uncertainty",
    unit: "u1",
    title: "AI and Uncertainty: Thinking in Probabilities",
    summary: "Why AI answers in percentages, how evidence changes beliefs, and the base-rate trap.",
    minutes: 11,
    body: `
<p>The real world is messy. Sensors are noisy, data is incomplete, and the future is unknown. Good AI doesn't pretend to be certain. Instead it works with <strong>probabilities</strong>: numbers between 0 (definitely not) and 1 (definitely yes), often shown as percentages.</p>

<h2>Odds and probabilities</h2>
<p>A weather app saying "70% chance of rain" means: across many days that look like today, it rained on about 7 out of 10. It doesn't mean it will rain for 70% of the day, and it isn't "wrong" if it stays dry; 3 in 10 such days are dry.</p>
<p>When an image classifier says "cat: 92%", that number is its <strong>confidence</strong>. Well-built systems are <strong>calibrated</strong>: when they say 90%, they're right about 90% of the time. Many systems are <em>not</em> well calibrated, and a confident-sounding AI can still be wrong.</p>

<h2>Updating beliefs with evidence</h2>
<p>The most useful idea in this lesson is that <strong>evidence should change your beliefs by the right amount</strong>. This is captured by <strong>Bayes' rule</strong>, named after the 18th-century minister Thomas Bayes. You don't need the formula; you need the intuition:</p>
<ol>
  <li>Start with a <strong>prior</strong>: how likely was this before you saw the evidence?</li>
  <li>Ask how much more likely the evidence is if the idea is true than if it's false. This is the <strong>likelihood ratio</strong>.</li>
  <li>Combine them to get the <strong>posterior</strong>: your updated belief.</li>
</ol>
<p>Spam filters were one of the first big successes of this idea. A <strong>naive Bayes</strong> spam filter looks at each word in an email. "Winner" appears far more often in spam than in normal mail, so it pushes the spam probability up. "Meeting" appears more in normal mail, so it pushes it down. The filter combines many small pushes into one probability. It's called "naive" because it simplifies by treating each word as separate evidence, yet it works surprisingly well.</p>

<h2>The base-rate trap</h2>
<p>Here's a puzzle. A disease affects 1 person in 100. A test catches 90% of people who have it, but also wrongly flags 9% of healthy people. You test positive. How likely is it that you're ill?</p>
<p>Most people guess about 90%. Let's count instead. Picture 1,000 people:</p>
<ul>
  <li>10 have the disease. The test catches 9 of them.</li>
  <li>990 are healthy. The test wrongly flags about 89 of them.</li>
  <li>So about 98 people test positive, and only 9 of them are ill.</li>
</ul>
<p>The chance you're ill is about <strong>9 in 98, roughly 9%</strong>. Because the disease is rare (a low <strong>base rate</strong>), false alarms from the huge healthy group swamp the true cases. This trap catches doctors, juries and AI designers alike. It matters any time AI hunts for rare things, like fraud, rare diseases or security threats.</p>
<div class="callout"><b>Tip:</b> When you're confused by probabilities, imagine 1,000 people (or emails, or transactions) and count. Natural counts are far easier to reason with than percentages.</div>

<div data-widget="bayes"></div>

<h2>Where AI uses probability</h2>
<ul>
  <li><strong>Self-driving cars</strong> keep a probability map of where other cars and pedestrians might be, updated many times a second from noisy sensors.</li>
  <li><strong>Medical tools</strong> give risk scores rather than yes/no answers.</li>
  <li><strong>Language models</strong> pick each next word from a probability distribution over possible words (Lesson 12).</li>
  <li><strong>Recommendation systems</strong> estimate how likely you are to click, watch or buy.</li>
</ul>
`,
    terms: [
      ["Probability", "A number from 0 to 1 (or 0% to 100%) expressing how likely something is."],
      ["Confidence score", "The probability an AI assigns to its own prediction."],
      ["Calibration", "How well a system's stated confidence matches how often it is actually right."],
      ["Bayes' rule", "A method for updating a belief in light of new evidence."],
      ["Prior", "How likely something is before seeing new evidence."],
      ["Posterior", "The updated probability after taking evidence into account."],
      ["Naive Bayes", "A simple classifier that combines many pieces of evidence, treating each as independent."],
      ["Base rate", "How common something is in the population overall."]
    ],
    quiz: [
      { q: "A forecast says '70% chance of rain' and it stays dry. Was it wrong?", options: ["Yes, definitely", "Not necessarily: about 3 in 10 days like that are dry", "Yes, it should have said 0%", "Forecasts can't be judged"], answer: 1, explain: "A probability is about many similar cases, not a promise about one day." },
      { q: "What does it mean for an AI to be well calibrated?", options: ["It runs at the right speed", "When it says 80% confident, it is right about 80% of the time", "It is always 100% sure", "It has been tested once"], answer: 1, explain: "Calibration means confidence matches reality." },
      { q: "In Bayes' rule, the 'prior' is…", options: ["Your belief before seeing the evidence", "The final answer", "The training data", "A type of spam"], answer: 0, explain: "The prior is the starting belief; evidence turns it into the posterior." },
      { q: "A rare disease test is 90% sensitive with a 9% false-alarm rate. If 1 in 100 people have the disease, a positive result means…", options: ["You're about 90% likely to be ill", "You're about 9% likely to be ill", "You're definitely ill", "The test is broken"], answer: 1, explain: "False alarms from the large healthy group outnumber the true cases." },
      { q: "Why is a naive Bayes spam filter called 'naive'?", options: ["It was written by beginners", "It treats each word as separate, independent evidence", "It can't detect spam", "It ignores probabilities"], answer: 1, explain: "The simplifying assumption is that words are independent clues." }
    ],
    sources: [
      ["Elements of AI, Chapter 3: Real world AI (odds, Bayes rule, naive Bayes)", "https://www.elementsofai.com/", "Beginner-friendly probability for AI."],
      ["CS50's Introduction to AI with Python, Lecture 2: Uncertainty", "https://cs50.harvard.edu/ai/", "Probability and Bayesian networks."],
      ["Seeing Theory (Brown University)", "https://seeing-theory.brown.edu/", "Visual, interactive introduction to probability."],
      ["Gigerenzer & Hoffrage (1995), How to improve Bayesian reasoning without instruction", "https://doi.org/10.1037/0033-295X.102.4.684", "Research showing natural counts beat percentages for understanding."]
    ]
  },

  /* ============================ UNIT 2 ============================ */
  {
    id: "data",
    unit: "u2",
    title: "Data: The Fuel of AI",
    summary: "What counts as data, where it comes from, who labels it, and what makes it good or bad.",
    minutes: 11,
    body: `
<p>If machine learning is an engine, data is its fuel. A model can only learn patterns that are in its data, so understanding data is the most practical AI skill a beginner can have. People who build AI often say they spend most of their time on data, not on models.</p>

<h2>What counts as data?</h2>
<p>Almost anything that can be recorded:</p>
<ul>
  <li><strong>Structured data</strong> fits neatly in tables with rows and columns: sales records, sensor readings, exam results. Each column has a clear meaning.</li>
  <li><strong>Unstructured data</strong> has no fixed table shape: emails, photos, voice recordings, videos, social posts. Most of the world's data is unstructured, and deep learning is what made it usable.</li>
</ul>
<p>Inside a table, a column might be <strong>numerical</strong> (age, price, temperature) or <strong>categorical</strong> (colour, country, yes/no). Computers need everything as numbers in the end, so text, images and categories all get turned into numbers before a model sees them.</p>

<h2>Where does data come from?</h2>
<ul>
  <li><strong>Things people do:</strong> clicks, purchases, searches, messages, which shows you skip.</li>
  <li><strong>Sensors:</strong> phone cameras, car radar, smartwatches, factory machines, satellites.</li>
  <li><strong>Records:</strong> medical files, bank transactions, government statistics.</li>
  <li><strong>The public web:</strong> websites, books, forums and code, collected ("scraped") in vast amounts to train language models.</li>
  <li><strong>Synthetic data:</strong> data generated by simulations or other AI models, useful when real data is scarce or private.</li>
</ul>
<p>Each source raises questions: did people agree to their data being used? Who owns it? Using copyrighted books and art to train AI is the subject of ongoing court cases around the world.</p>

<h2>Labels: the hidden human work</h2>
<p>For supervised learning (Lesson 7), each example needs a correct answer, or <strong>label</strong>. Sometimes labels come for free (a house's sale price is recorded anyway). Often people must create them by hand: drawing boxes around pedestrians in street photos, marking emails as spam, or rating chatbot answers. Large numbers of <strong>data annotators</strong> around the world do this work, and their judgement shapes what the AI learns. If labellers disagree or make mistakes, the model learns those too.</p>

<h2>What makes data good?</h2>
<p>More data usually helps, but quality matters more than raw size. Ask these questions about any dataset:</p>
<ol>
  <li><strong>Is it relevant?</strong> Does it contain the information needed to make the prediction?</li>
  <li><strong>Is it accurate?</strong> Are there typos, wrong labels, broken sensors?</li>
  <li><strong>Is it complete?</strong> Are there missing values, or whole groups missing?</li>
  <li><strong>Is it representative?</strong> Does it match the real situations where the AI will be used? A skin-cancer detector trained mostly on light skin may fail on dark skin.</li>
  <li><strong>Is it current?</strong> Patterns change. A model trained on shopping before a pandemic may be wrong after it. This is called <strong>data drift</strong>.</li>
  <li><strong>Was it collected fairly and legally?</strong> Consent, privacy and copyright matter.</li>
</ol>
<div class="callout"><b>Garbage in, garbage out:</b> No clever algorithm can fix data that is wrong, biased or unrepresentative. If the data reflects past unfairness, the model will repeat it.</div>

<h2>Preparing data</h2>
<p>Before training, data is usually:</p>
<ul>
  <li><strong>Cleaned:</strong> fixing errors, removing duplicates, deciding what to do about missing values.</li>
  <li><strong>Transformed:</strong> turning text and categories into numbers, putting measurements on similar scales.</li>
  <li><strong>Split:</strong> into training, validation and test sets (Lesson 6).</li>
  <li><strong>Documented:</strong> recording where it came from, what's in it, and its known gaps. Researchers have proposed "datasheets for datasets" so every dataset comes with this kind of label, like nutrition facts on food.</li>
</ul>

<h2>Personal data and privacy</h2>
<p><strong>Personal data</strong> is anything that can identify a person, directly (name, face, ID number) or indirectly (a combination like postcode, birth date and job). Laws such as the EU's GDPR give people rights over their data, including knowing how it is used. Techniques like <strong>anonymisation</strong> (removing identifying details) help, but are harder than they sound: combining a few "anonymous" facts can often pick out one person.</p>

<div data-widget="sort" data-set="data-types"></div>
`,
    terms: [
      ["Dataset", "A collection of examples used to train or test an AI system."],
      ["Structured data", "Data organised in tables with defined columns, like a spreadsheet."],
      ["Unstructured data", "Data without a fixed table format, like text, images, audio and video."],
      ["Data annotation", "Adding labels to data by hand, such as tagging objects in photos."],
      ["Representative data", "Data that reflects the real range of people and situations the AI will meet."],
      ["Data drift", "When real-world data changes over time so a model's learned patterns go out of date."],
      ["Synthetic data", "Artificially generated data used in place of, or alongside, real data."],
      ["Personal data", "Information that can identify a living person directly or indirectly."],
      ["Anonymisation", "Removing details from data so individuals can't be identified."]
    ],
    quiz: [
      { q: "Which of these is unstructured data?", options: ["A spreadsheet of exam marks", "A folder of holiday photos", "A table of daily temperatures", "A list of product prices"], answer: 1, explain: "Photos don't come in neat rows and columns, so they're unstructured." },
      { q: "A face-recognition system was trained mostly on photos of one age group. What's the main problem?", options: ["The data isn't representative", "The data is too structured", "There's too much data", "Photos can't be used for AI"], answer: 0, explain: "It will likely work worse for age groups it rarely saw." },
      { q: "What is data drift?", options: ["Data being stolen", "Real-world patterns changing so the model's training data goes out of date", "Data stored in the cloud", "Moving data between computers"], answer: 1, explain: "Models need monitoring and retraining as the world changes." },
      { q: "Who usually creates labels for things like 'pedestrian' boxes in street photos?", options: ["The camera automatically", "Human annotators", "The test set", "Nobody; labels aren't needed"], answer: 1, explain: "A lot of AI depends on human labelling work." },
      { q: "Why isn't removing names always enough to make data anonymous?", options: ["Names are the only identifier", "Combining other details (like postcode, birth date and job) can still identify someone", "Computers can't delete names", "Anonymous data is illegal"], answer: 1, explain: "Re-identification from combined details is a well-known privacy risk." }
    ],
    sources: [
      ["AI For Everyone, Week 1: What is data? (DeepLearning.AI)", "https://www.deeplearning.ai/courses/ai-for-everyone/", "Non-technical view of data in AI projects."],
      ["Gebru et al. (2021), Datasheets for Datasets, Communications of the ACM", "https://arxiv.org/abs/1803.09010", "Proposal to document every dataset."],
      ["Google Machine Learning Crash Course: Working with data", "https://developers.google.com/machine-learning/crash-course", "Free course with sections on data quality and preparation."],
      ["European Commission: Data protection explained (GDPR)", "https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en", "Plain-language guide to personal data rights."]
    ]
  },

  {
    id: "how-machines-learn",
    unit: "u2",
    title: "How Machines Learn",
    summary: "Features, labels, training, validation and testing: the core loop behind every ML system.",
    minutes: 12,
    body: `
<p>Imagine teaching a child what an apple is. You don't write down a precise definition. You show them lots of apples (and some things that aren't apples) and correct them when they get it wrong. Machine learning works in a surprisingly similar way.</p>

<h2>The ingredients</h2>
<ul>
  <li><strong>Data:</strong> examples to learn from, such as house listings, photos, or sentences.</li>
  <li><strong>Features:</strong> the measurable details in each example. For a house: size, number of bedrooms, location.</li>
  <li><strong>Labels:</strong> the right answer for each example, when we have it. For a house: its sale price.</li>
  <li><strong>Model:</strong> a mathematical function with adjustable settings (called <em>parameters</em> or <em>weights</em>) that turns features into a prediction.</li>
</ul>

<h2>Traditional programming vs machine learning</h2>
<div class="table-scroll"><table>
  <tr><th></th><th>You provide</th><th>The computer produces</th></tr>
  <tr><td><b>Traditional programming</b></td><td>Rules + data</td><td>Answers</td></tr>
  <tr><td><b>Machine learning</b></td><td>Data + answers (examples)</td><td>Rules (a trained model)</td></tr>
</table></div>
<p>Once trained, the model is used like normal software: give it new data, and it produces answers. Using a trained model is called <strong>inference</strong> (or <strong>prediction</strong>).</p>

<h2>The training loop</h2>
<ol>
  <li>The model makes a prediction for an example (at first, basically a guess).</li>
  <li>We measure how wrong it was using a <strong>loss function</strong>.</li>
  <li>We nudge the parameters slightly in the direction that would have made the error smaller.</li>
  <li>Repeat many times across all the data. One full pass through the training data is called an <strong>epoch</strong>.</li>
</ol>
<p>Over time the model's guesses get better. This "nudge downhill to reduce error" process is called <strong>gradient descent</strong>, and it is at the heart of nearly all modern AI. Picture standing on a foggy hillside trying to reach the valley floor: you can't see the bottom, but you can feel which way the ground slopes under your feet, so you keep taking small steps downhill. How big each step is gets set by the <strong>learning rate</strong>: too big and you overshoot, too small and it takes forever.</p>

<div class="callout"><b>Analogy:</b> Training is like tuning a guitar by ear. Pluck, listen to how off it sounds, turn the peg a little, and repeat until it sounds right.</div>

<h2>Training, validation and test data</h2>
<p>We split the data into three parts:</p>
<ul>
  <li><strong>Training set</strong> (often around 70 to 80%): what the model learns from.</li>
  <li><strong>Validation set:</strong> used during development to compare options and tune settings.</li>
  <li><strong>Test set:</strong> locked away until the very end, then used once to estimate real-world performance.</li>
</ul>
<p>Why so careful? If you check your work on the same examples you studied, you'll fool yourself. A test the model has never seen tells us whether it learned a general pattern, which is called <strong>generalisation</strong>.</p>

<h2>Overfitting and underfitting</h2>
<p>A model that memorises its training data but fails on new data is <strong>overfitting</strong>, like a student who memorised last year's exam answers but doesn't understand the subject. A model too simple to capture the pattern at all is <strong>underfitting</strong>, like trying to describe a winding road with one straight line. The goal is the sweet spot in between. Common ways to avoid overfitting: get more (and more varied) data, use a simpler model, or stop training once validation performance stops improving.</p>

<h2>Parameters vs hyperparameters</h2>
<p><strong>Parameters</strong> are what the model learns by itself (its weights). <strong>Hyperparameters</strong> are the choices people make before training: how big the model is, the learning rate, how many epochs to run. Picking good hyperparameters is part of the craft, and the validation set is how you compare them fairly.</p>

<h2>Garbage in, garbage out</h2>
<p>A model can only be as good as its data (Lesson 5). And because a model only learns from the past, it assumes the future looks like the past. When the world changes, models need retraining.</p>

<div data-widget="fit-line"></div>
`,
    terms: [
      ["Feature", "A measurable property of an example that the model uses as input."],
      ["Label", "The correct answer attached to a training example."],
      ["Model", "The learned function that turns inputs into predictions."],
      ["Parameters / weights", "The adjustable numbers inside a model that training changes."],
      ["Hyperparameter", "A setting chosen by people before training, like the learning rate."],
      ["Inference", "Using a trained model to make predictions on new data."],
      ["Loss function", "A measure of how wrong a model's prediction is."],
      ["Gradient descent", "The method of repeatedly nudging parameters to reduce the loss."],
      ["Learning rate", "How big a step gradient descent takes each time."],
      ["Epoch", "One complete pass through the training data."],
      ["Validation set", "Data used during development to compare models and tune settings."],
      ["Generalisation", "A model's ability to perform well on new, unseen data."],
      ["Overfitting", "When a model memorises training data and does poorly on new data."],
      ["Underfitting", "When a model is too simple to capture the real pattern."]
    ],
    quiz: [
      { q: "Why do we keep a separate test set?", options: ["To make training faster", "To check that the model works on data it has never seen", "To store extra labels", "Because training data runs out"], answer: 1, explain: "Testing on unseen data reveals whether the model generalises or just memorised." },
      { q: "A model scores 99% on training data but 55% on new data. What's happening?", options: ["Underfitting", "Overfitting", "Perfect learning", "Gradient descent failed to start"], answer: 1, explain: "Great on training data but poor on new data is the classic sign of overfitting." },
      { q: "What does the loss function measure?", options: ["How much electricity the model uses", "How big the dataset is", "How wrong the model's predictions are", "How many layers the model has"], answer: 2, explain: "Training tries to make the loss as small as possible." },
      { q: "For predicting house prices, which is a feature?", options: ["The sale price", "The number of bedrooms", "The loss function", "The test set"], answer: 1, explain: "Bedrooms is an input feature; the sale price is the label we want to predict." },
      { q: "In machine learning, what do you give the computer in order to get rules out?", options: ["Rules and data", "Data and example answers", "Only the answers", "Only hardware"], answer: 1, explain: "ML flips traditional programming: from examples with answers, it learns the rules." },
      { q: "Which of these is a hyperparameter?", options: ["A weight learned during training", "The learning rate chosen before training", "A label", "A test example"], answer: 1, explain: "Hyperparameters are set by people; parameters are learned." }
    ],
    sources: [
      ["Google Machine Learning Crash Course", "https://developers.google.com/machine-learning/crash-course", "Free introduction to loss, gradient descent, and generalisation."],
      ["Elements of AI, Chapter 4: Machine learning", "https://www.elementsofai.com/", "Beginner explanation of training and overfitting."],
      ["Microsoft ML for Beginners (GitHub)", "https://github.com/microsoft/ML-For-Beginners", "12-week open curriculum with hands-on lessons."],
      ["Teachable Machine (Google)", "https://teachablemachine.withgoogle.com/", "Train a real model in your browser with your webcam, no code."]
    ]
  },

  {
    id: "types-of-ml",
    unit: "u2",
    title: "Three Ways Machines Learn",
    summary: "Supervised, unsupervised and reinforcement learning, plus the self-supervised trick behind chatbots.",
    minutes: 11,
    body: `
<p>Machine learning problems mostly fall into three families, depending on what kind of feedback the model gets.</p>

<h2>1. Supervised learning: learning with an answer key</h2>
<p>Every training example comes with the correct answer (a label). The model learns to map inputs to outputs. This is the most widely used type in business today.</p>
<ul>
  <li><strong>Classification</strong> predicts a category: spam or not spam, cat or dog, which disease. With two options it's <em>binary</em> classification; with more, <em>multi-class</em>.</li>
  <li><strong>Regression</strong> predicts a number: house price, tomorrow's temperature, delivery time.</li>
</ul>
<p>A quick test: if the answer is a word from a list, it's classification. If it's a number on a scale, it's regression.</p>

<h2>2. Unsupervised learning: finding hidden structure</h2>
<p>There are no labels. The model looks for patterns on its own.</p>
<ul>
  <li><strong>Clustering</strong> groups similar things, like customers with similar shopping habits or news stories about the same event.</li>
  <li><strong>Anomaly detection</strong> spots things that don't fit, like unusual card transactions that might be fraud.</li>
  <li><strong>Dimensionality reduction</strong> squeezes data with many features down to a few that capture most of the variation, which helps with visualising and speeding up other methods.</li>
</ul>
<p>The catch: the groups it finds don't come with names. A person still has to look at a cluster and decide that it means, say, "bargain hunters".</p>

<h2>3. Reinforcement learning: learning by trial and error</h2>
<p>An <strong>agent</strong> takes actions in an <strong>environment</strong> and receives <strong>rewards</strong> or penalties. Over many attempts it learns a <strong>policy</strong>, a strategy for which action to take in each situation to collect the most reward over time. This is how AlphaGo mastered Go and how robots learn to walk in simulation.</p>
<p>Reinforcement learning has its own dilemma: <strong>explore or exploit?</strong> Should the agent try something new that might be better, or stick with what has worked so far? Think of choosing a restaurant: your favourite is reliable, but you'll never find a better one if you never try anywhere new.</p>
<p>Designing the reward is surprisingly tricky. Agents find loopholes: a boat-racing agent once learned to spin in circles collecting bonus points instead of finishing the race. This is called <strong>reward hacking</strong>, and it's a small-scale version of a big safety question (Lesson 15).</p>

<div class="table-scroll"><table>
  <tr><th>Type</th><th>Feedback</th><th>Example</th></tr>
  <tr><td>Supervised</td><td>Correct answers (labels)</td><td>Email spam filter</td></tr>
  <tr><td>Unsupervised</td><td>None, finds structure</td><td>Grouping customers</td></tr>
  <tr><td>Reinforcement</td><td>Rewards and penalties</td><td>Game-playing AI</td></tr>
</table></div>

<h2>The in-between types</h2>
<ul>
  <li><strong>Semi-supervised learning</strong> uses a small set of labelled examples plus a large pile of unlabelled ones. Useful because labels are expensive.</li>
  <li><strong>Self-supervised learning</strong> makes the data provide its own labels. Hide a word in a sentence and ask the model to guess it; the original sentence is the answer key. This trick lets models learn from billions of unlabelled sentences or images.</li>
  <li><strong>Transfer learning</strong> takes a model trained on one big task and adapts it to a related, smaller one. A network that has learned to recognise thousands of everyday objects can be retrained with a few hundred X-rays to spot fractures.</li>
</ul>

<div class="callout"><b>How chatbots mix them all:</b> Large language models first learn by predicting the next word in huge amounts of text (self-supervised), then learn from example conversations (supervised fine-tuning), then get tuned using people's ratings of their answers (reinforcement learning from human feedback, RLHF).</div>

<div data-widget="ml-sort"></div>
`,
    terms: [
      ["Supervised learning", "Learning from examples that include the correct answers."],
      ["Classification", "Predicting which category something belongs to."],
      ["Regression", "Predicting a numeric value."],
      ["Unsupervised learning", "Finding patterns in data without labels."],
      ["Clustering", "Grouping similar items together."],
      ["Anomaly detection", "Spotting data points that are unusual compared with the rest."],
      ["Reinforcement learning", "Learning by acting and receiving rewards or penalties."],
      ["Policy", "In reinforcement learning, the agent's strategy for choosing actions."],
      ["Exploration vs exploitation", "The trade-off between trying new options and using what's known to work."],
      ["Reward hacking", "When an agent finds an unintended shortcut to collect reward without doing the real task."],
      ["Self-supervised learning", "Learning where the data supplies its own labels, e.g. predicting hidden words."],
      ["Transfer learning", "Reusing a model trained on one task as the starting point for another."]
    ],
    quiz: [
      { q: "Predicting tomorrow's temperature is an example of…", options: ["Classification", "Regression", "Clustering", "Reinforcement learning"], answer: 1, explain: "Temperature is a number, so it's regression." },
      { q: "A shop groups customers by buying habits without any predefined groups. This is…", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Regression"], answer: 1, explain: "No labels and finding groups means unsupervised clustering." },
      { q: "A robot learns to walk by getting points for staying upright. This is…", options: ["Reinforcement learning", "Supervised learning", "Clustering", "Classification"], answer: 0, explain: "Actions plus rewards is reinforcement learning." },
      { q: "Hiding a word in a sentence and training a model to guess it is…", options: ["Unsupervised clustering", "Self-supervised learning", "Reinforcement learning", "Regression"], answer: 1, explain: "The sentence itself supplies the answer, so no human labels are needed." },
      { q: "A game AI earns points by exploiting a glitch instead of winning. This is called…", options: ["Transfer learning", "Reward hacking", "Calibration", "Overfitting"], answer: 1, explain: "The agent optimised the reward, not the goal its designers intended." },
      { q: "Adapting an object-recognition network to spot fractures in X-rays is…", options: ["Transfer learning", "Clustering", "Minimax", "Anomaly detection"], answer: 0, explain: "It reuses knowledge from a big task for a smaller related one." }
    ],
    sources: [
      ["Microsoft ML for Beginners (GitHub)", "https://github.com/microsoft/ML-For-Beginners", "Lessons on regression, classification and clustering."],
      ["Elements of AI, Chapter 4: Types of machine learning", "https://www.elementsofai.com/", "Beginner overview."],
      ["OpenAI (2016), Faulty reward functions in the wild", "https://openai.com/index/faulty-reward-functions/", "The boat-racing reward hacking example."],
      ["Ouyang et al. (2022), Training language models to follow instructions with human feedback", "https://arxiv.org/abs/2203.02155", "The paper describing RLHF for chat models."]
    ]
  },

  {
    id: "classic-algorithms",
    unit: "u2",
    title: "Meet the Classic Algorithms",
    summary: "Nearest neighbours, straight lines, decision trees and clusters: simple ideas that still power real systems.",
    minutes: 12,
    body: `
<p>"Algorithm" just means a precise recipe a computer follows. Deep learning grabs the headlines, but a handful of simpler learning algorithms do a huge share of everyday work, especially with tables of data. They're also the best way to build intuition, because you can see exactly what they do.</p>

<h2>1. Nearest neighbours: "you are like your neighbours"</h2>
<p>To classify something new, find the most similar examples you've already seen and copy their answer. To decide if a new fruit is an apple or a lemon, measure its weight and colour, find the closest known fruits on those measurements, and let them vote. Looking at the <em>k</em> closest examples (say, 3 or 5) is called <strong>k-nearest neighbours (k-NN)</strong>.</p>
<p>Recommendation engines use the same idea: "people whose viewing history is close to yours also liked…". It's simple and needs no training, but can be slow with huge datasets, and it depends heavily on choosing sensible measurements of "closeness".</p>
<div data-widget="knn"></div>

<h2>2. Linear regression: drawing the best straight line</h2>
<p>Plot house size against price and you'll see the dots roughly follow a rising line. <strong>Linear regression</strong> finds the line that fits the dots best, meaning the line that makes the total error (the gaps between dots and line) as small as possible. Then, for a new house, read the price off the line.</p>
<p>With more features (size, bedrooms, distance to the station), it becomes a weighted sum: each feature gets a weight saying how much it pushes the price up or down. Those weights are easy to read, so linear models are popular when people need to explain the result.</p>

<h2>3. Logistic regression: a line that answers yes or no</h2>
<p>Despite its name, <strong>logistic regression</strong> is used for classification. It computes a weighted sum like linear regression, then squashes it into a probability between 0 and 1 (will this customer cancel: 0.83?). It's a favourite for credit scoring and medical risk because it's fast, simple and gives probabilities. It's also exactly what a single artificial neuron does (Lesson 10).</p>

<h2>4. Decision trees: twenty questions</h2>
<p>A <strong>decision tree</strong> asks a series of yes/no questions, each splitting the data into purer groups, until it reaches an answer. For a loan: "Income above £30k?" → yes → "Existing debt above £10k?" → no → "Approve". The algorithm chooses which question to ask at each step by finding the split that best separates the answers.</p>
<p>Trees are easy for people to follow, but a single tree overfits easily. Combining hundreds of slightly different trees and letting them vote (a <strong>random forest</strong>), or building trees one after another where each fixes the last one's mistakes (<strong>gradient boosting</strong>), gives some of the most accurate models available for table data. Combining many models this way is called an <strong>ensemble</strong>.</p>

<h2>5. k-means clustering: finding groups</h2>
<p>An unsupervised classic. Choose how many groups you want (k), drop k centre points at random, then repeat two steps: assign each item to its nearest centre, then move each centre to the middle of its items. After a few rounds the centres settle and you have k groups, such as customer segments.</p>

<h2>Choosing an algorithm</h2>
<div class="table-scroll"><table>
  <tr><th>Algorithm</th><th>Type</th><th>Best known for</th></tr>
  <tr><td>k-nearest neighbours</td><td>Classification / regression</td><td>Simplicity, recommendations</td></tr>
  <tr><td>Linear regression</td><td>Regression</td><td>Predicting numbers, easy to explain</td></tr>
  <tr><td>Logistic regression</td><td>Classification</td><td>Risk scores and probabilities</td></tr>
  <tr><td>Decision tree / random forest</td><td>Both</td><td>Table data, readable rules</td></tr>
  <tr><td>k-means</td><td>Clustering</td><td>Finding groups without labels</td></tr>
  <tr><td>Neural network</td><td>Both, and generation</td><td>Images, sound, language</td></tr>
</table></div>
<div class="callout"><b>Rule of thumb:</b> Start with the simplest model that could work. If a straight line or a small tree is accurate enough, it will be cheaper, faster and easier to explain than a giant neural network.</div>
`,
    terms: [
      ["Algorithm", "A precise, step-by-step recipe a computer follows."],
      ["k-nearest neighbours (k-NN)", "Classifying something by looking at the k most similar known examples."],
      ["Linear regression", "Fitting the best straight line (or weighted sum) to predict a number."],
      ["Logistic regression", "A weighted sum squashed into a probability, used for yes/no classification."],
      ["Decision tree", "A model that makes predictions through a series of yes/no questions."],
      ["Random forest", "Many decision trees whose votes are combined."],
      ["Ensemble", "Combining several models to get better predictions than any single one."],
      ["k-means clustering", "Grouping data into k clusters by repeatedly assigning points to the nearest centre."]
    ],
    quiz: [
      { q: "k-nearest neighbours classifies a new example by…", options: ["Drawing a straight line", "Copying the answer of the most similar known examples", "Asking a human", "Using rewards"], answer: 1, explain: "Its neighbours vote on the answer." },
      { q: "Despite its name, logistic regression is mostly used for…", options: ["Predicting exact numbers", "Classification with probabilities", "Clustering", "Generating images"], answer: 1, explain: "It outputs a probability for a yes/no outcome." },
      { q: "Why might a bank prefer a decision tree to a deep neural network?", options: ["Trees are always more accurate", "Trees are easier to explain to customers and regulators", "Neural networks can't use numbers", "Trees need no data"], answer: 1, explain: "Being able to explain decisions is often essential in finance." },
      { q: "A random forest is…", options: ["A single very tall tree", "Many decision trees whose votes are combined", "A clustering method for maps", "A type of chatbot"], answer: 1, explain: "It's an ensemble of trees." },
      { q: "What must you choose before running k-means?", options: ["The labels", "How many groups (k) you want", "The test score", "The reward"], answer: 1, explain: "k-means needs the number of clusters up front." }
    ],
    sources: [
      ["Elements of AI, Chapter 4: nearest neighbour, regression", "https://www.elementsofai.com/", "Beginner walk-throughs of classic methods."],
      ["Microsoft ML for Beginners (GitHub)", "https://github.com/microsoft/ML-For-Beginners", "Hands-on lessons on regression, classification and clustering."],
      ["scikit-learn: Choosing the right estimator", "https://scikit-learn.org/stable/machine_learning_map.html", "A practitioners' map of which algorithm to try."],
      ["R2D3: A visual introduction to machine learning", "http://www.r2d3.us/visual-intro-to-machine-learning-part-1/", "Beautiful scrolling explanation of decision trees."]
    ]
  },

  {
    id: "measuring-ai",
    unit: "u2",
    title: "Is It Any Good? Measuring AI",
    summary: "Accuracy, false alarms and misses, precision and recall, and why '99% accurate' can mean nothing.",
    minutes: 11,
    body: `
<p>Every AI makes mistakes. The useful questions are: <em>how often</em>, <em>what kind</em>, and <em>does it matter</em>? Learning to read AI performance claims is one of the most practical skills in this course.</p>

<h2>The accuracy trap</h2>
<p><strong>Accuracy</strong> is the share of predictions that are correct. It sounds like the obvious measure, but it can be badly misleading. Suppose 1 in 100 card transactions is fraud. A lazy model that says "not fraud" every single time is <strong>99% accurate</strong>, and completely useless. When one outcome is rare (an <strong>imbalanced</strong> dataset), accuracy hides what matters.</p>

<h2>Four kinds of outcome</h2>
<p>For a yes/no prediction (say, "is this email spam?"), every prediction lands in one of four boxes. Together they form a <strong>confusion matrix</strong>:</p>
<div class="table-scroll"><table>
  <tr><th></th><th>Really spam</th><th>Really not spam</th></tr>
  <tr><td><b>AI says spam</b></td><td>True positive (caught it)</td><td>False positive (false alarm)</td></tr>
  <tr><td><b>AI says not spam</b></td><td>False negative (missed it)</td><td>True negative (correctly left alone)</td></tr>
</table></div>

<h2>Precision and recall</h2>
<ul>
  <li><strong>Precision:</strong> of everything the AI flagged, how much was really positive? High precision means few false alarms.</li>
  <li><strong>Recall</strong> (also called <em>sensitivity</em>): of all the real positives, how many did the AI catch? High recall means few misses.</li>
</ul>
<p>There's usually a trade-off. Most classifiers produce a score, and you choose a <strong>threshold</strong> above which you say "yes". Lower the threshold and you catch more (higher recall) but raise more false alarms (lower precision). Raise it and the reverse happens. The right balance depends on the cost of each mistake:</p>
<ul>
  <li><strong>Cancer screening:</strong> a miss can be deadly, a false alarm means an extra test. Favour recall.</li>
  <li><strong>Spam filter:</strong> sending an important email to junk is worse than letting one spam through. Favour precision.</li>
  <li><strong>Courtroom evidence:</strong> wrongly accusing someone is very serious. Favour precision.</li>
</ul>
<p>A score called the <strong>F1 score</strong> combines precision and recall into one number when you want a single summary.</p>

<div data-widget="threshold"></div>

<h2>Measuring numbers, not categories</h2>
<p>For regression (predicting a number), we measure how far off the predictions are on average, for example "the delivery-time estimates are off by 4 minutes on average". This is called the <strong>mean absolute error</strong>.</p>

<h2>Measuring chatbots and generative AI</h2>
<p>There's no single right answer to "write a poem", so generative AI is harder to measure. Common approaches:</p>
<ul>
  <li><strong>Benchmarks:</strong> standard test sets, such as exam-style questions, coding problems or maths puzzles, scored automatically. Useful for comparison, but models can be tuned to the test, and test questions sometimes leak into training data (<strong>contamination</strong>).</li>
  <li><strong>Human ratings:</strong> people compare two answers side by side and pick the better one.</li>
  <li><strong>Red-teaming:</strong> experts deliberately try to make the system fail or misbehave, to find weaknesses before release.</li>
</ul>

<h2>Questions to ask about any AI claim</h2>
<ol>
  <li>Accurate <em>on what data</em>? Was it tested on data it had never seen, and does that data resemble real use?</li>
  <li>What kinds of mistakes does it make, and which matter more here?</li>
  <li>Does it work equally well for different groups of people?</li>
  <li>How does it compare with a simple baseline, or with a human expert?</li>
  <li>Who did the testing, and do they have a reason to make it look good?</li>
</ol>
<div class="callout"><b>Takeaway:</b> A single headline number rarely tells the whole story. Ask what the errors are, and who pays for them.</div>
`,
    terms: [
      ["Accuracy", "The share of all predictions that are correct."],
      ["Imbalanced data", "Data where one outcome is much rarer than the other."],
      ["Confusion matrix", "A table counting true positives, false positives, false negatives and true negatives."],
      ["False positive", "A false alarm: the AI says yes when the truth is no."],
      ["False negative", "A miss: the AI says no when the truth is yes."],
      ["Precision", "Of everything flagged as positive, the share that really is positive."],
      ["Recall (sensitivity)", "Of all the real positives, the share the AI caught."],
      ["Threshold", "The score above which a classifier says 'yes'."],
      ["Benchmark", "A standard test used to compare AI systems."],
      ["Red-teaming", "Deliberately attacking or stress-testing an AI to find failures."]
    ],
    quiz: [
      { q: "Fraud is 1 in 100 transactions. A model always says 'not fraud'. Its accuracy is…", options: ["1%", "50%", "99%, but it's useless", "100%"], answer: 2, explain: "Accuracy hides the problem when one outcome is rare." },
      { q: "A spam filter puts an important work email in junk. That's a…", options: ["True positive", "False positive", "False negative", "True negative"], answer: 1, explain: "It flagged something as spam that wasn't: a false alarm." },
      { q: "For cancer screening, which matters most?", options: ["High recall, so few cancers are missed", "High precision at any cost", "Accuracy only", "Speed only"], answer: 0, explain: "Missing a real case is much worse than an extra check." },
      { q: "Lowering a classifier's threshold usually…", options: ["Catches more positives but adds more false alarms", "Reduces both misses and false alarms", "Has no effect", "Makes it unsupervised"], answer: 0, explain: "It's a trade-off: recall goes up, precision tends to go down." },
      { q: "What is benchmark 'contamination'?", options: ["Viruses in the data centre", "Test questions leaking into the training data", "Bias against a group", "A slow model"], answer: 1, explain: "If a model has seen the test, its score overstates its ability." }
    ],
    sources: [
      ["Google Machine Learning Crash Course: Accuracy, precision, recall", "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall", "Clear technical introduction to these metrics."],
      ["AI For Everyone (DeepLearning.AI)", "https://www.deeplearning.ai/courses/ai-for-everyone/", "Covers how to judge what ML can and can't do."],
      ["Stanford HAI, AI Index Report (technical performance chapter)", "https://hai.stanford.edu/ai-index", "How AI is tracked on benchmarks year by year."]
    ]
  },

  {
    id: "neural-networks",
    unit: "u2",
    title: "Neural Networks, Simply",
    summary: "What an artificial neuron does, how stacking them creates deep learning, and the main network designs.",
    minutes: 12,
    body: `
<p>Neural networks are loosely inspired by the brain, which is made of tens of billions of connected neurons. An artificial neural network is much simpler: it's just lots of small maths units wired together.</p>

<h2>One artificial neuron</h2>
<p>A single neuron does three things:</p>
<ol>
  <li>Takes some <strong>inputs</strong> (numbers).</li>
  <li>Multiplies each by a <strong>weight</strong>, which says how important that input is, then adds them up along with a <strong>bias</strong>.</li>
  <li>Passes the total through an <strong>activation function</strong> that decides how strongly the neuron "fires".</li>
</ol>
<p>Try it below. This neuron decides whether to go to the beach. Weights are how much you care about each factor.</p>

<div data-widget="neuron"></div>

<h2>From one neuron to a network</h2>
<p>Neurons are arranged in <strong>layers</strong>:</p>
<ul>
  <li>The <strong>input layer</strong> receives the raw data, such as the pixels of an image.</li>
  <li><strong>Hidden layers</strong> in the middle transform the data step by step.</li>
  <li>The <strong>output layer</strong> gives the answer, such as "cat: 92%".</li>
</ul>
<p>Each layer learns to detect more complex features. In an image network, early layers might detect edges, middle layers detect shapes like eyes or ears, and later layers recognise whole objects. Nobody programs these features in; they emerge during training. A network with many hidden layers is called <strong>deep</strong>, which is where "deep learning" comes from.</p>

<h2>Why the activation function matters</h2>
<p>Without activation functions, stacking layers would be pointless: many weighted sums in a row still add up to just one weighted sum, which can only draw straight lines. The activation function adds a bend (it's <strong>non-linear</strong>), so a network can learn curvy, complicated patterns. A popular choice called <strong>ReLU</strong> is almost comically simple: if the total is negative, output zero; otherwise pass it through.</p>

<h2>How does it learn?</h2>
<p>Exactly the training loop from Lesson 6. The network makes a prediction, the loss measures the error, and a method called <strong>backpropagation</strong> works backwards from the output, layer by layer, to work out how much each weight contributed to the error. Then gradient descent adjusts them all a little. Large modern models have billions of weights tuned this way, which takes huge amounts of computing power.</p>

<h2>Famous network designs</h2>
<ul>
  <li><strong>Convolutional neural networks (CNNs)</strong> slide small pattern detectors across an image, so a feature like "edge" or "eye" is recognised wherever it appears. They powered the image recognition boom from 2012.</li>
  <li><strong>Recurrent neural networks (RNNs)</strong> process sequences one step at a time while carrying a memory forward. They were used for speech and translation, but struggled with long texts.</li>
  <li><strong>Transformers</strong> use a mechanism called <strong>attention</strong>: when processing one word, the network can look directly at every other word and decide which ones matter most. In "The trophy didn't fit in the suitcase because it was too big", attention helps link "it" to "trophy". Transformers can process a whole sequence in parallel, which made training on enormous datasets practical. They power today's chatbots and many image and audio models too.</li>
</ul>

<h2>Representations and embeddings</h2>
<p>Inside a trained network, every input becomes a list of numbers that captures its meaning, called an <strong>embedding</strong>. Similar things end up with similar numbers: the embeddings for "puppy" and "dog" sit close together, far from "spreadsheet". This is how AI can search by meaning rather than exact words (Lesson 11).</p>

<div class="callout"><b>Reality check:</b> Neural networks don't think like brains. The "neuron" name is an analogy. Under the hood it's multiplication, addition, and an enormous amount of it. And because the knowledge is spread across billions of weights, it's very hard to explain why a network gave a particular answer.</div>
`,
    terms: [
      ["Neuron (artificial)", "A unit that weights its inputs, adds a bias and applies an activation function."],
      ["Weight", "A number controlling how much an input influences a neuron."],
      ["Bias", "A number added to the weighted sum that shifts the neuron's threshold."],
      ["Activation function", "A function that decides a neuron's output from its weighted sum, adding non-linearity."],
      ["ReLU", "A simple activation function: negative totals become zero, positive ones pass through."],
      ["Hidden layer", "A layer between input and output that transforms data."],
      ["Backpropagation", "The method for working out how each weight should change to reduce the error."],
      ["Convolutional neural network (CNN)", "A network that scans images with small pattern detectors."],
      ["Recurrent neural network (RNN)", "A network that processes sequences step by step with a memory."],
      ["Attention", "A mechanism letting a network weigh which other parts of the input matter most."],
      ["Embedding", "A list of numbers representing the meaning of an input; similar things get similar numbers."]
    ],
    quiz: [
      { q: "What does a weight do in a neuron?", options: ["Stores the training data", "Controls how much an input influences the output", "Counts the number of layers", "Measures the loss"], answer: 1, explain: "A bigger weight means that input matters more." },
      { q: "What makes a neural network 'deep'?", options: ["It runs underground", "It has many hidden layers", "It uses very large numbers", "It was trained for a long time"], answer: 1, explain: "Deep refers to many stacked layers." },
      { q: "What is backpropagation used for?", options: ["Displaying results", "Working out how to adjust each weight to reduce error", "Collecting data", "Splitting train and test sets"], answer: 1, explain: "Backpropagation computes how each weight affected the error so it can be adjusted." },
      { q: "Why do networks need non-linear activation functions?", options: ["To use less memory", "So stacked layers can learn curvy, complex patterns instead of only straight lines", "To make training slower", "They don't need them"], answer: 1, explain: "Without non-linearity, many layers collapse into one simple weighted sum." },
      { q: "Which design powers today's large language models?", options: ["Decision trees", "Transformers", "Expert systems", "k-means"], answer: 1, explain: "Transformers, built around attention, are behind modern LLMs." },
      { q: "What is an embedding?", options: ["A hidden camera", "A list of numbers capturing the meaning of an input", "A type of loss function", "A legal agreement"], answer: 1, explain: "Similar meanings get similar embeddings." }
    ],
    sources: [
      ["3Blue1Brown: Neural networks (video series)", "https://www.3blue1brown.com/topics/neural-networks", "Outstanding visual explanations, from neurons to transformers."],
      ["TensorFlow Playground", "https://playground.tensorflow.org/", "Train a small neural network in your browser and watch it learn."],
      ["Microsoft AI for Beginners (GitHub)", "https://github.com/microsoft/AI-For-Beginners", "Open curriculum covering perceptrons, CNNs, RNNs and transformers."],
      ["Elements of AI, Chapter 5: Neural networks", "https://www.elementsofai.com/", "Beginner introduction."]
    ]
  },

  /* ============================ UNIT 3 ============================ */
  {
    id: "perception-language",
    unit: "u3",
    title: "How AI Sees, Hears and Reads",
    summary: "Computer vision, speech recognition and natural language processing, explained without maths.",
    minutes: 11,
    body: `
<p>Humans take seeing, hearing and reading for granted. For computers, they were among the hardest problems in AI, and solving them is what put AI into our phones. The trick in every case is the same: turn the world into numbers, then learn patterns in those numbers.</p>

<h2>Computer vision: how AI sees</h2>
<p>To a computer, a photo is a grid of <strong>pixels</strong>, and each pixel is just three numbers for how much red, green and blue it contains. A 12-megapixel phone photo is about 36 million numbers. The challenge is going from those numbers to "a dog catching a frisbee".</p>
<p>Main vision tasks, from simplest to richest:</p>
<ul>
  <li><strong>Image classification:</strong> what's in this picture? ("dog")</li>
  <li><strong>Object detection:</strong> what's here and where? (boxes around each dog and frisbee)</li>
  <li><strong>Segmentation:</strong> which exact pixels belong to each thing? (used to blur the background in video calls)</li>
  <li><strong>Face recognition:</strong> whose face is this? (powerful, and controversial when used for surveillance)</li>
  <li><strong>Optical character recognition (OCR):</strong> reading text in images, like scanning a receipt.</li>
</ul>
<p>Vision models learned their skills from huge labelled collections such as <strong>ImageNet</strong>, which has over 14 million images tagged by people. Uses range from medical scans and crop monitoring to checking products on factory lines and helping blind people hear a description of their surroundings.</p>
<p><strong>Weak spots:</strong> vision models can be fooled by small changes humans wouldn't notice (<strong>adversarial examples</strong>), such as stickers that make a stop sign look like a speed-limit sign to a classifier. They may also latch onto shortcuts, like recognising "cow" from green grass in the background rather than the cow itself.</p>

<h2>Speech: how AI hears</h2>
<p>Sound is a wave, measured thousands of times per second. Speech systems usually turn it into a picture of which pitches are present over time (a <em>spectrogram</em>), then a neural network works out the words.</p>
<ul>
  <li><strong>Speech recognition</strong> (speech-to-text): live captions, voice typing, voice assistants.</li>
  <li><strong>Speech synthesis</strong> (text-to-speech): reading aloud, now often hard to tell from a real voice.</li>
  <li><strong>Voice cloning:</strong> copying a specific person's voice from a short sample, useful for people who lose their voice to illness, and also misused for scams ("Mum, I've lost my phone, can you send money?").</li>
</ul>
<p>Accuracy drops with background noise, strong accents and less-common languages, because those are rarer in the training data.</p>

<h2>Natural language processing: how AI reads and writes</h2>
<p><strong>Natural language processing (NLP)</strong> is the area of AI that works with human language. Language is hard: words have many meanings ("bank" of a river or a bank account), meaning depends on context and tone, and sarcasm flips meaning completely.</p>
<p>Classic NLP tasks:</p>
<ul>
  <li><strong>Translation:</strong> converting between languages.</li>
  <li><strong>Sentiment analysis:</strong> is this review positive or negative?</li>
  <li><strong>Summarisation:</strong> shortening long text.</li>
  <li><strong>Question answering</strong> and <strong>search:</strong> finding the passage that answers a question.</li>
  <li><strong>Named entity recognition:</strong> spotting names of people, places and organisations in text.</li>
</ul>
<p>Older NLP counted words. Modern NLP turns words into <strong>embeddings</strong> (Lesson 10) so that meaning, not spelling, decides what's similar. That's why a search for "cheap flights" can find a page that says "low-cost airfare". Today, large language models (Lesson 12) handle most of these tasks in one system.</p>

<h2>Multimodal AI</h2>
<p>Newer systems are <strong>multimodal</strong>: one model handles several kinds of input and output, such as text, images and sound. You can show a multimodal assistant a photo of your fridge and ask what to cook, or have a spoken conversation with it. Under the hood, images and sound are turned into the same kind of tokens and embeddings as text.</p>

<h2>Robots: AI with a body</h2>
<p>Robots combine perception (sensing), reasoning (planning what to do) and action (moving motors). Self-driving cars are robots too: cameras, radar and sometimes lidar build a picture of the road, prediction models guess what other road users will do, and a planner decides how to steer and brake. The physical world is unforgiving, which is why robotics has advanced more slowly than chatbots.</p>

<div data-widget="sort" data-set="perception"></div>
`,
    terms: [
      ["Computer vision", "The area of AI that interprets images and video."],
      ["Pixel", "One dot in a digital image, stored as numbers for its colour."],
      ["Object detection", "Finding and locating objects in an image, usually with boxes."],
      ["Segmentation", "Labelling exactly which pixels belong to which object."],
      ["OCR", "Optical character recognition: reading printed or handwritten text in images."],
      ["Adversarial example", "An input changed slightly, often invisibly to people, to fool an AI."],
      ["Speech recognition", "Converting spoken audio into text."],
      ["Natural language processing (NLP)", "The area of AI that works with human language."],
      ["Sentiment analysis", "Detecting whether text expresses a positive, negative or neutral opinion."],
      ["Multimodal AI", "AI that handles more than one type of data, such as text, images and audio."]
    ],
    quiz: [
      { q: "To a computer, a colour photo is…", options: ["A list of words", "A grid of pixels, each stored as numbers", "A sound wave", "A decision tree"], answer: 1, explain: "Each pixel is stored as red, green and blue values." },
      { q: "Blurring your background on a video call relies mostly on…", options: ["Image classification", "Segmentation", "Speech synthesis", "Sentiment analysis"], answer: 1, explain: "Segmentation decides which pixels are you and which are background." },
      { q: "A few stickers make a classifier misread a stop sign. This is an example of…", options: ["An adversarial example", "Data drift", "Transfer learning", "Calibration"], answer: 0, explain: "Small, targeted changes can fool vision models." },
      { q: "Working out whether product reviews are positive or negative is called…", options: ["OCR", "Object detection", "Sentiment analysis", "Clustering"], answer: 2, explain: "Sentiment analysis classifies the opinion in text." },
      { q: "An assistant that can look at a photo and talk about it out loud is…", options: ["Multimodal", "Unsupervised", "An expert system", "Narrowly rule-based"], answer: 0, explain: "It handles images, text and speech together." }
    ],
    sources: [
      ["AI4K12: Big Idea 1 (Perception) and Big Idea 4 (Natural interaction)", "https://ai4k12.org/", "What learners should understand about AI perception."],
      ["Microsoft AI for Beginners: Computer vision and NLP sections", "https://github.com/microsoft/AI-For-Beginners", "Open lessons with notebooks."],
      ["ImageNet", "https://www.image-net.org/", "The dataset behind the 2012 deep learning breakthrough."],
      ["Eykholt et al. (2018), Robust physical-world attacks on deep learning visual classification", "https://arxiv.org/abs/1707.08945", "The stop-sign sticker study."],
      ["Quick, Draw! (Google)", "https://quickdraw.withgoogle.com/", "Play a doodling game and watch a neural network guess."]
    ]
  },

  {
    id: "generative-ai",
    unit: "u3",
    title: "Generative AI and Chatbots",
    summary: "How large language models produce text, how they're trained and extended, and what they can't do.",
    minutes: 13,
    body: `
<p><strong>Generative AI</strong> creates new content (text, images, audio, video or code) rather than just labelling existing data. The best-known examples are chatbots built on <strong>large language models (LLMs)</strong>.</p>

<h2>How an LLM works, in one idea</h2>
<p>An LLM is trained to do one thing extremely well: <strong>predict the next piece of text</strong>. Given "The cat sat on the", it learns that "mat" is a likely next word. Trained on a huge amount of text, this simple task forces the model to pick up grammar, facts, reasoning patterns and style, because all of those help predict what comes next.</p>
<p>Text is split into <strong>tokens</strong>, which are chunks of words (roughly ¾ of a word each in English). The model reads tokens and generates its answer one token at a time. At each step it produces a probability for every possible next token, picks one, adds it to the text, and repeats.</p>
<p>A setting called <strong>temperature</strong> controls how adventurous that pick is. Low temperature almost always takes the most likely token: predictable, good for facts. Higher temperature takes more chances: more varied and creative, but more likely to go off track. That's also why asking the same question twice can give different answers.</p>

<h2>From text predictor to helpful assistant</h2>
<ol>
  <li><strong>Pre-training:</strong> learn to predict text across a vast collection of books, websites and code. This costs enormous amounts of computing and produces a <strong>foundation model</strong>, a general model others can build on.</li>
  <li><strong>Fine-tuning:</strong> train further on examples of helpful conversations, so it answers questions instead of just continuing text.</li>
  <li><strong>Learning from feedback:</strong> people (and sometimes AI) rate responses, and the model is tuned to give the kinds of answers rated as helpful, honest and harmless. Some developers also train models to follow a written set of principles.</li>
</ol>

<h2>The size of it</h2>
<p>"Large" is no exaggeration. Leading models have hundreds of billions of parameters and are trained on trillions of tokens, using thousands of specialised chips for weeks or months. That's why only a handful of organisations build the biggest models, while many more build products on top of them. Some models are <strong>open-weight</strong> (anyone can download and run them), while others are only available through the company's app or service.</p>

<h2>Giving models tools and memory</h2>
<p>On its own, an LLM only knows its training data. Modern assistants extend it:</p>
<ul>
  <li><strong>Retrieval-augmented generation (RAG):</strong> before answering, the system searches documents or the web and puts the relevant passages into the prompt, so the answer can be based on up-to-date or private information and cite its sources.</li>
  <li><strong>Tool use:</strong> the model can call a calculator, run code, look up a calendar or search the web, instead of guessing.</li>
  <li><strong>Reasoning models:</strong> some models are trained to work through a problem step by step (sometimes privately) before answering, which helps with maths, coding and planning.</li>
  <li><strong>Agents:</strong> a model given a goal, tools, and the ability to take several steps on its own, checking results as it goes, such as "book a table for four on Friday near the office". Agents are powerful but raise new questions about mistakes and oversight, so good ones ask for confirmation before important actions.</li>
</ul>

<h2>Other kinds of generative AI</h2>
<ul>
  <li><strong>Image generators</strong> (like Midjourney, DALL·E or Stable Diffusion) often use <em>diffusion models</em>. During training they learn to remove noise from images; to create, they start with pure random noise and remove it step by step, guided by your text, until a picture appears.</li>
  <li><strong>Voice, music and video</strong> generators apply similar ideas to sound and moving images.</li>
  <li><strong>Coding assistants</strong> are LLMs trained heavily on code; they write, explain and fix programs.</li>
</ul>

<h2>What LLMs get wrong</h2>
<ul>
  <li><strong>Hallucinations:</strong> they can state false things confidently, including made-up quotes, statistics and references, because they produce what <em>sounds</em> likely, not what is verified.</li>
  <li><strong>Knowledge cutoff:</strong> they only know what was in their training data, unless connected to search or tools.</li>
  <li><strong>Context window:</strong> they can only consider a limited amount of text at once, though modern windows hold hundreds of pages.</li>
  <li><strong>Sycophancy:</strong> they may agree with you or flatter you rather than correct you.</li>
  <li><strong>Inconsistency:</strong> small changes in wording can change the answer.</li>
  <li><strong>Bias:</strong> they absorb stereotypes from their training text.</li>
  <li><strong>Prompt injection:</strong> hidden instructions in a web page or document the AI reads can trick it into doing something the user didn't ask for. A real risk for agents.</li>
</ul>
<div class="callout"><b>Rule of thumb:</b> Treat an AI chatbot like a very well-read assistant who sometimes misremembers and rarely admits it. Great for drafts, explanations and ideas; double-check facts that matter.</div>

<div data-widget="next-token"></div>
`,
    terms: [
      ["Generative AI", "AI that creates new content like text, images or audio."],
      ["Large language model (LLM)", "A huge neural network trained to predict text."],
      ["Token", "A chunk of text (often part of a word) that a language model reads and writes."],
      ["Temperature", "A setting that controls how random or predictable a model's word choices are."],
      ["Foundation model", "A large, general model trained on broad data that can be adapted for many tasks."],
      ["Pre-training", "The first, large-scale training stage on general data."],
      ["Fine-tuning", "Further training on specific examples to shape behaviour."],
      ["Open-weight model", "A model whose trained parameters are published so anyone can run it."],
      ["Retrieval-augmented generation (RAG)", "Fetching relevant documents and giving them to the model so it can answer from them."],
      ["AI agent", "An AI system that pursues a goal over several steps, using tools and acting on its own."],
      ["Diffusion model", "A generative model that creates images by gradually removing noise."],
      ["Hallucination", "When an AI confidently produces false or made-up information."],
      ["Context window", "The maximum amount of text a model can consider at once."],
      ["Prompt injection", "Hidden instructions in content an AI reads that hijack its behaviour."]
    ],
    quiz: [
      { q: "What is an LLM fundamentally trained to do?", options: ["Search the internet", "Predict the next piece of text", "Store a database of facts", "Translate only"], answer: 1, explain: "Next-token prediction at huge scale is the core training task." },
      { q: "What is a 'hallucination'?", options: ["When the AI crashes", "When the AI confidently states something false", "A type of image generator", "When the AI refuses to answer"], answer: 1, explain: "LLMs can produce plausible-sounding but wrong information." },
      { q: "What is a token?", options: ["A password for the AI", "A chunk of text the model processes", "A reward in reinforcement learning", "A type of GPU"], answer: 1, explain: "Models read and write text as tokens, often pieces of words." },
      { q: "Raising the temperature setting makes a model's output…", options: ["More predictable", "More varied and creative, but riskier", "Faster", "Shorter"], answer: 1, explain: "Higher temperature takes more chances when picking each token." },
      { q: "RAG helps a chatbot by…", options: ["Making it bigger", "Fetching relevant documents so it can answer from them", "Removing its context window", "Training it from scratch"], answer: 1, explain: "Retrieval brings in current or private information and allows citations." },
      { q: "A web page contains hidden text telling an AI agent to email your files to a stranger. This is…", options: ["Fine-tuning", "Prompt injection", "Temperature", "Pre-training"], answer: 1, explain: "Prompt injection hides instructions in content the AI reads." }
    ],
    sources: [
      ["Google AI Essentials (Grow with Google)", "https://grow.google/ai-essentials/", "Beginner course on generative AI tools and their limits."],
      ["3Blue1Brown: Neural networks series (chapters on transformers and LLMs)", "https://www.3blue1brown.com/topics/neural-networks", "Visual introduction to how LLMs and transformers work."],
      ["Microsoft Generative AI for Beginners (GitHub)", "https://github.com/microsoft/generative-ai-for-beginners", "Open course covering LLMs, RAG and agents."],
      ["Lewis et al. (2020), Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "https://arxiv.org/abs/2005.11401", "The paper that introduced the term RAG."],
      ["OWASP Top 10 for LLM Applications", "https://genai.owasp.org/llm-top-10/", "Security risks including prompt injection."]
    ]
  },

  {
    id: "prompting",
    unit: "u3",
    title: "Using AI Well: Prompting and Checking",
    summary: "Practical habits for getting clear, useful answers from AI, and for checking what you get back.",
    minutes: 11,
    body: `
<p>A <strong>prompt</strong> is what you type (or say) to an AI. The same model can give a vague answer or a brilliant one depending on how you ask. The good news: good prompting is mostly just clear communication, the same skill as briefing a capable new colleague who knows nothing about your situation.</p>

<h2>A simple recipe</h2>
<p>A strong prompt usually covers these parts (you won't always need all of them):</p>
<ol>
  <li><strong>Task:</strong> what exactly do you want done? Start with a verb: summarise, draft, compare, explain.</li>
  <li><strong>Context:</strong> who you are, what it's for, what the AI needs to know, and who the audience is.</li>
  <li><strong>Examples:</strong> show what good looks like, if you have one.</li>
  <li><strong>Format:</strong> a table, a list, an email, under 100 words, in plain English.</li>
  <li><strong>Constraints:</strong> what to avoid, what to keep, tone, reading level.</li>
</ol>
<p>Then <strong>iterate</strong>. Treat it as a conversation: "shorter", "more casual", "explain step 3 again", "now turn it into a checklist".</p>

<h2>Before and after</h2>
<div class="table-scroll"><table>
  <tr><th>Weak prompt</th><th>Stronger prompt</th></tr>
  <tr><td>Write about climate change.</td><td>Explain the main causes of climate change to a 12-year-old in 3 short paragraphs, ending with one thing they can do at home.</td></tr>
  <tr><td>Fix my email.</td><td>Here's an email to my landlord about a broken heater. Make it polite but firm, keep it under 120 words, and keep the dates I mentioned.</td></tr>
  <tr><td>Give me a workout.</td><td>I'm a beginner with 20 minutes, no equipment, and a sore knee. Give me a 3-day weekly plan as a table.</td></tr>
  <tr><td>Help me study.</td><td>I have a biology test on photosynthesis on Friday. Quiz me with one question at a time, wait for my answer, then tell me if I'm right and why.</td></tr>
</table></div>

<h2>Useful techniques</h2>
<ul>
  <li><strong>Few-shot examples:</strong> give two or three examples of input and the output you want, then the new input. The AI follows the pattern.</li>
  <li><strong>Think step by step:</strong> for maths, logic or planning, ask it to work through the problem before giving the final answer.</li>
  <li><strong>Give it a role:</strong> "Act as a patient maths tutor" or "Review this as a sceptical editor".</li>
  <li><strong>Ask for questions first:</strong> "Before you answer, ask me anything you need to know."</li>
  <li><strong>Break big jobs into steps:</strong> outline first, then draft each section, then polish.</li>
  <li><strong>Provide the source material:</strong> paste the article or attach the document and say "answer only from this text". This cuts hallucinations a lot.</li>
  <li><strong>Ask it to check itself:</strong> "What might be wrong or missing in this answer?"</li>
</ul>

<h2>Checking what you get back</h2>
<p>Getting an answer is only half the job. Before you use AI output, run through a quick check:</p>
<ul>
  <li><strong>Facts:</strong> are names, numbers, dates and quotes real? Check anything important against a reliable source.</li>
  <li><strong>References:</strong> do the links and citations actually exist and say what the AI claims? Made-up references are a common hallucination.</li>
  <li><strong>Reasoning:</strong> does each step follow? Try the maths yourself.</li>
  <li><strong>Bias and tone:</strong> is anyone stereotyped or left out? Is it appropriate for the audience?</li>
  <li><strong>Fit:</strong> does it actually answer your question, in the format you need?</li>
</ul>
<p>The more the stakes (health, money, law, grades, your reputation), the more checking it deserves. You are responsible for what you publish or submit, not the AI.</p>

<h2>Being honest about AI use</h2>
<p>Schools, universities, publishers and employers have different rules about AI. Find out the rules before you use it for graded or published work, and say how you used AI when asked. A good default: use AI to help you think and learn, not to pretend you did work you didn't.</p>

<div class="callout"><b>Safety habit:</b> Don't paste passwords, bank details, private health information or other people's personal data into AI tools, and be careful with confidential work documents unless your organisation has approved the tool.</div>

<div data-widget="prompt-builder"></div>
`,
    terms: [
      ["Prompt", "The instruction or question you give to an AI model."],
      ["Prompt engineering", "The skill of writing prompts that get reliable, useful results."],
      ["Few-shot prompting", "Including a few worked examples in the prompt so the AI follows the pattern."],
      ["Zero-shot prompting", "Asking for a task with no examples at all."],
      ["Role prompting", "Asking the AI to take on a particular role or perspective."],
      ["Step-by-step (chain-of-thought) prompting", "Asking the AI to reason through a problem before answering."],
      ["Grounding", "Giving the AI source material and asking it to base its answer on that material."],
      ["Iteration", "Improving an answer through follow-up instructions."]
    ],
    quiz: [
      { q: "Which prompt is likely to get the best result?", options: ["Write a story.", "Story please", "Write a 300-word funny bedtime story for a 6-year-old about a dragon who's afraid of the dark.", "Make something creative"], answer: 2, explain: "It gives length, tone, audience and topic." },
      { q: "The first answer isn't quite right. What should you do?", options: ["Give up on AI", "Follow up with what to change", "Copy it anyway", "Ask the exact same thing again word for word"], answer: 1, explain: "Iterating with specific feedback is the fastest way to a good result." },
      { q: "Which should you avoid putting into an AI chatbot?", options: ["A draft essay", "Your bank password", "A recipe question", "A list of holiday ideas"], answer: 1, explain: "Never share passwords or sensitive personal data." },
      { q: "Giving the AI two or three worked examples before your real request is called…", options: ["Few-shot prompting", "Fine-tuning", "Temperature", "Red-teaming"], answer: 0, explain: "The examples show the pattern you want it to follow." },
      { q: "An AI answer includes three academic references. What should you do before using them?", options: ["Trust them; AI cites carefully", "Check that each one exists and says what's claimed", "Delete them all", "Ask the AI if they're real and accept its reply"], answer: 1, explain: "Invented references are a common hallucination; verify them yourself." },
      { q: "What's the best way to reduce made-up facts when summarising a report?", options: ["Raise the temperature", "Paste the report in and ask it to answer only from that text", "Use fewer words", "Ask it to be creative"], answer: 1, explain: "Grounding the AI in source material reduces hallucinations." }
    ],
    sources: [
      ["Google AI Essentials: Discover the art of prompting", "https://grow.google/ai-essentials/", "Beginner prompting course."],
      ["Anthropic: Prompt engineering overview", "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview", "Practical prompting techniques from a model developer."],
      ["OpenAI: Prompt engineering guide", "https://developers.openai.com/api/docs/guides/prompt-engineering", "Another developer's guide to prompt strategies."],
      ["UNESCO: Guidance for generative AI in education and research (2023)", "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research", "Global guidance on responsible use in learning."]
    ]
  },

  {
    id: "ai-in-the-real-world",
    unit: "u3",
    title: "AI in the Real World: What It Can and Can't Do",
    summary: "Where AI is used across industries, how an AI project runs, and how to spot a good AI use case.",
    minutes: 11,
    body: `
<p>You now know how AI works. This lesson is about where it's actually useful, and how people decide whether to use it. You don't need to build AI to make good decisions about it.</p>

<h2>AI across industries</h2>
<div class="table-scroll"><table>
  <tr><th>Sector</th><th>Examples</th></tr>
  <tr><td>Health</td><td>Spotting signs of disease in scans, predicting which patients need extra care, drafting clinical notes, discovering new drugs and protein structures</td></tr>
  <tr><td>Finance</td><td>Fraud detection, credit scoring, customer chatbots, detecting money laundering</td></tr>
  <tr><td>Retail</td><td>Recommendations, demand forecasting, dynamic pricing, warehouse robots</td></tr>
  <tr><td>Transport</td><td>Route planning, traffic prediction, driver assistance and self-driving vehicles</td></tr>
  <tr><td>Farming</td><td>Crop disease detection from photos, precision watering, yield prediction</td></tr>
  <tr><td>Education</td><td>Tutoring assistants, translation, accessibility tools like live captions</td></tr>
  <tr><td>Science</td><td>Weather forecasting, protein folding, materials discovery, analysing telescope data</td></tr>
  <tr><td>Creative work</td><td>Drafting, editing, image and music generation, video effects</td></tr>
  <tr><td>Software</td><td>Coding assistants that write, explain, test and fix code</td></tr>
</table></div>

<h2>What AI is good at</h2>
<ul>
  <li><strong>Tasks with lots of examples</strong> and a clear right answer: if you have thousands of past cases, AI can often learn the pattern.</li>
  <li><strong>Quick judgements:</strong> a rough guide from AI educator Andrew Ng is that if a typical person can do a mental task in about a second (is there a car in this photo? is this review angry?), AI can probably learn it.</li>
  <li><strong>Scale and speed:</strong> checking millions of transactions, reading thousands of documents, working 24/7.</li>
  <li><strong>Language tasks:</strong> drafting, summarising, translating, rewriting for different audiences.</li>
</ul>

<h2>What AI struggles with</h2>
<ul>
  <li><strong>Little or poor data:</strong> rare events, new situations, and anything not well represented in training.</li>
  <li><strong>Common sense and the physical world:</strong> things every child knows can trip AI up, and robots are still clumsy compared to people.</li>
  <li><strong>Guaranteed correctness:</strong> AI is probabilistic, so it will sometimes be wrong. Tasks where a single error is catastrophic need extra safeguards.</li>
  <li><strong>Values and judgement:</strong> deciding what's fair, kind or right is a human responsibility.</li>
  <li><strong>Accountability:</strong> AI can't be held responsible. A person or organisation must be.</li>
</ul>

<h2>How an AI project runs</h2>
<ol>
  <li><strong>Define the problem:</strong> what decision or task, for whom, and what does success look like? ("Cut time spent sorting customer emails by half.")</li>
  <li><strong>Check AI is the right tool:</strong> would a simple rule or a spreadsheet do? Is there data?</li>
  <li><strong>Collect and prepare data</strong> (Lesson 5).</li>
  <li><strong>Build or choose a model:</strong> train one, or adapt an existing model or AI service.</li>
  <li><strong>Evaluate:</strong> test on unseen data, check errors and fairness (Lesson 9).</li>
  <li><strong>Deploy:</strong> put it into real use, usually starting small, with people reviewing outputs.</li>
  <li><strong>Monitor and improve:</strong> watch for data drift, mistakes and complaints, and retrain as needed.</li>
</ol>
<p>It's a loop, not a straight line. Many AI projects fail not because the model is bad, but because the problem was poorly chosen, the data wasn't ready, or nobody planned how people would actually use the result.</p>

<h2>Jobs: tasks, not whole roles</h2>
<p>Most jobs are bundles of many tasks. AI tends to automate or assist with <em>some</em> tasks in a job rather than replace the whole job. A radiologist's work includes reading scans, talking with patients, consulting colleagues and making judgement calls; AI may speed up the first and leave the rest. A useful exercise is to list the tasks in a job you know and ask which ones AI could help with, which it could do alone, and which need a person. Some jobs will shrink, others will grow, and new ones (like AI trainers, evaluators and auditors) appear.</p>

<h2>Using AI as an individual</h2>
<p>The most common real-world use of AI today is people using assistants to help with everyday work: drafting, brainstorming, learning a topic, analysing a spreadsheet, writing code. The skill that matters most is knowing when to use it, how to ask (Lesson 13), and how to check the result.</p>

<div data-widget="sort" data-set="good-use-case"></div>
`,
    terms: [
      ["Use case", "A specific task or problem that a technology is applied to."],
      ["Deployment", "Putting an AI system into real use."],
      ["Monitoring", "Watching a deployed AI system's performance over time to catch problems."],
      ["Automation", "Having a machine do a task with no human involved."],
      ["Augmentation", "Using AI to help a person do a task better or faster, with the person still in charge."],
      ["AI project lifecycle", "The stages of an AI project: define, data, model, evaluate, deploy, monitor."]
    ],
    quiz: [
      { q: "Which task is AI most likely to do well?", options: ["Deciding what's morally right in a new situation", "Spotting whether a product photo shows a scratch, given thousands of labelled examples", "Being legally responsible for a decision", "Inventing a new law"], answer: 1, explain: "Lots of labelled examples and a clear answer suit machine learning." },
      { q: "What is usually the first step in an AI project?", options: ["Buy GPUs", "Clearly define the problem and what success looks like", "Train the biggest model available", "Deploy to all customers"], answer: 1, explain: "Many projects fail because the problem wasn't well chosen." },
      { q: "Why does AI tend to change jobs rather than replace them entirely?", options: ["AI is banned from working", "Jobs are bundles of many tasks, and AI usually helps with only some of them", "People refuse to use AI", "AI can't do any tasks"], answer: 1, explain: "Thinking task by task gives a more realistic picture." },
      { q: "After an AI system is deployed, what should happen?", options: ["Nothing; it's finished", "Monitor performance and retrain when needed", "Delete the test data", "Remove all human review"], answer: 1, explain: "The world changes, so models need ongoing monitoring." },
      { q: "A writer uses AI to suggest headlines, then picks and edits one. This is…", options: ["Full automation", "Augmentation", "Reinforcement learning", "An expert system"], answer: 1, explain: "The person stays in charge; AI helps." }
    ],
    sources: [
      ["AI For Everyone, Weeks 1 to 3 (DeepLearning.AI)", "https://www.deeplearning.ai/courses/ai-for-everyone/", "What AI can and can't do, workflow of AI projects, task-based view of jobs."],
      ["Elements of AI, Chapter 6: Implications", "https://www.elementsofai.com/", "AI's impact on work and society."],
      ["Stanford HAI, AI Index Report", "https://hai.stanford.edu/ai-index", "Data on how AI is used across the economy."],
      ["Google AI Essentials", "https://grow.google/ai-essentials/", "Using AI tools in everyday work."]
    ]
  },

  /* ============================ UNIT 4 ============================ */
  {
    id: "ethics",
    unit: "u4",
    title: "AI Ethics, Risks and Safety",
    summary: "Bias, privacy, misinformation, copyright, the environment, jobs and safety: how to think about AI responsibly.",
    minutes: 13,
    body: `
<p>AI is powerful, which means it can help or harm depending on how it is built and used. Understanding the risks makes you a smarter user and a better future builder. Many organisations sum up the goal as <strong>trustworthy AI</strong>: AI that is reliable, safe, fair, private, transparent and accountable.</p>

<h2>Bias and fairness</h2>
<p>AI learns from data made by people, so it can absorb human biases. Bias can creep in at every stage:</p>
<ul>
  <li><strong>Data:</strong> some groups are missing or under-represented, or the data records past unfair decisions.</li>
  <li><strong>Labels:</strong> the people labelling bring their own assumptions.</li>
  <li><strong>Design:</strong> what the model is told to optimise may not match what's fair. A health tool that predicts "future healthcare spending" as a stand-in for "how sick someone is" will under-rate groups who historically had less access to care.</li>
  <li><strong>Use:</strong> a tool built for one setting is used in another.</li>
</ul>
<p>A well-known 2018 study, "Gender Shades", found commercial face-analysis systems were far less accurate for darker-skinned women than for lighter-skinned men. Fixing bias means checking data, testing results separately for different groups, involving the people affected, and keeping humans involved in important decisions. "Fairness" itself can mean different things (equal accuracy for each group? equal approval rates?), and these can conflict, so it takes human judgement.</p>

<h2>Privacy and surveillance</h2>
<p>AI systems are trained on huge amounts of data, and some of it may be personal. AI can also <em>infer</em> sensitive things you never shared, such as health conditions from shopping patterns. Facial recognition in public spaces raises serious questions about surveillance and freedom. Laws like the EU's GDPR give people rights over their personal data.</p>

<h2>Misinformation and deepfakes</h2>
<p>Generative AI can produce realistic fake images, voices and videos (<strong>deepfakes</strong>) and convincing false text at enormous scale. Risks include fake news, scams using cloned voices, non-consensual fake images, and election interference. A side effect is the <strong>liar's dividend</strong>: once fakes are common, people can wave away real evidence as "probably AI".</p>
<p>Healthy habits: check the source, look for other reliable coverage, use reverse image search, be extra careful with content designed to make you angry or scared, and agree a family "safe word" for urgent money requests. Some companies add hidden <strong>watermarks</strong> or "content credentials" to AI-generated media, and some laws now require AI content to be labelled, though neither is foolproof.</p>

<h2>Copyright and creative work</h2>
<p>Generative models were trained on huge amounts of text, art, music and code, much of it copyrighted, usually without asking the creators. Whether that's legal is being fought out in courts in several countries, and the answers may differ by country. Artists and writers worry about their styles being copied and their work devalued. Questions to consider: was the training data used fairly? Who owns AI-generated output? Should creators be paid or able to opt out?</p>

<h2>Environmental cost</h2>
<p>Training and running large AI models uses a lot of electricity, and data centres also use water for cooling and need chips made from mined materials. Each individual question to a chatbot uses a small amount of energy, but billions of them add up, and AI's share of global electricity demand is growing fast. On the other side, AI also helps with climate work, such as better weather forecasts and more efficient power grids. Using smaller models when they're good enough is one practical way to reduce the footprint.</p>

<h2>Jobs, power and inequality</h2>
<p>AI will automate some tasks and change many jobs, while also creating new ones (Lesson 14). Bigger questions follow: who benefits from the productivity gains? Only a few companies can afford to build the largest models, which concentrates power. Many people, especially in poorer countries, lack access to AI tools, reliable internet or AI that speaks their language well. A <strong>digital divide</strong> could widen.</p>

<h2>Transparency and accountability</h2>
<p>Many AI models are "black boxes": even their builders can't fully explain individual decisions. When AI affects loans, medical care, jobs or justice, people deserve to know AI was involved, get an explanation, and have a way to appeal to a human. A field called <strong>explainable AI</strong> works on this, and <strong>interpretability</strong> research tries to understand what's happening inside neural networks.</p>

<h2>Over-reliance</h2>
<p>When a tool is usually right, people stop checking it, which is called <strong>automation bias</strong>. Pilots, drivers with driver-assist, and doctors using decision aids all face this. Students face a version too: letting AI do all your thinking can mean you never build the skills yourself.</p>

<h2>AI safety and alignment</h2>
<p><strong>Alignment</strong> is the challenge of making sure AI systems reliably do what we intend and act in line with human values, especially as they get more capable. Lesson 7's reward hacking shows the problem in miniature: systems pursue the goal you <em>specified</em>, not the one you <em>meant</em>. Safety work includes testing models for dangerous capabilities (like helping make weapons or carrying out cyberattacks), red-teaming, making models honest about what they don't know, keeping agents under meaningful human control, and studying how models work inside. Researchers disagree about how serious long-term risks from very advanced AI are, but most agree that safety needs to be built in from the start rather than added later.</p>

<div data-widget="ethics-check"></div>

<div class="callout"><b>Your responsible-AI checklist:</b> Is it accurate? Is it fair to everyone it affects? Does it respect privacy and creators' rights? Would I be comfortable if people knew AI was used here? Is a human accountable for the result? Is AI even the right tool for this?</div>
`,
    terms: [
      ["Trustworthy AI", "AI that is valid and reliable, safe, secure, accountable, transparent, explainable, privacy-respecting and fair."],
      ["Algorithmic bias", "Systematic unfairness in an AI system's outputs, often inherited from data or design."],
      ["Proxy", "A stand-in measurement (like spending for sickness) that can quietly introduce bias."],
      ["Deepfake", "Realistic fake audio, image or video created with AI."],
      ["Liar's dividend", "When the existence of fakes lets people dismiss real evidence as fake."],
      ["Watermark (AI)", "A hidden or visible signal marking content as AI-generated."],
      ["Digital divide", "The gap between people who have access to digital technology and those who don't."],
      ["Explainable AI", "Methods for making AI decisions understandable to people."],
      ["Automation bias", "Trusting an automated system too much and failing to check it."],
      ["Alignment", "Making AI systems reliably act according to human intentions and values."],
      ["Human in the loop", "Keeping a person involved to review or approve AI decisions."]
    ],
    quiz: [
      { q: "Why can AI systems be biased?", options: ["Computers dislike certain people", "They learn from data and design choices that can reflect human biases", "Bias is added on purpose by every company", "AI cannot be biased"], answer: 1, explain: "Models reflect patterns, including unfair ones, in their data and goals." },
      { q: "What is a deepfake?", options: ["A very deep neural network", "AI-generated fake media that looks or sounds real", "A secure password", "A type of database"], answer: 1, explain: "Deepfakes are realistic synthetic images, audio or video." },
      { q: "What does 'alignment' mean in AI safety?", options: ["Lining up servers in a data centre", "Making AI reliably act according to human intentions and values", "Formatting text neatly", "Speeding up training"], answer: 1, explain: "Alignment is about AI doing what we actually intend." },
      { q: "An AI recommends rejecting a loan. What's the most responsible approach?", options: ["Accept it automatically", "Have a human review it and give the applicant an explanation and a way to appeal", "Hide that AI was used", "Ask the AI again until it says yes"], answer: 1, explain: "High-stakes decisions need human accountability and transparency." },
      { q: "A politician dismisses a genuine recording by claiming 'it's probably AI'. This is…", options: ["The liar's dividend", "Data drift", "Few-shot prompting", "Calibration"], answer: 0, explain: "Widespread fakes make it easier to deny real evidence." },
      { q: "A nurse stops double-checking an AI's dosage suggestions because it's usually right. This risk is called…", options: ["Automation bias", "Overfitting", "Prompt injection", "Clustering"], answer: 0, explain: "Over-trusting automation means errors slip through." }
    ],
    sources: [
      ["Buolamwini & Gebru (2018), Gender Shades", "http://gendershades.org/", "The study of accuracy gaps in face-analysis systems."],
      ["Obermeyer et al. (2019), Dissecting racial bias in an algorithm used to manage the health of populations, Science", "https://doi.org/10.1126/science.aax2342", "The healthcare spending proxy example."],
      ["NIST AI Risk Management Framework", "https://www.nist.gov/itl/ai-risk-management-framework", "Defines the characteristics of trustworthy AI."],
      ["UNESCO Recommendation on the Ethics of AI (2021)", "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics", "Global ethics standard adopted by UNESCO member states."],
      ["International Energy Agency: Energy and AI (2025)", "https://www.iea.org/reports/energy-and-ai", "Data on AI's electricity use."],
      ["International AI Safety Report", "https://internationalaisafetyreport.org/", "Scientific review of risks from general-purpose AI, led by Yoshua Bengio."]
    ]
  },

  {
    id: "ai-laws",
    unit: "u4",
    title: "AI Laws and Rules Around the World",
    summary: "The EU AI Act's risk levels, the NIST framework, global principles, and your rights.",
    minutes: 11,
    body: `
<p>For years AI had almost no specific rules. That's changing fast. You don't need to be a lawyer, but knowing the basic shape of AI rules helps you understand your rights and what responsible organisations are expected to do. Laws change often, so treat the details here as a snapshot (late 2026) and check official sources for the latest.</p>

<h2>Why regulate AI?</h2>
<p>Existing laws on discrimination, privacy, consumer protection and product safety already apply to AI. But AI raises new problems: decisions that are hard to explain, mistakes at massive scale, realistic fakes, and powerful general-purpose models used in thousands of ways their makers never planned. Rules try to reduce harm without blocking useful innovation, and countries balance those goals differently.</p>

<h2>The EU AI Act: rules by risk level</h2>
<p>The European Union's <strong>AI Act</strong> is the world's first broad AI law. It entered into force in August 2024 and applies in stages. Its central idea is a <strong>risk-based approach</strong>: the higher the risk, the stricter the rules.</p>
<div class="table-scroll"><table>
  <tr><th>Risk level</th><th>Examples</th><th>What the law says</th></tr>
  <tr><td><b>Unacceptable</b></td><td>Government "social scoring", manipulating people in harmful ways, exploiting vulnerable groups, most real-time face recognition by police in public, emotion recognition at work or school</td><td><strong>Banned</strong> (since February 2025)</td></tr>
  <tr><td><b>High</b></td><td>AI used in hiring, education and exam scoring, credit, essential services, law enforcement, migration, medical devices and other safety components</td><td>Strict duties: risk management, quality data, documentation, human oversight, accuracy and security</td></tr>
  <tr><td><b>Limited (transparency)</b></td><td>Chatbots, deepfakes, AI-generated content</td><td>People must be told they're dealing with AI, and synthetic content must be labelled</td></tr>
  <tr><td><b>Minimal</b></td><td>Spam filters, AI in video games</td><td>No new obligations</td></tr>
</table></div>
<p>There are also rules for <strong>general-purpose AI models</strong> (the big foundation models behind chatbots), which have applied since August 2025: providers must publish technical documentation and a summary of training content and respect EU copyright law, and the most powerful models must also assess and reduce serious risks. Fines can reach €35 million or 7% of a company's worldwide turnover for the worst breaches.</p>
<p>The Act also asks organisations that build or use AI to support <strong>AI literacy</strong> among their staff, which is exactly what courses like this one are for.</p>
<p><strong>Timeline update:</strong> In 2026 the EU passed an amending law (the "AI Omnibus") that, among other changes, pushed back the start of most high-risk rules to December 2027 (or August 2028 for AI built into regulated products), and added a new ban on AI systems that generate child sexual abuse material or non-consensual intimate images.</p>

<h2>The NIST AI Risk Management Framework (USA)</h2>
<p>In the United States there is no single federal AI law. Instead there's a mix of existing laws, state laws, and voluntary guidance. The most influential guidance is the <strong>NIST AI Risk Management Framework</strong> (2023), used by organisations worldwide. It organises AI risk work into four functions:</p>
<ul>
  <li><strong>Govern:</strong> build a culture, policies and clear responsibility for AI risk.</li>
  <li><strong>Map:</strong> understand the context: who is affected and what could go wrong.</li>
  <li><strong>Measure:</strong> test and track risks.</li>
  <li><strong>Manage:</strong> act on the risks: fix, monitor, or decide not to deploy.</li>
</ul>
<p>It lists seven characteristics of trustworthy AI: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair, with harmful bias managed.</p>

<h2>Other approaches</h2>
<ul>
  <li><strong>OECD AI Principles</strong> (2019, updated 2024): the first intergovernmental AI principles, backed by dozens of countries: AI should benefit people and the planet, respect human rights and democratic values, be transparent, be robust and safe, and have clear accountability.</li>
  <li><strong>UNESCO Recommendation on the Ethics of AI</strong> (2021): a global standard adopted by UNESCO's member states, with strong emphasis on human rights, diversity and the environment.</li>
  <li><strong>Council of Europe Framework Convention on AI</strong> (2024): the first legally binding international treaty on AI, focused on human rights, democracy and the rule of law.</li>
  <li><strong>China</strong> has specific rules for recommendation algorithms, deepfakes and generative AI services, and since September 2025 requires AI-generated content to be labelled.</li>
  <li><strong>The UK</strong> has so far relied on existing regulators applying AI principles in their own sectors, and runs a government AI Security Institute that tests advanced models.</li>
  <li><strong>Global summits:</strong> governments and companies have met at Bletchley Park (2023), Seoul (2024), Paris (2025) and New Delhi (2026) to discuss AI safety and benefits.</li>
</ul>

<h2>What this means for you</h2>
<ul>
  <li>You often have a right to <strong>know when you're talking to an AI</strong> and when content is AI-generated.</li>
  <li>Data protection laws like the GDPR give rights over your personal data, and some limits on decisions made about you purely by automated means.</li>
  <li>For high-stakes decisions about you (jobs, loans, benefits), it's increasingly expected that there's <strong>human oversight</strong> and a way to complain or appeal.</li>
  <li>If you use AI at work, your organisation may have its own AI policy. Read it.</li>
</ul>

<div data-widget="sort" data-set="eu-risk"></div>

<div class="callout"><b>Big picture:</b> Almost every framework, from Brussels to Washington to Paris, agrees on the same core values: safety, fairness, transparency, privacy, human oversight and accountability. They differ mainly on how strictly to enforce them.</div>
`,
    terms: [
      ["EU AI Act", "The European Union's 2024 law regulating AI according to its level of risk."],
      ["Risk-based approach", "Regulating AI more strictly the more harm it could cause."],
      ["High-risk AI system", "Under the EU AI Act, AI used in sensitive areas like hiring, credit or policing, which faces strict rules."],
      ["Social scoring", "Rating people's trustworthiness based on their behaviour, banned in the EU when it leads to unfair treatment."],
      ["General-purpose AI model", "A model, like a large language model, that can be used for many different tasks."],
      ["NIST AI RMF", "The US National Institute of Standards and Technology's voluntary AI Risk Management Framework."],
      ["OECD AI Principles", "Intergovernmental principles for trustworthy AI, first agreed in 2019."],
      ["AI literacy", "The knowledge and skills to understand, use and judge AI sensibly."],
      ["Human oversight", "People monitoring an AI system and being able to step in or override it."]
    ],
    quiz: [
      { q: "What is the main idea behind the EU AI Act?", options: ["Ban all AI", "Regulate AI more strictly the higher its risk", "Only regulate chatbots", "Let companies decide everything"], answer: 1, explain: "It's a risk-based approach with four levels." },
      { q: "Under the EU AI Act, AI used to score job applicants is…", options: ["Minimal risk", "High risk", "Banned", "Not covered"], answer: 1, explain: "Employment is one of the listed high-risk areas." },
      { q: "Government 'social scoring' of citizens under the EU AI Act is…", options: ["Encouraged", "High risk but allowed", "Banned as an unacceptable risk", "Minimal risk"], answer: 2, explain: "It's one of the prohibited practices." },
      { q: "What must a chatbot do under the EU AI Act's transparency rules?", options: ["Nothing", "Make sure people know they're interacting with AI", "Charge a fee", "Only speak English"], answer: 1, explain: "People have a right to know they're talking to a machine." },
      { q: "What are the four functions of the NIST AI Risk Management Framework?", options: ["Plan, Build, Test, Ship", "Govern, Map, Measure, Manage", "Collect, Clean, Train, Deploy", "Detect, Deny, Delete, Defend"], answer: 1, explain: "Govern, Map, Measure, Manage." },
      { q: "Which is the first legally binding international treaty on AI?", options: ["The OECD AI Principles", "The Council of Europe Framework Convention on AI", "The NIST AI RMF", "The Turing Test"], answer: 1, explain: "The OECD principles and NIST framework are voluntary; the Council of Europe convention is a treaty." }
    ],
    sources: [
      ["Regulation (EU) 2024/1689, the AI Act (official text, EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj", "The law itself."],
      ["European Commission: AI Act overview", "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai", "Plain-language summary of the risk levels."],
      ["Future of Privacy Forum (2026): The AI Act implementation timeline under the AI Omnibus", "https://fpf.org/blog/the-ai-act-implementation-timeline-what-changes-under-the-ai-omnibus", "Explains the 2026 date changes."],
      ["NIST AI Risk Management Framework", "https://www.nist.gov/itl/ai-risk-management-framework", "The US voluntary framework."],
      ["OECD AI Principles", "https://oecd.ai/en/ai-principles", "Intergovernmental principles for trustworthy AI."],
      ["Council of Europe Framework Convention on AI", "https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence", "The first binding international AI treaty."],
      ["UNESCO AI competency framework for students (2024)", "https://unesdoc.unesco.org/ark:/48223/pf0000391105", "What AI literacy should include."]
    ]
  }
];

/* Data for the reusable "sort" activity: [statement, correct answer, explanation] */
window.SORT_SETS = {
  "data-types": {
    title: "Try it: structured or unstructured?",
    choices: ["Structured", "Unstructured"],
    items: [
      ["A spreadsheet of monthly sales by shop", "Structured", "Rows and columns with clear meanings."],
      ["Voice notes sent on a messaging app", "Unstructured", "Audio has no fixed table shape."],
      ["Customer reviews written in free text", "Unstructured", "Free text needs processing before analysis."],
      ["A table of patients' blood pressure readings with dates", "Structured", "Each column is a defined measurement."],
      ["Security camera footage", "Unstructured", "Video is unstructured data."]
    ]
  },
  "perception": {
    title: "Try it: which area of AI?",
    choices: ["Vision", "Speech", "Language"],
    items: [
      ["Live captions appearing during a video call", "Speech", "Turning spoken audio into text is speech recognition."],
      ["A phone app that names the plant in your photo", "Vision", "Classifying images is computer vision."],
      ["Sorting thousands of reviews into happy and unhappy", "Language", "That's sentiment analysis, part of NLP."],
      ["A car spotting a cyclist in its camera feed", "Vision", "Object detection in video."],
      ["An app that reads a menu aloud in your language", "Language", "Translation is NLP (with speech synthesis at the end)."]
    ]
  },
  "good-use-case": {
    title: "Try it: good fit for AI?",
    choices: ["Good fit", "Poor fit"],
    items: [
      ["Flagging possibly faulty parts from 50,000 labelled photos of good and faulty parts", "Good fit", "Plenty of labelled examples and a clear, quick judgement."],
      ["Deciding on its own whether someone should go to prison", "Poor fit", "High stakes, values-laden and needs human accountability."],
      ["Drafting first versions of product descriptions for an online shop, checked by staff", "Good fit", "Language task with human review."],
      ["Predicting sales of a brand-new kind of product with no history", "Poor fit", "There's no relevant data to learn from."],
      ["Adding up a column of numbers", "Poor fit", "A simple formula is cheaper and always correct."]
    ]
  },
  "eu-risk": {
    title: "Try it: EU AI Act risk level",
    choices: ["Unacceptable", "High", "Limited", "Minimal"],
    items: [
      ["A system that scores citizens' trustworthiness from their social behaviour", "Unacceptable", "Social scoring leading to unfair treatment is banned."],
      ["An AI that ranks job applicants' CVs", "High", "Employment decisions are a listed high-risk area."],
      ["A customer service chatbot on a shop's website", "Limited", "Users must be told they're talking to an AI."],
      ["A spam filter in your email", "Minimal", "Low-risk AI has no new obligations."],
      ["AI that marks students' exams", "High", "Education and exam scoring are high-risk areas."]
    ]
  }
};
