import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../dashbord/model/user';
import { UserService } from '../dashbord/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!: User[]
use:User={name:"",username:"",email:"",adresse:"",_id:""}
firstForm = new FormGroup({
  _id : new FormControl(),
  Name : new FormControl (),
 Username : new FormControl (),
  email : new FormControl (),
  adresse : new FormControl (),
})
msg!:string
id_user!:""

constructor(private _userservice:UserService, private _route:Router,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getalluser()
    localStorage.setItem('nom','balha')
  }
 addform(){
  console.log(this.firstForm);
  
 }
 getalluser(){
 this._userservice.getuser().subscribe((data)=>{
  console.log(data);
  this.user=data
  
 })
}
deletuser(id:string){
  this._userservice.deleteuser(id).subscribe({
    next:(n)=>{
      this.msg=n

    },
  error:(e)=>{
    console.log(e.error);
    
  },complete:()=>{
    console.log('delete effectuer');
    
  }
  })
}
submit(){
  if(this.id_user == ""){
    this.adduser()

  }else{
    this.updateuser()
  }
}


  adduser(){
   
    
    this.use._id = this.firstForm.value._id ,
    this.use.name=this.firstForm.value.Name ,
    this.use.username = this.firstForm.value.Username ,
    this.use.email = this.firstForm.value.email ,
    this.use.adresse = this.firstForm.value.adresse,
 
    
    this._userservice.posteuser(this.use).subscribe({
      
      next:(n)=>{
        this.msg=n
  
      },
    error:(e)=>{
      console.log(e.error);
      
    },complete:()=>{
      console.log('Ajout effectuer');
      
    }
    })
  
  }
  updateuser(){
    this._userservice.updatuser(this.firstForm.value,this.id_user).subscribe({
      next:(n)=>{
        this.msg=n
  
      },
    error:(e)=>{
      console.log(e.error);
      
    },complete:()=>{
      console.log('update  effectuer');
      
    }
    })
    
  }

 update(i:any){
  console.log(i);
  
  this.firstForm.value.Name= i.name
  this.firstForm.value.Username=i.username
  this.firstForm.value.email= i.email
  this.firstForm.value.adresse= i.adresse
  this.id_user= i._id
  console.log(this.id_user);
  

 }
  clear(){
    localStorage.clear()
  }
 
  remove(){
    localStorage.removeItem('nom')
  }
}
