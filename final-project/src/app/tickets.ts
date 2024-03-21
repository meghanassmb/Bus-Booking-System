export class Ticket {
  ticketId!: number;
  totalPrice: number | undefined;
  busNumber: number | undefined;
  ticketPrice: number | undefined;
  ticketDate: string | undefined; // Assuming string representation of LocalDate
  paidAmount: number | undefined;
  passenger: Passenger | undefined;
  admin: Admin | undefined;
  serviceCode: any;
}
export class Passenger {
  passId: number | undefined;
  passName: string | undefined;
  source: string | undefined;
  destination: string | undefined;
}

export class Admin {
  adminId: number | undefined;

}