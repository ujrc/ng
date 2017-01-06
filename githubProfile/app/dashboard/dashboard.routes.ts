import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const DASHBOARD_ROUTES:Routes=[
    {path:'', component:DashboardComponent}
];

export const dashboardRouting=RouterModule.forChild(DASHBOARD_ROUTES);