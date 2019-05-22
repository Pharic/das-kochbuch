import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { UserComponent } from '../pages/user/user.component';
import { Http } from '@angular/http';
declare var require: any;
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
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

  async register(): Promise<Observable<any>> {

    const uuid4 = uuidv4();


    const body = {
      uid: uuid4,
      username: this.formModel.value.username,
      email: this.formModel.value.email,
      firstName: this.formModel.value.firstName,
      lastName: this.formModel.value.lastName,
      password: this.formModel.value.passwords.password
    };
    const usernameAvailable = await this.checkUsernameNotTaken(body);
    if (usernameAvailable) {
      return this.http.post(this.BaseURI + '/user', body);
    }
    const response = {
      errors: [
        {code: 'DuplicateUserName'}
      ]
    };
    return of(response);
  }

  login(formData) {
    return this.http.get(this.BaseURI + '/user?username=' + formData.username + '&password=' + formData.password, formData);
  }

  logout() {
    localStorage.removeItem('id');
    this.router.navigateByUrl('/user/login');
  }

  checkUsernameNotTaken(formData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get( this.BaseURI + '/user?username=' + formData.username)
        .subscribe((res: Object[]) => {
          if (res.length === 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }
}
