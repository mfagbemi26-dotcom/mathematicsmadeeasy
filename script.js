const topics = [
  {
    id: "number",
    name: "Number & numeration",
    icon: "½",
    description: "Work confidently with whole numbers, fractions, decimals and percentages.",
    concepts: ["Fractions and decimals", "Percentages", "Standard form", "Estimation"]
  },
  {
    id: "ratio",
    name: "Ratio, rate & proportion",
    icon: "∶",
    description: "Compare quantities and use rates, ratios, scale and direct proportion.",
    concepts: ["Ratio and sharing", "Rates", "Direct proportion", "Scale drawings"]
  },
  {
    id: "algebra",
    name: "Algebra",
    icon: "x",
    description: "Use letters for numbers, simplify expressions and solve equations.",
    concepts: ["Expressions", "Linear equations", "Formulae", "Sequences"]
  },
  {
    id: "geometry",
    name: "Geometry",
    icon: "△",
    description: "Explore angles, shapes, symmetry and properties of 2D and 3D figures.",
    concepts: ["Angles and triangles", "Polygons", "Symmetry", "Coordinates"]
  },
  {
    id: "measurement",
    name: "Mensuration",
    icon: "◱",
    description: "Calculate perimeter, area, surface area and volume using correct units.",
    concepts: ["Perimeter and area", "Circles", "Volume", "Unit conversion"]
  },
  {
    id: "statistics",
    name: "Statistics & probability",
    icon: "▥",
    description: "Collect and interpret data, find averages and describe simple chances.",
    concepts: ["Tables and charts", "Mean, median, mode", "Range", "Probability"]
  },
  {
    id: "finance",
    name: "Financial mathematics",
    icon: "₦",
    description: "Apply percentages to money, discounts, profit, loss and simple interest.",
    concepts: ["Profit and loss", "Discount", "Simple interest", "Budgeting"]
  },
  {
    id: "graphs",
    name: "Graphs & coordinates",
    icon: "↗",
    description: "Plot points and read information from tables, charts and graphs.",
    concepts: ["Cartesian plane", "Linear graphs", "Tables of values", "Interpretation"]
  },
  {
    id: "construction",
    name: "Construction & scale",
    icon: "⌖",
    description: "Use geometric constructions and scale to represent real objects.",
    concepts: ["Compass and ruler", "Loci", "Bearings", "Scale drawings"]
  }
];

