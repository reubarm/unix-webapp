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
  console.log(select);

  // const thegame = "1";
  const selectedGame = games.filter((game) => game.Order === select);
  // var keys = Object.keys(selectedGame);
  // console.log(keys)

  const [extra, openExtra] = useState(false);

  function showTokenDetail() {
    openExtra(!extra);
  }

  return (
    <>
      {/* eslint-disable */}
      <Modal isOpen={extra} onRequestClose={showTokenDetail} style={modalPopup}>
        {/* <CloseModal onClick={showTokenDetail} className="close-modal">✖</CloseModal> */}

        {selectedGame[0] && (
          <>
            <div style={{ display: 'flex' }}>
              <Avatar src={selectedGame[0].Image} alt={selectedGame[0].Name} sx={{ height: '100px', width: '100px' }} />

              <h1 style={{ margin: '20px' }}>{selectedGame[0].Name}</h1>
            </div>
            <br />
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
              {/* <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Blockchain</TableCell>
                <TableCell>NFT</TableCell>
                <TableCell>Device</TableCell>
                <TableCell>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead> */}

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
                      <a id={keys} onClick={showTokenDetail} style={{ cursor: 'pointer' }}>
                        <TableCell sx={{ display: 'flex' }}>
                          <Avatar src={game.Image} alt={game.Name} />
                          <span style={{ margin: '10px 20px', fontSize: '16px', fontWeight: '900' }}>{game.Name}</span>
                        </TableCell>
                      </a>
                    </span>
                    {/* <TableCell>{game.Genre}</TableCell> */}
                    {/* <TableCell>{game.Blockchain}</TableCell> */}
                    <TableCell>{game.F2P}</TableCell>
                    <TableCell>{game.P2E}</TableCell>
                    <TableCell>
                      <Avatar src={game.Blockicon} alt={game.Name} />
                    </TableCell>
                    <TableCell sx={{ textAlign: 'right' }}>
                      <Label
                        variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                        color={
                          (game.Status === 'Develop' && 'warning') || (game.Status === 'BETA' && 'error') || 'success'
                        }
                      >
                        {game.Status}
                      </Label>
                    </TableCell>
                    <TableCell align="right">
                      <MoreMenuButton />
                    </TableCell>
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
