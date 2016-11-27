import { Component } from "angular2/core";
import { Pelicula } from "../models/pelicula";

@Component({
    selector: 'peliculas-list',
    templateUrl: "src/views/peliculasList.html"
    //styleUrls: ["Content/angularStyles.css"]
})

export class PeliculasListComponent {
    public pelicula: Pelicula;
    public mostrarDatos: boolean;
    public peliculas: Array<Pelicula>;
    public peliculaSelected: Pelicula;

    constructor() {
        //this.pelicula = "Batman v Superman";
        //this.director = "Zack Snider";
        //this.ano = 2016;
        this.mostrarDatos = false;
              
        //this.pelicula = new Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
        
        this.peliculas = [
            new Pelicula(1, "Batman v Superman", "Zack Snider", 2016),
            new Pelicula(2, "La verdad duele", "Will Smith", 2016),
            new Pelicula(3, "El señor de los anillos", "Desconocido", null),
            new Pelicula(4, "Una historia real", "El de supersalidos", 2015),
            new Pelicula(5, "Don Jon", "Josep Gordon Levit", null)
        ];

        this.pelicula = this.peliculas[0];
        this.peliculaSelected = this.peliculas[0];
    }

    onShowHide(value) {
        this.mostrarDatos = value;
    }

    onChangeFavoritePelicula(pelicula) {
        this.pelicula = pelicula;
        this.peliculaSelected = pelicula;
    }
}