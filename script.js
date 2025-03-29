// Initialize the grid on page load
document.addEventListener("DOMContentLoaded", (event) => {
    const createGridButton = document.getElementById("createGrid");
    const clearGridButton = document.getElementById("clearGrid");
    const resetGridButton = document.getElementById("resetGrid");
    const gridContainer = document.getElementById("gridContainer");
    const inputText = document.getElementById("gridInput");
    const gridSizeDisplay = document.getElementById("gridSizeDisplay");
    createGridButton.addEventListener("click", gridGenerator);
    clearGridButton.addEventListener("click", gridClear);
    resetGridButton.addEventListener("click", gridReset);
    gridReset();
});

// Clear the color on the grid while keeping the grid size
function gridClear(){
    const columns = gridContainer.querySelectorAll(".column");
    columns.forEach(column => {
        column.style.backgroundColor = '';
    });
}

// Generate the grid based on the input size
function gridGenerator(){
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
    }
    gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;
}

// Reset the grid to the default colorless 8x8 size 
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
}
    gridSizeDisplay.textContent = `8 x 8`;
}