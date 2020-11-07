import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Post } from '../models/post';

@Component({
    selector: 'app-posts',
    templateUrl: 'posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class Posts implements OnInit {
    
    posts: Post[];
    allPost: Post[];
    @Input() post;  

    upVote(indexPost:number, post:Post){

        this.posts[indexPost].point = post.point + 1;
        
        for(let i=0;i<this.posts.length;i++){
            if(this.posts[i].point < post.point){
                //this.allPost.push(post);
               //this.posts.splice(indexPost, 1);
           }else{
                this.allPost.push(this.posts[i]);
           }
           console.log("button up  " + this.allPost + "  index  "+ i);
        }

       /*
        this.posts.forEach(function (value ,index){
            
            if(value.point < post.point){
                 //this.allPost.push(post);
                //this.posts.splice(indexPost, 1);
            }else{
                // allPost.push(value);
            }
            console.log("button up  " + value.point + "  index  "+ index);
        }); 

        */
        this.posts = this.allPost;
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
            new Post("My Title 1", "link1.com", 2),
            new Post("My Title 2", "link2.com", 1),
            new Post("My Title 3", "link3.com", 0)
        ];
    
    }
    constructor(){}
}