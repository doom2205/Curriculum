import { Component } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo={
    titulo1:'desarrollador web',
    titulo2:'sobre mi',
    titulo3:'contacto',
    img:'assets/img/Eric-Däumler.jpg'
  }
  
  
  persona={
    nombre :'Eric Germán Däumler',
    linkeIn : 'https://www.linkedin.com/in/eric-germán-däumler-b15190103',
    mail: 'daumlereric@hotmail.com',
    telefono: '+541159356367',
    info: `Soy estudiante de la carrera de programación de Microsoft Developer 
Engineer, para aumentar mis habilidades, y poder brindar soluciones 
informáticas a los que me lo soliciten, enfocándome en varios leguajes web, 
Angular, HTML y CSS, Javascript, TypeScript y ASP.NET. Manejo de base de 
datos, SQLServerver y Firebase para brindar soluciones lo más completos
posibles. Estudiando en institutos como de forma autodidacta, para reforzar los 
conceptos adquiridos y aprender nuevas y más complejas maneras de
programar y brindar soluciones.`
  }
  
  
  constructor(){
    
  }

 
}
