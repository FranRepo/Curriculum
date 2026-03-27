function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

window.addEventListener("load", () => {
    const fills = document.querySelectorAll(".fill");
  
    fills.forEach(fill => {
      const width = fill.style.width;
      fill.style.width = "0";
  
      setTimeout(() => {
        fill.style.transition = "width 1.5s ease";
        fill.style.width = width;
      }, 300);
    });
});