import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import LandingItem from './components/LandingItem';
import MainContent from './components/MainContent';
import { Toolbar } from '@mui/material';

export default function App() {
  const [show, setShow] = useState(true);
  const [result, setResult] = useState(1);

  console.log('show is', show);

  return (
    <Box>
      <CssBaseline />
      <Header show={show} result={result} setResult={setResult} />
      <Box component='main'>
        <Toolbar />
        <LandingItem
          show={show}
          setShow={(val) => {
            setShow(val);
          }}
          result={result}
          setResult={setResult}
        />
        <MainContent />
      </Box>
    </Box>
  );
}
