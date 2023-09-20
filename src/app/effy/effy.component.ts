import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-effy',
  templateUrl: './effy.component.html',
  styleUrls: ['./effy.component.css']
})

export class EffyComponent {
  totalCost: number = 0;
  effyHelp: number = 0;

  constructor(private _formBuilder: FormBuilder) { }

  firstFormGroup = this._formBuilder.group({
    genderFormControl: [''],
    firstNameFormControl: ['', Validators.required],
    lastNameFormControl: ['', Validators.required],
    emailFormControl: ['', Validators.required],
    phoneFormControl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    ownerFormControl: [''],
    nbOfPersonsFormControl: ['', Validators.required],
    revenuesFormControl: ['', Validators.required],
    surfaceFormControl: ['', Validators.required],
  });

  userData = {
    civility: 'Mr',
    lastName: '',
    firstName: '',
    email: '',
    phone: ''
  };

  projectData = {
    owner: "true",
    nbOfPersons: 1,
    revenues: 0,
    surface: 0
  }

  updateCost() {
    this.totalCost = this.projectData.surface * 80;
    this.effyHelp = (this.totalCost * 0.75) - (this.projectData.revenues / this.projectData.nbOfPersons) * 0.15;
  }
}