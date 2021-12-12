// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

function social(root) {
  return `${root}`;
}

const ROOTS_DASHBOARD = '';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageOne: path(ROOTS_DASHBOARD, '/unix'),
    pageTwo: path(ROOTS_DASHBOARD, '/launchpad'),
    pageThree: path(ROOTS_DASHBOARD, '/dao'),
    pageFour: path(ROOTS_DASHBOARD, '/roadmap'),
    pageFive: path(ROOTS_DASHBOARD, '/team'),
    Register: path(ROOTS_DASHBOARD, '/register'),
    LandingPage: path(ROOTS_DASHBOARD, '/landing'),
    BlogPost: path(ROOTS_DASHBOARD, '/blog'),
    BlogNewPost: path(ROOTS_DASHBOARD, '/add')
  },
  app: {
    pageFour: social('http://t.me/unix_token'),
    pageFive: social('http://discord.gg/unix'),
    pageSix: social('https://medium.com/@unixgaming'),
    pageSeven: social('https://twitter.com/unixplaytoearn')
  }
};
