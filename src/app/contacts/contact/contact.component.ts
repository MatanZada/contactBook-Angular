import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contact: { name: string; age: string };
  constructor() {
    this.contact = { name: 'string', age: 'string' };
  }

  ngOnInit(): void {}
}
