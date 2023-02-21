import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  menu: { options: Array<any>; access: Array<any> } = {
    options: [],
    access: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menu.options = [
      { name: 'Home', icon: 'fa-solid fa-house', router: ['/', 'home-page'] },
      {
        name: 'Search',
        icon: 'fa-solid fa-magnifying-glass',
        router: ['/', 'history'],
      },
    ];
    this.menu.access = [
      {
        name: 'Business',
        router: ['/', 'business'],
      },
      {
        name: 'Health',
        router: ['/', 'health'],
      },
      {
        name: 'Technology',
        router: ['/', 'tech'],
      },
      {
        name: 'Entertainment',
        router: ['/', 'fav'],
      },
    ];
  }
}
