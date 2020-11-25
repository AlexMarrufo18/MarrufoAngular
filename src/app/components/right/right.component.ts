import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  titulo: string;
  listdate: any = [];
  estadoServicios: boolean;

  constructor(public servicio: JsonService) {
    this.titulo='Post Component';
    this.servicio.getjson().subscribe(data =>{
      this.listdate=data;
    });
    this.estadoServicios = false;
   }

  ngOnInit(): void {
  }

  showServicios(){
    return this.estadoServicios = !this.estadoServicios;
  }

}
