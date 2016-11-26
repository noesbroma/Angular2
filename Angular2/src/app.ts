import { Component } from "angular2/core";
//import { MyModel } from "./model"
import { Pelicula } from "./models/Pelicula";

@Component({
    selector: 'my-app',
    templateUrl:"src/views/peliculas.html",
    //template: `<h1>{{titulo}}</h1>
    //            <ul>
    //                <li>Titulo: <strong>{{pelicula}}</strong></li>
    //                <li>Director: <strong>{{director}}</strong></li>
    //                <li>Año: <strong>{{ano}}</strong></li>
    //            </ul>`
    styleUrls: ["Content/angularStyles.css"]
})
export class MyApp {
    public titulo = "Peliculas con Angular 2";
    //public pelicula:string;
    //public director:string;
    //public ano: number;
    public pelicula: Pelicula;
    public mostrarDatos:boolean;

    constructor() {
        //this.pelicula = "Batman v Superman";
        //this.director = "Zack Snider";
        //this.ano = 2016;
        this.mostrarDatos = false;
        this.pelicula = new Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
    }

    onShowHide(value) {
        this.mostrarDatos = value;
    }


    //model = new MyModel();
    //getCompiler() {
    //    return this.model.compiler;
    //}  
}