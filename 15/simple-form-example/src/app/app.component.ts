import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  subscriptions = [
    'basic',
    'pro',
    'advanced'
  ];
  selectedSubscription = 'advanced';

  ngOnInit() {

    // print the form to the console
    console.log(this.form);
    // console.log(this.value);
  }

}
