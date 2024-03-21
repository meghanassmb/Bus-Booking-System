import { Component } from '@angular/core';
import { Ticket } from '../../../tickets';
import { TicketService } from '../../../tickets.service';
import { BusDetails } from '../../../bus-details';
import { Passenger } from '../../../passenger';
import { BusDetailsService } from '../../../bus-details.service';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {
  //serviceCode: string = ''; // Variable to hold service code
  //bus: any = {};
  ticket: Ticket = new Ticket(); // Create an instance of Ticket model to hold ticket data
 // bookingResult: Ticket | undefined; // Variable to hold booking result
  successMessage: string | undefined;
  errorMessage: string | undefined;
  bus:BusDetails=new BusDetails();
  passenger:Passenger=new Passenger();

  constructor(private ticketService: TicketService,private busDetailsService: BusDetailsService) {}

  
  bookTicket(): void {
    // Assign service code to ticket
    //this.ticket.serviceCode = this.serviceCode;
    
    // Call addTicket method of TicketService to book the ticket
    this.ticketService.addTicket(this.ticket).subscribe(
      (result) => {
        //this.bookingResult = result; // Store booking result
        console.log('Ticket booked successfully:', result);
        // Handle success, maybe show a success message
        this.successMessage = 'Ticket booked successfully!';
        alert("Hurray! Booking is successful");
      },
      (error) => {
        console.error('Error booking ticket:', error);
        // Handle error, maybe show an error message
        this.errorMessage = 'Failed to book ticket. Please try again later.';
        alert("Oops! Booking is unsuccessful");
      }
    );
  }

}
