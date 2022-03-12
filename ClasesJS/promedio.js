const lista1 = [
    100,
    200,
    300,
    500
];

const valorlista1 = document.getElementById("valorlista1");
valorlista1.innerText = lista1[0];  
const valorlista2 = document.getElementById("valorlista2");
valorlista2.innerText = lista1[1];  
const valorlista3 = document.getElementById("valorlista3");
valorlista3.innerText = lista1[2];
const valorlista4 = document.getElementById("valorlista4");
valorlista4.innerText = lista1[3];

function calcularMedia(lista) {
/* Sumamos utilizando un siclo FOR
    let sumaLista = 0;
    for (let index = 0; index < lista.length; index++) {
        sumaLista += lista[index];    
    } */

    // Sumamos utilizando REDUCE 
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemto) {
            return valorAcumulado + nuevoElemto;            
        }
    ) 

    const promedioLista = sumaLista / lista.length;

    const valorpromedio = document.getElementById("valorpromedio");
    valorpromedio.innerText = promedioLista;
}
calcularMedia(lista1);