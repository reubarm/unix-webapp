import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography, Button, Card, CardContent } from '@mui/material';
import './test.css';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  background: `url(/bg.jpg) bottom no-repeat`,
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
          p: { md: 10 },
          color: 'grey.800'
        }}
      >
        <Typography gutterBottom variant="h3" sx={{ color: 'white!important', lineHeight: '1', marginBottom: '20px' }}>
          Join the Play to Earn Revolution
        </Typography>
        <Typography
          variant="body2"
          sx={{
            pb: { xs: 3, xl: 5 },
            maxWidth: 480,
            color: 'white!important',
            fontSize: '16px',
            lineHeight: '1.3'
          }}
        >
          Our mission is to be the biggest play to earn guild optimising its community owned assets for maximum utility.
        </Typography>
        <Button
          variant="contained"
          target="_blank"
          href="https://app.uniswap.org/#/swap?inputCurrency=0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8&outputCurrency=ETH"
          color="secondary"
          style={{ width: '200px', marginBottom: '15px', marginRight: '10px' }}
        >
          Available On Uniswap
        </Button>
        <Button
          variant="contained"
          href="https://yield.unixgaming.org"
          color="secondary"
          target="_blank"
          style={{ width: '200px', marginBottom: '15px', marginRight: '10px' }}
        >
          Staking Platform
        </Button>
      </CardContent>
    </RootStyle>
  );
}
