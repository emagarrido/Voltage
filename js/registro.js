// let datos = []

// nombre = document.querySelector("#nombre")
// apellido = document.querySelector("#apellido")
// numero = document.querySelector("#numero")
// divNumero = document.querySelector("#mensajeNumero")
// mail = document.querySelector("#mail")
// conMail = document.querySelector("#confirmarMail")
// mensaje = document.querySelector("#mensajes")
// contra = document.querySelector("#contrasena")
// conContra = document.querySelector("#conContrasena")
// boton = document.querySelector("#boton")
// pais = document.querySelector("#pais")
// ojo = document.querySelector(".ojo")

// nombre.addEventListener("focusout", validarNombre);
// apellido.addEventListener("focusout", validarApellido);
// numero.addEventListener("focusout", validarNumero);
// numero.addEventListener("keyup", validarNro);
// mail.addEventListener("focusout", validarMail);
// conMail.addEventListener("focusout", confirmarMail);
// contra.addEventListener("focusout", validarContrasena);
// conContra.addEventListener("focusout", confirmarContrasena);
// ojo.addEventListener("click", verContra);
// boton.addEventListener("click", agregarInfo)


// function validarNombre() {
//     mensaje.textContent = ""
//     let valNombre = nombre.value;
//     valNombre = valNombre.trim();
//     let nombres = valNombre.split(" ");
//     if (valNombre.length == 0) {
//         mensaje.textContent = "El nombre no puede estar vacio";
//         nombre.style.borderColor = "red"
//     }
//     else if (nombres.length > 1) {
//         mensaje.textContent = "Por favor, ingrese solo un nombre";
//         nombre.style.borderColor = "red";
//     }
//     else {
//         nombre.style.borderColor = "green";
//     }

// }

// function validarApellido() {
//     mensaje.textContent = ""
//     let valApellido = apellido.value;
//     valApellido = valApellido.trim();
//     if (valApellido.length == 0) {
//         mensaje.textContent = "El apellido no puede estar vacio";
//         apellido.style.borderColor = "red"
//     }
//     else {
//         apellido.style.borderColor = "green";
//     }
// }

// function validarNumero() {
//     let prefijo = pais.value;
//     let nroIngresado = numero.value;

//     if (nroIngresado.length == 0) {
//         mensaje.textContent = "El número no puede estar vacio";
//         numero.style.borderColor = "red"
//     }
//     else if (prefijo == "uruguay" && nroIngresado.length < 8) {
//         mensaje.textContent = "El numero no es correcto";
//         numero.style.borderColor = "red"
//     }
//     else if (prefijo == "espana" && nroIngresado.length < 9) {
//         mensaje.textContent = "El numero no es correcto";
//         numero.style.borderColor = "red"
//     }
//     else if (prefijo == "brasil" && nroIngresado.length < 8) {
//         mensaje.textContent = "El numero no es correcto";
//         numero.style.borderColor = "red"
//     }
//     else if (prefijo == "colombia" && nroIngresado.length < 10) {
//         mensaje.textContent = "El numero no es correcto";
//         numero.style.borderColor = "red"
//     }
//     else if (prefijo == "argentino" && nroIngresado.length < 10) {
//         mensaje.textContent = "El numero no es correcto";
//         numero.style.borderColor = "red"
//     }
//     else {
//         numero.style.borderColor = "green";
//     }
// }

// function validarNro() {
//     mensaje.textContent = "";
//     let valor = this.value;
//     if (isNaN(valor)) {
//         mensaje.textContent = "Debes escribir un numero"
//         this.value = ""
//     }
// }

// function validarMail() {
//     mensaje.textContent = "";
//     let mailIngresado = mail.value;
//     mailIngresado = mailIngresado.trim();
//     if (mailIngresado.length == 0) {
//         mensaje.textContent = "El mail no puede estar vacio";
//         mail.style.borderColor = "red"
//     }
//     else if (mailIngresado.indexOf("@") == -1) {
//         mensaje.textContent = "El mail debe tener @";
//         mail.style.borderColor = "red"
//     }
//     else if (mailIngresado.charAt(mailIngresado.indexOf("@") + 1) == "." || mailIngresado.charAt(mailIngresado.indexOf("@") + 1) == "") {
//         mensaje.textContent = "El mail debe tener texto despues del arroba";
//         mail.style.borderColor = "red"
//     }
//     else if (mailIngresado.indexOf(".", mailIngresado.indexOf("@") + 2) == -1) {
//         mensaje.textContent = "El mail debe tener  punto despues del arroba";
//         mail.style.borderColor = "red"
//     }
//     else if (mailIngresado.charAt(mailIngresado.lastIndexOf(".") + 1) == "") {
//         mensaje.textContent = "El mail debe tener tener texto despues del punto";
//         mail.style.borderColor = "red"
//     }
//     else {
//         mail.style.borderColor = "green"
//     }

