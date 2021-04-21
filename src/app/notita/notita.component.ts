import { Component, OnInit, Input } from '@angular/core';
import { Notita } from 'src/app/entidades/Notita';

@Component({
  selector: 'app-notita',
  templateUrl: './notita.component.html',
  styleUrls: ['./notita.component.css']
})
export class NotitaComponent implements OnInit {

  @Input() notita: Notita;

  constructor() { }

  ngOnInit(): void {
  }

  marcar(): void {
    this.notita.marcada = !this.notita.marcada;
  }
}
