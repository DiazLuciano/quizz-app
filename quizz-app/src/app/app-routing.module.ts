import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from '../core/auth/guards/auth.guard';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Quizz Game',
      description: 'This is the home page, to start a quizz game'
    }
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'admin',
    component: DashboardComponent,
    loadChildren: () => import('./modules/admin/admin.module').then( m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'play',
    loadChildren: () => import('./modules/play/play.module').then((m) => m.PlayModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
