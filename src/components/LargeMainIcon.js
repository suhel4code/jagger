import { Box, SvgIcon } from '@mui/material';
import React from 'react';

import { ReactComponent as Fav } from '../icons/package.svg';
import { ReactComponent as ZoomIn } from '../icons/zoom-in.svg';
import { commonIcon } from '../utills/common';

export default function LargeMainIcon() {
  return (
    <Box
      sx={{
        height: '350px',
        width: '350px',
        ...commonIcon,
        position: 'relative',
      }}
    >
      <SvgIcon
        component={Fav}
        inheritViewBox
        color='grey[600]'
        fontSize='large'
      />
      <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
        <SvgIcon
          component={ZoomIn}
          inheritViewBox
          color='grey[600]'
          sx={{
            marginRight: '10px',
          }}
          fontSize='large'
        />
      </Box>
    </Box>
  );
}
