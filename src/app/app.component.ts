import { Component } from '@angular/core';
import { Notita } from 'src/entidades/Notita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notitas: Array<Notita> = new Array();
  nuevoTitulo = '';
  nuevoContenido = '';

  agregarNotita(): void {
    let nuevaNotita = new Notita(this.nuevoTitulo, this.nuevoContenido.replace(/(\\r\\n)|([\r\n])/gmi, '<br/>'));
    this.notitas.push(nuevaNotita);
  }
}
