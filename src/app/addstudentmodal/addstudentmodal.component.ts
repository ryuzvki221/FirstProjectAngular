import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addstudentmodal',
  templateUrl: './addstudentmodal.component.html',
  styleUrls: ['./addstudentmodal.component.css']
})
export class AddstudentmodalComponent implements OnInit {

  @Input() my_modal_title: any;
  @Input() my_modal_content: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }
}
