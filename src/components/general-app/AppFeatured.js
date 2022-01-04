import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { CardContent, Box, Card, Typography } from '@mui/material';
// utils
import mockData from '../../utils/mock-data';
//
import { varFadeInRight, MotionContainer } from '../animate';
import { CarouselControlsPaging1, CarouselControlsArrowsBasic1 } from '../carousel';

// ----------------------------------------------------------------------

const TITLES = ['These exchanges coming soon', 'UniX Axie Infinity Cup', 'Over 4000 UniX Holders'];
const URLS = [
  'https://twitter.com/unixplaytoearn',
  'https://twitter.com/unixplaytoearn/status/1468151371807408131',
  'https://twitter.com/unixplaytoearn'
];

const MOCK_APPS = [...Array(3)].map((_, index) => ({
  id: mockData.id(index),
  title: TITLES[index],
  url: URLS[index],
  description: mockData.text.title(index),
  image: mockData.image.feed(index)
}));

const CarouselImgStyle = styled('img')(({ theme }) => ({
  height: '300px',
  width: '100%',
  objectFit: 'cover',
  [theme.breakpoints.up('xl')]: {
    height: 300
  }
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool
};

function CarouselItem({ item, isActive }) {
  const { image, title, url, description } = item;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            top: 0,
            width: 1,
            height: 1,
            position: 'absolute'
            // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
          }}
        />
        <CarouselImgStyle alt="asdf" src={image} />
        <CardContent
          sx={{
            bottom: 0,
            width: 1,
            textAlign: 'left',
            position: 'absolute',
            color: 'common.white',
            background: 'rgba(27, 17, 38, 0.7)'
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
    </a>
  );
}

export default function AppFeatured() {
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
    <Card>
      <Slider ref={carouselRef} {...settings}>
        {MOCK_APPS.map((app, index) => (
          <CarouselItem key={app.id} item={app} isActive={index === currentIndex} />
        ))}
      </Slider>

      <CarouselControlsArrowsBasic1 onNext={handleNext} onPrevious={handlePrevious} />
    </Card>
  );
}
