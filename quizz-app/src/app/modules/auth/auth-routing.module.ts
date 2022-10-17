import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: {
      title: 'Login',
      description: 'Put your credentials to enter as an admin'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
    data: {
      title: 'Register Form',
      description: 'Put your email, to recover your password'
    }
  },
  {
    path: 'recover',
    component: RecoverComponent,
    pathMatch: 'full',
    data: {
      title: 'Recover Password',
      description: 'Put your email, to recover your password'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
