import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';

import { dashbordRoutingModule } from './dashbord-routing.module';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { UserComponent } from '../user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    DashbordComponent,
    HeaderComponent,
    NavbarComponent,
    TodolistComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    
    dashbordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers :[UserService]
})
export class DashbordModule { }
