let eraserMode = false; // global variable to toggle eraser mode on/off

function generateGrid() { // needed to move this function OUTSIDE of DOMCONTENTLoaded event listener so that it can be called inside the window.onload event.
  const container = document.querySelector("#grid-container"); // not sure if this is the best spot or under DOMContentLoaded but it works.

  for (let i = 0; i < 16; i++) {  // to create 16 rows
    const row = document.createElement("div"); // instead of in HTML, create new element in DOM
    row.className = "row";

    for (let i = 0; i < 16; i++) { // to create 16 squares in each row
      const square = document.createElement("div");
      square.className = "grid-square";

      square.addEventListener("mouseover", function() { // 'mouseover' allows action to be heard for entire grid function
        if (!eraserMode) { // if eraseMode ON (bc current variable is false/OFF)
          square.classList.add("touch"); // 'touch' keeps the color as a 'trail' for CSS. gets added to HTML after hover.
        } else {
          square.classList.remove("touch"); // otherwise toggle to OFF
        }
      });

      row.appendChild(square); // attach 'square' class to 'row' class
    }

    container.appendChild(row); // attach 'row' class to 'container' class
  }
}

document.addEventListener("DOMContentLoaded", function() { // fires when HTML doc is parsed. helped bc grid wasn't loading.
    const resetButton = document.querySelector("#reset-btn");
    const eraserButton = document.querySelector("#eraser-btn");
  
    function resetGrid() { // do a reset
      const squares = document.querySelectorAll(".grid-square"); // 1st pulling HTML to JS
      squares.forEach(function(square) { // for Each square
        square.classList.remove("touch"); // remove what was touched
      });
    }
  
    resetButton.addEventListener("click", resetGrid); // call function by addEventListener for click
  
    eraserButton.addEventListener("click", function() { // when clicking Eraser button
      eraserMode = !eraserMode; // this statement toggles the value of eraserMode btwn true and false
      if (eraserMode) { // if statement is NOT checking the initial value, just the value at the time when button CLICKED
        eraserButton.classList.add("active"); // so clicked = active
      } else {
        eraserButton.classList.remove("active"); // updated value becomes false
      }
    });
  });


window.onload = function() { // event that triggers initiation AFTER page has finished loading.
    generateGrid(); // Ensures that function called only once the page is finished loading.
};