import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartBooks: Array<Book>;
  // cartBooks: any;
  books: Array<Book>;
  
  constructor(private httpClientService: HttpClientService) {
    console.log('cart component loaded'); 
  }

  ngOnInit() {
    // this._interactionService.cartItem$
    // .subscribe(
    //   items => { this.cartBooks = items;
    //   console.log('subject called'+"--"+items)}
    // );
    this.refreshData(); 
  }

  refreshData() {
    let uid = localStorage.getItem('username');
    this.httpClientService.getBookInCartByUser(uid).subscribe(
      response => this.handleSuccessfulResponse(response),
      err => console.log(err)
    );
  }
  
  handleSuccessfulResponse(response) {
    this.cartBooks = response;
    //get books returned by the api call
    console.log(this.cartBooks)
  }

  removeBook(id: number) {
    this.httpClientService.removeFromCart(id);
  }

}
