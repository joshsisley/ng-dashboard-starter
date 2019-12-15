import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full', 
        redirectTo: '/dashboard/welcome',
        canActivate: [AuthGuard]
      },
      {
        path: 'welcome',
        loadChildren: () =>
          import('./modules/welcome/welcome.module').then(m => m.WelcomeModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(m => m.SettingsModule),
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
