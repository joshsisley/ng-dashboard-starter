import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingsComponent } from './user-settings.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full', 
      redirectTo: '/dashboard/settings/user'
    },
    { path: 'user', component: UserSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }