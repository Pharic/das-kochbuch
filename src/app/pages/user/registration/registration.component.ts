import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  async onSubmit(ev: Event) {
    console.log('hier', ev);
    ev.preventDefault();
    const obs = await this.service.register();
    obs.subscribe(
      (res: any) => {
        console.log('subscribe', res);
        if (res.errors === undefined) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          this.router.navigateByUrl('/user/login');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
              console.log('du');
                this.toastr.error('Username is already taken', 'Registration failed.');
                break;

              default:
              this.toastr.error(element.description, 'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
