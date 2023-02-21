import { Component, Input } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-info-list-fav',
  templateUrl: './info-list-fav.component.html',
  styleUrls: ['./info-list-fav.component.css']
})
export class InfoListFavComponent {
  @Input() title: string = ''
  info:any;

  constructor(private infoService: InfoService){
    
  }
  ngOnInit(): void {
    this.infoService.getInfoFav().subscribe(date => {
      console.log(':))');
      this.info = date.articles;
    })
  }

}
