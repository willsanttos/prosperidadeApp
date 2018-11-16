import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agendamento } from "../../modelos/agendamento";

/*
  Generated class for the AgendamentosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendamentosServiceProvider {

  constructor(private _http: HttpClient) {    
  }

  lista(){
    return this._http.get<Agendamento[]>('http://165.227.188.44:5555/schedule')
  }

}
