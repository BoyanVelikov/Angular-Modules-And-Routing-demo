import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerDashboardModule,
    UserDashboardModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
