import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
public name = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
