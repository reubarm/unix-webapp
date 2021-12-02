import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography, Button, Card, CardContent } from '@mui/material';
import { SeoIllustration } from '../../assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  background: `url(/background.png) bottom no-repeat`,
  backgroundSize: 'cover',
  minHeight: '300px',
  color: 'white!important',
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

// ----------------------------------------------------------------------

AppWelcome.propTypes = {
  displayName: PropTypes.string
};

export default function AppWelcome({ displayName }) {
  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: 'grey.800'
        }}
      >
        <Typography gutterBottom variant="h3" sx={{ color: 'white!important' }}>
          Join the Play to Earn Revolution
        </Typography>
        <Typography
          variant="body2"
          sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto', color: 'white!important', fontSize: '16px' }}
        >
          Our mission is to be the biggest play to earn guild optimising its community owned assets for maximum utility.
        </Typography>
        <Button
          variant="contained"
          target="_blank"
          href="https://app.uniswap.org/#/swap?inputCurrency=0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8&outputCurrency=ETH"
          color="secondary"
        >
          Buy on Uniswap
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" href="https://yield.unixgaming.org" color="primary" target="_blank">
          Staking Platform
        </Button>
      </CardContent>

      <img
        src="https://unixgaming.org/wp-content/uploads/2021/10/new-unix-logo-sq_circle.png"
        alt="unixgaming"
        width="250"
        style={{ margin: '30px' }}
      />
    </RootStyle>
  );
}
