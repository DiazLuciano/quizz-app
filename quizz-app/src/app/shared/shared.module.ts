import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { EmptyMsgComponent } from './empty-msg/empty-msg.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    EmptyMsgComponent,
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
