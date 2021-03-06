import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import { Icon } from '@iconify/react';
import ReactApexChart from 'react-apexcharts';
import trendingUpFill from '@iconify/icons-eva/trending-up-fill';
import trendingDownFill from '@iconify/icons-eva/trending-down-fill';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../utils/formatNumber';
import './test.css';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 24,
  height: 24,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.success.main,
  backgroundColor: alpha(theme.palette.success.main, 0.16)
}));

// ----------------------------------------------------------------------

const PERCENT = 1.2;
const TOTAL_DOWNLOAD = 1600000;
const CHART_DATA = [{ data: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31] }];

export default function AppTotalViews() {
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    axios
      .get('https://opensheet.vercel.app/1q2ty_Xk1sy-SuasEDzEwHPc6w2U8mcqrXs9HrPA6R_Y/Amounts')
      .then((res) => {
        setAmount(res.data[0]['Viewers on Stream']);
      })
      .catch((error) => console.log(error));
  }, []);

  const theme = useTheme();

  const chartOptions = {
    colors: [theme.palette.chart.red[0]],
    chart: { sparkline: { enabled: true } },
    plotOptions: { bar: { columnWidth: '68%', borderRadius: 2 } },
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => ''
        }
      },
      marker: { show: false }
    }
  };

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3, background: 'rgba(27, 17, 38, 0.7)' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">Viewers on Stream</Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2, mb: 1 }}>
          <IconWrapperStyle
            sx={{
              ...(PERCENT < 0 && {
                color: 'error.main',
                bgcolor: alpha(theme.palette.error.main, 0.16)
              })
            }}
          >
            <Icon width={16} height={16} icon={PERCENT >= 0 ? trendingUpFill : trendingDownFill} />
          </IconWrapperStyle>
          <Typography component="span" variant="subtitle2">
            {PERCENT > 0 && '+'}
            {fPercent(PERCENT)}
          </Typography>
        </Stack>

        <Typography variant="h3">{fNumber(amount)}</Typography>
      </Box>

      <ReactApexChart
        type="bar"
        series={CHART_DATA}
        options={chartOptions}
        width={60}
        height={36}
        className="hide-mb"
      />
    </Card>
  );
}
