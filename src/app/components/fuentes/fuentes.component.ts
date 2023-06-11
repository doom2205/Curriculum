import { Component } from '@angular/core';

@Component({
  selector: 'app-fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.css']
})
export class FuentesComponent {
  persona={
    git: 'https://github.com/doom2205?tab=repositories',
    udemy:'https://www.udemy.com/',
    educacionIT:'https://www.educacionit.com/'
  }
}
