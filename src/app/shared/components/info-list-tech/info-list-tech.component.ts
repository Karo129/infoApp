import { Component, Input } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-info-list-tech',
  templateUrl: './info-list-tech.component.html',
  styleUrls: ['./info-list-tech.component.css'],
})
export class InfoListTechComponent {
  @Input() title: string = '';
  info: any;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getInfoTech().subscribe((date) => {
      console.log(':))');
      this.info = date.articles;
    });
  }
}
