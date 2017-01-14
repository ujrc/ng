import { PeopleService } from './../services/people.service';
import { Person } from './../person';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Routes,Router } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
@Component({
    selector:'app-person-details',
    templateUrl:'./person-details.component.html',
})

export class PersonDetailsComponent implements OnInit{

    // @Input() person:Person;
    hobbies: string[] = ['Acting','Basketball','Bicycling','Church/church activities','Computer activities',
    'Cooking','Educational Courses','Football','Internet','Jump Roping','Knitting','Reading','Relaxing',
'Shopping','Singing In Choir','Sleeping','TV watching']
     person:Person;
    subscription:Subscription;

    constructor(private paramRouter:ActivatedRoute,
                private peopleService:PeopleService,
                private linkRouter:Router){

    }
    ngOnInit(){

        this.subscription=this.paramRouter.params.subscribe(
            params=>{
                let id=Number.parseInt(params['id']);
                this.person=this.peopleService.get(id);
            });
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
backToList(){
    let link=['/persons'];
    this.linkRouter.navigate(link);
}

savePersonInfo(){
    // alert('Saved!!!!${JSON.stringify(this.persion})');
    this.peopleService.save(this.person);
}

}