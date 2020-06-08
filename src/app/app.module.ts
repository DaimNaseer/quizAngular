import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import{QuizComponent} from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { QuestionService } from './services/questions.service';
import { UsersService } from './services/users.service';


const routes: Routes=[
  {path:'',           component: HomeComponent},
  {path:'adminPage',  component: AdminComponent},
  {path:'quiz',       component: QuizComponent},
  {path:'result',     component: ResultComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    QuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1500,
      preventDuplicates:true
    }),
    ConfirmationPopoverModule.forRoot()
  ],
  providers: [QuestionService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
