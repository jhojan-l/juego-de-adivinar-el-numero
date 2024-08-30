let numrandom = Math.floor(Math.random() * 100) + 1;

const resultado = document.querySelector(".resultado");
const resAnterior = document.querySelector(".previa");
const ayuda = document.querySelector(".pista");
const btn = document.querySelector(".btnEnviar");
const num = document.querySelector(".numero");

let cont = 1;
let resetButton;

function juega() {
  let numUsuario = Number(num.value);

  if (cont === 1) {
    resAnterior.textContent = "Numeros anteriores ";
  }
  resAnterior.textContent += numUsuario + "-";

  if (numUsuario === numrandom) {
    resultado.textContent = "¡Felicidades! ¡lo adivinaste!";
    resultado.style.backgroundColor = "green";
    ayuda.textContent = "";
    finjuego();
  } else if (cont === 10) {
    resultado.textContent = "¡¡¡fin del juego!!! ";
    finjuego();
  } else {
    resultado.textContent = "¡incorrecto!";
    resultado.style.backgroundColor = "red";
    if (numUsuario > numrandom) {
      ayuda.textContent = "¡¡El número es mas bajo!!";
    } else if (numUsuario < numrandom) {
      ayuda.textContent = "¡¡El número es mas alto!!";
    }
  }

  cont++;
  num.value = "";
  num.focus();
}
btn.addEventListener("click", juega);

function finjuego() {
  num.disabled = true;
  btn.disabled = true;

  resetButton = document.createElement("button");
  resetButton.textContent = "Volver a jugar";

  const divMensajes = document.querySelector(".mensajes");
  divMensajes.appendChild(resetButton);

  resetButton.addEventListener("click", resetjuego);
}

function resetjuego() {
  cont = 1;
  

  const mensajes = document.querySelectorAll(".mensajes p");
  for (let i = 0; i < mensajes.length; i++) {
    mensajes[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  num.disabled = false;
  btn.disabled = false;
  num.value = "";
  num.focus();

  resultado.style.backgroundColor = "";

  numrandom = Math.floor(Math.random() * 100) + 1;
}
