import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { RecoverComponent } from './components/recover/recover.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';
import { TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [
    LoginComponent,
    RecoverComponent,
    RegisterComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    TranslocoModule
  ]
})
export class AuthModule { }
