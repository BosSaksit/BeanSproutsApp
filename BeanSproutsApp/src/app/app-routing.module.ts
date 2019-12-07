import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'return-product-list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'return-product-list',
    loadChildren: () => import('./return-product-list/return-product-list.module').then( m => m.ReturnProductListPageModule)
  },
  {
    path: 'return-product-add',
    loadChildren: () => import('./return-product-add/return-product-add.module').then( m => m.ReturnProductAddPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
