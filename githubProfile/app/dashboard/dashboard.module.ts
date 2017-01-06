import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routes';
import { GithubService } from './../services/github.service';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[DashboardComponent],
    imports:[dashboardRouting],
})

export class DashboardModule{

}