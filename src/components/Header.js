import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import { Divider } from '@mui/material';

import data from '../data/data.json';
import { ReactComponent as Fav } from '../icons/favorite.svg';
import { ReactComponent as Facts } from '../icons/facts-soft.svg';
import { ReactComponent as CartIcon } from '../icons/cart.svg';
import CartCounter from './CartCounter';

export default function Header({ show, result, setResult }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let dummyEl = document.getElementById('myID');

    // check for focus
    let isFocused = document.activeElement === dummyEl;
    // Function to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true); // Set the state to true when scrolled more than 100 pixels
      } else {
        setScrolled(false); // Set the state to false when scrolled back to top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean-up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // console.log('isScroll', isScroll);

  return (
    <AppBar
      component='nav'
      elevation={scrolled ? 1 : 0}
      sx={{
        backgroundColor: '#fff',
        color: 'error.main',
        borderBottom: '1px solid #A9A9A9',
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          // onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          {data.article.title}
        </Typography>
        {!show && <CartCounter result={result} setResult={setResult} />}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
              m: 1.0,
            },
          }}
        >
          <SvgIcon
            component={Fav}
            inheritViewBox
            color='secondary'
            sx={{
              marginRight: '10px',
            }}
          />
          <SvgIcon
            component={Facts}
            inheritViewBox
            color='secondary'
            sx={{
              marginRight: '10px',
            }}
          />
          <Divider orientation='vertical' flexItem />
          <Box sx={{ position: 'relative' }}>
            <SvgIcon component={CartIcon} inheritViewBox color='secondary' />
            <p
              style={{
                position: 'absolute',
                top: -15,
                left: 25,
                borderRadius: '50%',
              }}
            >
              5
            </p>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
