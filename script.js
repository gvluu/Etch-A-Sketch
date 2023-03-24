window.onload = function() { // event that triggers initiation AFTER page has finished loading.
    generateGrid(); // Ensures that function called only once the page is finished loading.
};

document.addEventListener("DOMContentLoaded", function() { // Ensures that JS code only runs after HTML is finished loading
    const container = document.querySelector("#grid-container"); // was under function generateGrid but moved here for reason above
    const resetButton = document.querySelector("#reset-btn");

function generateGrid() {
    for (let i = 0; i < 16; i++) { // to create 16 rows
        const row = document.createElement("div"); // instead of in HTML, create new element in DOM
        row.className = "row";

        for (let i = 0; i < 16; i++) { // to create 16 squares in each row
            const square = document.createElement("div");
            square.className = "grid-square";
            square.addEventListener("mouseover", function() { // 'mouseover' allows action to be heard for entire grid function
                square.classList.add("touch"); // 'touch' keeps the color as a 'trail' for CSS. gets added to HTML after hover.
            });
            row.appendChild(square); // attach 'square' class to 'row' class
        }
        container.appendChild(row); // attach 'row' class to 'container' class
    }
}


function resetGrid() { //need in order to remove touch class for reset
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(function(square) {
      square.classList.remove("touch");
    });
  }

  resetButton.addEventListener("click", resetGrid);
  generateGrid();
});