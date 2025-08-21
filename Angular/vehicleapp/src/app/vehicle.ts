import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ivehicle } from './ivehicle';

@Injectable({
  providedIn: 'root'   // this makes the service available app-wide
})
export class VehicleService {
  private apiUrl = 'http://localhost:3000/vehicles';
  constructor(private http: HttpClient) {}

  getVehicles():  Observable<Ivehicle[]> {
    return this.http.get<Ivehicle[]>(this.apiUrl);
  }
}
