import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  template: `
    <p>
      contact-list works!
    </p>

    <app-page-actions>
      <button type="button" class="toolbar-btn" mat-icon-button (click)="onSave()">
        <mat-icon>check</mat-icon>
      </button>
    </app-page-actions>
  `,
  styles: []
})
export class ContactListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSave() {
    alert('yay');
  }
}
