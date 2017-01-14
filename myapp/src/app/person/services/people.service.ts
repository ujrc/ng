import { Component, Injectable } from '@angular/core';
import { Person } from '../person';

const PEOPLE=[
{id: 1,name: 'Luke Smith', height: 156, weight: 60},
    {id: 2,name: 'Cameron Bob', height: 167, weight: 75},
    {id: 3,name: 'Kyle Genito', height: 195, weight: 85},
  ];
@Injectable()
export class PeopleService{
  getAll() : Person[] {
    return PEOPLE;
  }
  get(personId: number) : Person {
    return PEOPLE.find(p => p.id === personId);
  }

  save(person:Person){
    let originalPerson=PEOPLE.find(p=>p.id==person.id);
    if(originalPerson) Object.assign(originalPerson, person)
  }

  private clone(object:any){
    return JSON.parse(JSON.stringify(object));
  }
}