import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Trip } from '../_modules/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) { }
  getallTrips()
  {
  return  this.http.get<Trip[]>("https://localhost:44397/api/trips");
  }
  adddNewTrip(trip:Trip)
  {
   return this.http.post("https://localhost:44394/api/trips",trip);
  }
}
