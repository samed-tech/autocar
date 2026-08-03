document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", () => {
    button.innerText = "❤️ Favorilere Eklendi";
    button.style.background = "#ff3b30";
  });
});
