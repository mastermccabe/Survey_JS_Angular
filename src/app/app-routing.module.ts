import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { CreateComponent } from './create/create.component';


import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
  path: '',
  component: NameComponent,
  children: []

  },
  {
    path:'create',
    pathMatch:'full',
    component: CreateComponent,
    children:[]
  },
  {
    path:'name',
    pathMatch:'full',
    component: NameComponent,
    children:[]
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component: DashboardComponent,
    children:[]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
