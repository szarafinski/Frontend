import { FormControl } from '@angular/forms';
import { WikiService } from './../wiki.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {


  request: String;
  name: String;
  description: String;
  nameUrl: String;
  term = new FormControl();

  constructor(private wikipediaService: WikiService) { }

  ngOnInit() {
    this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.wikipediaService.search(term))
      .subscribe(data => {
      this.request = data[0]
      this.name = data[1];
      this.description = data[2];
      this.nameUrl = data[3];
    });

  }

}
