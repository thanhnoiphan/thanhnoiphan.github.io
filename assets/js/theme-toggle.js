(function () {
  console.log("🔄 Theme toggle script loaded");

  const toggle = document.getElementById('theme-toggle');
  if (!toggle) {
    console.error("❌ No #theme-toggle button found.");
    return;
  }

  console.log("✅ Theme toggle button found");

  // Xác định theme hiện tại (ưu tiên localStorage, sau đó theo hệ thống)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  console.log("🌗 Current theme:", currentTheme);

  // Xử lý khi bấm nút
  toggle.addEventListener('click', function () {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    console.log("🌈 Theme changed to:", newTheme);
  });
})();

