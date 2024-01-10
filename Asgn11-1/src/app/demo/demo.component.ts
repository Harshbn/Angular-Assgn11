import { Component,OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent
 {
  resultAdd: number;
  resultSub: number;

  constructor(private arithmeticService: ArithmeticService) {
    // Call the add and sub methods with hardcoded values
    this.resultAdd = this.arithmeticService.add(5, 3);
    this.resultSub = this.arithmeticService.sub(5, 3);
  }
}