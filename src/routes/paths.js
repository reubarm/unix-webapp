// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

function social(root) {
  return `${root}`;
}

const ROOTS_DASHBOARD = '/unix';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageTwo: path(ROOTS_DASHBOARD, '/launchpad'),
    pageThree: path(ROOTS_DASHBOARD, '/dao'),
    pageFour: path(ROOTS_DASHBOARD, '/roadmap'),
    pageFive: path(ROOTS_DASHBOARD, '/team'),
    Register: path(ROOTS_DASHBOARD, '/register'),
    LandingPage: path(ROOTS_DASHBOARD, '/landing'),
    BlogPosts: path(ROOTS_DASHBOARD, '/blog'),
    BlogPost: path(ROOTS_DASHBOARD, '/unix-launch'),
    BlogPost1: path(ROOTS_DASHBOARD, '/top-5-games'),
    BlogPost2: path(ROOTS_DASHBOARD, '/metaverse-crypto'),
    BlogPost3: path(ROOTS_DASHBOARD, '/metaverse-gaming'),
    BlogPost4: path(ROOTS_DASHBOARD, '/crypto-gaming'),
    BlogPost5: path(ROOTS_DASHBOARD, '/is-crypto-gaming-the-future'),
    BlogPost6: path(ROOTS_DASHBOARD, '/dehorizon-partnership'),
    BlogPost7: path(ROOTS_DASHBOARD, '/slp-donation'),
    BlogPost8: path(ROOTS_DASHBOARD, '/thetan-arena'),
    BlogPost9: path(ROOTS_DASHBOARD, '/alliance-coalition'),
    BlogPost10: path(ROOTS_DASHBOARD, '/how-crypto-works'),
    BlogPost11: path(ROOTS_DASHBOARD, '/polygon-crypto-gaming'),
    BlogPost12: path(ROOTS_DASHBOARD, '/how-launchpads-work'),
    BlogPost13: path(ROOTS_DASHBOARD, '/top-5-upcoming-games-of-2022'),
    BlogPost14: path(ROOTS_DASHBOARD, '/treasury-update'),
    BlogPost15: path(ROOTS_DASHBOARD, '/cex-listing'),
    BlogPost16: path(ROOTS_DASHBOARD, '/sandbox-partnership'),
    BlogPost17: path(ROOTS_DASHBOARD, '/monkeyball-partnership'),
    AddGame: path(ROOTS_DASHBOARD, '/add-game'),
    Slug: path(ROOTS_DASHBOARD, '/axie-infinity')
  },
  app: {
    pageFour: social('http://t.me/unix_token'),
    pageFive: social('http://discord.gg/unix'),
    pageSix: social('https://medium.com/@unixgaming'),
    pageSeven: social('https://twitter.com/unixplaytoearn')
  }
};
