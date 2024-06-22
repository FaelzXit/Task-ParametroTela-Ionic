import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-confirmar/:dias/:tempo/:res',
    loadChildren: () => import('./tela-confirmar/tela-confirmar.module').then( m => m.TelaConfirmarPageModule)
  },
  {
    path: 'tela-proxima/:res',
    loadChildren: () => import('./tela-proxima/tela-proxima.module').then( m => m.TelaProximaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
