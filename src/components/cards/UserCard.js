import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Grid, Avatar, Tooltip, Divider, Typography, IconButton } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
//
import SvgIconStyle from '../SvgIconStyle';

// ----------------------------------------------------------------------

const SOCIALS = [
  // {
  //   name: 'Facebook',
  //   icon: <Icon icon={facebookFill} width={20} height={20} color="#1877F2" />
  // },
  // {
  //   name: 'Instagram',
  //   icon: <Icon icon={instagramFilled} width={20} height={20} color="#D7336D" />
  // },
  {
    name: 'Linkedin',
    icon: <Icon icon={linkedinFill} width={20} height={20} color="#006097" />
  },
  {
    name: 'Twitter',
    icon: <Icon icon={twitterFill} width={20} height={20} color="#1C9CEA" />
  }
];

const TEAMS = [
  {
    name: 'Mirko Basil',
    position: 'CEO'
  },
  {
    name: 'Nick Tieu',
    position: 'COO'
  },
  {
    name: 'Erik Mayer',
    position: 'Co-Founder'
  },
  {
    name: 'Sindy Tang',
    position: 'CFO'
  },
  {
    name: 'Joe Moore',
    position: 'Co-Founder and Head of Education'
  },
  {
    name: 'Andrew Thomas',
    position: 'Head of Commercial Partnerships'
  },
  {
    name: 'Anri Davids',
    position: 'Head of Marketing'
  },
  {
    name: 'Conor Noone',
    position: 'Head of Partnerships & Sales'
  },
  {
    name: 'Reuben Armstrong',
    position: 'Head of Engineering'
  }
];

const CardMediaStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  paddingTop: 'calc(100% * 9 / 30)',
  '&:before': {
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)', // Fix on Mobile
    borderTopLeftRadius: theme.shape.borderRadiusMd,
    borderTopRightRadius: theme.shape.borderRadiusMd,
    backgroundColor: alpha(theme.palette.primary.darker, 0.72)
  }
}));

const CoverImgStyle = styled('img')({
  top: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

function InfoItem(number) {
  return (
    <Grid item xs={4}>
      <Typography variant="caption" sx={{ mb: 0.5, color: 'text.secondary', display: 'block' }}>
        Follower
      </Typography>
      {/* <Typography variant="subtitle1">{fShortenNumber(number)}</Typography> */}
    </Grid>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default function UserCard() {
  // const { name, cover, position, follower, totalPost, avatarUrl, following } = user;

  return (
    <>
      {TEAMS.map((team) => (
        <Grid item xs={12} sm={6} md={4}>
          <>
            <Card>
              <CardMediaStyle>
                <SvgIconStyle
                  color="paper"
                  src="/static/icons/shape-avatar.svg"
                  sx={{
                    width: 144,
                    height: 62,
                    zIndex: 10,
                    bottom: -26,
                    position: 'absolute'
                  }}
                />
                <Avatar
                  src="asdf"
                  sx={{
                    width: 64,
                    height: 64,
                    zIndex: 11,
                    position: 'absolute',
                    transform: 'translateY(-50%)'
                  }}
                />
                <CoverImgStyle alt="cover" src="asdf" />
              </CardMediaStyle>
              <Typography variant="subtitle1" align="center" sx={{ mt: 6 }}>
                {team.name}
              </Typography>
              <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
                {team.position}
              </Typography>
              <Box sx={{ textAlign: 'center', mt: 2, mb: 2.5 }}>
                {SOCIALS.map((social) => (
                  <Tooltip key={social.name} title={social.name}>
                    <IconButton>{social.icon}</IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Card>
          </>
        </Grid>
      ))}
    </>
  );
}
