import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { UserComponent } from '../pages/user/user.component';
declare var require: any;
const uuidv4 = require('uuid/v4');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  readonly BaseURI = 'http://localhost:3000';

  formModel = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.email],
    firstName: [''],
    lastName: [''],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    // passwordMismatch
    // confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('password').value !== confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  register() {

    const uuid4 = uuidv4();


    const body = {
      uid: uuid4,
      username: this.formModel.value.username,
      email: this.formModel.value.email,
      firstName: this.formModel.value.firstName,
      lastName: this.formModel.value.lastName,
      password: this.formModel.value.passwords.password
    };
    console.log('body', body);

    return this.http.post(this.BaseURI + '/user', body);
  }

  login(formData) {
    console.log(formData);
    return this.http.get(this.BaseURI + '/user?username=' + formData.username + '&password=' + formData.password, formData);
  }

  logout(){
    localStorage.removeItem('id');
    this.router.navigateByUrl('/user/login');
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/recipes');
  }
}
