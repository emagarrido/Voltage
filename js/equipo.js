contador = 0
btIzq = document.querySelector("#atras")
btDer = document.querySelector("#adelante")

btIzq.addEventListener("click", moverIzq);
btDer.addEventListener("click", moverDer);
document.querySelector("#facts").addEventListener("click", modalOn)
document.querySelector("#cerrar").addEventListener("click", modalOf)

moverDer();


function moverIzq() {
  contador--
  if (contador < 0) {
    contador = equipo.length - 1;
  }
  document.querySelector("#equipo").innerHTML = ` 
  <article>
  <div id=txtEquipo><h1>${equipo[contador].nombre}</h1>
  <p>${equipo[contador].descripcion}</p>
  <h2>Rol: ${equipo[contador].rol}</h2>
  <h2>Edad: ${equipo[contador].edad}</h2>
  <h2>Estación preferida: ${equipo[contador].destino}</h2></div>
  <img src="img/equipo/${equipo[contador].img}.jpg" alt="">
</article>`
}

function moverDer() {
  contador++
  contador %= equipo.length;
  document.querySelector("#equipo").innerHTML = ` 
  <article>
  <div id=txtEquipo><h1>${equipo[contador].nombre}</h1>
  <p>${equipo[contador].descripcion}</p>
  <h3>Rol: ${equipo[contador].rol}</h3>
  <h3>Edad: ${equipo[contador].edad}</h3>
  <h3>Estación preferida: ${equipo[contador].destino}</h3></div>
  <img src="img/equipo/${equipo[contador].img}.jpg" alt="">
</article>`
}

function modalOn() {
  modal.style.display = "block";
}

function modalOf() {
  modal.style.display = "none";
}
