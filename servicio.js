//Consumo de Api desde un Cliente JS

const URI="https://api.spotify.com/v1/artists/12vb80Km0Ew53ABfJOepVz/top-tracks?market=US"

const TOKEN="Bearer BQDXweH95HXfIvVPnr4LrVkC4GNN2jeMD-BmsLwM70AXX7ib9jsiGSRK-6-i8akNMuJ-6ZKzYhtTN2s0KMHqadPbMgEcnaAgqZALck_yIViVsQF6KiaxrgDdEQUUjhxQLckkS8heDXN-kgtnr-mzrGJT14gnTJdjz0g"

//Objeto
//1.method
//2.headers
//3.body

const PARAMETROS_PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

// Ir a tocarle la puerta al server

fetch(URI,PARAMETROS_PETICION)
.then(function(respuesta){//1. Verificar el fORMATO JSON  de la RESPUESTA
  return (respuesta.json())
})

.then(function(respuestas){//2. hago lo que quiera con la respuesta
    pintarCanciones(respuestas.tracks)


    respuestas.tracks.forEach( function(tracks){

        console.log(tracks.name)
        console.log(tracks.preview_url)
        console.log(tracks.album.images[0])


        let baseDiv=document.getElementById("base")


        let columna=document.createElement("div")

        columna.classList.add("col")

        

        let tarjeta=document.createElement("div")

        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let nombre=document.createElement("h1")
        nombre.textContent=tracks.name

        let direccion=document.createElement("audio")
        direccion.src=tracks.preview_url
        direccion.setAttribute("controls","controls")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-3")
        imagen.classList.add("h-100")
        imagen.src=tracks.album.images[0].url
        



        tarjeta.appendChild(nombre)
        tarjeta.appendChild(direccion)
        tarjeta.appendChild(imagen)

        columna.appendChild(tarjeta)
        baseDiv.appendChild(columna)




    })
        
  
})

.catch(function(respuesta){//3. Mostrar el Error de la Respuesta
    console.log("ups..." + respuesta)
})

// funcion pintar

// funcion encargada de recpger los datos y pintarlos en pantalla

function pintarCanciones(canciones){
    console.log("estamos pintando")
    console.log(canciones)
}

