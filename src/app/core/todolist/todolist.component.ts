import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
txt!:string  
br=[{name:"youssef"}]
c=localStorage.getItem('nom')

  constructor() { }

  ngOnInit(): void {


    
    
  }
  addtab(){
    this.br.push({name:this.txt})
    
  }
}