const questions = [
  {
    id: "q-2022-1", year: 2022, topic: "number",
    prompt: "Evaluate ¾ + ⅝. Give your answer as a mixed number.",
    options: ["1⅜", "1⅛", "1⅝", "⅞"], answer: 0,
    explanation: "Use a common denominator of 8: ¾ = 6/8. Then 6/8 + 5/8 = 11/8 = 1⅜."
  },
  {
    id: "q-2022-2", year: 2022, topic: "algebra",
    prompt: "Solve the equation 3x − 7 = 14.",
    options: ["5", "7", "9", "21"], answer: 1,
    explanation: "Add 7 to both sides to get 3x = 21. Divide both sides by 3, so x = 7."
  },
  {
    id: "q-2022-3", year: 2022, topic: "measurement",
    prompt: "A triangle has a base of 12 cm and a perpendicular height of 7 cm. Find its area.",
    options: ["19 cm²", "38 cm²", "42 cm²", "84 cm²"], answer: 2,
    explanation: "Area of a triangle = ½ × base × perpendicular height = ½ × 12 × 7 = 42 cm²."
  },
  {
    id: "q-2023-1", year: 2023, topic: "ratio",
    prompt: "The ratio of red balls to blue balls is 2 : 5. There are 42 balls altogether. How many are red?",
    options: ["6", "12", "14", "30"], answer: 1,
    explanation: "There are 2 + 5 = 7 equal parts. Each part is 42 ÷ 7 = 6 balls, so red balls = 2 × 6 = 12."
  },
  {
    id: "q-2023-2", year: 2023, topic: "finance",
    prompt: "Find the simple interest on ₦24,000 at 5% per year for 3 years.",
    options: ["₦1,200", "₦2,400", "₦3,600", "₦7,200"], answer: 2,
    explanation: "Simple interest = P × R × T ÷ 100 = 24,000 × 5 × 3 ÷ 100 = ₦3,600."
  },
  {
    id: "q-2023-3", year: 2023, topic: "measurement",
    prompt: "A cuboid measures 8 cm by 5 cm by 4 cm. What is its volume?",
    options: ["17 cm³", "80 cm³", "160 cm³", "320 cm³"], answer: 2,
    explanation: "Volume of a cuboid = length × width × height = 8 × 5 × 4 = 160 cm³."
  },
  {
    id: "q-2024-1", year: 2024, topic: "number",
    prompt: "Express 0.375 as a fraction in its simplest form.",
    options: ["3/8", "375/1000", "5/8", "3/5"], answer: 0,
    explanation: "0.375 = 375/1000. Divide numerator and denominator by 125 to get 3/8."
  },
  {
    id: "q-2024-2", year: 2024, topic: "geometry",
    prompt: "Two angles in a triangle are 48° and 67°. Find the third angle.",
    options: ["55°", "65°", "75°", "115°"], answer: 1,
    explanation: "Angles in a triangle add up to 180°. The third angle is 180° − 48° − 67° = 65°."
  },
  {
    id: "q-2024-3", year: 2024, topic: "statistics",
    prompt: "Find the mean of 6, 8, 9 and 13.",
    options: ["8", "9", "9.5", "10"], answer: 1,
    explanation: "Add the values: 6 + 8 + 9 + 13 = 36. Divide by the 4 values: 36 ÷ 4 = 9."
  },
  {
    id: "q-2025-1", year: 2025, topic: "algebra",
    prompt: "Factorise x² + 7x + 12.",
    options: ["(x + 2)(x + 6)", "(x + 3)(x + 4)", "(x − 3)(x − 4)", "(x + 1)(x + 12)"], answer: 1,
    explanation: "Find two numbers with product 12 and sum 7: 3 and 4. Therefore x² + 7x + 12 = (x + 3)(x + 4)."
  },
  {
    id: "q-2025-2", year: 2025, topic: "measurement",
    prompt: "A circle has diameter 14 cm. Find its circumference using π = 22/7.",
    options: ["22 cm", "44 cm", "88 cm", "154 cm"], answer: 1,
    explanation: "Circumference = π × diameter = 22/7 × 14 = 44 cm."
  },
  {
    id: "q-2025-3", year: 2025, topic: "statistics",
    prompt: "A fair six-sided die is rolled once. What is the probability of getting an even number?",
    options: ["⅙", "⅓", "½", "⅔"], answer: 2,
    explanation: "The even outcomes are 2, 4 and 6: 3 favourable outcomes out of 6 equally likely outcomes. Probability = 3/6 = 1/2."
  },
  {
    id: "q-2026-1", year: 2026, topic: "number",
    prompt: "What is 25% of 360?",
    options: ["45", "72", "90", "120"], answer: 2,
    explanation: "25% is one quarter. So 25% of 360 = 360 ÷ 4 = 90."
  },
  {
    id: "q-2026-2", year: 2026, topic: "algebra",
    prompt: "Solve 2(y + 3) = 18.",
    options: ["3", "6", "9", "12"], answer: 1,
    explanation: "Divide both sides by 2: y + 3 = 9. Subtract 3 from both sides: y = 6."
  },
  {
    id: "q-2026-3", year: 2026, topic: "ratio",
    prompt: "A map uses a scale of 1 : 50,000. What actual distance is represented by 4 cm on the map?",
    options: ["200 m", "500 m", "2 km", "20 km"], answer: 2,
    explanation: "Actual distance = 4 × 50,000 = 200,000 cm. Since 100,000 cm = 1 km, the distance is 2 km."
  }
];

const storageKey = "maths-made-easy-jss3-progress";
let progress = {};
let storageAvailable = true;
let currentView = "home";

function showStorageNotice() {
  if (document.getElementById("storage-notice")) return;
  const notice = document.createElement("div");
  notice.id = "storage-notice";
  notice.setAttribute("role", "status");
  notice.textContent = "Progress could not be saved in this browser. Your answers will remain available until you close this page.";
  notice.style.cssText = "position:fixed;right:16px;bottom:16px;z-index:50;max-width:330px;padding:12px 15px;border:1px solid #efd6ab;border-radius:8px;background:#fff8e9;color:#705b35;font:12px/1.5 'DM Sans',sans-serif;box-shadow:0 6px 24px #17241d20";
  document.body.appendChild(notice);
}

