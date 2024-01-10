import { Injectable } from '@angular/core';
import { count } from 'console';
import { checkPrime } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  constructor() { }
  ChkPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
