// Project data
const projects = [
  {
    title: "dropdown menu",
    description: " A modern dropdown menu",
    live: "https://dropdown-01.vercel.app/",
    github: "https://github.com/Maxamedcardoso/Dropdown-01",
  },
  {
    title: "Sidebar Menu",
    description: "A modern sidebar menu app.",
    live: "https://sidebar-01.netlify.app/",
    github: "https://github.com/Maxamedcardoso/sidebar-01",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio website, built with HTML, CSS, and JS.",
    live: "#",
    github: "https://github.com/yourusername/portfolio",
  },
];

function renderProjects() {
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = "";
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.live}" target="_blank">Live Demo</a> |
      <a href="${project.github}" target="_blank">GitHub</a>
    `;
    projectList.appendChild(card);
  });
}

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(theme) {
  if (theme === "light") {
    body.classList.add("light");
    themeToggle.textContent = "🌞";
  } else {
    body.classList.remove("light");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
}

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("light") ? "dark" : "light";
  setTheme(newTheme);
});

// Fun Fact dynamic word-by-word animation
function animateFunFact() {
  const funFact = document.querySelector(".funfact blockquote");
  if (!funFact) return;
  const text = funFact.textContent.trim();
  const words = text.split(" ");
  funFact.textContent = "";
  let i = 0;
  function showWord() {
    if (i < words.length) {
      funFact.textContent += (i === 0 ? "" : " ") + words[i];
      i++;
      setTimeout(showWord, 250); // Adjust speed here (ms)
    }
  }
  showWord();
}

// Hero heading dynamic letter-by-letter infinite animation
function animateHeroHeading() {
  const heroHeading = document.querySelector(".hero h1");
  if (!heroHeading) return;
  const text = heroHeading.textContent.trim();
  let i = 0;
  function showLetter() {
    heroHeading.textContent = text.slice(0, i);
    if (i <= text.length) {
      i++;
      setTimeout(showLetter, 120); // Adjust speed here (ms)
    } else {
      setTimeout(() => {
        i = 0;
        showLetter();
      }, 1200); // Pause before restarting
    }
  }
  showLetter();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  animateFunFact();
  animateHeroHeading();
});
