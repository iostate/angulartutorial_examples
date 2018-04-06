import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  /**
   * Navigates you to /servers
   */
  onLoadServers() {
    this.router.navigate(['/servers']);

  }

  /**
   * Load a particular server
   * @param {number} id The id of the server.
   */
  onLoadServer(id: number) {
    this.router.navigate(['servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }
  /**
   * Navigates you to /users
   */
  onLoadUsers() {
    this.router.navigate(['/users']);
  }

  /**
   * Log in the user
   */
  login() {
    this.authService.login();
  }

  /**
   * Log out the user.
   */
  logout() {
    this.authService.logout();
  }
}
