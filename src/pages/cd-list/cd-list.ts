import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';

import {Cd} from '../../models/Cd' ;
import { Services } from '../../services/services';
import { LendCdPage } from '../lend-cd/lend-cd';


@IonicPage()
@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
 cdList: Cd[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    private menuCtrl : MenuController,
    private cdService: Services,
    private modalCtrl: ModalController) {
  }

  ionViewWillEnter(){
    this.cdList=this.cdService.cdList.slice();
  }

  onLoadCd(index:number){
    let modal = this.modalCtrl.create(LendCdPage,{index:index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();

}
}
