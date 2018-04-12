import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TchobiloutesComponent } from './tchobiloutes/tchobiloutes.component';
import { TchobilouteDetailComponent } from './tchobiloute-detail/tchobiloute-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TchobiloutesComponent,
    TchobilouteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
