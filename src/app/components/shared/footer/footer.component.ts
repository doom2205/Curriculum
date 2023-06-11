import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  persona={
    nombre :'Eric Germán Däumler',
    linkeIn : 'https://www.linkedin.com/in/eric-germán-däumler-b15190103',
    mail: 'daumlereric@hotmail.com',
    telefono: +541159356367,
    info:'Soy estudiante de la carrera de programación de Microsoft Developer Engineer, enfocándome en varios leguajes tanto web, como ASP.NET y Angular y manejo de base de datos, como SQLServer y FireBase para brindar soluciones lo más completo posibles.'
  }

}
