import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string;
  username: string | null;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.title = 'homepage';
    this.username = null;
    
  }

  ngOnInit(): void {
    this.loadUsername();
  }

  loadUsername(): void {
    this.username = this._activatedRoute.snapshot.paramMap.get('username');
  }
}
