let drawingBoard = document.querySelector(".drawing-board");
let userInput = Number(prompt("Enter grid size: "))
let side = userInput

// Making sure the size of grid is higher than 0 and less than 16
if (userInput > 0 && userInput <= 64) 
{
    let areaOfContainerSquare = side * side;
    let areaOfInsideSquare = 400 / userInput;

    for (let i = 0; i < areaOfContainerSquare; i++) {

        let square = document.createElement("div");

        square.classList.add("square");
        square.style.border = "0.1px solid black";
        square.style.height = `${areaOfInsideSquare}px`;
        square.style.width = `${areaOfInsideSquare}px`;
        drawingBoard.appendChild(square);

        square.addEventListener(
            "mouseenter",
            (event) => {
                let colorPicked = document.getElementById("favColor").value;
                event.target.style.backgroundColor = `${colorPicked}`;
            },
        false
        );
    }
} else {
    alert("Invalid input!")
    window.location.reload()
}

