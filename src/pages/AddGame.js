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

  const [formats, setFormats] = React.useState(() => []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const [models, setModels] = React.useState(() => []);

  const handleModel = (event, newModels) => {
    setModels(newModels);
  };

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Id: 10,
      Name: name,
      Description: description,
      Image: image,
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
      Facebook: facebook
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

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFieldValue('cover', {
        ...file,
        preview: URL.createObjectURL(file)
      });
    }
  }, []);

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
                    <Stack
                      component={motion.div}
                      variants={varFadeInRight}
                      direction="column"
                      spacing={3}
                      sx={{ padding: '30px' }}
                      justifyContent={{ xs: 'center', md: 'flex-start' }}
                    >
                      <TextField
                        label="Name"
                        id="outlined-size-normal"
                        onChange={(e) => setName(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Description"
                        id="outlined-size-normal"
                        onChange={(e) => setDescription(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Logo/Game Image URL"
                        id="outlined-size-normal"
                        onChange={(e) => setImage(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Genre"
                        id="outlined-size-normal"
                        onChange={(e) => setGenre(e.target.value)}
                        className="mobile"
                      />
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
                        </Select>
                      </FormControl>
                      <TextField
                        label="Website URL"
                        id="outlined-size-normal"
                        onChange={(e) => setWebsite(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="API Name"
                        id="outlined-size-normal"
                        onChange={(e) => setTicker(e.target.value)}
                        className="mobile"
                        required
                      />

                      {/* <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={values.cover}
                        onDrop={handleDrop}
                        error={Boolean(touched.cover && errors.cover)}
                      /> */}

                      {/* <UploadMultiFile
                        showPreview
                        maxSize={3145728}
                        accept="image/*"
                        files={values.images}
                        onDrop={handleDrop}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}
                        error={Boolean(touched.images && errors.images)}
                      /> */}

                      <FormLabel component="legend">Devices</FormLabel>
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
                      <FormLabel component="legend">Model</FormLabel>
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
                      <TextField
                        label="Litepaper"
                        id="outlined-size-normal"
                        onChange={(e) => setLitepaper(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Backers/Investors/Advisors"
                        id="outlined-size-normal"
                        onChange={(e) => setInvestors(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Contract Address"
                        id="outlined-size-normal"
                        onChange={(e) => setContract(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="YouTube"
                        id="outlined-size-normal"
                        onChange={(e) => setYoutube(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Twitter"
                        id="outlined-size-normal"
                        onChange={(e) => setTwitter(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Telegram"
                        id="outlined-size-normal"
                        onChange={(e) => setTelegram(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Discord"
                        id="outlined-size-normal"
                        onChange={(e) => setDiscord(e.target.value)}
                        className="mobile"
                      />
                      <TextField
                        label="Facebook"
                        id="outlined-size-normal"
                        onChange={(e) => setFacebook(e.target.value)}
                        className="mobile"
                      />
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
                    </Stack>
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
