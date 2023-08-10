// let txtRespuesta = document.querySelector("#txtRespuesta");

// document.querySelector("#tipo").addEventListener("change", filtrarPorTipo)
// document.querySelector("#txt_buscar").addEventListener("keyup", filtrarTePorNombre)


// cargarTe(todos)

// function cargarTe(_unArray) {

//     let contenido = "";
//     for (let i = 0; i <= _unArray.length - 1; i++) {
//         contenido += `
//               <article>
//               <img src="img/te/${_unArray[i].img[0]}.jpg" alt="${_unArray[i].nombre}">
//              <h1>${_unArray[i].nombre}</h1>
//              <h2>${_unArray[i].ingredientes}</h2>
//              <h3>Nivel de Teina: ${_unArray[i].nivelTeina}</h3>
//              <a href="ampliacion.html?id=${_unArray[i].id}" >VER MÁS</a>
//                 </article>`
//     }

//     document.querySelector("#catalogo").innerHTML = contenido
// }

// function filtrarPorTipo() {
//     let filtradoPorTipo = [];
//     let tipoSeleccionado = document.querySelector("#tipo").value;
//     console.log(tipoSeleccionado);
//     for (let i = 0; i <= todos.length - 1; i++) {
//         if (todos[i].categoria == tipoSeleccionado || tipoSeleccionado == "todos") {
//             filtradoPorTipo.push(todos[i])
//         }
//     }
//     console.log(filtradoPorTipo);

//     cargarTe(filtradoPorTipo)
// }

// function filtrarTePorNombre() {

//     let txtRespuesta = ""

//     let textoIngresado = document.querySelector("#txt_buscar").value;
//     let teFiltradoPorNombre = [];
//     for (let i = 0; i <= todos.length - 1; i++) {
//         if (todos[i].nombre.toUpperCase().includes(textoIngresado.toUpperCase())) {
//             teFiltradoPorNombre.push(todos[i])
//         }
//     }
//     console.log(teFiltradoPorNombre);

//     if (teFiltradoPorNombre.length == 0) {
//         txtRespuesta.innerHTML += `<h3>No encontramos coincidencias con tu busqueda </h3>`
//     }
//     else {
//         cargarTe(teFiltradoPorNombre)
//     }

// }

// function modalOn() {
//     modal.style.display = "block";
// }

// function modalOf() {
//     modal.style.display = "none";
// }
// document.querySelector("#facts").addEventListener("click", modalOn)
// document.querySelector("#cerrar").addEventListener("click", modalOf)





let txtRespuesta = document.querySelector("#txtRespuesta");

document.querySelector("#tipo").addEventListener("change", filtrarPorTipo);
document.querySelector("#txt_buscar").addEventListener("keyup", filtrarTePorNombre);
document.querySelector("#facts").addEventListener("click", modalOn);
document.querySelector("#cerrar").addEventListener("click", modalOf);

cargarTe(todos);

function cargarTe(_unArray) {
    let contenido = "";
    for (let i = 0; i <= _unArray.length - 1; i++) {
        contenido += `
            <article>
                <img src="img/te/${_unArray[i].img[0]}.jpg" alt="${_unArray[i].nombre}">
                <h1>${_unArray[i].nombre}</h1>
                <h2>${_unArray[i].ingredientes}</h2>
                <h3>Nivel de Teina: ${_unArray[i].nivelTeina}</h3>
                <a href="ampliacion.html?id=${_unArray[i].id}">VER MÁS</a>
                <button class="agregar-carrito" data-id="${_unArray[i].id}">Agregar al Carrito</button>
            </article>`;
    }
    document.querySelector("#catalogo").innerHTML = contenido;

    // Agregar evento a los botones de "Agregar al Carrito"
    const botonesAgregarCarrito = document.querySelectorAll(".agregar-carrito");
    botonesAgregarCarrito.forEach((boton) => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function filtrarPorTipo() {
    let filtradoPorTipo = [];
    let tipoSeleccionado = document.querySelector("#tipo").value;
    console.log(tipoSeleccionado);
    for (let i = 0; i <= todos.length - 1; i++) {
        if (todos[i].categoria == tipoSeleccionado || tipoSeleccionado == "todos") {
            filtradoPorTipo.push(todos[i]);
        }
    }
    console.log(filtradoPorTipo);
    cargarTe(filtradoPorTipo);
}

function filtrarTePorNombre() {
    let textoIngresado = document.querySelector("#txt_buscar").value;
    let teFiltradoPorNombre = [];
    for (let i = 0; i <= todos.length - 1; i++) {
        if (todos[i].nombre.toUpperCase().includes(textoIngresado.toUpperCase())) {
            teFiltradoPorNombre.push(todos[i]);
        }
    }
    console.log(teFiltradoPorNombre);
    if (teFiltradoPorNombre.length == 0) {
        txtRespuesta.innerHTML = `<h3>No encontramos coincidencias con tu búsqueda</h3>`;
    } else {
        txtRespuesta.innerHTML = "";
    }
    cargarTe(teFiltradoPorNombre);
}

function modalOn() {
    modal.style.display = "block";
}

function modalOf() {
    modal.style.display = "none";
}

function agregarAlCarrito(event) {
    const idTe = event.target.getAttribute("data-id");
    let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    
    if (!carrito.some(item => item.id === idTe)) {
        const teEncontrado = todos.find(te => te.id === idTe);
        if (teEncontrado) {
            carrito.push(teEncontrado);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert("Producto agregado al carrito");
        }
    } else {
        alert("Este producto ya está en el carrito");
    }
}

// Carga inicial del catálogo
function cargarCatalogo() {
    const carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    cargarTe(carrito);
}

cargarCatalogo();
