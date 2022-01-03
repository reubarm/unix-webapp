// material
import { Container, Grid, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { AppWelcome, AppTotalViews, AppTotalInstalled, AppTotalActiveUsers, Twitter } from '../components/general-app';

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
              <Grid item xs={12} md={4}>
                <AppTotalActiveUsers />
              </Grid>

              <Grid item xs={12} md={4}>
                <AppTotalInstalled />
              </Grid>

              <Grid item xs={12} md={4}>
                <AppTotalViews />
              </Grid>

              <Grid item xs={12} style={{ paddingTop: '0' }}>
                <img src="/launchpad.jpg" alt="launchpad" style={{ width: '100%', margin: '20px auto' }} />
                {/* <br />
                <br />
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ color: 'white!important', textAlign: 'center', margin: '0 auto' }}
                >
                  Unix Gaming Launchpad
                </Typography>
                <img src="/launchpad.png" alt="launchpad" style={{ width: '100%', margin: '0 auto' }} /> */}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3} lg={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Twitter />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
