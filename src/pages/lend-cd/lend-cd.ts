import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Cd } from "../../models/Cd";
import { Services } from '../../services/services';

@IonicPage()
@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  cd:Cd;
  index:number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private cdService:Services,
    private viewCtrl: ViewController) {
  }


  ngOnInit(): void {
    this.index= this.navParams.get('index');
    this.cd = this.cdService.cdList[this.index] ;
   }
 onToggleLend (){
    this.cd.isLend= !this.cd.isLend;
    
 }
    
 dismissModal(){
   this.viewCtrl.dismiss();
 }
  
}
