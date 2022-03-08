import{URI,PARAMETROS_PETICION}from"./CONSTANTES.js"


//funcion para consumir APIS(DATOS)
//de cualquier sevidor con JS PURO



async  function cosumirApi(){
    let respuesta= await fetch(URI,PARAMETROS_PETICION)
    let canciones=respuesta.json()
    return(canciones)
}

 export let resultado=await cosumirApi()
   


