// Clase Butacas
class Butacas{
    constructor(id, estado){
        this.id = id;
        this.estado = estado;
    }
    setId(id){
        this.id=id;
    }
    setEstado(estado){
        this.estado=estado;
    }
    getId(){
        return this.id;
    }
    imprimirButaca(){
        if(this.estado===true){
            return " 1";

        }else{
            return " 0";
        }
        
    }
    getEstado(){
        return this.estado;        
    }
    printButaca(){
        return this.id + "," + this.estado;
    }
}

// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas


// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push(new Butacas(idContador++,false)); //creacion de objeto de forma tradicional

        }
        butacas.push(fila);
    }
    return butacas;
}
//funcion aleatoria utilizada por la funcion llenarRandom para generar numeros entre 0 y N
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//funcion que permite llenar las butacas aleatoriamente, recibe matriz con butacas y la cantidad de asientos a ocupar
function llenarRandom(matriz, cantidad){
    
    for(let i=0; i<N;i++){
        for(let j=0;j<cantidad;j++){
            matriz[i][getRandomInt(0,N)].setEstado(true);
        }
    }

}

// Inicializar la matriz butacas
let butacas = setup();
llenarRandom(butacas,4);//sirve para inicializar (llenar) la matriz de butacas

// Imprimir la matriz
console.log("PANTALLA");
for(let i=0;i<N;i++){
    let pp = "";
    for(let j=0;j<N;j++){
        pp = pp + butacas[i][j].imprimirButaca();
    }
    console.log(pp);
}
/*
console.log("ULTIMA FILA");
console.log("");
console.log("Puestos sugeridos: " + suggest(3));
*/
//funcion que sirve para ocupar asientos segun el argoritmo del ejercicio tema 2
function suggest(cantAsientos){
    let matrizId=[];
    if(cantAsientos<=N){
        for(let i=N-1;i>-1 && matrizId.length< cantAsientos; i--){
            matrizId=[];
            for (let j = 0; j < N && matrizId.length < cantAsientos && N - j >= cantAsientos - matrizId.length; j++) {
                if(!butacas[i][j].getEstado()){
                    matrizId.push(butacas[i][j].getId());
                }else{
                    matrizId=[];
                }
            }
        }
    }
    console.log("Puestos sugeridos: " + matrizId);
    return matrizId;
}