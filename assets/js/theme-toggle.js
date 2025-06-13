(function () {
  const toggle = document.getElementById("theme-toggle");

  // Check saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // Handle toggle
  toggle.addEventListener("click", () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
})();
