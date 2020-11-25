import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
nombre= 'Marrufo Huamán, Alex Anders';
email='amarrufoh15@unc.edu.pe';
direccion= 'Jr. Mariscal Sucre 180';
telefono= '926190736';

  constructor() { }

  ngOnInit(): void {
  }

}
