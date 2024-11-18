const cursor = document.getElementById("cursor");

let mouseX = 0, mouseY = 0;

let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function smoothCursor() {
  const delay = 0.1;

  cursorX += (mouseX - cursorX) * delay;
  cursorY += (mouseY - cursorY) * delay;

  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

  requestAnimationFrame(smoothCursor);
}

requestAnimationFrame(() => {
  cursorX = mouseX;
  cursorY = mouseY;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
});

smoothCursor();