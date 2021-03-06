import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Icon } from '@iconify/react';
// material
import { useTheme } from '@mui/material/styles';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';

import shareFill from '@iconify/icons-eva/share-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
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

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon
} from 'react-share';
// utils
import { fCurrency } from '../../utils/formatNumber';
import mockData from '../../utils/mock-data';
//
import Label from '../Label';
import { MIconButton } from '../@material-extend';
import './test.css';

// ----------------------------------------------------------------------

const MOCK_INVOICES = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  price: mockData.number.price(index),
  category: (index === 0 && 'Android') || (index === 2 && 'Mac') || 'Windows'
}));

// ----------------------------------------------------------------------

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
          <Icon icon={shareFill} width={20} height={20} />
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
          <TwitterShareButton url="https://unixgaming.org" title="Unix Gaming | Play to Earn Revolution">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          &nbsp;&nbsp;&nbsp;
          <FacebookShareButton url="https://unixgaming.org" title="Unix Gaming | Play to Earn Revolution">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          &nbsp;&nbsp;&nbsp;
          <WhatsappShareButton url="https://unixgaming.org" title="Unix Gaming | Play to Earn Revolution">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          &nbsp;&nbsp;&nbsp;
          <LinkedinShareButton url="https://unixgaming.org" title="Unix Gaming | Play to Earn Revolution">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </MenuItem>
      </Menu>
    </>
  );
}

