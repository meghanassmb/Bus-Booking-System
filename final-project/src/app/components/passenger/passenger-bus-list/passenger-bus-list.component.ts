import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDetails } from '../../../bus-details';
import { BusDetailsService } from '../../../bus-details.service';
import { Ticket } from '../../../tickets';
import { Passenger } from '../../../passenger';
import { TicketService } from '../../../tickets.service';

@Component({
  selector: 'app-passenger-bus-list',
  templateUrl: './passenger-bus-list.component.html',
  styleUrl: './passenger-bus-list.component.css'
})
export class PassengerBusListComponent implements OnInit{
  buses: BusDetails[] = [];
  
  showTable: boolean = false; // Track visibility of bus list table
  showBusDetails: boolean = false; // Track visibility of bus details
  ticket: Ticket = new Ticket(); // Create an instance of Ticket model to hold ticket data
 // bookingResult: Ticket | undefined; // Variable to hold booking result
  successMessage: string | undefined;
  errorMessage: string | undefined;
  bus: any = {};
  passenger:Passenger=new Passenger();

  constructor(private busDetailsService: BusDetailsService,private ticketService: TicketService) { }

  ngOnInit(): void {
    this.findAllBuses();
  }

  findAllBuses(): void {
    this.busDetailsService.findAll().subscribe(
      (buses: BusDetails[]) => {
        this.buses = buses;
      },
      (error) => {
        console.error('Error fetching buses:', error);
      }
    );
  }

  toggleTable() {
    this.showTable = !this.showTable;
  }

  getBusByNumber(busNumber: number): void {
    this.busDetailsService.getBusByNumber(busNumber).subscribe(
      (bus: BusDetails) => {
        console.log('Bus details:', bus);
        this.bus = bus; // Assign found bus details
        this.showBusDetails = true; // Show bus details
      },
      (error) => {
        console.error('Error fetching bus details:', error);
      }
    );
  }

 /* bookTicket(): void {
    // Assign service code to ticket
    //this.ticket.serviceCode = this.serviceCode;
    
    // Call addTicket method of TicketService to book the ticket
    this.ticketService.addTicket(this.ticket).subscribe(
      (result) => {
        //this.bookingResult = result; // Store booking result
        console.log('Ticket booked successfully:', result);
        // Handle success, maybe show a success message
        this.successMessage = 'Ticket booked successfully!';
      },
      (error) => {
        console.error('Error booking ticket:', error);
        // Handle error, maybe show an error message
        this.errorMessage = 'Failed to book ticket. Please try again later.';
      }
    );
  }

}*/
handleClick(): void {
  alert('Redirecting please wait');
  // You can perform any action here when the button is clicked
}
}
