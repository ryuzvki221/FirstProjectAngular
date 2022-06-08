import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  img: string;
  validated: boolean;
  constructor(private _router: Router) {
    this.email = '';
    this.password = '';
    this.img = './../assets/test_img.gif';
    this.validated = false;
  }
  ngOnInit(): void {}
  login(): void {
    if (this.email === 'ryuzvki@outlook.com' && this.password === '123456') {
      this.validated = true;
      this._router.navigate(['/home', this.email]);
    } else {
      this.validated = false;
      alert('login or password is incorrect');
    }
  }
}
