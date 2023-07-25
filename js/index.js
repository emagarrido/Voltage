let modal = document.querySelector("#modal");

document.querySelector("#facts").addEventListener("click", modalOn)
document.querySelector("#cerrar").addEventListener("click", modalOf)


cambioEstaciones()

function cambioEstaciones() {
  let contenido = "";
  let fechaActual = new Date();
  let mes = fechaActual.getMonth();

  if (mes == 0 || mes == 1 || mes == 2) {
    contenido += ` 
        <article>
             <img src="img/te/${estaciones[0].img[0]}.jpg" alt="">
            <h1>${estaciones[0].nombre}</h1>
            <h2>${estaciones[0].ingredientes}</h2>
            <h3>Nivel de Teina: ${estaciones[0].nivelTeina}</h3>
            <a href="ampliacion.html?id=${estaciones[0].id}" >VER MÁS</a>
        </article>
          <article>
             <img src="img/te/${estaciones[1].img[0]}.jpg" alt="">
            <h1>${estaciones[1].nombre}</h1>
            <h2>${estaciones[1].ingredientes}</h2>
            <h3>Nivel de Teina: ${estaciones[1].nivelTeina}</h3>
            <a href="ampliacion.html?id=${estaciones[1].id}" >VER MÁS</a>
        </article>
        <article>
             <img src="img/te/${estaciones[2].img[0]}.jpg" alt="">
            <h1>${estaciones[2].nombre}</h1>
            <h2>${estaciones[2].ingredientes}</h2>
            <h3>Nivel de Teina: ${estaciones[2].nivelTeina}</h3>
            <a href="ampliacion.html?id=${estaciones[2].id}" >VER MÁS</a>
        </article>
        <article>
             <img src="img/te/${estaciones[3].img[0]}.jpg" alt="">
            <h1>${estaciones[3].nombre}</h1>
            <h2>${estaciones[3].ingredientes}</h2>
            <h3>Nivel de Teina: ${estaciones[3].nivelTeina}</h3>
            <a href="ampliacion.html?id=${estaciones[3].id}" >VER MÁS</a>
        </article>`

  }
  else if (mes == 3 || mes == 4) {
    contenido += ` 
      <article>
      <img src="img/te/${estaciones[4].img[0]}.jpg" alt="">
      <h1>${estaciones[4].nombre}</h1>
      <h2>${estaciones[4].ingredientes}</h2>
      <h3>Nivel de Teina: ${estaciones[4].nivelTeina}</h3>
      <a href="ampliacion.html?id=${estaciones[4].id}" >VER MÁS</a>
  </article>
    <article>
       <img src="img/te/${estaciones[5].img[0]}.jpg" alt="">
      <h1>${estaciones[5].nombre}</h1>
      <h2>${estaciones[5].ingredientes}</h2>
      <h3>Nivel de Teina: ${estaciones[5].nivelTeina}</h3>
      <a href="ampliacion.html?id=${estaciones[5].id}" >VER MÁS</a>
  </article>
  <article>
       <img src="img/te/${estaciones[6].img[0]}.jpg" alt="">
      <h1>${estaciones[6].nombre}</h1>
      <h2>${estaciones[6].ingredientes}</h2>
      <h3>Nivel de Teina: ${estaciones[6].nivelTeina}</h3>
      <a href="ampliacion.html?id=${estaciones[6].id}" >VER MÁS</a>
  </article>
  <article>
       <img src="img/te/${estaciones[7].img[0]}.jpg" alt="">
      <h1>${estaciones[7].nombre}</h1>
      <h2>${estaciones[7].ingredientes}</h2>
      <h3>Nivel de Teina: ${estaciones[7].nivelTeina}</h3>
      <a href="ampliacion.html?id=${estaciones[7].id}" >VER MÁS</a>
  </article>`

  }

  else if (mes == 5 || mes == 6 || mes == 7 || mes == 8) {
    contenido += `
  <article>
  <img src="img/te/${estaciones[8].img[0]}.jpg" alt="">
  <h1>${estaciones[8].nombre}</h1>
  <h2>${estaciones[8].ingredientes}</h2>
  <h3>Nivel de Teina: ${estaciones[8].nivelTeina}</h3>
  <a href="ampliacion.html?id=${estaciones[8].id}" >VER MÁS</a>
</article>
<article>
   <img src="img/te/${estaciones[9].img[0]}.jpg" alt="">
  <h1>${estaciones[9].nombre}</h1>
  <h2>${estaciones[9].ingredientes}</h2>
  <h3>Nivel de Teina: ${estaciones[9].nivelTeina}</h3>
  <a href="ampliacion.html?id=${estaciones[9].id}" >VER MÁS</a>
</article>
<article>
   <img src="img/te/${estaciones[10].img[0]}.jpg" alt="">
  <h1>${estaciones[10].nombre}</h1>
  <h2>${estaciones[10].ingredientes}</h2>
  <h3>Nivel de Teina: ${estaciones[10].nivelTeina}</h3>
  <a href="ampliacion.html?id=${estaciones[10].id}" >VER MÁS</a>
</article>
<article>
   <img src="img/te/${estaciones[11].img[0]}.jpg" alt="">
  <h1>${estaciones[11].nombre}</h1>
  <h2>${estaciones[11].ingredientes}</h2>
  <h3>Nivel de Teina: ${estaciones[11].nivelTeina}</h3>
  <a href="ampliacion.html?id=${estaciones[11].id}" >VER MÁS</a>
</article>`
  }

  else {

    contenido += `
  <article>
  <img src="img/te/${estaciones[12].img[0]}.jpg" alt="">
  <h1>${estaciones[12].nombre}</h1>
  <h2>${estaciones[12].ingredientes}</h2>
  <h3>Nivel de Teina: ${estaciones[12].nivelTeina}</h3>
  <a href="ampliacion.html?id=${estaciones[12].id}" >VER MÁS</a>
</article>
<article>
   <img src="img/te/${estaciones[13].img[0]}.jpg" alt="">
  <h1>${estaciones[13].nombre}</h1>
  <h2>${estaciones[13].ingredientes}</h2>
  <h3>Nivel de Teina: ${estaciones[13].nivelTeina}</h3>
  <a href="ampliacion.html?id=${estaciones[13].id}" >VER MÁS</a>
</article>
<article>
   <img src="img/te/${estaciones[14].img[0]}.jpg" alt="">
  <h1>${estaciones[14].nombre}</h1>
  <h2>${estaciones[14].ingredientes}</h2>
  <h3>Nivel de Teina: ${estaciones[14].nivelTeina}</h3>
  <a href="ampliacion.html?id=${estaciones[14].id}" >VER MÁS</a>
</article>
<article>
   <img src="img/te/${estaciones[15].img[0]}.jpg" alt="">
  <h1>${estaciones[15].nombre}</h1>
  <h2>${estaciones[15].ingredientes}</h2>
  <h3>Nivel de Teina: ${estaciones[15].nivelTeina}</h3>
   <a href="ampliacion.html?id=${estaciones[15].id}" >VER MÁS</a>
</article>`
  }



  document.querySelector("#estacion").innerHTML = contenido
}

function modalOn() {
  modal.style.display = "block";
}

function modalOf() {
  modal.style.display = "none";
}