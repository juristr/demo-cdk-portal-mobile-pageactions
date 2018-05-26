import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  template: `
    <h2>Contacts</h2>

    <mat-card *ngFor="let contact of contacts">
      {{ contact.name }}
    </mat-card>

    <app-page-actions>
      <button type="button" class="toolbar-btn" mat-icon-button (click)="onSave()">
        <mat-icon>check</mat-icon>
      </button>
    </app-page-actions>
  `,
  styles: [
    `
    mat-card {
      margin-bottom: 5px;
    }
  `
  ]
})
export class ContactListComponent implements OnInit {
  contacts = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.contacts.push({
        name: `Contact ${i}`
      });
    }
  }

  onSave() {
    alert('yay');
  }
}
