import{crearUriArtista}from"./crearUri.js"


export function seleccionarArtista(artistaSeleccionado){

    let selector=document.getElementById("selector")
    let idArtista
    let uriArtista

  
    
      

        if(artistaSeleccionado=="ÑengloFlow"){
        
          idArtista="12vb80Km0Ew53ABfJOepVz?msclkid=bd11ebd3a5f511ec8415aee23063febb"
             
        }
        else if (artistaSeleccionado=="DaddyYankee"){
            idArtista="4VMYDCV2IEDYJArk749S6m?msclkid=fdccd916a60e11ec81b0486a8a167828"
            
        }
        else if (artistaSeleccionado=="DonOmar"){
            idArtista="33ScadVnbm2X8kkUqOkC6Z?msclkid=25157ffaa60f11ecb9fde81008b536cf"
            
        }
        else if (artistaSeleccionado=="Karolg"){
            idArtista="790FomKkXshlbRYZFtlgla?msclkid=3d11a8f8a60f11eca8d016a3921c5db5"
            
        }
        else if(artistaSeleccionado=="JBalvin"){
            idArtista="1vyhD5VmyZ7KMfW5gqLgo5?msclkid=51da7743a60f11ec881f16bc6047c2b2"
            
        }
    
       uriArtista=crearUriArtista(idArtista)

       return uriArtista
       
    
    
}

