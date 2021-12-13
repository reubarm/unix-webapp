import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Link,
  Container,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Grid,
  Card,
  CardHeader,
  CardContent
} from '@mui/material';
// routes
import axios from 'axios';
import { PATH_DASHBOARD } from '../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../components/animate';
import '../components/general-app/test.css';
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function BlogNewPost() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [website, setWebsite] = useState('');
  const [device, setDevice] = useState('');
  const [status, setStatus] = useState('');
  const [contract, setContract] = useState('');

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Id: 10,
      Name: name,
      Description: description,
      Genre: genre,
      Blockchain: blockchain,
      Web: website,
      Device: device,
      Status: status,
      Contract: contract
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

  return (
    <Page title="Page Three | Minimal-UI">
      <Container maxWidth="lg">
        <Grid container sx={{ margin: '0 auto' }}>
          <Grid item xs={12} xl={10}>
            <Typography variant="h3" component="h1" sx={{ mb: 5, textAlign: 'center' }}>
              Add a new game
            </Typography>
            <Card>
              <CardContent>
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
                      label="Devices"
                      id="outlined-size-normal"
                      onChange={(e) => setDevice(e.target.value)}
                      className="mobile"
                    />
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Status</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Age"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="Alpha">Alpha</MenuItem>
                        <MenuItem value="Binance">Beta</MenuItem>
                        <MenuItem value="Development">Development</MenuItem>
                        <MenuItem value="Live">Live</MenuItem>
                        <MenuItem value="Presale">Presale</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      label="Contract Address"
                      id="outlined-size-normal"
                      onChange={(e) => setContract(e.target.value)}
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
                          Thank you for adding a new game!
                        </h1>
                      )}
                    </div>
                  </Stack>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
