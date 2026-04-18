function getStoredTheme() {
  return localStorage.getItem("profile-theme") || "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("profile-theme", theme);

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const label = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";
    const iconPath =
      theme === "dark" ? "assets/light-mode.svg" : "assets/dark-mode.svg";

    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);

    const labelElement = button.querySelector("[data-theme-toggle-label]");
    if (labelElement) {
      labelElement.textContent = label;
    }

    const iconElement = button.querySelector("[data-theme-icon]");
    if (iconElement) {
      iconElement.setAttribute("src", iconPath);
      iconElement.setAttribute("alt", "");
    }
  });
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || getStoredTheme();
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

const CONTACT_META = {
  email: {
    icon: "assets/gmail-logo.svg",
    href: (value) => `mailto:${value}`,
  },
  github: {
    icon: "assets/github-logo.svg",
    href: (value) => `https://${value}`,
  },
  linkedin: {
    icon: "assets/linkedin-logo.svg",
    href: (value) => `https://${value}`,
  },
  youtube: {
    icon: "assets/youtube-logo.svg",
    href: (value) => `https://${value}`,
  },
};

function renderProfile() {
  const data = window.PROFILE_DATA;

  document.querySelectorAll("[data-profile-name]").forEach((element) => {
    element.textContent = data.name;
  });

  document.querySelectorAll("[data-profile-title]").forEach((element) => {
    element.textContent = data.title;
  });

  document.querySelectorAll("[data-profile-description]").forEach((element) => {
    element.textContent = data.description;
  });

  document.querySelectorAll("[data-profile-about]").forEach((element) => {
    element.textContent = data.about;
  });

  document.querySelectorAll("[data-profile-tags]").forEach((tagsList) => {
    tagsList.innerHTML = (data.tags || [])
      .map((tag) => `<li class="profile-tag-item">${tag}</li>`)
      .join("");
  });

  const skillsList = document.querySelector("[data-profile-skills]");
  if (skillsList) {
    skillsList.innerHTML = data.skills
      .map((skill) => `<li class="profile-list-item">${skill}</li>`)
      .join("");
  }

  const projectsList = document.querySelector("[data-profile-projects]");
  if (projectsList) {
    projectsList.innerHTML = data.projects
      .map(
        (project) => `
          <li class="profile-list-item">
            <strong>${project.title}</strong>
            <p class="mb-0">${project.description}</p>
          </li>
        `,
      )
      .join("");
  }

  document
    .querySelectorAll("[data-profile-contacts]")
    .forEach((contactsContainer) => {
      contactsContainer.innerHTML = Object.entries(data.contact || {})
        .filter(([key, value]) => CONTACT_META[key] && value)
        .map(([key, value]) => {
          const contact = CONTACT_META[key];
          const href = contact.href(value);
          const isExternal = key !== "email";

          return `
            <a
              class="profile-contact-link"
              href="${href}"
              ${isExternal ? 'target="_blank" rel="noreferrer noopener"' : ""}
            >
              <img class="profile-contact-icon" src="${contact.icon}" alt="" />
              <span>${value}</span>
            </a>
          `;
        })
        .join("");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  setTheme(getStoredTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });
});
