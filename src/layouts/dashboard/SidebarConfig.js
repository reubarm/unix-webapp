import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  facebook: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  discord: getIcon('ic_mail'),
  telegram: getIcon('ic_chat'),
  instagram: getIcon('ic_blog'),
  twitter: getIcon('ic_calendar')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Unixverse',
    items: [
      { title: 'Dashboard', path: PATH_DASHBOARD.general.pageOne, icon: ICONS.dashboard },
      { title: 'Play to Earn', path: PATH_DASHBOARD.general.pageTwo, icon: ICONS.ecommerce },
      { title: 'Analytics', path: PATH_DASHBOARD.general.pageThree, icon: ICONS.analytics }
    ]
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'socials',
    items: [
      { title: 'Telegram', path: PATH_DASHBOARD.app.pageFour, icon: ICONS.telegram },
      { title: 'Discord', path: PATH_DASHBOARD.app.pageFive, icon: ICONS.discord },
      { title: 'Medium', path: PATH_DASHBOARD.app.pageSix, icon: ICONS.instagram },
      { title: 'Twitter', path: PATH_DASHBOARD.app.pageSeven, icon: ICONS.facebook }
    ]
  }
];

export default sidebarConfig;
