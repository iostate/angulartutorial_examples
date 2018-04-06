import { Component, OnInit } from '@angular/core';
import { AccountsService } from "../shared/accounts.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  ngOnInit() {
    this.users = this.accountServices.inactiveUsers;
  }
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private accountServices: AccountsService) {}

  onSetToActive(name: string, id: number) {
    this.accountServices.toActive(name, id);
  }
}