// }

// function confirmarMail() {
//     mensaje.textContent = "";
//     let mailIngresado = mail.value
//     let mailIngresado2 = conMail.value;
//     if (mailIngresado.length == 0) {
//         mensaje.textContent = "El campo no puede estar vacio";
//         conMail.style.borderColor = "red"
//     }
//     else if (mailIngresado !== mailIngresado2) {
//         mensaje.textContent = "El mail no coincide";
//         conMail.style.borderColor = "red"
//     }
//     else {
//         conMail.style.borderColor = "green"
//     }
// }

// function validarContrasena() {
//     mensaje.textContent = "";
//     let contraIngresado = contra.value;
//     contraIngresado = contraIngresado.trim();

//     if (contraIngresado.length == 0) {
//         mensaje.textContent = "La contrasena no puede estar vacia";
//         contra.style.borderColor = "red"
//     }
//     else if (contraIngresado.length < 8) {
//         mensaje.textContent = "La contrasena dene tener mas de 8 caracteres";
//         contra.style.borderColor = "red"
//     }
//     else if (contraIngresado === contraIngresado.toLowerCase() || contraIngresado === contraIngresado.toUpperCase()) {
//         mensaje.textContent = "La contrasena debe contener tanto letras mayúsculas como minúsculas";
//         contra.style.borderColor = "red";
//     }
//     else {
//         contra.style.borderColor = "green"
//     }
// }

// function confirmarContrasena() {

//     mensaje.textContent = "";
//     let contraIngresado = contra.value;
//     let contraIngresado2 = conContra.value;
//     if (contraIngresado2.length == 0) {
//         mensaje.textContent = "El campo no puede estar vacio";
//         conContra.style.borderColor = "red"
//     }
//     else if (contraIngresado !== contraIngresado2) {
//         mensaje.textContent = "La contrasena no coincide";
//         conContra.style.borderColor = "red"
//     }
//     else {
//         conContra.style.borderColor = "green"
//     }
// }

// function verContra() {
//     if (contra.type === "password") {
//         contra.type = "text";
//     }
//     else {
//         contra.type = "password";
//     }

// }

// function agregarInfo() {
//     if (nombre !== "" && apellido !== "" && numero !== "" && mail !== "" && conMail !== "" && contra !== "" && conContra !== "") {
//         let persona = {
//             nombre: nombre.value,
//             apellido: apellido.value,
//             numero: numero.value,
//             mail: mail.value,
//             contra: contra.value
//         };

//         nombre.value = "";
//         apellido.value = "";
//         numero.value = "";
//         mail.value = "";
//         conMail.value = "";
//         conContra.value = "";

//         datos.push(persona);
//         console.log(datos);
//     }


//     const formulario = document.querySelector('form');

//     formulario.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const nombre = document.getElementById('nombre').value;
//         const apellido = document.getElementById('apellido').value;
//         const pais = document.getElementById('pais').value;
//         const numero = document.getElementById('numero').value;
//         const mail = document.getElementById('mail').value;
//         const confirmarMail = document.getElementById('confirmarMail').value;
//         const contrasena = document.getElementById('contrasena').value;
//         const conContrasena = document.getElementById('conContrasena').value;

//         if (!nombre || !apellido || !numero || !mail || !confirmarMail || !contrasena || !conContrasena) {
//             alert('Por favor, complete todos los campos obligatorios (*)');
//             return;
//         }

//         if (contrasena !== conContrasena) {
//             alert('Las contrasenas no coinciden. Por favor, inténtelo de nuevo.');
//             return;
//         }

//         const usuario = {
//             nombre,
//             apellido,
//             pais,
//             numero,
//             mail,
//             contrasena,
//         };

//         const usuarioJSON = JSON.stringify(usuario);

//         sessionStorage.setItem('usuario', usuarioJSON);

//         alert('Registro exitoso. Los datos se han almacenado en la sesión actual.');

//     });


// }


let datos = [];

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const numero = document.querySelector("#numero");
const divNumero = document.querySelector("#mensajeNumero");
const mail = document.querySelector("#mail");
const conMail = document.querySelector("#confirmarMail");
const mensaje = document.querySelector("#mensajes");
const contra = document.querySelector("#contrasena");
const conContra = document.querySelector("#conContrasena");
const boton = document.querySelector("#boton");
const pais = document.querySelector("#pais");
const ojo = document.querySelector(".ojo");

