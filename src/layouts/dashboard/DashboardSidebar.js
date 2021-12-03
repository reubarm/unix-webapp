import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Stack, Avatar, Drawer, Tooltip, Typography, CardActionArea } from '@mui/material';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import { MHidden } from '../../components/@material-extend';
import sidebarConfig from './SidebarConfig';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.complex
    })
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12]
}));

// ----------------------------------------------------------------------

IconCollapse.propTypes = {
  onToggleCollapse: PropTypes.func,
  collapseClick: PropTypes.bool
};

function IconCollapse({ onToggleCollapse, collapseClick }) {
  return (
    <Tooltip title="Mini Menu">
      <CardActionArea
        onClick={onToggleCollapse}
        sx={{
          width: 18,
          height: 18,
          display: 'flex',
          cursor: 'pointer',
          borderRadius: '50%',
          alignItems: 'center',
          color: 'text.primary',
          justifyContent: 'center',
          border: 'solid 1px currentColor',
          ...(collapseClick && {
            borderWidth: 2
          })
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'currentColor',
            transition: (theme) => theme.transitions.create('all'),
            ...(collapseClick && {
              width: 0,
              height: 0
            })
          }}
        />
      </CardActionArea>
    </Tooltip>
  );
}

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const { isCollapse, collapseClick, collapseHover, onToggleCollapse, onHoverEnter, onHoverLeave } =
    useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/unix?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true'
      )
      .then((res) => {
        setMoedas(res.data.market_data.current_price.usd);
        console.log(res.data.market_data.current_price.usd);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(moedas);
  const test = JSON.stringify(moedas);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <Stack
        spacing={3}
        sx={{
          px: 2.5,
          pt: 3,
          pb: 2,
          ...(isCollapse && {
            alignItems: 'center'
          })
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
            <img
              src="https://unixgaming.org/wp-content/uploads/2021/08/U-Unix_no-bg-300x169.png"
              alt="logo"
              width="150"
            />
          </Box>

          <MHidden width="lgDown">
            {!isCollapse && <IconCollapse onToggleCollapse={onToggleCollapse} collapseClick={collapseClick} />}
          </MHidden>
        </Stack>

        {isCollapse ? (
          <Avatar
            alt="My Avatar"
            src="https://unixgaming.org/wp-content/uploads/2021/10/new-unix-logo-sq_circle.png"
            sx={{ mx: 'auto', mb: 2 }}
          />
        ) : (
          <Link underline="none" component={RouterLink} to="#">
            <AccountStyle>
              <Avatar
                alt="My Avatar"
                src="https://unixgaming.org/wp-content/uploads/2021/10/new-unix-logo-sq_circle.png"
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                  <b>${test}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Current Price ($UniX)
                </Typography>
              </Box>
            </AccountStyle>
          </Link>
        )}
      </Stack>

      <NavSection />
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH
        },
        ...(collapseClick && {
          position: 'absolute'
        })
      }}
    >
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              ...(isCollapse && {
                width: COLLAPSE_WIDTH
              }),
              ...(collapseHover && {
                borderRight: 0,
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
                boxShadow: (theme) => theme.customShadows.z20,
                bgcolor: (theme) => alpha(theme.palette.background.default, 0.88)
              })
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
