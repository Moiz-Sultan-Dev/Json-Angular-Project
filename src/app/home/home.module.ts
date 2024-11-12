import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { JsonModule } from '../jsonModule/json-module.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],  
  imports: [CommonModule, HomeRoutingModule, JsonModule], 
})
export class HomeModule { }
