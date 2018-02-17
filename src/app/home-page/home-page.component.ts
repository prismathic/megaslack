import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[PostsService]
})
export class HomePageComponent implements OnInit {

  user_id = "5a85bab1728d8423003acd45";
  posts:any[] = [];
  currentYear = new Date().getFullYear();
  title: string = "Mega Flow";
  description:string = "Catch up with latest Tech Trends";
  constructor(
    public postService: PostsService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts(this.user_id).subscribe((res)=>{
      if(res['status'] == 1){
        this.posts = res['message'];
      }
    })
  }

}
