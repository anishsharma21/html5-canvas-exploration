const heading = document.getElementById("heading");
const button = document.getElementById("myButton");
const hoverArea = document.getElementById("hoverArea");

heading.textContent = "new heading text";
button.onclick = () => alert("button clicked!");
hoverArea.onmousemove = (event) =>
  (hoverArea.textContent = `X: ${event.clientX}, Y: ${event.clientY}`);
