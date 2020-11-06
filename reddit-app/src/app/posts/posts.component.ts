import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Post } from '../models/post';

@Component({
    selector: 'app-posts',
    templateUrl: 'posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class Posts implements OnInit {
    
    posts: Post[];
    @Input() post;  

    upVote(index:number, post:Post){
        this.posts[index].point = post.point + 1;
    }

    downVote(index:number, post:Post){
        this.posts[index].point = post.point - 1;
    }

    ngOnInit(): void {

        if(this.post){
            this.post.subscribe(data => {
                this.posts.push(data);
            });
        }
        this.posts = [
            new Post("My Title 1", "link1.com", 0),
            new Post("My Title 2", "link2.com", 1),
            new Post("My Title 3", "link3.com", 2)
        ];
    
    }
    constructor(){}
}