import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';

function Feed() {
  return (
    <Box flex={3} p={2} sx={{ marginLeft: { xs: 0 } }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
