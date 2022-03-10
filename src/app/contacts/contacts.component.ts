import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from './contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  @Input() contact: { name: string; age: string };
  @Output() addContact = new EventEmitter<{ name: string; age: string }>();
  contacts: Contact[] = [];
  constructor() {}

  ngOnInit(): void {}
}
