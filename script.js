"use strict"

let header = document.querySelector("#header");
let resetButton = document.createElement("button");
resetButton.classList.add("reset");
resetButton.textContent= "Erase!";
header.appendChild(resetButton)

//function to create divs for row with column nested inside.
function makeGrid(number) {
    const container = document.querySelector  ("#container");
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
makeGrid(16);


function removeGrid() {
resetButton.addEventListener("mousedown", () => {
    container.replaceChildren();
    let size = prompt ("How many squares per side? Maximum is 100");
    size = parseInt(size);
    if (size <= 100 && size !== null) {
    makeGrid(size);
    } else makeGrid(16);
});
}
removeGrid();
