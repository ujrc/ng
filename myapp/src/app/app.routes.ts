import { PersonDetailsComponent } from './person/person-info/person-details.component';
import { PeopleListComponent } from './person/person-info/people-list.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES:Routes=[
    {path:'persons',component:PeopleListComponent},
    {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
    { path: '',
    redirectTo: 'persons',
    pathMatch: 'full'},
];

export const appRouting=RouterModule.forRoot(APP_ROUTES);