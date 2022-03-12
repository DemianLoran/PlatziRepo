//Configura el canvas para que ocupe el ancho completo y alto específico
canvas.height = 150;
canvas.width = window.screen.width;

var cadena = " niiLC";
var j=5;

// una entrada en el array por columna de texto
//cada valor represnta la posición y actual de la columna.  (en canvas 0 es en la parte superior y los valores positivos de y van disminuyendo)
var columns = []
for (i = 0; i < 256; columns[i++] = 1);

//ejecutado una vez por fotograma
function step() {
    //Ligeramente oscurece todo el canvas dibujando un rectángulo negro casi trasnsparente sobre todo el canvas
    /*esto explica tanto el flash inicial de blanco a negro (por defecto el canvas es blanco y progresivamente se convierte en negro) como el fading de los caracteres.*/ 
    canvas.getContext('2d').fillStyle = 'rgba(1,0,0,0.05)';
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
    
    //formato de la letra
    canvas.getContext('2d').font = "bold 15px Ubuntu";
    
    //verde
    canvas.getContext('2d').fillStyle = '#0F0';

    //Le paso cada carácter por separdo para que haga la cascada de la palabra
    var character = cadena [j];
    if ( j != 0)
        j--;
    else    
        j = 5;
    
    //para cada clolumna
    columns.map(function (value, index) {
        //dibujar el carácter
        canvas.getContext('2d').fillText(character, //texto
                                         index * 10, //x
                                         value //y
                                        );
        
        //desplaza hacia abajo el carácter
        //si el carácter es menor de 758 entonces hay una posibilidad aleatoria de que sea reseteado
        columns[index] = value > 150 + Math.random() * 1e4 ? 0 : value + 10
    })
}

//1000/33 = ~30 veces por segundo
setInterval(step, 75)