import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentmodalComponent } from './addstudentmodal.component';

describe('AddstudentmodalComponent', () => {
  let component: AddstudentmodalComponent;
  let fixture: ComponentFixture<AddstudentmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstudentmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstudentmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
