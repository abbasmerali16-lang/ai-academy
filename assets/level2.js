/* Level 3 course content: Data and Python.
   Same shape as Level 1: id, unit, title, summary, minutes, body (HTML), terms, quiz, sources.
   All lesson text and code is original writing. Sources are credited for fact-checking and further reading.
   Code boxes: <div data-widget="py" data-title="..."><textarea>python code</textarea></div> run real Python in the page.
   Inside these template strings, write a Python backslash as two backslashes (\\n). */
window.LEVEL2_UNITS = [
  { id: "l2u1", title: "Unit 1 · Python from scratch", blurb: "Your first programs: values, lists, loops, decisions and functions, the building blocks of every AI project." },
  { id: "l2u2", title: "Unit 2 · Working with data", blurb: "NumPy and pandas, the two libraries almost every data and AI project in Python starts with, plus cleaning and combining data." },
  { id: "l2u3", title: "Unit 3 · Statistics for AI", blurb: "Averages and spread, probability, samples, correlation and honest charts: how to describe data and not be fooled by it." },
  { id: "l2u4", title: "Unit 4 · The maths behind machine learning", blurb: "Vectors, matrices and slopes made friendly, responsible handling of data, and a project exploring a real dataset." }
];

window.LEVEL2 = [
  /* ============================ UNIT 1 ============================ */
  {
    id: "python-first-steps",
    unit: "l2u1",
    title: "Why Python, and Your First Program",
    summary: "What programming really is, why AI people use Python, and running your first lines of code.",
    minutes: 12,
    body: `
<p>In Level 1 you learned what AI is and how it learns. From here on you'll start doing it yourself, and that means writing a little code. Don't worry: this level starts from absolute zero and assumes you have never programmed before.</p>
<p>A <strong>program</strong> is just a list of instructions for a computer, written in a language precise enough that there is only one way to read it. Computers are fast and tireless but completely literal. They do exactly what you wrote, not what you meant, so programming is mostly the skill of saying things very clearly.</p>

<div class="callout"><b>One-line definition:</b> Programming is writing exact, step-by-step instructions that a computer can follow, in a language both you and it can read.</div>

<h2>Why Python?</h2>
<p>There are hundreds of programming languages. AI and data work has settled on one above all others: <strong>Python</strong>. It was created by Guido van Rossum and first released in 1991 (the name comes from the comedy group Monty Python, not the snake). It became the language of AI for a few reasons:</p>
<ul>
  <li><strong>It reads almost like English.</strong> Python was designed to be readable, so beginners can follow it and experts make fewer mistakes.</li>
  <li><strong>The libraries.</strong> A library is a bundle of ready-made code someone else wrote. Python has the best ones for data and AI: NumPy for numbers, pandas for tables, scikit-learn for classic machine learning, and PyTorch for deep learning. You'll meet all of them in this academy.</li>
  <li><strong>The community.</strong> Almost every AI tutorial, research paper's code and course uses Python, so help is everywhere.</li>
</ul>
<p>The numbers back this up. GitHub's 2025 Octoverse report found Python used in nearly half of all new AI projects on the site, and the 2025 Stack Overflow developer survey recorded one of Python's biggest ever jumps in use, which its authors linked to AI.</p>

<h2>Where code runs</h2>
<p>Python code is run by a program called the <strong>interpreter</strong>, which reads your instructions one line at a time, top to bottom, and carries them out. You can reach it in several ways:</p>
<ul>
  <li><strong>Right here.</strong> The code boxes in these lessons run real Python inside your web browser, using a project called Pyodide. Nothing to install.</li>
  <li><strong>Notebooks.</strong> A <strong>Jupyter notebook</strong> mixes code, results, charts and notes in one document, split into cells you run one at a time. It's the standard tool for exploring data. <strong>Google Colab</strong> gives you free notebooks in the browser with just a Google account.</li>
  <li><strong>On your own computer.</strong> Install Python from python.org, then write code in an editor such as VS Code. This is how bigger projects are built.</li>
</ul>

<h2>Your first program</h2>
<p>The <code>print()</code> instruction shows something on the screen. Text goes inside quote marks so Python knows it's text and not an instruction. Anything after a <code>#</code> is a <strong>comment</strong>: a note for humans that Python ignores.</p>
<div data-widget="py" data-title="Try it: say hello"><textarea>
# This is a comment. Python skips it.
print("Hello, Abbas!")
print("Welcome to Level 3.")
print(2 + 3)          # Python can do sums
print("2 + 3")        # in quotes, it's just text
</textarea></div>
<p>Press Run. You should see the two greetings, then <code>5</code>, then the text <code>2 + 3</code>. Notice the difference: without quotes Python works out the sum; with quotes it treats the characters as plain text.</p>

<h2>Errors are normal</h2>
<p>Every programmer, at every level, sees error messages all day. An error is not a failure; it's the computer telling you exactly where it got confused. Try deleting the closing bracket on line 2 above and press Run. Python reports a <strong>SyntaxError</strong>, which means the code breaks the grammar rules of the language. Put the bracket back and it works again.</p>
<p>The habit to build now: <strong>read the last line of the error first</strong>. It names the kind of problem (<code>SyntaxError</code>, <code>NameError</code>, <code>TypeError</code>) and usually points at the line where things went wrong.</p>

<h2>A note on AI coding assistants</h2>
<p>Chatbots can now write a lot of code for you, and you should use them. But you still need to read code to check it, fix it and know whether it does what you asked. That's why this level teaches the basics properly. Think of an AI assistant like a calculator in maths class: brilliant once you understand what it's doing.</p>

<div class="callout"><b>Tip:</b> Experiment freely in the code boxes. You can't break anything. If you get lost, press Reset to bring back the original code.</div>
`,
    terms: [
      ["Program", "A list of exact instructions for a computer to follow."],
      ["Python", "A readable programming language, first released in 1991, that is the main language of data science and AI."],
      ["Interpreter", "The program that reads Python code and carries it out line by line."],
      ["Library", "A bundle of ready-made code you can reuse, such as NumPy or pandas."],
      ["Jupyter notebook", "A document that mixes runnable code cells, their results and written notes; the standard tool for exploring data."],
      ["Comment", "A note in code, starting with #, that Python ignores."],
      ["Syntax error", "An error caused by code that breaks the grammar rules of the language, such as a missing bracket."],
      ["print()", "The Python instruction that displays a value on the screen."]
    ],
    quiz: [
      { q: "What does a computer do with your program?", options: ["Guesses what you meant", "Follows the instructions exactly as written", "Fixes your mistakes automatically", "Only runs the parts it understands"], answer: 1, explain: "Computers are completely literal: they do what you wrote, not what you meant." },
      { q: "Why is Python the main language for AI?", options: ["It's the only language computers understand", "It's readable and has the best data and AI libraries and community", "It was invented by an AI company", "It's the fastest language"], answer: 1, explain: "Readability, libraries such as NumPy, pandas and PyTorch, and a huge community." },
      { q: "What does print(\"4 + 4\") show?", options: ["8", "4 + 4", "An error", "Nothing"], answer: 1, explain: "The quotes make it text, so Python prints the characters exactly." },
      { q: "What does Python do with a line starting with #?", options: ["Runs it twice", "Treats it as a heading", "Ignores it: it's a comment for humans", "Deletes it"], answer: 2, explain: "Comments are notes for people reading the code." },
      { q: "You see an error message. What should you read first?", options: ["Nothing, just delete the code", "The last line, which names the problem", "The first word only", "The website address"], answer: 1, explain: "The last line names the error type and the message; the lines above show where it happened." },
      { q: "What is a Jupyter notebook?", options: ["A paper notebook for coders", "A document mixing runnable code cells, results and notes", "A type of laptop", "A Python error"], answer: 1, explain: "Notebooks are the standard way to explore data step by step." }
    ],
    sources: [
      ["The Python Tutorial (official documentation)", "https://docs.python.org/3/tutorial/", "The definitive beginner's walkthrough of the language."],
      ["Python for Everybody (Charles Severance), free book and course", "https://www.py4e.com/", "A gentle, free introduction for complete beginners."],
      ["Harvard CS50's Introduction to Programming with Python", "https://cs50.harvard.edu/python/", "Free university course from first principles."],
      ["GitHub Octoverse 2025", "https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/", "Python's share of new AI projects."],
      ["Stack Overflow Developer Survey 2025", "https://survey.stackoverflow.co/2025/", "Python's jump in use, linked to AI."],
      ["Project Jupyter", "https://jupyter.org/", "The notebook tool used across data science."],
      ["Pyodide", "https://pyodide.org/", "The project that runs Python in your browser for these lessons."]
    ]
  },
  {
    id: "python-values",
    unit: "l2u1",
    title: "Values, Variables and Types",
    summary: "Numbers, text and true-or-false values, storing them in variables, and doing sums with them.",
    minutes: 12,
    body: `
<p>Every program works with <strong>values</strong>: numbers, words, true or false. In this lesson you'll learn the main kinds of value in Python, how to store them so you can use them again, and how to combine them.</p>

<h2>Variables: labelled boxes</h2>
<p>A <strong>variable</strong> is a name that refers to a value. You create one with a single equals sign, which in Python means "store this", not "is equal to".</p>
<pre><code>price = 4.50
cups = 3
total = price * cups
print(total)        # 13.5</code></pre>
<p>Read <code>total = price * cups</code> from right to left: work out <code>price * cups</code>, then put the answer in a box labelled <code>total</code>. If you later write <code>cups = 5</code>, the box gets a new value, but <code>total</code> keeps its old answer until you work it out again.</p>
<p>Good names make code readable. Python's style guide, <strong>PEP 8</strong>, recommends lower-case words joined by underscores, like <code>monthly_sales</code>. Names can't contain spaces or start with a number, and capital letters matter: <code>Total</code> and <code>total</code> are different variables.</p>

<h2>The four basic types</h2>
<p>Every value has a <strong>type</strong> that decides what you can do with it. You can always ask with <code>type()</code>.</p>
<div class="table-scroll"><table>
  <tr><th>Type</th><th>What it holds</th><th>Examples</th></tr>
  <tr><td><code>int</code></td><td>Whole numbers (integers)</td><td><code>3</code>, <code>-12</code>, <code>2026</code></td></tr>
  <tr><td><code>float</code></td><td>Numbers with a decimal point</td><td><code>4.5</code>, <code>0.001</code>, <code>-2.0</code></td></tr>
  <tr><td><code>str</code></td><td>Text (a "string" of characters), in quotes</td><td><code>"Abbas"</code>, <code>'cat'</code>, <code>"42"</code></td></tr>
  <tr><td><code>bool</code></td><td>True or false (a Boolean)</td><td><code>True</code>, <code>False</code></td></tr>
</table></div>
<p>There's also <code>None</code>, a special value meaning "nothing here yet". You'll meet it again when data has gaps.</p>
<p>Types matter because the same symbol can mean different things. <code>2 + 2</code> is <code>4</code>, but <code>"2" + "2"</code> is <code>"22"</code>: adding text joins it together. And <code>"2" + 2</code> is a <strong>TypeError</strong>, because Python refuses to guess whether you meant a number or text. Convert explicitly with <code>int("2")</code>, <code>float("2.5")</code> or <code>str(2)</code>.</p>

<h2>Doing sums</h2>
<div class="table-scroll"><table>
  <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
  <tr><td><code>+ - *</code></td><td>Add, subtract, multiply</td><td><code>7 * 3</code></td><td><code>21</code></td></tr>
  <tr><td><code>/</code></td><td>Divide (always gives a float)</td><td><code>7 / 2</code></td><td><code>3.5</code></td></tr>
  <tr><td><code>//</code></td><td>Whole-number division</td><td><code>7 // 2</code></td><td><code>3</code></td></tr>
  <tr><td><code>%</code></td><td>Remainder ("modulo")</td><td><code>7 % 2</code></td><td><code>1</code></td></tr>
  <tr><td><code>**</code></td><td>Power</td><td><code>2 ** 10</code></td><td><code>1024</code></td></tr>
</table></div>
<p>Python follows the usual order of operations (powers, then multiply and divide, then add and subtract), and brackets go first.</p>

<h2>Text with f-strings</h2>
<p>To mix values into text, put an <code>f</code> before the quotes and the values in curly brackets. You can also control decimals: <code>:.2f</code> means "two decimal places".</p>
<div data-widget="py" data-title="Try it: a coffee bill"><textarea>
name = "Abbas"
price = 4.5
cups = 3
total = price * cups
print(f"{name}, your {cups} coffees cost £{total:.2f}")

# Text has handy tools called methods:
print(name.upper())
print(len(name), "letters")

# Types in action
print(type(total), type(cups), type(name))
print("2" + "2", "versus", 2 + 2)
</textarea></div>

<h2>A surprise about decimals</h2>
<p>Try <code>print(0.1 + 0.2)</code> in the box above. You get <code>0.30000000000000004</code>. This isn't a Python bug. Computers store decimals in binary, and just as 1/3 can't be written exactly in decimal (0.333...), 0.1 can't be stored exactly in binary. The tiny difference usually doesn't matter, but it's why you should never test whether two floats are <em>exactly</em> equal, and why banks store money as whole pennies. In machine learning, models even deliberately use <em>less</em> precise numbers to save memory, which you'll see in Level 6.</p>

<div class="callout"><b>Takeaway:</b> A variable is a name for a value; every value has a type (int, float, str, bool); and Python won't mix types unless you convert them yourself.</div>
`,
    terms: [
      ["Variable", "A name that refers to a stored value, created with =."],
      ["Type", "The kind of value (such as int, float, str or bool), which decides what you can do with it."],
      ["Integer (int)", "A whole number, such as 7 or -3."],
      ["Float", "A number with a decimal point, stored approximately in binary."],
      ["String (str)", "A piece of text, written in quotes."],
      ["Boolean (bool)", "A value that is either True or False."],
      ["f-string", "Text starting with f that can include values in curly brackets, such as f\"Hi {name}\"."],
      ["TypeError", "An error caused by using a value of the wrong type, such as adding text to a number."],
      ["PEP 8", "Python's official style guide for writing readable code."]
    ],
    quiz: [
      { q: "In Python, what does price = 5 do?", options: ["Checks whether price equals 5", "Stores the value 5 under the name price", "Prints 5", "Causes an error"], answer: 1, explain: "A single = means \"store this value under this name\"." },
      { q: "What is \"3\" + \"4\"?", options: ["7", "\"34\"", "12", "An error"], answer: 1, explain: "Both are strings, so + joins the text." },
      { q: "What is 17 % 5?", options: ["3.4", "3", "2", "85"], answer: 2, explain: "% gives the remainder: 17 = 3 × 5 + 2." },
      { q: "Which value is a float?", options: ["42", "\"42\"", "42.0", "True"], answer: 2, explain: "It has a decimal point, so it's a float." },
      { q: "Why does 0.1 + 0.2 print 0.30000000000000004?", options: ["Python is broken", "Decimals like 0.1 can't be stored exactly in binary", "You typed it wrong", "It rounds up on purpose"], answer: 1, explain: "Binary floating point can only approximate many decimals." },
      { q: "What does f\"Total: {t:.2f}\" do when t = 3.14159?", options: ["Prints Total: {t:.2f}", "Prints Total: 3.14", "Prints Total: 3", "Causes an error"], answer: 1, explain: "The f-string inserts t with two decimal places." }
    ],
    sources: [
      ["The Python Tutorial: An informal introduction to Python", "https://docs.python.org/3/tutorial/introduction.html", "Numbers, text and variables."],
      ["Python documentation: Floating-point arithmetic, issues and limitations", "https://docs.python.org/3/tutorial/floatingpoint.html", "Why 0.1 + 0.2 isn't exactly 0.3."],
      ["PEP 8: Style Guide for Python Code", "https://peps.python.org/pep-0008/", "Naming and layout conventions."],
      ["Kaggle Learn: Python", "https://www.kaggle.com/learn/python", "Free hands-on micro-course."],
      ["Python for Everybody, chapter 2: Variables, expressions and statements", "https://www.py4e.com/lessons/memory", "Beginner explanation with videos."]
    ]
  },
  {
    id: "python-collections",
    unit: "l2u1",
    title: "Lists, Dictionaries and Loops",
    summary: "Storing many values at once, looking things up by name, and repeating work without repeating yourself.",
    minutes: 13,
    body: `
<p>AI works with lots of data: thousands of rows, millions of words. You don't make a separate variable for each one. Instead you put them in a <strong>collection</strong> and use a <strong>loop</strong> to work through them. These two ideas are the heart of practical programming.</p>

<h2>Lists: values in order</h2>
<p>A <strong>list</strong> holds values in order, inside square brackets:</p>
<pre><code>temps = [14, 17, 21, 19, 16]
print(temps[0])      # 14  (the first item)
print(temps[-1])     # 16  (the last item)
print(temps[1:3])    # [17, 21]
print(len(temps))    # 5</code></pre>
<p>Two things trip everyone up at first:</p>
<ul>
  <li><strong>Counting starts at 0.</strong> The first item is <code>temps[0]</code>, the second is <code>temps[1]</code>. Negative numbers count from the end.</li>
  <li><strong>Slices stop before the end number.</strong> <code>temps[1:3]</code> means "from position 1 up to, but not including, position 3".</li>
</ul>
<p>Lists can change: <code>temps.append(22)</code> adds to the end, <code>temps[0] = 15</code> replaces an item, and <code>sorted(temps)</code> gives a sorted copy. Handy built-ins include <code>sum()</code>, <code>min()</code> and <code>max()</code>.</p>

<h2>Dictionaries: look things up by name</h2>
<p>A <strong>dictionary</strong> stores pairs of <strong>keys</strong> and <strong>values</strong>, inside curly brackets. Instead of asking for item number 2, you ask for an item by its name, just like looking up a word in a real dictionary.</p>
<pre><code>student = {"name": "Abbas", "level": 2, "lessons_done": 16}
print(student["name"])          # Abbas
student["level"] = 3            # change a value
student["city"] = "London"      # add a new pair</code></pre>
<p>Dictionaries are everywhere in AI. A data record is a dictionary of field names and values. Data from the web arrives as <strong>JSON</strong>, which looks and behaves almost exactly like Python dictionaries and lists nested inside each other. Even a chatbot conversation sent to an AI model is a list of dictionaries, each with a "role" and some "content".</p>

<h2>Loops: do it for each one</h2>
<p>A <strong>for loop</strong> runs the same block of code once for every item in a collection. The indented lines (four spaces) are the body of the loop. In Python, indentation isn't decoration: it's how Python knows which lines belong inside the loop.</p>
<pre><code>for t in temps:
    print(t, "degrees")
print("done")        # not indented: runs once, after the loop</code></pre>
<p>To repeat something a set number of times, loop over <code>range()</code>: <code>range(5)</code> gives 0, 1, 2, 3, 4. To loop over a dictionary's pairs, use <code>.items()</code>.</p>

<h2>A shortcut: list comprehensions</h2>
<p>Building a new list from an old one is so common that Python has a one-line form for it, called a <strong>list comprehension</strong>. Read it as "the list of <em>this</em>, for each item in <em>that</em>":</p>
<pre><code>fahrenheit = [t * 9 / 5 + 32 for t in temps]</code></pre>

<div data-widget="py" data-title="Try it: a week of temperatures"><textarea>
temps = [14, 17, 21, 19, 16, 23, 18]
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

print("Hottest:", max(temps), "Average:", round(sum(temps) / len(temps), 1))

for day, t in zip(days, temps):
    print(day, "#" * t)          # a tiny bar chart

warm_days = [d for d, t in zip(days, temps) if t >= 19]
print("Warm days:", warm_days)

# A dictionary counting words
counts = {}
for word in "the cat sat on the mat the end".split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
</textarea></div>
<p>That last part, counting how often each word appears, is a tiny version of the very first step in processing language for AI: turning text into numbers by counting.</p>

<h2>Two more collections</h2>
<ul>
  <li>A <strong>tuple</strong>, like <code>(51.5, -0.12)</code>, is a list that can't be changed once made. Use it for things that belong together, such as a map coordinate.</li>
  <li>A <strong>set</strong>, like <code>{"cat", "dog"}</code>, holds unique items with no order. It's the quickest way to remove duplicates: <code>set(words)</code>.</li>
</ul>

<div class="callout"><b>Takeaway:</b> Lists keep things in order (counted from 0), dictionaries look things up by key, and loops repeat work for every item. Almost every data program is built from these three.</div>
`,
    terms: [
      ["List", "An ordered, changeable collection of values in square brackets."],
      ["Index", "An item's position in a list, counted from 0."],
      ["Slice", "A section of a list, such as items[1:3], which stops before the end position."],
      ["Dictionary", "A collection of key and value pairs, used to look values up by name."],
      ["JSON", "A common text format for data, built from nested lists and key-value objects, like Python dictionaries."],
      ["For loop", "Code that runs once for each item in a collection."],
      ["Indentation", "The spaces at the start of a line; in Python they show which lines belong inside a loop or block."],
      ["List comprehension", "A one-line way to build a new list, such as [x * 2 for x in nums]."],
      ["Tuple", "An ordered collection that can't be changed after it is created."]
    ],
    quiz: [
      { q: "If names = [\"Ana\", \"Ben\", \"Cal\"], what is names[1]?", options: ["\"Ana\"", "\"Ben\"", "\"Cal\"", "An error"], answer: 1, explain: "Counting starts at 0, so position 1 is the second item." },
      { q: "What does nums[2:4] give when nums = [10, 20, 30, 40, 50]?", options: ["[20, 30, 40]", "[30, 40]", "[30, 40, 50]", "[20, 30]"], answer: 1, explain: "Positions 2 and 3: the slice stops before 4." },
      { q: "What is a dictionary best for?", options: ["Keeping items in a fixed order", "Looking up values by a key, such as a name", "Doing sums", "Drawing charts"], answer: 1, explain: "Dictionaries map keys to values." },
      { q: "How does Python know which lines are inside a for loop?", options: ["They are in capital letters", "They are indented underneath it", "They end with a semicolon", "They are in brackets"], answer: 1, explain: "Indentation defines the loop body in Python." },
      { q: "What does [n * 10 for n in [1, 2, 3]] produce?", options: ["[1, 2, 3, 10]", "[10, 20, 30]", "60", "[11, 12, 13]"], answer: 1, explain: "Each item is multiplied by 10." },
      { q: "What's the quickest way to remove duplicates from a list?", options: ["Sort it", "Convert it to a set", "Use a tuple", "Print it"], answer: 1, explain: "A set only keeps unique items." }
    ],
    sources: [
      ["The Python Tutorial: Data structures", "https://docs.python.org/3/tutorial/datastructures.html", "Lists, tuples, sets, dictionaries and comprehensions."],
      ["The Python Tutorial: More control flow tools", "https://docs.python.org/3/tutorial/controlflow.html", "For loops and range()."],
      ["Automate the Boring Stuff with Python (Al Sweigart), free online", "https://automatetheboringstuff.com/", "Practical beginner programming with lots of examples."],
      ["Kaggle Learn: Python (lists, loops and dictionaries)", "https://www.kaggle.com/learn/python", "Exercises you can run in the browser."],
      ["JSON (official site)", "https://www.json.org/json-en.html", "The data format in one page."]
    ]
  },
  {
    id: "python-functions",
    unit: "l2u1",
    title: "Decisions, Functions and Libraries",
    summary: "Making code choose, packaging it into reusable functions, borrowing other people's code, and fixing errors.",
    minutes: 13,
    body: `
<p>You can now store values and loop over them. Three more ideas complete your toolkit: making <strong>decisions</strong>, writing your own <strong>functions</strong>, and using <strong>libraries</strong> that other people wrote. With these you can read most of the data and AI code you'll meet.</p>

<h2>Decisions with if</h2>
<p>An <code>if</code> statement runs code only when a condition is true. Add <code>elif</code> ("else if") for more options and <code>else</code> for everything left over:</p>
<pre><code>score = 0.83
if score &gt;= 0.9:
    label = "very likely spam"
elif score &gt;= 0.5:
    label = "possibly spam"
else:
    label = "not spam"</code></pre>
<p>Conditions use <strong>comparison operators</strong>: <code>==</code> (equal to; note the double equals), <code>!=</code> (not equal), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Combine them with <code>and</code>, <code>or</code> and <code>not</code>. This is exactly the threshold idea from Level 1's spam filter: a model gives a probability, and an <code>if</code> turns it into a decision.</p>

<h2>Functions: name a job, reuse it</h2>
<p>A <strong>function</strong> is a named, reusable block of code. You've been using built-in ones like <code>print()</code> and <code>len()</code>. You create your own with <code>def</code>:</p>
<pre><code>def to_fahrenheit(celsius):
    """Convert a temperature from Celsius to Fahrenheit."""
    return celsius * 9 / 5 + 32

print(to_fahrenheit(20))     # 68.0</code></pre>
<ul>
  <li><code>celsius</code> is a <strong>parameter</strong>: a placeholder for whatever value you pass in (the <strong>argument</strong>).</li>
  <li><code>return</code> sends a result back to whoever called the function.</li>
  <li>The text in triple quotes is a <strong>docstring</strong>, a short description that tools and people can read.</li>
</ul>
<p>Functions follow the golden rule of programming: <strong>don't repeat yourself</strong>. If you copy and paste the same code three times, make it a function. Then a fix in one place fixes it everywhere. Machine learning code is full of functions: one to load data, one to clean it, one to train a model, one to evaluate it.</p>

<h2>Libraries: standing on shoulders</h2>
<p>Python's real power is the code other people have already written. You bring it in with <code>import</code>:</p>
<pre><code>import math
import statistics as st          # a shorter nickname
from random import choice

print(math.sqrt(16))             # 4.0
print(st.median([3, 1, 4, 1, 5]))  # 3</code></pre>
<p>Python comes with a large <strong>standard library</strong> (maths, dates, files, randomness, statistics and more). Thousands of extra <strong>packages</strong>, including NumPy, pandas and PyTorch, are installed with a tool called <code>pip</code>, for example <code>pip install pandas</code>. In Colab and in these lessons the main ones are already available.</p>

<div data-widget="py" data-title="Try it: a tiny spam scorer"><textarea>
def spam_score(message):
    """Return a rough 0 to 1 score: the share of warning words in a message."""
    warning_words = ["free", "winner", "urgent", "prize", "click"]
    words = message.lower().split()
    hits = sum(1 for w in words if w.strip("!.,") in warning_words)
    return min(1.0, hits / 3)

def label(score, threshold=0.5):
    if score >= threshold:
        return "SPAM"
    return "REAL"

for msg in ["Lunch at 1?", "URGENT winner! Click for your FREE prize!", "Free tickets for Friday?"]:
    s = spam_score(msg)
    print(f"{label(s):4}  score {s:.2f}  {msg}")
</textarea></div>
<p>Try changing the threshold to <code>0.3</code> in the call to <code>label()</code>, or add your own message. This hand-written rule is the opposite of machine learning: a person chose the warning words. In Level 4 you'll let a model learn them from examples.</p>

<h2>Reading error messages</h2>
<p>When something goes wrong, Python prints a <strong>traceback</strong>: the trail of steps that led to the problem, ending with the error type and message. The most common ones:</p>
<div class="table-scroll"><table>
  <tr><th>Error</th><th>Usually means</th></tr>
  <tr><td><code>SyntaxError</code></td><td>A typo in the grammar: a missing bracket, quote or colon.</td></tr>
  <tr><td><code>IndentationError</code></td><td>Spaces at the start of lines don't line up.</td></tr>
  <tr><td><code>NameError</code></td><td>You used a name Python doesn't know, often a spelling mistake.</td></tr>
  <tr><td><code>TypeError</code></td><td>The wrong type of value, like adding text to a number.</td></tr>
  <tr><td><code>IndexError</code> / <code>KeyError</code></td><td>Asking for a list position or dictionary key that doesn't exist.</td></tr>
</table></div>
<p>A proven debugging routine: read the last line, find the line number, print the values just before that line to see what they really are, and change one thing at a time. Pasting a traceback into an AI assistant is also a good move, as long as you read the explanation rather than blindly accepting the fix.</p>

<div class="callout"><b>Takeaway:</b> if makes choices, def packages work into reusable functions, and import borrows other people's code. Together with lists and loops, that's the core of Python.</div>
`,
    terms: [
      ["Condition", "An expression that is either True or False, used by if to decide what to run."],
      ["Comparison operator", "Symbols like ==, !=, < and >= that compare two values."],
      ["Function", "A named, reusable block of code, created with def."],
      ["Parameter", "A placeholder name in a function's definition for a value it will be given."],
      ["Return value", "The result a function sends back, using return."],
      ["Docstring", "A description in triple quotes at the start of a function."],
      ["Module / package", "A file or bundle of Python code you can import and reuse."],
      ["pip", "Python's tool for installing extra packages."],
      ["Traceback", "The error report Python prints, showing the steps that led to the problem."]
    ],
    quiz: [
      { q: "What's the difference between = and == in Python?", options: ["None", "= stores a value; == checks whether two values are equal", "== stores a value; = compares", "== is for text only"], answer: 1, explain: "One equals assigns; two equals compares." },
      { q: "If x = 7, which branch runs: if x > 10 … elif x > 5 … else …?", options: ["The if branch", "The elif branch", "The else branch", "All of them"], answer: 1, explain: "7 is not over 10, but it is over 5." },
      { q: "What does return do inside a function?", options: ["Prints a value", "Sends a result back to the code that called the function", "Restarts the function", "Deletes the function"], answer: 1, explain: "return hands the result back." },
      { q: "Why write functions?", options: ["To make code longer", "To reuse code and avoid repeating yourself", "Python requires them", "To hide errors"], answer: 1, explain: "Fix or improve it in one place and every use benefits." },
      { q: "What does import pandas do?", options: ["Downloads a panda picture", "Makes the pandas library's code available in your program", "Installs Python", "Creates a table"], answer: 1, explain: "import loads a library so you can use it (pip installs it first if needed)." },
      { q: "You see NameError: name 'totl' is not defined. What's the likely cause?", options: ["A spelling mistake in a variable name", "A maths error", "The internet is down", "A missing library"], answer: 0, explain: "Python doesn't know 'totl', probably a typo for 'total'." }
    ],
    sources: [
      ["The Python Tutorial: More control flow tools (if, functions)", "https://docs.python.org/3/tutorial/controlflow.html", "Official guide to if statements and defining functions."],
      ["The Python Tutorial: Errors and exceptions", "https://docs.python.org/3/tutorial/errors.html", "How to read and handle errors."],
      ["The Python Standard Library", "https://docs.python.org/3/library/index.html", "Everything that comes built in."],
      ["Installing Python modules (pip)", "https://docs.python.org/3/installing/index.html", "How packages are installed."],
      ["Harvard CS50 Python: Functions, conditionals and exceptions lectures", "https://cs50.harvard.edu/python/", "Video lectures with exercises."]
    ]
  },

  /* ============================ UNIT 2 ============================ */
  {
    id: "numpy",
    unit: "l2u2",
    title: "NumPy: Fast Arrays of Numbers",
    summary: "Why AI runs on arrays, how to do maths on a million numbers at once, and shapes, axes and masks.",
    minutes: 13,
    body: `
<p>To an AI system, everything is numbers. A photo is a grid of pixel brightnesses. A sound is a long row of air-pressure readings. A sentence becomes a list of numbers too, as you saw in Level 1. Handling huge piles of numbers quickly is so central that the whole Python AI world is built on one library: <strong>NumPy</strong> (Numerical Python).</p>

<h2>Arrays: lists built for maths</h2>
<p>NumPy's main object is the <strong>array</strong>: a grid of numbers, all of the same type. It looks a bit like a list, but behaves differently:</p>
<pre><code>import numpy as np

prices = np.array([2.5, 4.0, 3.2, 5.5])
print(prices * 2)        # [ 5.   8.   6.4 11. ]
print(prices.mean())     # 3.8</code></pre>
<p>With a plain list, <code>[2.5, 4.0] * 2</code> would repeat the list. With an array, maths applies to <strong>every element at once</strong>. This is called <strong>vectorisation</strong>, and it matters for two reasons:</p>
<ul>
  <li><strong>Simpler code.</strong> No loop needed: <code>prices * 1.2</code> adds 20% to every price.</li>
  <li><strong>Speed.</strong> The work happens in fast, compiled code underneath Python. On large arrays, vectorised NumPy is commonly tens to hundreds of times faster than a Python loop doing the same sums.</li>
</ul>

<h2>Shape and dimensions</h2>
<p>Arrays can have any number of <strong>dimensions</strong> (also called axes). The <strong>shape</strong> tells you the size along each one:</p>
<div class="table-scroll"><table>
  <tr><th>Dimensions</th><th>Shape example</th><th>Real-world example</th></tr>
  <tr><td>1</td><td><code>(365,)</code></td><td>A year of daily temperatures</td></tr>
  <tr><td>2</td><td><code>(1000, 8)</code></td><td>A table: 1,000 houses, 8 measurements each</td></tr>
  <tr><td>3</td><td><code>(480, 640, 3)</code></td><td>A colour photo: height, width, and red, green, blue</td></tr>
  <tr><td>4</td><td><code>(32, 480, 640, 3)</code></td><td>A batch of 32 photos fed to a model at once</td></tr>
</table></div>
<p>In deep learning these multi-dimensional arrays are called <strong>tensors</strong>; PyTorch's tensors are NumPy's arrays with extra powers. Getting shapes right is honestly half the work of building neural networks, so it's worth getting comfortable now.</p>

<h2>Axes: which way to add up</h2>
<p>For a 2D array, <code>axis=0</code> works down the rows (one answer per column) and <code>axis=1</code> works across the columns (one answer per row). Think of it as "the axis you collapse".</p>

<h2>Masks: filtering with true and false</h2>
<p>Compare an array with a value and you get an array of <code>True</code>/<code>False</code>, called a <strong>Boolean mask</strong>. Use it inside square brackets to keep only the matching values: <code>prices[prices &gt; 3]</code>. This "select by condition" idea comes back constantly in pandas.</p>

<h2>Broadcasting</h2>
<p>NumPy can combine arrays of different shapes when it makes sense, by stretching the smaller one. This is <strong>broadcasting</strong>. For example, subtracting a row of column averages from a whole table subtracts each column's own average from every row, which is exactly how data is "centred" before many ML methods.</p>

<div data-widget="py" data-title="Try it: arrays in action"><textarea>
import numpy as np

# 4 students (rows) x 3 tests (columns)
scores = np.array([[72, 85, 90],
                   [64, 70, 58],
                   [88, 92, 95],
                   [55, 61, 67]])

print("Shape:", scores.shape)
print("Average per test (axis=0):", scores.mean(axis=0))
print("Average per student (axis=1):", scores.mean(axis=1).round(1))

passed = scores >= 65            # a Boolean mask
print("Passes per student:", passed.sum(axis=1))
print("All scores over 85:", scores[scores > 85])

# Broadcasting: subtract each test's average from its column
print("Centred scores:")
print((scores - scores.mean(axis=0)).round(1))

# Reproducible random numbers
rng = np.random.default_rng(seed=42)
print("Five dice rolls:", rng.integers(1, 7, size=5))
</textarea></div>

<h2>Random numbers, reproducibly</h2>
<p>Machine learning uses randomness everywhere: shuffling data, splitting it, starting a network's weights. NumPy's <code>np.random.default_rng(seed)</code> creates a random number generator. Giving it a fixed <strong>seed</strong> means you get the same "random" numbers every time, so your results can be repeated by you and checked by others. Reproducibility is a core habit of good science and good ML.</p>

<div class="callout"><b>Takeaway:</b> NumPy arrays let you do maths on whole grids of numbers at once. Learn to read shapes, axes and masks, because the same ideas run through pandas, scikit-learn and PyTorch.</div>
`,
    terms: [
      ["NumPy", "The core Python library for fast maths on arrays of numbers."],
      ["Array", "A grid of numbers of one type, with any number of dimensions."],
      ["Vectorisation", "Doing an operation on whole arrays at once instead of looping, which is simpler and much faster."],
      ["Shape", "The size of an array along each dimension, such as (1000, 8)."],
      ["Axis", "One dimension of an array; axis=0 runs down rows, axis=1 across columns."],
      ["Tensor", "The deep learning name for a multi-dimensional array."],
      ["Boolean mask", "An array of True/False values used to select matching elements."],
      ["Broadcasting", "NumPy's rule for combining arrays of different but compatible shapes."],
      ["Random seed", "A starting number that makes random results repeatable."]
    ],
    quiz: [
      { q: "If a = np.array([1, 2, 3]), what is a * 10?", options: ["[1, 2, 3, 1, 2, 3, ...]", "array([10, 20, 30])", "60", "An error"], answer: 1, explain: "Maths on arrays applies to every element (vectorisation)." },
      { q: "What shape would a batch of 16 colour images, each 224 by 224 pixels, have?", options: ["(16, 224)", "(224, 224)", "(16, 224, 224, 3)", "(3, 16)"], answer: 2, explain: "Batch, height, width, and three colour channels." },
      { q: "For a 2D table of numbers, what does .mean(axis=0) give?", options: ["One average per row", "One average per column", "One overall number", "The first row"], answer: 1, explain: "axis=0 collapses the rows, leaving one value per column." },
      { q: "What does scores[scores > 50] return?", options: ["True or False", "Only the scores above 50", "The number of scores", "The first score over 50"], answer: 1, explain: "The Boolean mask keeps matching values." },
      { q: "Why set a random seed?", options: ["To make code faster", "So random results can be repeated exactly", "To get bigger numbers", "It's required by Python"], answer: 1, explain: "The same seed gives the same sequence, which makes work reproducible." },
      { q: "Why is vectorised NumPy faster than a Python loop?", options: ["It skips some numbers", "The work runs in fast compiled code underneath", "It uses the internet", "It isn't faster"], answer: 1, explain: "NumPy hands the loop to optimised compiled code." }
    ],
    sources: [
      ["NumPy: the absolute basics for beginners (official)", "https://numpy.org/doc/stable/user/absolute_beginners.html", "Arrays, shapes, axes and indexing."],
      ["NumPy user guide: Broadcasting", "https://numpy.org/doc/stable/user/basics.broadcasting.html", "The rules for combining shapes."],
      ["NumPy: Random Generator", "https://numpy.org/doc/stable/reference/random/generator.html", "The recommended way to make random numbers."],
      ["Harris et al. (2020), Array programming with NumPy, Nature", "https://doi.org/10.1038/s41586-020-2649-2", "The paper describing NumPy and why it matters to science."],
      ["Python Data Science Handbook (Jake VanderPlas), chapter on NumPy", "https://jakevdp.github.io/PythonDataScienceHandbook/02.00-introduction-to-numpy.html", "Free online book with clear examples."]
    ]
  },
  {
    id: "pandas-basics",
    unit: "l2u2",
    title: "pandas: Tables You Can Program",
    summary: "DataFrames, loading a file, taking a first look, and selecting, filtering and sorting rows.",
    minutes: 13,
    body: `
<p>Most real data arrives as a table: a spreadsheet, a database export, a CSV file. <strong>pandas</strong> is the Python library for working with tables, and it's usually the first thing imported in any data project. If you've used Excel, you'll find the ideas familiar; the difference is that every step is written down as code, so it can be repeated, checked and scaled to millions of rows.</p>

<h2>Series and DataFrames</h2>
<ul>
  <li>A <strong>DataFrame</strong> is a whole table: rows and named columns. Each column has one type (numbers, text, dates).</li>
  <li>A <strong>Series</strong> is a single column: a list of values with labels.</li>
  <li>Each row has a label too, called the <strong>index</strong>. By default it's just 0, 1, 2 and so on.</li>
</ul>
<p>Under the hood each column is a NumPy array, which is why pandas is fast and why everything from the last lesson still applies.</p>

<h2>Loading data</h2>
<p>The most common file type is <strong>CSV</strong> (comma-separated values): plain text where each line is a row and commas separate the columns. pandas reads it with one line: <code>df = pd.read_csv("sales.csv")</code>. It can also read Excel files, JSON, databases and web pages. (By convention, a DataFrame is often just called <code>df</code>.)</p>

<h2>The first look</h2>
<p>Before doing anything clever, always look at the data. These four commands are the standard first look:</p>
<div class="table-scroll"><table>
  <tr><th>Command</th><th>What it tells you</th></tr>
  <tr><td><code>df.head()</code></td><td>The first five rows, to see what the data looks like</td></tr>
  <tr><td><code>df.shape</code></td><td>How many rows and columns</td></tr>
  <tr><td><code>df.info()</code></td><td>Each column's type and how many values are missing</td></tr>
  <tr><td><code>df.describe()</code></td><td>Count, mean, spread, minimum and maximum of each number column</td></tr>
</table></div>

<h2>Selecting and filtering</h2>
<ul>
  <li><strong>One column:</strong> <code>df["price"]</code> gives a Series.</li>
  <li><strong>Several columns:</strong> <code>df[["item", "price"]]</code> (note the double brackets: it's a list of names).</li>
  <li><strong>Rows by condition:</strong> <code>df[df["price"] &gt; 3]</code>, which is a Boolean mask, just like NumPy. Combine conditions with <code>&amp;</code> (and) and <code>|</code> (or), with brackets around each part.</li>
  <li><strong>By label:</strong> <code>df.loc[row_labels, column_names]</code>. <strong>By position:</strong> <code>df.iloc[0:5, 0:2]</code>.</li>
</ul>

<h2>Sorting and new columns</h2>
<p><code>df.sort_values("price", ascending=False)</code> sorts the rows. To create a new column, assign to it, and the calculation runs on every row at once: <code>df["revenue"] = df["price"] * df["qty"]</code>.</p>

<div data-widget="py" data-title="Try it: a café's sales"><textarea>
import pandas as pd
from io import StringIO

# In real life: pd.read_csv("sales.csv"). Here the file is written inline.
csv = """day,item,price,qty
Mon,latte,3.40,41
Mon,tea,2.10,18
Mon,muffin,2.80,22
Tue,latte,3.40,37
Tue,tea,2.10,25
Tue,muffin,2.80,15
Wed,latte,3.40,52
Wed,tea,2.10,20
Wed,muffin,2.80,31"""
df = pd.read_csv(StringIO(csv))

print(df.head(), "\\n")
print("Shape:", df.shape, "\\n")
print(df.describe().round(2), "\\n")

df["revenue"] = df["price"] * df["qty"]
busy = df[(df["qty"] > 20) & (df["item"] != "tea")]
print(busy.sort_values("revenue", ascending=False))
print("\\nTotal takings: £", round(df["revenue"].sum(), 2))
</textarea></div>
<p>Notice that every step you took, from loading to filtering to the total, is written down. Run it again next week on a new file and you get the same analysis instantly. That's the big advantage of code over clicking around in a spreadsheet.</p>

<h2>A note on versions</h2>
<p>pandas 3.0 was released in January 2026. It made some behaviour safer (a change called copy-on-write, which stops edits to one table accidentally changing another) and gave text columns their own proper type. Older tutorials still work for almost everything in this level, but if you see a warning about "chained assignment" in older code, the fix is to use <code>df.loc[...]</code> to change values.</p>

<div class="callout"><b>Takeaway:</b> A DataFrame is a programmable table. Load it, look at it (head, shape, info, describe), then select, filter, sort and add columns, all in code you can rerun.</div>
`,
    terms: [
      ["pandas", "The main Python library for working with tables of data."],
      ["DataFrame", "A pandas table with rows and named columns."],
      ["Series", "A single labelled column of data in pandas."],
      ["Index (pandas)", "The labels that identify each row of a DataFrame."],
      ["CSV", "Comma-separated values: a plain-text table format, one row per line."],
      ["describe()", "A pandas command that summarises each number column (count, mean, spread, min, max)."],
      ["loc / iloc", "Ways to select rows and columns by label (loc) or by position (iloc)."],
      ["Copy-on-write", "pandas 3.0 behaviour that stops a change to one table accidentally changing another."]
    ],
    quiz: [
      { q: "What is a pandas DataFrame?", options: ["A chart", "A table with rows and named columns", "A single number", "A type of loop"], answer: 1, explain: "It's a programmable table." },
      { q: "Which command shows each column's type and missing values?", options: ["df.head()", "df.info()", "df.sort_values()", "df.shape"], answer: 1, explain: "info() lists columns, types and non-missing counts." },
      { q: "How do you keep only rows where price is above 10?", options: ["df[\"price\" > 10]", "df[df[\"price\"] > 10]", "df.price(10)", "df.filter(10)"], answer: 1, explain: "Make a Boolean mask from the column, then use it to select rows." },
      { q: "How would you select two columns, name and age?", options: ["df[\"name\", \"age\"]", "df[[\"name\", \"age\"]]", "df.name.age", "df(name, age)"], answer: 1, explain: "Pass a list of column names inside the brackets." },
      { q: "What does df[\"total\"] = df[\"a\"] + df[\"b\"] do?", options: ["Adds a new row", "Creates a new column from two others, for every row at once", "Deletes columns a and b", "Prints the total"], answer: 1, explain: "Column maths is vectorised across all rows." },
      { q: "What's the main advantage of analysing data in code rather than clicking in a spreadsheet?", options: ["It's always prettier", "Every step is recorded, so it can be rerun, checked and scaled", "It needs no data", "Spreadsheets can't add up"], answer: 1, explain: "Code makes analysis reproducible." }
    ],
    sources: [
      ["pandas: 10 minutes to pandas (official)", "https://pandas.pydata.org/docs/user_guide/10min.html", "The official quick tour."],
      ["pandas: What's new in 3.0.0 (January 2026)", "https://pandas.pydata.org/docs/whatsnew/v3.0.0.html", "Copy-on-write and the new string type."],
      ["Python for Data Analysis, 3rd edition (Wes McKinney, creator of pandas), open access", "https://wesmckinney.com/book/", "The definitive book on pandas, free online."],
      ["Kaggle Learn: Pandas", "https://www.kaggle.com/learn/pandas", "Short hands-on exercises."],
      ["Python Data Science Handbook: Data manipulation with pandas", "https://jakevdp.github.io/PythonDataScienceHandbook/03.00-introduction-to-pandas.html", "Free online chapter."]
    ]
  },
  {
    id: "data-cleaning",
    unit: "l2u2",
    title: "Cleaning Messy Data",
    summary: "Missing values, duplicates, wrong types, inconsistent text and outliers, and how to fix them honestly.",
    minutes: 13,
    body: `
<p>In Level 1 you met the rule "garbage in, garbage out". Real data is almost never clean. Surveys of data scientists keep finding that loading and preparing data takes a large share of their working time, often more than building models. This lesson is about that unglamorous but vital work.</p>

<h2>The usual suspects</h2>
<div class="table-scroll"><table>
  <tr><th>Problem</th><th>Example</th><th>How to spot it</th></tr>
  <tr><td>Missing values</td><td>Blank ages, "N/A", "?"</td><td><code>df.isna().sum()</code></td></tr>
  <tr><td>Duplicates</td><td>The same order entered twice</td><td><code>df.duplicated().sum()</code></td></tr>
  <tr><td>Wrong types</td><td>Prices stored as text like "£3.40"</td><td><code>df.dtypes</code> or <code>df.info()</code></td></tr>
  <tr><td>Inconsistent labels</td><td>"London", "london ", "LDN"</td><td><code>df["city"].value_counts()</code></td></tr>
  <tr><td>Impossible values</td><td>Age 230, a negative price</td><td><code>df.describe()</code>, charts</td></tr>
</table></div>

<h2>Missing values: think before you fill</h2>
<p>pandas marks missing values as <code>NaN</code> ("not a number") or <code>NA</code>. You have three main choices:</p>
<ul>
  <li><strong>Drop</strong> the rows (<code>df.dropna()</code>). Simple, but you lose data, and if values are missing for a reason, you may bias what's left.</li>
  <li><strong>Fill</strong> with a sensible value (<code>df["age"].fillna(df["age"].median())</code>). This is called <strong>imputation</strong>. The median is often safer than the mean because extreme values don't drag it around.</li>
  <li><strong>Flag</strong> it: add a column saying "this was missing". Sometimes the gap itself is informative. A missing income on a loan form might mean something.</li>
</ul>
<p>The key question is <em>why</em> the data is missing. If a sensor fails at random, filling gaps is fairly safe. If people with high incomes skip the income question, then filling with the average quietly makes your data wrong in a systematic way. Always ask.</p>

<h2>Fixing types and text</h2>
<p>Numbers stored as text can't be averaged. Strip symbols and convert: <code>pd.to_numeric(df["price"].str.replace("£", ""), errors="coerce")</code>. The <code>errors="coerce"</code> part turns anything unconvertible into a missing value instead of crashing, so you can find and inspect it. Dates go through <code>pd.to_datetime()</code>. For text labels, the <code>.str</code> tools tidy everything at once: <code>.str.strip()</code> removes stray spaces and <code>.str.lower()</code> makes capitals consistent.</p>

<h2>Outliers: error or truth?</h2>
<p>An <strong>outlier</strong> is a value far from the rest. Some are mistakes (an age of 230 is a typo). Others are real and important: a genuinely huge transaction may be exactly the fraud you're trying to catch. Never delete outliers automatically. Check them, fix the clear errors, and keep a note of what you did.</p>

<h2>Tidy data</h2>
<p>The statistician Hadley Wickham described a simple target shape called <strong>tidy data</strong>: each <strong>variable</strong> is a column, each <strong>observation</strong> is a row, and each kind of thing being measured gets its own table. Most tools, including pandas, scikit-learn and charting libraries, work best when data is tidy.</p>

<div data-widget="py" data-title="Try it: clean a messy customer list"><textarea>
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "name":  ["Ana", "Ben", "Ben", "Cara", "Dev", "Eli"],
    "city":  ["London", "leeds ", "leeds ", "LONDON", "Leeds", None],
    "age":   [34, 29, 29, np.nan, 230, 41],
    "spend": ["£120", "£85", "£85", "£40", "£15", "n/a"],
})
print("BEFORE\\n", df, "\\n")
print("Missing per column:\\n", df.isna().sum(), "\\n")

df = df.drop_duplicates()
df["city"] = df["city"].str.strip().str.title()
df["spend"] = pd.to_numeric(df["spend"].str.replace("£", ""), errors="coerce")
df.loc[df["age"] > 120, "age"] = np.nan            # impossible: treat as missing
df["age_missing"] = df["age"].isna()               # flag it
df["age"] = df["age"].fillna(df["age"].median())   # then fill

print("AFTER\\n", df)
</textarea></div>

<h2>Leave a trail</h2>
<p>Every cleaning choice changes your results, so write it down: what you dropped, what you filled and why. Doing your cleaning in code is itself the best record, because anyone can rerun it and see each step. Never edit the original file by hand; keep the raw data untouched and produce a cleaned copy.</p>

<div class="callout"><b>Takeaway:</b> Find problems first (isna, duplicated, dtypes, value_counts, describe), then fix them deliberately. Ask why data is missing, don't delete outliers blindly, and keep the raw data untouched.</div>
`,
    terms: [
      ["Missing value (NaN)", "An empty entry in the data; pandas shows it as NaN or NA."],
      ["Imputation", "Filling in missing values with a sensible estimate, such as the median."],
      ["Duplicate", "A row that appears more than once by mistake."],
      ["Outlier", "A value far from the others, which may be an error or a real and important case."],
      ["Data type (dtype)", "The kind of values a column holds, such as numbers, text or dates."],
      ["errors=\"coerce\"", "A pandas option that turns values it can't convert into missing values instead of crashing."],
      ["Tidy data", "A layout where each variable is a column and each observation is a row."],
      ["Raw data", "The original, untouched data, kept separate from cleaned copies."]
    ],
    quiz: [
      { q: "Which command counts missing values in each column?", options: ["df.describe()", "df.isna().sum()", "df.head()", "df.drop_duplicates()"], answer: 1, explain: "isna() marks missing values; sum() counts them per column." },
      { q: "Why is the median often better than the mean for filling missing values?", options: ["It's always bigger", "Extreme values don't drag it around", "It's faster to type", "The mean can't be calculated"], answer: 1, explain: "The median resists outliers." },
      { q: "People with high incomes often skip an income question. What's the risk of filling the gaps with the average?", options: ["None", "It systematically understates incomes, biasing the data", "It deletes rows", "The code crashes"], answer: 1, explain: "When missingness has a pattern, naive filling distorts the data." },
      { q: "You find a single huge transaction in a fraud dataset. What should you do?", options: ["Delete it automatically", "Investigate it: it may be an error or exactly the fraud you're looking for", "Replace it with zero", "Ignore the whole dataset"], answer: 1, explain: "Outliers can be the most important rows." },
      { q: "What does tidy data mean?", options: ["Data with no numbers", "Each variable is a column and each observation is a row", "Data sorted alphabetically", "Data with all outliers removed"], answer: 1, explain: "That's Wickham's definition." },
      { q: "What should you do with the original raw data file?", options: ["Edit it by hand to fix errors", "Keep it untouched and clean a copy in code", "Delete it after cleaning", "Email it to everyone"], answer: 1, explain: "Untouched raw data plus cleaning code makes your work checkable and repeatable." }
    ],
    sources: [
      ["Wickham (2014), Tidy Data, Journal of Statistical Software", "https://www.jstatsoft.org/article/view/v059i10", "The original tidy data paper."],
      ["pandas user guide: Working with missing data", "https://pandas.pydata.org/docs/user_guide/missing_data.html", "isna, dropna, fillna and more."],
      ["Kaggle Learn: Data Cleaning", "https://www.kaggle.com/learn/data-cleaning", "Hands-on exercises on real messy data."],
      ["Python for Data Analysis (McKinney), chapter 7: Data cleaning and preparation", "https://wesmckinney.com/book/data-cleaning", "Free online chapter."],
      ["OpenIntro Statistics (free textbook)", "https://www.openintro.org/book/os/", "Background on data collection and why data goes missing."]
    ]
  },
  {
    id: "group-join-reshape",
    unit: "l2u2",
    title: "Grouping, Joining and Reshaping",
    summary: "Answering 'per group' questions, combining tables that share a key, and turning long data wide.",
    minutes: 12,
    body: `
<p>Most interesting questions about data are comparisons: sales <em>per shop</em>, accuracy <em>per age group</em>, complaints <em>per month</em>. And the data you need is often split across several tables. This lesson covers the three moves that answer these questions: <strong>grouping</strong>, <strong>joining</strong> and <strong>reshaping</strong>.</p>

<h2>Grouping: split, apply, combine</h2>
<p>Hadley Wickham named the pattern behind every "per group" question <strong>split-apply-combine</strong>:</p>
<ol>
  <li><strong>Split</strong> the rows into groups (all the lattes, all the teas...).</li>
  <li><strong>Apply</strong> a calculation to each group (sum, mean, count...).</li>
  <li><strong>Combine</strong> the answers into a new, smaller table.</li>
</ol>
<p>In pandas it's one line: <code>df.groupby("item")["revenue"].sum()</code>. You can group by several columns at once, and ask for several summaries with <code>.agg()</code>, for example <code>.agg(["mean", "max", "count"])</code>. If you know Excel, this is what a pivot table does.</p>

<h2>Joining: matching tables on a key</h2>
<p>Data is usually stored in separate tables to avoid repeating information: one table of orders, another of customers. A <strong>key</strong> is a column they share, such as a customer ID. A <strong>join</strong> (in pandas, <code>merge</code>) lines up rows that have the same key.</p>
<div class="table-scroll"><table>
  <tr><th>Join type</th><th>Keeps</th></tr>
  <tr><td><code>how="inner"</code></td><td>Only rows whose key appears in both tables</td></tr>
  <tr><td><code>how="left"</code></td><td>Every row of the left table, with blanks where there's no match</td></tr>
  <tr><td><code>how="outer"</code></td><td>Every row from both tables</td></tr>
</table></div>
<p>Joins are where silent mistakes hide. If a key appears twice in one table, rows get duplicated and totals inflate. If keys are written differently ("C01" versus "c01"), rows fail to match and quietly vanish from an inner join. Always check the row count before and after a merge. pandas can even check for you with the <code>validate=</code> option.</p>
<p>To stack tables with the same columns on top of each other (January's sales, then February's), use <code>pd.concat()</code> instead.</p>

<h2>Reshaping: long and wide</h2>
<p>The same data can be laid out <strong>long</strong> (one row per day per item) or <strong>wide</strong> (one row per day, one column per item). Long is tidy and best for analysis and charting tools; wide is easier for people to read. <code>pivot_table()</code> turns long into wide, and <code>melt()</code> turns wide back into long.</p>

<div data-widget="py" data-title="Try it: group, join and pivot"><textarea>
import pandas as pd

orders = pd.DataFrame({
    "order_id": [1, 2, 3, 4, 5, 6],
    "customer": ["C1", "C2", "C1", "C3", "C2", "C9"],
    "month":    ["Jan", "Jan", "Feb", "Feb", "Feb", "Feb"],
    "amount":   [20, 35, 15, 50, 25, 10],
})
customers = pd.DataFrame({
    "customer": ["C1", "C2", "C3"],
    "region":   ["North", "South", "North"],
})

# Split-apply-combine
print(orders.groupby("customer")["amount"].agg(["count", "sum", "mean"]), "\\n")

# Join: notice what happens to customer C9, who isn't in the customer table
inner = orders.merge(customers, on="customer", how="inner")
left = orders.merge(customers, on="customer", how="left")
print("Rows: orders", len(orders), "| inner", len(inner), "| left", len(left), "\\n")
print(left, "\\n")

# Reshape: long to wide
wide = left.pivot_table(index="region", columns="month", values="amount", aggfunc="sum", fill_value=0)
print(wide)
</textarea></div>
<p>Look at the row counts. The inner join silently dropped the order from customer C9, whose details are missing. The left join kept it, with a blank region. Neither is "right": it depends on your question. But you should always know which one you chose and why.</p>

<div class="callout"><b>Takeaway:</b> groupby answers "per group" questions, merge joins tables on a shared key (check row counts every time), and pivot_table and melt switch between long and wide layouts.</div>
`,
    terms: [
      ["Split-apply-combine", "Splitting data into groups, calculating something for each, and combining the results."],
      ["groupby", "The pandas command that groups rows for per-group calculations."],
      ["Aggregation", "Summarising many values into one, such as a sum, mean or count."],
      ["Key", "A column that identifies matching rows across tables, such as a customer ID."],
      ["Join (merge)", "Combining two tables by matching rows that share a key."],
      ["Inner join", "A join that keeps only rows whose key appears in both tables."],
      ["Left join", "A join that keeps every row of the first table, with blanks where there's no match."],
      ["Pivot table", "A wide summary table with groups as rows and categories as columns."],
      ["Long vs wide format", "Long data has one row per observation; wide data spreads categories across columns."]
    ],
    quiz: [
      { q: "Which pandas command answers \"total sales per shop\"?", options: ["df.sort_values(\"shop\")", "df.groupby(\"shop\")[\"sales\"].sum()", "df.merge(\"shop\")", "df.head(\"shop\")"], answer: 1, explain: "Group by shop, then sum each group's sales." },
      { q: "What does a join need?", options: ["Two charts", "A shared key column to match rows", "Identical tables", "A random seed"], answer: 1, explain: "Rows are matched on a key such as an ID." },
      { q: "An order's customer ID isn't in the customer table. What happens in an inner join?", options: ["The order is kept with blanks", "The order is dropped", "The code crashes", "A new customer is created"], answer: 1, explain: "Inner joins keep only matching keys." },
      { q: "After a merge, your total revenue has doubled. What's the likely cause?", options: ["Inflation", "A duplicated key in one table multiplied the rows", "pandas rounding", "The inner join"], answer: 1, explain: "Duplicate keys create duplicate matched rows. Check row counts before and after." },
      { q: "Which layout do most analysis and charting tools prefer?", options: ["Wide", "Long (tidy)", "Neither", "Alphabetical"], answer: 1, explain: "Long, tidy data has one row per observation." },
      { q: "How do you stack January's and February's tables (same columns) on top of each other?", options: ["merge", "pd.concat", "groupby", "pivot_table"], answer: 1, explain: "concat stacks tables; merge matches them side by side." }
    ],
    sources: [
      ["Wickham (2011), The split-apply-combine strategy for data analysis, Journal of Statistical Software", "https://www.jstatsoft.org/article/view/v040i01", "Where the name comes from."],
      ["pandas user guide: Group by (split-apply-combine)", "https://pandas.pydata.org/docs/user_guide/groupby.html", "Official groupby guide."],
      ["pandas user guide: Merge, join, concatenate and compare", "https://pandas.pydata.org/docs/user_guide/merging.html", "Join types and the validate option."],
      ["pandas user guide: Reshaping and pivot tables", "https://pandas.pydata.org/docs/user_guide/reshaping.html", "pivot_table and melt."],
      ["Python for Data Analysis (McKinney), chapter 10: Data aggregation and group operations", "https://wesmckinney.com/book/data-aggregation", "Free online chapter."]
    ]
  },

  /* ============================ UNIT 3 ============================ */
  {
    id: "describing-data",
    unit: "l2u3",
    title: "Describing Data: Averages and Spread",
    summary: "Mean, median and mode, how spread out data is, percentiles, and the shape of a distribution.",
    minutes: 12,
    body: `
<p>A table with ten thousand rows tells you nothing at a glance. <strong>Descriptive statistics</strong> boil it down to a few numbers that capture where the data sits and how much it varies. They're also the first thing to check before training any model, and the numbers you'll see in every AI paper's results table.</p>

<h2>Three kinds of average</h2>
<ul>
  <li><strong>Mean:</strong> add everything up and divide by how many there are. The everyday "average".</li>
  <li><strong>Median:</strong> line the values up in order and take the middle one (or the mean of the two middle ones).</li>
  <li><strong>Mode:</strong> the most common value. Most useful for categories ("the most popular drink is latte").</li>
</ul>
<p>When data is lopsided, the mean and median tell very different stories. A few very large values drag the mean up but barely move the median. That's why official statistics usually quote <em>median</em> household income: the mean is pulled up by a small number of very high earners.</p>

<div data-widget="mean-median"></div>

<h2>Spread: how much do values vary?</h2>
<p>Two classes can both average 70% while one has everyone between 65 and 75 and the other ranges from 20 to 100. The average alone hides that difference. Measures of <strong>spread</strong> capture it:</p>
<ul>
  <li><strong>Range:</strong> largest minus smallest. Simple, but one odd value can wreck it.</li>
  <li><strong>Variance:</strong> the average of the squared distances from the mean. Squaring makes all distances positive and punishes big ones.</li>
  <li><strong>Standard deviation:</strong> the square root of the variance, which brings it back into the original units. Roughly, it's the typical distance of a value from the mean.</li>
  <li><strong>Interquartile range (IQR):</strong> the spread of the middle half of the data. Like the median, it ignores extreme values.</li>
</ul>
<p>The squared error idea here is exactly the "loss" from Level 1. Mean squared error, one of the most common ways to score a model, is just the variance of the model's mistakes around zero.</p>

<h2>Percentiles and quartiles</h2>
<p>The 90th <strong>percentile</strong> is the value that 90% of the data falls below. The 25th, 50th and 75th percentiles are called <strong>quartiles</strong>; the 50th is the median. Percentiles are how AI services describe speed: "95th-percentile response time of 2 seconds" means 95% of requests were answered within 2 seconds. Averages would hide the slow ones that annoy people.</p>

<h2>The shape of data</h2>
<p>A <strong>distribution</strong> is the pattern of how often each value occurs; a histogram (a bar chart of counts) shows it. Look for:</p>
<ul>
  <li><strong>Symmetric</strong> shapes, like heights, where mean and median are close.</li>
  <li><strong>Skewed</strong> shapes with a long tail on one side, like incomes, house prices or the number of followers people have. Here the mean sits out towards the tail.</li>
  <li>More than one peak, which often means two different groups are mixed together.</li>
</ul>
<p>The <strong>box plot</strong> packs all of this into one picture: a box from the 25th to 75th percentile, a line at the median, whiskers showing the typical range, and dots for outliers.</p>

<div data-widget="py" data-title="Try it: describe some house prices"><textarea>
import numpy as np
import statistics as st

prices = np.array([210, 225, 240, 250, 255, 260, 275, 290, 310, 1450])  # £ thousands

print("Mean:   ", prices.mean())
print("Median: ", np.median(prices))
print("Std dev:", prices.std(ddof=1).round(1))
q1, q3 = np.percentile(prices, [25, 75])
print("IQR:    ", q3 - q1)
print("Mode of drinks:", st.mode(["latte", "tea", "latte", "mocha", "latte"]))

# Now remove the mansion and compare
print("\\nWithout the 1,450k mansion:")
print("Mean:", prices[:-1].mean().round(1), "| Median:", np.median(prices[:-1]))
</textarea></div>
<p>One mansion lifts the mean by over £100,000 but moves the median by just £2,500. Without it, the standard deviation shrinks from about 378 to 31, while the IQR only moves from about 44 to 35. Which numbers you report can tell very different stories, so honest reporting usually gives both an average and a spread, and says which kind.</p>

<div class="callout"><b>Takeaway:</b> Always report a centre (mean or median) and a spread (standard deviation or IQR). For skewed data with outliers, the median and IQR are usually the fairer summary.</div>
`,
    terms: [
      ["Descriptive statistics", "Numbers that summarise a dataset, such as averages and spread."],
      ["Mean", "The sum of the values divided by how many there are."],
      ["Median", "The middle value when the data is sorted; resistant to outliers."],
      ["Mode", "The most common value."],
      ["Standard deviation", "Roughly the typical distance of values from the mean; the square root of the variance."],
      ["Variance", "The average squared distance of values from the mean."],
      ["Percentile", "The value below which a given percentage of the data falls."],
      ["Interquartile range (IQR)", "The spread of the middle half of the data: 75th minus 25th percentile."],
      ["Skewed distribution", "A lopsided distribution with a long tail on one side."]
    ],
    quiz: [
      { q: "For the values 2, 3, 3, 4, 100, which is larger?", options: ["The mean", "The median", "They're equal", "Neither can be calculated"], answer: 0, explain: "The mean is 22.4; the median is 3. The outlier drags the mean up." },
      { q: "Why do official statistics often report median income rather than mean income?", options: ["It's easier to calculate", "A few very high incomes pull the mean far above what's typical", "The mean is illegal", "The median is always higher"], answer: 1, explain: "Income is skewed, so the median better represents a typical person." },
      { q: "What does standard deviation measure?", options: ["The most common value", "Roughly how far values typically are from the mean", "The middle value", "The number of values"], answer: 1, explain: "It's a measure of spread." },
      { q: "\"95th-percentile response time is 2 seconds\" means…", options: ["The average is 2 seconds", "95% of responses took 2 seconds or less", "5% of responses took 2 seconds", "Every response took 2 seconds"], answer: 1, explain: "95% of the values fall at or below the 95th percentile." },
      { q: "A histogram shows two clear peaks. What might that suggest?", options: ["The data is perfectly normal", "Two different groups are mixed together", "There are no outliers", "The mean equals the mode"], answer: 1, explain: "Two peaks often mean two populations, such as two types of customer." },
      { q: "Which pair is most resistant to outliers?", options: ["Mean and range", "Median and IQR", "Mean and standard deviation", "Maximum and minimum"], answer: 1, explain: "Both ignore the extremes." }
    ],
    sources: [
      ["OpenIntro Statistics, chapter 2: Summarizing data (free textbook)", "https://www.openintro.org/book/os/", "Mean, median, spread and box plots."],
      ["Khan Academy: Statistics and probability", "https://www.khanacademy.org/math/statistics-probability", "Free videos and practice on summary statistics."],
      ["Think Stats, 3rd edition (Allen Downey), free online", "https://allendowney.github.io/ThinkStats/", "Statistics taught with Python code."],
      ["NIST/SEMATECH e-Handbook of Statistical Methods: Exploratory data analysis", "https://www.itl.nist.gov/div898/handbook/eda/eda.htm", "A trusted reference on summaries and plots."],
      ["Python documentation: statistics module", "https://docs.python.org/3/library/statistics.html", "Built-in mean, median, mode and more."]
    ]
  },
  {
    id: "probability-distributions",
    unit: "l2u3",
    title: "Probability Distributions",
    summary: "Random variables, the classic distribution shapes, the bell curve's 68-95-99.7 rule, and why averages behave.",
    minutes: 13,
    body: `
<p>In Level 1 you learned that AI reasons with probabilities: a spam filter is 97% sure, a weather model says 70% chance of rain. To build and judge such systems you need a few more probability tools. The big idea of this lesson is the <strong>distribution</strong>: a description of every possible outcome and how likely each one is.</p>

<h2>Random variables and expected value</h2>
<p>A <strong>random variable</strong> is a number whose value depends on chance: the roll of a dice, tomorrow's rainfall, the number of customers in the next hour. Its <strong>expected value</strong> is the long-run average if you could repeat the situation forever. For a fair dice it's (1+2+3+4+5+6)/6 = 3.5, even though you can never actually roll a 3.5.</p>
<p>Expected value is how decisions under uncertainty are made. A model that's 80% sure a part is faulty, where missing a fault costs £1,000 and a false alarm costs £50, should flag it: the expected cost of ignoring it (0.8 × £1,000 = £800) is far higher than the expected cost of checking (0.2 × £50 = £10).</p>

<h2>Four shapes worth knowing</h2>
<div class="table-scroll"><table>
  <tr><th>Distribution</th><th>Describes</th><th>Example</th></tr>
  <tr><td><strong>Uniform</strong></td><td>Every outcome equally likely</td><td>A fair dice; a random number between 0 and 1</td></tr>
  <tr><td><strong>Binomial</strong></td><td>How many successes in a fixed number of yes/no trials</td><td>How many of 100 emails are spam, if each has a 20% chance</td></tr>
  <tr><td><strong>Normal</strong> (bell curve)</td><td>Values clustered symmetrically around an average</td><td>Adult heights; measurement errors</td></tr>
  <tr><td><strong>Long-tailed</strong></td><td>Mostly small values, with rare enormous ones</td><td>City sizes, website visits, word frequencies</td></tr>
</table></div>
<p>The long-tailed kind matters a lot for AI. In language, a handful of words ("the", "of", "and") are extremely common while most words are rare. This pattern, known as Zipf's law, is part of why models need such huge amounts of text to learn rare words well.</p>

<h2>The normal distribution</h2>
<p>The <strong>normal distribution</strong> is the famous bell curve, described by just two numbers: its mean (the centre) and its standard deviation (the width). It comes with a handy rule of thumb, the <strong>68-95-99.7 rule</strong>:</p>
<ul>
  <li>About <strong>68%</strong> of values fall within 1 standard deviation of the mean.</li>
  <li>About <strong>95%</strong> within 2 standard deviations.</li>
  <li>About <strong>99.7%</strong> within 3 standard deviations.</li>
</ul>
<p>A <strong>z-score</strong> says how many standard deviations a value is from the mean: (value − mean) ÷ standard deviation. A z-score of 3 is very unusual for normal data, which is one simple way to flag possible outliers or anomalies. Turning features into z-scores, called <strong>standardisation</strong>, is also a standard preparation step before training many ML models, so that a feature measured in thousands doesn't drown out one measured in fractions.</p>

<h2>Why bell curves are everywhere</h2>
<p>Here's something remarkable. Take averages of random samples from almost <em>any</em> distribution, even a flat one like a dice, and those averages form a bell curve, getting narrower as the samples get bigger. This is the <strong>central limit theorem</strong>, and it explains why so many measurements that are the sum of many small effects look normal. Try it:</p>

<div data-widget="sampling"></div>

<p>This narrowing is also the <strong>law of large numbers</strong> at work: the more data you average, the closer you get to the true value. It's the mathematical reason more data usually beats less.</p>

<div data-widget="py" data-title="Try it: simulate instead of calculate"><textarea>
import numpy as np
rng = np.random.default_rng(1)

# 100 emails, each 20% likely to be spam. Repeat 10,000 times.
spam_counts = rng.binomial(n=100, p=0.2, size=10_000)
print("Average spam per 100:", spam_counts.mean())
print("Chance of 30 or more:", (spam_counts >= 30).mean())

# Heights: normal, mean 170 cm, standard deviation 8 cm
heights = rng.normal(170, 8, size=100_000)
within_1 = (abs(heights - 170) <= 8).mean()
within_2 = (abs(heights - 170) <= 16).mean()
print(f"Within 1 sd: {within_1:.1%}   within 2 sd: {within_2:.1%}")

z = (195 - 170) / 8
print("z-score of a 195 cm person:", round(z, 2))
</textarea></div>
<p>Simulation is a superpower: when the maths gets hard, you can often just generate a hundred thousand random examples and count. Data scientists use this trick all the time.</p>

<div class="callout"><b>Takeaway:</b> A distribution describes all possible outcomes and their chances. Know the uniform, binomial, normal and long-tailed shapes, the 68-95-99.7 rule, and that averages of big samples settle into a narrow bell curve.</div>
`,
    terms: [
      ["Random variable", "A number whose value depends on chance."],
      ["Expected value", "The long-run average outcome of a random variable."],
      ["Probability distribution", "A description of all possible outcomes and how likely each is."],
      ["Binomial distribution", "The number of successes in a fixed number of independent yes/no trials."],
      ["Normal distribution", "The symmetric bell curve, defined by its mean and standard deviation."],
      ["68-95-99.7 rule", "In a normal distribution, about 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean."],
      ["z-score", "How many standard deviations a value is from the mean."],
      ["Standardisation", "Rescaling a feature to mean 0 and standard deviation 1 by converting values to z-scores."],
      ["Central limit theorem", "Averages of large random samples follow a bell curve, whatever the original distribution."]
    ],
    quiz: [
      { q: "What is the expected value of a fair six-sided dice?", options: ["3", "3.5", "6", "1/6"], answer: 1, explain: "(1+2+3+4+5+6) ÷ 6 = 3.5." },
      { q: "In a normal distribution, roughly what share of values lie within 2 standard deviations of the mean?", options: ["50%", "68%", "95%", "100%"], answer: 2, explain: "The 68-95-99.7 rule." },
      { q: "Exam scores have mean 60 and standard deviation 10. What is the z-score of a score of 80?", options: ["0.8", "2", "20", "8"], answer: 1, explain: "(80 − 60) ÷ 10 = 2." },
      { q: "Which distribution counts successes in a fixed number of yes/no trials?", options: ["Uniform", "Binomial", "Normal", "Long-tailed"], answer: 1, explain: "That's the binomial." },
      { q: "What does the central limit theorem say?", options: ["All data is normal", "Averages of large random samples form a bell curve, whatever the original shape", "Large samples are always biased", "The mean equals the median"], answer: 1, explain: "That's why bell curves appear so often." },
      { q: "Word frequencies (a few very common words, many rare ones) follow which kind of distribution?", options: ["Uniform", "Long-tailed", "Perfectly normal", "Binomial with p = 0.5"], answer: 1, explain: "Language is famously long-tailed (Zipf's law)." }
    ],
    sources: [
      ["Seeing Theory (Brown University): a visual introduction to probability", "https://seeing-theory.brown.edu/", "Interactive demonstrations of distributions and the central limit theorem."],
      ["OpenIntro Statistics, chapters 3 and 4: Probability and distributions", "https://www.openintro.org/book/os/", "Free textbook coverage of the normal and binomial distributions."],
      ["Khan Academy: Random variables and the normal distribution", "https://www.khanacademy.org/math/statistics-probability", "Free lessons and practice."],
      ["Mathematics for Machine Learning (Deisenroth, Faisal and Ong), chapter 6: Probability and distributions", "https://mml-book.github.io/", "Free textbook linking probability to ML."],
      ["Think Stats, 3rd edition (Allen Downey)", "https://allendowney.github.io/ThinkStats/", "Simulation-first approach in Python."],
      ["NumPy: Random Generator distributions", "https://numpy.org/doc/stable/reference/random/generator.html", "binomial, normal and others used in the code."]
    ]
  },
  {
    id: "samples-correlation",
    unit: "l2u3",
    title: "Samples, Correlation and Causation",
    summary: "Why who you ask matters more than how many, how sure you can be, and why linked doesn't mean caused.",
    minutes: 13,
    body: `
<p>AI models learn from samples of the world, and their creators make claims based on samples too: "our model is 94% accurate", "users preferred version B". This lesson gives you the tools to judge such claims, and to avoid the most common traps in reasoning from data.</p>

<h2>Population and sample</h2>
<p>The <strong>population</strong> is everyone or everything you care about; a <strong>sample</strong> is the part you actually measured. If the sample is chosen fairly, ideally at random, it tends to look like the population. If not, no amount of data saves you.</p>
<p>The classic cautionary tale is the 1936 US presidential election. A magazine, the <em>Literary Digest</em>, polled over two million people and confidently predicted the wrong winner by a wide margin. Much of its sample came from lists such as telephone and car owners, wealthier than average in the Depression, and only a minority of people sent back replies. A far smaller but better-chosen poll by George Gallup called it right. <strong>Sampling bias</strong> beats sample size.</p>
<p>The same thing happens in AI. A face recognition system trained mostly on lighter-skinned faces, or a speech model trained mostly on one accent, has learned from a biased sample of the world, as you saw in Level 1's ethics lesson.</p>

<h2>How sure can you be?</h2>
<p>Any number calculated from a sample would come out slightly differently with a different sample. Statisticians express this with a <strong>confidence interval</strong>: a range of plausible values for the truth. A 95% confidence interval comes from a method that, over many repeated samples, would capture the true value 95% of the time. A poll might say "52%, plus or minus 3 points". The "plus or minus" is the <strong>margin of error</strong>, and it shrinks as samples grow, but only with the square root of the size: to halve it, you need four times as much data.</p>
<p>For AI, this means a model scoring 92% on 50 test examples might really be anywhere from about 80% to 97%. Beating another model by one point on a small test set may be pure luck. When you read benchmark results, ask how big the test set was.</p>

<h2>Is the difference real?</h2>
<p>When comparing two groups, a <strong>p-value</strong> answers: "if there were really no difference, how surprising would a gap this big be?" A small p-value (often below 0.05) suggests the difference probably isn't just luck. But be careful: it doesn't tell you the difference is <em>large</em> or <em>important</em>, and if you test enough things, some will look significant by chance alone. Run 20 tests of things that don't matter, and on average one will pass the 0.05 bar.</p>

<h2>Correlation</h2>
<p>Two things are <strong>correlated</strong> when they tend to move together. The <strong>correlation coefficient</strong> <em>r</em> runs from −1 (perfectly opposite) through 0 (no straight-line link) to +1 (perfectly together).</p>

<div data-widget="correlation"></div>

<h2>Correlation is not causation</h2>
<p>Ice-cream sales and drownings rise together. Ice cream doesn't cause drowning; hot weather drives both. A hidden third factor like this is called a <strong>confounder</strong>. Machine learning models are correlation machines: they find whatever patterns predict the target, causal or not. A model might learn that hospital patients with a certain scanner are sicker simply because the sickest patients are sent to that hospital. Use such a pattern to make decisions and you can do real harm.</p>
<p>A striking version is <strong>Simpson's paradox</strong>, where a trend in every group reverses when the groups are combined. In a famous 1973 study of University of California, Berkeley admissions, men appeared to be admitted at a higher overall rate than women. But department by department there was no such bias against women; women had mostly applied to the more competitive departments, which turned everyone away more often. Splitting the data by the right factor changed the story.</p>

<h2>How to show cause: experiments</h2>
<p>The gold standard is a <strong>randomised controlled trial</strong>: randomly assign who gets the treatment, so confounders are spread evenly between groups. Tech companies run these constantly as <strong>A/B tests</strong>, showing version A to a random half of users and version B to the other half. Randomisation is what turns "linked" into "caused".</p>

<div class="callout"><b>Takeaway:</b> Who is in your sample matters more than how many. Every estimate has uncertainty, small differences may be luck, and correlation, which is all most models learn, is not causation. Only well-designed experiments reliably show cause.</div>
`,
    terms: [
      ["Population", "The whole group you want to learn about."],
      ["Sample", "The part of the population you actually measure."],
      ["Sampling bias", "When the way a sample is chosen makes it unrepresentative of the population."],
      ["Confidence interval", "A range of plausible values for something estimated from a sample."],
      ["Margin of error", "The plus-or-minus part of an estimate; it shrinks with the square root of the sample size."],
      ["p-value", "How surprising a result would be if there were really no effect; small values suggest it isn't just luck."],
      ["Correlation coefficient (r)", "A number from −1 to +1 measuring how closely two variables move together in a straight line."],
      ["Confounder", "A hidden factor that affects two variables, making them look linked."],
      ["Simpson's paradox", "A trend that appears in groups but reverses when they are combined."],
      ["A/B test", "An experiment that randomly shows people version A or B to measure which works better."]
    ],
    quiz: [
      { q: "Why did the 1936 Literary Digest poll fail despite two million replies?", options: ["The sample was too small", "Its sample was biased towards wealthier people and those who chose to reply", "People lied", "The maths was wrong"], answer: 1, explain: "Sampling bias beats sample size." },
      { q: "To halve the margin of error of a poll, roughly how much bigger must the sample be?", options: ["Twice as big", "Four times as big", "Ten times as big", "It can't be halved"], answer: 1, explain: "Margin of error shrinks with the square root of the sample size." },
      { q: "Model A scores 91% and model B 90% on a test set of 40 examples. What should you conclude?", options: ["A is clearly better", "The difference could easily be luck with so few examples", "B is better", "Both are perfect"], answer: 1, explain: "With 40 examples, one point is less than half a question's difference." },
      { q: "Ice-cream sales and sunburn are strongly correlated. What's the most likely explanation?", options: ["Ice cream causes sunburn", "Sunburn causes ice-cream cravings", "A confounder, sunny weather, drives both", "It's a coincidence"], answer: 2, explain: "Hot, sunny days increase both." },
      { q: "What makes a randomised controlled trial able to show cause and effect?", options: ["It uses more data", "Random assignment spreads confounders evenly between groups", "It uses AI", "It only measures correlation"], answer: 1, explain: "Randomisation removes systematic differences between the groups." },
      { q: "In Simpson's paradox…", options: ["A trend in every group reverses when the groups are combined", "Correlation equals causation", "Samples are always biased", "The mean equals the median"], answer: 0, explain: "The Berkeley admissions case is the classic example." }
    ],
    sources: [
      ["Bickel, Hammel and O'Connell (1975), Sex bias in graduate admissions: data from Berkeley, Science", "https://doi.org/10.1126/science.187.4175.398", "The famous Simpson's paradox study."],
      ["OpenIntro Statistics, chapters 1, 5 and 6: Data collection and inference", "https://www.openintro.org/book/os/", "Sampling, confidence intervals and hypothesis tests."],
      ["American Statistical Association (2016) statement on p-values", "https://doi.org/10.1080/00031305.2016.1154108", "What p-values do and don't mean."],
      ["Seeing Theory: Frequentist inference and regression", "https://seeing-theory.brown.edu/", "Interactive confidence intervals and correlation."],
      ["Khan Academy: Study design and inference", "https://www.khanacademy.org/math/statistics-probability", "Free lessons on sampling, experiments and significance."],
      ["Pearl and Mackenzie, The Book of Why (2018), author's page", "http://bayes.cs.ucla.edu/WHY/", "Accessible introduction to cause and effect."]
    ]
  },
  {
    id: "visualising-data",
    unit: "l2u3",
    title: "Telling the Truth with Charts",
    summary: "Why you must always plot your data, which chart answers which question, and how charts mislead.",
    minutes: 12,
    body: `
<p>Summary numbers are useful, but they can hide almost anything. The single most important habit in data work is simple: <strong>plot your data</strong>. Charts reveal patterns, mistakes and outliers that no table of numbers will show, and they're how you'll explain results to other people.</p>

<h2>Why you must always look</h2>
<p>In 1973 the statistician Francis Anscombe published four small datasets, now called <strong>Anscombe's quartet</strong>. All four have almost identical means, standard deviations, correlation and best-fit line. Plotted, they look completely different: one is a neat cloud, one a smooth curve, one a perfect line with a single outlier, and one is a vertical stack with one far-away point. In 2017, researchers went further with the "Datasaurus Dozen": a dozen datasets with the same summary statistics, one of which, when plotted, is a drawing of a dinosaur.</p>
<p>The lesson: identical numbers, completely different stories. Before you trust any summary, or train any model, look at the data.</p>

<h2>Which chart for which question?</h2>
<div class="table-scroll"><table>
  <tr><th>Question</th><th>Chart</th></tr>
  <tr><td>How do categories compare?</td><td><strong>Bar chart</strong> (sales per shop)</td></tr>
  <tr><td>How does something change over time?</td><td><strong>Line chart</strong> (monthly users)</td></tr>
  <tr><td>How are values distributed?</td><td><strong>Histogram</strong> or <strong>box plot</strong> (ages of customers)</td></tr>
  <tr><td>Are two numbers related?</td><td><strong>Scatter plot</strong> (study hours against exam score)</td></tr>
  <tr><td>How do two categories combine?</td><td><strong>Heatmap</strong> (a confusion matrix of a model's mistakes)</td></tr>
</table></div>
<p>Pie charts are popular but hard to read: people judge angles badly. With more than two or three slices, a sorted bar chart is almost always clearer.</p>

<div data-widget="sort" data-set="chart-choice"></div>

<h2>How charts mislead</h2>
<ul>
  <li><strong>Truncated axes.</strong> Starting a bar chart's axis at 95 instead of 0 makes a 96% versus 98% difference look enormous. Bars should start at zero; line charts may zoom in, but should say so clearly.</li>
  <li><strong>Cherry-picked time ranges.</strong> Showing only the months that support your story.</li>
  <li><strong>Two y-axes</strong> on one chart, which can make any two lines seem to move together.</li>
  <li><strong>3D effects and decoration</strong> that distort sizes and add nothing.</li>
  <li><strong>Missing context:</strong> no units, no sample size, no source.</li>
</ul>
<p>AI benchmark charts in company announcements are notorious for these tricks. A habit worth building: whenever a chart impresses you, check where the axis starts.</p>

<h2>Making charts in Python</h2>
<p>The standard library is <strong>matplotlib</strong>; <strong>seaborn</strong> builds on it for nicer statistical charts, and pandas can draw directly from a DataFrame. A basic chart takes a few lines:</p>
<pre><code>import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr"]
users = [120, 180, 260, 410]

fig, ax = plt.subplots()
ax.plot(months, users, marker="o")
ax.set_title("Monthly active users")
ax.set_ylabel("Users")
ax.set_ylim(bottom=0)        # honest: start the axis at zero
plt.show()</code></pre>
<p>Run code like this in Google Colab and the chart appears beneath it. The code boxes on this site show text output only, so here the code is for reading; you'll draw real charts in the Level 3 project if you use Colab.</p>

<h2>Good chart checklist</h2>
<ul>
  <li>A title that says what the chart shows, ideally the main finding.</li>
  <li>Labelled axes with units.</li>
  <li>An honest axis range.</li>
  <li>As little decoration as possible, and colour used for meaning, not for fun. Colour-blind-friendly palettes help everyone.</li>
  <li>The data source and sample size.</li>
</ul>

<div class="callout"><b>Takeaway:</b> Always plot before you trust a summary. Match the chart to the question (bar, line, histogram, scatter), and check axes, ranges and context on every chart you read.</div>
`,
    terms: [
      ["Anscombe's quartet", "Four datasets with near-identical statistics that look completely different when plotted."],
      ["Bar chart", "A chart comparing categories with bars; the axis should start at zero."],
      ["Line chart", "A chart showing how values change over time."],
      ["Histogram", "A bar chart of how often values fall into each range; shows a distribution."],
      ["Scatter plot", "A chart of dots showing how two numeric variables relate."],
      ["Heatmap", "A grid of coloured cells showing values for combinations of two categories."],
      ["Truncated axis", "An axis that doesn't start at zero, which can exaggerate differences."],
      ["matplotlib", "The standard Python library for drawing charts."]
    ],
    quiz: [
      { q: "What does Anscombe's quartet show?", options: ["Charts are unnecessary", "Datasets with the same statistics can look completely different, so always plot", "Means are always wrong", "Four is the best number of charts"], answer: 1, explain: "Same numbers, different stories." },
      { q: "Which chart best shows how website visits changed over a year?", options: ["Pie chart", "Line chart", "Histogram", "Heatmap"], answer: 1, explain: "Line charts show change over time." },
      { q: "Which chart shows whether hours of sleep relate to test scores?", options: ["Bar chart", "Scatter plot", "Pie chart", "Line chart"], answer: 1, explain: "Scatter plots show the relationship between two numbers." },
      { q: "A bar chart's y-axis starts at 90. What's the problem?", options: ["None", "It exaggerates small differences between bars", "It hides the title", "Bars can't start above zero"], answer: 1, explain: "Bar length should be proportional to the value." },
      { q: "Why are sorted bar charts usually better than pie charts?", options: ["They use more colours", "People compare lengths more accurately than angles", "Pie charts are illegal", "Bars are always taller"], answer: 1, explain: "We judge length much better than angle." },
      { q: "Which is the standard Python library for charts?", options: ["NumPy", "matplotlib", "pip", "json"], answer: 1, explain: "matplotlib, with seaborn and pandas building on it." }
    ],
    sources: [
      ["Anscombe (1973), Graphs in statistical analysis, The American Statistician", "https://doi.org/10.1080/00031305.1973.10478966", "The original quartet."],
      ["Matejka and Fitzmaurice (2017), Same Stats, Different Graphs (the Datasaurus Dozen), CHI conference", "https://doi.org/10.1145/3025453.3025912", "Datasets with identical statistics and very different shapes."],
      ["Fundamentals of Data Visualization (Claus Wilke), free online", "https://clauswilke.com/dataviz/", "Choosing charts and avoiding misleading ones."],
      ["matplotlib: Quick start guide", "https://matplotlib.org/stable/users/explain/quick_start.html", "Official introduction to plotting in Python."],
      ["Government Analysis Function (UK): Data visualisation guidance", "https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/", "Practical public-sector chart standards."]
    ]
  },

  /* ============================ UNIT 4 ============================ */
  {
    id: "vectors-matrices",
    unit: "l2u4",
    title: "Vectors and Matrices",
    summary: "The two maths objects AI is made of: lists of numbers that point somewhere, and tables that transform them.",
    minutes: 13,
    body: `
<p>If you open up any modern AI system, you'll find it's made almost entirely of two things: <strong>vectors</strong> and <strong>matrices</strong>. This branch of maths, <strong>linear algebra</strong>, sounds intimidating, but the core ideas are surprisingly visual. You already know the code for them: they're NumPy arrays.</p>

<h2>Vectors: lists of numbers with meaning</h2>
<p>A <strong>vector</strong> is an ordered list of numbers. You can think of it in two ways at once:</p>
<ul>
  <li><strong>As a description.</strong> A house might be the vector [3, 85, 12]: 3 bedrooms, 85 square metres, 12 minutes from a station. Every row of a data table is a vector.</li>
  <li><strong>As an arrow in space.</strong> [3, 4] is an arrow from the origin to the point 3 across and 4 up. Its length, by Pythagoras, is √(3² + 4²) = 5.</li>
</ul>
<p>With three numbers you get 3D space. With 1,000 numbers you get 1,000-dimensional space. No one can picture that, but the maths works exactly the same, and that's where AI lives.</p>

<h2>Embeddings: meaning as direction</h2>
<p>In Level 1 you learned that language models turn words into lists of numbers. Those lists are vectors called <strong>embeddings</strong>, and they're arranged so that words with similar meanings point in similar directions. "Cat" and "kitten" point nearly the same way; "cat" and "tax return" don't. The same trick works for sentences, images, songs and products, and it powers search engines, recommendations and the retrieval systems you'll build in Level 6.</p>

<h2>The dot product: how aligned are two vectors?</h2>
<p>The <strong>dot product</strong> multiplies two vectors item by item and adds up the results: [1, 2, 3] · [4, 5, 6] = 1×4 + 2×5 + 3×6 = 32. It's large when the vectors point the same way, zero when they're at right angles, and negative when they point in opposite directions.</p>
<p>Divide the dot product by the two lengths and you get <strong>cosine similarity</strong>, a score from −1 to 1 that measures direction alone. It's the standard way to ask "how similar are these two embeddings?"</p>
<p>You've actually met the dot product before: Level 1's artificial neuron multiplied each input by a weight and added them up. That's a dot product of the inputs and the weights.</p>

<h2>Matrices: tables that transform</h2>
<p>A <strong>matrix</strong> is a rectangular grid of numbers, a 2D array. A dataset of 1,000 houses with 3 features is a 1000 × 3 matrix (rows first, then columns). But matrices also <em>do</em> things: multiplying a vector by a matrix transforms it, stretching, rotating or squashing it into a new vector, possibly of a different length.</p>

<h2>Matrix multiplication</h2>
<p>To multiply matrix A by matrix B, each entry of the answer is the dot product of a row of A with a column of B. The one rule to remember is about shapes:</p>
<p style="text-align:center"><strong>(m × n) times (n × p) gives (m × p)</strong>. The inside numbers must match.</p>
<p>Here's why this matters so much. A layer of a neural network with 3 inputs and 4 neurons stores its weights as a 3 × 4 matrix. Feed it a batch of 1,000 examples (a 1000 × 3 matrix) and one matrix multiplication computes every neuron's output for every example at once, giving a 1000 × 4 result. Modern AI is, to a remarkable degree, enormous numbers of matrix multiplications, and graphics chips (GPUs) are so valuable because they do them extremely fast. In NumPy and PyTorch the multiply symbol is <code>@</code>.</p>

<div data-widget="py" data-title="Try it: similarity and a neural layer"><textarea>
import numpy as np

def cosine(a, b):
    return a @ b / (np.linalg.norm(a) * np.linalg.norm(b))

# Toy 4-number "embeddings" (real ones have hundreds or thousands of numbers)
cat    = np.array([0.9, 0.8, 0.1, 0.0])
kitten = np.array([0.8, 0.9, 0.2, 0.1])
tax    = np.array([0.0, 0.1, 0.9, 0.8])
print("cat vs kitten:", round(cosine(cat, kitten), 3))
print("cat vs tax:   ", round(cosine(cat, tax), 3))

# A neural network layer: 5 examples, 3 features in, 4 neurons out
rng = np.random.default_rng(0)
X = rng.normal(size=(5, 3))      # the batch of inputs
W = rng.normal(size=(3, 4))      # the layer's weights
b = np.zeros(4)                  # the biases
out = X @ W + b
print("\\n(5 x 3) @ (3 x 4) gives", out.shape)
print(out.round(2))
</textarea></div>
<p>Try changing <code>W</code> to shape <code>(2, 4)</code>. You'll get an error about mismatched shapes, the single most common error in deep learning code. Now you know what it means.</p>

<div class="callout"><b>Takeaway:</b> A vector is a list of numbers that can be seen as a point or arrow; the dot product and cosine similarity measure how aligned two vectors are; and matrix multiplication, shape (m × n) times (n × p), is the main calculation inside neural networks.</div>
`,
    terms: [
      ["Linear algebra", "The maths of vectors and matrices, the core language of machine learning."],
      ["Vector", "An ordered list of numbers, seen as a point or an arrow in space."],
      ["Dimension (of a vector)", "How many numbers the vector has."],
      ["Embedding", "A vector representing something, like a word or image, so that similar things point in similar directions."],
      ["Dot product", "Multiply two vectors item by item and add up; large when they point the same way."],
      ["Cosine similarity", "The dot product divided by both lengths: a direction-only similarity from −1 to 1."],
      ["Matrix", "A rectangular grid of numbers, written rows × columns."],
      ["Matrix multiplication", "Combining matrices so each result entry is a row-column dot product; (m×n) @ (n×p) gives (m×p)."],
      ["GPU", "A graphics chip that performs huge numbers of matrix calculations in parallel, used to train and run AI."]
    ],
    quiz: [
      { q: "What is [2, 3] · [4, 1] (the dot product)?", options: ["[8, 3]", "11", "10", "24"], answer: 1, explain: "2×4 + 3×1 = 11." },
      { q: "What is the length of the vector [6, 8]?", options: ["14", "10", "48", "7"], answer: 1, explain: "√(36 + 64) = √100 = 10." },
      { q: "Two word embeddings have a cosine similarity of 0.95. What does that suggest?", options: ["The words are unrelated", "The words have very similar meanings", "One word is longer", "The words are opposites"], answer: 1, explain: "Similar directions mean similar meanings." },
      { q: "What is the shape of a (100 × 20) matrix times a (20 × 5) matrix?", options: ["(100 × 5)", "(20 × 20)", "(100 × 20)", "It's not allowed"], answer: 0, explain: "The inner 20s match and disappear: (100 × 5)." },
      { q: "Can you multiply a (10 × 3) matrix by a (4 × 2) matrix?", options: ["Yes, giving (10 × 2)", "No: the inner numbers 3 and 4 don't match", "Yes, giving (3 × 4)", "Only on a GPU"], answer: 1, explain: "The inner dimensions must be equal." },
      { q: "Why are GPUs so important for AI?", options: ["They store more data", "They do enormous numbers of matrix calculations in parallel, very fast", "They connect to the internet", "They make graphics prettier"], answer: 1, explain: "Neural networks are mostly matrix multiplications." }
    ],
    sources: [
      ["3Blue1Brown: Essence of linear algebra (video series)", "https://www.3blue1brown.com/topics/linear-algebra", "The best visual introduction to vectors and matrices."],
      ["Mathematics for Machine Learning (Deisenroth, Faisal and Ong), chapters 2 and 3", "https://mml-book.github.io/", "Free textbook: linear algebra and geometry for ML."],
      ["Khan Academy: Linear algebra", "https://www.khanacademy.org/math/linear-algebra", "Free lessons on vectors, dot products and matrices."],
      ["Goodfellow, Bengio and Courville, Deep Learning, chapter 2: Linear algebra", "https://www.deeplearningbook.org/contents/linear_algebra.html", "Free chapter from the standard deep learning textbook."],
      ["Google Machine Learning Crash Course: Embeddings", "https://developers.google.com/machine-learning/crash-course/embeddings", "How embeddings place similar items close together."]
    ]
  },
  {
    id: "derivatives-gradients",
    unit: "l2u4",
    title: "Slopes, Derivatives and Gradient Descent",
    summary: "The calculus idea behind all learning: measure the slope, then step downhill.",
    minutes: 12,
    body: `
<p>In Level 1 you learned that a model learns by adjusting its numbers to make its error, the <strong>loss</strong>, smaller, using a method called gradient descent. This lesson opens that box. You need just one idea from calculus, and it's an idea you already have an instinct for: <strong>slope</strong>.</p>

<h2>Functions</h2>
<p>A <strong>function</strong> in maths, as in Python, takes an input and gives an output: f(x) = x² turns 3 into 9. A machine learning model is a function too: it takes features in and gives a prediction out. The loss is another function: it takes the model's settings (its weights) and gives back a single number saying how wrong the model is.</p>

<h2>Slope and the derivative</h2>
<p>The <strong>slope</strong> of a straight line is how much it rises for each step to the right. A curve's slope changes from place to place. The <strong>derivative</strong> is the slope at one exact point, found by zooming in so far that the curve looks like a straight line.</p>
<ul>
  <li><strong>Positive</strong> derivative: the curve goes up as you move right.</li>
  <li><strong>Negative</strong> derivative: it goes down.</li>
  <li><strong>Zero</strong>: flat, which happens at the bottom of a valley (or the top of a hill).</li>
</ul>
<p>For f(x) = x², the derivative is 2x. At x = 3 the slope is 6 (steep, going up); at x = −1 it's −2 (going down); at x = 0 it's 0 (the bottom). You don't need to memorise rules for working these out: software does it for you automatically. You need to understand what the number <em>means</em>.</p>

<h2>Many inputs: the gradient</h2>
<p>A real model has thousands to billions of weights, so its loss depends on many inputs at once. A <strong>partial derivative</strong> is the slope in one direction while holding the others still. Put all of them together into one vector and you have the <strong>gradient</strong>: an arrow pointing in the direction where the loss rises fastest. So the opposite direction is the fastest way downhill.</p>

<h2>Gradient descent</h2>
<p>Here is the whole training algorithm behind deep learning, in four lines:</p>
<ol>
  <li>Start with random weights.</li>
  <li>Measure the loss and its gradient.</li>
  <li>Take a small step in the opposite direction to the gradient: new weight = old weight − learning rate × gradient.</li>
  <li>Repeat, many thousands of times.</li>
</ol>
<p>The <strong>learning rate</strong> sets the step size. Too small and training crawls; too big and you overshoot the valley and bounce around or fly off entirely. Choosing it well is one of the most important practical skills in training models. Try it:</p>

<div data-widget="slope"></div>

<p>Try a learning rate of 0.2, then 0.9, then 1.05. A small rate creeps steadily down; a rate near 1 zig-zags across the valley; just above 1 the steps grow until the ball flies off. Real training runs fail in exactly these ways.</p>

<h2>The chain rule: blame passed backwards</h2>
<p>A neural network is functions inside functions: layer after layer. The <strong>chain rule</strong> says the slope of a chain of functions is the product of each link's slope. That lets the error at the output be traced backwards through every layer to work out how much each weight was to blame. This procedure is called <strong>backpropagation</strong>, and it's how every neural network is trained. You'll build it step by step in Level 5.</p>

<div data-widget="py" data-title="Try it: gradient descent in eight lines"><textarea>
# Find the x that makes the loss (x - 3)**2 + 1 as small as possible.
def loss(x):
    return (x - 3) ** 2 + 1

def slope(x):              # the derivative of the loss
    return 2 * (x - 3)

x = -5.0                   # a bad starting guess
learning_rate = 0.1
for step in range(25):
    x = x - learning_rate * slope(x)
    if step % 5 == 4:
        print(f"step {step + 1:2}: x = {x:.4f}, loss = {loss(x):.4f}")
print("The answer should be close to 3.")
</textarea></div>
<p>Change <code>learning_rate</code> to <code>0.01</code> (too slow) and <code>1.1</code> (blows up). Real models do exactly this, just with billions of numbers instead of one.</p>

<div class="callout"><b>Takeaway:</b> The derivative is the slope at a point; the gradient is the slope in every direction at once; and gradient descent learns by repeatedly stepping downhill, with the learning rate setting the step size.</div>
`,
    terms: [
      ["Function (maths)", "A rule that turns an input into an output, such as f(x) = x²."],
      ["Loss function", "A function scoring how wrong a model is; training tries to make it small."],
      ["Slope", "How steeply a line rises or falls."],
      ["Derivative", "The slope of a curve at a single point."],
      ["Partial derivative", "The slope in one input's direction while the others are held still."],
      ["Gradient", "A vector of partial derivatives pointing in the direction of steepest increase."],
      ["Gradient descent", "Training by repeatedly stepping opposite to the gradient to reduce the loss."],
      ["Learning rate", "The size of each gradient descent step."],
      ["Chain rule", "The rule that the slope of functions inside functions is the product of their slopes."],
      ["Backpropagation", "Using the chain rule to work out each weight's share of the blame for the error."]
    ],
    quiz: [
      { q: "The derivative of a loss at your current weight is negative. Which way should the weight move to reduce the loss?", options: ["Increase it", "Decrease it", "Leave it", "Set it to zero"], answer: 0, explain: "A negative slope means downhill is to the right, so increase the weight." },
      { q: "What does a derivative of zero mean?", options: ["The function is broken", "The curve is flat there, such as at the bottom of a valley", "The loss is zero", "Training has failed"], answer: 1, explain: "Flat means you may have reached a minimum." },
      { q: "What is the gradient?", options: ["The loss value", "A vector of slopes pointing towards the steepest increase", "The learning rate", "A type of chart"], answer: 1, explain: "Gradient descent steps the opposite way." },
      { q: "Your training loss jumps around and then grows to huge numbers. What's the likely cause?", options: ["The learning rate is too large", "The learning rate is too small", "Too much data", "The model is perfect"], answer: 0, explain: "Steps that are too big overshoot and diverge." },
      { q: "What is backpropagation?", options: ["Deleting old data", "Using the chain rule to work out how much each weight contributed to the error", "Moving backwards through a list", "A kind of chart"], answer: 1, explain: "It traces the error backwards through the layers." },
      { q: "In gradient descent, new weight = old weight − learning rate × …", options: ["the loss", "the gradient", "the data", "the bias"], answer: 1, explain: "You step against the gradient." }
    ],
    sources: [
      ["3Blue1Brown: Essence of calculus (video series)", "https://www.3blue1brown.com/topics/calculus", "Visual introduction to derivatives and the chain rule."],
      ["3Blue1Brown: Neural networks (gradient descent and backpropagation)", "https://www.3blue1brown.com/topics/neural-networks", "How the ideas in this lesson train real networks."],
      ["Google Machine Learning Crash Course: Gradient descent", "https://developers.google.com/machine-learning/crash-course/linear-regression/gradient-descent", "Gradient descent and learning rates, with interactive exercises."],
      ["Mathematics for Machine Learning, chapter 5: Vector calculus", "https://mml-book.github.io/", "Free textbook coverage of gradients and the chain rule."],
      ["Goodfellow, Bengio and Courville, Deep Learning, chapter 4: Numerical computation", "https://www.deeplearningbook.org/contents/numerical.html", "Gradient-based optimisation."],
      ["Khan Academy: Differential calculus", "https://www.khanacademy.org/math/differential-calculus", "Free lessons on slopes and derivatives."]
    ]
  },
  {
    id: "data-privacy",
    unit: "l2u4",
    title: "Handling Data Responsibly",
    summary: "Personal data, the GDPR's principles, why 'anonymous' data often isn't, and documenting datasets.",
    minutes: 12,
    body: `
<p>Now that you can load, clean and analyse data, you have real power, and real responsibility. Much of the data AI learns from is about people. This lesson covers the rules and habits that keep data work lawful, fair and trustworthy. It's general guidance, not legal advice: when it matters, check with your organisation's data protection officer.</p>

<h2>What counts as personal data?</h2>
<p>Under the EU's <strong>General Data Protection Regulation (GDPR)</strong>, and the UK's version of it, <strong>personal data</strong> is any information relating to an identified or identifiable living person. That's much broader than names and addresses: an email address, a phone's location history, an IP address, a photo or a customer ID that links back to someone can all count. Some <strong>special category</strong> data, such as health, ethnicity, religion, sexual orientation, biometrics used to identify people, and political opinions, gets extra protection because misuse can do serious harm.</p>

<h2>The seven principles</h2>
<p>Article 5 of the GDPR sets out principles that make a good checklist for any data project, legal requirement or not:</p>
<div class="table-scroll"><table>
  <tr><th>Principle</th><th>In plain English</th></tr>
  <tr><td>Lawfulness, fairness and transparency</td><td>Have a valid reason, don't use data in ways people wouldn't expect, and tell them what you're doing.</td></tr>
  <tr><td>Purpose limitation</td><td>Collect data for a clear purpose and don't quietly reuse it for something unrelated.</td></tr>
  <tr><td>Data minimisation</td><td>Use only the data you actually need.</td></tr>
  <tr><td>Accuracy</td><td>Keep it correct and up to date.</td></tr>
  <tr><td>Storage limitation</td><td>Don't keep it longer than necessary.</td></tr>
  <tr><td>Integrity and confidentiality</td><td>Keep it secure.</td></tr>
  <tr><td>Accountability</td><td>Be able to show you followed the rules.</td></tr>
</table></div>
<p>Data minimisation sits in tension with AI's appetite for data, which is exactly why it matters. Before adding a column to a model, ask: do I need this, and would the people it describes be comfortable with it?</p>

<div data-widget="sort" data-set="gdpr-principle"></div>

<h2>"Anonymous" data often isn't</h2>
<p>Removing names doesn't make data anonymous. Combinations of ordinary details are surprisingly unique:</p>
<ul>
  <li>In 2000, Latanya Sweeney estimated that about 87% of Americans could be uniquely identified by just their five-digit ZIP code, date of birth and sex.</li>
  <li>In 2006–2008, researchers showed that people in Netflix's "anonymised" film-rating data could be re-identified by matching a handful of their ratings and dates against public reviews.</li>
</ul>
<p>The law draws a careful line here. <strong>Pseudonymised</strong> data, where names are replaced with codes but a key exists to link them back, is still personal data. Only truly <strong>anonymised</strong> data, where people can no longer be identified by any reasonably likely means, falls outside the GDPR. Techniques that help include removing or generalising details (age bands instead of birth dates), aggregating into counts, and <strong>differential privacy</strong>, which adds carefully measured random noise so that no single person's data noticeably changes the results.</p>

<h2>Other people's data</h2>
<p>Data you find online isn't automatically free to use. Datasets come with <strong>licences</strong> that say what you may do, some allowing commercial use and some not. Copyright, website terms and privacy law all still apply to data that's publicly visible. Whether training AI on copyrighted material is lawful is being argued in courts and parliaments around the world right now, as you saw in Level 1.</p>

<h2>Document your data</h2>
<p>In 2018, Timnit Gebru and colleagues proposed <strong>datasheets for datasets</strong>: a standard set of questions every dataset should answer, like the datasheet that comes with an electronic component. Who created it and why? What's in it, and what's missing? How was it collected, and did people consent? What should it not be used for? Writing one forces you to notice gaps and biases before a model inherits them, and tells the next person what they're working with.</p>

<div class="callout"><b>Takeaway:</b> Personal data is broader than you think, and removing names rarely makes it anonymous. Use only what you need, keep it secure, check licences, and document where your data came from and what it's missing.</div>
`,
    terms: [
      ["Personal data", "Any information relating to an identified or identifiable living person."],
      ["GDPR", "The EU's General Data Protection Regulation (2016, applied from 2018), with a UK version, governing personal data."],
      ["Special category data", "Sensitive personal data, such as health or ethnicity, that gets extra legal protection."],
      ["Data minimisation", "Collecting and using only the personal data you actually need."],
      ["Purpose limitation", "Using data only for the clear purpose it was collected for."],
      ["Pseudonymisation", "Replacing identifiers with codes; the data still counts as personal data."],
      ["Anonymisation", "Processing data so people can no longer be identified by any reasonably likely means."],
      ["Re-identification", "Working out who is who in supposedly anonymous data, often by linking it with other data."],
      ["Differential privacy", "Adding measured random noise so results reveal almost nothing about any one person."],
      ["Datasheet for a dataset", "A document explaining a dataset's origin, contents, collection, gaps and intended uses."]
    ],
    quiz: [
      { q: "Which of these can count as personal data under the GDPR?", options: ["Only full names", "A customer ID or location history that can be linked to a person", "Only passport numbers", "Nothing that's publicly visible"], answer: 1, explain: "Anything relating to an identifiable person can count." },
      { q: "You replace names with random codes but keep a key file linking codes to names. The data is…", options: ["Anonymised, so the GDPR no longer applies", "Pseudonymised, so it is still personal data", "Deleted", "Special category data"], answer: 1, explain: "If it can be linked back, it's still personal data." },
      { q: "What did Latanya Sweeney's research show?", options: ["Names are needed to identify anyone", "ZIP code, birth date and sex alone uniquely identify most Americans", "Data can't be re-identified", "Anonymisation is easy"], answer: 1, explain: "She estimated about 87%." },
      { q: "A model predicts delivery times. Is collecting customers' religion consistent with data minimisation?", options: ["Yes, more data is always better", "No: it isn't needed for the purpose and is special category data", "Yes, if it's stored securely", "Only on weekends"], answer: 1, explain: "Use only what you need, especially for sensitive data." },
      { q: "What does differential privacy do?", options: ["Deletes all data", "Adds measured noise so no single person's data noticeably changes the results", "Encrypts emails", "Removes names"], answer: 1, explain: "It gives a mathematical privacy guarantee." },
      { q: "What is a datasheet for a dataset?", options: ["A spreadsheet of the data", "A document describing the dataset's origin, contents, gaps and intended uses", "A licence fee", "A type of chart"], answer: 1, explain: "Proposed by Gebru and colleagues in 2018." }
    ],
    sources: [
      ["Regulation (EU) 2016/679, the General Data Protection Regulation (official text)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj", "The law itself, including Article 5's principles."],
      ["UK Information Commissioner's Office: Guide to data protection", "https://ico.org.uk/for-organisations/", "Plain-English guidance from the UK regulator."],
      ["Sweeney (2000), Simple demographics often identify people uniquely", "https://dataprivacylab.org/projects/identifiability/paper1.pdf", "The ZIP code, birth date and sex study."],
      ["Narayanan and Shmatikov (2008), Robust de-anonymization of large sparse datasets (the Netflix study)", "https://arxiv.org/abs/cs/0610105", "Re-identifying people from film ratings."],
      ["Gebru et al. (2018, updated 2021), Datasheets for Datasets", "https://arxiv.org/abs/1803.09010", "The proposal for documenting datasets."],
      ["Dwork and Roth (2014), The Algorithmic Foundations of Differential Privacy", "https://www.cis.upenn.edu/~aaroth/privacybook.html", "The standard reference on differential privacy, free online."]
    ]
  },
  {
    id: "eda-project",
    unit: "l2u4",
    title: "Project: Explore a Real Dataset",
    summary: "Put the whole level together: ask a question, load, check, clean, summarise, compare and report honestly.",
    minutes: 15,
    body: `
<p>Time to use everything from this level in one piece of work. Before anyone trains a model, they do <strong>exploratory data analysis (EDA)</strong>: getting to know the data, finding problems, and forming ideas worth testing. The statistician John Tukey championed this approach in the 1970s, and it remains the first step of every serious data and AI project.</p>

<h2>The scenario</h2>
<p>A city bike-hire scheme has given you a small table of daily records and one question: <em>what affects how many bikes are hired?</em> The data below is invented for this exercise, but it's shaped like real bike-sharing datasets that are publicly available, such as the Capital Bikeshare data from Washington, DC, often used for teaching. Each code box builds on the same data, so run them in order.</p>

<h2>Step 1: Load and look</h2>
<div data-widget="py" data-title="Step 1: load and first look"><textarea>
import pandas as pd
import numpy as np

rng = np.random.default_rng(7)
n = 120
temp = rng.normal(16, 7, n).round(1)                      # °C
rain = rng.choice([0, 0, 0, 1], n)                         # 1 = rainy day
weekend = np.tile([0, 0, 0, 0, 0, 1, 1], 18)[:n]
hires = (300 + 28 * temp - 260 * rain + 90 * weekend + rng.normal(0, 70, n)).round()
df = pd.DataFrame({"temp_c": temp, "rain": rain, "weekend": weekend, "hires": hires})
df.loc[[5, 40], "hires"] = np.nan                          # two missing counts
df.loc[77, "temp_c"] = 61.0                                # a sensor glitch

print(df.head(), "\\n")
print(df.shape, "\\n")
print(df.describe().round(1))
</textarea></div>
<p>Read the <code>describe()</code> output like a detective. The <code>count</code> row shows two hire values are missing. The maximum temperature of 61°C is impossible for a city bike scheme. Spotting problems like these is the whole point of looking first.</p>

<h2>Step 2: Clean, and write down what you did</h2>
<div data-widget="py" data-title="Step 2: clean"><textarea>
import pandas as pd
import numpy as np
rng = np.random.default_rng(7); n = 120
temp = rng.normal(16, 7, n).round(1); rain = rng.choice([0, 0, 0, 1], n)
weekend = np.tile([0, 0, 0, 0, 0, 1, 1], 18)[:n]
hires = (300 + 28 * temp - 260 * rain + 90 * weekend + rng.normal(0, 70, n)).round()
df = pd.DataFrame({"temp_c": temp, "rain": rain, "weekend": weekend, "hires": hires})
df.loc[[5, 40], "hires"] = np.nan; df.loc[77, "temp_c"] = 61.0

log = []
before = len(df)
df = df.dropna(subset=["hires"])
log.append(f"Dropped {before - len(df)} days with no hire count (the thing we're studying).")
bad = df["temp_c"] > 45
df.loc[bad, "temp_c"] = np.nan
df["temp_c"] = df["temp_c"].fillna(df["temp_c"].median())
log.append(f"Replaced {bad.sum()} impossible temperature(s) with the median.")
print("\\n".join(log))
print("\\nRows left:", len(df))
print(df.describe().round(1))
</textarea></div>
<p>(Each box runs on its own, so this one starts by rebuilding the data.) Notice the cleaning log. In a real report it goes in a section called something like "Data preparation", so readers know exactly what was changed.</p>

<h2>Step 3: Compare groups and look for relationships</h2>
<div data-widget="py" data-title="Step 3: groups and correlations"><textarea>
import pandas as pd
import numpy as np
rng = np.random.default_rng(7); n = 120
temp = rng.normal(16, 7, n).round(1); rain = rng.choice([0, 0, 0, 1], n)
weekend = np.tile([0, 0, 0, 0, 0, 1, 1], 18)[:n]
hires = (300 + 28 * temp - 260 * rain + 90 * weekend + rng.normal(0, 70, n)).round()
df = pd.DataFrame({"temp_c": temp, "rain": rain, "weekend": weekend, "hires": hires})
# (the clean version of the same data)

print("Average hires, dry vs rainy:")
print(df.groupby("rain")["hires"].agg(["count", "mean", "median"]).round(0), "\\n")
print("Average hires, weekday vs weekend:")
print(df.groupby("weekend")["hires"].mean().round(0), "\\n")

df["temp_band"] = pd.cut(df["temp_c"], bins=[-20, 10, 20, 40], labels=["cold", "mild", "warm"])
print(df.groupby("temp_band", observed=True)["hires"].mean().round(0), "\\n")

print("Correlation with hires:")
print(df.corr(numeric_only=True)["hires"].round(2))
</textarea></div>

<h2>Step 4: Conclude honestly</h2>
<p>A good EDA write-up has four parts:</p>
<ol>
  <li><strong>The question</strong> and the data used (including how many rows, and from when).</li>
  <li><strong>What you did</strong> to clean it, from your log.</li>
  <li><strong>What you found</strong>, with numbers: for example, "warm days average roughly twice as many hires as cold days; rainy days average about 250 fewer; temperature has a strong positive correlation with hires".</li>
  <li><strong>Limitations</strong>: correlation isn't causation; 120 days is a small sample from one invented city; other factors such as holidays or events weren't recorded.</li>
</ol>
<p>Your findings also suggest what a model should use. Temperature and rain look strongly informative, which makes them good candidate <strong>features</strong> for the bike-demand prediction model you'll build in Level 4. The weekend difference is small here (about 25 hires, with a correlation near zero) and could easily be noise, which is a finding too: it tells you not to make claims about weekends from this data.</p>

<h2>Going further</h2>
<p>To do this on real data, open Google Colab and try one of these: Kaggle's datasets, the UCI Machine Learning Repository, or official open data from your own government. Add charts with matplotlib: a histogram of hires, a scatter plot of temperature against hires, and a bar chart comparing rainy and dry days. That's a genuine portfolio piece.</p>

<div class="callout"><b>Takeaway:</b> Exploratory data analysis means looking before you leap: load, inspect, clean with a log, compare groups, check relationships, and report findings together with their limitations.</div>
`,
    terms: [
      ["Exploratory data analysis (EDA)", "Getting to know a dataset by summarising, plotting and questioning it before modelling."],
      ["Cleaning log", "A written record of every change made to the data and why."],
      ["Binning", "Grouping numeric values into ranges, such as cold, mild and warm (pd.cut in pandas)."],
      ["Feature", "An input variable a model uses to make predictions."],
      ["Limitations", "The honest list of what your analysis can't show, and why."],
      ["Open data", "Data published for anyone to use, usually under an open licence."]
    ],
    quiz: [
      { q: "What is the purpose of exploratory data analysis?", options: ["To train the final model", "To understand the data, find problems and form ideas before modelling", "To delete outliers", "To make the data bigger"], answer: 1, explain: "Look before you leap." },
      { q: "describe() shows a count of 118 for one column and 120 for the others. What does that tell you?", options: ["Two values are missing in that column", "Two rows are duplicates", "The mean is 118", "Nothing"], answer: 0, explain: "count only counts non-missing values." },
      { q: "A temperature of 61°C appears in city bike data. What's the best response?", options: ["Keep it: it's real", "Treat it as an error, fix or remove it, and record what you did", "Delete the whole dataset", "Ignore all temperatures"], answer: 1, explain: "It's physically implausible, so fix it and log the change." },
      { q: "Hires are strongly correlated with temperature. Which conclusion is most careful?", options: ["Warm weather definitely causes more hires", "Warmer days are associated with more hires; other factors may also play a part", "Temperature is irrelevant", "Cold weather causes rain"], answer: 1, explain: "Correlation suggests, but doesn't prove, cause." },
      { q: "Which is NOT one of the four parts of a good EDA write-up?", options: ["The question and data", "What you did to clean it", "Findings with numbers", "Hiding the limitations"], answer: 3, explain: "Limitations should always be stated openly." },
      { q: "How do EDA findings help with building a model later?", options: ["They replace the model", "They suggest which features are likely to be useful", "They guarantee accuracy", "They don't help"], answer: 1, explain: "Informative variables become candidate features." }
    ],
    sources: [
      ["NIST/SEMATECH e-Handbook: What is EDA?", "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm", "A clear statement of the EDA approach."],
      ["UCI Machine Learning Repository: Bike Sharing dataset", "https://archive.ics.uci.edu/dataset/275/bike+sharing+dataset", "The real dataset this exercise is modelled on."],
      ["Kaggle Learn: Pandas and Data Visualization courses", "https://www.kaggle.com/learn", "Free practice on real datasets."],
      ["Google Colab", "https://colab.research.google.com/", "Free notebooks for doing this project on real data."],
      ["Python for Data Analysis (McKinney), open access", "https://wesmckinney.com/book/", "Reference for every pandas step used here."]
    ]
  }
];

