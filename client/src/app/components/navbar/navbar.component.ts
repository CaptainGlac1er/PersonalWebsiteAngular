import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links = [{
    'link': '/hobbies',
    'name': 'Hobbies'
  },
  {
    'link': '/projects',
    'name': 'Projects'
  },
  {
    'link': '/resume',
    'name': 'Resume'
  },
  {
    'link': '/about',
    'name': 'Resume'
  }];

  constructor() { }

  ngOnInit() {
  }


}
