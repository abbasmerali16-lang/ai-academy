/* Level 3 course content: Machine learning in practice.
   Same shape as Levels 1 and 2. All lesson text and code is original writing; sources are credited for
   fact-checking and further reading. Code boxes run real Python (with scikit-learn) in the page.
   Inside these template strings, write a Python backslash as two backslashes (\\n). */
window.LEVEL3_UNITS = [
  { id: "l3u1", title: "Unit 1 · The machine learning workflow", blurb: "Framing a problem, splitting data honestly, building features and wiring it all together with scikit-learn." },
  { id: "l3u2", title: "Unit 2 · Supervised models", blurb: "The workhorse model families: linear and logistic regression, decision trees, random forests and gradient boosting." },
  { id: "l3u3", title: "Unit 3 · Evaluating and improving", blurb: "Picking the right metric, cross-validation and tuning, overfitting and regularisation, and imbalanced data." },
  { id: "l3u4", title: "Unit 4 · Beyond the basics", blurb: "Clustering and dimensionality reduction, explaining predictions, testing for fairness, and an end-to-end project." }
];

window.LEVEL3 = [
  /* ============================ UNIT 1 ============================ */
  {
    id: "ml-framing",
    unit: "l3u1",
    title: "Framing a Machine Learning Problem",
    summary: "Turning a vague wish into a precise prediction task, with a target, a metric and a baseline to beat.",
    minutes: 12,
    body: `
<p>Welcome to Level 3. You can now write Python, handle data with pandas and read the maths behind learning. From here you'll build real machine learning models. But the most common reason ML projects fail has nothing to do with algorithms: it's solving the wrong problem, or a problem that didn't need ML at all. So we start where every good project starts: with <strong>framing</strong>.</p>

<h2>From a wish to a task</h2>
<p>Someone says: "Use AI to reduce customer churn." That's a wish, not a task. A framed ML problem answers five questions:</p>
<ol>
  <li><strong>What exactly do we predict?</strong> The <strong>target</strong>: "Will this customer cancel within the next 30 days? Yes or no."</li>
  <li><strong>For whom, and when?</strong> Every active customer, scored each Monday, using only data available by Sunday night.</li>
  <li><strong>What will we do with the prediction?</strong> Offer a discount to the riskiest 5%. If no action follows, the model is pointless.</li>
  <li><strong>How will we know it works?</strong> A model metric (such as precision among the top 5%) <em>and</em> a business metric (fewer cancellations, measured with an A/B test).</li>
  <li><strong>What data do we have?</strong> Past examples with the answer known: customers from last year, labelled by whether they left.</li>
</ol>
<p>Question 2 matters more than it looks. If the model is trained using information that won't exist at prediction time, it will look brilliant in testing and fail in use. You'll meet this trap, called <strong>leakage</strong>, in the next lesson.</p>

<h2>What kind of problem is it?</h2>
<div class="table-scroll"><table>
  <tr><th>Type</th><th>Predicts</th><th>Example</th></tr>
  <tr><td><strong>Binary classification</strong></td><td>One of two classes</td><td>Will this customer churn?</td></tr>
  <tr><td><strong>Multi-class classification</strong></td><td>One of several classes</td><td>Which department should handle this email?</td></tr>
  <tr><td><strong>Regression</strong></td><td>A number</td><td>How many bikes will be hired tomorrow?</td></tr>
  <tr><td><strong>Ranking</strong></td><td>An order</td><td>Which ten products should we show first?</td></tr>
  <tr><td><strong>Clustering</strong> (unsupervised)</td><td>Natural groups, with no labels</td><td>What kinds of customers do we have?</td></tr>
</table></div>
<p>The same wish can be framed in several ways. "Predict churn" could be classification (will they leave?) or regression (how many days until they leave?). Pick the framing that best matches the decision you'll take.</p>

<div data-widget="sort" data-set="ml-problem-type"></div>

<h2>Always start with a baseline</h2>
<p>A <strong>baseline</strong> is the simplest sensible prediction, made without ML: always predict the most common class, predict yesterday's value, or apply a simple rule a person would use. It tells you what "good" means. If 95% of customers never churn, a model that is "95% accurate" may be doing nothing at all, just always answering "stays". Your model has to beat the baseline by enough to be worth the cost of building and running it.</p>

<h2>Do you even need ML?</h2>
<p>Google's widely read <em>Rules of Machine Learning</em> guide opens with this advice: don't be afraid to launch a product without machine learning. ML is worth it when:</p>
<ul>
  <li>the pattern is too complex for hand-written rules, <em>and</em></li>
  <li>you have enough good, labelled examples, <em>and</em></li>
  <li>occasional mistakes are acceptable, or a person checks the output, <em>and</em></li>
  <li>the world doesn't change so fast that past data stops being useful.</li>
</ul>
<p>If a simple rule gets you 90% of the way, ship the rule first and collect data. A rule is easier to explain, test and fix.</p>

<h2>The project lifecycle</h2>
<p>An industry process model from the late 1990s, <strong>CRISP-DM</strong>, is still a good map: understand the business, understand the data, prepare it, model, evaluate, deploy, then loop back. Most of the time goes into the steps before and after modelling. This level follows the same order, and Level 5 covers deployment and monitoring.</p>

<div class="callout"><b>Takeaway:</b> Before choosing any algorithm, write down the target, when the prediction is made, what action it drives, how success is measured, and the baseline to beat.</div>
`,
    terms: [
      ["Problem framing", "Turning a vague goal into a precise prediction task with a target, timing, action and metric."],
      ["Target (label)", "The value a supervised model learns to predict."],
      ["Binary classification", "Predicting one of two classes, such as yes or no."],
      ["Multi-class classification", "Predicting one of three or more classes."],
      ["Regression", "Predicting a number."],
      ["Baseline", "The simplest sensible prediction, made without ML, which a model must beat."],
      ["Business metric", "A measure of real-world success, such as fewer cancellations, as opposed to a model's accuracy."],
      ["CRISP-DM", "A widely used process model for data projects: business and data understanding, preparation, modelling, evaluation and deployment."]
    ],
    quiz: [
      { q: "\"Use AI to improve sales\" is best described as…", options: ["A framed ML problem", "A wish that still needs a target, timing, action and metric", "A regression task", "A baseline"], answer: 1, explain: "Framing turns the wish into a precise prediction task." },
      { q: "Predicting how many minutes a delivery will take is…", options: ["Binary classification", "Regression", "Clustering", "Ranking"], answer: 1, explain: "The target is a number." },
      { q: "97% of emails are not fraud. A model that always says \"not fraud\" scores 97% accuracy. What is it?", options: ["An excellent model", "A baseline that a real model must beat", "Overfitted", "A clustering model"], answer: 1, explain: "Always predicting the majority class is the baseline." },
      { q: "Why does it matter when a prediction is made?", options: ["It doesn't", "The model may only use information that exists at that moment", "Models only work on Mondays", "To pick a font"], answer: 1, explain: "Using later information is leakage." },
      { q: "When is ML a poor choice?", options: ["When the pattern is complex and there's lots of labelled data", "When a simple, explainable rule does the job well", "When mistakes are acceptable", "When the task is repeated often"], answer: 1, explain: "Ship the simple rule first." },
      { q: "A churn model is very accurate, but nobody acts on its predictions. What's wrong?", options: ["Nothing", "Without an action, the prediction creates no value", "It needs more data", "It should be a regression"], answer: 1, explain: "Framing includes the action the prediction drives." }
    ],
    sources: [
      ["Google: Rules of Machine Learning (Martin Zinkevich)", "https://developers.google.com/machine-learning/guides/rules-of-ml", "Practical advice from Google's ML engineering experience."],
      ["Google: Introduction to Machine Learning Problem Framing (course)", "https://developers.google.com/machine-learning/problem-framing", "Free short course on framing ML problems."],
      ["James, Witten, Hastie, Tibshirani and Taylor, An Introduction to Statistical Learning with Python (ISLP), free", "https://www.statlearning.com/", "The standard textbook for this level, free online."],
      ["Kaggle Learn: Intro to Machine Learning", "https://www.kaggle.com/learn/intro-to-machine-learning", "Hands-on first models with real data."],
      ["Andrew Ng, Machine Learning Specialization (Coursera / DeepLearning.AI)", "https://www.coursera.org/specializations/machine-learning-introduction", "Popular introductory course on supervised learning."]
    ]
  },
  {
    id: "data-splits",
    unit: "l3u1",
    title: "Training, Validation and Test Sets",
    summary: "Keeping some data hidden to measure honestly, and the many sneaky ways information leaks.",
    minutes: 13,
    body: `
<p>A model is only useful if it works on data it has never seen. Measuring it on the same examples it learned from is like marking students on the exact questions they practised: it tells you about memory, not understanding. The fix is simple to say and surprisingly easy to get wrong: <strong>hold some data back</strong>.</p>

<h2>Three sets, three jobs</h2>
<div class="table-scroll"><table>
  <tr><th>Set</th><th>Used for</th><th>Typical share</th></tr>
  <tr><td><strong>Training set</strong></td><td>The model learns its parameters from these examples</td><td>60 to 80%</td></tr>
  <tr><td><strong>Validation set</strong></td><td>Comparing models and choosing settings</td><td>10 to 20%</td></tr>
  <tr><td><strong>Test set</strong></td><td>One final, honest estimate of real-world performance</td><td>10 to 20%</td></tr>
</table></div>
<p>The test set is sacred. Look at its score once, at the very end. If you keep checking the test score and tweaking your model to improve it, the test set quietly becomes part of training, and its score becomes optimistic. With smaller datasets, cross-validation (lesson 10) can replace a fixed validation set.</p>

<h2>How to split</h2>
<ul>
  <li><strong>Random split:</strong> shuffle, then cut. Fine when rows are independent.</li>
  <li><strong>Stratified split:</strong> keep the class proportions the same in every set. Essential when one class is rare: with 2% fraud, a random 100-row test set might contain one fraud case or none.</li>
  <li><strong>Time-based split:</strong> train on the past, test on the future. Required whenever you'll predict forward in time, such as sales, prices or demand. A random split lets the model peek at tomorrow to predict today.</li>
  <li><strong>Group split:</strong> keep all rows from the same person, patient or shop in the same set. If one patient's scans appear in both training and test, the model can recognise the patient rather than the disease.</li>
</ul>

<h2>Data leakage</h2>
<p><strong>Leakage</strong> is when information that won't be available at prediction time sneaks into training. It produces models that look amazing in testing and disappoint in real life. A 2023 review by Sayash Kapoor and Arvind Narayanan found leakage affecting hundreds of published scientific papers across many fields that used machine learning. Common forms:</p>
<ul>
  <li><strong>Target leakage:</strong> a feature that is really a consequence of the answer. Predicting whether a patient has an illness using "was prescribed the treatment for that illness" is cheating.</li>
  <li><strong>Train-test contamination:</strong> doing preparation on all the data before splitting, such as filling missing values with the overall average or scaling with the overall maximum. The test rows have influenced training.</li>
  <li><strong>Duplicates across splits:</strong> the same or near-identical rows in training and test.</li>
  <li><strong>Peeking at the future:</strong> random splits on time-ordered data, or features like "total purchases this year" when predicting in March.</li>
</ul>
<p>A useful warning sign: if a model's score seems too good to be true, it usually is. Check the most important features and ask, "would I really know this at prediction time?"</p>

<div data-widget="sort" data-set="leakage"></div>

<div data-widget="py" data-title="Try it: split properly"><textarea>
import numpy as np
from sklearn.model_selection import train_test_split

rng = np.random.default_rng(0)
X = rng.normal(size=(1000, 3))
y = (rng.random(1000) < 0.05).astype(int)       # a rare class: about 5%

# First split off the test set, then split the rest into train and validation.
X_rest, X_test, y_rest, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)
X_train, X_val, y_train, y_val = train_test_split(X_rest, y_rest, test_size=0.25, stratify=y_rest, random_state=42)

for name, part in [("train", y_train), ("validation", y_val), ("test", y_test)]:
    print(f"{name:10} {len(part):4} rows, rare class share {part.mean():.1%}")
</textarea></div>
<p>Thanks to <code>stratify=y</code>, every set keeps about the same 5% share of the rare class. Try removing <code>stratify</code> from both calls and run it a few times with different <code>random_state</code> values to see the shares wobble.</p>

<div class="callout"><b>Takeaway:</b> Train on one part, choose on another, and judge once on a third. Split the way the model will be used (by time, by group, stratified), do all preparation after splitting, and treat any too-good score as a leakage alarm.</div>
`,
    terms: [
      ["Training set", "The data a model learns its parameters from."],
      ["Validation set", "Held-back data used to compare models and choose settings."],
      ["Test set", "Data kept untouched until the end for one honest performance estimate."],
      ["Generalisation", "How well a model performs on new, unseen data."],
      ["Stratified split", "A split that keeps class proportions the same in every set."],
      ["Time-based split", "Training on earlier data and testing on later data."],
      ["Group split", "Keeping all rows from the same person or entity in one set."],
      ["Data leakage", "Information unavailable at prediction time sneaking into training, giving falsely good results."],
      ["Target leakage", "A feature that is effectively a consequence of the answer being predicted."]
    ],
    quiz: [
      { q: "Why is a model's score on its own training data misleading?", options: ["It's always too low", "It measures memory, not performance on new data", "Training data has no labels", "It isn't misleading"], answer: 1, explain: "You need unseen data to measure generalisation." },
      { q: "What is the test set for?", options: ["Tuning settings repeatedly", "One final, honest estimate at the end", "Training the model", "Cleaning data"], answer: 1, explain: "Use it once, at the end." },
      { q: "You're forecasting next month's sales. How should you split?", options: ["Randomly", "By time: train on the past, test on later months", "Alphabetically", "It doesn't matter"], answer: 1, explain: "A random split lets the model peek at the future." },
      { q: "You scale features using the maximum of the whole dataset, then split. What's the problem?", options: ["None", "Train-test contamination: test data influenced the preparation", "The model will be too small", "Scaling is never allowed"], answer: 1, explain: "Fit preparation steps on training data only." },
      { q: "A loan model's best feature is \"account sent to debt collectors\". What's likely happening?", options: ["A great discovery", "Target leakage: that happens after a default", "Stratification", "Underfitting"], answer: 1, explain: "It's a consequence of the outcome." },
      { q: "One patient's scans appear in both training and test sets. What split would fix it?", options: ["A larger test set", "A group split by patient", "A random split", "Removing the test set"], answer: 1, explain: "Keep each patient's data in one set." }
    ],
    sources: [
      ["scikit-learn: Common pitfalls and recommended practices", "https://scikit-learn.org/stable/common_pitfalls.html", "Leakage and how pipelines prevent it."],
      ["scikit-learn: Cross-validation (including group and time series splitters)", "https://scikit-learn.org/stable/modules/cross_validation.html", "Official guide to splitting strategies."],
      ["Kapoor and Narayanan (2023), Leakage and the reproducibility crisis in machine-learning-based science, Patterns", "https://doi.org/10.1016/j.patter.2023.100804", "How leakage affected hundreds of studies."],
      ["Kaufman, Rosset, Perlich and Stitelman (2012), Leakage in data mining: formulation, detection, and avoidance", "https://doi.org/10.1145/2382577.2382579", "Classic paper defining kinds of leakage."],
      ["Kaggle Learn: Intermediate Machine Learning (data leakage lesson)", "https://www.kaggle.com/learn/intermediate-machine-learning", "Hands-on leakage examples."],
      ["Google Machine Learning Crash Course: Datasets, generalisation and overfitting", "https://developers.google.com/machine-learning/crash-course", "Train, validation and test sets explained."]
    ]
  },
  {
    id: "feature-engineering",
    unit: "l3u1",
    title: "Feature Engineering",
    summary: "Turning raw columns into inputs a model can use: scaling, encoding categories, dates, text and more.",
    minutes: 13,
    body: `
<p>Models only see numbers, and only the numbers you give them. <strong>Feature engineering</strong> is the craft of turning raw data into inputs, called <strong>features</strong>, that make the pattern easy to learn. For tables of data it often matters more than which algorithm you pick.</p>

<h2>Numbers: scaling</h2>
<p>Many models compare features directly, so a feature measured in thousands (income) can drown out one measured in single digits (number of children). Two common fixes:</p>
<ul>
  <li><strong>Standardisation:</strong> subtract the mean, divide by the standard deviation (the z-scores from Level 2). The default choice.</li>
  <li><strong>Min-max scaling:</strong> squash values into the range 0 to 1.</li>
</ul>
<p>Scaling matters a lot for distance-based models like k-nearest neighbours, for regularised linear models, and for neural networks. Tree models don't care, because they only ask "is this value above or below a threshold?"</p>
<p>For very skewed numbers like income or house prices, taking the <strong>logarithm</strong> often helps: it turns "ten times bigger" into "one step bigger", so a few huge values stop dominating.</p>

<h2>Categories: encoding</h2>
<p>A column like city = London / Leeds / Cardiff can't go into a model as text. Options:</p>
<ul>
  <li><strong>One-hot encoding:</strong> one yes/no column per category (is_London, is_Leeds, is_Cardiff). Safe and common.</li>
  <li><strong>Ordinal encoding:</strong> numbers 1, 2, 3, but only when the categories have a real order, like small / medium / large. Numbering cities would wrongly tell the model that Cardiff is "three times" London.</li>
  <li>For categories with thousands of values (postcodes, product IDs), one-hot gets huge. Grouping rare values into "other", or <strong>target encoding</strong> (replacing each category with the average target for it, computed carefully on training data only), can help.</li>
</ul>

<h2>Dates and times</h2>
<p>A raw timestamp is nearly useless; the parts of it are gold. Extract the hour, day of the week, month, whether it's a weekend or holiday, and time since some event ("days since last purchase"). For cyclic things like hour of the day, note that 23:00 and 00:00 are neighbours; sine and cosine encodings capture that.</p>

<h2>Text</h2>
<p>The simplest text features are word counts, the <strong>bag of words</strong> you built a tiny version of in Level 2. <strong>TF-IDF</strong> refines this by down-weighting words that appear everywhere ("the", "and") and up-weighting distinctive ones. In Level 4 you'll see how embeddings from neural networks capture meaning far better.</p>

<h2>Domain knowledge wins</h2>
<p>The best features often come from understanding the problem. For house prices, "price per square metre in this postcode last year" beats raw columns. For fraud, "how different is this purchase from the customer's usual spending?" For bike hire, "is it a public holiday?" Talking to people who know the domain is one of the most valuable things a data scientist does.</p>

<h2>Missing values as features</h2>
<p>As in Level 2: fill gaps sensibly (with values learned from training data only), and consider adding a "was missing" flag, because the absence itself can carry information.</p>

<div data-widget="py" data-title="Try it: build features from raw data"><textarea>
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, OneHotEncoder

raw = pd.DataFrame({
    "timestamp": pd.to_datetime(["2026-03-02 08:15", "2026-03-07 14:30", "2026-03-08 22:05", "2026-03-10 07:50"]),
    "city": ["London", "Leeds", "London", "Cardiff"],
    "income": [32000, 54000, 410000, 28000],
})

feat = pd.DataFrame()
feat["hour"] = raw["timestamp"].dt.hour
feat["weekday"] = raw["timestamp"].dt.dayofweek          # Monday = 0
feat["is_weekend"] = (feat["weekday"] >= 5).astype(int)
feat["log_income"] = np.log10(raw["income"]).round(2)

enc = OneHotEncoder(handle_unknown="ignore")
onehot = enc.fit_transform(raw[["city"]]).toarray()
feat[[f"city_{c}" for c in enc.categories_[0]]] = onehot.astype(int)

feat["income_z"] = StandardScaler().fit_transform(raw[["income"]]).round(2).ravel()
print(feat)
</textarea></div>
<p>Look at the two income columns. The z-score version is dominated by the single huge income; the log version spreads the values out much more evenly.</p>

<div class="callout"><b>Takeaway:</b> Scale numbers for models that compare them, one-hot encode unordered categories, mine dates for their parts, and use what you know about the problem. Learn every transformation from training data only.</div>
`,
    terms: [
      ["Feature engineering", "Creating and transforming input variables so a model can learn the pattern more easily."],
      ["Standardisation", "Rescaling a feature to mean 0 and standard deviation 1."],
      ["Min-max scaling", "Rescaling a feature into the range 0 to 1."],
      ["Log transform", "Taking the logarithm of a skewed feature to reduce the effect of huge values."],
      ["One-hot encoding", "Turning a category into separate yes/no columns, one per category."],
      ["Ordinal encoding", "Turning ordered categories into numbers that keep their order."],
      ["Target encoding", "Replacing each category with the average target value for that category, learned from training data."],
      ["Bag of words", "Representing text by counting how often each word appears."],
      ["TF-IDF", "Word counts weighted so that common words count less and distinctive words count more."]
    ],
    quiz: [
      { q: "Which kind of model is NOT affected by feature scaling?", options: ["k-nearest neighbours", "Decision trees", "Neural networks", "Regularised linear models"], answer: 1, explain: "Trees only compare each feature to thresholds." },
      { q: "How should you encode a \"colour\" column with values red, green and blue?", options: ["red=1, green=2, blue=3", "One-hot encoding", "Delete it", "Take its logarithm"], answer: 1, explain: "Colours have no order, so use one yes/no column each." },
      { q: "When is ordinal encoding appropriate?", options: ["For any category", "When categories have a natural order, like small, medium, large", "For dates", "Never"], answer: 1, explain: "The numbers must reflect a real order." },
      { q: "Why might you take the logarithm of income?", options: ["To make it negative", "To stop a few very large values dominating", "To encode it as a category", "To hide it"], answer: 1, explain: "Logs compress skewed values." },
      { q: "Which is a useful feature from a purchase timestamp?", options: ["The raw number of seconds since 1970 only", "Hour of day and whether it's a weekend", "The timestamp as text", "None"], answer: 1, explain: "The parts of a date carry the pattern." },
      { q: "What does TF-IDF do?", options: ["Translates text", "Weights words so common ones count less and distinctive ones count more", "Counts letters", "Removes all punctuation only"], answer: 1, explain: "Term frequency times inverse document frequency." }
    ],
    sources: [
      ["scikit-learn: Preprocessing data", "https://scikit-learn.org/stable/modules/preprocessing.html", "Scalers, encoders and transformers."],
      ["scikit-learn: Text feature extraction (bag of words and TF-IDF)", "https://scikit-learn.org/stable/modules/feature_extraction.html", "Official guide to text features."],
      ["Kaggle Learn: Feature Engineering", "https://www.kaggle.com/learn/feature-engineering", "Hands-on lessons, including target encoding."],
      ["Zheng and Casari (2018), Feature Engineering for Machine Learning, O'Reilly", "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/", "A practical book on the craft."],
      ["Google Machine Learning Crash Course: Working with numerical and categorical data", "https://developers.google.com/machine-learning/crash-course", "Scaling and encoding explained."]
    ]
  },
  {
    id: "sklearn-pipelines",
    unit: "l3u1",
    title: "scikit-learn and Pipelines",
    summary: "The fit and predict pattern behind every model, and pipelines that make preparation leak-proof.",
    minutes: 13,
    body: `
<p><strong>scikit-learn</strong> (imported as <code>sklearn</code>) is the standard Python library for classic machine learning. Its great gift is consistency: every model and every preparation step uses the same small set of methods. Learn the pattern once, and you can use dozens of algorithms.</p>

<h2>The estimator pattern</h2>
<p>Everything in scikit-learn is an <strong>estimator</strong>: an object you create, then <code>fit</code> to data.</p>
<pre><code>from sklearn.linear_model import LogisticRegression

model = LogisticRegression()       # 1. choose and configure
model.fit(X_train, y_train)        # 2. learn from training data
preds = model.predict(X_test)      # 3. predict on new data
score = model.score(X_test, y_test)  # 4. quick accuracy check</code></pre>
<ul>
  <li><code>X</code> is the table of features (one row per example); <code>y</code> is the target. Capital X because it's a matrix, small y because it's a single column, a convention from maths.</li>
  <li><strong>Models</strong> have <code>predict()</code>, and classifiers usually also have <code>predict_proba()</code>, giving a probability for each class.</li>
  <li><strong>Transformers</strong> (scalers, encoders, imputers) have <code>transform()</code>: they learn something in <code>fit</code> (like the mean) and apply it in <code>transform</code>.</li>
</ul>
<p>Settings you choose before training, like the number of trees in a forest, are called <strong>hyperparameters</strong> and go in the brackets when you create the estimator. Values the model learns during <code>fit</code>, such as its coefficients, are called <strong>parameters</strong> and appear afterwards as attributes ending in an underscore, like <code>coef_</code>.</p>

<h2>Why pipelines?</h2>
<p>A real model needs several steps: fill missing values, scale numbers, encode categories, then train. Doing these by hand is fiddly and invites leakage, because it's easy to fit a scaler on all the data by mistake. A <strong>Pipeline</strong> chains the steps into one object:</p>
<pre><code>from sklearn.pipeline import make_pipeline
pipe = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(), LogisticRegression())
pipe.fit(X_train, y_train)     # fits every step on training data only
pipe.predict(X_test)           # applies the learned steps, then predicts</code></pre>
<p>When you call <code>fit</code>, each step learns only from the training data; when you call <code>predict</code>, the same learned steps are applied to new data. Leakage from preparation becomes almost impossible, and the whole thing can be saved and deployed as one unit.</p>

<h2>Different columns, different steps</h2>
<p>Real tables mix numbers and categories. A <strong>ColumnTransformer</strong> sends each group of columns through its own preparation, then joins the results:</p>

<div data-widget="py" data-title="Try it: a complete pipeline"><textarea>
import pandas as pd
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Invented customer data: will they cancel (churn = 1)?
rng = np.random.default_rng(0)
n = 600
df = pd.DataFrame({
    "months": rng.integers(1, 60, n),
    "monthly_fee": rng.normal(30, 8, n).round(2),
    "support_calls": rng.poisson(1.5, n),
    "plan": rng.choice(["basic", "plus", "pro"], n),
})
risk = 0.5 - 0.09 * df["months"] + 0.9 * df["support_calls"] + (df["plan"] == "basic") * 1.2
df["churn"] = (rng.random(n) < 1 / (1 + np.exp(-risk))).astype(int)
df.loc[rng.choice(n, 30, replace=False), "monthly_fee"] = np.nan   # some gaps

X, y = df.drop(columns="churn"), df["churn"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, stratify=y, random_state=0)

prep = ColumnTransformer([
    ("num", make_pipeline(SimpleImputer(strategy="median"), StandardScaler()), ["months", "monthly_fee", "support_calls"]),
    ("cat", OneHotEncoder(handle_unknown="ignore"), ["plan"]),
])
pipe = Pipeline([("prep", prep), ("model", LogisticRegression())])
pipe.fit(X_train, y_train)

print("Baseline (always 'stays'):", round(1 - y_test.mean(), 3))
print("Pipeline accuracy:        ", round(pipe.score(X_test, y_test), 3))
print("\\nChurn probability for the first 3 test customers:")
print(pipe.predict_proba(X_test.head(3))[:, 1].round(2))
</textarea></div>
<p>Notice that the model is compared with the baseline straight away. Always do this: a number on its own means little.</p>

<h2>Saving a model</h2>
<p>A fitted pipeline can be saved to a file (commonly with the <code>joblib</code> library) and loaded later in an app or server to make predictions. Only load model files you trust: loading one can run code. Level 5 covers safer ways to package and serve models.</p>

<div class="callout"><b>Takeaway:</b> Every scikit-learn object follows the same pattern: create, fit, then predict or transform. Put all preparation and the model into one Pipeline, with a ColumnTransformer for mixed columns, so nothing leaks and the whole thing can be reused.</div>
`,
    terms: [
      ["scikit-learn", "The standard Python library for classic machine learning."],
      ["Estimator", "Any scikit-learn object that learns from data with fit()."],
      ["fit / predict / transform", "The core methods: learn from data, make predictions, or apply a learned preparation step."],
      ["predict_proba", "A classifier method that returns the probability of each class."],
      ["Hyperparameter", "A setting chosen before training, such as tree depth."],
      ["Parameter (model)", "A value the model learns during training, such as a coefficient."],
      ["Pipeline", "A chain of preparation steps and a model that is fitted and used as one object."],
      ["ColumnTransformer", "A scikit-learn tool that applies different preparation to different columns."],
      ["Imputer", "A transformer that fills in missing values."]
    ],
    quiz: [
      { q: "What does model.fit(X_train, y_train) do?", options: ["Makes predictions", "Learns the model's parameters from the training data", "Splits the data", "Saves the model"], answer: 1, explain: "fit is where learning happens." },
      { q: "Which method gives a classifier's probability for each class?", options: ["predict", "predict_proba", "transform", "score"], answer: 1, explain: "predict_proba returns probabilities." },
      { q: "The number of trees in a random forest is a…", options: ["Parameter learned from data", "Hyperparameter you choose", "Feature", "Target"], answer: 1, explain: "It's set before training." },
      { q: "What is the main benefit of a Pipeline?", options: ["It makes models more accurate automatically", "Preparation steps are fitted on training data only and everything is reused as one unit", "It removes the need for test data", "It draws charts"], answer: 1, explain: "Pipelines prevent leakage and simplify deployment." },
      { q: "What does a ColumnTransformer do?", options: ["Renames columns", "Applies different preparation to different groups of columns", "Deletes columns", "Sorts columns"], answer: 1, explain: "Numbers and categories get their own steps." },
      { q: "Why compare a model's accuracy with a baseline?", options: ["It's required by scikit-learn", "A score means little unless you know what doing nothing clever achieves", "Baselines are always better", "To save time"], answer: 1, explain: "Context makes the number meaningful." }
    ],
    sources: [
      ["scikit-learn: Getting started", "https://scikit-learn.org/stable/getting_started.html", "The estimator API in one page."],
      ["scikit-learn: Pipelines and composite estimators", "https://scikit-learn.org/stable/modules/compose.html", "Pipeline and ColumnTransformer."],
      ["scikit-learn: Model persistence", "https://scikit-learn.org/stable/model_persistence.html", "Saving models, and the security warning about loading them."],
      ["Pedregosa et al. (2011), Scikit-learn: Machine learning in Python, JMLR", "https://jmlr.org/papers/v12/pedregosa11a.html", "The paper introducing the library."],
      ["Buitinck et al. (2013), API design for machine learning software: experiences from the scikit-learn project", "https://arxiv.org/abs/1309.0238", "Why the fit/predict design works."]
    ]
  },

  /* ============================ UNIT 2 ============================ */
  {
    id: "linear-regression",
    unit: "l3u2",
    title: "Linear Regression",
    summary: "The oldest, clearest model: a weighted sum of features, how it's fitted, and how to read it.",
    minutes: 12,
    body: `
<p>In Level 1 you dragged a line through house prices by hand, and in Level 2 you saw gradient descent roll downhill. <strong>Linear regression</strong> is where those ideas become a real, widely used model. It's often the first model to try for predicting a number, and even when it isn't the most accurate, it's the easiest to understand.</p>

<h2>The model</h2>
<p>Linear regression predicts a number as a <strong>weighted sum</strong> of the features plus a constant:</p>
<p style="text-align:center"><em>prediction</em> = b + w₁ × feature₁ + w₂ × feature₂ + … </p>
<p>Each weight (called a <strong>coefficient</strong>) says how much the prediction changes when that feature goes up by one, holding the others fixed. The constant b is the <strong>intercept</strong>. For bike hire: hires = 300 + 28 × temperature − 260 × rain says each extra degree adds about 28 hires and rain removes about 260.</p>

<h2>How it's fitted</h2>
<p>The standard method, <strong>ordinary least squares</strong>, chooses the coefficients that make the sum of squared errors (the <strong>residuals</strong>) as small as possible. It goes back over two centuries, to Legendre and Gauss in the early 1800s. Unlike most models, it has an exact formula for the answer, though gradient descent finds the same line and is used when data is huge.</p>

<h2>How good is it?</h2>
<ul>
  <li><strong>MAE</strong> (mean absolute error): the average size of a mistake, in the target's own units. "Off by 54 bikes on average." Easy to explain.</li>
  <li><strong>RMSE</strong> (root mean squared error): like MAE but punishes big mistakes more.</li>
  <li><strong>R²</strong> (R-squared): the share of the variation in the target that the model explains. 1 is perfect; 0 is no better than always predicting the average; it can even go negative on test data if the model is worse than that.</li>
</ul>

<h2>Reading coefficients carefully</h2>
<p>Coefficients are the great attraction of linear models, but they need care:</p>
<ul>
  <li><strong>Units matter.</strong> A coefficient of 0.001 on income in pounds might be bigger in effect than 5 on number of children. To compare importance, standardise the features first.</li>
  <li><strong>Correlated features share credit.</strong> If two features move together (house size and number of rooms), the model can split the effect between them in odd ways, even giving one a negative sign.</li>
  <li><strong>Association, not cause.</strong> A coefficient describes the pattern in the data, not what would happen if you changed that feature, exactly as you learned in Level 2.</li>
</ul>

<h2>Bending the line</h2>
<p>"Linear" means linear in the weights, not that the world must be a straight line. Add features like temperature² and the model can fit a curve; add temperature × weekend and it can learn that warmth matters more at weekends. This is still linear regression, just with richer features. Push it too far, though, and you get overfitting, which lesson 11 covers.</p>

<h2>Always look at the residuals</h2>
<p>Plot the errors against the predictions. If they look like random noise, the model has captured the pattern. If they curve or fan out, there's structure left that the model has missed, for example a curved relationship or bigger errors for bigger values.</p>

<div data-widget="py" data-title="Try it: fit and read a linear model"><textarea>
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score

# The bike-hire data from Level 2's project
rng = np.random.default_rng(7); n = 400
df = pd.DataFrame({"temp_c": rng.normal(16, 7, n).round(1), "rain": rng.choice([0, 0, 0, 1], n),
                   "weekend": np.tile([0, 0, 0, 0, 0, 1, 1], 58)[:n]})
df["hires"] = (300 + 28 * df["temp_c"] - 260 * df["rain"] + 90 * df["weekend"] + rng.normal(0, 70, n)).round()

X, y = df[["temp_c", "rain", "weekend"]], df["hires"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=1)

model = LinearRegression().fit(X_train, y_train)
print("Intercept:", round(model.intercept_, 1))
for name, w in zip(X.columns, model.coef_):
    print(f"  {name:8} {w:+.1f}")

pred = model.predict(X_test)
print("\\nTest MAE:", round(mean_absolute_error(y_test, pred), 1), "bikes")
print("Test R² :", round(r2_score(y_test, pred), 3))
print("Baseline MAE (always predict the training average):",
      round(mean_absolute_error(y_test, np.full(len(y_test), y_train.mean())), 1))
</textarea></div>
<p>Because this data was generated by a known formula (300 + 28 × temp − 260 × rain + 90 × weekend, plus noise), you can check that the model has recovered coefficients close to the true ones. With real data you never know the truth, which is why test scores and baselines matter.</p>

<div class="callout"><b>Takeaway:</b> Linear regression predicts with a weighted sum, fitted by least squares. Judge it with MAE, RMSE and R² on test data, read coefficients with care, and check the residuals for patterns it missed.</div>
`,
    terms: [
      ["Linear regression", "A model that predicts a number as a weighted sum of features plus an intercept."],
      ["Coefficient", "The weight on a feature: how much the prediction changes per one-unit increase."],
      ["Intercept", "The constant term: the prediction when all features are zero."],
      ["Ordinary least squares", "Fitting by choosing coefficients that minimise the sum of squared errors."],
      ["Residual", "The difference between the true value and the model's prediction."],
      ["MAE", "Mean absolute error: the average size of the prediction errors."],
      ["RMSE", "Root mean squared error: an error measure that punishes large mistakes more."],
      ["R²", "The share of the target's variation explained by the model; 1 is perfect, 0 matches predicting the average."]
    ],
    quiz: [
      { q: "A model is: price = 50,000 + 3,000 × rooms. What does 3,000 mean?", options: ["Every house costs 3,000", "Each extra room adds about 3,000 to the predicted price", "There are 3,000 houses", "The error is 3,000"], answer: 1, explain: "That's the coefficient on rooms." },
      { q: "What does ordinary least squares minimise?", options: ["The number of features", "The sum of squared errors", "The intercept", "The R²"], answer: 1, explain: "Least squares means smallest sum of squared residuals." },
      { q: "A model has R² = 0 on the test set. What does that mean?", options: ["It is perfect", "It's no better than always predicting the average", "It has no features", "It overfits"], answer: 1, explain: "R² compares the model with predicting the mean." },
      { q: "Which error measure is easiest to explain to a manager in the target's units?", options: ["R²", "MAE", "Log loss", "Coefficient"], answer: 1, explain: "\"Off by 54 bikes on average.\"" },
      { q: "Why can't you compare raw coefficients to judge feature importance?", options: ["Coefficients are random", "Features are in different units, so standardise first", "Only the intercept matters", "You can always compare them"], answer: 1, explain: "A pound and a child aren't the same unit." },
      { q: "Residuals form a clear curve when plotted against predictions. What does that suggest?", options: ["The model is perfect", "There's a pattern the model has missed, such as a curved relationship", "The data is too small", "The test set leaked"], answer: 1, explain: "Good residuals look like random noise." }
    ],
    sources: [
      ["An Introduction to Statistical Learning with Python, chapter 3: Linear regression (free)", "https://www.statlearning.com/", "The textbook treatment."],
      ["scikit-learn: Linear models", "https://scikit-learn.org/stable/modules/linear_model.html", "Official documentation, including regularised variants."],
      ["scikit-learn: Regression metrics", "https://scikit-learn.org/stable/modules/model_evaluation.html", "MAE, RMSE and R²."],
      ["Google Machine Learning Crash Course: Linear regression", "https://developers.google.com/machine-learning/crash-course", "Interactive introduction."],
      ["Stigler (1981), Gauss and the invention of least squares, Annals of Statistics", "https://doi.org/10.1214/aos/1176345451", "The history of the method."]
    ]
  },
  {
    id: "logistic-regression",
    unit: "l3u2",
    title: "Logistic Regression",
    summary: "Turning a weighted sum into a probability: the standard first model for yes-or-no questions.",
    minutes: 12,
    body: `
<p>Linear regression predicts numbers. But many questions are yes or no: will this customer leave, is this email spam, does this scan show a tumour? <strong>Logistic regression</strong>, despite the name, is a <em>classification</em> model. It's fast, sturdy, easy to explain, and used everywhere from credit scoring to medicine. Beat it before reaching for anything fancier.</p>

<h2>From a score to a probability</h2>
<p>Logistic regression starts like linear regression, adding up weighted features to get a score. That score could be any number from minus to plus infinity, so it's passed through the <strong>sigmoid</strong> function (also called the logistic function), an S-shaped curve that squashes any number into the range 0 to 1:</p>
<ul>
  <li>A big negative score becomes nearly 0.</li>
  <li>A score of 0 becomes exactly 0.5.</li>
  <li>A big positive score becomes nearly 1.</li>
</ul>
<p>The output is the predicted probability of the "yes" class. You met this exact shape in Level 1's artificial neuron: a logistic regression is a single neuron.</p>

<h2>From probability to decision</h2>
<p>To get a yes/no answer you choose a <strong>threshold</strong>, usually 0.5 by default. But 0.5 is rarely the best choice. A cancer screening tool should flag at a much lower probability, because missing a case is far worse than a false alarm. Lesson 9 shows how to pick thresholds sensibly.</p>

<h2>How it learns: log loss</h2>
<p>Logistic regression is trained to minimise <strong>log loss</strong> (also called cross-entropy). It rewards confident correct answers and punishes confident wrong ones very heavily: saying "99% sure it's not spam" about a spam email costs far more than saying "60% sure". This same loss trains the classification layer of almost every neural network, including the part of a language model that picks the next word.</p>

<h2>Reading the coefficients</h2>
<p>A positive coefficient pushes the probability up; a negative one pushes it down. More precisely, each one-unit increase in a feature multiplies the <strong>odds</strong> (probability of yes divided by probability of no) by e raised to the coefficient. A coefficient of 0.69 roughly doubles the odds, because e<sup>0.69</sup> ≈ 2. This interpretability is why regulators and doctors like logistic models.</p>

<h2>Regularisation is on by default</h2>
<p>scikit-learn's <code>LogisticRegression</code> applies regularisation automatically, gently pulling coefficients towards zero to avoid overfitting. Its setting <code>C</code> controls this: a smaller C means stronger pulling. Because regularisation treats every coefficient alike, scale your features first, which a pipeline makes easy.</p>

<h2>More than two classes</h2>
<p>For three or more classes, the same idea extends using the <strong>softmax</strong> function, which turns a score for each class into probabilities that add up to 1. You'll see softmax again in Level 4, at the very end of every language model.</p>

<div data-widget="py" data-title="Try it: probabilities and odds"><textarea>
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

def sigmoid(z):
    return 1 / (1 + np.exp(-z))
print("sigmoid of -4, 0, 4:", sigmoid(np.array([-4, 0, 4])).round(3))

# Invented exam data: hours studied, hours slept -> passed?
rng = np.random.default_rng(5); n = 300
study = rng.uniform(0, 10, n); sleep = rng.uniform(4, 9, n)
p_true = sigmoid(-6 + 0.7 * study + 0.5 * sleep)
passed = (rng.random(n) < p_true).astype(int)
X = np.column_stack([study, sleep])

model = LogisticRegression().fit(X, passed)        # raw units, so coefficients are per hour
w_study, w_sleep = model.coef_[0]
print(f"\\nCoefficient per hour studied: {w_study:.2f} -> odds x {np.exp(w_study):.2f}")
print(f"Coefficient per hour slept:   {w_sleep:.2f} -> odds x {np.exp(w_sleep):.2f}")

for hours in [2, 5, 8]:
    p = model.predict_proba([[hours, 7]])[0, 1]
    print(f"Studied {hours}h, slept 7h: chance of passing {p:.0%}")
</textarea></div>

<div class="callout"><b>Takeaway:</b> Logistic regression adds up weighted features, squashes the score through a sigmoid into a probability, and learns by minimising log loss. Its coefficients change the odds, and the decision threshold is yours to choose.</div>
`,
    terms: [
      ["Logistic regression", "A classification model that turns a weighted sum of features into a probability with the sigmoid function."],
      ["Sigmoid (logistic) function", "An S-shaped function that squashes any number into the range 0 to 1."],
      ["Decision threshold", "The probability above which a classifier says yes."],
      ["Log loss (cross-entropy)", "A loss that heavily punishes confident wrong predictions; used to train classifiers."],
      ["Odds", "The probability of yes divided by the probability of no."],
      ["Regularisation", "A penalty that pulls coefficients towards zero to reduce overfitting."],
      ["Softmax", "A function that turns a score for each class into probabilities that sum to 1."]
    ],
    quiz: [
      { q: "Logistic regression is mainly used for…", options: ["Predicting numbers", "Classification, such as yes/no questions", "Clustering", "Drawing charts"], answer: 1, explain: "Despite its name, it's a classifier." },
      { q: "What does the sigmoid of 0 equal?", options: ["0", "0.5", "1", "Infinity"], answer: 1, explain: "The S-curve crosses 0.5 at zero." },
      { q: "Why might a cancer screening model use a threshold well below 0.5?", options: ["To be faster", "Because missing a real case is much worse than a false alarm", "Thresholds must be low", "To raise accuracy"], answer: 1, explain: "Set the threshold by the costs of each mistake." },
      { q: "Which prediction does log loss punish most?", options: ["60% sure and correct", "99% sure and wrong", "50% sure", "99% sure and correct"], answer: 1, explain: "Confident mistakes cost the most." },
      { q: "A coefficient of 0.69 in a logistic model means a one-unit increase…", options: ["Adds 0.69 to the probability", "Roughly doubles the odds", "Halves the odds", "Has no effect"], answer: 1, explain: "e to the power 0.69 is about 2." },
      { q: "Which function extends logistic regression to many classes?", options: ["Sigmoid", "Softmax", "Logarithm", "Median"], answer: 1, explain: "Softmax gives one probability per class, summing to 1." }
    ],
    sources: [
      ["An Introduction to Statistical Learning with Python, chapter 4: Classification", "https://www.statlearning.com/", "Logistic regression in depth."],
      ["scikit-learn: Logistic regression", "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression", "Options including regularisation strength C."],
      ["Google Machine Learning Crash Course: Logistic regression", "https://developers.google.com/machine-learning/crash-course", "Sigmoid and log loss explained."],
      ["Andrew Ng, Machine Learning Specialization, course 1 (classification week)", "https://www.coursera.org/specializations/machine-learning-introduction", "Video lessons on logistic regression."],
      ["Goodfellow, Bengio and Courville, Deep Learning, section 6.2 (cross-entropy and softmax)", "https://www.deeplearningbook.org/contents/mlp.html", "How the same loss trains neural networks."]
    ]
  },
  {
    id: "trees-forests",
    unit: "l3u2",
    title: "Decision Trees and Random Forests",
    summary: "Models that ask a chain of yes-or-no questions, and why a crowd of trees beats a single one.",
    minutes: 13,
    body: `
<p>Linear models assume each feature pushes the prediction up or down by a steady amount. Real patterns are often lumpier: "high risk if young <em>and</em> new customer, unless they have a guarantor". <strong>Decision trees</strong> capture such patterns naturally, and <strong>random forests</strong>, crowds of trees, are among the most reliable models ever invented for tables of data.</p>

<h2>A tree of questions</h2>
<p>A decision tree is a flowchart. Each <strong>node</strong> asks a yes/no question about one feature ("Is temperature above 12°C?"), each branch leads to another question, and each <strong>leaf</strong> at the bottom gives a prediction: a class for classification, or an average value for regression.</p>
<p>Trees are learned greedily, from the top down. At each node the algorithm tries every feature and every possible cut-point, and picks the question that best separates the data:</p>
<ul>
  <li>For classification, it seeks groups that are as <strong>pure</strong> as possible (mostly one class), measured with <strong>Gini impurity</strong> or <strong>entropy</strong>.</li>
  <li>For regression, it seeks groups whose values are as similar as possible (small squared error).</li>
</ul>
<p>Then it repeats inside each branch until a stopping rule kicks in.</p>

<h2>Strengths and the big weakness</h2>
<p>Trees handle mixed feature types, need no scaling, capture interactions and curves automatically, and a small tree can be read and explained by anyone. But a tree left to grow will keep splitting until every leaf holds a single training example: it memorises the training data perfectly and generalises badly. Small changes in the data can also produce a completely different tree. Limiting <strong>max depth</strong> or the <strong>minimum samples per leaf</strong> helps, but a single tree is rarely the most accurate model.</p>

<h2>Random forests: the wisdom of crowds</h2>
<p>In 2001, Leo Breiman published the <strong>random forest</strong>, a simple idea that works remarkably well. Grow hundreds of deep trees, each one deliberately different:</p>
<ol>
  <li>Each tree trains on a random <strong>bootstrap sample</strong>: rows drawn at random with replacement, so some appear twice and some not at all. (Training on resampled copies and averaging is called <strong>bagging</strong>.)</li>
  <li>At each split, each tree may only consider a random subset of the features.</li>
  <li>To predict, all trees vote (classification) or are averaged (regression).</li>
</ol>
<p>Each tree overfits in its own way, but their errors are partly independent, so averaging cancels much of the noise. A forest is far more accurate and stable than any single tree, works well with little tuning, and is a strong default choice for tabular data.</p>

<h2>Feature importance, with a warning</h2>
<p>Forests report how much each feature reduced impurity across all their splits. This is handy but biased: it tends to favour features with many unique values (like IDs or continuous numbers). <strong>Permutation importance</strong>, which you'll meet in lesson 14, is a more trustworthy check.</p>

<div data-widget="py" data-title="Try it: one tree versus a forest"><textarea>
import numpy as np
from sklearn.datasets import make_moons
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.ensemble import RandomForestClassifier

X, y = make_moons(n_samples=600, noise=0.3, random_state=0)   # two interleaved half-moons
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)

for depth in [2, 5, None]:
    tree = DecisionTreeClassifier(max_depth=depth, random_state=0).fit(X_train, y_train)
    print(f"Tree, max_depth={str(depth):4}: train {tree.score(X_train, y_train):.2f}   test {tree.score(X_test, y_test):.2f}")

forest = RandomForestClassifier(n_estimators=300, random_state=0).fit(X_train, y_train)
print(f"Random forest (300 trees): train {forest.score(X_train, y_train):.2f}   test {forest.score(X_test, y_test):.2f}")

print("\\nThe depth-2 tree, as readable rules:")
small = DecisionTreeClassifier(max_depth=2, random_state=0).fit(X_train, y_train)
print(export_text(small, feature_names=["x1", "x2"]))
</textarea></div>
<p>The unlimited tree scores a perfect 1.00 on training data but noticeably worse on test data: classic overfitting. The forest's trees are just as deep, yet averaging them gives a better test score than any single tree.</p>

<div class="callout"><b>Takeaway:</b> A decision tree is a learned flowchart: readable, flexible, but prone to overfitting. A random forest averages hundreds of varied trees, trading some readability for much better accuracy and stability.</div>
`,
    terms: [
      ["Decision tree", "A model that predicts by following a learned flowchart of yes/no questions about features."],
      ["Leaf", "An end point of a tree, holding a prediction."],
      ["Gini impurity", "A measure of how mixed the classes in a group are; trees split to reduce it."],
      ["Max depth", "The largest number of questions from the top of a tree to a leaf."],
      ["Bootstrap sample", "A random sample of rows drawn with replacement, the same size as the original."],
      ["Bagging", "Training models on bootstrap samples and averaging their predictions."],
      ["Random forest", "An ensemble of many decision trees, each trained on a bootstrap sample with random feature choices."],
      ["Ensemble", "A model that combines the predictions of several models."]
    ],
    quiz: [
      { q: "How does a decision tree make a prediction?", options: ["By a weighted sum", "By following a chain of yes/no questions to a leaf", "By measuring distance to neighbours", "At random"], answer: 1, explain: "It's a learned flowchart." },
      { q: "A tree with no depth limit scores 100% on training data and 78% on test data. This is…", options: ["Underfitting", "Overfitting", "Leakage", "Perfect"], answer: 1, explain: "It memorised the training data." },
      { q: "Which preparation step do trees NOT need?", options: ["Train-test split", "Feature scaling", "Handling the target", "Any data"], answer: 1, explain: "Trees only compare values with thresholds." },
      { q: "What makes the trees in a random forest different from each other?", options: ["Different targets", "Bootstrap samples of rows and random subsets of features at each split", "Different test sets", "They are identical"], answer: 1, explain: "Deliberate randomness makes their errors partly independent." },
      { q: "Why does averaging many overfitted trees work?", options: ["It doesn't", "Their errors partly cancel out, leaving the shared signal", "It makes each tree shallower", "It removes outliers"], answer: 1, explain: "That's the power of an ensemble." },
      { q: "What is a known weakness of a forest's built-in feature importance?", options: ["It's always zero", "It can favour features with many unique values", "It needs scaling", "It only works for regression"], answer: 1, explain: "Permutation importance is a more reliable check." }
    ],
    sources: [
      ["Breiman (2001), Random Forests, Machine Learning journal", "https://doi.org/10.1023/A:1010933404324", "The original random forest paper."],
      ["scikit-learn: Decision trees", "https://scikit-learn.org/stable/modules/tree.html", "How trees are grown and limited."],
      ["scikit-learn: Ensembles (random forests and more)", "https://scikit-learn.org/stable/modules/ensemble.html", "Forests, bagging and feature importance."],
      ["An Introduction to Statistical Learning with Python, chapter 8: Tree-based methods", "https://www.statlearning.com/", "Trees, bagging, forests and boosting."],
      ["Hastie, Tibshirani and Friedman, The Elements of Statistical Learning (free PDF)", "https://hastie.su.domains/ElemStatLearn/", "The advanced reference text."]
    ]
  },
  {
    id: "gradient-boosting",
    unit: "l3u2",
    title: "Gradient Boosting",
    summary: "Trees that learn from each other's mistakes: the model that wins most contests on tabular data.",
    minutes: 12,
    body: `
<p>A random forest grows its trees independently and averages them. <strong>Boosting</strong> takes the opposite approach: grow trees <em>one after another</em>, each one trying to fix the mistakes of the trees before it. Gradient-boosted trees are, for tables of business and scientific data, very often the most accurate model you can build.</p>

<h2>Learning from mistakes</h2>
<p>Here's the idea for predicting a number:</p>
<ol>
  <li>Start with a simple guess, such as the average.</li>
  <li>Work out the errors (residuals) on the training data.</li>
  <li>Fit a small tree to predict those errors.</li>
  <li>Add a fraction of that tree's output to the model. That fraction is the <strong>learning rate</strong>.</li>
  <li>Repeat hundreds or thousands of times.</li>
</ol>
<p>Each new tree is small, often just a few levels deep (a "weak learner"), but together they build a very precise model. The "gradient" in the name comes from the fact that fitting the residuals is gradient descent in disguise: each tree takes a step downhill on the loss, just like the ball in Level 2. Jerome Friedman set out this general framework in 2001, and it works with almost any loss: squared error for numbers, log loss for classes, and specialised ones for ranking.</p>

<h2>The famous libraries</h2>
<p>Modern implementations add speed and clever tricks:</p>
<ul>
  <li><strong>XGBoost</strong> (2014, described in a 2016 paper) made boosting fast and scalable and became famous for winning data science competitions.</li>
  <li><strong>LightGBM</strong> (Microsoft) and <strong>CatBoost</strong> (Yandex) are other popular options; CatBoost handles categories especially well.</li>
  <li>scikit-learn's own <code>HistGradientBoostingClassifier</code> and <code>HistGradientBoostingRegressor</code> use the same fast "histogram" approach and handle missing values natively.</li>
</ul>

<h2>Why not deep learning for tables?</h2>
<p>Deep learning dominates images, sound and text. But on typical tabular data, well-tuned tree ensembles still very often match or beat neural networks, as a 2022 study by Léo Grinsztajn and colleagues showed across dozens of datasets. Trees cope better with features that matter unequally, irregular patterns and uninformative columns. So for a spreadsheet-shaped problem, try gradient boosting early.</p>

<h2>The key settings</h2>
<div class="table-scroll"><table>
  <tr><th>Setting</th><th>Effect</th></tr>
  <tr><td>Number of trees</td><td>More trees fit the training data more closely; too many overfits.</td></tr>
  <tr><td>Learning rate</td><td>Smaller steps need more trees but usually generalise better. Typical values: 0.01 to 0.3.</td></tr>
  <tr><td>Tree depth / leaves</td><td>How complex each tree may be. Shallow trees are the norm.</td></tr>
  <tr><td>Early stopping</td><td>Stop adding trees once the validation score stops improving. Usually the single most useful protection against overfitting.</td></tr>
</table></div>

<div data-widget="py" data-title="Try it: forest versus boosting"><textarea>
import numpy as np
from sklearn.datasets import make_friedman1
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor, HistGradientBoostingRegressor
from sklearn.metrics import mean_absolute_error

# A standard synthetic benchmark with curves and interactions (Friedman, 1991)
X, y = make_friedman1(n_samples=2000, noise=1.0, random_state=0)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)

models = {
    "Linear regression": LinearRegression(),
    "Random forest": RandomForestRegressor(n_estimators=200, random_state=0),
    "Gradient boosting": HistGradientBoostingRegressor(learning_rate=0.1, max_iter=500,
                                                       early_stopping=True, random_state=0),
}
for name, m in models.items():
    m.fit(X_train, y_train)
    print(f"{name:18} test MAE {mean_absolute_error(y_test, m.predict(X_test)):.2f}")

gb = models["Gradient boosting"]
print("\\nTrees actually used after early stopping:", gb.n_iter_)
</textarea></div>
<p>The linear model can't capture the curves and interactions in this data. The forest does much better, and boosting typically does best. Early stopping chose the number of trees for you.</p>

<div class="callout"><b>Takeaway:</b> Gradient boosting adds small trees one at a time, each correcting the last, which is gradient descent on the loss. For tabular data it is often the strongest model; control it with the learning rate, tree size and early stopping.</div>
`,
    terms: [
      ["Boosting", "Building an ensemble one model at a time, each focusing on the previous models' mistakes."],
      ["Gradient boosting", "Boosting in which each new tree fits the errors of the current model, a form of gradient descent."],
      ["Weak learner", "A simple model, such as a shallow tree, that is only slightly better than guessing on its own."],
      ["Learning rate (boosting)", "How much of each new tree's output is added to the model."],
      ["Early stopping", "Stopping training when the validation score stops improving."],
      ["XGBoost", "A fast, widely used gradient boosting library."],
      ["Tabular data", "Data in tables of rows and columns, like spreadsheets and databases."]
    ],
    quiz: [
      { q: "How does boosting differ from a random forest?", options: ["Boosting uses no trees", "Boosting grows trees one after another, each fixing earlier mistakes; forests grow them independently", "They're identical", "Forests are sequential"], answer: 1, explain: "Sequential correction versus independent averaging." },
      { q: "In gradient boosting, what does each new tree try to predict?", options: ["The original target from scratch", "The errors left by the current model", "Random noise", "The test set"], answer: 1, explain: "It fits the residuals." },
      { q: "What does a smaller learning rate usually require?", options: ["Fewer trees", "More trees, often with better generalisation", "No validation set", "Deeper trees only"], answer: 1, explain: "Smaller steps, more of them." },
      { q: "What does early stopping do?", options: ["Stops training when the validation score stops improving", "Stops after one tree", "Deletes bad trees", "Stops the test set being used"], answer: 0, explain: "It's the main guard against overfitting." },
      { q: "For a typical spreadsheet of customer data, which model family should you try early?", options: ["Large language models", "Gradient-boosted trees", "Image classifiers", "Clustering only"], answer: 1, explain: "Tree ensembles are very strong on tabular data." },
      { q: "Why is it called \"gradient\" boosting?", options: ["It uses colour gradients", "Fitting the errors is a form of gradient descent on the loss", "It was invented by Gradient Inc.", "It only works on slopes"], answer: 1, explain: "Each tree takes a step downhill." }
    ],
    sources: [
      ["Friedman (2001), Greedy function approximation: a gradient boosting machine, Annals of Statistics", "https://doi.org/10.1214/aos/1013203451", "The paper that set out gradient boosting."],
      ["Chen and Guestrin (2016), XGBoost: A scalable tree boosting system", "https://arxiv.org/abs/1603.02754", "The XGBoost paper."],
      ["Grinsztajn, Oyallon and Varoquaux (2022), Why do tree-based models still outperform deep learning on tabular data?", "https://arxiv.org/abs/2207.08815", "The benchmark study mentioned in this lesson."],
      ["scikit-learn: Histogram-based gradient boosting", "https://scikit-learn.org/stable/modules/ensemble.html#histogram-based-gradient-boosting", "Options including early stopping and missing values."],
      ["An Introduction to Statistical Learning with Python, chapter 8.2: Boosting", "https://www.statlearning.com/", "Textbook explanation."]
    ]
  },

  /* ============================ UNIT 3 ============================ */
  {
    id: "choosing-metrics",
    unit: "l3u3",
    title: "Choosing the Right Metric",
    summary: "The confusion matrix, precision and recall, ROC and PR curves, and matching the metric to the real cost of mistakes.",
    minutes: 13,
    body: `
<p>Level 1 introduced accuracy, precision and recall. Now you'll use them like a professional. The metric you optimise decides what your model gets good at, so choosing it is one of the most important decisions in a project, and it should come from the real-world cost of each kind of mistake.</p>

<h2>The confusion matrix</h2>
<p>For a yes/no classifier, every prediction lands in one of four boxes:</p>
<div class="table-scroll"><table>
  <tr><th></th><th>Predicted yes</th><th>Predicted no</th></tr>
  <tr><th>Actually yes</th><td><strong>True positive (TP)</strong></td><td><strong>False negative (FN)</strong>: a miss</td></tr>
  <tr><th>Actually no</th><td><strong>False positive (FP)</strong>: a false alarm</td><td><strong>True negative (TN)</strong></td></tr>
</table></div>
<p>Every classification metric is built from these four counts:</p>
<ul>
  <li><strong>Accuracy</strong> = (TP + TN) ÷ everything. Misleading when classes are imbalanced.</li>
  <li><strong>Precision</strong> = TP ÷ (TP + FP). Of the cases we flagged, how many were real?</li>
  <li><strong>Recall</strong> (sensitivity) = TP ÷ (TP + FN). Of the real cases, how many did we catch?</li>
  <li><strong>Specificity</strong> = TN ÷ (TN + FP). Of the real negatives, how many did we correctly leave alone?</li>
  <li><strong>F1 score</strong>: the harmonic mean of precision and recall, high only when both are high.</li>
</ul>

<h2>The threshold trade-off</h2>
<p>Most classifiers output a probability, and you choose the threshold. Lower it and you catch more real cases (recall up) but raise more false alarms (precision down). Raise it and the opposite happens. There's no free lunch: you pick the balance that suits the problem.</p>

<div data-widget="pr-tradeoff"></div>

<h2>Curves: judging all thresholds at once</h2>
<ul>
  <li>The <strong>ROC curve</strong> plots recall (true positive rate) against the false positive rate at every threshold. The area under it, <strong>ROC AUC</strong>, is the chance the model ranks a random positive above a random negative: 0.5 is guessing, 1.0 is perfect.</li>
  <li>The <strong>precision-recall curve</strong> plots precision against recall. When positives are rare, as in fraud or disease screening, it is more revealing than ROC, because ROC can look excellent even when most flagged cases are false alarms. Its summary is <strong>average precision</strong>.</li>
</ul>

<h2>Regression metrics, revisited</h2>
<p>MAE treats every unit of error the same; RMSE punishes big misses more; <strong>MAPE</strong> gives a percentage error but behaves badly when true values are near zero. If under-predicting is worse than over-predicting (running out of stock versus holding extra), consider asymmetric losses or <strong>quantile</strong> predictions, such as "the number we'll stay under 90% of the time".</p>

<h2>Match the metric to the mistake</h2>
<div class="table-scroll"><table>
  <tr><th>Situation</th><th>Costlier mistake</th><th>Focus on</th></tr>
  <tr><td>Cancer screening, followed by a doctor's check</td><td>Missing a case</td><td>High recall</td></tr>
  <tr><td>Spam filter</td><td>Hiding a real email</td><td>High precision</td></tr>
  <tr><td>Fraud alerts reviewed by a small team</td><td>Wasting the team's limited time</td><td>Precision among the top-ranked alerts</td></tr>
  <tr><td>Ranking search results</td><td>Bad results at the top</td><td>Ranking metrics for the first few results</td></tr>
</table></div>

<div data-widget="sort" data-set="which-metric"></div>

<div data-widget="py" data-title="Try it: the full report"><textarea>
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix, classification_report, roc_auc_score, average_precision_score

# 5% positives, like a fraud or disease problem
X, y = make_classification(n_samples=4000, n_features=10, weights=[0.95], class_sep=0.8, random_state=1)
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=1)
proba = LogisticRegression(max_iter=1000).fit(X_train, y_train).predict_proba(X_test)[:, 1]

for t in [0.5, 0.2]:
    pred = (proba >= t).astype(int)
    print(f"Threshold {t}: confusion matrix [[TN FP] [FN TP]] =", confusion_matrix(y_test, pred).tolist())
print()
print(classification_report(y_test, (proba >= 0.2).astype(int), digits=2))
print("ROC AUC:          ", round(roc_auc_score(y_test, proba), 3))
print("Average precision:", round(average_precision_score(y_test, proba), 3), "(guessing would score about", round(y_test.mean(), 3), ")")
</textarea></div>

<div class="callout"><b>Takeaway:</b> Build metrics from the confusion matrix, set the threshold from the real costs of misses and false alarms, use precision-recall measures when positives are rare, and always report more than accuracy.</div>
`,
    terms: [
      ["Confusion matrix", "A table counting true positives, false positives, false negatives and true negatives."],
      ["False positive", "A false alarm: predicting yes when the answer is no."],
      ["False negative", "A miss: predicting no when the answer is yes."],
      ["Precision", "Of the cases flagged as positive, the share that really are."],
      ["Recall (sensitivity)", "Of the real positive cases, the share the model caught."],
      ["Specificity", "Of the real negative cases, the share correctly identified as negative."],
      ["F1 score", "The harmonic mean of precision and recall."],
      ["ROC AUC", "The area under the ROC curve: the chance a random positive is ranked above a random negative."],
      ["Precision-recall curve", "A plot of precision against recall at every threshold; most informative when positives are rare."]
    ],
    quiz: [
      { q: "A model flags 100 transactions as fraud and 30 really are. What is its precision?", options: ["30%", "70%", "100%", "It can't be calculated"], answer: 0, explain: "30 true positives out of 100 flagged." },
      { q: "There were 50 real frauds and the model caught 30. What is its recall?", options: ["30%", "50%", "60%", "100%"], answer: 2, explain: "30 caught out of 50 real cases." },
      { q: "Lowering the decision threshold usually…", options: ["Raises precision and lowers recall", "Raises recall and lowers precision", "Changes nothing", "Raises both"], answer: 1, explain: "You catch more, with more false alarms." },
      { q: "What does a ROC AUC of 0.5 mean?", options: ["Perfect ranking", "No better than random guessing", "Half the data is positive", "50% accuracy"], answer: 1, explain: "It's the coin-flip line." },
      { q: "Positives are very rare (0.5%). Which is usually more informative?", options: ["Accuracy", "The precision-recall curve or average precision", "R²", "MAE"], answer: 1, explain: "ROC and accuracy can look great while most alerts are false." },
      { q: "A spam filter should prioritise…", options: ["Recall above all", "Precision, so real emails aren't hidden", "Accuracy only", "Specificity of zero"], answer: 1, explain: "A false positive here means a lost real email." }
    ],
    sources: [
      ["scikit-learn: Metrics and scoring", "https://scikit-learn.org/stable/modules/model_evaluation.html", "Every metric in this lesson, with definitions."],
      ["Google Machine Learning Crash Course: Classification (thresholds, confusion matrix, ROC and AUC)", "https://developers.google.com/machine-learning/crash-course/classification", "Interactive explanations."],
      ["Saito and Rehmsmeier (2015), The precision-recall plot is more informative than the ROC plot when evaluating binary classifiers on imbalanced datasets, PLOS ONE", "https://doi.org/10.1371/journal.pone.0118432", "Evidence for using PR curves with rare positives."],
      ["Fawcett (2006), An introduction to ROC analysis, Pattern Recognition Letters", "https://doi.org/10.1016/j.patrec.2005.10.010", "The classic ROC tutorial."],
      ["An Introduction to Statistical Learning with Python, section 4.4", "https://www.statlearning.com/", "Error types and ROC curves."]
    ]
  },
  {
    id: "cv-tuning",
    unit: "l3u3",
    title: "Cross-Validation and Tuning",
    summary: "Getting reliable scores from limited data, and searching for the best settings without fooling yourself.",
    minutes: 12,
    body: `
<p>A single train/validation split gives you one score, and with modest data that score depends a lot on which rows happened to land where. <strong>Cross-validation</strong> gives a steadier estimate by repeating the split several ways. It's also the standard tool for <strong>tuning</strong>: choosing hyperparameters such as tree depth or learning rate.</p>

<h2>k-fold cross-validation</h2>
<ol>
  <li>Cut the training data into k equal parts called <strong>folds</strong> (5 or 10 is typical).</li>
  <li>Train on k − 1 folds and score on the one left out.</li>
  <li>Repeat k times, so every fold is held out exactly once.</li>
  <li>Report the average score <em>and</em> its spread.</li>
</ol>
<p>The spread is valuable. If scores across folds range from 0.71 to 0.89, a difference of 0.01 between two models means nothing. Use <strong>stratified</strong> folds for classification, <strong>group</strong> folds when rows belong to the same person or entity, and <strong>time-series</strong> splits (always training on the past, scoring on the future) for anything time-ordered.</p>

<h2>Tuning hyperparameters</h2>
<ul>
  <li><strong>Grid search</strong> tries every combination from lists you give it. Simple, but the number of combinations explodes: 5 values each of 4 settings is 625 models, times 5 folds.</li>
  <li><strong>Random search</strong> tries random combinations. Bergstra and Bengio showed in 2012 that it usually finds good settings far faster than a grid, because typically only a few settings really matter.</li>
  <li><strong>Bayesian optimisation</strong> (in libraries such as Optuna) uses past results to choose promising settings next. Efficient for expensive models.</li>
  <li><strong>Successive halving</strong> starts many candidates on a little data and gives more data only to the best.</li>
</ul>

<h2>Don't fool yourself</h2>
<p>When you try hundreds of settings and pick the best cross-validation score, that best score is optimistic: some of it is luck. So:</p>
<ul>
  <li>Keep the test set out of tuning entirely, and evaluate the final choice on it once.</li>
  <li>Put all preparation inside a pipeline so it's refitted within each fold. Scaling or imputing before cross-validation leaks information between folds.</li>
  <li>For a rigorous estimate of a whole tuning procedure, <strong>nested cross-validation</strong> runs tuning inside each outer fold.</li>
  <li>Prefer a simpler model when scores are within the noise.</li>
</ul>
<p>Tuning usually gives modest gains. Better features, more or cleaner data, and the right metric typically matter more than squeezing out the last percent with settings.</p>

<div data-widget="py" data-title="Try it: cross-validate and tune"><textarea>
import numpy as np
from sklearn.datasets import make_moons
from sklearn.model_selection import cross_val_score, GridSearchCV, train_test_split
from sklearn.tree import DecisionTreeClassifier

X, y = make_moons(n_samples=500, noise=0.35, random_state=2)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=2)

scores = cross_val_score(DecisionTreeClassifier(max_depth=3, random_state=0), X_train, y_train, cv=5)
print("5 fold scores:", scores.round(2), "-> mean", scores.mean().round(3), "+/-", scores.std().round(3))

search = GridSearchCV(DecisionTreeClassifier(random_state=0),
                      {"max_depth": [1, 2, 3, 4, 6, 8, None], "min_samples_leaf": [1, 5, 20]},
                      cv=5)
search.fit(X_train, y_train)
print("\\nBest settings:", search.best_params_)
print("Best cross-validation score:", round(search.best_score_, 3))
print("Score on the untouched test set:", round(search.score(X_test, y_test), 3))
</textarea></div>
<p>Compare the best cross-validation score with the test score. They're usually close. On average the best-of-many score is a little optimistic, but with small datasets the test score can land on either side of it, which is another reminder that small differences are noise.</p>

<div class="callout"><b>Takeaway:</b> Cross-validation averages several train/validation splits for a steadier score and shows its spread. Tune with random or smarter search inside cross-validation, keep preparation in a pipeline, and touch the test set only once.</div>
`,
    terms: [
      ["Cross-validation", "Estimating performance by training and scoring on several different splits of the data."],
      ["Fold", "One of the k equal parts the data is divided into for cross-validation."],
      ["k-fold cross-validation", "Holding out each of k folds in turn and averaging the scores."],
      ["Hyperparameter tuning", "Searching for the settings that give the best validation performance."],
      ["Grid search", "Trying every combination of listed hyperparameter values."],
      ["Random search", "Trying random combinations of hyperparameter values; often more efficient than a grid."],
      ["Bayesian optimisation", "Choosing the next settings to try based on the results so far."],
      ["Nested cross-validation", "Running tuning inside each fold of an outer cross-validation to get an unbiased estimate."]
    ],
    quiz: [
      { q: "In 5-fold cross-validation, how many times is a model trained?", options: ["Once", "5 times", "10 times", "25 times"], answer: 1, explain: "Once per held-out fold." },
      { q: "Why report the spread of cross-validation scores?", options: ["It looks impressive", "It shows how much the score varies, so you can tell whether differences are meaningful", "It's required by law", "It replaces the test set"], answer: 1, explain: "Small differences inside the spread are noise." },
      { q: "Which split should you use for monthly sales forecasting?", options: ["Random k-fold", "Time-series splits that train on the past and score on the future", "Leave one out", "No split"], answer: 1, explain: "Respect the time order." },
      { q: "Why is random search often better than a large grid?", options: ["It's always exact", "Usually only a few settings matter, and random search explores them more widely for the same budget", "Grids are illegal", "It needs no data"], answer: 1, explain: "Bergstra and Bengio, 2012." },
      { q: "Why is the best tuning score slightly optimistic?", options: ["Computers round up", "Picking the best of many tries includes some luck", "Cross-validation is biased downward", "It isn't"], answer: 1, explain: "Hence one final check on the untouched test set." },
      { q: "You scale the whole training set, then cross-validate. What's wrong?", options: ["Nothing", "Each fold's scaler has seen its held-out data: preparation should be inside a pipeline", "Scaling breaks trees", "Cross-validation needs unscaled data"], answer: 1, explain: "A pipeline refits preparation within each fold." }
    ],
    sources: [
      ["scikit-learn: Cross-validation", "https://scikit-learn.org/stable/modules/cross_validation.html", "k-fold, stratified, group and time-series splits."],
      ["scikit-learn: Tuning the hyper-parameters of an estimator", "https://scikit-learn.org/stable/modules/grid_search.html", "Grid, random and successive halving search."],
      ["Bergstra and Bengio (2012), Random search for hyper-parameter optimization, JMLR", "https://jmlr.org/papers/v13/bergstra12a.html", "Why random search beats grids."],
      ["Akiba et al. (2019), Optuna: A next-generation hyperparameter optimization framework", "https://arxiv.org/abs/1907.10902", "A popular tuning library."],
      ["Cawley and Talbot (2010), On over-fitting in model selection and subsequent selection bias in performance evaluation, JMLR", "https://jmlr.org/papers/v11/cawley10a.html", "Why tuning scores are optimistic, and nested cross-validation."],
      ["Hyndman and Athanasopoulos, Forecasting: Principles and Practice (3rd ed.), free online", "https://otexts.com/fpp3/", "Time-series cross-validation."]
    ]
  },
  {
    id: "overfitting-regularisation",
    unit: "l3u3",
    title: "Overfitting, Regularisation and Bias-Variance",
    summary: "Why models that are too simple or too flexible both fail, and the tools that find the sweet spot.",
    minutes: 13,
    body: `
<p>Level 1 introduced <strong>overfitting</strong>: memorising the training data instead of learning the pattern. Now you'll see why it happens, how to spot it, and the toolkit for controlling it. This is the central balancing act of machine learning.</p>

<h2>Underfitting and overfitting</h2>
<ul>
  <li><strong>Underfitting</strong>: the model is too simple to capture the pattern. Both training and validation scores are poor. A straight line through a curved relationship.</li>
  <li><strong>Overfitting</strong>: the model is so flexible it also learns the noise. The training score is excellent, the validation score much worse.</li>
</ul>
<p>The gap between training and validation performance is your main diagnostic.</p>

<div data-widget="overfit"></div>

<h2>The bias-variance trade-off</h2>
<p>Statisticians split a model's expected error into parts:</p>
<ul>
  <li><strong>Bias</strong>: error from wrong assumptions, such as assuming a straight line. High bias means underfitting.</li>
  <li><strong>Variance</strong>: error from being too sensitive to the particular training sample. Train on a slightly different sample and you'd get a very different model. High variance means overfitting.</li>
  <li><strong>Noise</strong>: randomness in the data that no model can predict.</li>
</ul>
<p>More flexible models lower bias but raise variance. The best model sits where the total is smallest. (Very large neural networks sometimes behave in surprising ways here, a phenomenon called "double descent" that you'll meet in Level 4, but for classic models this picture holds well.)</p>

<h2>Learning curves</h2>
<p>Plot training and validation scores as the training set grows. If both are low and close together, you're underfitting: use a more flexible model or better features; more data won't help much. If there's a big gap that narrows as data grows, you're overfitting, and more data will help.</p>

<h2>The anti-overfitting toolkit</h2>
<ul>
  <li><strong>More data</strong>: the most reliable cure for variance.</li>
  <li><strong>Simpler models</strong>: fewer features, shallower trees, lower polynomial degree.</li>
  <li><strong>Regularisation</strong>: add a penalty for complexity to the loss.
    <ul>
      <li><strong>L2 (ridge)</strong> penalises the sum of squared coefficients, shrinking them all smoothly.</li>
      <li><strong>L1 (lasso)</strong> penalises the sum of absolute coefficients, which pushes many exactly to zero, effectively selecting features.</li>
      <li><strong>Elastic net</strong> mixes the two.</li>
    </ul>
  </li>
  <li><strong>Early stopping</strong>: stop training when the validation score stops improving.</li>
  <li><strong>Ensembles</strong>: averaging (as in random forests) reduces variance.</li>
  <li>In neural networks: <strong>dropout</strong>, data augmentation and weight decay (L2 by another name), all in Level 4.</li>
</ul>
<p>The strength of regularisation is itself a hyperparameter, found by cross-validation.</p>

<div data-widget="py" data-title="Try it: tame a wiggly model with ridge"><textarea>
import numpy as np
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

rng = np.random.default_rng(4)
x = rng.uniform(-3, 3, 40).reshape(-1, 1)
y = np.sin(x).ravel() + rng.normal(0, 0.3, 40)
x_tr, x_te, y_tr, y_te = train_test_split(x, y, test_size=0.5, random_state=0)

def report(name, model):
    model.fit(x_tr, y_tr)
    tr = mean_squared_error(y_tr, model.predict(x_tr)); te = mean_squared_error(y_te, model.predict(x_te))
    print(f"{name:29} train MSE {tr:.3f}   test MSE {te:,.3f}")

report("degree 1 (underfits)", make_pipeline(PolynomialFeatures(1), LinearRegression()))
report("degree 4", make_pipeline(PolynomialFeatures(4), LinearRegression()))
report("degree 15 (overfits)", make_pipeline(PolynomialFeatures(15), StandardScaler(), LinearRegression()))
for alpha in [0.001, 0.1, 10]:
    report(f"degree 15 + ridge alpha={alpha}", make_pipeline(PolynomialFeatures(15), StandardScaler(), Ridge(alpha=alpha)))
</textarea></div>
<p>The degree-15 model has the lowest training error and a catastrophic test error: its wild curve shoots off between and beyond the training points. Adding ridge regularisation keeps the same flexible features but stops the coefficients going wild, bringing the test error right back down. Push alpha too high and the model underfits again.</p>

<div class="callout"><b>Takeaway:</b> Too simple underfits (high bias); too flexible overfits (high variance). Watch the gap between training and validation scores, use learning curves to decide whether more data will help, and control complexity with simpler models, regularisation, early stopping and ensembles.</div>
`,
    terms: [
      ["Underfitting", "A model too simple to capture the pattern; poor on training and validation data."],
      ["Overfitting", "A model that learns noise in the training data; good on training data, worse on new data."],
      ["Bias (statistical)", "Error from a model's simplifying assumptions."],
      ["Variance (model)", "Error from a model being too sensitive to the particular training sample."],
      ["Bias-variance trade-off", "Making a model more flexible lowers bias but raises variance; the best model balances the two."],
      ["Learning curve", "A plot of training and validation scores as the amount of training data grows."],
      ["Ridge (L2) regularisation", "A penalty on squared coefficients that shrinks them smoothly."],
      ["Lasso (L1) regularisation", "A penalty on absolute coefficients that pushes many to exactly zero."],
      ["Polynomial features", "Extra features such as x² and x³ that let a linear model fit curves."]
    ],
    quiz: [
      { q: "Training accuracy 99%, validation accuracy 71%. What's happening?", options: ["Underfitting", "Overfitting", "A perfect model", "Leakage into training"], answer: 1, explain: "A big gap means the model learned noise." },
      { q: "Training and validation scores are both poor and close together. What should you try?", options: ["More data only", "A more flexible model or better features", "Stronger regularisation", "Delete the validation set"], answer: 1, explain: "That's underfitting." },
      { q: "High variance means…", options: ["The model barely changes with different training data", "The model changes a lot with different training samples", "The target varies", "The model is too simple"], answer: 1, explain: "It's too sensitive to the particular sample." },
      { q: "Which regularisation tends to set some coefficients exactly to zero?", options: ["Ridge (L2)", "Lasso (L1)", "Early stopping", "Bagging"], answer: 1, explain: "L1 performs feature selection." },
      { q: "A learning curve shows a big gap that shrinks as data grows. What will help most?", options: ["More training data", "A simpler metric", "Removing the test set", "Fewer rows"], answer: 0, explain: "The model is overfitting, and more data reduces variance." },
      { q: "How do you choose the regularisation strength?", options: ["Always use 1", "As a hyperparameter, using cross-validation", "From the test set", "By guessing once"], answer: 1, explain: "Tune it like any other setting." }
    ],
    sources: [
      ["An Introduction to Statistical Learning with Python, sections 2.2 and 6.2: Bias-variance and shrinkage methods", "https://www.statlearning.com/", "The trade-off, ridge and lasso."],
      ["scikit-learn: Underfitting vs. overfitting (example)", "https://scikit-learn.org/stable/auto_examples/model_selection/plot_underfitting_overfitting.html", "The polynomial example this lesson's activity is based on."],
      ["scikit-learn: Validation and learning curves", "https://scikit-learn.org/stable/modules/learning_curve.html", "How to plot and read learning curves."],
      ["Tibshirani (1996), Regression shrinkage and selection via the lasso, JRSS B", "https://doi.org/10.1111/j.2517-6161.1996.tb02080.x", "The lasso paper."],
      ["Google Machine Learning Crash Course: Overfitting and regularisation", "https://developers.google.com/machine-learning/crash-course", "Interactive explanations."],
      ["Belkin et al. (2019), Reconciling modern machine-learning practice and the classical bias-variance trade-off, PNAS", "https://doi.org/10.1073/pnas.1903070116", "Double descent, a preview of Level 4."]
    ]
  },
  {
    id: "imbalance-calibration",
    unit: "l3u3",
    title: "Imbalanced Data and Calibrated Probabilities",
    summary: "When the thing you care about is rare, and when you need a model's 70% to really mean 70%.",
    minutes: 12,
    body: `
<p>In many of the most valuable problems, the cases you care about are rare: fraud, disease, machine failures, customers about to leave. And in many decisions, you need the model's probabilities to be trustworthy, not just its ranking. This lesson tackles both.</p>

<h2>Why imbalance is tricky</h2>
<p>With 1% fraud, a model that never predicts fraud is 99% accurate and completely useless. Training is affected too: with so few positive examples, a model can lower its loss most easily by mostly ignoring them. And your test set may hold only a handful of positives, so every metric becomes noisy.</p>

<h2>What helps, in rough order</h2>
<ol>
  <li><strong>Use the right metric</strong>: precision, recall, average precision or cost-based measures, never accuracy alone (lesson 9). Use stratified splits.</li>
  <li><strong>Move the threshold.</strong> Often the simplest fix: a good model with a lower threshold may be all you need. Choose it on validation data using the real costs.</li>
  <li><strong>Class weights.</strong> Tell the model a mistake on the rare class counts more, for example <code>class_weight="balanced"</code> in scikit-learn. No data is thrown away or invented.</li>
  <li><strong>Resampling.</strong> Undersample the common class or oversample the rare one. <strong>SMOTE</strong> (2002) creates synthetic rare examples between existing ones. Resample only the training data, never validation or test, and be aware that recent studies find simple weighting or threshold tuning often works just as well with strong models.</li>
  <li><strong>Get more positive examples</strong> if you possibly can. Nothing beats real data.</li>
</ol>

<h2>Calibration: does 70% mean 70%?</h2>
<p>A model is <strong>well calibrated</strong> if, among all the cases it gives a 70% probability, about 70% really are positive. Calibration matters whenever probabilities feed a decision: pricing insurance, deciding whether to treat a patient, combining a model's output with costs, or telling a user "there's a 30% chance of rain".</p>
<p>Many models are not calibrated out of the box. Some tree ensembles and support vector machines give squashed or skewed scores; resampling and class weights deliberately distort probabilities; and a 2017 study by Chuan Guo and colleagues found that modern deep networks tend to be <strong>overconfident</strong>. Logistic regression, trained on log loss, is usually reasonably well calibrated.</p>

<h2>Checking and fixing it</h2>
<ul>
  <li>A <strong>reliability diagram</strong> (calibration curve) groups predictions into bins and plots predicted probability against the actual rate. A calibrated model hugs the diagonal.</li>
  <li>The <strong>Brier score</strong> is the mean squared error of the probabilities: lower is better.</li>
  <li><strong>Platt scaling</strong> (fit a small logistic model to the scores) and <strong>isotonic regression</strong> (a flexible step-shaped mapping) can recalibrate a model, using held-out data. In scikit-learn, <code>CalibratedClassifierCV</code> does this.</li>
</ul>

<div data-widget="py" data-title="Try it: weights, thresholds and calibration"><textarea>
import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.calibration import CalibratedClassifierCV, calibration_curve
from sklearn.metrics import recall_score, precision_score, brier_score_loss

X, y = make_classification(n_samples=6000, n_features=8, weights=[0.97], class_sep=1.0, random_state=0)
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=0)

for cw in [None, "balanced"]:
    m = LogisticRegression(class_weight=cw, max_iter=1000).fit(X_train, y_train)
    p = m.predict(X_test)
    print(f"class_weight={str(cw):9} recall {recall_score(y_test, p):.2f}  precision {precision_score(y_test, p):.2f}")

print("\\nCalibration (naive Bayes is often badly calibrated):")
raw = GaussianNB().fit(X_train, y_train)
cal = CalibratedClassifierCV(GaussianNB(), method="isotonic", cv=5).fit(X_train, y_train)
for name, model in [("raw", raw), ("calibrated", cal)]:
    prob = model.predict_proba(X_test)[:, 1]
    frac, mean_pred = calibration_curve(y_test, prob, n_bins=5, strategy="quantile")
    print(f"{name:11} Brier {brier_score_loss(y_test, prob):.4f}  predicted {mean_pred.round(2)}  actual {frac.round(2)}")
</textarea></div>
<p>Balanced class weights raise recall at a cost in precision, the same trade-off as lowering the threshold. In the calibration rows, compare the "predicted" and "actual" columns: after calibration they match much more closely, and the Brier score falls.</p>

<div class="callout"><b>Takeaway:</b> With rare positives, use proper metrics, tune the threshold, and try class weights before resampling. When probabilities drive decisions, check calibration with a reliability diagram and Brier score, and recalibrate on held-out data if needed.</div>
`,
    terms: [
      ["Class imbalance", "When one class is much rarer than another in the data."],
      ["Class weights", "Making mistakes on some classes count more in the loss."],
      ["Undersampling / oversampling", "Removing common-class rows or repeating rare-class rows to balance training data."],
      ["SMOTE", "A method that creates synthetic rare-class examples between existing ones."],
      ["Calibration", "How well predicted probabilities match real frequencies."],
      ["Reliability diagram", "A plot of predicted probability against the observed rate; calibrated models follow the diagonal."],
      ["Brier score", "The mean squared error of predicted probabilities; lower is better."],
      ["Platt scaling", "Recalibrating scores by fitting a logistic function on held-out data."],
      ["Overconfidence", "Predicting probabilities more extreme than the real frequencies justify."]
    ],
    quiz: [
      { q: "What's often the simplest effective fix for a good model on imbalanced data?", options: ["Delete the rare class", "Tune the decision threshold using real costs", "Use accuracy", "Train on the test set"], answer: 1, explain: "A better threshold is free and easy." },
      { q: "Where should resampling (like SMOTE) be applied?", options: ["To all the data before splitting", "To the training data only", "To the test set only", "Nowhere"], answer: 1, explain: "Validation and test must reflect reality." },
      { q: "A model gives 200 cases a probability of 0.8, and 100 of them are positive. It is…", options: ["Well calibrated", "Overconfident", "Underconfident", "Perfect"], answer: 1, explain: "It said 80% but the real rate was 50%." },
      { q: "What does the Brier score measure?", options: ["Ranking only", "The mean squared error of predicted probabilities", "Training speed", "Class balance"], answer: 1, explain: "Lower is better." },
      { q: "When does calibration matter most?", options: ["Never", "When the probabilities themselves feed decisions, such as pricing or treatment", "Only for regression", "Only for images"], answer: 1, explain: "Ranking alone may be enough otherwise." },
      { q: "What did Guo and colleagues (2017) find about modern deep networks?", options: ["They are perfectly calibrated", "They tend to be overconfident", "They can't output probabilities", "They are underconfident"], answer: 1, explain: "Hence techniques like temperature scaling." }
    ],
    sources: [
      ["scikit-learn: Probability calibration", "https://scikit-learn.org/stable/modules/calibration.html", "Reliability diagrams, Platt scaling and isotonic regression."],
      ["Chawla et al. (2002), SMOTE: Synthetic minority over-sampling technique, JAIR", "https://arxiv.org/abs/1106.1813", "The SMOTE paper."],
      ["Guo, Pleiss, Sun and Weinberger (2017), On calibration of modern neural networks", "https://arxiv.org/abs/1706.04599", "Why deep networks are overconfident."],
      ["Niculescu-Mizil and Caruana (2005), Predicting good probabilities with supervised learning, ICML", "https://doi.org/10.1145/1102351.1102430", "Which models are calibrated, and how to fix them."],
      ["imbalanced-learn (library documentation)", "https://imbalanced-learn.org/stable/", "Resampling methods for Python."],
      ["van den Goorbergh et al. (2022), The harm of class imbalance corrections for risk prediction models, JAMIA", "https://doi.org/10.1093/jamia/ocac093", "Evidence that resampling can damage calibration."]
    ]
  },

  /* ============================ UNIT 4 ============================ */
  {
    id: "clustering-pca",
    unit: "l3u4",
    title: "Clustering and Dimensionality Reduction",
    summary: "Finding groups with no labels, squeezing many features into a few, and spotting the odd one out.",
    minutes: 13,
    body: `
<p>So far every model had a target to learn. But often there are no labels at all, just a pile of data and the question "what's in here?" That's <strong>unsupervised learning</strong>, which you met briefly in Level 1. This lesson covers its three main jobs: finding groups, simplifying many features, and spotting unusual points.</p>

<h2>k-means clustering</h2>
<p>The most popular clustering method is simple enough to do by hand:</p>
<ol>
  <li>Choose k, the number of clusters, and drop k starting points ("centroids") at random.</li>
  <li>Assign every data point to its nearest centroid.</li>
  <li>Move each centroid to the average of the points assigned to it.</li>
  <li>Repeat steps 2 and 3 until nothing changes.</li>
</ol>

<div data-widget="kmeans"></div>

<p>Things to know about k-means:</p>
<ul>
  <li><strong>You choose k.</strong> Two common aids: the <strong>elbow method</strong> (plot the total within-cluster distance for several k and look for the bend) and the <strong>silhouette score</strong> (how much closer each point is to its own cluster than to the next one). Domain sense matters as much as either.</li>
  <li><strong>Scale features first</strong>, because it works on distances.</li>
  <li>It assumes roughly round, similar-sized clusters. For odd shapes, density-based methods like <strong>DBSCAN</strong> work better and can also label points as noise.</li>
  <li>Results depend on the starting points, so it's run several times (scikit-learn does this for you).</li>
</ul>
<p>Clusters are a starting point for human interpretation, not a truth. A marketing team might look at five customer clusters and name them "bargain hunters", "loyal regulars" and so on; another run with k = 6 would give a different story.</p>

<h2>Dimensionality reduction: PCA</h2>
<p>Data often has many features that overlap: height, arm length and shoe size all largely measure "body size". <strong>Principal component analysis (PCA)</strong>, introduced by Karl Pearson in 1901, finds new axes, called <strong>principal components</strong>, that capture as much of the variation as possible. The first component points along the direction where the data is most spread out, the second along the next-biggest direction at right angles, and so on.</p>
<p>Keep the first few components and you can compress dozens of features into a handful with little information lost. It's used to visualise high-dimensional data in 2D, to speed up models, and to reduce noise. The "explained variance ratio" tells you how much each component keeps. The catch: components are mixtures of the original features, so they're harder to explain.</p>

<h2>Pictures of high-dimensional data</h2>
<p><strong>t-SNE</strong> and <strong>UMAP</strong> are popular for drawing 2D maps of complex data such as word embeddings or single-cell biology. They're excellent for spotting structure, but handle with care: cluster sizes and the distances between clusters on these maps often don't mean anything, and different settings can produce very different pictures.</p>

<h2>Anomaly detection</h2>
<p>Finding rare, unusual points without labels: a strange bank transaction, a failing machine's sensor readings, a network intrusion. Methods include distance-based scores, <strong>isolation forests</strong> (unusual points get isolated by random splits very quickly) and the z-scores from Level 2. Flagged anomalies usually go to a person to check.</p>

<div data-widget="py" data-title="Try it: clusters, silhouettes and PCA"><textarea>
import numpy as np
from sklearn.datasets import make_blobs, load_iris
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

X, _ = make_blobs(n_samples=500, centers=4, cluster_std=1.1, random_state=3)
print("k   inertia   silhouette")
for k in range(2, 8):
    km = KMeans(n_clusters=k, n_init=10, random_state=0).fit(X)
    print(f"{k}   {km.inertia_:8.0f}   {silhouette_score(X, km.labels_):.3f}")

# PCA on the classic iris flower measurements (4 features)
iris = load_iris()
Xs = StandardScaler().fit_transform(iris.data)
pca = PCA().fit(Xs)
print("\\nShare of variation kept by each component:", pca.explained_variance_ratio_.round(3))
print("First two components together keep:", pca.explained_variance_ratio_[:2].sum().round(3))
</textarea></div>
<p>The data was generated with 4 groups. Look for the k where the silhouette score peaks and the drop in inertia starts to level off. For the iris flowers, two components keep most of the information in four measurements.</p>

<div class="callout"><b>Takeaway:</b> Unsupervised learning finds structure without labels: k-means groups points around centroids (scale first, choose k with care), PCA compresses correlated features into a few components, and anomaly detection flags the unusual. Treat what it finds as hypotheses for people to interpret.</div>
`,
    terms: [
      ["Unsupervised learning", "Finding structure in data that has no labels."],
      ["Clustering", "Grouping similar data points together."],
      ["k-means", "A clustering method that alternates between assigning points to the nearest centroid and moving centroids to the mean."],
      ["Centroid", "The centre (average point) of a cluster."],
      ["Silhouette score", "A measure from −1 to 1 of how well each point fits its own cluster compared with the nearest other one."],
      ["DBSCAN", "A density-based clustering method that finds clusters of any shape and labels sparse points as noise."],
      ["Principal component analysis (PCA)", "A method that finds new axes capturing the most variation, to reduce the number of features."],
      ["Explained variance ratio", "The share of the data's total variation captured by each principal component."],
      ["Anomaly detection", "Finding rare points that differ markedly from the rest."]
    ],
    quiz: [
      { q: "What does unsupervised learning work with?", options: ["Labelled examples", "Data with no labels", "Only images", "Test sets only"], answer: 1, explain: "There's no target to learn." },
      { q: "In k-means, what happens after assigning points to the nearest centroid?", options: ["The algorithm stops", "Each centroid moves to the average of its points", "k is doubled", "Labels are added"], answer: 1, explain: "Then assignment repeats until stable." },
      { q: "Why should you scale features before k-means?", options: ["It's faster", "It uses distances, so large-unit features would dominate", "Scaling adds labels", "It isn't needed"], answer: 1, explain: "Same reason as for k-nearest neighbours." },
      { q: "What does the first principal component capture?", options: ["The least variation", "The direction of greatest variation in the data", "The target", "Outliers only"], answer: 1, explain: "Later components capture the next-largest directions." },
      { q: "What's a caution about t-SNE and UMAP maps?", options: ["They can't show clusters", "Cluster sizes and gaps between clusters often don't mean much", "They require labels", "They're only for tables"], answer: 1, explain: "Use them for exploration, not measurement." },
      { q: "Which is a typical anomaly detection task?", options: ["Predicting house prices", "Flagging unusual bank transactions for review", "Translating text", "Sorting emails into folders with labels"], answer: 1, explain: "Unusual, rare points without labels." }
    ],
    sources: [
      ["scikit-learn: Clustering", "https://scikit-learn.org/stable/modules/clustering.html", "k-means, DBSCAN and how to evaluate clusters."],
      ["scikit-learn: Decomposing signals in components (PCA)", "https://scikit-learn.org/stable/modules/decomposition.html", "PCA and related methods."],
      ["An Introduction to Statistical Learning with Python, chapter 12: Unsupervised learning", "https://www.statlearning.com/", "PCA and clustering."],
      ["Wattenberg, Viégas and Johnson (2016), How to use t-SNE effectively, Distill", "https://distill.pub/2016/misread-tsne/", "Interactive guide to reading t-SNE plots correctly."],
      ["Liu, Ting and Zhou (2008), Isolation Forest, ICDM", "https://doi.org/10.1109/ICDM.2008.17", "The isolation forest method."],
      ["Pearson (1901), On lines and planes of closest fit to systems of points in space", "https://doi.org/10.1080/14786440109462720", "The origin of PCA."]
    ]
  },
  {
    id: "explaining-models",
    unit: "l3u4",
    title: "Explaining Model Predictions",
    summary: "Which features matter overall, why the model made this one prediction, and the limits of explanations.",
    minutes: 13,
    body: `
<p>A random forest or boosted model can't be read like a short formula. Yet people deserve to know why a model turned down their loan, doctors need to know what a diagnostic tool is relying on, and you need to know whether your model has learned something sensible or a shortcut. <strong>Explainability</strong> (or interpretability) is the toolkit for opening the box.</p>

<h2>Two kinds of question</h2>
<ul>
  <li><strong>Global</strong>: how does the model behave overall? Which features matter most, and how does the prediction change as a feature changes?</li>
  <li><strong>Local</strong>: why did the model make <em>this</em> prediction for <em>this</em> person?</li>
</ul>
<p>Some models are <strong>interpretable by design</strong>: small trees, linear models, and scorecards. Others need <strong>post-hoc</strong> methods applied after training. The statistician Cynthia Rudin has argued forcefully that for high-stakes decisions, we should prefer models that are interpretable by design whenever they perform about as well, rather than explaining black boxes after the fact.</p>

<h2>Permutation importance (global)</h2>
<p>A wonderfully simple and model-agnostic idea: take a trained model, randomly shuffle one feature's values in the validation data, and see how much the score drops. If shuffling a feature barely hurts, the model doesn't rely on it. If the score collapses, it's crucial. Because it uses held-out data, it reflects what actually helps prediction.</p>
<p>One trap: if two features carry the same information, shuffling one alone does little, because the model can lean on the other. Both can look unimportant even though together they matter.</p>

<h2>Partial dependence (global)</h2>
<p>A <strong>partial dependence plot</strong> shows how the average prediction changes as one feature is varied, with everything else kept as it was in the data. For bike hire it might show demand rising with temperature up to about 25°C and then levelling off: a curve no single coefficient could show.</p>

<h2>SHAP and LIME (local)</h2>
<ul>
  <li><strong>SHAP</strong> (Lundberg and Lee, 2017) splits a single prediction into contributions from each feature, using Shapley values from game theory, which share out a team's winnings fairly among players. "Your predicted risk is 12 points above average: +9 from missed payments, +5 from a short credit history, −2 from stable income."</li>
  <li><strong>LIME</strong> (Ribeiro and colleagues, 2016) fits a small, simple model around one prediction to approximate the big model locally.</li>
</ul>

<h2>Explanations can mislead</h2>
<ul>
  <li>An explanation describes the <strong>model</strong>, not the world. "Postcode drives the prediction" says nothing about whether postcodes cause anything.</li>
  <li>Different methods can disagree about the same prediction.</li>
  <li>Explanations of correlated features can be unstable.</li>
  <li>A plausible-looking explanation can make people trust a bad model more than they should.</li>
</ul>
<p>Used carefully, though, explanations catch real problems. A famous example from Ribeiro and colleagues: a classifier that "recognised" wolves was actually detecting snow in the background. Explanation tools exposed the shortcut.</p>

<div data-widget="py" data-title="Try it: which features does the model use?"><textarea>
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.inspection import permutation_importance
from sklearn.model_selection import train_test_split

rng = np.random.default_rng(7); n = 800
df = pd.DataFrame({"temp_c": rng.normal(16, 7, n), "rain": rng.choice([0, 0, 0, 1], n),
                   "weekend": rng.choice([0, 0, 0, 0, 0, 1, 1], n), "random_noise": rng.normal(size=n)})
df["hires"] = 300 + 28 * df["temp_c"] - 260 * df["rain"] + 90 * df["weekend"] + rng.normal(0, 70, n)

X, y = df.drop(columns="hires"), df["hires"]
X_tr, X_va, y_tr, y_va = train_test_split(X, y, random_state=0)
model = RandomForestRegressor(n_estimators=200, random_state=0).fit(X_tr, y_tr)

print("Built-in impurity importance:")
for f, v in sorted(zip(X.columns, model.feature_importances_), key=lambda t: -t[1]):
    print(f"  {f:12} {v:.3f}")

perm = permutation_importance(model, X_va, y_va, n_repeats=10, random_state=0)
print("\\nPermutation importance (drop in R² when shuffled):")
for f, v in sorted(zip(X.columns, perm.importances_mean), key=lambda t: -t[1]):
    print(f"  {f:12} {v:.3f}")
</textarea></div>
<p>The column <code>random_noise</code> has no link to hires at all. The built-in importance still gives it a noticeable share, because the trees used it to split noise. Permutation importance on validation data correctly rates it at about zero.</p>

<div class="callout"><b>Takeaway:</b> Global tools (permutation importance, partial dependence) show what a model relies on overall; local tools (SHAP, LIME) explain single predictions. Prefer interpretable models for high-stakes uses, and remember explanations describe the model, not cause and effect in the world.</div>
`,
    terms: [
      ["Explainability (interpretability)", "Understanding how and why a model makes its predictions."],
      ["Global explanation", "A description of a model's overall behaviour."],
      ["Local explanation", "A description of why a model made one particular prediction."],
      ["Interpretable by design", "A model simple enough to understand directly, such as a small tree or linear model."],
      ["Permutation importance", "How much a model's score drops when one feature's values are shuffled."],
      ["Partial dependence plot", "A chart of how the average prediction changes as one feature varies."],
      ["SHAP", "A method that splits a prediction into feature contributions using Shapley values from game theory."],
      ["LIME", "A method that explains one prediction by fitting a simple model around it."],
      ["Shortcut learning", "A model relying on an irrelevant cue that happens to correlate with the target, like snow for wolves."]
    ],
    quiz: [
      { q: "\"Why was my loan refused?\" asks for…", options: ["A global explanation", "A local explanation", "A confusion matrix", "A learning curve"], answer: 1, explain: "It's about one individual prediction." },
      { q: "How does permutation importance work?", options: ["It deletes the model", "It shuffles one feature and measures how much the score drops", "It counts tree splits", "It reads coefficients"], answer: 1, explain: "Bigger drop, more important feature." },
      { q: "Two features carry the same information. What can happen to their permutation importances?", options: ["Both look very important", "Both can look unimportant, because the model can lean on the other", "They become negative", "Nothing"], answer: 1, explain: "A known trap with correlated features." },
      { q: "What does SHAP do?", options: ["Trains a new model", "Splits a single prediction into contributions from each feature", "Removes bias", "Shuffles labels"], answer: 1, explain: "Based on Shapley values." },
      { q: "What did the wolf-and-snow example show?", options: ["Wolves like snow", "A model can use a shortcut that explanation tools can expose", "Image models can't be explained", "LIME is always wrong"], answer: 1, explain: "The model learned the background, not the animal." },
      { q: "An explanation says postcode strongly drives a model's prediction. What can you conclude?", options: ["Postcode causes the outcome", "The model relies on postcode, which may need checking, e.g. as a proxy for something sensitive", "The model is fair", "Nothing at all"], answer: 1, explain: "Explanations describe the model, not the world." }
    ],
    sources: [
      ["Molnar, Interpretable Machine Learning (free online book)", "https://christophm.github.io/interpretable-ml-book/", "The standard practical guide to explanation methods."],
      ["scikit-learn: Permutation feature importance", "https://scikit-learn.org/stable/modules/permutation_importance.html", "Including the correlated-features caveat."],
      ["scikit-learn: Partial dependence and individual conditional expectation plots", "https://scikit-learn.org/stable/modules/partial_dependence.html", "Official guide."],
      ["Lundberg and Lee (2017), A unified approach to interpreting model predictions (SHAP)", "https://arxiv.org/abs/1705.07874", "The SHAP paper."],
      ["Ribeiro, Singh and Guestrin (2016), \"Why should I trust you?\" Explaining the predictions of any classifier (LIME)", "https://arxiv.org/abs/1602.04938", "LIME and the wolf/snow example."],
      ["Rudin (2019), Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead, Nature Machine Intelligence", "https://doi.org/10.1038/s42256-019-0048-x", "The case for interpretable-by-design models."],
      ["Kaggle Learn: Machine Learning Explainability", "https://www.kaggle.com/learn/machine-learning-explainability", "Hands-on permutation importance, partial dependence and SHAP."]
    ]
  },
  {
    id: "fairness-testing",
    unit: "l3u4",
    title: "Testing Models for Fairness",
    summary: "Measuring whether a model treats groups differently, why fairness definitions clash, and documenting it all.",
    minutes: 13,
    body: `
<p>Level 1 explained how bias gets into AI. Now you can do something about it: <strong>measure</strong> it. Fairness testing means checking a model's behaviour separately for different groups of people, then deciding, with the people affected, what's acceptable. It is part of good engineering, and for high-risk uses under laws like the EU AI Act, it's increasingly expected.</p>

<h2>Step 1: break the metrics down by group</h2>
<p>An overall accuracy of 90% can hide 97% for one group and 75% for another. So compute every important metric separately for each relevant group: sex, age band, ethnicity, disability, region, and their combinations where the data allows. Researchers Joy Buolamwini and Timnit Gebru's 2018 "Gender Shades" study did exactly this for commercial face analysis systems and found far higher error rates for darker-skinned women than for lighter-skinned men.</p>

<h2>Step 2: choose what "fair" means here</h2>
<p>There are several precise fairness definitions. Three of the most used:</p>
<div class="table-scroll"><table>
  <tr><th>Definition</th><th>Asks that…</th><th>Example</th></tr>
  <tr><td><strong>Demographic parity</strong></td><td>Each group gets positive predictions at the same rate</td><td>Equal shares of each group shortlisted for interview</td></tr>
  <tr><td><strong>Equal opportunity</strong> (equal recall)</td><td>Among people who truly qualify, each group is caught at the same rate</td><td>Qualified applicants from every group equally likely to be shortlisted</td></tr>
  <tr><td><strong>Calibration within groups</strong></td><td>A given score means the same risk in every group</td><td>A "70% risk" means 70% for everyone</td></tr>
</table></div>

<h2>Step 3: accept that you can't have everything</h2>
<p>In 2016, research by Jon Kleinberg and colleagues, and separately by Alexandra Chouldechova, proved that when groups have different underlying rates of the outcome, a model generally <em>cannot</em> be calibrated within groups and also have equal false positive and false negative rates across them, except in unrealistic special cases. This was at the heart of the debate over <strong>COMPAS</strong>, a tool used in US courts to predict reoffending. In 2016 ProPublica reported that Black defendants who didn't reoffend were far more likely than white defendants to be wrongly labelled high risk. The tool's makers replied that its scores were equally calibrated across groups. Both claims could be true at once, and the maths says they couldn't both be "fixed". Choosing which fairness matters is a value judgement for people, not a technical setting.</p>

<h2>Step 4: understand the cause, then act</h2>
<ul>
  <li><strong>Data</strong>: is a group under-represented, mislabelled, or measured less well? Collect better data where possible.</li>
  <li><strong>Proxies</strong>: removing a sensitive feature rarely removes bias, because postcode, name or shopping habits can stand in for it.</li>
  <li><strong>Target</strong>: is the label itself biased? A famous 2019 study found a US health algorithm used past healthcare <em>spending</em> as a stand-in for <em>need</em>; because less was spent on Black patients with the same level of illness, the model understated their needs.</li>
  <li><strong>Mitigation</strong> tools (reweighting data, per-group thresholds, fairness constraints in training) exist in libraries such as <strong>Fairlearn</strong>. Each has trade-offs, and some, like group-specific thresholds, raise legal questions in some countries.</li>
  <li>Sometimes the right answer is not to deploy the model.</li>
</ul>

<h2>Step 5: document it</h2>
<p><strong>Model cards</strong> (Mitchell and colleagues, 2019) are short documents shipped with a model: what it's for and not for, how it was trained and evaluated, its performance broken down by group, and its known limitations. Together with datasheets for datasets from Level 2, they make your fairness work visible and checkable.</p>

<div data-widget="py" data-title="Try it: an audit by group"><textarea>
import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Invented hiring data: group B is under-represented and its skill is measured less reliably.
rng = np.random.default_rng(11); n = 4000
group = rng.choice(["A", "B"], n, p=[0.8, 0.2])
skill = rng.normal(0, 1, n)
noise = np.where(group == "B", 1.2, 0.4)                 # a worse measurement for group B
test_score = skill + rng.normal(0, 1, n) * noise
qualified = (skill + rng.normal(0, 0.5, n) > 0.5).astype(int)
X = pd.DataFrame({"test_score": test_score})

X_tr, X_te, y_tr, y_te, g_tr, g_te = train_test_split(X, qualified, group, test_size=0.4, random_state=0)
pred = LogisticRegression().fit(X_tr, y_tr).predict(X_te)

rows = []
for g in ["A", "B"]:
    m = g_te == g; yt, yp = y_te[m], pred[m]
    rows.append({"group": g, "people": m.sum(),
                 "accuracy": (yt == yp).mean().round(2),
                 "shortlisted rate": yp.mean().round(2),
                 "recall (qualified caught)": yp[yt == 1].mean().round(2),
                 "false positive rate": yp[yt == 0].mean().round(2)})
print(pd.DataFrame(rows).to_string(index=False))
</textarea></div>
<p>The model never sees the group, yet qualified people in group B are caught less often, because their scores are noisier. Breaking metrics down by group is what reveals it. Try setting group B's noise to 0.4 and watch the gap close.</p>

<div class="callout"><b>Takeaway:</b> Measure performance for each group, choose a fairness definition with the people affected (you can't satisfy them all), look for causes in the data, proxies and labels, mitigate or don't deploy, and document everything in a model card.</div>
`,
    terms: [
      ["Fairness testing", "Measuring how a model's behaviour differs across groups of people."],
      ["Disaggregated evaluation", "Reporting metrics separately for each group instead of only overall."],
      ["Demographic parity", "Each group receives positive predictions at the same rate."],
      ["Equal opportunity", "Each group's truly positive cases are caught at the same rate (equal recall)."],
      ["Calibration within groups", "A given score corresponds to the same real risk in every group."],
      ["Fairness impossibility results", "Proofs that some fairness definitions can't all hold at once when groups have different base rates."],
      ["Proxy variable", "A feature that indirectly stands in for a sensitive attribute, such as postcode."],
      ["Model card", "A short document reporting a model's purpose, evaluation by group, and limitations."],
      ["Fairlearn", "An open-source Python toolkit for assessing and mitigating unfairness in models."]
    ],
    quiz: [
      { q: "Why compute metrics separately for each group?", options: ["It's faster", "An overall score can hide much worse performance for some groups", "Groups always perform the same", "To reduce data"], answer: 1, explain: "Gender Shades showed exactly this." },
      { q: "Equal opportunity asks that…", options: ["Everyone gets a yes", "Truly qualified people in each group are caught at the same rate", "Groups are the same size", "Accuracy is 100%"], answer: 1, explain: "It's equal recall across groups." },
      { q: "What did Kleinberg and Chouldechova show in 2016?", options: ["All fairness definitions can be met together", "When base rates differ, calibration and equal error rates generally can't all hold at once", "Fairness is impossible to measure", "COMPAS was perfectly fair"], answer: 1, explain: "Choosing among them is a value judgement." },
      { q: "You remove 'ethnicity' from the features. Is the model now unbiased?", options: ["Yes, always", "Not necessarily: other features can act as proxies", "Only for regression", "Only if accuracy rises"], answer: 1, explain: "Postcode or name can stand in for it." },
      { q: "In the 2019 health algorithm study, what was the source of bias?", options: ["Too few features", "The target: past spending was used as a stand-in for medical need", "A coding error", "The model was too small"], answer: 1, explain: "A biased label produced biased predictions." },
      { q: "What is a model card?", options: ["A trading card", "A document stating a model's uses, evaluation by group and limitations", "A GPU", "A type of loss"], answer: 1, explain: "Proposed by Mitchell and colleagues in 2019." }
    ],
    sources: [
      ["Barocas, Hardt and Narayanan, Fairness and Machine Learning: Limitations and Opportunities (free online book)", "https://fairmlbook.org/", "The standard textbook on ML fairness."],
      ["Kleinberg, Mullainathan and Raghavan (2016), Inherent trade-offs in the fair determination of risk scores", "https://arxiv.org/abs/1609.05807", "One of the impossibility results."],
      ["Chouldechova (2017), Fair prediction with disparate impact", "https://arxiv.org/abs/1703.00056", "The impossibility result applied to recidivism tools."],
      ["ProPublica (2016), Machine Bias", "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing", "The COMPAS investigation."],
      ["Buolamwini and Gebru (2018), Gender Shades, Proceedings of Machine Learning Research", "https://proceedings.mlr.press/v81/buolamwini18a.html", "Disaggregated evaluation of face analysis systems."],
      ["Obermeyer et al. (2019), Dissecting racial bias in an algorithm used to manage the health of populations, Science", "https://doi.org/10.1126/science.aax2342", "The spending-as-need example."],
      ["Mitchell et al. (2019), Model Cards for Model Reporting", "https://arxiv.org/abs/1810.03993", "The model card proposal."],
      ["Fairlearn (open-source toolkit)", "https://fairlearn.org/", "Fairness metrics and mitigation in Python."]
    ]
  },
  {
    id: "ml-project",
    unit: "l3u4",
    title: "Project: Predict Bike Demand End to End",
    summary: "Everything in one workflow: frame, split by time, build a pipeline, compare models, test once, analyse errors, document.",
    minutes: 15,
    body: `
<p>In Level 2 you explored the bike-hire data. Now you'll build the model the scheme actually wants: <strong>predict tomorrow's hires</strong>, so they can move bikes to where they'll be needed. This project strings together every lesson in this level. As before, the data is invented but shaped like real bike-sharing data, and each code box runs on its own.</p>

<h2>Step 1: Frame it</h2>
<ul>
  <li><strong>Target:</strong> total hires tomorrow (regression).</li>
  <li><strong>When:</strong> each evening, using today's information and tomorrow's weather forecast.</li>
  <li><strong>Action:</strong> decide how many vans and staff to schedule for redistribution.</li>
  <li><strong>Metric:</strong> MAE in bikes, because the operations team thinks in bikes. Running short is worse than having spare, so we'll also look at big under-predictions.</li>
  <li><strong>Baseline:</strong> "same as the same weekday last week".</li>
</ul>

<h2>Step 2: Data, split by time, and the baseline</h2>
<div data-widget="py" data-title="Steps 2 and 3: baseline, then models"><textarea>
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.linear_model import Ridge
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.metrics import mean_absolute_error

# Two years of invented daily data
rng = np.random.default_rng(21)
days = pd.date_range("2024-01-01", "2025-12-31", freq="D"); n = len(days)
season = -np.cos(2 * np.pi * days.dayofyear.to_numpy() / 365)            # cold in winter, warm in summer
temp = 12 + 9 * season + rng.normal(0, 3, n)
rain = (rng.random(n) < 0.3 - 0.1 * season).astype(int)
holiday = (rng.random(n) < 0.03).astype(int)
growth = np.linspace(0, 150, n)                                # the scheme is growing
weekend = (days.dayofweek.to_numpy() >= 5).astype(int)
hires = (250 + growth + 30 * temp - 0.6 * np.maximum(temp - 24, 0) ** 2 * 10
         - 280 * rain + 120 * weekend * (temp > 15) - 150 * holiday + rng.normal(0, 60, n)).clip(0).round()
df = pd.DataFrame({"date": days, "temp": temp.round(1), "rain": rain, "holiday": holiday,
                   "weekday": days.dayofweek, "month": days.month, "hires": hires})
df["last_week"] = df["hires"].shift(7)                         # known at prediction time
df = df.dropna()

train = df[df["date"] < "2025-07-01"]; test = df[df["date"] >= "2025-07-01"]   # split by time
print("Train:", train["date"].min().date(), "to", train["date"].max().date(), "| Test:", test["date"].min().date(), "to", test["date"].max().date())
print("Baseline MAE (same day last week):", round(mean_absolute_error(test["hires"], test["last_week"]), 1))

features = ["temp", "rain", "holiday", "weekday", "month", "last_week"]
prep = ColumnTransformer([("cat", OneHotEncoder(handle_unknown="ignore"), ["weekday", "month"]),
                          ("num", StandardScaler(), ["temp", "rain", "holiday", "last_week"])])
models = {"Ridge regression": Pipeline([("prep", prep), ("m", Ridge(alpha=1.0))]),
          "Gradient boosting": HistGradientBoostingRegressor(max_iter=400, learning_rate=0.05, random_state=0)}
for name, m in models.items():
    m.fit(train[features], train["hires"])
    pred = m.predict(test[features])
    under = (test["hires"] - pred > 200).mean()
    print(f"{name:18} test MAE {mean_absolute_error(test['hires'], pred):6.1f}   days short by 200+ bikes: {under:.1%}")
</textarea></div>
<p>Note the choices: a <strong>time-based split</strong> (train on the past, test on the most recent six months), a feature (<code>last_week</code>) that is genuinely known at prediction time, and a <strong>baseline</strong> to beat. In a real project you'd also cross-validate on the training period with time-series splits to tune settings, and look at the test set only at the end.</p>
<p>Both models beat the baseline comfortably. But here's a surprise: the simple ridge model beats gradient boosting. The scheme is growing, so the test months have more hires than anything in the training data. Tree models can only predict values in the range they've seen; they can't extrapolate a trend. The linear model, helped by the <code>last_week</code> feature, follows the growth. Lessons like this are why you always compare several model types rather than assuming the fanciest wins.</p>

<h2>Step 4: Analyse the errors</h2>
<p>An overall MAE hides where the model struggles. Break the errors down, just as you did for fairness:</p>
<div data-widget="py" data-title="Step 4: where does it go wrong?"><textarea>
import numpy as np
import pandas as pd
from sklearn.ensemble import HistGradientBoostingRegressor

rng = np.random.default_rng(21)
days = pd.date_range("2024-01-01", "2025-12-31", freq="D"); n = len(days)
season = -np.cos(2 * np.pi * days.dayofyear.to_numpy() / 365)
temp = 12 + 9 * season + rng.normal(0, 3, n); rain = (rng.random(n) < 0.3 - 0.1 * season).astype(int)
holiday = (rng.random(n) < 0.03).astype(int); growth = np.linspace(0, 150, n); weekend = (days.dayofweek.to_numpy() >= 5).astype(int)
hires = (250 + growth + 30 * temp - 0.6 * np.maximum(temp - 24, 0) ** 2 * 10 - 280 * rain
         + 120 * weekend * (temp > 15) - 150 * holiday + rng.normal(0, 60, n)).clip(0).round()
df = pd.DataFrame({"date": days, "temp": temp, "rain": rain, "holiday": holiday, "weekday": days.dayofweek,
                   "month": days.month, "hires": hires}); df["last_week"] = df["hires"].shift(7); df = df.dropna()
train = df[df["date"] < "2025-07-01"]; test = df[df["date"] >= "2025-07-01"].copy()
features = ["temp", "rain", "holiday", "weekday", "month", "last_week"]
model = HistGradientBoostingRegressor(max_iter=400, learning_rate=0.05, random_state=0).fit(train[features], train["hires"])

test["error"] = test["hires"] - model.predict(test[features])
test["abs_error"] = test["error"].abs()
test["kind"] = np.select([test["holiday"] == 1, test["rain"] == 1, test["weekday"] >= 5], ["holiday", "rainy", "weekend"], "dry weekday")
print(test.groupby("kind")[["abs_error", "error"]].mean().round(1).rename(columns={"abs_error": "MAE", "error": "average error (+ = under-predicted)"}))
print("\\nWorst five days:")
print(test.nlargest(5, "abs_error")[["date", "temp", "rain", "holiday", "hires", "error"]].round({"temp": 0, "error": 0}).to_string(index=False))
</textarea></div>
<p>Two findings jump out. First, the average error is positive in almost every group: the boosted model under-predicts across the board by around 75 bikes, which is the growth trend it can't extrapolate. Fixes include adding a time-trend feature, or predicting the <em>change</em> from last week instead of the raw number. Second, holidays have the biggest errors, in the other direction: the model over-predicts them, because holidays are rare in the training data. That's a typical finding: errors cluster in rare situations. Options include more holiday data, a dedicated feature (such as "day before a holiday"), or telling operations to apply judgement on holidays.</p>

<h2>Step 5: Document it</h2>
<p>Finish with a short model card: purpose (planning redistribution, not pricing), data (dates, source), the time-based evaluation and test MAE versus the baseline, where it performs worst (holidays, very hot days), limitations (weather forecasts have their own errors; growth trends may change), and a plan to monitor it and retrain monthly. Level 5 covers deploying and monitoring models like this one.</p>

<div class="callout"><b>Takeaway:</b> A real ML project is a chain: frame the decision, split the way you'll predict, beat a baseline with a leak-free pipeline, compare models fairly, look at the test set once, dig into where the errors are, and write it all down.</div>
`,
    terms: [
      ["End-to-end workflow", "The full chain from framing a problem to evaluating, analysing and documenting a model."],
      ["Lag feature", "A past value of the target used as a feature, such as hires on the same day last week."],
      ["Error analysis", "Breaking down a model's mistakes to find where and why it fails."],
      ["Seasonality", "Regular patterns that repeat with the calendar, such as summer peaks."],
      ["Concept drift", "Changes over time in the relationship between features and target, which make models go stale."],
      ["Retraining", "Fitting the model again on newer data to keep it up to date."]
    ],
    quiz: [
      { q: "Why split this data by time rather than randomly?", options: ["It's faster", "The model will predict the future, so testing must use later data than training", "Random splits are always wrong", "To get more data"], answer: 1, explain: "Split the way you'll use the model." },
      { q: "Is \"hires on the same day last week\" a leak?", options: ["Yes, always", "No: it's known when the prediction is made", "Only on weekends", "Only for gradient boosting"], answer: 1, explain: "Lag features are fine if they really exist at prediction time." },
      { q: "Why compare with a 'same day last week' baseline?", options: ["It's required by scikit-learn", "To show whether the model adds value over a simple rule", "It's always better", "To choose features"], answer: 1, explain: "A model must beat the simple rule to be worth running." },
      { q: "Error analysis shows the worst errors on holidays. What's the likely reason?", options: ["Holidays are rare in the training data", "The metric is wrong", "Holidays never matter", "The test set is too big"], answer: 0, explain: "Models struggle most in rare situations." },
      { q: "Running short of bikes is worse than having spare. What should you check besides MAE?", options: ["Nothing", "How often the model badly under-predicts", "Training speed", "R² only"], answer: 1, explain: "Match the evaluation to the real cost." },
      { q: "Which belongs in the model card?", options: ["Only the best score", "Purpose, data, evaluation versus baseline, weak spots, limitations and monitoring plan", "The source code only", "Nothing about weaknesses"], answer: 1, explain: "Honest documentation includes the limits." }
    ],
    sources: [
      ["UCI Machine Learning Repository: Bike Sharing dataset (Fanaee-T and Gama)", "https://archive.ics.uci.edu/dataset/275/bike+sharing+dataset", "The real dataset this project is modelled on."],
      ["scikit-learn: Time-related feature engineering (bike sharing example)", "https://scikit-learn.org/stable/auto_examples/applications/plot_cyclical_feature_engineering.html", "A worked example on real bike-sharing data."],
      ["Hyndman and Athanasopoulos, Forecasting: Principles and Practice (3rd ed.)", "https://otexts.com/fpp3/", "Baselines and evaluation for forecasting."],
      ["Google: Rules of Machine Learning", "https://developers.google.com/machine-learning/guides/rules-of-ml", "Practical advice on baselines, features and monitoring."],
      ["Mitchell et al. (2019), Model Cards for Model Reporting", "https://arxiv.org/abs/1810.03993", "The template for Step 5."]
    ]
  }
];

