document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav.site-nav ul");

  menuToggle.addEventListener("click", function() {
    menu.classList.toggle("show");
  });

  // Bấm ngoài menu để đóng menu (tăng trải nghiệm)
  document.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});
