document.addEventListener("DOMContentLoaded", (event) => {
    const createGridButton = document.getElementById("createGrid");
    const clearGridButton = document.getElementById("clearGrid");
    const resetGridButton = document.getElementById("resetGrid");
    const gridContainer = document.getElementById("gridContainer");
    createGridButton.addEventListener("click", gridGenerator);
    clearGridButton.addEventListener("click", gridClear);
    resetGridButton.addEventListener("click", gridReset);
    gridReset();
});



function gridClear(){
    console.log("gridCleared");
    const columns = gridContainer.querySelectorAll(".column");
    columns.forEach(column => {
        column.style.backgroundColor = '';
    });
}


function gridGenerator(){
    console.log("gridGenerated")
    let gridSize = document.getElementById('gridInput').value
    gridContainer.innerHTML = ""; 
    for(let i = 0; i<gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        for(let j = 0; j<gridSize; j++){
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseover", function() {
                column.style.backgroundColor = "black";
            });
        }
    }}

function gridReset(){
    gridContainer.innerHTML = ""; 
    for(let i = 0; i<8; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        for(let j = 0; j<8; j++){
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseover", function() {
                column.style.backgroundColor = "black";
            });
        }
}}