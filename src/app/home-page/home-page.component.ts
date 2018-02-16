import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  currentYear = new Date().getFullYear();
  title: string = "Tech Flow";
  description:string = "Catch up with latest Tech Trends";
  constructor() { }

  ngOnInit() {
  }

}
