import PropTypes from 'prop-types';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Button } from '@mui/material';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// components
import { MHidden } from '../../components/@material-extend';
import '../../components/general-app/test.css';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)', // Fix on Mobile
  backgroundColor: 'rgba(33, 43, 54, 0.3)',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const { isCollapse } = useCollapseDrawer();

  return (
    <RootStyle
      sx={{
        ...(isCollapse && {
          width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
        })
      }}
    >
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        <Box component={RouterLink} to="/" sx={{ margin: '0 auto' }}>
          {!isCollapse && <img src="/logo.png" alt="logo" width="150" className="show-mb" />}
        </Box>

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={{ xs: 0.5, sm: 1.5 }}>
          <a
            href="http://t.me/unix_token"
            style={{ color: 'white', textTransform: 'none', textDecoration: 'none' }}
            className="hide-mb"
          >
            Join our Telegram
          </a>
          &nbsp;&nbsp;&nbsp;
          <Button variant="contained" href="/litepaper.pdf" target="_blank">
            Litepaper
          </Button>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
