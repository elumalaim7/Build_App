// ---------- Typing effect ----------
const roles = ["UX Designer", "App Builder", "AI Product Creator", "Designer for Everyone"];

const typedEl = document.getElementById("typed");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = roles[roleIndex];

  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800); // pause on full word
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 40 : 90);
}

type();

// ---------- Mobile menu ----------
const toggle = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

// Close the menu when a link is clicked
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// ---------- Skills ----------
const skills = [
  "UX Design", "Figma", "Wireframing", "Prototyping", "User Research",
  "HTML", "CSS", "JavaScript", "Python", "AI Tools"
];

const skillsList = document.getElementById("skillsList");
skills.forEach((skill) => {
  const chip = document.createElement("span");
  chip.className = "skill-chip";
  chip.textContent = skill;
  skillsList.appendChild(chip);
});

// ---------- Projects ----------
const projects = [
  {
    emoji: "🤖",
    title: "AI Assistant for Daily Tasks",
    desc: "An AI assistant that turns simple text commands into actions — reminders, quick lookups, and more — for people who are not technical.",
    tags: ["Python", "LLM", "API"],
  },
  {
    emoji: "📊",
    title: "Data to Decisions",
    desc: "A tool that takes messy datasets and returns clear summaries and charts, so small teams can make decisions without a data scientist.",
    tags: ["Data Analysis", "Python", "Visualization"],
  },
  {
    emoji: "🌐",
    title: "Community Hub",
    desc: "A platform where people share and find local solutions — designed to be simple enough for anyone to use.",
    tags: ["UX Design", "React", "Node.js"],
  },
];

const projectsList = document.getElementById("projectsList");
projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project";

  const emoji = document.createElement("div");
  emoji.className = "project__emoji";
  emoji.textContent = project.emoji;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.textContent = project.desc;

  const tags = document.createElement("div");
  tags.className = "project__tags";
  project.tags.forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t;
    tags.appendChild(span);
  });

  card.append(emoji, title, desc, tags);
  projectsList.appendChild(card);
});

// ---------- Contact form (demo) ----------
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name;
  const email = form.email;
  const message = form.message;
  let valid = true;

  // Clear previous invalid states
  [name, email, message].forEach((f) => f.classList.remove("invalid"));

  if (!name.value.trim()) {
    name.classList.add("invalid");
    valid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add("invalid");
    valid = false;
  }
  if (!message.value.trim()) {
    message.classList.add("invalid");
    valid = false;
  }

  if (!valid) {
    formStatus.textContent = "Please fill in all fields with a valid email.";
    return;
  }

  // This is a static demo, so we just show a confirmation.
  // To actually send messages you'd POST this to a backend or a service
  // like Formspree / EmailJS.
  formStatus.textContent = `Thanks ${name.value.trim()}! Your message was received. I'll get back to you soon.`;
  form.reset();
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();