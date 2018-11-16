import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Agendamento } from "../../modelos/agendamento";
import { HttpErrorResponse } from '@angular/common/http';
import { AgendamentosServiceProvider } from "../../providers/agendamentos-service/agendamentos-service";
import { NavLifeCycles } from "../../utils/ionic/nav/nav-lifecycles";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifeCycles {

  public agendamentos: Agendamento[];
   
  constructor(public navCtrl: NavController,    
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _agendamentosService: AgendamentosServiceProvider) {}

    ionViewDidLoad(){
      let loading = this._loadingCtrl.create({
        content: 'Carregando agendamentos...'
      });
  
      loading.present();
  
      this._agendamentosService.lista()
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
