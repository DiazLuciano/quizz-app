import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { EmptyMsgComponent } from './empty-msg/empty-msg.component';
import { QuizzResultsComponent } from './quizz-results/quizz-results.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    EmptyMsgComponent,
    QuizzResultsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    EmptyMsgComponent,
  ]
})
export class SharedModule { }
