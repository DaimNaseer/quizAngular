import { Component, Renderer2, ViewChild, ElementRef } from "@angular/core";
import { QuestionService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector:'app-quiz',
    templateUrl:'./quiz.component.html',
    styleUrls:['./quiz.component.css']
})
export class QuizComponent{
    counter:number=0;
    showMessage=false;
    disableOptions=false;
    correctAnswer=false;
    wrongAnswer=false;
    message:string="";
    btnText:string="Next";
    face:string;

   constructor(private qService:QuestionService,
               private router:Router,
               private users:UsersService){

   }
   questions=this.qService.getQuestions();
   
   optionClicked(e){
    if(e.target.className.slice(0,7)==='choice-'){
        this.showMessage=true;
        this.disableOptions=true;
        if(this.questions[this.counter].options[e.target.className.slice(7)]===this.questions[this.counter].cA){
            this.face="assets/images/happy.png";
            this.correctAnswer=true;
            this.message="This is a correct answer";
            this.users.users[this.users.users.length-1].score++;
        }
        else{
            this.face="assets/images/sad.png";
            this.wrongAnswer=true;
            this.message="This is a wrong answer"
        }
    }
   }
   nextQuestion(e){
    if(e.target.textContent==="Next"){
    this.showMessage=false;
    this.disableOptions=false;
    this.correctAnswer=false;
    this.wrongAnswer=false;
    this.message="";
       this.counter++;
       if(this.counter===this.questions.length-1){
            this.btnText="Finish";
       }
    }else{
        console.log(this.users.users);
        this.router.navigate(['/result']);
    }
   }

   showSmiley() :string{
    return this.face;
   }
   
}