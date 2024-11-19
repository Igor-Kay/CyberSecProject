const gridContainer = document.getElementById("grid-container");

const rows = Math.floor(window.innerHeight / 20);
const cols = Math.floor(window.innerWidth / 20);

for (let i = 0; i < rows * cols; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gridContainer.appendChild(cell);
}

function getRandomChar() {
  return String.fromCharCode(
    Math.random() > 0.5
      ? Math.floor(Math.random() * 10) + 48
      : Math.floor(Math.random() * 26) + 65
  );
}

function animateCell(cell) {
  let animationInterval;

  cell.dataset.active = "true";

  animationInterval = setInterval(() => {
    cell.textContent = getRandomChar();
  }, 100);

  setTimeout(() => {
    cell.classList.add("fade-out");
    setTimeout(() => {
      cell.textContent = "";
      cell.classList.remove("fade-out");
      cell.dataset.active = "false";
      clearInterval(animationInterval);
    }, 1000);
  }, 2000);
}

document.querySelectorAll(".cell").forEach((cell) => {
  cell.dataset.active = "false";

  cell.addEventListener("mouseenter", () => {
    if (cell.dataset.active === "false") {
      animateCell(cell);
    }
  });
});
