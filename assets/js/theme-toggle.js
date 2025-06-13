const toggleButton = document.getElementById('theme-toggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

// Lấy theme hiện tại từ localStorage hoặc mặc định là light
let currentTheme = localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);

toggleButton.addEventListener('click', () => {
  currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
});
