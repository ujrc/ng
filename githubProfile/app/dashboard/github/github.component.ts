import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-github',
    templateUrl:'./app/dashboard/github/github.component.html',
     providers:[GithubService]
})

export class GithubComponent implements OnInit{

name="Github Component";
user:any;
repos:any;
username:string;
constructor(private githubService:GithubService){
}

getUser(){
      this.githubService.getProfile()
    .subscribe(data=>{
        this.user=data;
        console.log(this.user);
    });
}

getRepos(){
      this.githubService.getRepositories()
    .subscribe(data=>{
        this.repos=data;
        console.log(this.repos);
    });   
}
ngOnInit(){
// this.getUser();
// this.getRepos();
}
search(){
    this.githubService.editUsername(this.username);
 this.getUser();
this.getRepos();   
}
}