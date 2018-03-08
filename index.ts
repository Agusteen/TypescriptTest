console.log("Hola")

let l = "let";

if(true) {
    let l = "rlet";
}

let numero2: number = 1;
//number = "hola"; no se puede

let cadena: string = "hola"
let flag: boolean = true;
let array: string[];
array = ["a", "b"]

//Dato flexible
let object:any;
object = "cualquier cosa";

class Auto {
    public marca:string;
    public anio:number;

    constructor(marca:string, anio:number){
        this.marca = marca;
        this.anio = anio;
    }
}

class Ford extends Auto{
    private modelo:string;
    private version:string;

    constructor(marca:string, anio:number, modelo:string, version:string) {
        super(marca, anio);
        this.modelo = modelo;
        this.version = version;
    }

    toString(marca?:string){
        return this.marca + ' es mi favorita';
    }

}

let miAuto:Auto = new Auto('Ford', 2017); //recomendable usar comillas simples
let miFord:Ford = new Ford('Ford', 2017, "Fiesta", "Full");

console.log(miFord.toString());

let suma = function(valor1:number, valor2:number) {
    return valor1 + valor2;
}

let resta = (valor1:number, valor2:number) => valor1 - valor2; 
console.log(suma(2,7));
console.log(resta(5,4));
