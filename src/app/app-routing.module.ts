import { HotelDeleteComponent } from './Hotel/hotel-delete/hotel-delete.component';
import { HotelEditComponent } from './Hotel/hotel-edit/hotel-edit.component';
import { HotelAddComponent } from './Hotel/hotel-add/hotel-add.component';
import { HotelListComponent } from './Hotel/hotel-list/hotel-list.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"trip",component:TripListComponent},
  {path:"hotel",component:HotelListComponent},
  {path:"editHotel",component:HotelEditComponent},
  {path:"addHotel",component:HotelAddComponent},
 {path:"deleteHotel",component:HotelDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
export const routingComponents=[HotelListComponent,TripListComponent,HotelEditComponent,HotelAddComponent,HotelDeleteComponent]
