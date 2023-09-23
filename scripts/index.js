function addSquaresInContainer() {
    let side = input.value

    if(side > 0 && side <= 64) 
    {
        let areaOfContainerSquare = side * side
        let areaOfInsideSquare = 400 / side;

        //to clear previous error display msg.
        error.innerHTML = ''

        //to clear the previous grid.
        if(drawingBoard.hasChildNodes()) {
            drawingBoard.innerHTML = ''
        }

        //create new squares inside containre based on user input grid size.
        for (let i = 0; i < areaOfContainerSquare; i++) {
            let square = document.createElement("div");

            square.classList.add("square");
            square.style.border = "0.1px solid black";
            square.style.height = `${areaOfInsideSquare}px`;
            square.style.width = `${areaOfInsideSquare}px`;
            drawingBoard.appendChild(square);

            //when mouse is hovered over grid.
            square.addEventListener(
                "mouseenter",
                (event) => {
                    let colorPicked = document.getElementById("favColor").value;
                    event.target.style.backgroundColor = `${colorPicked}`;
                },
            false
            );
        }
    }
    else {
        error.textContent = 'Invalid input!'
        error.style.color = 'red'
    } 
}

function reloadPage() {
    window.location.reload()
}

const button = document.querySelector('.size-btn')
const drawingBoard = document.querySelector('.drawing-board')
const input = document.querySelector('#size')
const error = document.querySelector('.error-log')
const reset = document.querySelector('.reset-button')

button.addEventListener('click', addSquaresInContainer)
reset.addEventListener('click', reloadPage)

