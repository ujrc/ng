import { CLIENTID, CLIENTSECRET } from './../constants/constants';
import { Http } from '@angular/http';
import {Injectable} from '@angular/core'

import 'rxjs/Rx';
@Injectable()
export class GithubService{

    baseUrl='https://api.github.com/users/';
    username='willyhakim';
    constructor(private http:Http) {
        console.log("Github service ...");
    }

    getProfile(){
        return this.http.get(this.baseUrl+this.username+'?client_id='+CLIENTID+'&client_secret='+CLIENTSECRET)
        // return this.http.get(this.baseUrl+this.username)
        .map(resp=>resp.json());
    }

     getRepositories(){
        return this.http.get(this.baseUrl+this.username+'/repos?client_id='+CLIENTID+'&client_secret='+CLIENTSECRET)
        // return this.http.get(this.baseUrl+this.username+'/repos')
        .map(resp=>resp.json());
    }

    editUsername(username:string){
        this.username=username;
    }
}