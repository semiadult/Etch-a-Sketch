"use strict"



//function to create divs for row with column nested inside.
function makeGrid(number) {
    const container = document.querySelector("#container");
    if (number < 100) {
    for (let i=0; i < number; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let i=0; i < number; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseenter", (event) => {
                column.setAttribute("style", "background: black");
            });
            }
        }
    }
}
makeGrid(16);

let buttonContainer = document.querySelector("#buttonContainer");
let resetButton = document.createElement("button");
resetButton.classList.add("reset");
resetButton.textContent= "Erase!";
buttonContainer.appendChild(resetButton);
//make button to reset the grid and choose different dimensions
resetButton.addEventListener("click", () => {
    container.replaceChildren();
    makeGrid(16);
});