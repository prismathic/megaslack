import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(user_id:string){
    return this.http.get('http://localhost:3000/api/posts/'+user_id);
  }

}
