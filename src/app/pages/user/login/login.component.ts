import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { getHtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    username: '',
    password: ''
  };
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home');
    }
  }


  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        if (Array.isArray(res) && res.length === 1) {
          // LOGIN FUNKTIONIERT
          localStorage.setItem('token', res['token']);
          this.router.navigateByUrl('/home');
        } else {
          // LOGIN SCHLÄGT FEHL
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
      },
      err => {
        // SERVER-FEHLER
        if (err.status === 400) {
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        } else {
          console.log(err);
        }
      }
    );
  }
}
