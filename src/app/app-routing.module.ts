import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatabindingComponent} from './databinding/databinding.component';
import {DirectivesComponent} from './directives/directives.component';
import {ServiceDataComponent} from './service-data/service-data.component';
import {PipesComponent} from './pipes/pipes.component';
import {ParentComponent} from './parent/parent.component';
import {AngularFormsComponent} from './angular-forms/angular-forms.component';
import {UtdfComponent} from './utdf/utdf.component';
import {RtfComponent} from './rtf/rtf.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './shared/Authentication/auth.guard';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  // {path:'', component:DatabindingComponent}, //default routing it should be always at top
  {path:'databinding', component:DatabindingComponent}, //naming routing
  {path:'directives', component:DirectivesComponent},
  // {path:'directives', redirectTo: "pipe", pathMatch: 'full'}, //redirect routing
  {path:'serdata', component:ServiceDataComponent},
  {path:'pipe', component:PipesComponent, canActivate:[AuthGuard]},
  {path:'pipe/:id', component:PipesComponent}, //parameterise routing
  {path:'parentChild', component:ParentComponent},
  {path:'forms', component:AngularFormsComponent, children:[
    {path:'', component:UtdfComponent},
    {path:'utdf', component:UtdfComponent}, //child routing
    {path:'rtf', component:RtfComponent}
  ]},
  //lazyloading synatx, here we use loadChldren, here we are loadng module not an component
  {path:'crud', loadChildren:()=> import('./crud/crud.module').then((m)=> m.CrudModule)},
  //before angular 7 the syntaz for lazyloadng was dfferenet
  {path:'**', component:PageNotFoundComponent}//this is wild card routing and it should be always at last
  //if we defined it in middle then all the routing will not works
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
