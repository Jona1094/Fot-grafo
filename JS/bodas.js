let section = document.querySelector ('.section')
let div1 = document.createElement ('DIV')
section.appendChild (div1)

let imgSection = ['../imagenes/boda9.jpg', '../imagenes/boda10.jpg', '../imagenes/boda11.jpg', '../imagenes/boda12.jpg',
'../imagenes/boda13.jpg', '../imagenes/boda14.jpg', '../imagenes/boda15.jpg']

let mostrarSection = (imgSection) => {
    let imgAcord = document.createElement ('IMG')
    div1.appendChild (imgAcord)
    div1.classList.add ('div1')
    imgAcord.classList.add ('imgAcord')
    imgAcord.setAttribute ('src', imgSection)

    return div1;
}

let acordTemporal = document.createDocumentFragment ();

for (let i = 0; i < imgSection.length; i++) {
    let nuevaImgAcord = mostrarSection (imgSection[i])
    acordTemporal.appendChild (nuevaImgAcord)
}

section.appendChild (acordTemporal)

/* div 2 */

let div2 = document.createElement ('DIV')
section.appendChild (div2)

let imgSection2 = ['../imagenes/boda1.jpg', '../imagenes/boda22.jpg', '../imagenes/boda3.jpg',
'../imagenes/boda4.jpg', '../imagenes/boda5.jpg', '../imagenes/boda6.jpg', '../imagenes/boda7.jpg']

let mostrarSection2 = (imgSection2) => {
    let imgAcord2 = document.createElement ('IMG')
    div2.appendChild (imgAcord2)
    div2.classList.add ('div2')
    imgAcord2.classList.add ('imgAcord')
    imgAcord2.setAttribute ('src', imgSection2)

    return div2;
}

let acordTemporal2 = document.createDocumentFragment ();

for (let i = 0; i < imgSection2.length; i++) {
    let nuevaImgAcord2 = mostrarSection2 (imgSection2[i])
    acordTemporal2.appendChild (nuevaImgAcord2)
}

section.appendChild (acordTemporal2)

/* div 3 */

let div3 = document.createElement ('DIV')
section.appendChild (div3)

let imgSection3 = ['../imagenes/boda16.jpg', '../imagenes/boda17.jpg', '../imagenes/boda18.jpg',
'../imagenes/boda19.jpg', '../imagenes/boda20.jpg', '../imagenes/boda21.jpg', '../imagenes/boda2.jpg']

let mostrarSection3 = (imgSection3) => {
    let imgAcord3 = document.createElement ('IMG')
    div3.appendChild (imgAcord3)
    div3.classList.add ('div3')
    imgAcord3.classList.add ('imgAcord')
    imgAcord3.setAttribute ('src', imgSection3)

    return div2;
}

let acordTemporal3 = document.createDocumentFragment ();

for (let i = 0; i < imgSection3.length; i++) {
    let nuevaImgAcord3 = mostrarSection3 (imgSection3[i])
    acordTemporal3.appendChild (nuevaImgAcord3)
}

section.appendChild (acordTemporal3)