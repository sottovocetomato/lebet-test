import "./assets/styles/fonts.css";
import "./assets/styles/style.scss";

const expandBtn = document.querySelector(".expand-btn");
const cardContent = document.querySelector(".card__content__collapsible");
const cardContentText = document.querySelector(".card__content__collapsible p");
if (!expandBtn) {
  console.error("Can't find an element with class 'expand'");
}

const truncateRect = cardContent.getBoundingClientRect();
let truncateInnerRect = cardContentText.getBoundingClientRect();

cardContent.style.setProperty("--truncate-height", `${truncateRect.height}px`);

expandBtn.addEventListener("click", () => {
  if (!cardContent.classList.contains("collapsed")) {
    close();
  } else {
    open();
  }
});

function open() {
  // cardContent.classList.remove("collapsed");
  cardContentText.classList.remove("clamped");
  window.requestAnimationFrame(() => {
    truncateInnerRect = cardContentText.getBoundingClientRect();
    cardContent.style.setProperty(
      "--truncate-height-expanded",
      `${truncateInnerRect.height + 40}px`
    );
    cardContent.classList.remove("collapsed");
  });
}

function close() {
  cardContent.classList.add("collapsed");
  setTimeout(() => {
    cardContentText.classList.add("clamped");
  }, 300);
}
