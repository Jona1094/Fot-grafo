// Efecto Máquina //

let nombreFotografo = document.querySelector (".inicioNombre")
let string = nombreFotografo.innerHTML;
nombreFotografo.innerHTML = "";
let speed = 200;
let i = 0;

function efectoMaquina () {
    if (i < string.length) {
        nombreFotografo.innerHTML += string.charAt(i); i++;
    }
    setTimeout (efectoMaquina, speed)
}

setTimeout (efectoMaquina, speed)


// CUBO 

const cubo = document.querySelector (".sect1");
const btn = document.querySelector (".inicio");
let nav = document.querySelector ('.navIzq')

function mostrar () {
    nav.style.display = 'flex';
    cubo.style.display = "flex";
    btn.classList.add ("presentacion-salida");
}

btn.addEventListener ("click", mostrar);

const sect1 = document.querySelector (".sect1");
const fotosGaleria = document.querySelector (".galeria-grid");

// HOVER NAV 

let lgaleria = document.querySelector ('.lgaleria')
let subNav = document.querySelector ('.ul-subNav')

lgaleria.addEventListener ('click', () => {
    subNav.classList.toggle ('active')
    if (subNav.style.display == 'flex') {
        subNav.style.display = 'none';
    } else {
        subNav.style.display = 'flex';
    }
})



/* -------------------------------- */

/* const padre = document.querySelector (".padreh");
const punteroh = document.querySelector (".puntero");

padre.addEventListener ("mousemove", (e) => {
    console.log(e.pageX, e.pageY);
    punteroh.style.top = (e.pageY -25) + "px";
    punteroh.style.left = (e.pageX -25) + "px";
}) */