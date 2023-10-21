const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });