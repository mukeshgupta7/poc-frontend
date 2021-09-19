import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientService } from './http-client.service';
import { Book } from '../model/Book';

describe('HttpClientService', () => {

  let book: Book;
  let httpTestingController: HttpTestingController;
  beforeEach(() => { TestBed.configureTestingModule({
    imports: [
      // RouterTestingModule,
      HttpClientTestingModule
    ],
    providers: [HttpClientService],
  });
  book = {
    id: 1,
    name: 'book1',
    author: 'author1',
    price: 100,
    picByte: 'euifheifuerhf',
    retrievedImage: 'hkjfhekfefe',
    isAdded: true,
    uid: 'john',
  };
});

  it('should be created', () => {
    const service: HttpClientService = TestBed.get(HttpClientService);
    expect(service).toBeTruthy();
  });

  it('should have getBooks function', () => {
    const service: HttpClientService = TestBed.get(HttpClientService);
    expect(service.getBooks).toBeTruthy();
   });

   it("should return books", () => {
    let result: Book[];
    const service: HttpClientService = TestBed.get(HttpClientService);
    service.getBooks().subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: 'http://localhost:8080/books'
    });
   
    req.flush([book]);
   
    expect(result[0]).toEqual(book);
  });

});
