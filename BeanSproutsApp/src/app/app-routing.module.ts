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
  },  {
    path: 'salenow-list',
    loadChildren: () => import('./salenow-list/salenow-list.module').then( m => m.SalenowListPageModule)
  },
  {
    path: 'salenow-add',
    loadChildren: () => import('./salenow-add/salenow-add.module').then( m => m.SalenowAddPageModule)
  },
  {
    path: 'get-money-list',
    loadChildren: () => import('./get-money-list/get-money-list.module').then( m => m.GetMoneyListPageModule)
  },
  {
    path: 'get-money-add',
    loadChildren: () => import('./get-money-add/get-money-add.module').then( m => m.GetMoneyAddPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
