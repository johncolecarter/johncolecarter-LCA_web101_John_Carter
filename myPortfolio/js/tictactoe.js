var gameMarker = "X";
function changeMarkerToX() {
  var gameMarker = "X";
  console.log("The X was clicked!");
}
function changeMarkerToO() {
  var gameMarker = "O";
  console.log("The O was clicked!");
}
var xturn = true;
function placeMark(ID) {
  if (xturn) {
    document.getElementById(ID).innerHTML = "X";
  } else {
    document.getElementById(ID).innerHTML = "O";
  }
  xturn = !xturn;
}
function resetGame() {
  console.log("The resetGame button was clicked!");
}

function resetGame() {
  location.reload();
}
