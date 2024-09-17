import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginOublieComponent } from './login-oublie/login-oublie.component';

export const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'inscription', component: RegisterComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'oublie', component: LoginOublieComponent},
];
