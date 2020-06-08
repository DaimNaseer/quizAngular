import { Component } from "@angular/core";
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector:'app-result',
    templateUrl:'./result.component.html',
    styleUrls:['./result.component.css']
})
export class ResultComponent{
    constructor(private users:UsersService){}

    name:string=this.users.users[this.users.users.length-1].firstname + ' ' +
        this.users.users[this.users.users.length-1].lastname;
    score:number=this.users.users[this.users.users.length-1].score;
}