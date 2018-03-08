var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola");
var l = "let";
if (true) {
    var l_1 = "rlet";
}
var numero2 = 1;
//number = "hola"; no se puede
var cadena = "hola";
var flag = true;
var array;
array = ["a", "b"];
//Dato flexible
var object;
object = "cualquier cosa";
var Auto = /** @class */ (function () {
    function Auto(marca, anio) {
        this.marca = marca;
        this.anio = anio;
    }
    return Auto;
}());
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(marca, anio, modelo, version) {
        var _this = _super.call(this, marca, anio) || this;
        _this.modelo = modelo;
        _this.version = version;
        return _this;
    }
    Ford.prototype.toString = function (marca) {
        return this.marca + ' es mi favorita';
    };
    return Ford;
}(Auto));
var miAuto = new Auto('Ford', 2017); //recomendable usar comillas simples
var miFord = new Ford('Ford', 2017, "Fiesta", "Full");
console.log(miFord.toString());
var suma = function (valor1, valor2) {
    return valor1 + valor2;
};
var resta = function (valor1, valor2) { return valor1 - valor2; };
console.log(suma(2, 7));
console.log(resta(5, 4));
