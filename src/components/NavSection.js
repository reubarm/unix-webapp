import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListSubheader, ListItemButton } from '@mui/material';

import SvgIconStyle from './SvgIconStyle';
// ----------------------------------------------------------------------

const ListSubheaderStyle = styled((props) => <ListSubheader disableSticky disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.overline,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    color: theme.palette.text.primary
  })
);

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  '&:before': {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: 'none',
    position: 'absolute',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main
  }
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  isShow: PropTypes.bool,
  item: PropTypes.object
};

function NavItem({ item, isShow }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const { title, path, icon, info, children } = item;
  const isActiveRoot = path ? !!matchPath({ path, end: false }, pathname) : false;

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen(!open);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' }
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium'
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle)
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>

          <>
            <ListItemText disableTypography primary={title} />
            {info && info}
            <Box
              component={Icon}
              icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
              sx={{ width: 16, height: 16, ml: 1 }}
            />
          </>
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemStyle>
              <ListItemIconStyle>
                <Box
                  component="span"
                  sx={{
                    width: 4,
                    height: 4,
                    display: 'flex',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'text.disabled',
                    transition: (theme) => theme.transitions.create('transform')
                    // ...(isActiveSub && {
                    //   transform: 'scale(2)',
                    //   bgcolor: 'primary.main'
                    // })
                  }}
                />
              </ListItemIconStyle>
              <ListItemText disableTypography primary="rimary" />
            </ListItemStyle>
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle)
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      {isShow && (
        <>
          <ListItemText disableTypography primary={title} />
          {info && info}
        </>
      )}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  isShow: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function NavSection({ navConfig, isShow = true, ...other }) {
  return (
    // <Box {...other}>
    //   {navConfig.map((list) => {
    //     const { subheader, items }i = list;
    //     return (
    //       <List key={subheader} disablePadding>
    //         {isShow && <ListSubheaderStyle>{subheader}</ListSubheaderStyle>}
    //         {items.map((item) => (
    //           <NavItem key={item.title} item={item} isShow={isShow} />
    //         ))}
    //       </List>
    //     );
    //   })}
    // </Box>

    <Box>
      <List disablePadding>
        <a href="/" style={{ textDecoration: 'none' }}>
          <ListItemStyle>
            <ListItemIconStyle>
              <SvgIconStyle src="/static/icons/navbar/ic_dashboard.svg" sx={{ width: '100%', height: '100%' }} />
            </ListItemIconStyle>
            <ListItemText disableTypography primary="Dashboard" />
            <Box component={Icon} sx={{ width: 16, height: 16, ml: 1 }} />
          </ListItemStyle>
        </a>
        <a href="http://yield.unixgaming.org/" style={{ textDecoration: 'none' }}>
          <ListItemStyle>
            <ListItemIconStyle>
              <SvgIconStyle src="/static/icons/navbar/ic_ecommerce.svg" sx={{ width: '100%', height: '100%' }} />
            </ListItemIconStyle>
            <ListItemText disableTypography primary="Staking" />
            <Box component={Icon} sx={{ width: 16, height: 16, ml: 1 }} />
          </ListItemStyle>
        </a>
        <a href="/launchpad" style={{ textDecoration: 'none' }}>
          <ListItemStyle>
            <ListItemIconStyle>
              <SvgIconStyle src="/static/icons/navbar/ic_analytics.svg" sx={{ width: '100%', height: '100%' }} />
            </ListItemIconStyle>
            <ListItemText disableTypography primary="Launchpad" />
            <Box component={Icon} sx={{ width: 16, height: 16, ml: 1 }} />
          </ListItemStyle>
        </a>
        <a href="/dao" style={{ textDecoration: 'none' }}>
          <ListItemStyle>
            <ListItemIconStyle>
              <SvgIconStyle src="/static/icons/navbar/ic_blog.svg" sx={{ width: '100%', height: '100%' }} />
            </ListItemIconStyle>
            <ListItemText disableTypography primary="DAO" />
            <Box component={Icon} sx={{ width: 16, height: 16, ml: 1 }} />
          </ListItemStyle>
        </a>
        <a href="/roadmap" style={{ textDecoration: 'none' }}>
          <ListItemStyle>
            <ListItemIconStyle>
              <SvgIconStyle src="/static/icons/navbar/ic_calendar.svg" sx={{ width: '100%', height: '100%' }} />
            </ListItemIconStyle>
            <ListItemText disableTypography primary="Roadmap" />
            <Box component={Icon} sx={{ width: 16, height: 16, ml: 1 }} />
          </ListItemStyle>
        </a>
      </List>
    </Box>
  );
}
