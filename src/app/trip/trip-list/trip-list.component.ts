import { TripService } from './../../_service/trip.service';
import { Trip } from './../../_modules/trip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
alltrips:Trip[]=[];
  constructor(private service:TripService) { }

  ngOnInit(): void {
    this.service.getallTrips().subscribe(
      a=>
      {
        this.alltrips=a;
        console.log(this.alltrips);
      })
  }

}
