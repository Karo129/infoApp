import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from '../components/tech/tech.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TechComponent],
  imports: [
    CommonModule,
    TechRoutingModule,
    SharedModule
  ]
})
export class TechModule { }
