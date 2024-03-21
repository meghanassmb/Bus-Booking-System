/* import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationserviceService } from '../../../authenticationservice.service';
import { AdminService } from '../../../admin.service';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit { */

  /* constructor(private router: Router, private authService: AuthenticationserviceService, private adminservice: AdminService) {}
 
   emailId: string = '';
   password: string = '';
 
   login(): void {
      this.authService.adminlogin(this.emailId, this.password)
        .subscribe(
          (loggedIn: boolean) => {
            if (loggedIn) {
              // Navigate to admin dashboard if login is successful
              this.router.navigate(['/admin/admin-home']);
            } else {
              // Handle login failure
              console.error('Failed to login. Invalid credentials.');
            }
          },
          (error: any) => {
            console.error('Error during login:', error);
          }
        );
    } 
    signup(){
      this.router.navigate(['/admin/admin-signup']);
  
    } */
/*
  errormessage: string = '';
  emailId: string = '';
  password: string = '';
  errormessagep: string = '';

  constructor(
    private route: Router,
    private adminservice: AdminService) {

  }
  ngOnInit(): void {
  }
  login(): void {
    if (this.emailId === "" || this.emailId === undefined) {
      this.errormessage = "Email addresss is blank";
      return;
    }

    const re = /\S+@\S+\.\S+/;
    if (!re.test(this.emailId)) {
      this.errormessage = "Email addresss not valid";
      return;
    }
    this.errormessage = "";

    if (this.password === "" || this.password === undefined) {
      this.errormessagep = "Password is blank";
      return;
    }
    this.errormessagep = '';

    this.adminservice.loginAdmin(this.emailId, this.password).pipe(take(1)).subscribe((res: any) => {
       //console.log("Response from login service",res);
      if (res && res?.adminId) {
        alert("Login sucessful");
        if (res?.adminRole) {
          console.log('Admin role:', res?.adminRole); 
          this.adminservice.storeUserRole(res?.adminRole);
        }
        this.adminservice.storeAdminAuthorization(res?.adminId);
        let name = '';
        if (res?.name) {
          name += res?.name;
        }

        this.adminservice.storeAdminUserName(name);
        console.log('>>>>>>', res?.adminRole);
        if (res?.adminRole === 'admin') {
          this.route.navigate(['/admin/admin-home']);
        } else {
          this.route.navigate(['/']);
        }
      }
    }, err => {
      console.log("Error ", err);
      console.log(">>> ", err);
      if (err?.error && err?.error.startsWith("Customer  not found with")) {
        alert("Customer email/password is invalid");
      }
      else {
        alert("Something going wrong in login! pls try again");
      }
    }
    )
  }
  signup(): void {
    this.route.navigate(["/admin/admin-signup"]);
  }

} */

// admin-login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  errormessage: string = '';
  emailId: string = '';
  password: string = '';
  errormessagep: string = '';

  constructor(
    private route: Router,
    private adminservice: AdminService
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (!this.emailId) {
      this.errormessage = "Email address is blank";
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(this.emailId)) {
      this.errormessage = "Email address is not valid";
      return;
    }
    this.errormessage = "";

    if (!this.password) {
      this.errormessagep = "Password is blank";
      return;
    }
    this.errormessagep = '';

    // Assuming loginAdmin method returns user details including role
    this.adminservice.loginAdmin(this.emailId, this.password).pipe(take(1)).subscribe(
      (res: any) => {
        if (res && res.adminId) {
          alert("Login successful");
          this.adminservice.storeUserRole('admin');
          this.route.navigate(['/admin/admin-home']);
        }
      },
      (err: any) => {
        console.error("Error during login:", err);
        if (err.error && err.error.startsWith("Customer not found with")) {
          alert("Customer email/password is invalid");
        } else {
          alert("Something went wrong in login! Please try again");
        }
      }
    );
  }

  signup(): void {
    this.route.navigate(["/admin/admin-signup"]);
  }
}
