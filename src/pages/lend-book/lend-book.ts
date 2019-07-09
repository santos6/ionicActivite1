import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Book } from "../../models/Book";
import { Services } from '../../services/services';

@IonicPage()
@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  book:Book;
  index:number;


  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private livresService:Services,
               private viewCtrl: ViewController) {
  }


  ngOnInit(): void {
   this.index= this.navParams.get('index');
   this.book = this.livresService.booksList[this.index] ;
  }
onToggleLend (){
   this.book.isLend= !this.book.isLend;
   
}
   
dismissModal(){
  this.viewCtrl.dismiss();
}


}
