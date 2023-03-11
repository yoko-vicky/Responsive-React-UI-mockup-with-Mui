import { Button, styled, Typography } from '@mui/material';
import React from 'react';

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'tomato',
    },
    '&:disabled': {
      backgroundColor: 'grey',
      color: 'white',
    },
  });

  return (
    <div>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>My Button 2</BlueButton>
    </div>
  );
}

export default App;