nombre.addEventListener("focusout", validarNombre);
apellido.addEventListener("focusout", validarApellido);
numero.addEventListener("focusout", validarNumero);
numero.addEventListener("keyup", validarNro);
mail.addEventListener("focusout", validarMail);
conMail.addEventListener("focusout", confirmarMail);
contra.addEventListener("focusout", validarContrasena);
conContra.addEventListener("focusout", confirmarContrasena);
ojo.addEventListener("click", verContra);
boton.addEventListener("click", agregarInfo);

function validarNombre() {
    mensaje.textContent = "";
    let valNombre = nombre.value.trim();
    let nombres = valNombre.split(" ");
    if (valNombre.length == 0) {
        mensaje.textContent = "El nombre no puede estar vacio";
        nombre.style.borderColor = "red";
    } else if (nombres.length > 1) {
        mensaje.textContent = "Por favor, ingrese solo un nombre";
        nombre.style.borderColor = "red";
    } else {
        nombre.style.borderColor = "green";
    }
}

function validarApellido() {
    mensaje.textContent = "";
    let valApellido = apellido.value.trim();
    if (valApellido.length == 0) {
        mensaje.textContent = "El apellido no puede estar vacio";
        apellido.style.borderColor = "red";
    } else {
        apellido.style.borderColor = "green";
    }
}

function validarNumero() {
    let prefijo = pais.value;
    let nroIngresado = numero.value;

    if (nroIngresado.length == 0) {
        mensaje.textContent = "El número no puede estar vacio";
        numero.style.borderColor = "red";
    } else if (prefijo == "uruguay" && nroIngresado.length < 8) {
        mensaje.textContent = "El numero no es correcto";
        numero.style.borderColor = "red";
    } else if (prefijo == "espana" && nroIngresado.length < 9) {
        mensaje.textContent = "El numero no es correcto";
        numero.style.borderColor = "red";
    } else if (prefijo == "brasil" && nroIngresado.length < 8) {
        mensaje.textContent = "El numero no es correcto";
        numero.style.borderColor = "red";
    } else if (prefijo == "colombia" && nroIngresado.length < 10) {
        mensaje.textContent = "El numero no es correcto";
        numero.style.borderColor = "red";
    } else if (prefijo == "argentino" && nroIngresado.length < 10) {
        mensaje.textContent = "El numero no es correcto";
        numero.style.borderColor = "red";
    } else {
        numero.style.borderColor = "green";
    }
}

function validarNro() {
    mensaje.textContent = "";
    let valor = this.value;
    if (isNaN(valor)) {
        mensaje.textContent = "Debes escribir un numero";
        this.value = "";
    }
}

function validarMail() {
    mensaje.textContent = "";
    let mailIngresado = mail.value.trim();
    if (mailIngresado.length == 0) {
        mensaje.textContent = "El mail no puede estar vacio";
        mail.style.borderColor = "red";
    } else if (mailIngresado.indexOf("@") == -1) {
        mensaje.textContent = "El mail debe tener @";
        mail.style.borderColor = "red";
    } else if (
        mailIngresado.charAt(mailIngresado.indexOf("@") + 1) == "." ||
        mailIngresado.charAt(mailIngresado.indexOf("@") + 1) == ""
    ) {
        mensaje.textContent = "El mail debe tener texto despues del arroba";
        mail.style.borderColor = "red";
    } else if (mailIngresado.indexOf(".", mailIngresado.indexOf("@") + 2) == -1) {
        mensaje.textContent = "El mail debe tener  punto despues del arroba";
        mail.style.borderColor = "red";
    } else if (mailIngresado.charAt(mailIngresado.lastIndexOf(".") + 1) == "") {
        mensaje.textContent = "El mail debe tener tener texto despues del punto";
        mail.style.borderColor = "red";
    } else {
        mail.style.borderColor = "green";
    }
}

function confirmarMail() {
    mensaje.textContent = "";
    let mailIngresado = mail.value.trim();
    let mailIngresado2 = conMail.value.trim();
    if (mailIngresado.length == 0) {
        mensaje.textContent = "El campo no puede estar vacio";
        conMail.style.borderColor = "red";
    } else if (mailIngresado !== mailIngresado2) {
        mensaje.textContent = "El mail no coincide";
        conMail.style.borderColor = "red";
    } else {
        conMail.style.borderColor = "green";
    }
}

