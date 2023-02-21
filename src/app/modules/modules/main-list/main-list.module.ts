import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainListRoutingModule } from './main-list-routing.module';
import { MainListComponent } from '../components/main-list/main-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainListComponent],
  imports: [CommonModule, MainListRoutingModule, SharedModule],
})
export class MainListModule {}
