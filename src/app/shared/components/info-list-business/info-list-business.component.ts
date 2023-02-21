import { Component, Input } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-info-list-business',
  templateUrl: './info-list-business.component.html',
  styleUrls: ['./info-list-business.component.css']
})
export class InfoListBusinessComponent {
  @Input() title: string = ''
  info:any;

  constructor(private infoService: InfoService){

  }
  ngOnInit(): void {
    this.infoService.getInfoBusiness().subscribe(date => {
      console.log(':))');
      this.info = date.articles;
    })
  }



}