function loadProgress() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) progress = parsed;
    }
  } catch (error) {
    storageAvailable = false;
    showStorageNotice();
  }
}

function saveProgress() {
  if (!storageAvailable) return;
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch (error) {
    storageAvailable = false;
    showStorageNotice();
  }
}

function getTopic(topicId) {
  return topics.find((topic) => topic.id === topicId);
}

function renderTopicCards() {
  const homeTopics = document.getElementById("home-topics");
  homeTopics.innerHTML = topics.slice(0, 6).map((topic) => `
    <button class="topic-card" data-topic-jump="${topic.id}">
      <span class="topic-symbol">${topic.icon}</span>
      <span class="topic-card-copy"><strong>${topic.name}</strong><small>${topic.concepts.length} key areas</small></span>
      <span class="topic-arrow">→</span>
    </button>
  `).join("");

  document.getElementById("syllabus-grid").innerHTML = topics.map((topic, index) => `
    <article class="syllabus-card" id="topic-${topic.id}">
      <div class="syllabus-card-top">
        <span class="syllabus-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="syllabus-icon">${topic.icon}</span>
        <div><h2>${topic.name}</h2><span class="question-topic">${questions.filter((question) => question.topic === topic.id).length} practice questions</span></div>
      </div>
      <p>${topic.description}</p>
      <h3>Key areas to revise</h3>
      <ul>${topic.concepts.map((concept) => `<li>${concept}</li>`).join("")}</ul>
      <button class="text-button topic-practice-link" data-topic="${topic.id}" style="margin-top:13px">Practise this topic <span>→</span></button>
    </article>
  `).join("");

  const topicFilter = document.getElementById("topic-filter");
  topicFilter.insertAdjacentHTML("beforeend", topics.map((topic) => `<option value="${topic.id}">${topic.name}</option>`).join(""));
}

function renderQuestions() {
  const year = document.getElementById("year-filter").value;
  const topic = document.getElementById("topic-filter").value;
  const filtered = questions.filter((question) =>
    (year === "all" || String(question.year) === year) &&
    (topic === "all" || question.topic === topic)
  );
  const questionList = document.getElementById("question-list");
  document.getElementById("question-count").textContent = `${filtered.length} ${filtered.length === 1 ? "question" : "questions"}`;
  document.getElementById("empty-state").hidden = filtered.length > 0;
  questionList.innerHTML = filtered.map((question) => {
    const topicName = getTopic(question.topic).name;
    const saved = progress[question.id];
    const selected = saved ? Number(saved.selected) : -1;
    const isCorrect = saved ? Boolean(saved.correct) : false;
    const feedback = saved
      ? `<span class="question-feedback ${isCorrect ? "is-correct" : ""}">${isCorrect ? "That’s correct — well done!" : "Not quite. The correct answer is highlighted."}</span>`
      : `<span class="question-feedback" id="feedback-${question.id}" aria-live="polite"></span>`;
    return `
      <article class="question-card" data-question="${question.id}">
        <div class="question-meta"><span class="question-topic">${topicName}</span><span class="question-year">${question.year} revision</span></div>
        <h2>${question.prompt}</h2>
        <div class="option-list">
          ${question.options.map((option, index) => {
            const correctClass = saved && index === question.answer ? "correct-option" : "";
            const wrongClass = saved && selected === index && !isCorrect ? "wrong-option" : "";
            return `<label class="option-label ${correctClass} ${wrongClass}"><input type="radio" name="${question.id}" value="${index}" ${selected === index ? "checked" : ""} ${saved ? "disabled" : ""}><span>${String.fromCharCode(65 + index)}. ${option}</span></label>`;
          }).join("")}
        </div>
        <div class="question-actions"><button class="check-button" data-check="${question.id}" ${saved ? "disabled" : ""}>${saved ? "Answer checked" : "Check answer"}</button>${feedback}</div>
        <div class="answer-explanation ${saved ? "visible" : ""}"><strong>Answer: ${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}.</strong> ${question.explanation}</div>
      </article>
    `;
  }).join("");
}

