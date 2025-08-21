import { Component,OnInit} from '@angular/core';
import { VehicleService } from '../vehicle';
import { Ivehicle } from '../ivehicle';

@Component({
  selector: 'app-vehiclecomp',
  imports: [],
  templateUrl: './vehiclecomp.html',
  styleUrl: './vehiclecomp.css'
})
export class Vehiclecomp implements OnInit {

  vehicles: Ivehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;;
    });
  }

}