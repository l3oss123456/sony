import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MainComponent } from './main/main.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ProductComponent } from './product/product.component';
import { CheckbillComponent } from './checkbill/checkbill.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainComponent,
    SlideshowComponent,
    ProductComponent,
    CheckbillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
