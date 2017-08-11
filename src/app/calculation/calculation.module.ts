import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalculationComponent } from './calculation.component';

import { ConverterPipe } from '@shared/index';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [CalculationComponent, ConverterPipe],
    exports: [CalculationComponent]
})

export class CalculationModule { }