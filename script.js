function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const fills = document.querySelectorAll(".fill");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.getAttribute("data-width");

      fill.style.width = width;
    }
  });
}, { threshold: 0.5 });

fills.forEach(fill => {
  const width = fill.style.width;

  fill.style.width = "0";
  fill.setAttribute("data-width", width);

  observer.observe(fill);
});