import {ServersService} from "../servers.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

// Reduce code overhead by creating an interface
interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private serversService: ServersService) {}

  // Resolve the server by using the current route's id param
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> |
    Server {
    // + converts the value into a number.
    return this.serversService.getServer(+route.params['id']);
  }
}
