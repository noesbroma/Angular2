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
var pelicula_1 = require("./models/pelicula");
var PeliculasListComponent = (function () {
    function PeliculasListComponent() {
        //this.pelicula = "Batman v Superman";
        //this.director = "Zack Snider";
        //this.ano = 2016;
        this.mostrarDatos = false;
        this.pelicula = new pelicula_1.Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
        this.peliculas = [
            new pelicula_1.Pelicula(1, "Batman v Superman", "Zack Snider", 2016),
            new pelicula_1.Pelicula(2, "La verdad duele", "Will Smith", 2016),
            new pelicula_1.Pelicula(3, "El señor de los anillos", "Desconocido", null),
            new pelicula_1.Pelicula(4, "Una historia real", "El de supersalidos", 2015),
            new pelicula_1.Pelicula(5, "Don Jon", "Josep Gordon Levit", null)
        ];
    }
    PeliculasListComponent.prototype.onShowHide = function (value) {
        this.mostrarDatos = value;
    };
    PeliculasListComponent = __decorate([
        core_1.Component({
            selector: 'peliculas-list',
            templateUrl: "src/views/peliculasList.html"
        }), 
        __metadata('design:paramtypes', [])
    ], PeliculasListComponent);
    return PeliculasListComponent;
}());
exports.PeliculasListComponent = PeliculasListComponent;
//# sourceMappingURL=peliculasListComponent.js.map