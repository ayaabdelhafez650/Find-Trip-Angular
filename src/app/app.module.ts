import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';
import { HotelEditComponent } from './Hotel/hotel-edit/hotel-edit.component';
import { CompanyListComponent } from './Company/company-list/company-list.component';
import { HotelDeleteComponent } from './hotel/hotel-delete/hotel-delete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
  routingComponents,
  HotelEditComponent,
  CompanyListComponent,
  HotelDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
