import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => loadRemoteModule({
  //     type: 'module',
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     exposedModule: './ProductsModule'
  //   }).then((m) => m.ProductsModule)
  //   .catch(err => console.error('Error loading remote products module', err))
  // }

  {
    path: 'home',
    loadChildren: () => 
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
