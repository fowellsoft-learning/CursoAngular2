import { Component, OnInit } from '@angular/core';

enum Operacion { Sumar, Restar, Multiplicar, Dividir }

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  // Define el elemento que mostrará los resultados
  public resultado: number = 0;
  private operacion: Operacion;
  private aux: number;

  constructor() { }

  public reset() { this.resultado = 0; }

  public sumar() {
    this.aux = this.resultado;
    this.resultado = 0;
    this.operacion = Operacion.Sumar;
  }

  public restar() {
    this.aux = this.resultado;
    this.resultado = 0;
    this.operacion = Operacion.Restar;
  }

  public multiplicar() {
    this.aux = this.resultado;
    this.resultado = 0;
    this.operacion = Operacion.Multiplicar;
  }

  public dividir() {
    this.aux = this.resultado;
    this.resultado = 0;
    this.operacion = Operacion.Dividir;
  }

  public add(n: number)
  {
    this.resultado = Number( '' + this.resultado + n );
  }

  public calcular()
  {
    switch( this.operacion)
    {
      case Operacion.Sumar:
        this.resultado += this.aux;
        break;
      case Operacion.Restar:
      this.resultado = this.aux - this.resultado;
        break;
      case Operacion.Multiplicar:
      this.resultado *= this.aux;
        break;
      case Operacion.Dividir:
      this.resultado = this.aux / this.resultado;
        break;
    }
  }

  ngOnInit() {}

}
