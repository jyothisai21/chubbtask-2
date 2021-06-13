import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : "Dashboard",
    component : DashboardComponent
  },
  {
    path : "user",
    component : UserComponent
  },
  {
    path : "product/:id",
    component : ProductComponent
  },  
  {
    path : "product",
    component : ProductComponent
  },  
  {
    path : "user/:id",
    component : UserComponent
  },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
