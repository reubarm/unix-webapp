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
  category: (index === 0 && 'Android') || (index === 2 && 'Mac') || 'Windows',
  status: (index === 0 && 'paid') || (index === 2 && 'out_of_date') || 'in_progress'
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
    top: '100px',
    left: '200px',
    right: '200px',
    bottom: '100px',
    color: '#fff!important',
    padding: '50px 100px',
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
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${selectedGame[0].Ticker}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
      {
        method: 'GET'
      }
    )
      .then((r) => r.json())
      .then((data) => {
        setStats(data[selectedGame[0].Ticker]);
        console.log(data[selectedGame[0].Ticker]);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <div style={{ display: 'flex' }}>
              <Avatar src={selectedGame[0].Image} alt={selectedGame[0].Name} sx={{ height: '100px', width: '100px' }} />
              <h1 style={{ margin: '20px' }}>{selectedGame[0].Name}</h1>
            </div>

            {/* <br />
            <h1 style={{ margin: '20px' }}>{stats.usd}</h1>
            <br />
            <h1 style={{ margin: '20px' }}>{stats.usd_24h_change}</h1>
            <br />
            <h1 style={{ margin: '20px' }}>{stats.usd_24h_vol}</h1>
            <br />
            <h1 style={{ margin: '20px' }}>{stats.usd_market_cap}</h1>
            <br />*/}
            <br />
            <hr />
            <br />
            <h3>{selectedGame[0].Description}</h3>
            <br /> 
            <hr />
            <br />
            <h3>
              Blockchain:&nbsp;&nbsp;
              <img src={selectedGame[0].Blockicon} height="20" style={{ display: 'inline' }} />
              &nbsp;&nbsp;
              <span style={{ color: '#e481ff' }}>{selectedGame[0].Blockchain}</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Device:&nbsp;&nbsp;
              <span style={{ color: '#e481ff' }}>{selectedGame[0].Device}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Status:&nbsp;&nbsp;
              <span style={{ color: '#e481ff' }}>{selectedGame[0].Status}</span>
              <br />
              <br />
              NFT: &nbsp;&nbsp;
              <span style={{ color: '#e481ff' }}>{selectedGame[0].NFT}</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; F2P: &nbsp;&nbsp;
              <span style={{ color: '#e481ff' }}>{selectedGame[0].F2P}</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; P2E:&nbsp;&nbsp;
              <span style={{ color: '#e481ff' }}>{selectedGame[0].P2E}</span>
            </h3>
            <br />
            <hr />
            <br />
            <h1>
              Social Score: <span style={{ color: '#e481ff' }}>{selectedGame[0].Score}</span>
            </h1>
            <br />
            <hr />
            <br />
            <br />
            <Button variant="contained" href={selectedGame[0].Web} target="_blank">
              Visit {selectedGame[0].Name} Website
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
                    borderBottom: '15px solid #212B36',
                    borderTop: '15px solid #212B36'
                  }}
                >
                  <TableRow key={game.Order}>
                    <span onClick={() => setCount(keys)}>
                      <a id={keys} onClick={ShowTokenDetail} style={{ cursor: 'pointer' }}>
                        <TableCell sx={{ display: 'flex' }}>
                          <img
                            src={game.Image}
                            alt={game.Name}
                            style={{ height: '60px', width: '60px', borderRadius: '10px', marginLeft: '-15px' }}
                          />
                          <span style={{ margin: '20px', fontSize: '16px', fontWeight: '900' }}>{game.Name}</span>
                        </TableCell>
                      </a>
                    </span>
                    {/* <TableCell>{game.Blockchain}</TableCell> */}
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
                          (game.Status === 'Develop' && 'warning') || (game.Status === 'BETA' && 'error') || 'success'
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
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button
            to="#"
            size="small"
            color="inherit"
            component={RouterLink}
            endIcon={<Icon icon={arrowIosForwardFill} />}
          >
            View All
          </Button>
        </Box>
      </Card>
    </>
  );
}
