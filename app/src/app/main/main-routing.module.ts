import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../core/error/error.component';
import { AuthActivate } from '../guards/auth.active';
import { AddItemComponent } from './add-item/add-item.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'add',
    component: AddItemComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRouthing { }