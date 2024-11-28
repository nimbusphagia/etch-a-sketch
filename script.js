//CREATE GRID
const container = document.querySelector("#container");

function createDivs (amount){
    for (i = 0; i < (amount * amount); i++){
        let square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}

createDivs(16);

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