function updateStats() {
  const entries = Object.values(progress);
  const answered = entries.length;
  const correct = entries.filter((entry) => Boolean(entry.correct)).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  document.getElementById("answered-stat").innerHTML = `${String(answered).padStart(2, "0")} <span>questions</span>`;
  document.getElementById("correct-stat").innerHTML = `${String(correct).padStart(2, "0")} <span>so far</span>`;
  document.getElementById("accuracy-stat").textContent = answered ? `${accuracy}% correct so far` : "Your practice adds up";
  document.getElementById("answered-track").style.width = `${Math.min(accuracy, 100)}%`;
  document.getElementById("progress-answered").textContent = answered;
  document.getElementById("progress-correct").textContent = correct;
  document.getElementById("progress-rate").textContent = answered ? `${accuracy}%` : "—";
  document.getElementById("progress-accuracy").textContent = answered ? `${answered - correct} ${answered - correct === 1 ? "answer" : "answers"} to revisit and learn from.` : "Keep practising to build your score.";
}

function setView(viewName, updateHash) {
  const availableViews = ["home", "syllabus", "practice", "progress"];
  const view = availableViews.includes(viewName) ? viewName : "home";
  currentView = view;
  document.querySelectorAll(".view").forEach((section) => section.classList.toggle("active", section.id === `view-${view}`));
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === view));
  const labels = { home: "Overview", syllabus: "Syllabus", practice: "Practice questions", progress: "My progress" };
  document.getElementById("current-crumb").textContent = labels[view];
  if (updateHash && window.location.hash !== `#${view}`) window.history.pushState(null, "", `#${view}`);
  closeMobileMenu();
  if (view === "progress") updateStats();
}

function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("mobile-scrim").classList.remove("visible");
  document.getElementById("menu-button").setAttribute("aria-expanded", "false");
}

function checkAnswer(questionId) {
  const question = questions.find((item) => item.id === questionId);
  if (!question || progress[questionId]) return;
  const selectedInput = document.querySelector(`input[name="${questionId}"]:checked`);
  const feedback = document.getElementById(`feedback-${questionId}`);
  if (!selectedInput) {
    feedback.textContent = "Choose an answer first.";
    return;
  }
  const selected = Number(selectedInput.value);
  progress[questionId] = { selected, correct: selected === question.answer };
  saveProgress();
  renderQuestions();
  updateStats();
}

function openTopic(topicId) {
  const topicFilter = document.getElementById("topic-filter");
  topicFilter.value = topicId;
  document.getElementById("year-filter").value = "all";
  renderQuestions();
  setView("practice", true);
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setView(viewButton.dataset.view, true);
    return;
  }
  const topicJump = event.target.closest("[data-topic-jump]");
  if (topicJump) {
    setView("syllabus", true);
    window.setTimeout(() => document.getElementById(`topic-${topicJump.dataset.topicJump}`).scrollIntoView({ behavior: "smooth", block: "center" }), 80);
    return;
  }
  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) {
    openTopic(topicButton.dataset.topic);
    return;
  }
  const checkButton = event.target.closest("[data-check]");
  if (checkButton) checkAnswer(checkButton.dataset.check);
});

document.getElementById("year-filter").addEventListener("change", renderQuestions);
document.getElementById("topic-filter").addEventListener("change", renderQuestions);
document.getElementById("menu-button").addEventListener("click", () => {
  const open = document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("mobile-scrim").classList.toggle("visible", open);
  document.getElementById("menu-button").setAttribute("aria-expanded", String(open));
});
document.getElementById("mobile-scrim").addEventListener("click", closeMobileMenu);
document.getElementById("reset-progress").addEventListener("click", () => {
  if (!window.confirm("Reset all saved practice progress on this device?")) return;
  progress = {};
  saveProgress();
  renderQuestions();
  updateStats();
});
window.addEventListener("hashchange", () => setView(window.location.hash.slice(1), false));

loadProgress();
renderTopicCards();
renderQuestions();
updateStats();
document.getElementById("today-date").textContent = new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" }).format(new Date());
setView(window.location.hash.slice(1) || "home", false);