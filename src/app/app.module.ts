import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, InputCheckboxModule, InputDatetimeModule, InputModule, InputWithLabelModule, InputSelectModule } from "myrtex-lib";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputModule,
    InputCheckboxModule,
    InputDatetimeModule,
    InputWithLabelModule,
    InputSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
