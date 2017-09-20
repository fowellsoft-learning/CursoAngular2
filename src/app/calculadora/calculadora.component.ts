import { Component, OnInit } from '@angular/core';

// Los enumerados van siempre fuera de la clase
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
  private pulsadoIgual: boolean = true;

  constructor() { }

  public reset() { this.resultado = 0; }

  public sumar()
  {
    this.comun();
    this.operacion = Operacion.Sumar;
  }

  public restar()
  {
    this.operacion = Operacion.Restar;
  }

  public multiplicar()
  {
    this.comun();
    this.operacion = Operacion.Multiplicar;
  }

  public dividir()
  {
    this.comun();
    this.operacion = Operacion.Dividir;
  }

  private comun()
  {
    this.aux = this.resultado;
    this.resultado = 0;
  }

  public add(n: any)
  {
    if (this.pulsadoIgual)
    {
      this.comun();
      this.pulsadoIgual = false;
    }

    this.resultado = Number( '' + this.resultado + n );
  }

  public calcular()
  {
    switch (this.operacion)
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

    this.pulsadoIgual = true;
  }

  ngOnInit() {}

}
