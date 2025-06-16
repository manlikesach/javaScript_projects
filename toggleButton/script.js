const box = document.getElementById("box");
const btn = document.getElementById("toggle");

btn.addEventListener("click", () => {
  box.classList.toggle("highlight");
});
