import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { UserComponent } from './../pages/user/user.component';
declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:3000';

  formModel = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.email],
    firstName: [''],
    lastName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    // passwordMismatch
    // confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value !== confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  register() {

    const uuidv4 = require('uuid/v4');
    uuidv4();

    const body = {
      uid: uuidv4,
      username: this.formModel.value.UserName,
      email: this.formModel.value.Email,
      firstName: this.formModel.value.FirstName,
      lastName: this.formModel.value.LastName,
      password: this.formModel.value.Passwords.Password
    };

    return this.http.post(this.BaseURI + '/user', body);
  }

  login(formData) {
    console.log(formData);
    return this.http.get(this.BaseURI + '/user?username=' + formData.username + '&password=' + formData.password, formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }
}
