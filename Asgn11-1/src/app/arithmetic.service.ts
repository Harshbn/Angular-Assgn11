import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  
  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  sub(num1: number, num2: number): number {
    return num1 - num2;
  }
}
