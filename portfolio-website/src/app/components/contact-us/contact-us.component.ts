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

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
