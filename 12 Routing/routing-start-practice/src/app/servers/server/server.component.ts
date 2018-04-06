import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Data, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    //
    // this.server = this.serversService.getServer(id);
    //
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
    //
    // console.log('Server ID: ' + id);
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  }

  /**
   * Navigates the user to the edit for the currently selected server.
   * Preserves the queryParams.
   */
  onEdit() {
    // this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
