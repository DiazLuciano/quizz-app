import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';

/** Routing */
import { AppRoutingModule } from './app-routing.module';

/** Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

/** Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

/** Environment */
import { environment } from '../environments/environment.prod';

/** Firebase */
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CoreModule } from 'src/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { GlobalErrorHandlerService } from '../core/services/error/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Routing
    AppRoutingModule,

    // Shared, Core
    SharedModule,
    CoreModule,

    // Toastr
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
    }),

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [
    Meta,
    [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
