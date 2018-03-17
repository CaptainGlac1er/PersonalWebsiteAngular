import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  links = [
    {
      name: 'Computers',
      rellink: '/hobbies/computers',
      image: '/assets/images/electronics.jpg'
    },
    {
      name: 'Photography',
      rellink: '/hobbies/photography',
      image: '/assets/images/photo.jpg'
    },
    {
      name: 'Gaming',
      link: 'http://steamcommunity.com/id/captainglac1er/',
      image: '/assets/images/minecraft.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
