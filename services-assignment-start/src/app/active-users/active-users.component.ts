import { Component, OnInit} from '@angular/core';
import { AccountsService } from "../shared/accounts.service";
import {CounterService} from "../shared/counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private accountServices: AccountsService, private counterService: CounterService) {
  }

  ngOnInit() {
    this.users = this.accountServices.activeUsers;
  }

  onSetToInactive(name: string, id: number) {
    this.accountServices.toInactive(name, id);
  }


}
