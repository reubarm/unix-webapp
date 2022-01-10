// material
import { Container, Grid, Box, Card, CardHeader, Typography, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import { Timeline } from 'react-twitter-widgets';
import Scrollbar from '../components/Scrollbar';
// components
import Page from '../components/Page';
import Ticker from '../components/general-app/Ticker';
import '../components/general-app/test.css';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  return (
    <Page title="Axie Inifity | Unix Gaming">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Box sx={{ pb: 5 }}>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="https://1.bp.blogspot.com/-5NS3Szc2Fhc/YOGkgxuMwzI/AAAAAAAABhg/C9zvNl3qfLMn3ocDRPEmtSaf3A6-MDDpACLcBGAsYHQ/w640-h356/Axie%2BInfinity%2B%2528AXS%2529%2BBlockchain%2BGame.jpg"
                    alt="Axie Infinity"
                    style={{
                      height: '70px',
                      width: '100px',
                      borderRadius: '10px',
                      display: 'inline'
                    }}
                  />
                  <h1 style={{ margin: '0 20px', display: 'inline', fontSize: '2.3em' }}>Axie Infinity</h1>
                </div>
                <div style={{ float: 'right' }}>
                  <a href="#" target="_blank">
                    <Icon icon="akar-icons:youtube-fill" width="30" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="#" target="_blank">
                    <Icon icon="akar-icons:twitter-fill" width="30" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="#" target="_blank">
                    <Icon icon="akar-icons:telegram-fill" width="30" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="#" target="_blank">
                    <Icon icon="akar-icons:discord-fill" width="30" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="#" target="_blank">
                    <Icon icon="akar-icons:facebook-fill" width="30" />
                  </a>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {' '}
              <Grid item xs={12} md={6} lg={8}>
                <Card sx={{ padding: '30px', minHeight: '280px' }}>
                  <h4 style={{ fontWeight: '400' }}>
                    <b>
                      Axie Infinity is a game about collecting, raising and battling cute fantasy creatures called Axie.
                    </b>
                    <br />
                    <br />
                    Build unstoppable teams of Axies and conquer your enemies! Each Axie has unique strengths and
                    weaknesses based on its genes. With billions of possible genetic combinations, the possibilities are
                    truly infinite! Become a land baron and start your own Kingdom! Use land to farm rare resources,
                    tokens, and attack dungeons! <br />
                    <br />
                    <b>Earn AXS tokens by playing and use them to decide the future of the game!</b>
                  </h4>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card
                  sx={{
                    padding: '30px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '280px'
                  }}
                >
                  <h2>Social Score</h2>
                  <h1 style={{ color: '#e481ff', fontSize: '3em', margin: '10px 0' }}>2389</h1>
                  <h2>Contract Address</h2>
                  <p style={{ color: '#e481ff', fontSize: '1em', marginTop: '10px', wordWrap: 'break-word' }}>
                    0xbb0e17ef65f82ab018d8edd776e8dd940327b28b
                  </p>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <Card>
                  {/* eslint-disable */}
                  <div style={{}}>
                    <div
                      className="coinmarketcap-currency-widget"
                      data-currencyid="6783"
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
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ padding: '30px' }}>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: '900', color: '#e481ff' }}>Total Tokens: &nbsp; &nbsp;</span>
                    270,000,000
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: '900', color: '#e481ff' }}>Total Raised: &nbsp; &nbsp;</span>
                    $153m
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: '900', color: '#e481ff' }}>Seed Token %: &nbsp; &nbsp;</span>
                    1% of Total Supply
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: '900', color: '#e481ff' }}>IDO Tokens %: &nbsp; &nbsp;</span>
                    11% of Total Supply
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: '900', color: '#e481ff' }}>
                      {' '}
                      Fully Diluted Market Cap: &nbsp; &nbsp;
                    </span>
                    3.62%
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: '900', color: '#e481ff' }}>Circulation: &nbsp; &nbsp;</span>
                    67,884,715
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ padding: '30px', minHeight: '355px' }}>
                  <Typography gutterBottom variant="h5" sx={{ padding: '0 0 10px', borderBottom: '1px solid white' }}>
                    Team
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: 'bold', color: '#a081c3' }}>CEO</span>
                    <br />
                    Trung Thanh Nguyen
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: 'bold', color: '#a081c3' }}>COO</span>
                    <br />
                    Aleksander Leonard Larsen
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: 'bold', color: '#a081c3' }}>CTO</span>
                    <br />
                    Andy Ho
                  </Typography>
                  <Typography variant="p" sx={{ display: 'block', marginTop: '10px' }}>
                    <span style={{ fontWeight: 'bold', color: '#a081c3' }}>Co-Founder</span>
                    <br />
                    Jeffery Zirlin
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ padding: '30px', minHeight: '355px' }}>
                  <Typography gutterBottom variant="h5" sx={{ padding: '0 0 10px', borderBottom: '1px solid white' }}>
                    Partners
                  </Typography>
                  <ul style={{ margin: '20px 10px' }}>
                    <li style={{ margin: '8px 0' }}>Ubisoft</li>
                    <li style={{ margin: '8px 0' }}>Samsung</li>
                    <li style={{ margin: '8px 0' }}>HTC</li>
                    <li style={{ margin: '8px 0' }}>Binance</li>
                    <li style={{ margin: '8px 0' }}>Kyber Network</li>
                    <li style={{ margin: '8px 0' }}>Marker</li>
                    <li style={{ margin: '8px 0' }}>Klaytn</li>
                  </ul>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ padding: '30px', minHeight: '355px' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ padding: '0 0 10px', margin: '0 0 30px', borderBottom: '1px solid white' }}
                  >
                    NFTs
                  </Typography>
                  <>
                    <img
                      src="https://storage.googleapis.com/assets.axieinfinity.com/axies/1447751/axie/axie-full-transparent.png"
                      alt="game"
                      style={{ display: 'inline', width: '50%' }}
                    />
                    <img
                      src="https://storage.googleapis.com/assets.axieinfinity.com/axies/5174656/axie/axie-full-transparent.png"
                      alt="game"
                      style={{ display: 'inline', width: '50%' }}
                    />
                    <br />
                    <img
                      src="https://storage.googleapis.com/assets.axieinfinity.com/axies/4680715/axie/axie-full-transparent.png"
                      alt="game"
                      style={{ display: 'inline', width: '50%' }}
                    />
                    <img
                      src="https://storage.googleapis.com/assets.axieinfinity.com/axies/7791380/axie/axie-full-transparent.png"
                      alt="game"
                      style={{ display: 'inline', width: '50%' }}
                    />
                  </>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ padding: '30px', minHeight: '355px' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ padding: '0 0 10px', margin: '0 0 30px', borderBottom: '1px solid white' }}
                  >
                    Land NFTs
                  </Typography>
                  <>
                    <img src="/1.png" alt="game" style={{ display: 'inline', width: '44%', margin: '5px 5px 0' }} />
                    <img src="/2.png" alt="game" style={{ display: 'inline', width: '44%', margin: '5px 5px 0' }} />
                    <br />
                    <img src="/3.png" alt="game" style={{ display: 'inline', width: '44%', margin: '5px 5px 0' }} />
                    <img src="/4.png" alt="game" style={{ display: 'inline', width: '44%', margin: '5px 5px 0' }} />
                  </>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <Card sx={{ padding: '30px', alignItems: 'center' }}>
                  <>
                    <img
                      src="https://playtoearn.net/img/dapp/axie-infinity/thumbnail/axie-infinity-HUgVj3YnzE9w.png"
                      alt="game"
                      style={{ display: 'inline', width: '48%' }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img
                      src="https://playtoearn.net/img/dapp/axie-infinity/thumbnail/axie-infinity-Rwy1G4qCAM6S.png"
                      alt="game"
                      style={{ display: 'inline', width: '48%' }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br />
                    <img
                      src="https://playtoearn.net/img/dapp/axie-infinity/thumbnail/axie-infinity-MjK04ifh2P1H.png"
                      alt="game"
                      style={{ display: 'inline', width: '48%' }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img
                      src="https://playtoearn.net/img/dapp/axie-infinity/thumbnail/axie-infinity-3Y8_ISq4hJWP.png"
                      alt="game"
                      style={{ display: 'inline', width: '48%' }}
                    />
                  </>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ padding: '30px' }}>
                  <Typography gutterBottom variant="h5" sx={{ padding: '0 0 10px', borderBottom: '1px solid white' }}>
                    Socials
                  </Typography>
                  <div style={{ alignItems: 'center' }}>
                    <a href="#" target="_blank">
                      <Icon icon="akar-icons:youtube-fill" width="50" style={{ margin: '5px 0' }} />
                    </a>
                    <br />
                    <a href="#" target="_blank">
                      <Icon icon="akar-icons:twitter-fill" width="50" style={{ margin: '5px 0' }} />
                    </a>
                    <br />
                    <a href="#" target="_blank">
                      <Icon icon="akar-icons:telegram-fill" width="50" style={{ margin: '5px 0' }} />
                    </a>
                    <br />
                    <a href="#" target="_blank">
                      <Icon icon="akar-icons:discord-fill" width="50" style={{ margin: '5px 0' }} />
                    </a>
                    <br />
                    <a href="#" target="_blank">
                      <Icon icon="akar-icons:facebook-fill" width="50" style={{ margin: '5px 0' }} />
                    </a>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3} lg={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ background: 'rgba(27, 17, 38, 0.7)' }}>
                  <CardHeader title="Axie Infinity Tweets" />
                  <Scrollbar>
                    <Stack spacing={3} sx={{ p: 3 }}>
                      <a
                        className="twitter-timeline"
                        style={{ width: '100%', height: '100%', color: '#fff!important' }}
                        href="https://twitter.com/AxieInfinity"
                        data-chrome="transparent noheader nofooter noborders noscrollbar"
                        data-tweet-limit="5"
                        data-theme="dark"
                      >
                        Axie Infinity Tweets
                      </a>
                    </Stack>
                  </Scrollbar>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
