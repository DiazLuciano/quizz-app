import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { EmptyMsgComponent } from './empty-msg/empty-msg.component';
import { QuizzResultsComponent } from './quizz-results/quizz-results.component';
import { CounterComponent } from './counter/counter.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    SpinnerComponent,
    EmptyMsgComponent,
    QuizzResultsComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslocoModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    EmptyMsgComponent,
    CounterComponent
  ]
})
export class SharedModule { }
