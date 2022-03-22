import { seleccionarArtista } from "./seleccionArtista.js"


let selector=document.getElementById("selector")

selector=document.addEventListener("click",function(event){
    let artistaSeleccionado=(event.target.textContent)

    let uri=seleccionarArtista(artistaSeleccionado)
    //console.log(uri)
    
})