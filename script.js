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
