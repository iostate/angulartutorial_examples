import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router, Data } from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server']; // make sure this matches the variable name in app.module where resolve is declared
      }
    );

    /*

    Exchanging the following code for a resolver.

    // retrieve the id for the current server
    const id = +this.route.snapshot.params['id'];

    // set server to this id
    this.server = this.serversService.getServer(id);

    // subscribe to Params so if server changes, it is updated
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );

    */
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit'],
    //   {queryParams: {allowEdit: '1'}, fragment: 'loading'});

    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
