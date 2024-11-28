//CREATE GRID
const container = document.querySelector("#container");
let initialGridSize = 16;
function createGrid (amount){
    for (i = 0; i < (amount * amount); i++){
        let square = document.createElement("div");
        let width = 800 / amount;
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

//ADD-ONS
/* 
_ eraseALL button
_ color options (small palette)
_ style interface 
*/
//ERASER

function eraseColor (event){
    let selectedSquare = event.target;
    if (selectedSquare !== container){
        selectedSquare.classList.remove("coloredSquare");   
    }
}

function startEraser () {
    if(event.shiftKey){
        container.addEventListener("mouseover", eraseColor);
        }
};
function stopEraser () {
    if(event.shiftKey){
        container.removeEventListener("mouseover", eraseColor);
        }
}
container.addEventListener("mousedown", startEraser);
container.addEventListener("mouseup", stopEraser);
container.addEventListener("mouseleave", stopEraser);
;


