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
    url: '/theme/colors',
    icon: 'icon-grid'
  },
  {
    name: 'Add Class',
    url: '/theme/typography',
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
        name: 'progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
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
        name: 'blocked',
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
