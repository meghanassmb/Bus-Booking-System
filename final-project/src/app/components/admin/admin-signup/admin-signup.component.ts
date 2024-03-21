import { Component } from '@angular/core';
import { AdminService } from '../../../admin.service';
import { Router } from '@angular/router';
import { Admin } from '../../../admin';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrl: './admin-signup.component.css'
})
export class AdminSignupComponent {
  admin: Admin = new Admin();
  errorMessage: string = '';
  emailId: string='';
  name: string='';
  password:string='';
  phoneNumber:string='';
  nameControl: any;
  emailIdControl: any;
  passwordControl: any;
  phoneNumberControl: any;
 
  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  
  registerAdmin(): void {
    this.adminservice.registerAdmin(this.admin)
      .subscribe(
        (response) => {
          console.log(' registered successfully:', response);
          // You may want to redirect the user or show a success message
          alert("Registration sucessful");
          this.router.navigate(['/admin-login']);
        },
        (error) => {
          console.error('Failed to register', error);
          // You may want to display an error message to the user
          alert("Registration failed");
        }
      );
  }
}



