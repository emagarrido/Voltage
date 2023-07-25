contador = 0

let descripcion = document.querySelector("#columna_der")
let divMiniaturas = document.querySelector("#miniaturas")
let divAmpliacion = document.querySelector("#ampliacion")

let ruta = window.location.search;
let parametros = new URLSearchParams(ruta);
let id = parametros.get("id");

let ampliarTe = todos[id];

cargarDatos()
cargarImagenes()
recomendaciones()

let slider = setInterval(recomendaciones, 6000)
document.querySelector("#facts").addEventListener("click", modalOn)
document.querySelector("#cerrar").addEventListener("click", modalOf)

function cargarDatos() {
  document.querySelector("#tituloAmpl").textContent = ampliarTe.nombre;
  document.querySelector("#ingredientes").textContent = `Ingredientes: ${ampliarTe.ingredientes}`
  document.querySelector("#descripcion").textContent = ampliarTe.descripcion
  document.querySelector("#aroma").textContent = `Aroma: ${ampliarTe.aroma}`
  document.querySelector("#nTeina").textContent = `Nivel de Teina: ${ampliarTe.nivelTeina}`
  document.querySelector("#precio").textContent = `Precio: $${ampliarTe.precio}`
  document.querySelector("#metodo").textContent = `Método: ${ampliarTe.metodo}`
}

function cargarImagenes() {
  for (let i = 0; i <= ampliarTe.img.length - 1; i++) {
    if (ampliarTe.img.length > 1) {
      divMiniaturas.innerHTML += `<img src="img/te/${ampliarTe.img[i]}.jpg">`
    }
  }
  let imagenesCargadas = document.querySelectorAll("#miniaturas img")
  console.log(imagenesCargadas);
  for (let i = 0; i <= imagenesCargadas.length - 1; i++) {
    imagenesCargadas[i].addEventListener("click", ampliarUnaImagen);

  }
  divAmpliacion.innerHTML = `<img src="img/te/${ampliarTe.img[0]}.jpg">`
}

function ampliarUnaImagen() {
  let src = this.getAttribute("src");
  divAmpliacion.innerHTML = `
    <img src="${src}">`
}

function recomendaciones() {
  let random = Math.random();
  random = random * todos.length;
  random = Math.floor(random)
  let contenido = ""
  for (let i = 0; i <= todos.length - 1; i++) {

    contenido = `
      <article id="recomendacion">
      <img src="img/te/${todos[random].img[0]}.jpg" alt="">
     <h1>${todos[random].nombre}</h1>
     <h2>${todos[random].ingredientes}</h2>
     <h3>Nivel de Teina: ${todos[random].nivelTeina}</h3>
     <a href="ampliacion.html?id=${todos[random].id}" >VER MÁS</a>
        </article>`


  }

  document.querySelector("#recomendaciones").innerHTML = contenido

}

