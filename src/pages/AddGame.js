import React, { useState, useCallback } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Button,
  Container,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormLabel,
  TextField,
  Grid,
  ToggleButtonGroup,
  Card,
  ToggleButton,
  CardContent
} from '@mui/material';
// routes
import axios from 'axios';
import { PATH_DASHBOARD } from '../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../components/animate';
import '../components/general-app/test.css';
import Page from '../components/Page';
import UploadSingleFile from '../components/UploadSingleFile';
import UploadMultiFile from '../components/UploadMultiFile';

// ----------------------------------------------------------------------

export default function AddGame() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [website, setWebsite] = useState('');
  const [ticker, setTicker] = useState('');
  const [status, setStatus] = useState('');
  const [contract, setContract] = useState('');
  const [litepaper, setLitepaper] = useState('');
  const [investors, setInvestors] = useState('');
  const [youtube, setYoutube] = useState('');
  const [twitter, setTwitter] = useState('');
  const [telegram, setTelegram] = useState('');
  const [discord, setDiscord] = useState('');
  const [facebook, setFacebook] = useState('');

  const [team, setTeam] = useState('');
  const [partners, setPartners] = useState('');
  const [advisors, setAdvisors] = useState('');
  const [launchpad, setLaunchpad] = useState('');
  const [launchpads, setLaunchpads] = useState('');
  const [network, setNetwork] = useState('');
  const [tokens, setTokens] = useState('');
  const [raise, setRaise] = useState('');
  const [event, setEvent] = useState('');

  const [seed, setSeed] = useState('');
  const [privateseed, setPrivateseed] = useState('');
  const [vestingseed, setVestingseed] = useState('');
  const [vestingprivate, setVestingprivate] = useState('');
  const [vestingido, setVestingido] = useState('');
  const [ido, setIdo] = useState('');
  const [diluted, setDiluted] = useState('');
  const [marketcap, setMarketcap] = useState('');
  const [listing, setListing] = useState('');
  const [circulation, setCirculation] = useState('');
  const [nfts, setNfts] = useState('');
  const [land, setLand] = useState('');
  const [speciality, setSpeciality] = useState('');

  const [success, setSuccess] = useState(false);
  const [investorpeeps, setInvestorpeeps] = useState(false);
  const [trailers, setTrailers] = useState(false);

  const showInvestors = () => {
    setInvestorpeeps(true);
  };
  const showTrailers = () => {
    setTrailers(true);
  };
  const showLaunchpads = () => {
    setLaunchpads(true);
  };

  const [formats, setFormats] = React.useState(() => []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const [models, setModels] = React.useState(() => []);

  const handleModel = (event, newModels) => {
    setModels(newModels);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Id: 10,
      Name: name,
      Description: description,
      Image: values.images,
      Genre: genre,
      Blockchain: blockchain,
      Web: website,
      Ticker: ticker,
      Device: formats,
      Status: status,
      Label: models,
      Contract: contract,
      Litepaper: litepaper,
      Investors: investors,
      Youtube: youtube,
      Twitter: twitter,
      Telegram: telegram,
      Discord: discord,
      Facebook: facebook,
      Team: team,
      Partners: partners,
      Advisors: advisors,
      Launchpad: launchpad,
      Launchpads: launchpads,
      Network: network,
      Tokens: tokens,
      Raise: raise,
      Event: event,
      Seed: seed,
      PrivateSeed: privateseed,
      VestingSeed: vestingseed,
      VestingPrivate: vestingprivate,
      VestingIDO: vestingido,
      Ido: ido,
      Diluted: diluted,
      MarketCap: marketcap,
      Listing: listing,
      Circulation: circulation,
      NFTs: nfts,
      Land: land,
      Speciality: speciality
    };

    // Add one line to the sheet
    fetch('https://sheet.best/api/sheets/74453979-ab10-414a-b5c9-5fdb3d379c43', {
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

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      content: '',
      images: [],
      cover: null,
      tags: ['Logan'],
      publish: true,
      comments: true,
      metaTitle: '',
      metaDescription: '',
      metaKeywords: ['Logan']
    }
  });

  const { errors, values, touched, isSubmitting, setFieldValue, getFieldProps } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setFieldValue(
        'images',
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    [setFieldValue]
  );

  const handleRemoveAll = () => {
    setFieldValue('images', []);
  };

  const handleRemove = (file) => {
    const filteredItems = values.images.filter((_file) => _file !== file);
    setFieldValue('images', filteredItems);
  };

  console.log(values.images);

  return (
    <Page title="Add a New Game to Unix">
      <Container maxWidth="lg">
        <Grid container sx={{ margin: '0 auto' }}>
          <Grid item xs={12} xl={10}>
            <Typography variant="h3" component="h1" sx={{ mb: 5, textAlign: 'center' }}>
              Add a new game
            </Typography>
            <Card>
              <CardContent>
                <FormikProvider value={formik}>
                  <form className="form">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          id="outlined-size-normal"
                          onChange={(e) => setName(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Logo/Game Image URL"
                          id="outlined-size-normal"
                          onChange={(e) => setImage(e.target.value)}
                          className="mobile"
                        />{' '}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Description"
                          id="outlined-size-normal"
                          onChange={(e) => setDescription(e.target.value)}
                          className="mobile"
                        />{' '}
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Genre"
                          id="outlined-size-normal"
                          onChange={(e) => setGenre(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Blockchain</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={blockchain}
                            label="Age"
                            onChange={(e) => setBlockchain(e.target.value)}
                          >
                            <MenuItem value="Ethereum">Ethereum</MenuItem>
                            <MenuItem value="Binance">Binance</MenuItem>
                            <MenuItem value="Solana">Solana</MenuItem>
                            <MenuItem value="Polygon">Polygon</MenuItem>
                            <MenuItem value="Hive">Hive</MenuItem>
                            <MenuItem value="Hive">WAX</MenuItem>
                            <MenuItem value="Hive">Immutable X</MenuItem>
                            <MenuItem value="Hive">Harmony</MenuItem>
                            <MenuItem value="Hive">Vulcan Forge</MenuItem>
                            <MenuItem value="Hive">Avalanche</MenuItem>
                          </Select>
                        </FormControl>{' '}
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Website URL"
                          id="outlined-size-normal"
                          onChange={(e) => setWebsite(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="API Name"
                          id="outlined-size-normal"
                          onChange={(e) => setTicker(e.target.value)}
                          className="mobile"
                          required
                        />
                      </Grid>

                      {/* <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={values.cover}
                        onDrop={handleDrop}
                        error={Boolean(touched.cover && errors.cover)}
                      /> */}

                      <Grid item xs={12}>
                        <FormLabel component="legend" sx={{ marginBottom: '10px' }}>
                          Game Images and Screenshots
                        </FormLabel>
                        <UploadMultiFile
                          showPreview
                          maxSize={3145728}
                          accept="image/*"
                          files={values.images}
                          onDrop={handleDrop}
                          onRemove={handleRemove}
                          onRemoveAll={handleRemoveAll}
                          error={Boolean(touched.images && errors.images)}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormLabel component="legend" sx={{ marginBottom: '10px' }}>
                          Devices
                        </FormLabel>
                        <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
                          <ToggleButton value="Web" aria-label="Web">
                            Web
                          </ToggleButton>
                          <ToggleButton value="Android" aria-label="Android">
                            Android
                          </ToggleButton>
                          <ToggleButton value="iOS" aria-label="iOS">
                            iOS
                          </ToggleButton>
                          <ToggleButton value="Windows" aria-label="Windows">
                            Windows
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Grid>
                      <Grid item xs={6}>
                        <FormLabel component="legend" sx={{ marginBottom: '10px' }}>
                          Model
                        </FormLabel>
                        <ToggleButtonGroup value={models} onChange={handleModel} aria-label="text formatting">
                          <ToggleButton value="Free To Play" aria-label="Free To Play">
                            Free To Play
                          </ToggleButton>
                          <ToggleButton value="Play To Earn" aria-label="Play To Earn">
                            Play To Earn
                          </ToggleButton>
                          <ToggleButton value="Crypto" aria-label="Crypto">
                            Crypto Support
                          </ToggleButton>
                          <ToggleButton value="NFT" aria-label="NFT">
                            NFT Support
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Status</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Age"
                            onChange={(e) => setStatus(e.target.value)}
                          >
                            <MenuItem value="ALPHA">ALPHA</MenuItem>
                            <MenuItem value="BETA">BETA</MenuItem>
                            <MenuItem value="Development">Development</MenuItem>
                            <MenuItem value="Live">Live</MenuItem>
                            <MenuItem value="Presale">Presale</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Litepaper"
                          id="outlined-size-
                          normal"
                          onChange={(e) => setLitepaper(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Backers/Investors"
                          id="outlined-size-normal"
                          onChange={(e) => setInvestors(e.target.value)}
                          className="mobile"
                        />
                        {!investorpeeps && <Button onClick={showInvestors}>Add more +</Button>}
                        {investorpeeps && (
                          <div>
                            <br />
                            <TextField
                              fullWidth
                              label="Team (#1)"
                              id="outlined-size-normal"
                              onChange={(e) => setInvestors(e.target.value)}
                              className="mobile"
                            />
                            <br />
                            <br />
                            <TextField
                              fullWidth
                              label="Advisors (#2)"
                              id="outlined-size-normal"
                              onChange={(e) => setInvestors(e.target.value)}
                              className="mobile"
                            />
                            <br />
                            <br />
                            <TextField
                              fullWidth
                              label="Backers (#3)"
                              id="outlined-size-normal"
                              onChange={(e) => setInvestors(e.target.value)}
                              className="mobile"
                            />
                            <br />
                            <br />
                            <TextField
                              fullWidth
                              label="Investors (#4)"
                              id="outlined-size-normal"
                              onChange={(e) => setInvestors(e.target.value)}
                              className="mobile"
                            />
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Contract Address"
                          id="outlined-size-normal"
                          onChange={(e) => setContract(e.target.value)}
                          className="mobile"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Team"
                          id="outlined-size-normal"
                          onChange={(e) => setTeam(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Advisors"
                          id="outlined-size-normal"
                          onChange={(e) => setAdvisors(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Partners"
                          id="outlined-size-normal"
                          onChange={(e) => setPartners(e.target.value)}
                          className="mobile"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Launchpads"
                          id="outlined-size-normal"
                          onChange={(e) => setLaunchpad(e.target.value)}
                          className="mobile"
                        />

                        {!launchpads && <Button onClick={showLaunchpads}>Add more +</Button>}
                        {launchpads && (
                          <div>
                            <br />
                            <TextField
                              fullWidth
                              label="Launchpads #1"
                              id="outlined-size-normal"
                              onChange={(e) => setLaunchpads(e.target.value)}
                              className="mobile"
                            />
                            <br />
                            <br />
                            <TextField
                              fullWidth
                              label="Launchpads #2"
                              id="outlined-size-normal"
                              onChange={(e) => setLaunchpads(e.target.value)}
                              className="mobile"
                            />
                            <br />
                            <br />
                            <TextField
                              fullWidth
                              label="Launchpads #3"
                              id="outlined-size-normal"
                              onChange={(e) => setLaunchpads(e.target.value)}
                              className="mobile"
                            />
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Network"
                          id="outlined-size-normal"
                          onChange={(e) => setNetwork(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Total Tokens"
                          id="outlined-size-normal"
                          onChange={(e) => setTokens(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Total Raise"
                          id="outlined-size-normal"
                          onChange={(e) => setRaise(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Token Generation Event"
                          id="outlined-size-normal"
                          onChange={(e) => setEvent(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Seed Tokens"
                          id="outlined-size-normal"
                          onChange={(e) => setSeed(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Private Tokens"
                          id="outlined-size-normal"
                          onChange={(e) => setPrivateseed(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="IDO"
                          id="outlined-size-normal"
                          onChange={(e) => setIdo(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Vesting for Seed"
                          id="outlined-size-normal"
                          onChange={(e) => setVestingseed(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Vesting for Private"
                          id="outlined-size-normal"
                          onChange={(e) => setVestingprivate(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Vesting for IDO"
                          id="outlined-size-normal"
                          onChange={(e) => setVestingido(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormLabel component="legend" sx={{ marginBottom: '10px' }}>
                          Team, Advisors &amp; Investors Photos
                        </FormLabel>
                        <UploadMultiFile
                          showPreview
                          maxSize={3145728}
                          accept="image/*"
                          files={values.images}
                          onDrop={handleDrop}
                          onRemove={handleRemove}
                          onRemoveAll={handleRemoveAll}
                          error={Boolean(touched.images && errors.images)}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormLabel component="legend" sx={{ marginBottom: '10px' }}>
                          Tokenomics
                        </FormLabel>
                        <UploadMultiFile
                          showPreview
                          maxSize={3145728}
                          accept="image/*"
                          files={values.images}
                          onDrop={handleDrop}
                          onRemove={handleRemove}
                          onRemoveAll={handleRemoveAll}
                          error={Boolean(touched.images && errors.images)}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="LinkedIn (Team and Advisors)"
                          id="outlined-size-normal"
                          onChange={(e) => setFacebook(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Listing Price"
                          id="outlined-size-normal"
                          onChange={(e) => setListing(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Circulation Supply"
                          id="outlined-size-normal"
                          onChange={(e) => setCirculation(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Marketcap"
                          id="outlined-size-normal"
                          onChange={(e) => setMarketcap(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Fully Diluted Market Cap"
                          id="outlined-size-normal"
                          onChange={(e) => setDiluted(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="NFTs to Purchase"
                          id="outlined-size-normal"
                          onChange={(e) => setNfts(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Land to Purchase"
                          id="outlined-size-normal"
                          onChange={(e) => setLand(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Trailers and In-Game Videos"
                          id="outlined-size-normal"
                          onChange={(e) => setYoutube(e.target.value)}
                          className="mobile"
                        />

                        {!trailers && <Button onClick={showTrailers}>Add more +</Button>}
                        {trailers && (
                          <div>
                            <br />
                            <TextField
                              fullWidth
                              label="Trailers and In-Game Videos #1"
                              id="outlined-size-normal"
                              onChange={(e) => setYoutube(e.target.value)}
                              className="mobile"
                            />
                            <br />
                            <br />
                            <TextField
                              fullWidth
                              label="Trailers and In-Game Videos #2"
                              id="outlined-size-normal"
                              onChange={(e) => setYoutube(e.target.value)}
                              className="mobile"
                            />
                            <br />
                            <br />
                            <TextField
                              fullWidth
                              label="Trailers and In-Game Videos #3"
                              id="outlined-size-normal"
                              onChange={(e) => setYoutube(e.target.value)}
                              className="mobile"
                            />
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Whats Special About Your Game"
                          id="outlined-size-normal"
                          onChange={(e) => setSpeciality(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="YouTube"
                          id="outlined-size-normal"
                          onChange={(e) => setYoutube(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Twitter"
                          id="outlined-size-normal"
                          onChange={(e) => setTwitter(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Telegram"
                          id="outlined-size-normal"
                          onChange={(e) => setTelegram(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Discord"
                          id="outlined-size-normal"
                          onChange={(e) => setDiscord(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Facebook"
                          id="outlined-size-normal"
                          onChange={(e) => setFacebook(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Instagram"
                          id="outlined-size-normal"
                          onChange={(e) => setFacebook(e.target.value)}
                          className="mobile"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <br />
                        <br />
                        <div sx={{ textAlign: 'center', margin: '0 auto' }}>
                          <Button
                            sx={{ textAlign: 'center', margin: '0 auto' }}
                            size="large"
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit}
                            endIcon={<Icon icon={flashFill} width={20} height={20} />}
                          >
                            Add a new game
                          </Button>

                          {success && (
                            <h1>
                              <br />
                              Thank you for adding a new game! We will review this and publish soon. Please check our
                              website later.
                            </h1>
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  </form>
                </FormikProvider>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
