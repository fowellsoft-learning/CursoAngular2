import { LoggerService } from './../../my-core/service/logger.service';
import { MisDatosService } from './../services/mis-datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  mensaje: string = '(vacio)';

  listado = [ {id: 1, nombre: 'Madrid'},
              {id: 2, nombre: 'barcelona'},
              {id: 3, nombre: 'SEVILLA'},
              {id: 4, nombre: 'Valencia'}] ;

  idProvincia: number = this.listado[0].id;
  visible: boolean = true;

  constructor(private srv: MisDatosService,
              private log: LoggerService) {
  }

  ngOnInit() {
  }

  public get VM(){ return this.srv; }


  public saluda() {
    this.mensaje = `Hola ${this.srv.Nombre}`;
  }

  /**
   * despide
   */
  public despide() {
    this.mensaje = `Adios ${this.srv.Nombre}`;
  }

  /**
   * di
   */
  public di(algo: string) {
    this.mensaje = `Dice ${algo}`;
  }

  /**
   * add
   */
  public add(provincia: string) {
    this.listado.push({id: this.listado.length + 1, nombre: provincia});
    this.idProvincia = this.listado[this.listado.length - 1].id;
  }

  public calcula(a: number, b: number) { return a + b; }
}
