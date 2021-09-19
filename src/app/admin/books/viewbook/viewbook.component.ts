import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  @Input()
  book: Book;

  @Output()
  bookDeletedEvent = new EventEmitter();


  constructor(private httpClientService: HttpClientService, private router: Router
    ) { }

  ngOnInit() {
  }

  deleteBook() {
    Swal.fire({
      title: 'Are you sure?',
      // text: 'You will not be able to recover this imaginary file!',
      width: '300px',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {

        this.httpClientService.deleteBook(this.book.id).subscribe(
          (book) => {
            this.bookDeletedEvent.emit();
            this.router.navigate(['admin', 'books']);
          }
        );

        Swal.fire(
          'Deleted!',
          // 'Your imaginary file has been deleted.',
          // 'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire(
        //   'Cancelled',
        //   // 'Your imaginary file is safe :)',
        //   'error'
        // )
      }
    })
  }

  editBook() {
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'edit', id: this.book.id } });
  }

}
