window.onload = function() {
    generateGrid();
};

function generateGrid() {
    const container = document.querySelector(".container");

    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let i = 0; i < 16; i++) {
            const square = document.createElement("div");
            square.className = "grid-square";
            row.appendChild(square);
        }

        container.appendChild(row);
    }
}