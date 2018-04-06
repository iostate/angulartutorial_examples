import { Injectable } from '@angular/core';
import { CounterService } from "./counter.service";

@Injectable()
export class AccountsService {
  inactiveUsers: string[] = ['Max', 'Anna'];
  activeUsers: string[] = ['Chris', 'Manu', 'Farshad'];

  constructor(private counterService: CounterService) {
    this.counterService.active = this.activeUsers.length;
    this.counterService.inactive = this.inactiveUsers.length;
  }



  toActive(name: string, id: number) {
    // Push this onto the Active array
    this.activeUsers.push(name);
    // Remove the element from the inactive array
    this.inactiveUsers.splice(id, 1);
    // this.inactiveUserCount--;
    this.counterService.incrementActiveAccount();
  }

  toInactive(name: string, id: number) {
    this.inactiveUsers.push(name);
    this.activeUsers.splice(id, 1);
    this.counterService.decrementActiveAccount();
  }

}
