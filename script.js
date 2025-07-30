function greetUser() {
  var name = document.getElementById("nameInput").value;
  var greeting = document.getElementById("greeting");

  if (name !== "") {
    greeting.innerText = "Hello, " + name;
  } else {
    greeting.innerText = "Hello";
  }
}
function changeColor(box) {
  var colorName = box.innerText.toLowerCase(); 
  box.style.backgroundColor = colorName;
  box.style.color = (colorName === "yellow") ? "black" : "white";
}

