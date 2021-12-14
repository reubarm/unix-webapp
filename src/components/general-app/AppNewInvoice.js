import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
import shareFill from '@iconify/icons-eva/share-fill';
import printerFill from '@iconify/icons-eva/printer-fill';
import archiveFill from '@iconify/icons-eva/archive-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import { useTheme } from '@mui/material/styles';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import {
  Box,
  Menu,
  Avatar,
  Card,
  Table,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  CardHeader,
  TableContainer
} from '@mui/material';
// utils
import { fCurrency } from '../../utils/formatNumber';
import mockData from '../../utils/mock-data';
//
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import { MIconButton } from '../@material-extend';
import './test.css';

// ----------------------------------------------------------------------

const MOCK_INVOICES = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  price: mockData.number.price(index),
  category: (index === 0 && 'Android') || (index === 2 && 'Mac') || 'Windows'
}));

// ----------------------------------------------------------------------

function MoreMenuButton() {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <MIconButton ref={menuRef} size="large" onClick={handleOpen}>
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </MIconButton>
      </>

      <Menu
        open={open}
        anchorEl={menuRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem>
          <Icon icon={shareFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Share
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

const modalPopup = {
  content: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    color: '#fff!important',
    padding: '50px',
    background: '#212b36',
    borderRadius: '20px',
    border: 'none'
  },
  overlay: {
    background: 'rgb(22, 28, 36, 0.9)',
    zIndex: '9999'
  }
};

export default function AppNewInvoice() {
  const theme = useTheme();
  const [games, setGames] = useState([]);
  const [extra, openExtra] = useState(false);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get('https://opensheet.vercel.app/1eJKGxFHy6xJ_BYPu3kBtvZPtZSG6uVM2gQmZ0_ndCug/Games')
      .then((res) => {
        setGames(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredGames = Object.values(games).filter((game) => game);

  const [count, setCount] = useState(0);
  const select = (count + 1).toString();
  const selectedGame = games.filter((game) => game.Order === select);
  console.log(selectedGame);

  function ShowTokenDetail() {
    /* eslint-disable */
    // fetch(
    //   `https://api.coingecko.com/api/v3/simple/price?ids=${selectedGame[0].Ticker}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
    //   {
    //     method: 'GET'
    //   }
    // )
    //   .then((r) => r.json())
    //   .then((data) => {
    //     setStats(data[selectedGame[0].Ticker]);
    //     console.log(data[selectedGame[0].Ticker]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    openExtra(!extra);
  }

  // ----------------------------------------------------------------------

  const [axies, setAxies] = useState([]);
  const [staratlas, setStaratlas] = useState([]);
  const [sipher, setSipher] = useState([]);
  const [splinterlands, setSplinterlands] = useState([]);
  const [sandbox, setSandbox] = useState([]);
  const [alienworlds, setAlienworlds] = useState([]);
  const [plant, setPlant] = useState([]);
  const [binemon, setBinemon] = useState([]);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=axie-infinity&vs_currencies=usd')
      .then((res) => {
        setAxies(res.data['axie-infinity'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=star-atlas&vs_currencies=usd')
      .then((res) => {
        setStaratlas(res.data['star-atlas'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=sipher&vs_currencies=usd')
      .then((res) => {
        setSipher(res.data['sipher'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=splinterlands&vs_currencies=usd')
      .then((res) => {
        setSplinterlands(res.data['splinterlands'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=the-sandbox&vs_currencies=usd')
      .then((res) => {
        setSandbox(res.data['the-sandbox'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=alien-worlds&vs_currencies=usd')
      .then((res) => {
        setAlienworlds(res.data['alien-worlds'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=usd')
      .then((res) => {
        setPlant(res.data['plant-vs-undead-token'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=binemon&vs_currencies=usd')
      .then((res) => {
        setBinemon(res.data['binemon'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=heroes-empires&vs_currencies=usd')
      .then((res) => {
        setHeroes(res.data['heroes-empires'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  // ----------------------------------------------------------------------

  return (
    <>
      {/* eslint-disable */}
      <Modal isOpen={extra} onRequestClose={ShowTokenDetail} style={modalPopup}>
        {/* <CloseModal onClick={showTokenDetail} className="close-modal">✖</CloseModal> */}

        {selectedGame[0] && (
          <>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={selectedGame[0].Image}
                  alt={selectedGame[0].Name}
                  style={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '10px',
                    display: 'inline'
                  }}
                />
                <h1 style={{ margin: '0 20px', display: 'inline' }}>{selectedGame[0].Name}</h1>
                <p style={{ margin: '0 20px', display: 'inline', alignItems: 'center' }}>
                  <img src={selectedGame[0].Blockicon} height="20" style={{ display: 'inline' }} />
                  &nbsp;&nbsp;
                  <span style={{ color: '#e481ff' }}>{selectedGame[0].Blockchain}</span>
                  &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                  <span style={{ color: '#e481ff' }}>{selectedGame[0].Device.replace(/[\[\]"]+/g, '')}</span>
                  &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                  <span style={{ color: '#e481ff' }}>{selectedGame[0].Status}</span>
                </p>
              </div>
              <div style={{ float: 'right' }}>
                <a href={selectedGame[0].Youtube} target="_blank">
                  <Icon icon="akar-icons:youtube-fill" width="30" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={selectedGame[0].Twitter} target="_blank">
                  <Icon icon="akar-icons:twitter-fill" width="30" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={selectedGame[0].Telegram} target="_blank">
                  <Icon icon="akar-icons:telegram-fill" width="30" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={selectedGame[0].Discord} target="_blank">
                  <Icon icon="akar-icons:discord-fill" width="30" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={selectedGame[0].Facebook} target="_blank">
                  <Icon icon="akar-icons:facebook-fill" width="30" />
                </a>
              </div>
            </div>
            <br />
            <hr style={{ borderColor: '#5a6b7a' }} />
            <br />
            <h4 style={{ fontWeight: '400' }}>{selectedGame[0].Description}</h4>
            <br />
            <h4>Backers, Investors &amp; Advisors: {selectedGame[0].Investors}</h4>
            <br />
            <hr style={{ borderColor: '#5a6b7a' }} />
            <br />
            <h1>
              Social Score: <span style={{ color: '#e481ff' }}>{selectedGame[0].Score}</span>
            </h1>
            <br />
            <hr style={{ borderColor: '#5a6b7a' }} />
            <br />
            <br />
            <Button color="info" variant="contained" href={selectedGame[0].Web} target="_blank">
              {selectedGame[0].Name} Website
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="success" variant="contained" href={selectedGame[0].Litepaper} target="_blank">
              {selectedGame[0].Name} Whitepaper
            </Button>
          </>
        )}
      </Modal>

      <Card>
        <CardHeader
          title="Partnerships and Games of Unix Gaming"
          sx={{ mb: 3, textAlign: 'center', margin: '0 auto 20px' }}
        />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead sx={{ background: '#10171f!important' }}>
                <TableRow sx={{ background: '#10171f!important' }}>
                  <TableCell>Name</TableCell>
                  <TableCell>Access</TableCell>
                  <TableCell>Device</TableCell>
                  <TableCell>Blockchain</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>

              {filteredGames.map((game, keys) => (
                <TableBody
                  sx={{
                    background: '#303d4a',
                    borderBottom: '10px solid #212B36',
                    borderTop: '10px solid #212B36'
                  }}
                >
                  {game.Order && (
                    <TableRow key={game.Order}>
                      <span onClick={() => setCount(keys)}>
                        <a id={keys} onClick={ShowTokenDetail} style={{ cursor: 'pointer' }}>
                          <TableCell sx={{ display: 'flex' }}>
                            <img
                              src={game.Image}
                              alt={game.Name}
                              style={{ height: '50px', width: '50px', borderRadius: '10px', marginLeft: '-15px' }}
                            />
                            <span style={{ margin: '10px 15px', fontSize: '16px', fontWeight: '900' }}>
                              {game.Name}
                            </span>
                          </TableCell>
                        </a>
                      </span>
                      <TableCell>{game.Label.replace(/[\[\]"]+/g, '')}</TableCell>
                      <TableCell>{game.F2P}</TableCell>
                      <TableCell sx={{ textAlign: 'left' }}>
                        <img
                          src={game.Device.includes('Web') ? '/web.png' : '/none.png'}
                          className={game.Device.includes('Web') ? '' : 'hide'}
                          alt={game.Name}
                          style={{ height: '20px', marginLeft: '10px', display: 'inline' }}
                        />
                        <img
                          src={game.Device.includes('Android') ? '/android.png' : '/none.png'}
                          className={game.Device.includes('Android') ? '' : 'hide'}
                          alt={game.Name}
                          style={{ height: '20px', marginLeft: '10px', display: 'inline' }}
                        />
                        <img
                          src={game.Device.includes('Windows') ? '/windows.png' : '/none.png'}
                          className={game.Device.includes('Windows') ? '' : 'hide'}
                          alt={game.Name}
                          style={{ height: '20px', marginLeft: '10px', display: 'inline' }}
                        />
                        <img
                          src={game.Device.includes('iOS') ? '/apple.png' : '/none.png'}
                          className={game.Device.includes('iOS') ? '' : 'hide'}
                          alt={game.Name}
                          style={{ height: '20px', marginLeft: '10px', display: 'inline' }}
                        />
                      </TableCell>
                      <TableCell>
                        <Avatar src={game.Blockicon} alt={game.Name} sx={{ height: '30px', width: '30px' }} />
                      </TableCell>
                      <TableCell>{game.Score}</TableCell>
                      <TableCell sx={{ textAlign: 'left' }}>
                        <Label
                          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                          color={
                            (game.Status === 'Presale' && 'warning') ||
                            (game.Status === 'Develop' && 'error') ||
                            'success'
                          }
                        >
                          {game.Status}
                        </Label>
                      </TableCell>
                      <TableCell>
                        <div className={game.Ticker.includes('axie-infinity') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('axie-infinity') ? axies : 'NA'}</b>
                        </div>
                        <div className={game.Ticker.includes('star-atlas') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('star-atlas') ? staratlas : 'NA'}</b>
                        </div>
                        <div className={game.Ticker.includes('sipher') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('sipher') ? sipher : 'NA'}</b>
                        </div>
                        <div className={game.Ticker.includes('splinterlands') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('splinterlands') ? splinterlands : 'NA'}</b>
                        </div>
                        <div className={game.Ticker.includes('sandbox') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('sandbox') ? sandbox : 'NA'}</b>
                        </div>
                        <div className={game.Ticker.includes('alien-worlds') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('alien-worlds') ? alienworlds : 'NA'}</b>
                        </div>
                        <div className={game.Ticker.includes('plant-vs-undead-token') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('plant-vs-undead-token') ? plant : 'NA'}</b>
                        </div>
                        <div className={game.Ticker.includes('binemon') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('binemon') ? binemon : 'NA'}</b>
                        </div>
                        <div className={game.Ticker.includes('heroes-empires') ? '' : 'hide'}>
                          <b>${game.Ticker.includes('heroes-empires') ? heroes : 'NA'}</b>
                        </div>
                      </TableCell>
                      {/* <TableCell>${axie}</TableCell> */}
                      {/* <TableCell align="right">
                      <MoreMenuButton />
                    </TableCell> */}
                    </TableRow>
                  )}
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button href="/add-game" size="small" color="inherit" endIcon={<Icon icon={arrowIosForwardFill} />}>
            Add New Games
          </Button>
        </Box>
      </Card>
    </>
  );
}
