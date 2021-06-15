import { HotelService } from 'src/app/_service/hotel.service';
import { Hotel } from './../../_modules/hotel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {
hotel:Hotel=new Hotel();
  Save()
  {
    this.hotelService.addNewHotel(this.hotel)._subscribe(a=>{
      console.log(a);
    });
  }
    constructor(private hotelService:HotelService) { }
  ngOnInit(): void {

  }

}
