import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material';
import React, { useState } from 'react';

import { ReactComponent as AddIcon } from '../icons/add.svg';
import data from '../data/data.json';

export default function CartCounter({ result, setResult }) {
  return (
    <Stack direction={'row'} spacing={2}>
      <Box
        sx={{
          border: '1px solid #c2c2c2',
          height: '30px',
          width: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'text.secondary',
        }}
      >
        {result}
      </Box>
      <Typography
        variant='body1'
        sx={{ marginTop: '10px' }}
        color='text.secondary'
      >
        {data.article.unit}
      </Typography>
      <Button
        color='error'
        disableElevation
        variant='contained'
        sx={{
          marginRight: '10px',
          borderRadius: 0,
          // width: '50px',
        }}
        startIcon={
          <SvgIcon component={AddIcon} inheritViewBox color='grey[600]' />
        }
        onClick={() => setResult((res) => res + 1)}
      >
        Add to cart
      </Button>
    </Stack>
  );
}
