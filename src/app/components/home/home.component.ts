import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  fname:string;
  lname:string; 
  constructor(private router:Router,
              private users:UsersService,
              private toastr:ToastrService) { }
 
  ngOnInit(): void {
   
  }
  onClick(){
    if(this.fname!==undefined&&this.lname!==undefined){ 
      if(this.fname==="Muhammad"&&this.lname==="Ahmad"){
        this.router.navigate(['/adminPage']);
      }else{
        this.users.users.push({firstname:this.fname,lastname:this.lname,score:0});
        this.router.navigate(['/quiz']);
      }
    }else{
      this.toastr.error('Please Provide Both First And Last Names','Missing Info');
    }
  }
  
    }

