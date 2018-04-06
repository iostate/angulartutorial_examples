import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  // used for detecting changes in user variables
  paramSubscription: Subscription;

  /**
   *
   * @param {ActivatedRoute} route The currently
   * activated route.
   */
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // Subscribe to any changes in the id or name parameters
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  /**
   * Destroy the subscription when user navigates away.
   * Apparently, this behavior is handled automatically by Angular.
   */
    ngOnDestroy() {
      this.paramSubscription.unsubscribe();
    }
}
