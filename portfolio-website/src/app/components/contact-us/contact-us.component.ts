import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Client } from "@notionhq/client";
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {


  messageFromGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  // Initializing a client
  notion = new Client(
    {
      auth: environment.notion.token,
    }
  )

  async getUsers() {
    const listUsersResponse = await this.notion.databases.query({ database_id: environment.notion.db, filter: { property: "Email", rich_text: { contains: "T" } } })
    console.log(listUsersResponse)
  }

  submitMessage() {
    console.log(this.messageFromGroup)
  }

  constructor(
    private fb: FormBuilder,
    private http:HttpClient
  ) { }

  ngOnInit(): void {

  }

  submitForm() {
    const messageValues = this.messageFromGroup.value;
    const params = new HttpParams()
    .set('Email', messageValues.email)
    .set('Message', messageValues.message)

    this.http.post("https://script.google.com/macros/s/AKfycby_qMEte3Zsw20iwDP-ZMwoTZC99wnnS_SRo3EiWPFLyQ2ykcIuIUL6NMPZt6U62kRh/exec?Email=Danielrtwedsf&Message=asdfasdf", {})
      .subscribe({
        next: (resp) => { console.log(resp) },
        error:(err) => {console.log(err)}

      }
    )
  }
}
