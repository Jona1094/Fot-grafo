let sectGaleria = document.querySelector ('.galeriaNiños')

let arrImg = ['../imagenes/bebe1.jpg', '../imagenes/bebe2.jpg', '../imagenes/bebe3.jpg', '../imagenes/bebe4.jpg',
'../imagenes/bebe5.jpg', '../imagenes/bebe6.jpg', '../imagenes/bebe7.jpg', '../imagenes/bebe8.jpg',
'../imagenes/bebe9.jpg', '../imagenes/bebe10.jpg', '../imagenes/bebe11.jpg' ]

let mostrarImg = (arrImg) => {
    let imgBebe = document.createElement ('IMG')
    imgBebe.setAttribute ('src', arrImg)
    imgBebe.classList.add ('imgBebe')
    sectGaleria.appendChild (imgBebe)

    return imgBebe;
}

let temporal = document.createDocumentFragment()

for (let i = 0; i < arrImg.length; i++) {
    let nuevaImg = mostrarImg (arrImg[i])
    temporal.appendChild (nuevaImg)
}

sectGaleria.appendChild (temporal)


