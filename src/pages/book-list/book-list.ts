import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';

import {Book} from '../../models/Book' ;
import { Services } from '../../services/services';
import { LendBookPage } from '../lend-book/lend-book';

@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
booksList:Book[];
  constructor(public navCtrl: NavController,
               public navParams: NavParams, 
               private menuCtrl : MenuController,
               private livresService: Services,
               private modalCtrl: ModalController) {
  }

  ionViewWillEnter(){
    this.booksList=this.livresService.booksList.slice();
  }

  onLoadBook(index:number){
    let modal = this.modalCtrl.create(LendBookPage,{index:index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();

}
}
