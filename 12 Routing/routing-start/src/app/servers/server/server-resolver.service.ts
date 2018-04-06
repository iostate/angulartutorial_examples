import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ServersService} from "../servers.service";
import {Injectable} from "@angular/core";


/**
 * Resolve dynamic data using the Resolver.
 * return type is a server object.
 */

interface Server {
  id: number;
  name: string;
  status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private serversService: ServersService) {}

  // Loads data in advance
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> |
    Promise<Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }

}
