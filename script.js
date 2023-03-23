window.onload = function() { // event that triggers initiation AFTER page has finished loading.
    initiateGrid(); // Ensures that function called only once the page is finished loading.
};

function initiateGrid() {
    const container = document.querySelector(".container"); // pull from HTML

    for (let i = 0; i < 16; i++) { // to create 16 rows
        const row = document.createElement("div"); // instead of in HTML, create new element in DOM
        row.className = "row";

        for (let i = 0; i < 16; i++) { // to create 16 squares in each row
            const square = document.createElement("div");
            square.className = "grid-square";
            square.addEventListener("mouseover", function() { // 'mouseover' allows action to be heard for entire grid function
                square.classList.add("touch"); // 'touch' keeps the color as a 'trail' for CSS at each square. gets added to HTML after hover.
            });
            row.appendChild(square); // attach 'square' (aka 'grid-square') class to 'row' class
        }

        container.appendChild(row); // attach 'row' class to 'container' class
    }
}