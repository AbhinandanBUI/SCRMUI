import { NbMenuItem } from '@nebular/theme';

export const school_menu_List: NbMenuItem[] = [
  {
    title: 'School',
    icon: 'keypad-outline',
    expanded:true,
    home: true,

    children: [
      {
        title: 'Dashboard',
        link: '/scrm/school/Dashboard',
        icon: 'grid-outline',
      },
      {
        title: 'Teachers',
        link: '/scrm/school/teachers',
        icon: 'people-outline',
      },
      {
        title: 'Students',
        link: '/scrm/school/students',
      },
      {
        title: 'Logout',
        link: '/scrm/school/Dashboard',
      },
       
    ],

  },
];
export const school_Dashboard_Not_Active: NbMenuItem[] = [
  {
    title: 'School',
    icon: 'keypad-outline',
    expanded:true,
    home: true,

    children: [
      {
        title: 'Dashboard',
        link: 'NotActive',
        icon: 'grid-outline',
      },
      {
        title: 'Not active',
        link: 'NotActive',
        icon: 'grid-outline',
      },
    ],

  },
];
 
export const school_account: NbMenuItem[] = [
  {
    title: 'account',
    icon: 'keypad-outline',
    children: [
      {
        title: 'account',
        link: '/scrm/account/login',
        icon: 'grid-outline',
      },
     
       
    ],

  },
];
 