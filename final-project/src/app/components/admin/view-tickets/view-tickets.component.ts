import { Component, OnInit } from '@angular/core';

import { Ticket } from '../../../tickets';
import { TicketService } from '../../../tickets.service';
import { BusDetails } from '../../../bus-details';
import { Passenger } from '../../../passenger';


@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrl: './view-tickets.component.css'
})
export class ViewTicketsComponent implements OnInit {
  bookedTickets: Ticket[] = [];
  bus:BusDetails=new BusDetails();
  passenger:Passenger=new Passenger();

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadBookedTickets();
  }

  loadBookedTickets(): void {
    this.ticketService.findAll().subscribe(
      (tickets) => {
        this.bookedTickets = tickets;
      },
      (error) => {
        console.error('Error fetching booked tickets:', error);
        alert("Oops! Couldn't fetch booked tickets");
      }
    );
  }
  deleteTicket(ticketId: any): void {
    this.ticketService.delete(ticketId).subscribe(
      () => {
        console.log(`Ticket with ID ${ticketId} deleted successfully.`);
        // Optionally, perform any additional actions after deletion
        alert("Ticket cancelled succesfully");
      },
      (error) => {
        console.error('Error deleting ticket:', error);
        alert("Couldn't find ticketId");
      }
    );
  }

  
}