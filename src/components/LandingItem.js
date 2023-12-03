import { Box, Button, Input, Stack, SvgIcon, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { ReactComponent as DiscountIcon } from '../icons/discount.svg';
import data from '../data/data.json';
import { lightBlue } from '@mui/material/colors';
import SmallMainIon from './SmallMainIcon';
import LargeMainIcon from './LargeMainIcon';
import Rating from './Rating';
import CartCounter from './CartCounter';
import { flexColumn } from '../utills/common';

const blueCustom = lightBlue[300];

export default function LandingItem({ setShow, result, setResult }) {
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    console.log('react bottom', rect.top, rect.bottom);
    return (
      rect.top + 305 >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  useEffect(() => {
    let myElement = document.getElementById('myID');
    document.addEventListener('scroll', function () {
      const messageText = isInViewport(myElement) ? true : false;

      console.log('messagetext ', messageText);
      setShow(messageText);
    });
  }, []);

  return (
    <Stack
      id='myID'
      direction='row'
      spacing={2}
      sx={{ p: 3, mt: 1, width: '80vw' }}
    >
      <Stack spacing={2}>
        <SmallMainIon />
        <SmallMainIon />
      </Stack>
      <LargeMainIcon />
      <div style={{ ...flexColumn }}>
        <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
          {data.article.title}
        </Typography>
        <Typography variant='body1' gutterBottom color={'text.secondary'}>
          by{' '}
          <Typography
            component={'span'}
            sx={{ fontSize: 14, fontWeight: 400 }}
            color={blueCustom}
          >
            {' '}
            {data.article.supplier_name}
          </Typography>
        </Typography>
        <Rating />
        <Stack direction='row' spacing={1}>
          <Typography variant='body1' gutterBottom>
            {data.article.price}
            <Typography
              component={'span'}
              sx={{ fontSize: 14, fontWeight: 400 }}
              color={'text.secondary'}
            >
              {' '}
              + {data.article.transport_costs} {data.article.currency} shipping
            </Typography>
          </Typography>
          <SvgIcon
            component={DiscountIcon}
            inheritViewBox
            color='grey[600]'
            // fontSize={'20px'}
          />
        </Stack>
        <Typography variant='body1' gutterBottom color='text.secondary'>
          all prices incl. {data.article.vat_percent} % taxes
        </Typography>
        <div style={{ marginTop: 'auto' }}>
          <CartCounter result={result} setResult={setResult} />
        </div>
      </div>
    </Stack>
  );
}
