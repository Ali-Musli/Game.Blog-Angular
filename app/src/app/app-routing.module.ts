import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AddItemComponent } from './main/add-item/add-item.component';
import { CatalogComponent } from './main/catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'catalog',
  //   component: CatalogComponent
  // },
  // {
  //   path: 'add',
  //   component: AddItemComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
