import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';


import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionGeneratorComponent } from './components/question-generator/question-generator.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import { TopicPageComponent } from './components/topic-page/topic-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { GroupCreateComponent } from './components/group-create/group-create.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'QGTool', component: QuestionGeneratorComponent},
  {path: 'Groups', component: GroupsComponent},
  {path: 'GroupPage', component: GroupPageComponent},
  {path: 'GroupPage/:id', component: GroupPageComponent},
  {path: 'TopicPage/:id', component: TopicPageComponent},
  {path: 'CreateGroup', component: GroupCreateComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    QuestionGeneratorComponent,
    GroupsComponent,
    GroupPageComponent,
    TopicPageComponent,
    FilterPipe,
    GroupCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
