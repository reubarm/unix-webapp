// material
import { Container, Grid, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppWelcome,
  AppWidgets1,
  AppWidgets2,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  BookingNewestBooking,
  AppTotalDownloads,
  AppTotalInstalled,
  AppCurrentDownload,
  AppTotalActiveUsers,
  AppTopInstalledCountries
} from '../components/general-app';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  return (
    <Page title="Unix Gaming | Unixverse">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <AppWelcome displayName="asdfasdfasdf" />
              </Grid>
              <Grid item xs={12} md={3}>
                <AppTotalActiveUsers />
              </Grid>

              <Grid item xs={12} md={3}>
                <AppTotalInstalled />
              </Grid>

              <Grid item xs={12} md={3}>
                <AppTotalDownloads />
              </Grid>

              <Grid item xs={12} md={3}>
                <AppTotalActiveUsers />
              </Grid>

              <Grid item xs={12}>
                <BookingNewestBooking />
              </Grid>

              <Grid item xs={12} lg={12}>
                <AppNewInvoice />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3} lg={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AppTopInstalledCountries />
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
