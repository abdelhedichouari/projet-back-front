import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { UserComponent } from '../user/user.component';
import { DashbordComponent } from './dashbord.component';


const routes: Routes = [

    {path:'',component:DashbordComponent,
    children :[

        {path:'head',component:HeaderComponent},
        {path:'to',component:TodolistComponent},
        {path:'user',component:UserComponent},

 ] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dashbordRoutingModule { }