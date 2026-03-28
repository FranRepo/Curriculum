function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const donuts = document.querySelectorAll(".donut");

donuts.forEach(donut => {
  const percent = donut.getAttribute("data-percent");
  donut.style.setProperty("--percent", percent);
});