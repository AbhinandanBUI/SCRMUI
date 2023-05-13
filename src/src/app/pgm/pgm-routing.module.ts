import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { PGMComponent } from './pgm.component';
 

const routes: Routes = [{
  path: '',
  component: PGMComponent,
  children: [
     {
      path: 'PG',
      loadChildren: () => import('./websites/websites.module')
        .then(m => m.WebsitesModule),
    },
    {
      path: 'PGMUSER',
      loadChildren: () => import('./pgmuser/pgmuser.module')
        .then(m => m.PGMUserModule),
    },
    {
      path: 'OWNER',
      loadChildren: () => import('./pgmowner/pgmowner.module')
        .then(m => m.PGMOwnerModule),
    },
    {
      path: 'Services',
      loadChildren: () => import('./pgmservices/pgmservices.module')
        .then(m => m.PGMServicesModule),
    },
    {
      path: '',
      redirectTo: 'PG',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PGMRoutingModule { }
