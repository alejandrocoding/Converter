import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CalculationModule } from './calculation/calculation.module';

@NgModule({
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    CalculationModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }