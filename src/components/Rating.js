import { Stack, SvgIcon } from '@mui/material';
import React from 'react';

import { ReactComponent as StarFilled } from '../icons/star-filled.svg';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rating() {
  return (
    <Stack direction='row' spacing={1} sx={{ mt: 1, mb: 2 }}>
      <SvgIcon component={StarFilled} inheritViewBox color={'reviewColor'} />
      <SvgIcon component={StarFilled} inheritViewBox color={'reviewColor'} />
      <SvgIcon component={StarFilled} inheritViewBox color={'reviewColor'} />

      <SvgIcon component={Star} inheritViewBox color='grey[600]' />
      <SvgIcon component={Star} inheritViewBox color='grey[600]' />
    </Stack>
  );
}
