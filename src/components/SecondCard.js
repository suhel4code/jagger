import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, List, ListItem, ListItemText } from '@mui/material';

import data from '../data/data.json';
import FeatureItem from './FeatureItem';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SecondCard() {
  const entries = Object.entries(data.article.price_breaks);

  return (
    <Card sx={{ width: '50%' }} elevation={0}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='error.main' gutterBottom>
          PRICE & SHIPPING
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <ul style={{ margin: 0, padding: 0, paddingLeft: '14px' }}>
          <FeatureItem firstText={'Minimum Order'} secondText={'10 PCE'} />
          <FeatureItem firstText={'Shipping'} secondText={'680,96 EUR'} />
          <FeatureItem firstText={'Delivery'} secondText={'12 days'} />
        </ul>
        <Typography
          sx={{ fontSize: 14, mt: 3 }}
          color='text.secondary'
          gutterBottom
        >
          Price breaks
        </Typography>

        <List dense>
          {entries.map(([key, value]) => (
            <React.Fragment key={value}>
              <Divider />
              <ListItem>
                <ListItemText primary={`ex ${key} PCE    ${value} EUR/PCE`} />
              </ListItem>
            </React.Fragment>
          ))}
          <Divider />
        </List>
      </CardContent>
    </Card>
  );
}
