import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-list-search',
  templateUrl: './info-list-search.component.html',
  styleUrls: ['./info-list-search.component.css']
})
export class InfoListSearchComponent {
  @Input() listInfo: any;


}
