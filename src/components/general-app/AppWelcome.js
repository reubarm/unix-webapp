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
          Unix Official <span style={{ color: 'rgb(238 172 255)' }}>Launchpad</span> with
          <img
            src="https://uploads-ssl.webflow.com/620354aa22ac35cbb67066ea/620367abfb1e3a8dfa4f71a2_logo_with_word%201.png"
            height="35px"
            alt="Sandbox"
            style={{ display: 'inline', margin: '15px 0 0 0' }}
          />
        </Typography>
        <Typography
          variant="body2"
          sx={{
            pb: { xs: 3, xl: 5 },
            maxWidth: 520,
            color: 'white!important',
            fontSize: '16px',
            lineHeight: '1.3'
          }}
        >
          Enter for your chance to win a whitelist spot on the Karmaverse IGO before it goes live on public exchanges.
        </Typography>
        <Button
          variant="contained"
          target="_blank"
          href="https://www.unixgaming.games/"
          color="secondary"
          style={{ width: '200px', marginBottom: '15px', marginRight: '10px' }}
        >
          Whitelist Now
        </Button>
      </CardContent>

      <img
        className="test"
        src="https://uploads-ssl.webflow.com/620354aa22ac35cbb67066ea/620367ac5ea47b5791fc2c28_KarmaVerse%201.png"
        alt="unixgaming"
        style={{ margin: '30px', width: '100%', maxWidth: '350px' }}
      />
    </RootStyle>
  );
}
