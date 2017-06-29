import { FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
  searchControl: FormControl;

  @Output() dataEmiter: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.debounceTime(200)
                 .distinctUntilChanged().subscribe(
      searchString => {
        this.dataEmiter.emit(searchString);
        console.log('emituje: ' + searchString);
      }
    );
  }

   clear() {
    this.searchControl.setValue('');
  }
}
