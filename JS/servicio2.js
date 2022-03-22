    export async  function cosumirApi(PARAMETROS_PETICION,tokenArtista){
    let respuesta= await fetch(PARAMETROS_PETICION,tokenArtista)
    let canciones=respuesta.json()

    return(canciones)
}




   

//funcion para consumir APIS(DATOS)
//de cualquier sevidor con JS PURO





   

