import { Hotel } from './../_modules/hotel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }
  getallhotels()
  {
  return  this.http.get<Hotel[]>("http://rsaber-001-site1.ftempurl.com/api/Hotel");
  }
 addNewHotel(newHotel:Hotel)
  {
  return  this.http.post("https://localhost:44397/api/Hotel",newHotel);
  }
}
