const gameContainer = document.querySelector(".gameContainer");
const pointsHTML = document.querySelector("h2");
const cellsArr = [
    1, 2, 3, 4, 5,
    1, 2, 3, 4, 5,
    1, 2, 3, 4, 5,
    1, 2, 3, 4, 5,
    1, 2, 3, 4, 5,
];

let points = 0;

// Function to set the background color of a random cell to red
function turnRandomCellRed() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.classList.remove("monster");
    });
    let rndNum = Math.floor(Math.random() * cellsArr.length);
    const cell = document.querySelectorAll('.cell');
    cell[rndNum].classList.add("monster");
}

// Function to handle cell click
function handleCellClick(event) {
    if (event.target.classList.contains("monster")) {
        points++;
        pointsHTML.textContent = `Points: ${points}`;
    }
}

// Create cells
cellsArr.forEach((cell, index) => {
    const div = document.createElement("div");
    div.className = "cell";
    div.onclick=(event) => {
        handleCellClick(event)
    }
    // div.addEventListener("click", handleCellClick);
    gameContainer.appendChild(div);
});

setInterval(turnRandomCellRed, 1000);
