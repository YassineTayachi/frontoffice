import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../services/contact-info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat: number = 37.270172;
  lng: number = 9.872143;
  contactInfo;
  constructor(private contactInfoService: ContactInfoService) { }

  ngOnInit(): void {
    this.contactInfoService.get()
      .subscribe(result => this.contactInfo = result);
  }



}
