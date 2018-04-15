export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Your Classes'
  },
  {
    name: 'Classes',
    url: '/classes/list',
    icon: 'icon-grid'
  },
  {
    name: 'Add Class',
    url: '/classes/add',
    icon: 'icon-plus'
  },
  {
    title: true,
    name: 'Calendars'
  },
  {
    name: 'Calendar',
    url: '/custom/calendar',
    icon: 'icon-calendar'
  },
  {
    name: 'inbox',
    url: '/base',
    icon: 'icon-drawer',
    children: [
      {
        name: 'conflicts',
        url: '/base/cards',
        icon: 'icon-shield'
      },
      {
        name: 'requests',
        url: '/base/carousels',
        icon: 'icon-bubbles'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'people',
    url: '/buttons',
    icon: 'icon-people',
    children: [
      {
        name: 'following',
        url: '/buttons/buttons',
        icon: 'icon-user-following'
      },
      {
        name: 'suggestions',
        url: '/buttons/dropdowns',
        icon: 'icon-user-follow'
      },
      {
        name: 'Blocked',
        url: '/buttons/social-buttons',
        icon: 'icon-user-unfollow'
      }
    ]
  },
  {
    name: 'Analytics',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    
  
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  
  {
    name: 'View GitHub Project',
    url: 'https://github.com/BananiumLabs/CheeryClass/',
    icon: 'icon-social-github',
    class: 'mt-auto',
    variant: 'success'
  }
];
