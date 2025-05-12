/// Elements
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveName");
const clearBtn = document.getElementById("clearName");
const themeButtons = document.querySelectorAll(".theme-btn");

// Load stored name and theme
window.onload = function () {
  const savedName = localStorage.getItem("name");
  const savedTheme = localStorage.getItem("theme");

  if (savedName) {
    greeting.textContent = `Welcome, ${savedName}!`;
  }

  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
};

// Save name
saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("name", name);
    greeting.textContent = `Welcome, ${name}!`;
    nameInput.value = "";
  }
});

// Clear name
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("name");
  greeting.textContent = "Welcome!";
});

// Theme switching
themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.dataset.theme;

    // Remove previous theme classes
    document.body.className = "";

    // Add new theme
    document.body.classList.add(selectedTheme);

    // Store selection
    localStorage.setItem("theme", selectedTheme);

    // Animate button
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 300);
  });
});

