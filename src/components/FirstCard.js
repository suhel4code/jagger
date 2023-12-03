import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Divider, Stack, SvgIcon } from '@mui/material';
import { ReactComponent as AttachIcon } from '../icons/attachment.svg';

import data from '../data/data.json';
import { lightBlue } from '@mui/material/colors';
import FeatureItem from './FeatureItem';

const blueCustom = lightBlue[300];

const AttachItem = ({ text }) => (
  <Stack direction={'row'} spacing={1}>
    <SvgIcon
      fontSize={'15px'}
      component={AttachIcon}
      inheritViewBox
      color='grey[600]'
    />

    <Typography sx={{ fontSize: 14 }} color={blueCustom}>
      {text}
    </Typography>
  </Stack>
);

export default function FirstCard() {
  return (
    <Card sx={{ width: '50%' }} elevation={0}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='error.main' gutterBottom>
          DETAILS
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography sx={{ fontSize: 14 }} color='text.secondary'>
          Features
        </Typography>
        <ul style={{ margin: 0, padding: 0, paddingLeft: '15px' }}>
          <FeatureItem
            firstText={'Feature XYZ'}
            secondText={'Lorem ipsum dolor sit amet'}
          />
          <FeatureItem
            firstText={'Feature ABC'}
            secondText={'Lorem ipsum dolor sit amet consectetur'}
          />
        </ul>

        <Typography
          sx={{ fontSize: 14, my: 1 }}
          color='text.secondary'
          gutterBottom
        >
          Attachments
        </Typography>
        <AttachItem text={data.article.attachments[0].file_label} />
        <AttachItem text={data.article.attachments[1].file_label} />

        <Typography
          sx={{ fontSize: 14, mt: 2 }}
          color='text.secondary'
          gutterBottom
        >
          Keywords
        </Typography>
        <Stack direction={'row'}>
          {data.article.keywords.map((item) => {
            return (
              <Chip
                sx={{ ml: 1, mt: 1 }}
                label={item.toUpperCase()}
                key={item}
              />
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}
