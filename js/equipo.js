contador = 0
btIzq = document.querySelector("#atras")
btDer = document.querySelector("#adelante")
btInfoSemillas = document.querySelector("#infoSemillas")

btIzq.addEventListener("click", moverIzq);
btDer.addEventListener("click", moverDer);
btInfoSemillas.addEventListener("click", clickInfoSemillas);
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

function obtenerInfoSemillaAleatoria() {
  return new Promise((resolve, reject) => {
    fetch('datosDeSemillas.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener el archivo de semillas');
        }
        return response.json();
      })
      .then(semillas => {
        const indiceAleatorio = Math.floor(Math.random() * semillas.length);
        resolve(semillas[indiceAleatorio]);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function clickInfoSemillas() {
  obtenerInfoSemillaAleatoria()
    .then(semilla => {
      console.log('Información sobre semilla obtenida:', semilla.descripcion);
      alert('Información sobre semilla obtenida: ' + semilla.descripcion);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}