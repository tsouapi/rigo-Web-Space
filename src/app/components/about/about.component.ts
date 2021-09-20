import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  logo = '../assets/images/ny.jpg';
  profile = '../assets/images/la.jpg';
  log2 = '../assets/images/ban.jpg';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  gotoEducation(){
  this.router.navigate(['/education']);
 }

 // tslint:disable-next-line:typedef
 gotoExperiences(){
  this.router.navigate(['/experiences']);
}
// tslint:disable-next-line:typedef
gotoHobbies(){
  this.router.navigate(['/hobbies']);
}
}
