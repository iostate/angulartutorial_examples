import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./shared/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }
  //
  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  // Services Code
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.activeUsers = this.accountsService.activeUsers;
    this.inactiveUsers = this.accountsService.inactiveUsers;
  }
}
