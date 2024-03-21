import { Component, OnInit } from '@angular/core';
import { BusDetailsService } from '../../bus-details.service';
import { BusDetails } from '../../bus-details';


@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css'] 
})
export class BusesComponent  implements OnInit{
  buses: BusDetails[] = [];
  bus: any = {};
  errorMessage: string = '';
 

  constructor(private busService:BusDetailsService) { }

  ngOnInit(): void {
    this.findAllBuses();
  }

  findAllBuses(): void {
    this.busService.findAll().subscribe(
      (buses: BusDetails[]) => {
        this.buses = buses;
      },
      (error) => {
        console.error('Error fetching buses:', error);
        this.errorMessage = 'Failed to fetch buses. Please try again later.';
      }
    );
  }
}
