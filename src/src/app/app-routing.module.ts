import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
<<<<<<< HEAD
 
=======
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
>>>>>>> 87cf142ebc207e1a8a9d77935d30d90ed1d015a0

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
<<<<<<< HEAD
  // {
  //   path: 'ecom',
  //   loadChildren: () => import('./ecoms/ecoms.module')
  //     .then(m => m.EcomsModule),
  // },
 
  // {
  //   path: 'PGM',
  //   loadChildren: () => import('./pgm/pgm.module')
  //     .then(m => m.PGMModule),
  // },
=======
  {
    path: 'ecom',
    loadChildren: () => import('./ecoms/ecoms.module')
      .then(m => m.EcomsModule),
  },

  {
    path: 'PGM',
    loadChildren: () => import('./pgm/pgm.module')
      .then(m => m.PGMModule),
  },
>>>>>>> 87cf142ebc207e1a8a9d77935d30d90ed1d015a0
  {
    path: 'scrm',
    loadChildren: () => import('./srcm/srcm.module')
      .then(m => m.SrcmModule),
  },
<<<<<<< HEAD
  // {
  //   path: 'account',
  //   loadChildren: () => import('./srcm/account/account.module')
  //     .then(m => m.AccountModule),
  // },
//  {
//   path: 'account',
//   component: AccountComponent,
//   children: [
//     {
//       path: 'login',
//       component: LoginComponent,
//     },
//     {
//       path: 'registration',
//       component: RegistrationComponent,
//     },
//     {
//       path: '',
//       redirectTo: 'login',
//       pathMatch: 'full',
//     },
//     {
//       path: '**',
//       component: NotFoundComponent,
//     },
//   ],
//  },
=======


  {
    path: 'account',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
>>>>>>> 87cf142ebc207e1a8a9d77935d30d90ed1d015a0
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'scrm', pathMatch: 'full' },
  { path: '**', redirectTo: 'scrm' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
