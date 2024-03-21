import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerService } from '../../../passenger.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-passenger-login',
  templateUrl: './passenger-login.component.html',
  styleUrl: './passenger-login.component.css'
})
export class PassengerLoginComponent implements OnInit{
  
 
    errorMessage: string = '';
    emailId: string = '';
    password: string = '';
  
    constructor(
      private router: Router,
      private passengerService: PassengerService
    ) {}
  
    ngOnInit(): void {}
  
    login(): void {
      if (!this.emailId) {
        this.errorMessage = "Email address is blank";
        return;
      }
  
      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(this.emailId)) {
        this.errorMessage = "Email address is not valid";
        return;
      }
      this.errorMessage = "";
  
      if (!this.password) {
        this.errorMessage = "Password is blank";
        return;
      }
      this.errorMessage = '';
  
      this.passengerService.loginPassenger(this.emailId, this.password).pipe(take(1)).subscribe(
        (res: any) => {
          console.log("Response Data:", res);
          if (res && res.passId) {
            alert("Login successful");
            this.passengerService.storeUserRole('passenger');
            this.router.navigate(['/passenger/passenger-home']);
          }
        },
        (err: any) => {
          console.error("Error during login:", err);
          if (err.error && err.error.startsWith("Passenger not found with")) {
            alert("Passenger email/password is invalid");
          } else {
            alert("Something went wrong in login! Please try again");
          }
        }
      );
    }
  
    signup(){
      this.router.navigate(['passenger/passenger-signup']);
  
    } 
  }


