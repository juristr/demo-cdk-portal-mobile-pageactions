import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contacts/contact-list.component';
import { ContactsModule } from './contacts/contacts.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // app modules
    SharedModule,
    HomeModule,
    ContactsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
