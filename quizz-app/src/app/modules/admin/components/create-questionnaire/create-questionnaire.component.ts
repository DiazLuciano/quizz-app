import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.css']
})
export class CreateQuestionnaireComponent {

  public canContinue: boolean = false;
  @Output() firstForm = new EventEmitter<FormGroup>();

  public setFirstForm(form: FormGroup) {
    this.firstForm.emit(form);
  }

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  public saveData(): void {
    this.setFirstForm(this.form);
    this.canContinue = true;
  }
}
