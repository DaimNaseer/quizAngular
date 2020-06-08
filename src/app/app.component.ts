import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showComponent='';
  showHome=true;
  onStartQuiz({firstName,lastName}){
    if(firstName==='Muhammad'&&lastName==='Ahmad'){
      this.showComponent='admin';
    }else{
      this.showComponent='user';
    }
    this.showHome=false;
  }
}
