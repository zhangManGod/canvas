import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { DirectiveModule } from './directive/directive.module'

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectiveModule,
  ],
  exports: [DirectiveModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
