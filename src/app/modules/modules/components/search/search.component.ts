import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() chosenParam = new EventEmitter<any>();

  chosenCategory = 'general';
  chosenCountry = 'pl';

  category: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'health', name: 'Health' },
    { value: 'technology', name: 'Technology' },
  ];

  country: any[] = [
    { value: 'pl', name: 'Poland' },
    { value: 'us', name: 'United States' },
    { value: 'ru', name: 'Russia' },
    { value: 'fr', name: 'France' },
    { value: 'it', name: 'Italy' },
  ];

  searchInfo() {
    const PARAM = {
      category: this.chosenCategory,
      country: this.chosenCountry,
    };
    this.chosenParam.emit(PARAM);
  }
}
