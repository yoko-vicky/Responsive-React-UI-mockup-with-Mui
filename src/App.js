import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import { Box, Stack, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add';

function App() {
  const [mode, setMode] = useState('light');

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const themeForMode = createTheme({
    palette: {
      // @ts-ignore
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={themeForMode}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <Sidebar handleModeChange={handleModeChange} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
