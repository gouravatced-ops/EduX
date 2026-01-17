import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent   // 👈 ROOT PAGE
  },
  {
    path: 'users',
    component: UsersComponent
  }
];
