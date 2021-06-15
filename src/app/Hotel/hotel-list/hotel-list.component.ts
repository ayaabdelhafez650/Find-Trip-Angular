import { Hotel } from './../../_modules/hotel';
import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/_service/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  allHotels:Hotel[]=[];
  constructor(private service:HotelService) { }

  ngOnInit(): void {
    this.service.getallhotels().subscribe(
      a=>
      {
        this.allHotels=a;

      })

}
}
