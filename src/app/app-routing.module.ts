import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from "./add-resto/add-resto.component";
import { ListRestoComponent } from "./list-resto/list-resto.component";
import { UpdateRestoComponent } from "./update-resto/update-resto.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    component:AddRestoComponent,
    path: 'add'
  },
  {
    component:ListRestoComponent,
    path: 'list'
  },
  {
    component:LoginComponent,
    path: 'login'
  },
  {
    component:RegisterComponent,
    path: 'register'
  },
  {
    component:UpdateRestoComponent,
    path: 'update'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
