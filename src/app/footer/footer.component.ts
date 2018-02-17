import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year:number = new Date().getFullYear();
  github_profile:string = "https://github.com/megastar98";
  facebook_profile:string = "https://www.facebook.com/obikoyaibiniyi.megastar";
  twitter_profile:string = "https://twitter.com/obikoya11";
  constructor() { }

  ngOnInit() {
  }

}
