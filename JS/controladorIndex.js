import{crearUriArtista}from"./CONSTANTES.js"

 let idArtista




let selector=document.getElementById("selector")
selector=document.addEventListener("click",function(event){

    if(event.target.textContent=="ÑengloFlow"){

      idArtista="12vb80Km0Ew53ABfJOepVz?msclkid=bd11ebd3a5f511ec8415aee23063febb"
       

        console.log(crearUriArtista(idArtista))
    }
    else if (event.target.textContent=="DaddyYankee"){
        idArtista="4VMYDCV2IEDYJArk749S6m?msclkid=fdccd916a60e11ec81b0486a8a167828"
        console.log("escogi a daddy yankee"+ idArtista)
    }
    else if (event.target.textContent=="DonOmar"){
        idArtista="33ScadVnbm2X8kkUqOkC6Z?msclkid=25157ffaa60f11ecb9fde81008b536cf"
        console.log("escogi a don omar"+idArtista)
    }
    else if (event.target.textContent=="Karolg"){
        idArtista="790FomKkXshlbRYZFtlgla?msclkid=3d11a8f8a60f11eca8d016a3921c5db5"
        console.log("escogi a karolg"+idArtista)
    }
    else if(event.target.textContent=="JBalvin"){
        idArtista="1vyhD5VmyZ7KMfW5gqLgo5?msclkid=51da7743a60f11ec881f16bc6047c2b2"
        console.log("escogi a balvin"+idArtista)
    }
})