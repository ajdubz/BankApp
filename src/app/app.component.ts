import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BankApp';
  data!: any;

  constructor(private srv: CustomerService) {
    this.srv.getAll().subscribe( x => {
      this.data = x;
    });
  }
}

let testData = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 22 },
  { id: 3, name: 'Doe', age: 26 },
  { id: 4, name: 'Smith', age: 21 },
  { id: 5, name: 'Doe', age: 23 },
  { id: 6, name: 'Smith', age: 24 },
  { id: 7, name: 'Doe', age: 27 },
  { id: 8, name: 'Smith', age: 28 },
  { id: 9, name: 'Doe', age: 29 },
  { id: 10, name: 'Smith', age: 30 }
];
