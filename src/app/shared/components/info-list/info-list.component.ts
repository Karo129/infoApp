import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit, OnDestroy{
  @Input() mode: 'small' | 'big' = 'small'
info:any;

constructor(private infoService: InfoService){}

ngOnInit(): void {
  this.infoService.getAllInfos$().subscribe(date => {
    console.log(':))');
    this.info = date.articles;
  })
}
ngOnDestroy(){}




  
}

