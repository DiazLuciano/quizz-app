import { NgModule } from "@angular/core";
import { AuthModule } from '../app/modules/auth/auth.module';
import { SharedModule } from '../app/shared/shared.module';

@NgModule ({
  imports: [
    AuthModule,
    SharedModule
  ],
  exports: [
    AuthModule
  ],
})
export class CoreModule {

}
