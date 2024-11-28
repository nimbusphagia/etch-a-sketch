//CREATE GRID
const container = document.querySelector("#container");
let initialGridSize = 16;
function createGrid (amount){
    for (i = 0; i < (amount * amount); i++){
        let square = document.createElement("div");
        let width = 1000 / amount;
        square.className = "square";
        container.appendChild(square);
        square.style.width = width + "px";
        square.style.height = width + "px";
    }
}
createGrid(initialGridSize);

//HOVER
function changeColor (event){
    let selectedSquare = event.target;
    if (selectedSquare !== container){
        selectedSquare.classList.add("coloredSquare");   
    }
}

function startColor () {
    container.addEventListener("mouseover", changeColor);
};
function stopColor () {
    container.removeEventListener("mouseover", changeColor);
}
container.addEventListener("mousedown", startColor);
container.addEventListener("mouseup", stopColor);
container.addEventListener("mouseleave", stopColor);

//USER INPUT
/* 
1. Button calls prompt to get new grid size value
2. Delete previous grid to then createGrid() with the new value, change gridSize text
3. fit the grid with CSS

*/

const btnResize = document.querySelector("button");
let paraGridSize = document.querySelector("#gridSize");

function promptSize (){
    let newSize = prompt("Enter new grid size(1-100):", "");
    newSize;
    if(newSize === null){
        return;
    } else if( newSize > 100 || newSize < 1 || isNaN(newSize)){
        newSize = prompt("Grid size has to be a number between 1 - 100. Try again.");
    } else {
        container.innerHTML = "";
        paraGridSize.innerText = newSize + "x" + newSize;
        createGrid(+newSize);
    }
}
btnResize.addEventListener("click", promptSize);



