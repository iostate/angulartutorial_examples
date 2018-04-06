import {Injectable} from "@angular/core";
// import {ChangenameService} from "./changename.service";

@Injectable()
export class LoggingService {

  // constructor(private changeNameService: ChangenameService) {}

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
