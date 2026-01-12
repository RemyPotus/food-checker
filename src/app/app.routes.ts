import { Routes } from '@angular/router';
import { AlimentsComponent } from './aliments/aliments.component';

export const routes: Routes = [
  { path: 'aliments', component: AlimentsComponent },
  { path: '', redirectTo: '/aliments', pathMatch: 'full' },
  { path: '**', redirectTo: '/aliments' }
];
