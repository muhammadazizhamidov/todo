function addItem() {
  var inputValue = document.getElementById("input").value;
  var list = document.getElementById("list");
  var errorEl = document.getElementById("error");

  if (inputValue.length < 2) {
    errorEl.innerText = "Sizning so'zingiz 2 tadan ko'p bo'lishi kerak";
    return;
  }

    errorEl.innerText = "";

  console.log(inputValue.length)

  var newItemEl = document.createElement("li");

  newItemEl.innerText = inputValue;
  newItemEl.className = "item";

  list.appendChild(newItemEl);
}
