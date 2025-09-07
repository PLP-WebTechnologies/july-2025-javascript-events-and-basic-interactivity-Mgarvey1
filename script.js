// ==========================
// PART 1: EVENT HANDLING
// ==========================

// 1. Hover event: shows a message when button is hovered
document.getElementById("hoverBtn").addEventListener("mouseover", () => {
  document.getElementById("hoverMsg").textContent = "You hovered over the button!";
});

// 2. Key press event: shows typed text live
document.getElementById("keyInput").addEventListener("keyup", (e) => {
  document.getElementById("keyMsg").textContent = "You typed: " + e.target.value;
});


// ==========================
// PART 2: INTERACTIVE FEATURES
// ==========================

// Counter feature: increases every time button is clicked
let counter = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  counter++; // increase count
  document.getElementById("counterDisplay").textContent = "Count: " + counter;
});

// FAQ collapsible: toggle showing/hiding answers
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    let answer = btn.nextElementSibling; // next element = answer
    // toggle visibility
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});


// ==========================
// PART 3: FORM VALIDATION
// ==========================

// Validate name, email, password when form is submitted
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop the form from reloading page

  // Grab values from inputs
  let name = document.getElementById("nameInput").value.trim();
  let email = document.getElementById("emailInput").value.trim();
  let password = document.getElementById("passwordInput").value.trim();
  let msg = ""; // feedback message

  // Validation rules
  if (name.length < 2) {
    msg = "❌ Name must be at least 2 characters long.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg = "❌ Please enter a valid email.";
  } else if (password.length < 6) {
    msg = "❌ Password must be at least 6 characters long.";
  } else {
    msg = "✅ Success! Form submitted.";
  }

  // Show message and apply styles
  document.getElementById("formMsg").textContent = msg;
  document.getElementById("formMsg").className = msg.startsWith("✅") ? "success" : "error";
});


// ==========================
// PART 4: PREVIOUS FRAMEWORK (Week 5 base)
// ==========================

// Age checker: verifies if age >= 18
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = document.getElementById("ageInput").value;
  let result = (age >= 18) ? "✅ You are old enough to vote!" : "❌ You are too young to vote.";
  document.getElementById("ageResult").textContent = result;
});

// Functions demo
function calculateTotal(a, b) {
  return a + b;
}
document.getElementById("calcBtn").addEventListener("click", () => {
  let total = calculateTotal(5, 10);
  document.getElementById("calcResult").textContent = "Total is: " + total;
});

// Loops demo: prints numbers 1–5
document.getElementById("loopBtn").addEventListener("click", () => {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});

// DOM interactivity
// 1. Toggle dark/light mode
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Add new list items dynamically
document.getElementById("newItemBtn").addEventListener("click", () => {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});

// 3. Change welcome text immediately when page loads
document.getElementById("welcomeText").textContent =
  "Welcome! This text was changed by JavaScript.";
