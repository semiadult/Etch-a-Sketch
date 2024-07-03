"use strict"
const container = document.querySelector(".container")




function makeGrid(number) {
        for (let i =0; i < number; i++) {
        let containerHeight = container.clientHeight;
        let containerWidth = container.clientWidth;
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        let squareHeight = square.clientHeight;
        let squareWidth = square.clientWidth;
        let height = containerHeight / squareHeight;
        square.style.height = `${height}px`;
        let width = containerWidth / squareWidth;
        square.style.width = `${width}px`;
    }
}

makeGrid(16);