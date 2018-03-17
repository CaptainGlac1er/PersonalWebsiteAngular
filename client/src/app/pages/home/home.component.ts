import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links = [
    {
      name: 'Github',
      link: 'https://github.com/CaptainGlac1er',
      image: '/assets/images/github.png'
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/georgecolgrove',
      image: '/assets/images/linkedin.png'
    },
    {
      name: 'HackerRank',
      link: 'https://www.hackerrank.com/georgecolgrove',
      image: '/assets/images/hackerrank.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
