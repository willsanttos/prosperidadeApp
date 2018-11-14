import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Agendamento } from "../../modelos/agendamento";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public agendamentos: Agendamento[];
   
  constructor(public navCtrl: NavController, 
    private _http: HttpClient,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) {
          
    let loading = this._loadingCtrl.create({
      content: 'Carregando agendamentos...'
    })

    loading.present();

    this._http.get<Agendamento[]>('http://165.227.188.44:5555/schedule')
              .subscribe(
                (agendamentos) => {
                  this.agendamentos = agendamentos;
                  loading.dismiss();
                },
                (err: HttpErrorResponse) => {
                  console.log(err);

                  loading.dismiss();

                  this._alertCtrl.create({
                    title: 'Falha na conexão',
                    subTitle: 'Não foi possivel carregar a lista. Tente mais tarde',
                    buttons: [
                      {text: 'OK'}
                    ]
                  }).present();
                }
              );
  }

}
