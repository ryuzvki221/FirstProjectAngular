import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/students';
import { GestionEtudiantService } from '../services/gestion-etudiant.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddstudentmodalComponent } from '../addstudentmodal/addstudentmodal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string;
  username: string | null;
  students: Array<Student> = [];
  closeResult: string;

  constructor(
    private _gestionEtudiantService: GestionEtudiantService,
    private _router: Router,
    private modalService: NgbModal
  ) {
    this.title = 'homepage';
    this.username = null;
    this.students = this._gestionEtudiantService.students;
    this.closeResult = '';
  }

  ngOnInit(): void {
    this.loadUsername();
  }

  loadUsername(): void {
    if (sessionStorage.getItem('email') !== null) {
      this.username = sessionStorage.getItem('email');
    } else {
      this._router.navigate(['/login']);
    }

    // this.username = this._activatedRoute.snapshot.paramMap.get('username');
  }

  editStudent(student: Student): void {
    this.students = this.students.map((s) => (s === student ? student : s));
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter((s) => s !== student);
  }

  open() {
    const modalRef = this.modalService.open(AddstudentmodalComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
}
