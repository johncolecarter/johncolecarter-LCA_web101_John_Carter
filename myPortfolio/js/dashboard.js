const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editButton = document.createElement("button");
    editButton.innerHTML = "EDIT";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(input));

    removeButton.addEventListener("click", () => this.remove(itemBox));
  }

  edit(input) {
    input.disabled = !input.disabled;
  }
  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}
addButton.addEventListener("click", check);

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12;
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

var myLocation = document.getElementById("my-coordinates");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition);
  } else {
    myLocation.innerHTML = "Not available";
  }
}

function displayPosition(position) {
  myLocation.innerHTML =
    "Longitude: " +
    position.coords.longitude +
    " Latitude: " +
    position.coords.latitude;
}
