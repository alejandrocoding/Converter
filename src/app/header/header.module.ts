import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})

export class HeaderModule { }