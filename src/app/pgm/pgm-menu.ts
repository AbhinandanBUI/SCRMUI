import { NbMenuItem } from '@nebular/theme';

export const PGM_user_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'PGM USER',
    icon: 'keypad-outline',
    expanded:true,
    home: true,

    children: [
      {
        title: 'Dashboard',
        link: '/PGM/PGMUSER/Dashboard',
      },
      {
        title: 'Payment History',
        link: '/PGM/PGMUSER/PaymentHistory',
      },
      {
        title: 'Food',
        link: '/PGM/PGMUSER/Food',
      },
      {
        title: 'Logout',
        link: '/PGM/PGMUSER/Food',
      },
       
    ],

  },
];
export const PGM_services_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'PGM SERVICES',
    icon: 'keypad-outline',
    expanded:true,
    home: true,

    children: [
      {
        title: 'Dashboard',
        link: '/PGM/Services/Dashboard',
      },
      {
        title: 'Payment History',
        link: '/PGM/Services/PaymentHistory',
      },
      {
        title: 'Food',
        link: '/PGM/Services/Food',
      },
      {
        title: 'Logout',
        link: '/PGM/Services/Food',
      },
       
    ],

  },
];
export const PGM_owner_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'PGM SERVICES',
    icon: 'keypad-outline',
    expanded:true,
    home: true,

    children: [
      {
        title: 'Dashboard',
        link: '/PGM/OWNER/Dashboard',
      },
      {
        title: 'Payment History',
        link: '/PGM/OWNER/PaymentHistory',
      },
      {
        title: 'New Tenant',
        link: '/PGM/OWNER/NewTenant',
      },
      {
        title: 'Tenant List',
        link: '/PGM/OWNER/tenantList',
      },
      {
        title: 'Food',
        link: '/PGM/OWNER/PaymentHistory',
      },
      {
        title: 'Logout',
        link: '/PGM/OWNER/PaymentHistory',
      },
       
    ],

  },
];
