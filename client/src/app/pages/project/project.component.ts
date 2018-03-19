import { Component, OnInit } from '@angular/core';
import { Project } from '../../other/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = [
    new Project(
      'Discord Bot: 3uler',
      'Uses Discord.net library version 1.0, has both a console and gui interface',
      [
        {
        link: 'https://github.com/CaptainGlac1er/3uler',
        name: 'Github Link'
        }
      ]),
    new Project(
      'UWP: Chemistry Tools',
      'Chemistry App that now runs on UWP',
      [
        {
        link: 'https://github.com/CaptainGlac1er/ChemistryToolsUWP',
        name: 'Github Link'
        },
        {
          link: 'https://www.microsoft.com/en-us/store/p/chemistrytoolsuwp/9p4x65lm9mm1',
          name: 'Windows Store Link'
        }
      ])
  ];
  constructor() { }

  ngOnInit() {
  }

}