export default function GamesList() {
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
  const [guild, setGuild] = useState([]);
  const [bfk, setBfk] = useState([]);
  const [decentraland, setDecentraland] = useState([]);
  const [kart, setKart] = useState([]);

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
        setSipher(res.data.sipher.usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=splinterlands&vs_currencies=usd')
      .then((res) => {
        setSplinterlands(res.data.splinterlands.usd);
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
        setBinemon(res.data.binemon.usd);
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

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=guild-of-guardians&vs_currencies=usd')
      .then((res) => {
        setGuild(res.data['guild-of-guardians'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=bfk-warzone&vs_currencies=usd')
      .then((res) => {
        setBfk(res.data['bfk-warzone'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=decentraland&vs_currencies=usd')
      .then((res) => {
        setDecentraland(res.data.decentraland.usd);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=kart-racing-league&vs_currencies=usd')
      .then((res) => {
        setKart(res.data['kart-racing-league'].usd);
      })
      .catch((error) => console.log(error));
  }, []);

  // ----------------------------------------------------------------------

  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000&page=1&sparkline=false'
      )
      .then((res) => {
        setMoedas(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredMoedas = moedas.filter((moeda) => moeda.symbol.toLowerCase().includes('axs'.toLowerCase()));

  const Moeda = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange,
    /* eslint-disable */
    price_change_percentage_24h,
    /* eslint-disable */
    market_cap_change_percentage_24h
  }) => {
    return (
      <div className="moeda-row">
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableRow sx={{ color: 'white!important' }}>
              <TableCell>
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Symbol:{' '}
                </span>
                {symbol}
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>Price: </span>
                ${price}
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  24hr Price Change %:{' '}
                </span>
                ${price_change_percentage_24h}
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Market Cap Change %:{' '}
                </span>
                ${market_cap_change_percentage_24h}
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Volume:{' '}
                </span>
                ${volume.toLocaleString()}
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Price Change:{' '}
                </span>
                {priceChange.toFixed(2)}%
              </TableCell>
              <TableCell>
                {' '}
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Market Cap:{' '}
                </span>{' '}
                ${marketcap.toLocaleString()}
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </div>
    );
  };

  // ----------------------------------------------------------------------

  return (
    <>
      <Modal isOpen={extra} onRequestClose={ShowTokenDetail} style={modalPopup}>
        {/* <CloseModal onClick={showTokenDetail} className="close-modal">???</CloseModal> */}

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
            {selectedGame[0].Description && (
              <>
                <h4 style={{ fontWeight: '400' }}>{selectedGame[0].Description}</h4>
                <br />
              </>
            )}
            {selectedGame[0].Contract && (
              <h4>
                Contract Address:{' '}
                <span style={{ fontWeight: '400!important', color: '#e481ff' }}> {selectedGame[0].Contract}</span>
              </h4>
            )}
            {selectedGame[0].Score && (
              <>
                <br />
                <h2>
                  Social Score: <span style={{ color: '#e481ff' }}>{selectedGame[0].Score}</span>
                </h2>
              </>
            )}
            {selectedGame[0].Name.includes('Axie') && (
              <>
                <br />
                <hr style={{ borderColor: '#5a6b7a' }} />
                <br />

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  {filteredMoedas.map((moeda) => {
                    return (
                      <Moeda
                        key={moeda.id}
                        name={moeda.name}
                        price={moeda.current_price}
                        symbol={moeda.symbol}
                        marketcap={moeda.market_cap}
                        price_change_percentage_24h={moeda.price_change_percentage_24h}
                        market_cap_change_percentage_24h={moeda.market_cap_change_percentage_24h}
                        volume={moeda.total_volume}
                        image={moeda.image}
                        priceChange={moeda.price_change_percentage_24h}
                      />
                    );
                  })}
                </div>
              </>
            )}
            {selectedGame[0].Tokens && (
              <>
                <br />
                <hr style={{ borderColor: '#5a6b7a' }} />
                <br />
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <TableContainer sx={{ minWidth: 720 }}>
                    <Table>
                      <TableRow sx={{ color: 'white!important' }}>
                        {selectedGame[0].Tokens && (
                          <>
                            <TableCell>
                              <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                                Total Tokens:{' '}
                              </span>
                              {selectedGame[0].Tokens}
                            </TableCell>
                          </>
                        )}
                        {selectedGame[0].Raise && (
                          <>
                            <TableCell>
                              <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                                Total Raised:{' '}
                              </span>
                              {selectedGame[0].Raise}
                            </TableCell>
                          </>
                        )}
                        {selectedGame[0].Seed && (
                          <>
                            <TableCell>
                              <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                                Seed Token %:{' '}
                              </span>
                              {selectedGame[0].Seed}
                            </TableCell>
                          </>
                        )}
                        {selectedGame[0].Private && (
                          <>
                            <TableCell>
                              <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                                Private Token %:{' '}
                              </span>
                              {selectedGame[0].Private}
                            </TableCell>
                          </>
                        )}
                        {selectedGame[0].Ido && (
                          <>
                            <TableCell>
                              <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                                IDO Tokens %:{' '}
                              </span>
                              {selectedGame[0].Ido}
                            </TableCell>
                          </>
                        )}
                        {selectedGame[0].Diluted && (
                          <>
                            <TableCell>
                              {' '}
                              <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                                Fully Diluted Market Cap:{' '}
                              </span>{' '}
                              {selectedGame[0].Diluted}
                            </TableCell>
                          </>
                        )}
                        {selectedGame[0].Circulation && (
                          <>
                            <TableCell>
                              {' '}
                              <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                                Circulation:{' '}
                              </span>{' '}
                              {selectedGame[0].Circulation}
                            </TableCell>
                          </>
                        )}
                      </TableRow>
                    </Table>
                  </TableContainer>
                  <br />
                </div>
              </>
            )}
            {selectedGame[0].Trailer && (
              <>
                <br />
                <hr style={{ borderColor: '#5a6b7a' }} />
                <br />
                <div style={{ display: 'flex', width: '100%' }}>
                  <>
                    <img src={selectedGame[0].Trailer} alt="game" height="150" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={selectedGame[0].Trailer1} alt="game" height="150" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={selectedGame[0].Trailer2} alt="game" height="150" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={selectedGame[0].Trailer3} alt="game" height="150" />
                  </>
                </div>
              </>
            )}
            <br />
            <hr style={{ borderColor: '#5a6b7a' }} />
            {selectedGame[0].Team && (
              <>
                <br />
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>Team: </span>
                {selectedGame[0].Team}
              </>
            )}
            {selectedGame[0].Partners && (
              <>
                <br />
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Partners:{' '}
                </span>
                {selectedGame[0].Partners}
              </>
            )}
            {selectedGame[0].Launchpad && (
              <>
                <br />
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Launchpad:{' '}
                </span>
                {selectedGame[0].Launchpad}
              </>
            )}
            {selectedGame[0].Network && (
              <>
                <br />
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Network:{' '}
                </span>
                {selectedGame[0].Network}
              </>
            )}
            {selectedGame[0].NFTs && (
              <>
                <br />
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Available NFTs:{' '}
                </span>
                {selectedGame[0].NFTs}
              </>
            )}
            {selectedGame[0].Land && (
              <>
                <br />
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  Avalailable Land NFTs:{' '}
                </span>
                {selectedGame[0].Land}
              </>
            )}
            {selectedGame[0].Speciality && (
              <>
                <br />
                <span style={{ fontWeight: '900', color: '#e481ff', display: 'block', margin: '10px 0' }}>
                  What makes the game special:{' '}
                </span>
                {selectedGame[0].Speciality}
              </>
            )}
            <br />
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

      <Card sx={{ background: 'rgba(27, 17, 38, 0.7)' }}>
        {/* <CardHeader
          title="Partnerships and Games of Unix Gaming"
          sx={{ mb: 3, textAlign: 'center', margin: '0 auto 20px' }}
        /> */}

        <TableContainer sx={{ minWidth: 720, height: '100%', overflow: 'hidden', background: 'rgba(27, 17, 38, 0.7)' }}>
          <Table sx={{ minWidth: 720, height: '100%', background: 'rgba(27, 17, 38, 0.7)' }}>
            {/* <TableHead sx={{ background: '#10171f!important' }}>
              <TableRow sx={{ background: '#10171f!important' }}>
                <TableCell>Name</TableCell>
                <TableCell>Access</TableCell>
                <TableCell>Device</TableCell>
                <TableCell>Blockchain</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead> */}

            {filteredGames.map((game, keys) => (
              <TableBody
                sx={{
                  background: 'rgba(27, 17, 38, 0.7)',
                  borderBottom: '10px solid rgba(27, 17, 38, 0.7)',
                  borderTop: '10px solid rgba(27, 17, 38, 0.7)',
                  height: '100%',
                  overflow: 'hidden'
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
                          <span style={{ margin: '10px 15px', fontSize: '16px', fontWeight: '900' }}>{game.Name}</span>
                        </TableCell>
                      </a>
                    </span>
                    <TableCell>{game.Label.replace(/[\[\]"]+/g, '')}</TableCell>
                    <TableCell sx={{ textAlign: 'left', width: '200px' }}>
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
                      <div className={game.Ticker.includes('guild-of-guardians') ? '' : 'hide'}>
                        <b>${game.Ticker.includes('guild-of-guardians') ? guild : 'NA'}</b>
                      </div>
                      <div className={game.Ticker.includes('bfk-warzone') ? '' : 'hide'}>
                        <b>${game.Ticker.includes('bfk-warzone') ? bfk : 'NA'}</b>
                      </div>
                      <div className={game.Ticker.includes('decentraland') ? '' : 'hide'}>
                        <b>${game.Ticker.includes('decentraland') ? decentraland : 'NA'}</b>
                      </div>
                      <div className={game.Ticker.includes('kart-racing-league') ? '' : 'hide'}>
                        <b>${game.Ticker.includes('kart-racing-league') ? kart : 'NA'}</b>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <MoreMenuButton />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            ))}
          </Table>
        </TableContainer>

        <Divider />

        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button href="/unix/add-game" size="small" color="inherit" endIcon={<Icon icon={arrowIosForwardFill} />}>
            Add New Games
          </Button>
        </Box>
      </Card>
    </>
  );
}