/* Level 3 sorting activities, added to the shared set. */
window.SORT_SETS = window.SORT_SETS || {};
window.SORT_SETS["chart-choice"] = {
  title: "Try it: pick the best chart",
  choices: ["Bar", "Line", "Histogram", "Scatter"],
  items: [
    ["Monthly subscribers over the last two years", "Line", "Change over time calls for a line chart."],
    ["Number of customers in each of five countries", "Bar", "Comparing categories calls for bars."],
    ["How long 2,000 support calls lasted", "Histogram", "The shape of one numeric variable is a distribution."],
    ["Advertising spend against sales for 80 shops", "Scatter", "Two numeric variables: is there a relationship?"],
    ["A model's accuracy for each of four age groups", "Bar", "Comparing a number across categories."],
    ["Daily temperature through the year", "Line", "A value changing over time."]
  ]
};
window.SORT_SETS["gdpr-principle"] = {
  title: "Try it: which data protection principle?",
  choices: ["Minimisation", "Purpose limitation", "Storage limitation", "Security"],
  items: [
    ["A delivery app asks for your date of birth, which it doesn't need", "Minimisation", "Only collect what you need."],
    ["Emails collected for receipts are later used to train an unrelated advertising model, without telling anyone", "Purpose limitation", "Data shouldn't be reused for an unrelated purpose."],
    ["Job applicants' CVs are kept forever 'just in case'", "Storage limitation", "Don't keep data longer than necessary."],
    ["A spreadsheet of patients' details is left on a public website", "Security", "Integrity and confidentiality: keep data secure."],
    ["A fitness app tracks your location all day when it only needs your step count", "Minimisation", "More data than the purpose requires."]
  ]
};
