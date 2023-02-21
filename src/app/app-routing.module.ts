import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/modules/components/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/modules/home-page/home-page.module`).then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
