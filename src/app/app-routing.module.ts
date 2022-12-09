import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './shared/product/product.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path:'',
    component:TaskListComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
