import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})

export class FooterModule { }