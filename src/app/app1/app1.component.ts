import { Rule } from './dtos/dto_list';
import { CommonService } from './../main/common.service';
import { Component, Input, ChangeDetectorRef, enableProdMode, OnInit } from '@angular/core';
import { Refresh } from '../../decorators';


@Component({
  selector: 'app1-root',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  title = 'Module 1 Loaded!!!';

  state: number;


  rules: Array<Rule>;

  constructor(private service: CommonService, private change: ChangeDetectorRef) {
    this.state = service.state;
  }

  ngOnInit(): void {
    let rules: Array<Rule> = [];
    for (let i = 1; i <= 10; i++) {
      rules.push({
        name: 'Rule ' + i,
        source: 'Source ' + i,
        destination: 'Destination ' + i,
        enabled: (i % 2 == 0)
      });
    }
    this.rules = rules;
  }


  private increment(): number {
    this.state = this.service.increment();
    this.change.detectChanges();
    return this.state;
  }



}
