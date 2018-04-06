import {Component, OnInit} from '@angular/core';
import { CustomValidators } from '../custom-validators';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  projectStatus = ['stable', 'critical', 'finished'];
  forbiddenProjectNames = ['Test'];


  ngOnInit() {
    this.form = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName]),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical'),
    });
  }

  onSubmit() {
    // Display the values of the form
    console.log(this.form.value);
  }
}
