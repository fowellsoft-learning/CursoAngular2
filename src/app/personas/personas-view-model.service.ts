import { Injectable } from '@angular/core';
import { LoggerService } from '../../my-core/index';

@Injectable()
export class PersonasViewModelService
{
  // Inicializa objetos que posteriormente usará
  private listado: Array<any> = new Array<any>();
  private elemento: any = {};

  // Similar a un enumerado aunque no lo es, sólo puede tomar uno de esos valores
  private modo: 'list' | 'add' | 'edit' | 'delete' | 'view' = 'list';

  private idOriginal: number = null;
  private PK = 'id';

  constructor(private log: LoggerService) { }

  // Se publica para que se pueda ver pero no modificar
  get Listado() { return this.listado; }
  get Elemento() { return this.elemento; }
  get Modo() { return this.modo; }

  // Simula la carga de datos en el listado
  private load()
  {
    if (this.listado.length === 0)
    {
      this.listado = [
                        {id: 1, nombre: 'Angel', apellidos: 'Toledo Rueda', edad: 34},
                        {id: 2, nombre: 'Maria', apellidos: 'Sacristan Rodriguez', edad: 33},
                        {id: 3, nombre: 'Elena', apellidos: 'Quintana Romanescu', edad: 37},
                        {id: 4, nombre: 'Pedro', apellidos: 'García Escribano', edad: 29},
                        {id: 5, nombre: 'Lucía', apellidos: 'Santa María Roldan', edad: 4},
                     ];
    }
  }

  list()
  {
    this.load();
    this.modo = 'list';
  }

  add()
  {
    this.elemento = {};
    this.modo = 'add';
  }

  edit(id: number)
  {
    // Si la variable sólo se asigna una vez y no se vuelva a asignar lo correcto es definirla como constante
    const result = this.listado.find(elem => elem[this.PK] == id);
    if (result)
    {
      this.elemento = Object.assign({}, result);
      this.idOriginal = this.elemento[this.PK];
      this.modo = 'edit';
    }
    else
    {
      this.log.error('Elemento no encontrado');
    }
  }

  view(id: number)
  {
    // Si la variable sólo se asigna una vez y no se vuelva a asignar lo correcto es definirla como constante
    const result = this.listado.find(elem => elem[this.PK] == id);
    if (result)
    {
      this.elemento = Object.assign({}, result);
      this.modo = 'view';
    }
    else
    {
      this.log.error('Elemento no encontrado');
    }
  }

  delete(id: number)
  {
    if (!window.confirm('¿Seguro?')) { return ;}

    const ind = this.listado.findIndex(elem => elem[this.PK] == id);
    if (ind > -1)
    {
      this.listado.splice(ind, 1);
      this.list();
    }
    else
    {
      this.log.error('Elemento no encontrado');
    }
  }

  cancel()
  {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }

  send()
  {
    switch (this.modo)
    {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
        const ind = this.listado.findIndex(elem => elem[this.PK] == this.idOriginal);
        if (ind)
        {
          this.listado[ind] = this.elemento;
          this.cancel();
        }
        else
        {
          this.log.error('Elemento no encontrado');
        }
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}
