import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  img: string;
  constructor() {
    this.email = '';
    this.password = '';
    this.img = './../assets/test_img.gif';
  }

  login() {
    return this.email === null && this.password === null
      ? alert(`${this.email} ${this.password}`)
      : alert('login or password is incorrect');
  }

  ngOnInit(): void {}
}
