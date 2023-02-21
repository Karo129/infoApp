import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainListComponent } from '../components/main-list/main-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainListRoutingModule {}
