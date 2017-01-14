import { PeopleService } from './../services/people.service';
import { Component } from '@angular/core';
import { Person } from "../person";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  providers:[PeopleService]
})
export class PeopleListComponent {
people: Person[] =[];
selectedPerson:Person;
 constructor(private peopleService:PeopleService){

   this.people=this.peopleService.getAll();
 }
 selectPerson(person:Person){
   this.selectedPerson=person;
 }
    }
