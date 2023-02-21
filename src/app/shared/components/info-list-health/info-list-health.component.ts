import { Component, Input } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-info-list-health',
  templateUrl: './info-list-health.component.html',
  styleUrls: ['./info-list-health.component.css']
})
export class InfoListHealthComponent {
  @Input() title: string = ''
  info:any;

  constructor(private infoService: InfoService){
    
  }
  ngOnInit(): void {
    this.infoService.getInfoHealth().subscribe(date => {
      console.log(':))');
      this.info = date.articles;
    })
  }
}
