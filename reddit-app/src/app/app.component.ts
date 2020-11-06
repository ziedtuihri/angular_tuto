import { Component, EventEmitter, Input } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'reddit-app';

  private post: EventEmitter<Post> = new EventEmitter();
  newPost: Post;

  addPost(title: HTMLFormElement, link: HTMLFormElement){
    this.newPost = new Post(title.value, link.value, 0);
    this.post.emit(this.newPost);

  }
}
