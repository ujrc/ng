import { GithubComponent } from './dashboard/github/github.component';
import { dashboardRouting } from './dashboard/dashboard.routes';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';

const APP_ROUTES:Routes=[
{path:'', component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'github-profile', component:GithubComponent},
{path:'dashboard',loadChildren:'./app/dashboard/dashboard.module#DashboardModule'}
];

export const routing= RouterModule.forRoot(APP_ROUTES);