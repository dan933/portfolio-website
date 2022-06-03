import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  messageFromGroup = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  submitMessage() {
    console.log(this.messageFromGroup)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }



}
