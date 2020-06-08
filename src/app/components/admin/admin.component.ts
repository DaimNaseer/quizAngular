import { Component, ViewChild, ElementRef, Renderer2} from "@angular/core";
import { QuestionService } from 'src/app/services/questions.service';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector:'app-admin',
    templateUrl:  './admin.component.html',
    styleUrls:['./admin.component.css']
})

export class AdminComponent{
    popoverTitle:string='Are You Sure?';
    popoverMessage:string='It will be lost permanently';
    questionText:string='';
    opt1:string='';
    opt2:string='';
    opt3:string='';
    opt4:string='';
    correctAnswer:string='';
    indexOfCA:string='';
    disableOptions:boolean=false;
    chosenCorrectAns:boolean=false;
    @ViewChild('deleteBtn',{static:false}) dBtn:ElementRef;
 
    constructor(private questions:QuestionService,
                private renderer:Renderer2,
                private users:UsersService,
                private toastr:ToastrService){
    }
    quests=this.questions.getQuestions();
    usersDB=this.users.users;

    insertQuestion(){
        if(this.questionText===''){
            this.toastr.error('Please Add Question Text',"Can't Be Inserted");
        }else if(this.opt1===''||this.opt2===''||this.opt3===''||this.opt4===''){
            this.toastr.error('You have to give 4 options',"Can't Be Inserted");
        }else if(!this.chosenCorrectAns){
            this.toastr.error('You have to select 1 correct Answer',"Can't Be Inserted");
        }
        else{
                this.quests.push({qText:this.questionText,
                options:[this.opt1,this.opt2,this.opt3,this.opt4],
                cA:this.correctAnswer});
                this.questionText="";
                this.opt1="";
                this.opt2="";
                this.opt3="";
                this.opt4=""; 
                this.disableOptions=true;
                this.toastr.success('Question inserted successfully',"Success");
        }
       
    }
    correctAns(e){
        this.chosenCorrectAns=true;
        this.indexOfCA=e.target.className;
        this.correctAnswer=e.target.nextElementSibling.value; 
    }
    clearList(){
        this.questions.removeAllQuestions();
    }
    editQuestion(e,index){
        this.questionText=e.target.previousElementSibling.textContent.slice(3);
        this.opt1=this.quests[index].options[0];
        this.opt2=this.quests[index].options[1];
        this.opt3=this.quests[index].options[2];
        this.opt4=this.quests[index].options[3];
        this.quests.splice(index,1);
        this.renderer.setStyle(this.dBtn.nativeElement,'visibility','visible');
        this.disableOptions=false;
    } 
    deleteQuestion(){
    this.questionText="";
    this.opt1="";
    this.opt2="";
    this.opt3="";
    this.opt4="";
    this.renderer.setStyle(this.dBtn.nativeElement,'visibility','hidden');
    }   

    deleteResult(index:number){
        this.usersDB.splice(index,1);
    }

    clearResults(){
        this.usersDB.length=0;
    }

    newQuestion(){
        this.disableOptions=false;
    }
}