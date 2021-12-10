import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, TextField } from '@mui/material';
// routes
import axios from 'axios';
import { PATH_DASHBOARD } from '../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../components/animate';
import '../components/general-app/test.css';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('xl')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 600,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh'
  }
}));

// ----------------------------------------------------------------------

const Form = () => {
  const [name, setName] = useState('asdf');
  const [email, setEmail] = useState('asdf');
  const [telegram, setTelegram] = useState('asdf');

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Id: 10,
      Name: name,
      Email: email,
      Telegram: telegram
    };

    // Add one line to the sheet
    fetch('https://sheet.best/api/sheets/cc16e098-02c1-4d1a-8e47-4cf83d6cacd0', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
        setSuccess(true);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  return (
    <form className="form">
      <Stack
        component={motion.div}
        variants={varFadeInRight}
        direction="row"
        spacing={1}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <TextField
          label="Name"
          id="outlined-size-normal"
          onChange={(e) => setName(e.target.value)}
          className="mobile"
        />
        <TextField
          label="Email"
          id="outlined-size-normal"
          onChange={(e) => setEmail(e.target.value)}
          className="mobile"
        />
        <TextField
          label="Telegram"
          id="outlined-size-normal"
          onChange={(e) => setTelegram(e.target.value)}
          className="mobile"
        />
      </Stack>
      <br />

      <motion.div variants={varFadeInRight}>
        <Button
          size="large"
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          startIcon={<Icon icon={flashFill} width={20} height={20} />}
        >
          Register to Win
        </Button>
      </motion.div>

      {success && (
        <h1>
          <br />
          Thank you for registering!
        </h1>
      )}
    </form>
  );
};

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} />

        <HeroImgStyle
          alt="hero"
          src="https://miro.medium.com/max/1400/1*6A_cOfu7NqZZl16RJxEwSw.png"
          variants={varFadeInUp}
          className="hide-mb"
        />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Register to win todays
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;Airdrop
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>
                Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod
                ligula urna in dolor. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </Typography>
            </motion.div>

            <Form />
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
