import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
