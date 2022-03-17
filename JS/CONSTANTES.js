

 export const TOKEN="Bearer BQDTRDukau8YQFLf7vngmsifuigfkd1adZGA_XEZqaV4z2j3vjUD_Hbz6bG1_oRkviG-LTU16yUPOV-OBARYWl07eF1hRN5JaITUSpRgQHCEowFenXERqUNRlP73htIPWFucgp7XniEvTqiLZbEKvPFIaK6tJZrZUC4"


 export const PARAMETROS_PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}
 export function crearUriArtista(idArtista){
    const URI=`https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=US`
    return URI
}
