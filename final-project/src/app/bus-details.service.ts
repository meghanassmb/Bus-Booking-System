import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusDetails } from './bus-details'; 

@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {

  private baseUrl = 'http://localhost:8080/api/BusDetails'; 

  constructor(private http: HttpClient) { }

  saveBusDetails(bus: BusDetails): Observable<BusDetails> {
    return this.http.post<BusDetails>(`${this.baseUrl}/savebus`, bus);
  }

  getBusByNumber(busNumber: number): Observable<BusDetails> {
    return this.http.get<BusDetails>(`${this.baseUrl}/${busNumber}`);
  }

  findAll(): Observable<BusDetails[]> {
    return this.http.get<BusDetails[]>(`${this.baseUrl}/Allbuses`);
  }

  deleteBusByNumber(busNumber: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${busNumber}`);
  }

  updateBusDetails(bus: BusDetails): Observable<BusDetails> {
    return this.http.put<BusDetails>(`${this.baseUrl}/updateBus`, bus);
  }

  getBusBySourceAndDestination(source: string, destination: string): Observable<BusDetails[]> {
    return this.http.get<BusDetails[]>(`${this.baseUrl}/${source}/${destination}`);
  }
}