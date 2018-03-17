import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tileinfo: {
    name: string,
    link: string,
    image: string,
    rellink: string
  };
  image: string;
  constructor() { }

  ngOnInit() {
    this.image = `url(${this.tileinfo.image})`;
  }

}
