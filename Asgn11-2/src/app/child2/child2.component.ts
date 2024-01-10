import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component 
{
  capitalCount: number;

  constructor(private stringService: StringService) {
    // Call the countCapital method with a hardcoded value
    this.capitalCount = this.stringService.countCapital('Marvellous Infosystems');
  }

}
