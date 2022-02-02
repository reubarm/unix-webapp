import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { CardContent, Box, Card, Typography, Button, Stack, TextField } from '@mui/material';
// utils
import mockData from '../../utils/mock-data';
//
import { varFadeInRight, MotionContainer } from '../animate';
import { CarouselControlsPaging1, CarouselControlsArrowsBasic1 } from '../carousel';
// import Ticker from './Ticker';
// import Chart from './Chart';
import './test.css';

// ----------------------------------------------------------------------

const TITLES = ['These exchanges coming soon', 'UniX Axie Infinity Cup', 'Over 4000 UniX Holders'];

const MOCK_APPS = [...Array(3)].map((_, index) => ({
  id: mockData.id(index),
  title: TITLES[index],
  description: mockData.text.title(index),
  image: mockData.image.feed(index)
}));

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

const RootStyle2 = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  background: `url(/background2.jpg) bottom no-repeat`,
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

const RootStyle3 = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary,
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

CarouselItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool
};

const Form = () => {
  const [email, setEmail] = useState('');
  // const [wallet, setWallet] = useState('');

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Id: 10,
      Email: email
      // Wallet: wallet
    };

    // Add one line to the sheet
    fetch('https://sheet.best/api/sheets/6ec5ae71-0c6d-4fc0-af7d-c3bcdfbb7637', {
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
        // window.location.href = 'https://docs.google.com/forms/d/10KsyMWBGYv46sLcquphsRX13qoODGIqvob4icf7VkSY/edit';
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
        spacing={1}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        className="heroButton"
      >
        {!success && (
          <>
            <TextField
              label="Email"
              id="outlined-size-normal"
              sx={{ background: '#212B36', minWidth: '300px', height: '100%' }}
              onChange={(e) => setEmail(e.target.value)}
              className="mobile"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button size="large" variant="contained" type="submit" onClick={handleSubmit}>
              Register
            </Button>
          </>
        )}
      </Stack>

      {success && <h1 style={{ color: 'white' }}>Thank you for registering!</h1>}
    </form>
  );
};

function CarouselItem({ item, isActive }) {
  const { image, title, description } = item;

  return (
    <RouterLink to="#">
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            top: 0,
            width: 1,
            height: 1,
            position: 'absolute',
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
          }}
        />
        <CardContent
          sx={{
            bottom: 0,
            width: 1,
            textAlign: 'left',
            position: 'absolute',
            color: 'common.white'
          }}
        >
          <MotionContainer open={isActive}>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="overline"
                sx={{
                  mb: 1,
                  opacity: 0.48,
                  display: 'block'
                }}
              >
                Featured News
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h5" gutterBottom noWrap>
                {title}
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography variant="body2" noWrap>
                {description}
              </Typography>
            </motion.div>
          </MotionContainer>
        </CardContent>
      </Box>
    </RouterLink>
  );
}

export default function AppSlider() {
  const theme = useTheme();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? MOCK_APPS.length - 1 : 0);

  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next),
    ...CarouselControlsPaging1({
      color: 'primary.main',
      sx: {
        top: theme.spacing(3),
        left: theme.spacing(3),
        bottom: 'auto',
        right: 'auto'
      }
    })
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Slider ref={carouselRef} {...settings}>
      <RootStyle>
        <CardContent
          sx={{
            p: { md: 10 },
            color: 'grey.800'
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            sx={{ color: 'white!important', lineHeight: '1', marginBottom: '20px' }}
          >
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
            Our mission is to be the biggest play to earn guild optimising its community owned assets for maximum
            utility.
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
      <RootStyle2>
        <CardContent
          sx={{
            p: { md: 10 },
            color: 'grey.800'
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            sx={{ color: 'white!important', lineHeight: '1', marginBottom: '20px' }}
          >
            Join the largest Crypto
            <span style={{ color: '#a081c3' }}> Gaming Guild </span>in the Metaverse.
          </Typography>
          <Typography sx={{ color: 'common.white' }}>
            As a fellow Crypto fanatic who loves to get the latest tips before anyone else and who loves to stay ahead
            of the curve then join our community of over 195k on discord. We are inviting you to join our weekly
            Metaverse Crypto Tips newsletter.
          </Typography>
          <br />
          <Form />
        </CardContent>
      </RootStyle2>
      <RootStyle3>
        <CardContent
          sx={{
            p: { md: 10 },
            color: 'grey.800'
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            sx={{ color: 'white!important', lineHeight: '1', marginBottom: '20px' }}
          >
            Unix officially partnerships with
            <img
              src="/sandbox.png"
              height="50px"
              alt="Sandbox"
              style={{ display: 'inline', margin: '0 0 -15px 15px' }}
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
            Our gaming studio (1Mhz Studios) will be helping develop LAND in The Sandbox. Exciting times ahead!
          </Typography>
          <Button
            variant="contained"
            target="_blank"
            href="https://cointelegraph.com/press-releases/unix-gaming-announces-strategic-partnership-with-the-sandbox"
            color="secondary"
            style={{ width: '200px', marginBottom: '15px', marginRight: '10px' }}
          >
            Read our Press Release
          </Button>
        </CardContent>
        {/* eslint-disable */}
        {/* <div style={{}}>
            <div
              class="livecoinwatch-widget-1"
              lcw-coin="_UNIX"
              lcw-base="USD"
              lcw-secondary="BTC"
              lcw-period="d"
              lcw-color-tx="#ffffff"
              lcw-color-pr="#58c7c5"
              lcw-color-bg="#1f2434"
              lcw-border-w="1"
            ></div>
            <Chart />
          </div> */}
        {/* <div style={{}}>
            <div
              class="coinmarketcap-currency-widget"
              data-currencyid="14915"
              data-base="USD"
              data-secondary=""
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-statsticker="true"
              data-stats="USD"
            ></div>
            <Ticker />
          </div> */}
      </RootStyle3>
    </Slider>
  );
}
