import React from 'react';
import { Typography } from '@mui/material';

export default function FeatureItem({ firstText, secondText }) {
  return (
    <li>
      <Typography sx={{ fontSize: 14 }} color='text.secondary'>
        {firstText} :
        <Typography
          component={'span'}
          sx={{ fontSize: 14 }}
          color='text.primary'
        >
          {' '}
          {secondText}
        </Typography>
      </Typography>
    </li>
  );
}
