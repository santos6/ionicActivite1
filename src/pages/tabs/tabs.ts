import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookListPage } from '../book-list/book-list';
import { CdListPage } from '../cd-list/cd-list';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  bookListPage:any = BookListPage;
  cdListPage:any = CdListPage;

}
