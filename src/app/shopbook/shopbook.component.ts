import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { Book } from '../model/Book';



@Component({
  selector: 'app-shopbook',
  templateUrl: './shopbook.component.html',
  styleUrls: ['./shopbook.component.css']
})
export class ShopbookComponent implements OnInit {

  books: Array<Book>;
  booksRecieved: Array<Book>;
  bk: Book;
  cartBooks: any;
  cntOfItems: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { 

    
  }


  ngOnInit() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartBooks = JSON.parse(data);
      //this.cntOfItems = this.cartBooks.length;
    } else {
      this.cartBooks = [];
    }

    let uid = localStorage.getItem('username');
    this.cntOfItems = 0;
    
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.books = new Array<Book>();
    //get books returned by the api call
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.name = book.name;
      //populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.price = book.price;
      bookwithRetrievedImageField.picByte = book.picByte;
      this.books.push(bookwithRetrievedImageField);
    }
  }

  addToCart(bookId) {
    //retrieve book from books array using the book id
    let book = this.books.find(book => {
      return book.id === +bookId;
    });

    //getting username from localstorage and setting uid to it and saving it back to db.
    // this.bk.id = book.id;
    
    let uid = localStorage.getItem('username');
    book.uid = uid;
    console.log(book)
    this.httpClientService.addToCart(book).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    )

    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    console.log(data);
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    console.log('hii');
    // add the selected book to cart data
    cartData.push(book);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    //localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    book.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartBooks = cartData;
    this.cntOfItems += this.cartBooks.length;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    var ind: any;
    for (ind in this.cartBooks) { 
      this.cartBooks[ind].isAdded = false;
    }
    this.cartBooks = [];
    this.cntOfItems = 0;
    this.httpClientService.removeFromCart(localStorage.getItem('username')).subscribe(
      response => console.log(response),
      err => console.log(err)
    )
    localStorage.removeItem('cart');
  }

}
