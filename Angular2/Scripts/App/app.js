"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
//import { MyModel } from "./model"
var Pelicula_1 = require("./models/Pelicula");
var MyApp = (function () {
    function MyApp() {
        this.titulo = "Peliculas con Angular 2";
        //this.pelicula = "Batman v Superman";
        //this.director = "Zack Snider";
        //this.ano = 2016;
        this.mostrarDatos = false;
        this.pelicula = new Pelicula_1.Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
        this.peliculas = [
            new Pelicula_1.Pelicula(1, "Batman v Superman", "Zack Snider", 2016),
            new Pelicula_1.Pelicula(2, "La verdad duele", "Will Smith", 2016),
            new Pelicula_1.Pelicula(3, "El señor de los anillos", "Desconocido", null),
            new Pelicula_1.Pelicula(4, "Una historia real", "El de supersalidos", 2015),
            new Pelicula_1.Pelicula(5, "Don Jon", "Josep Gordon Levit", null)
        ];
    }
    MyApp.prototype.onShowHide = function (value) {
        this.mostrarDatos = value;
    };
    MyApp = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "src/views/peliculas.html",
            //template: `<h1>{{titulo}}</h1>
            //            <ul>
            //                <li>Titulo: <strong>{{pelicula}}</strong></li>
            //                <li>Director: <strong>{{director}}</strong></li>
            //                <li>Año: <strong>{{ano}}</strong></li>
            //            </ul>`
            styleUrls: ["Content/angularStyles.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=app.js.map