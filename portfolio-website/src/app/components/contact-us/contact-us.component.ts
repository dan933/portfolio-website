import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  messageFromGroup = new FormGroup({
    email:new FormControl(''),
    message: new FormControl('')
  });

  submitMessage() {
    console.log(this.messageFromGroup.value)
  }

  constructor() { }

  ngOnInit(): void {

  }



}
