import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './../../pages/home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('id');
    this.router.navigateByUrl('/user/login');
  }

}
