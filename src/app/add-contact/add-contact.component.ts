import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  @Output() addContact = new EventEmitter<{
    name: string;
    age: string;
  }>();
  btnClicked(name: string, age: string): void {
    this.addContact.emit({
      name: name,
      age: age,
    });
  }
}
