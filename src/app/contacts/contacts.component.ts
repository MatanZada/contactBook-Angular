import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  addContactBooks: Contact[] = [];
  onContactAdd(addContactBook: { name: string; age: string }) {
    this.addContactBooks.push({
      name: addContactBook.name,
      age: addContactBook.age,
    });
  }

  ngOnInit(): void {}
}
