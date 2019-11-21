import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', component: FileNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
