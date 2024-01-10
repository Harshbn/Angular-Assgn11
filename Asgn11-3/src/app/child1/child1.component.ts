import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers: [NumberService,StringService]
  

})
export class Child1Component 
{
  isPrime: boolean;
  capitalCount: number;

  constructor(private numberService: NumberService, private stringService: StringService) {
    // Call the chkPrime and countCapital methods with hardcoded values
    this.isPrime = this.numberService.ChkPrime(6);
    this.capitalCount = this.stringService.countCapital('Marvellous Infosystems');
  }
}
