import { Component } from "angular2/core"
import { MyModel } from "./model"

@Component({
    selector: 'my-app',
    template: '<div>{{titulo}}</div>'
})
export class MyApp {
    public titulo = "HOLA MUNDO!!!!"
    model = new MyModel();
    getCompiler() {
        return this.model.compiler;
    }  
}