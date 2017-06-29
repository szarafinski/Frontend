import { AuthService } from 'app/admin/services/authentication-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


  constructor(private service: AuthService) { }

  ngOnInit() {
  }

}
