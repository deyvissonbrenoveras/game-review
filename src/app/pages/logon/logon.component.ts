import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'gr-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css'],
})
export class LogonComponent implements OnInit {
  logonForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.logonForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  onSubmit(): void {
    this.logonForm.markAllAsTouched();
    if (this.logonForm.valid) {
      this.router.navigate(['/']);
    }
  }
}
