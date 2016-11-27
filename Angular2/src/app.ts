import { Component } from "angular2/core";
//import { MyModel } from "./model"
//import { Pelicula } from "./pelicula";
import { PeliculasListComponent } from "./components/peliculasListComponent";
import { PeliculasFooterComponent } from "./components/peliculasFooterComponent";

@Component({
    selector: 'my-app',
    templateUrl:"src/views/peliculas.html",
    //template: `<h1>{{titulo}}</h1>
    //            <ul>
    //                <li>Titulo: <strong>{{pelicula}}</strong></li>
    //                <li>Director: <strong>{{director}}</strong></li>
    //                <li>Año: <strong>{{ano}}</strong></li>
    //            </ul>`
    directives: [PeliculasListComponent, PeliculasFooterComponent],
    //styleUrls: ["Content/angularStyles.css"]
})
export class MyApp {
    public titulo = "Peliculas con Angular 2!!!!!!!!!!!!!!!!!!!!!";
    //public pelicula:string;
    //public director:string;
    //public ano: number;
    


    //model = new MyModel();
    //getCompiler() {
    //    return this.model.compiler;
    //}  
}