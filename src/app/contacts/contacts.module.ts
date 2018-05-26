import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, ContactsRoutingModule],
  declarations: []
})
export class ContactsModule {}
