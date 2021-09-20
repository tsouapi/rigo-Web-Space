import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo = '../assets/images/ny.jpg';
  profile = '../assets/images/la.jpg';
  log2 = '../assets/images/ban.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
