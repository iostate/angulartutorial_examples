import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  active: number = 0;
  inactive: number = 0;

  constructor() { }

  incrementActiveAccount() {
    this.active++;
    this.decrementInactiveCount();
    console.log('Active Users: ' + this.active);
  }

  decrementActiveAccount() {
    this.active--;
    this.incrementInactiveCount();
    console.log('Active Users: ' + this.active)
  }

  incrementInactiveCount() {
    this.inactive++;
  }

  decrementInactiveCount() {
    this.inactive--;
  }

}
