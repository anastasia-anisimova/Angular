import { Component, OnInit } from '@angular/core';
import {Data} from './data';
import {counter} from "./counter";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  data: Data;
  result: string = "";
  endDat: number = new Date(2018, 8, 1, 17, 40).getTime();

  constructor() {
    this.data = new Data(22,
      "Institute of space and information technology", this.endDat);
  }

  ngOnInit() {
     setInterval(()=> this.result = counter(this.endDat), 1000);
  }
}
