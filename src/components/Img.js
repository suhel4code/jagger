import React from 'react';

export default function CustomImg({ src }) {
  return (
    // <img style={{ color: 'white' }} src={src} height={'45px'} width={'45px'} />
    // <Fav style={{ widht: '80px', height: '80px', color: 'black' }} />
    <SvgIcon component={Fav} inheritViewBox color='error' />
  );
}
