const boardLocation = document.getElementById("board-container");
const letterNummeration = ["A", "B", "C", "D", "E", "F", "G", "H"]
const maxSize = 8; // Spaces

let boardMatrix = [];

// Parent container / 8 for sizes of boxes in pixels


// Create Matrix [
// [A1, B1, C1, D1, E1, F1, G1]
// [A2, B2, C2, D2, E2, F2, G2]
// ]
// Creates matrix of chess board
 
function createBoardMatrix() {
  for(let i = letterNummeration.length-1; i >= 0; i--) {
      let letterLocation = letterNummeration[i];
      let returnArray = [];
      for(let j = 1; j <= maxSize; j++) {
        let boardLocation = "" + letterLocation + j;
        returnArray.push(boardLocation)
      }
      boardMatrix.push(returnArray);
  }
}

function createSpace(color) {
  let space = document.createElement("div");
  space.style.width = `100px`;
  space.style.height = `100px`;
  space.style.backgroundColor = color;
  return space;
}

function renderBoard(array) {
  let startBlack;
  for(let i = 0; i < array.length; i++) {
    if(i === 0) startBlack = true;
    startBlack = !startBlack;
    for(let j = 0; j < array[i].length; j++) {
      if(j % 2 === 0) {
        startBlack ? boardLocation.appendChild(createSpace("black")) : boardLocation.appendChild(createSpace("white"));
      } else {
          startBlack ? boardLocation.appendChild(createSpace("white")) : boardLocation.appendChild(createSpace("black"));
      }
    }
  }
}



createBoardMatrix();
renderBoard(boardMatrix);



console.log(boardMatrix);

