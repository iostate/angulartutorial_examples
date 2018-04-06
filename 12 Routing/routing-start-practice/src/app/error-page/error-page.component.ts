import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // retrieve error message from the data object on the path
    // this.errorMessage = this.route.snapshot.data['message'];

    // Choose either the above or below implementation.
    // The below implementation will allow any changes to the data object to be displayed.

    // subscribe to any changes to the data object
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }
}
