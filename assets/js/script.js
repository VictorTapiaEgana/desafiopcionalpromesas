const URL_API = 'https://jsonplaceholder.typicode.com/photos';

const errorr = document.getElementById('errorr')
const mensaje = document.getElementById('mensaje')

document.addEventListener("DOMContentLoaded", () => {
    RecibirMensajes()
});


async function obteberDatos(url){
    
    try {
        
        const respuesta = await fetch(url)
        const datos = await respuesta.json()

        return MostrarVeinteDatos(datos)
       
        

    } catch (error) {

    //    document.write(`Error de Coneccion : <hr> ${error}`)
        errorr.textContent = (`Error de Coneccion :${error}`)

        
    }

}

function MostrarVeinteDatos(arrayDatos){

    let NewDats = [];
    
    arrayDatos.forEach((dats,index) => {          
        
        if(index < 20 ){
            NewDats.push(dats)            
        }else{            
            return;
        } 
        
    });

    return NewDats;

}

function RetornarPromesa(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
          
            resolve("Información Enviada");

        }, 3000); 

      });
}

async function RecibirMensajes (){

    try {

        const resultados = await RetornarPromesa()

        mensaje.textContent = (`${resultados}`)

        const array = await obteberDatos(URL_API)    
        
        GenerarTabla(array)    

    } catch (error) {

        errorr.textContent = `Error de Coneccion :${error}`

    }

}

function GenerarTabla (arrayDatos) { 

     const TBody = document.getElementById('tbody')
     let fila = '';

     arrayDatos.forEach(dats =>{

        fila += `<tr>` +
                    `<td>${dats.id}</td>` +
                    `<td>${dats.title}</td>` +
                    `<td><a href=${dats.url} target="_blank">${dats.url}</a></td>` + 
                `</tr>`              

     })

     TBody.innerHTML = fila

 }
