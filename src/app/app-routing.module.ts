import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard/customer-dashboard.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'customer-dashboard', component: CustomerDashboardComponent},
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
