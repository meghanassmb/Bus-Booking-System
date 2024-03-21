import { Component } from '@angular/core';
import { PassengerService } from '../../../passenger.service';
import { Passenger } from '../../../passenger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-signup',
  templateUrl: './passenger-signup.component.html',
  styleUrl: './passenger-signup.component.css'
})
export class PassengerSignupComponent {
  passenger: Passenger = new Passenger();
  
  constructor(private passengerService: PassengerService, private router: Router) { }
  
  registerPassenger(): void {
    this.passengerService.registerPassenger(this.passenger)
      .subscribe(
        (response) => {
          console.log('Passenger registered successfully:', response);
          // You may want to redirect the user or show a success message
          alert("Registration sucessful");
          this.router.navigate(['/passenger-login']);
        },
        (error) => {
          console.error('Failed to register passenger:', error);
          // You may want to display an error message to the user
          alert("Registration failed");
        }
      );
  }
  }