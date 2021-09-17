import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bio-form',
  templateUrl: './bio-form.component.html',
  styleUrls: ['./bio-form.component.css']
})
export class BioFormComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    employed: new FormControl(''),
    languages: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  nameIsInvalid () {
    return this.formGroup.controls.name.invalid && this.formGroup.controls.name.dirty;
  }

  handleSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

}
