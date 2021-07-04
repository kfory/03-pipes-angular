import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: String = "Deadpool";

  arreglo = [ 1,2,3,4,5,6,7,8,9,10 ];

  PI:number = Math.PI;

  porcentaje: number = 0.234;

  salario : number = 1234.5;

  // Json
  heroeJson = {
    nombre : 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion:{
      calle:'Primera',
      casa: 20
    }
  }

// Pipes Async
valorPromesa = new Promise<string>((resolve, rejec)=>{
  setTimeout(()=>{
    resolve('Llego la data');
  }, 4500);
});

//Pipes Date
fecha: Date = new Date()

idioma:string = 'es'

//Pipes Personalizado
nombre2:string = 'Kevin Fory'
}
