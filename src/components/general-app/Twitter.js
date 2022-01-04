import PropTypes from 'prop-types';
import { random } from 'lodash';
import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
import windowsFilled from '@iconify/icons-ant-design/windows-filled';
import androidFilled from '@iconify/icons-ant-design/android-filled';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, CardHeader, Typography, Stack } from '@mui/material';
// utils

import { Timeline } from 'react-twitter-widgets';
import mockData from '../../utils/mock-data';
//
import Scrollbar from '../Scrollbar';
import { fShortenNumber } from '../../utils/formatNumber';
import './test.css';

// ----------------------------------------------------------------------

export default function Twitter() {
  return (
    <Card sx={{ background: 'rgba(27, 17, 38, 0.7)' }}>
      <CardHeader title="Our Latest Tweets" />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3 }}>
          <a
            className="twitter-timeline"
            style={{ width: '100%', height: '100%', color: '#fff!important' }}
            href="https://twitter.com/unixplaytoearn"
            data-chrome="transparent noheader nofooter noborders noscrollbar"
            data-tweet-limit="5"
            data-theme="dark"
          >
            Tweets
          </a>
        </Stack>
      </Scrollbar>
    </Card>
  );
}
