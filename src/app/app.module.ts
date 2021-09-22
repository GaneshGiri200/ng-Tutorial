import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import { NavComponent } from './nav/nav.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './shared/custompipe/square.pipe';
import { CheckGenderPipe } from './shared/custompipe/check-gender.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { FooterComponent } from './footer/footer.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {OrderModule} from 'ngx-order-pipe'; //importing third party order pipe
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'; //imported httpclient module


//ng module is decorator or directive which define what things attached to app module.
@NgModule({

//the component which we declare ng write here automatically
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectivesComponent,
    ServiceDataComponent,
    NavComponent,
    PipesComponent,
    SquarePipe,
    CheckGenderPipe,
    ParentComponent,
    ChildComponent,
    AngularFormsComponent,
    FooterComponent,
    UtdfComponent,
    RtfComponent,
    PageNotFoundComponent,
    LoginComponent
  ],

//third party module and libraries which we declare here manually
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //importing core module forms module
    OrderModule, //importing third party pipe
    HttpClientModule, //importing of HttpCLientModule
    ReactiveFormsModule
  ],

//provided array is used to services in old version butin new dont required
  providers: [],

//to render page properly in browser bootstrap is used 
  bootstrap: [AppComponent]
})
export class AppModule { }
