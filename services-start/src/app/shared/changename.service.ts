import { Injectable } from '@angular/core';

@Injectable()
export class ChangenameService {

  constructor() { }

  changeName(name: string) {
    return name.concat('NAME CHANGED');
  }

}
