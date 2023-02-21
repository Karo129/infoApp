import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HealthComponent } from '../components/health/health.component';


@NgModule({
  declarations: [HealthComponent],
  imports: [
    CommonModule,
    HealthRoutingModule,
    SharedModule
  ]
})
export class HealthModule { }
