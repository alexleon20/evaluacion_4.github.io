/*let colors =[
    "rgb(239,25,25)",
    "rbg(212,209,31)",
    "rgb(65,212,31)",
    "rgb(15,203,173)",
    "rgb(15,52,203)",
    "rgb(198,15,203)"];
*/   
    // colores dados al inicio
let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square"); //selecciono todo los cuadrados
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1"); //color del numero ganador
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let numberOfSquares = 6;
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];    
    squares[i].addEventListener("click", function () { //evento de click para los cuadrados
    let clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {   //Igualdad Estricta (===)        
            message.textContent = "¡Correcto!";            
            changeColors(clickedColor);            
            reset.textContent = "¿Jugar de nuevo?";
        } else {
            this.style.backgroundColor = "#232323";            
            message.textContent = "Intentalo nuevamente";
        }

    });
}
// darle  el color correcto y pásele como Argumento ese color
function changeColors(color) { // tomará como Argumento un color
    h1.style.backgroundColor = color; //darle el color de fondo del Argumento.
        
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


/*devolvera un color random*/
//problemas al comentar codigo
function pickColor() {
    let aleatorio = Math.floor(Math.random() * colors.length);
    return colors[aleatorio];
}

function randomColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + ", " + g + ", " + b + ")"; //si le doy o le quito no me pesca la correcta
    return color;
}
// generará de forma aleatoria el Arreglo de colores
function generateRandomColors(opcionC) {
    let arregloColor = [];
    
    for (var i = 0; i < opcionC; i++) {
        arregloColor.push(randomColors());
    }
    return arregloColor;
}

//Genere nuevos colores en el Arreglo reset  //addEventListener Registra un evento a un objeto en específico
reset.addEventListener("click", function () {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    reset.textContent = "Nuevos Colores"
});

// generamos 3 cuadrados
easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    numberOfSquares = 3
    pickedColor = pickColor();
    changeColors.textContent = pickedColor;
    
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (i > 2) {
            squares[i].style.display = "none";
        }
    }
});

       
hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    numberOfSquares = 6
    pickedColor = pickColor();
    changeColors.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (squares[i].style.display === "none") { //Igualdad Estricta (===)
            squares[i].style.display = "block";
        }
        squares[i].style.backgroundColor = colors[i];
    }
});





