import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ServLogin } from './services/login.service';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CrudComponent } from './crud/crud.component';
import { HomeDebtorComponent } from './home-debtor/home-debtor.component';
import { DebtorsComponent } from './home-debtors/home-debtors.component';
import { DebtorService } from './services/debtors.service';
import { DebtorsHeading } from './debtorlist-heading/debtorlist-heading.component';
import { ShellComponent } from './shell/shell.component';
import { EventsMain } from './events/events-main.component';
import { EventsParent } from './events-parent/events-parent.component';
import { Eventschild } from './events-child/events-child.component';
import { LocalRef } from './localref/localref-base.component';
import { ProjectionComponent } from './projection/projection.component';
import { ProjectionChild } from './projection/projection-child/projection-child.component';
import { DirectiveBase } from './directives/directive-base.component';
import { DirectivePrefix } from './app-directives/prefix-stuff.directive';
import { StructDir } from './app-directives/str-directive';
import { BaseDynamic } from './dynamic/dynamic-base.component';
import { DynamicMessage } from './dynamic/message/dynamic-message.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'Home', component: HomeComponent,
    children: [
      { path: 'DebtorList', component: DebtorsComponent},
      { path: 'Profile', component: ProfileComponent},
      { path: 'Events', component: EventsMain ,
      children:[
        { path: 'Main', component: EventsParent},
        { path: 'localref', component: LocalRef},
        { path: 'Projection', component: ProjectionComponent},
        { path: 'Directives', component: DirectiveBase},
        { path: 'Dynamic', component: BaseDynamic},
      ]}


    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    CrudComponent,
    HomeDebtorComponent,
    DebtorsComponent,
    DebtorsHeading,
    ShellComponent,
    EventsMain,
    EventsParent,
    Eventschild,
    LocalRef,
    ProjectionComponent,
    ProjectionChild,
    DirectiveBase,
    DirectivePrefix,
    StructDir,
    BaseDynamic,
    DynamicMessage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,    
    RouterModule.forRoot(routes),
  ],
  providers:[ServLogin, DebtorService],
  // providers: [ServLogin],
  bootstrap: [AppComponent],
  entryComponents:[DynamicMessage]
})
export class AppModule { }
