import { CommonService } from './../main/common.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Refresh } from '../../decorators';

@Component({
  selector: 'app2-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component {
  title = 'Module 2 of Angular2 App.';

  state: number;

  constructor(private service: CommonService, private change:ChangeDetectorRef) {
    this.state = service.state;
  }


  increment(): number {
    this.state = this.service.increment();
    this.change.detectChanges();
    return this.state;
  }

}
