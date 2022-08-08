import { Injectable } from '@angular/core';
import { Student } from '../model/students';

@Injectable({
  providedIn: 'root',
})
export class GestionEtudiantService {
  private _students = [
    new Student(
      1,
      'Mamadou NiANG',
      'niangpapis96@gmail.com',
      '77 753 63 65',
      'Sicap Foire'
    ),
    new Student(
      2,
      'Cheikh Tall',
      'cheikhtall@gmail.com',
      '77 730 00 00',
      'Parcelles Assainies'
    ),
    new Student(
      3,
      'Papa Daouda Ndiaye',
      'padaouda@gmail.com',
      '77 770 01 02',
      'Grand Yoff'
    ),
    new Student(
      4,
      'Mohamed Banda Diagne',
      'bandadiagne96@gmail.com',
      '77 325 02 04',
      'Sicap Foire'
    ),
    new Student(
      5,
      'Karim Sow',
      'karim.sow96@gmail.com',
      '77 547 25 74',
      'Guediawaye'
    ),
  ];

  constructor() {}
  public get students() {
    return this._students;
  }
  public set students(value) {
    this._students = value;
  }
  public delete(student: Student): void {
    this._students = this._students.filter((s) => s !== student);
  }
  public add(student: Student): void {
    this._students.push(student);
  }
  public edit(student: Student): void {
    this._students = this._students.map((s) => (s === student ? student : s));
  }
}
