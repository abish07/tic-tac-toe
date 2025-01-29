let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");
let turnO = true;
// Winning patterns
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Horizontal
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Vertical
  [0, 4, 8],
  [2, 4, 6], // Diagonal
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Check if the box is already clicked
    if (!box.classList.contains("clicked")) {
      // Set the symbol for the current player
      if (turnO) {
        box.innerHTML = "O";
        turnO = false;
      } else {
        box.innerHTML = "X";
        turnO = true;
      }
      // Mark the box as clicked
      box.classList.add("clicked");
      checkWinner();
    }
  });
});
checkWinner = () => {
  for (let pattern of winPattern) {
     let pos1 = boxes[pattern[0]].innerText;
     let pos2 = boxes[pattern[1]].innerText;
     let pos3 = boxes[pattern[2]].innerText;
     if(pos1!= "" && pos2!= "" && pos3!= ""){
         if(pos1 == pos2 && pos2 == pos3){
            alert("Winner is " + pos1); 
         }  
      }
  }
};
