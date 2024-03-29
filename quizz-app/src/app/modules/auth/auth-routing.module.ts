import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: {
      title: 'Login',
      description: 'Sign in as an admin to create quizzes'
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
    },
  },
  {
    path: 'verify',
    component: VerifyComponent,
    pathMatch: 'full',
    data: {
      title: 'Verify Email',
      description: 'Put your email, to recover your password'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
