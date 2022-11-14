// SECT 1

let conteiner = document.querySelector ('.conteinerTattoo')

let sectImg = document.createElement ('DIV')
conteiner.appendChild(sectImg)
sectImg.classList.add ('sectImg')
let imgTattoo = ['../imagenes/tattoo1.jpg', '../imagenes/tattoo2.jpg', '../imagenes/tattoo1.jpg', '../imagenes/tattoo2.jpg'
, '../imagenes/tattoo1.jpg', '../imagenes/tattoo2.jpg', '../imagenes/tattoo1.jpg', '../imagenes/tattoo2.jpg', '../imagenes/tattoo1.jpg', '../imagenes/tattoo2.jpg'
, '../imagenes/tattoo1.jpg', '../imagenes/tattoo2.jpg']

let mostrarImg = (imgTattoo) => {
let imgT = document.createElement ('IMG')
sectImg.appendChild (imgT)
imgT.classList.add ('imgTattoo')
imgT.setAttribute ('src', imgTattoo)

return imgT;
}

let imgtemp = document.createDocumentFragment()

for (let i = 0; i < imgTattoo.length; i++) {
    let nuevaImg = mostrarImg (imgTattoo[i])
    imgtemp.appendChild (nuevaImg)
}

sectImg.appendChild (imgtemp)

// SECT 2

let sectImg2 = document.createElement ('DIV')
conteiner.appendChild (sectImg2)
sectImg2.classList.add ('sectImg2')

let imgTattoo2 = ['../imagenes/tattoo1.jpg', '../imagenes/alumn2.jpg','../imagenes/tattoo1.jpg', '../imagenes/alumn2.jpg']

let mostrarImg2 = (imgTattoo2) => {
    let imgT2 = document.createElement ('IMG')
    imgT2.classList.add ('imgT2')
    sectImg2.appendChild (imgT2)
    imgT2.setAttribute ('src', imgTattoo2)

    return imgT2;
}

let imgtemp2 = document.createDocumentFragment ();

for (let i = 0; i < imgTattoo2.length; i++) {
    let nuevaImg2 = mostrarImg2 (imgTattoo2[i])
    imgtemp2.appendChild (nuevaImg2)
}

sectImg2.appendChild (imgtemp2)