/* Level 3 sorting activities, added to the shared set. */
window.SORT_SETS = window.SORT_SETS || {};
window.SORT_SETS["ml-problem-type"] = {
  title: "Try it: what kind of ML problem?",
  choices: ["Classification", "Regression", "Clustering"],
  items: [
    ["Will this loan applicant default: yes or no?", "Classification", "Two classes."],
    ["How many minutes will this train be delayed?", "Regression", "The answer is a number."],
    ["Group shoppers into types, with no labels given", "Clustering", "No target: find natural groups."],
    ["Which of 12 product categories does this listing belong to?", "Classification", "One of several classes."],
    ["Tomorrow's electricity demand in megawatts", "Regression", "A number."]
  ]
};
window.SORT_SETS["leakage"] = {
  title: "Try it: leak or fine?",
  choices: ["Leak", "Fine"],
  items: [
    ["Predicting hospital readmission using 'number of follow-up appointments booked after discharge'", "Leak", "Those bookings may happen because of the readmission, or only after the prediction point."],
    ["Predicting churn using how many support calls the customer made last month", "Fine", "Known before the prediction is made."],
    ["Filling missing ages with the average age of the whole dataset before splitting", "Leak", "The test rows influenced training. Fit the imputer on training data only."],
    ["Predicting next week's sales from this week's sales", "Fine", "A lag feature known at prediction time."],
    ["Random train/test split when forecasting share prices", "Leak", "The model sees the future during training."]
  ]
};
window.SORT_SETS["which-metric"] = {
  title: "Try it: what should this model focus on?",
  choices: ["Recall", "Precision"],
  items: [
    ["A first-stage screen for a serious disease, with every positive checked by a doctor", "Recall", "Missing a case is the costly mistake."],
    ["An automatic filter that deletes emails it thinks are spam", "Precision", "Deleting real email is the costly mistake."],
    ["Flagging possible fraud for a team that can only check 50 cases a day", "Precision", "Their limited time must go on real cases."],
    ["Spotting cracks in aircraft parts before a full inspection", "Recall", "A missed crack could be catastrophic."],
    ["Recommending a few products on a home page", "Precision", "The few slots should hold good suggestions."]
  ]
};
