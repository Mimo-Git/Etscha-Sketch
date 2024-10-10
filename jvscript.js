const container = document.querySelector(".container");


const buttonRestart = document.querySelector("button");
buttonRestart.addEventListener("click", (e) => {
    let squareLengthSide = prompt("Quelle longueur?", 4);
    if (squareLengthSide < 100) {
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        generateSquare(squareLengthSide);
    }
});

function generateSquare(squareLengthSide) {


const tabContainer = [];


for (let i=0; i<squareLengthSide; i++){
    // containerGrid.remove();
    let containerGrid = document.createElement('div');
    containerGrid.style.display = "flex";
    containerGrid.style.flex = "1";
    // containerGrid.style.border = "1px solid yellow"

    container.appendChild(containerGrid);
    tabContainer[i] = containerGrid;
    
    for(let j=0; j<squareLengthSide; j++){
        // divGrid.remove();

        let divGrid = document.createElement('div');
        
        divGrid.setAttribute("style", "border: 1px solid orange; flex: 1");
        divGrid.classList.add("divGridClass");

        tabContainer[i].appendChild(divGrid);
    }
}

const divGridClass = document.querySelectorAll(".divGridClass");

divGridClass.forEach(divGrid => {
    divGrid.addEventListener("mouseover", (e) =>{
        divGrid.style.backgroundColor = "blue";
    })

    divGrid.addEventListener("mouseout", (e) =>{
        divGrid.style.backgroundColor = "white";
    })

});
};

