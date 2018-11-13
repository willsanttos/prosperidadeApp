import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Agendamento } from "../../modelos/agendamento";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public agendamentos: Agendamento[];
   
  constructor(public navCtrl: NavController) {
    this.agendamentos = [
      {nome: "William", data: "12/11/2018 08:30"},
      {nome: "Anderson", data: "12/11/2018 10:00"},
      {nome: "João", data: "12/11/2018 14:00"},
      {nome: "Pedro", data: "12/11/2018 16:30"},
      {nome: "Lucas", data: "12/11/2018 18:00"},
      {nome: "Jair", data: "13/11/2018 08:30"},
      {nome: "William", data: "12/11/2018 08:30"},
      {nome: "William", data: "12/11/2018 08:30"},
      {nome: "William", data: "12/11/2018 08:30"},
      {nome: "William", data: "12/11/2018 08:30"},
      {nome: "William", data: "12/11/2018 08:30"}
    ];
  }

}
