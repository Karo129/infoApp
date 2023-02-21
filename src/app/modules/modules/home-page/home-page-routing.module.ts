import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main-list',
    loadChildren: ()=> import('../main-list/main-list.module').then(m=>m.MainListModule)
  },
  {
    path: 'fav',
    loadChildren: ()=> import('../fav/fav.module').then(m=>m.FavModule)
  },
  {
    path: 'history',
    loadChildren: ()=> import('../history/history.module').then(m=>m.HistoryModule)
  },
  {
    path: 'tech',
    loadChildren: ()=> import('../tech/tech.module').then(m=>m.TechModule)
  },
  {
    path: 'health',
    loadChildren: ()=> import('../health/health.module').then(m=>m.HealthModule)
  },
  {
    path: 'business',
    loadChildren: ()=> import('../business/business.module').then(m=>m.BusinessModule)
  },
  {
    path: '**',
    redirectTo: '/main-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
