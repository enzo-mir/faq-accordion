const btns = document.querySelectorAll("button");
const h2s = document.querySelectorAll("h2");

function openAccordion(e) {
  const article = e.target.parentNode;
  if (article.classList.contains("open")) {
    article.querySelector("button").innerText = "+";
  } else {
    article.querySelector("button").innerText = "-";
  }
  article.classList.toggle("open");
}

btns.forEach((btn) => {
  btn.addEventListener("click", openAccordion);
});
h2s.forEach((h2) => {
  h2.addEventListener("click", openAccordion);
  h2.addEventListener("keydown", (e) => (e.key === "Enter" ? openAccordion(e) : null));
});
