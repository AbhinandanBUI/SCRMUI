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



export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
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

  {
    path: 'scrm',
    loadChildren: () => import('./srcm/srcm.module')
      .then(m => m.SrcmModule),
  },
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
