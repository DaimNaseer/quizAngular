export class QuestionService{
    questionStorage:{qText:string,options:string[],cA:string}[]=[
      {
         qText:'First Question',
         options:['a','b','c','d'],
         cA:'a'
        },
       {
         qText:'Second Question',
         options:['a','b','c','d'],
         cA:'b'
        },
        {
            qText:'Third Question',
            options:['a','b','c','d'],
            cA:'c'
        },
        {
            qText:'Fourth Question',
            options:['a','b','c','d'],
            cA:'d'
        }
    ];

    getQuestions(){
        return this.questionStorage;
    }

    removeAllQuestions(){
        this.questionStorage.length=0;
    }
}