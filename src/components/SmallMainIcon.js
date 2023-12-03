import { Box, SvgIcon } from '@mui/material';
import React from 'react';

import { ReactComponent as Fav } from '../icons/package.svg';
import { commonIcon } from '../utills/common';

export default function SmallMainIon() {
  return (
    <Box
      sx={{
        ...commonIcon,
        height: '100px',
        width: '100px',
      }}
    >
      <SvgIcon
        component={Fav}
        inheritViewBox
        color='#c2c2c2'
        sx={{
          marginRight: '10px',
        }}
        fontSize='large'
      />
    </Box>
  );
}
