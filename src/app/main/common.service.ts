import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  state: number = 1;

  constructor() { }

  getState():number {
    return this.state;
  }

  increment(): number{
    return this.state++;
  }

}
