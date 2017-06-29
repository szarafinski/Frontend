import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  details = 'Sending Message...';
  sending: boolean = false;
  message = '';
  constructor(private router: Router) { }

  send() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.message = '';
    }, 1000);
  }
  cancel() {
    this.router.navigate(["/about"])
  }

}
