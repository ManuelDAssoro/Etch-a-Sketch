// Initialize the grid on page load
document.addEventListener("DOMContentLoaded", (event) => {
    // get the html elements
    const createGridButton = document.getElementById("createGrid");
    const clearGridButton = document.getElementById("clearGrid");
    const resetGridButton = document.getElementById("resetGrid");
    const gridContainer = document.getElementById("gridContainer");
    const inputText = document.getElementById("gridInput");
    const gridSizeDisplay = document.getElementById("gridSizeDisplay");
    // add event listeners to the buttons
    createGridButton.addEventListener("click", userInput);
    clearGridButton.addEventListener("click", gridClear);
    resetGridButton.addEventListener("click", () => gridGenerator(8));
    // add event listener to the input text(press enter to create grid)
    inputText.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            userInput();
        }
    });
    // prevents page reload
    // when pressing enter in the input field
    inputText.closest("form")?.addEventListener("submit", function(event) {
        event.preventDefault();
    });
    // create the default grid
    gridGenerator(8);
});



// Validate user input and call gridGenerator function
function userInput(){
    let gridSize = document.getElementById('gridInput').value
    if(gridSize < 2 || gridSize > 100){
        alert("Please enter a number between 2 and 100.");
        return;
    }
    else{
        gridGenerator(gridSize);
    }
}

// Clear the color on the grid while keeping the grid size
function gridClear(){
    const columns = gridContainer.querySelectorAll(".column");
    columns.forEach(column => {
        column.style.backgroundColor = '';
    });
}

// Generate a grid of the parameter size
function gridGenerator(gridSize){
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
                column.style.backgroundColor = "#"+(((1+Math.random())*(1<<24)|0).toString(16)).substr(-6);
            });
        }
    }
    gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;
}

