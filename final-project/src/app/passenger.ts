export class Passenger {

    passId!: number;
    passName: string | undefined;
    phoneNumber: string | undefined;
    emailId: string | undefined;
    password: string | undefined;
    passCount: number | undefined;
    arrivalDateTime: string | undefined; 
    source: string | undefined;
    destination: string | undefined;
    bus: BusDetails[] | undefined;
}
export class BusDetails {
    busNumber: number | undefined;
    
  }
