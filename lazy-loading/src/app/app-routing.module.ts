import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { GalerieComponent } from './galerie/galerie.component';

// const routes: Routes = [
//   {
//     path: 'galerie',
//     loadChildren: () => import('./galerie/galerie.module').then(m => m.GalerieModule)
//   },
//   {
//     path: 'contact',
//     loadChildren: () => import('./contact/contact-routing.module').then(m => m.ContactRoutingModule)
//   },
//   { path: '', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) }
// ];

const routes: Routes = [
  {
    path: 'galerie',
    component: GalerieComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '',
    component: AccueilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