function validarContrasena() {
    mensaje.textContent = "";
    let contraIngresado = contra.value.trim();

    if (contraIngresado.length == 0) {
        mensaje.textContent = "La contrasena no puede estar vacia";
        contra.style.borderColor = "red";
    } else if (contraIngresado.length < 8) {
        mensaje.textContent = "La contrasena dene tener mas de 8 caracteres";
        contra.style.borderColor = "red";
    } else if (
        contraIngresado === contraIngresado.toLowerCase() ||
        contraIngresado === contraIngresado.toUpperCase()
    ) {
        mensaje.textContent =
            "La contrasena debe contener tanto letras mayúsculas como minúsculas";
        contra.style.borderColor = "red";
    } else {
        contra.style.borderColor = "green";
    }
}

function confirmarContrasena() {
    mensaje.textContent = "";
    let contraIngresado = contra.value.trim();
    let contraIngresado2 = conContra.value.trim();
    if (contraIngresado2.length == 0) {
        mensaje.textContent = "El campo no puede estar vacio";
        conContra.style.borderColor = "red";
    } else if (contraIngresado !== contraIngresado2) {
        mensaje.textContent = "La contrasena no coincide";
        conContra.style.borderColor = "red";
    } else {
        conContra.style.borderColor = "green";
    }
}

function verContra() {
    if (contra.type === "password") {
        contra.type = "text";
    } else {
        contra.type = "password";
    }
}

// function agregarInfo() {
//     let valNombre = nombre.value.trim();
//     let valApellido = apellido.value.trim();
//     let nroIngresado = numero.value.trim();
//     let mailIngresado = mail.value.trim();
//     let conMailIngresado = conMail.value.trim();
//     let contraIngresada = contra.value.trim();
//     let conContraIngresada = conContra.value.trim();

//     if (
//         valNombre !== "" &&
//         valApellido !== "" &&
//         nroIngresado !== "" &&
//         mailIngresado !== "" &&
//         conMailIngresado !== "" &&
//         contraIngresada !== "" &&
//         conContraIngresada !== ""
//     ) {
//         let persona = {
//             nombre: valNombre,
//             apellido: valApellido,
//             numero: nroIngresado,
//             mail: mailIngresado,
//             contra: contraIngresada,
//         };

//         datos.push(persona);
//         console.log(datos);

//         nombre.value = "";
//         apellido.value = "";
//         numero.value = "";
//         mail.value = "";
//         conMail.value = "";
//         conContra.value = "";
//     } else {
//         alert("Por favor, complete todos los campos.");
//     }
// }

// const formulario = document.querySelector("form");

// formulario.addEventListener("boton", function (event) {
//     event.preventDefault();
//     const nombre = document.getElementById("nombre").value;
//     const apellido = document.getElementById("apellido").value;
//     const pais = document.getElementById("pais").value;
//     const numero = document.getElementById("numero").value;
//     const mail = document.getElementById("mail").value;
//     const confirmarMail = document.getElementById("confirmarMail").value;
//     const contrasena = document.getElementById("contrasena").value;
//     const conContrasena = document.getElementById("conContrasena").value;

//     if (
//         !nombre ||
//         !apellido ||
//         !numero ||
//         !mail ||
//         !confirmarMail ||
//         !contrasena ||
//         !conContrasena
//     ) {
//         alert("Por favor, complete todos los campos obligatorios (*)");
//         return;
//     }

//     if (contrasena !== conContrasena) {
//         alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
//         return;
//     }

//     const usuario = {
//         nombre,
//         apellido,
//         pais,
//         numero,
//         mail,
//         contrasena,
//     };

//     const usuarioJSON = JSON.stringify(usuario);

//     sessionStorage.setItem("usuario", usuarioJSON);

//     alert("Registro exitoso. Los datos se han almacenado en la sesión actual.");
// });


function agregarInfo() {
    let valNombre = nombre.value.trim();
    let valApellido = apellido.value.trim();
    let nroIngresado = numero.value.trim();
    let mailIngresado = mail.value.trim();
    let conMailIngresado = conMail.value.trim();
    let contraIngresada = contra.value.trim();
    let conContraIngresada = conContra.value.trim();

    if (
        valNombre !== "" &&
        valApellido !== "" &&
        nroIngresado !== "" &&
        mailIngresado !== "" &&
        conMailIngresado !== "" &&
        contraIngresada !== "" &&
        conContraIngresada !== ""
    ) {
        let persona = {
            nombre: valNombre,
            apellido: valApellido,
            numero: nroIngresado,
            mail: mailIngresado,
            contra: contraIngresada,
        };

        datos.push(persona);
        console.log(datos);

        nombre.value = "";
        apellido.value = "";
        numero.value = "";
        mail.value = "";
        conMail.value = "";
        conContra.value = "";

        
        alert("Registro exitoso.");
    } else {
        alert("Por favor, complete todos los campos.");
    }
}


const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    
});



