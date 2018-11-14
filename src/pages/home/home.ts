import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Agendamento } from "../../modelos/agendamento";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public agendamentos: Agendamento[];
   
  constructor(public navCtrl: NavController, 
    private _http: HttpClient,
    private _loadingCtrl: LoadingController) {
          
    let loading = this._loadingCtrl.create({
      content: 'Aguarde o carregamento dos agendamentos...'
    })

    loading.present();

    this._http.get<Agendamento[]>('http://165.227.188.44:5555/schedule')
              .subscribe(
                (agendamentos) => {
                  this.agendamentos = agendamentos;

                  loading.dismiss();
                }
              );
  }

}
