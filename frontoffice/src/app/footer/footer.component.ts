import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../services/contact-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactInfo;
  constructor(private contactInfoService: ContactInfoService) { }

  ngOnInit() {
    this.contactInfoService.get()
      .subscribe(result => this.contactInfo = result);
  }

}
