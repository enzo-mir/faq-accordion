const btns = document.querySelectorAll("button");
const h2s = document.querySelectorAll("h2");

function openAccordion(e) {
  const openedArticle = document.querySelector("article.open");
  openedArticle.classList.remove("open");
  e.target.parentNode.classList.add("open");
}

btns.forEach((btn) => {
  btn.addEventListener("click", openAccordion);
});
h2s.forEach((h2) => {
  h2.addEventListener("click", openAccordion);
});
