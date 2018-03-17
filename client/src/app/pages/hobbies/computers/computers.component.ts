import { Component, OnInit } from '@angular/core';
import { Computer } from '../../../other/computer';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  computers = [
    new Computer('Server',
      'Dual AMD 2346 HE',
      null,
      '12 GB PC-5300',
      ['2.5" 250 WD Black'],
      'Windows Server',
      null,
      null,
      [{
        name: 'World Community Grid',
        content: 'Over 7 years of donated compution time'
      }]),
  ];
  constructor() { }

  ngOnInit() {
  }

}
