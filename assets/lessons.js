/* Level 1 course content. Each lesson: id, title, summary, minutes, body (HTML), terms, quiz. */
window.LEVEL1 = [
  {
    id: "what-is-ai",
    title: "What is Artificial Intelligence?",
    summary: "A plain-English definition, and where you already meet AI every day.",
    minutes: 8,
    body: `
<p><strong>Artificial intelligence (AI)</strong> is the field of building computer systems that do things we would normally say need human intelligence: understanding language, recognising images, making decisions, or spotting patterns.</p>
<p>The key difference from ordinary software is <em>how</em> it gets its behaviour. A normal program follows rules a person wrote line by line. Most modern AI instead <strong>learns its rules from examples</strong>. Show it thousands of photos labelled "cat" and "dog" and it works out for itself what tends to separate the two.</p>

<div class="callout"><b>One-line definition:</b> AI is software that learns patterns from data and uses them to make predictions or decisions about new situations.</div>

<h2>You already use AI every day</h2>
<ul>
  <li><strong>Phone face unlock</strong> recognises your face from the camera.</li>
  <li><strong>Spam filters</strong> decide which emails are junk.</li>
  <li><strong>Maps apps</strong> predict traffic and pick the fastest route.</li>
  <li><strong>Streaming recommendations</strong> guess what you'll want to watch next.</li>
  <li><strong>Voice assistants and chatbots</strong> understand and reply to what you say.</li>
  <li><strong>Autocorrect and predictive text</strong> guess your next word.</li>
</ul>

<h2>Narrow AI vs general AI</h2>
<p>Every AI system that exists today is <strong>narrow AI</strong> (also called weak AI): it is good at a specific kind of task. A chess engine can beat any human at chess but cannot drive a car. Even large chatbots, which seem to know a bit about everything, are still trained for one core job: predicting text.</p>
<p><strong>Artificial general intelligence (AGI)</strong> would be a system that can learn and perform any intellectual task a human can. It is a goal that researchers debate a lot, and people disagree about how close we are.</p>

<h2>AI, machine learning and deep learning</h2>
<p>These words get mixed up all the time. Think of them as circles inside circles:</p>
<ul>
  <li><strong>AI</strong> is the whole field: any technique that makes machines act intelligently.</li>
  <li><strong>Machine learning (ML)</strong> is the part of AI where systems learn from data instead of being hand-programmed.</li>
  <li><strong>Deep learning</strong> is the part of ML that uses large <em>neural networks</em> with many layers. It powers most of today's headline AI, like image generators and chatbots.</li>
</ul>

<div data-widget="is-it-ai"></div>
`,
    terms: [
      ["Artificial intelligence (AI)", "Computer systems that perform tasks normally requiring human intelligence."],
      ["Narrow AI", "AI built for a specific task or kind of task. All current AI is narrow."],
      ["AGI", "Artificial general intelligence: a hypothetical AI that can learn any intellectual task a human can."],
      ["Machine learning", "A branch of AI where systems learn patterns from data."],
      ["Deep learning", "Machine learning using neural networks with many layers."]
    ],
    quiz: [
      { q: "What mainly makes modern AI different from ordinary software?", options: ["It runs faster", "It learns its rules from examples instead of having every rule written by hand", "It only works on the internet", "It never makes mistakes"], answer: 1, explain: "Traditional programs follow hand-written rules; machine learning systems discover rules from data." },
      { q: "Which of these is narrow AI?", options: ["A chess engine", "A spam filter", "A voice assistant", "All of them"], answer: 3, explain: "Every AI system in use today is narrow AI, built for a particular kind of task." },
      { q: "How do AI, machine learning and deep learning relate?", options: ["They are three unrelated fields", "Deep learning is part of ML, which is part of AI", "AI is part of deep learning", "They are three names for the same thing"], answer: 1, explain: "They nest: AI ⊃ machine learning ⊃ deep learning." }
    ]
  },

  {
    id: "history",
    title: "A Short History of AI",
    summary: "From Alan Turing to ChatGPT: the big moments, the hype and the 'AI winters'.",
    minutes: 9,
    body: `
<p>AI feels brand new, but people have been working on it for more than 70 years. Its history is a cycle of big promises, disappointment, and then breakthroughs once computers and data caught up.</p>

<ul class="timeline">
  <li><b>1950</b> Alan Turing asks "Can machines think?" and proposes the <strong>Turing Test</strong>: if you can't tell a machine from a human in conversation, does it matter whether it "really" thinks?</li>
  <li><b>1956</b> The <strong>Dartmouth workshop</strong> coins the term "artificial intelligence". Researchers are optimistic it will be solved in a generation.</li>
  <li><b>1958</b> Frank Rosenblatt builds the <strong>Perceptron</strong>, an early artificial neuron that learns to recognise simple shapes.</li>
  <li><b>1966</b> <strong>ELIZA</strong>, a simple chatbot that mimics a therapist, surprises people with how human it seems despite following basic rules.</li>
  <li><b>1970s–80s</b> <strong>AI winters</strong>: progress is slower than promised, so funding dries up. "Expert systems" built from hand-written rules have a boom in the 80s, then hit limits.</li>
  <li><b>1997</b> IBM's <strong>Deep Blue</strong> beats world chess champion Garry Kasparov.</li>
  <li><b>2012</b> A deep neural network called <strong>AlexNet</strong> wins an image recognition contest by a huge margin. The <strong>deep learning era</strong> begins, powered by GPUs and big datasets.</li>
  <li><b>2016</b> DeepMind's <strong>AlphaGo</strong> beats Go champion Lee Sedol, a game long thought too complex for computers.</li>
  <li><b>2017</b> Google researchers publish the <strong>Transformer</strong> architecture ("Attention Is All You Need"), the design behind modern language models.</li>
  <li><b>2022</b> <strong>ChatGPT</strong> launches and reaches 100 million users in about two months. Generative AI goes mainstream.</li>
  <li><b>2023 onward</b> Rapid growth of large language models and AI assistants from many companies (Anthropic's Claude, Google's Gemini, Meta's Llama and others), plus image, video and music generators.</li>
</ul>

<h2>Why did it take off now?</h2>
<p>The ideas behind neural networks are decades old. Three things changed:</p>
<ol>
  <li><strong>Data:</strong> the internet created enormous amounts of text, images and video to learn from.</li>
  <li><strong>Compute:</strong> graphics chips (GPUs) turned out to be great at the maths neural networks need.</li>
  <li><strong>Better methods:</strong> improvements like the Transformer made it possible to train much bigger models effectively.</li>
</ol>
<div class="callout"><b>Takeaway:</b> AI progress has come in waves. Knowing the history helps you stay calm about both the hype and the doom.</div>
`,
    terms: [
      ["Turing Test", "Alan Turing's 1950 test: can a machine's conversation be told apart from a human's?"],
      ["AI winter", "A period when AI funding and interest dropped after unmet promises."],
      ["Expert system", "1980s-style AI built from hand-written if-then rules from human experts."],
      ["GPU", "Graphics processing unit: a chip that does many calculations in parallel, ideal for training neural networks."],
      ["Transformer", "The 2017 neural network design behind modern large language models."]
    ],
    quiz: [
      { q: "What was the Turing Test designed to explore?", options: ["How fast a computer can calculate", "Whether a machine's conversation can be told apart from a human's", "How much memory a computer has", "Whether robots can walk"], answer: 1, explain: "Turing proposed judging machine intelligence by conversation." },
      { q: "What is an 'AI winter'?", options: ["When AI systems stop working in cold weather", "A period of reduced funding and interest after unmet expectations", "The release of a new AI model", "A type of neural network"], answer: 1, explain: "There were AI winters in the 1970s and late 1980s." },
      { q: "Which three things drove the modern AI boom?", options: ["Data, compute and better methods", "Robots, satellites and the cloud", "Faster internet, bigger screens and phones", "Luck, funding and marketing"], answer: 0, explain: "Huge datasets, powerful GPUs and methods like the Transformer came together." }
    ]
  },

  {
    id: "how-machines-learn",
    title: "How Machines Learn",
    summary: "Data, features, training and testing: the core loop behind every ML system.",
    minutes: 10,
    body: `
<p>Imagine teaching a child what an apple is. You don't write down a precise definition. You show them lots of apples (and some things that aren't apples) and correct them when they get it wrong. Machine learning works in a surprisingly similar way.</p>

<h2>The ingredients</h2>
<ul>
  <li><strong>Data:</strong> examples to learn from, such as house listings, photos, or sentences.</li>
  <li><strong>Features:</strong> the measurable details in each example. For a house: size, number of bedrooms, location.</li>
  <li><strong>Labels:</strong> the right answer for each example, when we have it. For a house: its sale price.</li>
  <li><strong>Model:</strong> a mathematical function with adjustable settings (called <em>parameters</em> or <em>weights</em>) that turns features into a prediction.</li>
</ul>

<h2>The training loop</h2>
<ol>
  <li>The model makes a prediction for an example (at first, basically a guess).</li>
  <li>We measure how wrong it was using a <strong>loss function</strong>.</li>
  <li>We nudge the parameters slightly in the direction that would have made the error smaller.</li>
  <li>Repeat millions of times across all the data.</li>
</ol>
<p>Over time the model's guesses get better. This "nudge downhill to reduce error" process is called <strong>gradient descent</strong>, and it is at the heart of nearly all modern AI.</p>

<div class="callout"><b>Analogy:</b> Training is like tuning a guitar by ear. Pluck, listen to how off it sounds, turn the peg a little, and repeat until it sounds right.</div>

<h2>Training data vs test data</h2>
<p>We always keep some data aside that the model never sees during training: the <strong>test set</strong>. After training, we check performance on it. This tells us whether the model really learned a general pattern or just memorised the examples.</p>
<p>A model that memorises its training data but fails on new data is <strong>overfitting</strong>, like a student who memorised last year's exam answers but doesn't understand the subject. A model too simple to capture the pattern at all is <strong>underfitting</strong>.</p>

<h2>Garbage in, garbage out</h2>
<p>A model can only be as good as its data. If the data is messy, too small, or unrepresentative, the model will be too. Much of real-world AI work is collecting and cleaning data, not building clever models.</p>
`,
    terms: [
      ["Feature", "A measurable property of an example that the model uses as input."],
      ["Label", "The correct answer attached to a training example."],
      ["Parameters / weights", "The adjustable numbers inside a model that training changes."],
      ["Loss function", "A measure of how wrong a model's prediction is."],
      ["Gradient descent", "The method of repeatedly nudging parameters to reduce the loss."],
      ["Overfitting", "When a model memorises training data and does poorly on new data."]
    ],
    quiz: [
      { q: "Why do we keep a separate test set?", options: ["To make training faster", "To check that the model works on data it has never seen", "To store extra labels", "Because training data runs out"], answer: 1, explain: "Testing on unseen data reveals whether the model generalises or just memorised." },
      { q: "A model scores 99% on training data but 55% on new data. What's happening?", options: ["Underfitting", "Overfitting", "Perfect learning", "Gradient descent failed to start"], answer: 1, explain: "Great on training data but poor on new data is the classic sign of overfitting." },
      { q: "What does the loss function measure?", options: ["How much electricity the model uses", "How big the dataset is", "How wrong the model's predictions are", "How many layers the model has"], answer: 2, explain: "Training tries to make the loss as small as possible." },
      { q: "For predicting house prices, which is a feature?", options: ["The sale price", "The number of bedrooms", "The loss function", "The test set"], answer: 1, explain: "Bedrooms is an input feature; the sale price is the label we want to predict." }
    ]
  },

  {
    id: "types-of-ml",
    title: "Three Ways Machines Learn",
    summary: "Supervised, unsupervised and reinforcement learning, with real examples.",
    minutes: 9,
    body: `
<p>Machine learning problems mostly fall into three families, depending on what kind of feedback the model gets.</p>

<h2>1. Supervised learning: learning with an answer key</h2>
<p>Every training example comes with the correct answer (a label). The model learns to map inputs to outputs.</p>
<ul>
  <li><strong>Classification</strong> predicts a category: spam or not spam, cat or dog, which disease.</li>
  <li><strong>Regression</strong> predicts a number: house price, tomorrow's temperature, delivery time.</li>
</ul>

<h2>2. Unsupervised learning: finding hidden structure</h2>
<p>There are no labels. The model looks for patterns on its own.</p>
<ul>
  <li><strong>Clustering</strong> groups similar things, like customers with similar shopping habits.</li>
  <li><strong>Anomaly detection</strong> spots things that don't fit, like unusual card transactions that might be fraud.</li>
</ul>

<h2>3. Reinforcement learning: learning by trial and error</h2>
<p>An <strong>agent</strong> takes actions in an <strong>environment</strong> and receives <strong>rewards</strong> or penalties. Over many attempts it learns which actions lead to the most reward. This is how AlphaGo mastered Go and how robots learn to walk in simulation.</p>

<div class="table-scroll"><table>
  <tr><th>Type</th><th>Feedback</th><th>Example</th></tr>
  <tr><td>Supervised</td><td>Correct answers (labels)</td><td>Email spam filter</td></tr>
  <tr><td>Unsupervised</td><td>None, finds structure</td><td>Grouping customers</td></tr>
  <tr><td>Reinforcement</td><td>Rewards and penalties</td><td>Game-playing AI</td></tr>
</table></div>

<div class="callout"><b>Bonus:</b> Modern chatbots mix all three. They learn language by predicting the next word in huge amounts of text (a "self-supervised" trick where the text itself provides the answers), then get tuned with human feedback using reinforcement learning.</div>

<div data-widget="ml-sort"></div>
`,
    terms: [
      ["Supervised learning", "Learning from examples that include the correct answers."],
      ["Classification", "Predicting which category something belongs to."],
      ["Regression", "Predicting a numeric value."],
      ["Unsupervised learning", "Finding patterns in data without labels."],
      ["Clustering", "Grouping similar items together."],
      ["Reinforcement learning", "Learning by acting and receiving rewards or penalties."]
    ],
    quiz: [
      { q: "Predicting tomorrow's temperature is an example of…", options: ["Classification", "Regression", "Clustering", "Reinforcement learning"], answer: 1, explain: "Temperature is a number, so it's regression." },
      { q: "A shop groups customers by buying habits without any predefined groups. This is…", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Regression"], answer: 1, explain: "No labels and finding groups means unsupervised clustering." },
      { q: "A robot learns to walk by getting points for staying upright. This is…", options: ["Reinforcement learning", "Supervised learning", "Clustering", "Classification"], answer: 0, explain: "Actions plus rewards is reinforcement learning." }
    ]
  },

  {
    id: "neural-networks",
    title: "Neural Networks, Simply",
    summary: "What an artificial neuron does, and how stacking them creates deep learning.",
    minutes: 11,
    body: `
<p>Neural networks are loosely inspired by the brain, which is made of billions of connected neurons. An artificial neural network is much simpler: it's just lots of small maths units wired together.</p>

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
<p>Each layer learns to detect more complex features. In an image network, early layers might detect edges, middle layers detect shapes like eyes or ears, and later layers recognise whole objects. A network with many hidden layers is called <strong>deep</strong>, which is where "deep learning" comes from.</p>

<h2>How does it learn?</h2>
<p>Exactly the training loop from Lesson 3. The network makes a prediction, the loss measures the error, and a method called <strong>backpropagation</strong> works out how much each weight contributed to the error so gradient descent can adjust them all. Large modern models have billions of weights tuned this way.</p>

<div class="callout"><b>Reality check:</b> Neural networks don't think like brains. The "neuron" name is an analogy. Under the hood it's multiplication, addition, and lots of it.</div>
`,
    terms: [
      ["Neuron (artificial)", "A unit that weights its inputs, adds a bias and applies an activation function."],
      ["Weight", "A number controlling how much an input influences a neuron."],
      ["Bias", "A number added to the weighted sum that shifts the neuron's threshold."],
      ["Activation function", "A function that decides a neuron's output from its weighted sum."],
      ["Hidden layer", "A layer between input and output that transforms data."],
      ["Backpropagation", "The method for working out how each weight should change to reduce the error."]
    ],
    quiz: [
      { q: "What does a weight do in a neuron?", options: ["Stores the training data", "Controls how much an input influences the output", "Counts the number of layers", "Measures the loss"], answer: 1, explain: "A bigger weight means that input matters more." },
      { q: "What makes a neural network 'deep'?", options: ["It runs underground", "It has many hidden layers", "It uses very large numbers", "It was trained for a long time"], answer: 1, explain: "Deep refers to many stacked layers." },
      { q: "What is backpropagation used for?", options: ["Displaying results", "Working out how to adjust each weight to reduce error", "Collecting data", "Splitting train and test sets"], answer: 1, explain: "Backpropagation computes how each weight affected the error so it can be adjusted." }
    ]
  },

  {
    id: "generative-ai",
    title: "Generative AI and Chatbots",
    summary: "How large language models like ChatGPT and Claude produce text, and what they can't do.",
    minutes: 11,
    body: `
<p><strong>Generative AI</strong> creates new content (text, images, audio, video or code) rather than just labelling existing data. The best-known examples are chatbots built on <strong>large language models (LLMs)</strong>.</p>

<h2>How an LLM works, in one idea</h2>
<p>An LLM is trained to do one thing extremely well: <strong>predict the next piece of text</strong>. Given "The cat sat on the", it learns that "mat" is a likely next word. Trained on a huge amount of text, this simple task forces the model to pick up grammar, facts, reasoning patterns and style.</p>
<p>Text is split into <strong>tokens</strong>, which are chunks of words (roughly ¾ of a word each in English). The model reads tokens and generates its answer one token at a time, each time choosing a likely next token based on everything so far.</p>

<h2>From text predictor to helpful assistant</h2>
<ol>
  <li><strong>Pre-training:</strong> learn to predict text across a vast collection of books, websites and code.</li>
  <li><strong>Fine-tuning:</strong> train further on examples of helpful conversations.</li>
  <li><strong>Learning from feedback:</strong> people (and sometimes AI) rate responses, and the model is tuned to give the kinds of answers rated as helpful, honest and harmless.</li>
</ol>

<h2>Other kinds of generative AI</h2>
<ul>
  <li><strong>Image generators</strong> (like Midjourney or DALL·E) often use <em>diffusion models</em>, which learn to turn random noise into an image step by step, guided by your text.</li>
  <li><strong>Voice, music and video</strong> generators apply similar ideas to sound and moving images.</li>
  <li><strong>Coding assistants</strong> are LLMs trained heavily on code.</li>
</ul>

<h2>What LLMs get wrong</h2>
<ul>
  <li><strong>Hallucinations:</strong> they can state false things confidently, because they produce what <em>sounds</em> likely, not what is verified.</li>
  <li><strong>Knowledge cutoff:</strong> they only know what was in their training data, unless connected to search or tools.</li>
  <li><strong>Context window:</strong> they can only consider a limited amount of text at once.</li>
</ul>
<div class="callout"><b>Rule of thumb:</b> Treat an AI chatbot like a very well-read assistant who sometimes misremembers. Great for drafts and ideas; double-check facts that matter.</div>
`,
    terms: [
      ["Generative AI", "AI that creates new content like text, images or audio."],
      ["Large language model (LLM)", "A huge neural network trained to predict text."],
      ["Token", "A chunk of text (often part of a word) that a language model reads and writes."],
      ["Pre-training", "The first, large-scale training stage on general data."],
      ["Fine-tuning", "Further training on specific examples to shape behaviour."],
      ["Hallucination", "When an AI confidently produces false or made-up information."],
      ["Context window", "The maximum amount of text a model can consider at once."]
    ],
    quiz: [
      { q: "What is an LLM fundamentally trained to do?", options: ["Search the internet", "Predict the next piece of text", "Store a database of facts", "Translate only"], answer: 1, explain: "Next-token prediction at huge scale is the core training task." },
      { q: "What is a 'hallucination'?", options: ["When the AI crashes", "When the AI confidently states something false", "A type of image generator", "When the AI refuses to answer"], answer: 1, explain: "LLMs can produce plausible-sounding but wrong information." },
      { q: "What is a token?", options: ["A password for the AI", "A chunk of text the model processes", "A reward in reinforcement learning", "A type of GPU"], answer: 1, explain: "Models read and write text as tokens, often pieces of words." }
    ]
  },

  {
    id: "prompting",
    title: "Using AI Well: Prompting Basics",
    summary: "Practical habits for getting clear, useful answers from AI assistants.",
    minutes: 9,
    body: `
<p>A <strong>prompt</strong> is what you type to an AI. The same model can give a vague answer or a brilliant one depending on how you ask. The good news: good prompting is mostly just clear communication.</p>

<h2>Five habits that help</h2>
<ol>
  <li><strong>Give context.</strong> Who you are, what it's for, and who the audience is.</li>
  <li><strong>Be specific about the task.</strong> "Summarise" is vague; "Summarise in 5 bullet points for a busy manager" is clear.</li>
  <li><strong>Say what format you want.</strong> A table, a list, an email, under 100 words.</li>
  <li><strong>Show an example</strong> of what good looks like, if you have one.</li>
  <li><strong>Iterate.</strong> Treat it as a conversation: "shorter", "more casual", "explain step 3 again".</li>
</ol>

<h2>Before and after</h2>
<div class="table-scroll"><table>
  <tr><th>Weak prompt</th><th>Stronger prompt</th></tr>
  <tr><td>Write about climate change.</td><td>Explain the main causes of climate change to a 12-year-old in 3 short paragraphs, ending with one thing they can do at home.</td></tr>
  <tr><td>Fix my email.</td><td>Here's an email to my landlord about a broken heater. Make it polite but firm, keep it under 120 words, and keep the dates I mentioned.</td></tr>
  <tr><td>Give me a workout.</td><td>I'm a beginner with 20 minutes, no equipment, and a sore knee. Give me a 3-day weekly plan as a table.</td></tr>
</table></div>

<h2>Useful tricks</h2>
<ul>
  <li><strong>Ask it to think step by step</strong> for maths or logic problems.</li>
  <li><strong>Give it a role:</strong> "Act as a patient maths tutor".</li>
  <li><strong>Ask for questions first:</strong> "Before you answer, ask me anything you need to know."</li>
  <li><strong>Ask it to check itself:</strong> "What might be wrong or missing in this answer?"</li>
</ul>

<div class="callout"><b>Safety habit:</b> Don't paste passwords, bank details or other people's private information into AI tools, and verify important facts with a reliable source.</div>
`,
    terms: [
      ["Prompt", "The instruction or question you give to an AI model."],
      ["Prompt engineering", "The skill of writing prompts that get reliable, useful results."],
      ["Role prompting", "Asking the AI to take on a particular role or perspective."],
      ["Iteration", "Improving an answer through follow-up instructions."]
    ],
    quiz: [
      { q: "Which prompt is likely to get the best result?", options: ["Write a story.", "Story please", "Write a 300-word funny bedtime story for a 6-year-old about a dragon who's afraid of the dark.", "Make something creative"], answer: 2, explain: "It gives length, tone, audience and topic." },
      { q: "The first answer isn't quite right. What should you do?", options: ["Give up on AI", "Follow up with what to change", "Copy it anyway", "Ask the exact same thing again word for word"], answer: 1, explain: "Iterating with specific feedback is the fastest way to a good result." },
      { q: "Which should you avoid putting into an AI chatbot?", options: ["A draft essay", "Your bank password", "A recipe question", "A list of holiday ideas"], answer: 1, explain: "Never share passwords or sensitive personal data." }
    ]
  },

  {
    id: "ethics",
    title: "AI Ethics, Risks and Safety",
    summary: "Bias, privacy, misinformation, jobs and safety: how to think about AI responsibly.",
    minutes: 10,
    body: `
<p>AI is powerful, which means it can help or harm depending on how it is built and used. Understanding the risks makes you a smarter user and a better future builder.</p>

<h2>Bias and fairness</h2>
<p>AI learns from data made by people, so it can absorb human biases. A hiring model trained on past hiring decisions might unfairly favour one group if past decisions did. Fixing this means checking data, testing results across groups, and keeping humans involved in important decisions.</p>

<h2>Privacy</h2>
<p>AI systems are trained on huge amounts of data, and some of it may be personal. Facial recognition and tracking raise questions about surveillance. Laws like the EU's GDPR and the EU AI Act set rules for how data and AI can be used.</p>

<h2>Misinformation and deepfakes</h2>
<p>Generative AI can produce realistic fake images, voices and videos (<strong>deepfakes</strong>) and convincing false text. Healthy habits: check the source, look for other reliable coverage, and be extra careful with content designed to make you angry or scared.</p>

<h2>Jobs and the economy</h2>
<p>AI will automate some tasks and change many jobs, while also creating new ones. History suggests the people who do best are those who learn to work <em>with</em> the new tools, which is exactly what you're doing here.</p>

<h2>Transparency and accountability</h2>
<p>Many AI models are "black boxes": even their builders can't fully explain individual decisions. When AI affects loans, medical care or justice, people deserve explanations and a way to appeal. A field called <strong>explainable AI</strong> works on this.</p>

<h2>AI safety and alignment</h2>
<p><strong>Alignment</strong> is the challenge of making sure AI systems reliably do what we intend and act in line with human values, especially as they get more capable. Researchers study how to make models honest, avoid harmful outputs, and remain under meaningful human control.</p>

<div data-widget="ethics-check"></div>

<div class="callout"><b>Your responsible-AI checklist:</b> Is it accurate? Is it fair? Does it respect privacy? Would I be comfortable if people knew AI was used here? Is a human accountable for the result?</div>
`,
    terms: [
      ["Algorithmic bias", "Systematic unfairness in an AI system's outputs, often inherited from data."],
      ["Deepfake", "Realistic fake audio, image or video created with AI."],
      ["Explainable AI", "Methods for making AI decisions understandable to people."],
      ["Alignment", "Making AI systems reliably act according to human intentions and values."],
      ["Human in the loop", "Keeping a person involved to review or approve AI decisions."]
    ],
    quiz: [
      { q: "Why can AI systems be biased?", options: ["Computers dislike certain people", "They learn from data that can reflect human biases", "Bias is added on purpose by every company", "AI cannot be biased"], answer: 1, explain: "Models reflect patterns, including unfair ones, in their training data." },
      { q: "What is a deepfake?", options: ["A very deep neural network", "AI-generated fake media that looks or sounds real", "A secure password", "A type of database"], answer: 1, explain: "Deepfakes are realistic synthetic images, audio or video." },
      { q: "What does 'alignment' mean in AI safety?", options: ["Lining up servers in a data centre", "Making AI reliably act according to human intentions and values", "Formatting text neatly", "Speeding up training"], answer: 1, explain: "Alignment is about AI doing what we actually intend." },
      { q: "An AI recommends rejecting a loan. What's the most responsible approach?", options: ["Accept it automatically", "Have a human review it and give the applicant an explanation and a way to appeal", "Hide that AI was used", "Ask the AI again until it says yes"], answer: 1, explain: "High-stakes decisions need human accountability and transparency." }
    ]
  }
];
