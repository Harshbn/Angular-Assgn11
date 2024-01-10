import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers: [NumberService]

})
export class Child1Component 
{
  isPrime: boolean;

  constructor(private numberService: NumberService) {
    // Call the chkPrime method with a hardcoded value
    this.isPrime = this.numberService.ChkPrime(7);
  }

}
