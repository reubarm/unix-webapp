import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import roundVpnKey from '@iconify/icons-ic/round-vpn-key';
import peopleFill from '@iconify/icons-eva/people-fill';
// material
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Avatar, Typography, Paper, CardHeader } from '@mui/material';
// utils
import { fDateTime } from '../../utils/formatTime';
import mockData from '../../utils/mock-data';
//
import Label from '../Label';
import { CarouselControlsArrowsBasic1 } from '../carousel';

// ----------------------------------------------------------------------

const MOCK_BOOKINGS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  website: mockData.name.firstName(index),
  avatar: mockData.image.avatar(index),
  bookdAt: mockData.time(index),
  roomNumber: 'Ethereum',
  roomType: (index === 1 && 'Card, DeFi, Fantasy') || (index === 3 && 'Arcade, Puzzle') || 'Action, RPG',
  person: 'NFT, P2P',
  cover: `/static/mock-images/rooms/room-${index + 1}.jpg`,
  icon: `/static/mock-images/covers/cover_${index + 1}.jpg`
}));

// ----------------------------------------------------------------------

BookingItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    bookdAt: PropTypes.instanceOf(Date),
    cover: PropTypes.string,
    name: PropTypes.string,
    person: PropTypes.string,
    roomNumber: PropTypes.string,
    roomType: PropTypes.string
  })
};

function BookingItem({ item }) {
  const { avatar, name, email, website, roomNumber, bookdAt, person, cover, roomType, icon } = item;

  return (
    <a
      style={{ textDecoration: 'none!important', color: 'white!important', textTransform: 'none' }}
      href={website}
      target="_blank"
      rel="noreferrer"
    >
      <Paper
        sx={{
          mx: 1.5,
          borderRadius: 2,
          bgcolor: 'background.neutral',
          background: `linear-gradient(180deg, rgba(169,0,252,0.3) 50%, rgba(68,17,78,1) 70%), url(${cover}) center no-repeat`,
          backgroundSize: 'cover',
          maxHeight: '300px'
        }}
      >
        <Stack spacing={2.5} sx={{ p: 3, pb: 2.5, paddingTop: '230px' }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Avatar alt={name} src={icon} />
            <div>
              <Typography
                variant="subtitle2"
                style={{ textDecoration: 'none!important', color: 'white!important', textTransform: 'none' }}
              >
                {name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  mt: 0.5,
                  display: 'block',
                  textDecoration: 'none!important',
                  color: 'white!important',
                  textTransform: 'none'
                }}
              >
                {roomType}
              </Typography>
            </div>
          </Stack>

          {/* <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} sx={{ color: 'text.secondary' }}>
          <Stack direction="row" alignItems="center" sjustifyContent="center" pacing={1}>
            <Icon icon={roundVpnKey} width={16} height={16} />
            <Typography variant="caption">{roomNumber}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Icon icon={peopleFill} width={16} height={16} />
            <Typography variant="caption">{person}</Typography>
          </Stack>
        </Stack> */}
        </Stack>
        {/* <Box sx={{ p: 1, position: 'relative' }}>
        <Box
          component="img"
          src={cover}
          sx={{ borderRadius: 1.5, height: '100px', margin: '0 auto', textAlign: 'center' }}
        />
        <br />
        <br />
        <br />
        <Label
          variant="filled"
          color={(roomType === 'king' && 'secondary') || (roomType === 'double' && 'primary') || 'secondary'}
          sx={{ position: 'absolute', left: 50, right: 50, bottom: 10, textTransform: 'capitalize' }}
        >
          {roomType}
        </Label>
      </Box> */}
      </Paper>
    </a>
  );
}

export default function BookingCustomerReviews() {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* <CardHeader
        action={
          <CarouselControlsArrowsBasic1
            arrowLine
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              position: 'static',
              '& button': { color: 'text.primary' }
            }}
          />
        }
        sx={{
          p: 0,
          mb: 3,
          margin: '0 auto 20px',
          textAlign: 'center',
          '& .MuiCardHeader-action': { alignSelf: 'center' }
        }}
      /> */}

      <Slider ref={carouselRef} {...settings}>
        {MOCK_BOOKINGS.map((item) => (
          <BookingItem key={item.id} item={item} />
        ))}
      </Slider>
    </Box>
  );
}
