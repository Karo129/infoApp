import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InfoService } from 'src/app/shared/services/info.service';
import { SearchService } from '../../history/services/search.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  searchedInfo$: Observable<any> = of([]);

  listInfo: any[] = [];
  loading = false;

  constructor(private infoService: InfoService) {}

  searchInfo(param: any) {
    this.listInfo = [];
    this.loading = true;

    setTimeout(() => {
      this.infoService.getInfo(param).subscribe(
        (date) => {
          this.loading = false;
          this.listInfo = date.articles;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }, 1000);
  }
}
