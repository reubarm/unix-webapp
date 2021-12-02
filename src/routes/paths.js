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
    pageTwo: social('https://unixplaytoearn.com'),
    pageThree: social('https://yield.unixgaming.org')
  },
  app: {
    pageFour: social('http://t.me/unix_token'),
    pageFive: social('http://discord.gg/unix'),
    pageSix: social('https://medium.com/@unixgaming'),
    pageSeven: social('https://twitter.com/unixplaytoearn')
  }
};
