document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      navLinks.forEach(function(link) {
        link.classList.remove("text-primary-500");
        link.classList.add("text-white");
      });
      this.classList.remove("text-white");
      this.classList.add("text-primary-500");
    });
  });
});

