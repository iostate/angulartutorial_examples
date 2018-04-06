import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string;

  // Need activated route in order to display the error message
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Reach and grab the error message from the route snapshot
    this.errorMessage = this.route.snapshot.data['message'];
    // Also subscribe to the data changing
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

}
