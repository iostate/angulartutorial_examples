import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {resolve} from 'url';


export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return {'invalidProjectName': true};
    } else {
      return null;
    }
  }

  static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000);



    });
    return promise;
  }

}
