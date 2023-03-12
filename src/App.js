import { Button, styled, Typography } from '@mui/material';
import React from 'react';

function App() {
  // @ts-ignore
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'tomato',
    },
    '&:disabled': {
      backgroundColor: 'grey',
      color: 'white',
    },
  }));

  return (
    <div>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Button color="primary" variant="contained">
        Button
      </Button>
      <Button color="secondary" variant="outlined">
        Button
      </Button>
      <Button
        // @ts-ignore
        color="mycolor"
        variant="outlined"
      >
        Button
      </Button>
      <BlueButton>BlueButton 1</BlueButton>
      <BlueButton disabled>BlueButton 2</BlueButton>
    </div>
  );
}

export default App;
