import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import data from '../data/data.json';
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';

export default function MainContent() {
  return (
    <Box sx={{ backgroundColor: '#0000001a', width: '100vw', p: 3 }}>
      <Box sx={{ width: '80vw' }}>
        <Typography variant='body1' color='error.main' gutterBottom>
          Description
        </Typography>
        <Typography variant='body1' gutterBottom color={'text.secondary'}>
          {data.article.description_long}
        </Typography>
        <Stack direction='row' spacing={2} sx={{ mt: 4 }}>
          <FirstCard />
          <SecondCard />
        </Stack>
      </Box>
    </Box>
  );
}
