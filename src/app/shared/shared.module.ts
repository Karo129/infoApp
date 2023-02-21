import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentComponent } from './components/content/content.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { InfoListSearchComponent } from './components/info-list-search/info-list-search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { InfoListTechComponent } from './components/info-list-tech/info-list-tech.component';
import { InfoListFavComponent } from './components/info-list-fav/info-list-fav.component';
import { InfoListHealthComponent } from './components/info-list-health/info-list-health.component';
import { InfoListBusinessComponent } from './components/info-list-business/info-list-business.component';

@NgModule({
  declarations: [
    SideBarComponent,
    ContentComponent,
    InfoListComponent,
    InfoListSearchComponent,
    SpinnerComponent,
    ImgBrokenDirective,
    InfoListTechComponent,
    InfoListFavComponent,
    InfoListHealthComponent,
    InfoListBusinessComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [SideBarComponent, ContentComponent, InfoListComponent, InfoListSearchComponent, SpinnerComponent, ImgBrokenDirective, InfoListTechComponent, InfoListFavComponent, InfoListHealthComponent, InfoListBusinessComponent],
})
export class SharedModule {}
