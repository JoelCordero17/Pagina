import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  correo = '18890293@ittizimin.edu.mx';

  constructor() { }

  ngOnInit(): void {
  }

}
